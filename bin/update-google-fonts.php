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
		$this->old_fonts = include '.' . self::FILE_PATH;
		$this->run_update();
	}

	/**
	 * Run fonts update.
	 */
	private function run_update() {
		echo 'Fetching fonts... ⏬' . "\n";

		$new_fonts = $this->get_fonts();

		$has_new_fonts = array_diff( array_keys( $new_fonts ), array_keys( $this->old_fonts ) );

		$has_new_variants = false;
		foreach ( $new_fonts as $font => $variants ) {
			if ( count( $variants ) === count( $this->old_fonts[ $font ] ) ) {
				continue;
			}

			$has_new_variants = true;
		}

		if ( empty( $has_new_fonts ) && $has_new_variants === false ) {
			echo 'No need to update. Old fonts are already up to date with the API ✅' . "\n";

			return;
		}

		if ( ! empty( $has_new_fonts ) ) {
			echo 'There are new fonts... ⏬' . "\n";
		}
		if ( $has_new_variants === true ) {
			echo 'There are new variants... ⏬' . "\n";
		}

		$fonts_array_string = 'array(' . "\n";

		foreach ( $new_fonts as $font => $variants ) {
			// No variants, empty array.
			if ( empty( $variants ) ) {
				$fonts_array_string .= '	\'' . $font . '\' => array(),' . "\n";
			} else {
				$fonts_array_string .= '	\'' . $font . '\' => array(';
				foreach ( $variants as $variant ) {
					$fonts_array_string .= " '$variant',";
				}
				$fonts_array_string .= '),' . "\n";
			}
		}

		$fonts_array_string .= ");\n";

		$now    = gmdate( 'd/m/y' );
		$output = <<<PHP
<?php
/**
 * Updated on $now
 *
 * @package neve
 */
return $fonts_array_string
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
		$body    = json_decode( $request );

		// Unknown variants. These are not provided by the API.
		$fonts_array = [
			'Droid Sans'      => [],
			'Droid Sans Mono' => [],
			'Droid Serif'     => [],
		];

		foreach ( $body->items as $font ) {
			$fonts_array[ $font->family ] = $this->get_variants( $font->variants );
		}

		foreach ( $this->old_fonts as $font_family => $data ) {
			if ( isset( $fonts_array[ $font_family ] ) ) {
				continue;
			}

			// These fonts won't have variants as google considers them deprecated anyways.
			// They are here only for backwards compatibility.
			$fonts_array[ $font_family ] = [];
		}

		ksort( $fonts_array );

		return $fonts_array;
	}

	/**
	 * Get font variants
	 *
	 * @param array $variants font variants from API.
	 *
	 * @return array|array[]
	 */
	private function get_variants( $variants ) {
		$regular = [];
		$italics = [];

		foreach ( $variants as $variant ) {
			if ( $variant === 'regular' ) {
				$variant = '400';
			}

			if ( $variant === 'italic' ) {
				$variant = '400italic';
			}

			if ( strpos( $variant, 'italic' ) !== false ) {
				$italics[] = $variant;
			} else {
				$regular[] = $variant;
			}
		}

		return array_merge( $regular, $italics );
	}
}

new GoogleFontsUpdater( $argv[1] );
