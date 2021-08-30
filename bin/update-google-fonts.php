<?php
/**
 * Handles google fonts array update.
 *
 * @package neve-ci
 */

/**
 * Google Fonts Updater.
 */
class GoogleFontsUpdater {
	/**
	 * API Key
	 *
	 * @var string
	 */
	private $api_key = '';

	/**
	 * Old fonts
	 *
	 * @var array
	 */
	private $old_fonts = [];

	/**
	 * Fonts file path.
	 */
	const FILE_PATH = '/globals/google-fonts.php';

	/**
	 * Google Fonts API Root
	 */
	const API = 'https://www.googleapis.com/webfonts/v1/webfonts';

	/**
	 * Class constructor.
	 *
	 * @param string $google_api_key the google API key.
	 */
	public function __construct( $google_api_key ) {
		$this->api_key   = $google_api_key;
		$this->old_fonts = include './' . self::FILE_PATH;
		$this->run_update();
	}

	/**
	 * Run fonts update.
	 */
	private function run_update() {
		echo 'Fetching fonts... ⏬' . "\n";

		$new_fonts = $this->get_fonts();

		$different = array_diff( $new_fonts, $this->old_fonts );

		if ( empty( $different ) ) {
			echo 'No need to update. Old fonts are already up to date with the API ✅' . "\n";

			return;
		}

		$fonts_array_string = 'array(' . "\n";

		foreach ( $new_fonts as $font ) {
			$fonts_array_string .= '	\'' . $font . '\',' . "\n";
		}

		$fonts_array_string .= ')';

		$now    = gmdate( 'd/m/y' );
		$output = <<<PHP
<?php
/**
 * Updated on $now
 *
 * @package neve
 */
return $fonts_array_string;
PHP;

		file_put_contents( dirname( __DIR__ ) . self::FILE_PATH, $output ); //phpcs:ignore

		echo 'Fonts updated ✅' . "\n";
	}

	/**
	 * Get google fonts.
	 *
	 * @return array
	 */
	private function get_fonts() {
		$url     = self::API . '?key=' . $this->api_key;
		$request = file_get_contents( $url ); //phpcs:ignore
		$body    = json_decode( $request, true );

		$fonts_array = [
			'Droid Sans',
			'Droid Sans Mono',
			'Droid Serif',
		];

		foreach ( $body['items'] as $item ) {
			$fonts_array[] = $item['family'];
		}

		if ( ! empty( $this->old_fonts ) ) {
			$fonts_array = array_unique( array_merge( $this->old_fonts, $fonts_array ) );
		}

		sort( $fonts_array );

		return $fonts_array;
	}
}

new GoogleFontsUpdater( $argv[1] );
