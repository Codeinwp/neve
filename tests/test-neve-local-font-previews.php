<?php
/**
 * Tests for the customizer font previews when fonts are hosted locally.
 *
 * @package neve
 */

use Neve\Core\Settings\Config;

/**
 * Class TestNeveLocalFontPreviews
 */
class TestNeveLocalFontPreviews extends WP_UnitTestCase {

	/**
	 * Fonts folder base path used instead of wp-content.
	 *
	 * @var string
	 */
	private $base_path;

	/**
	 * Filesystem instance to restore after each test.
	 *
	 * @var WP_Filesystem_Base|null
	 */
	private $wp_filesystem;

	/**
	 * Filesystem method WordPress resolves to in the current test.
	 *
	 * @var string
	 */
	private $filesystem_method = '';

	/**
	 * Cached stylesheet a frontend visit would have downloaded.
	 *
	 * @var string
	 */
	private $cached_css = "@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(http://example.org/wp-content/fonts/roboto-slab/abc.woff2) format('woff2');\n}\n";

	/**
	 * Point the webfont loader at a fresh temporary folder.
	 */
	public function set_up(): void {
		parent::set_up();

		$this->base_path = get_temp_dir() . uniqid( 'neve-local-font-previews-', true );

		if ( ! wp_mkdir_p( $this->base_path . '/fonts' ) ) {
			$this->fail( 'Could not create the fonts fixture folder.' );
		}

		add_filter( 'wptt_get_local_fonts_base_path', array( $this, 'get_base_path' ) );
		$GLOBALS['wp_styles'] = null;
		$this->wp_filesystem  = $GLOBALS['wp_filesystem'] ?? null;
	}

	/**
	 * Drop the fixtures and every hook, option and style the tests touched.
	 */
	public function tear_down(): void {
		foreach ( glob( $this->base_path . '/fonts/*' ) as $file ) {
			unlink( $file );
		}
		rmdir( $this->base_path . '/fonts' );
		rmdir( $this->base_path );

		remove_filter( 'wptt_get_local_fonts_base_path', array( $this, 'get_base_path' ) );
		remove_filter( 'neve_load_remote_fonts_locally', '__return_true' );
		remove_filter( 'filesystem_method', array( $this, 'get_filesystem_method' ) );
		$GLOBALS['wp_filesystem'] = $this->wp_filesystem;
		delete_option( Config::OPTION_LOCAL_GOOGLE_FONTS_HOSTING );
		wp_clear_scheduled_hook( 'delete_fonts_folder' );
		$GLOBALS['wp_styles'] = null;

		parent::tear_down();
	}

	/**
	 * Fonts folder base path.
	 *
	 * @return string
	 */
	public function get_base_path(): string {
		return $this->base_path;
	}

	/**
	 * Store a stylesheet the frontend local hosting would have cached.
	 */
	private function cache_downloaded_font(): void {
		file_put_contents( $this->base_path . '/fonts/' . md5( 'roboto-slab' ) . '.css', $this->cached_css );
	}

	/**
	 * Enqueue the customizer controls and return the remote preview stylesheet URLs.
	 *
	 * @return list<string>
	 */
	private function enqueue_controls(): array {
		$fonts  = function (): array {
			return array( 'Roboto', 'Roboto Slab', 'Lato', 'Inter', 'Arvo' );
		};
		$styles = wp_styles();

		add_filter( 'neve_google_fonts_array', $fonts );

		try {
			( new \Neve\Customizer\Loader() )->enqueue_customizer_controls();
		} finally {
			remove_filter( 'neve_google_fonts_array', $fonts );
		}

		$urls = array();
		foreach ( $styles->queue as $handle ) {
			if ( strpos( $handle, 'neve-fonts-control-google-fonts-' ) === 0 ) {
				$urls[] = $styles->registered[ $handle ]->src;
			}
		}

		return $urls;
	}

	/**
	 * Inline styles attached to the controls stylesheet.
	 *
	 * @return string
	 */
	private function get_controls_inline_css(): string {
		return implode( "\n", (array) wp_styles()->get_data( 'react-controls', 'after' ) );
	}

	/**
	 * Downloaded faces are previewed locally and left out of the Google requests.
	 */
	public function testDownloadedFontsPreviewLocally(): void {
		update_option( Config::OPTION_LOCAL_GOOGLE_FONTS_HOSTING, true );
		$this->cache_downloaded_font();

		$urls = implode( "\n", $this->enqueue_controls() );

		$this->assertStringContainsString( $this->cached_css, $this->get_controls_inline_css() );
		$this->assertStringNotContainsString( 'Roboto Slab', $urls );
		$this->assertStringContainsString( 'Lato', $urls );
	}

	/**
	 * Neve Pro enables local hosting through the filter, not the option.
	 */
	public function testFilterEnabledLocalHostingPreviewsLocally(): void {
		add_filter( 'neve_load_remote_fonts_locally', '__return_true' );
		$this->cache_downloaded_font();

		$urls = implode( "\n", $this->enqueue_controls() );

		$this->assertStringContainsString( $this->cached_css, $this->get_controls_inline_css() );
		$this->assertStringNotContainsString( 'Roboto Slab', $urls );
	}

	/**
	 * Previews stay remote while local hosting is off.
	 */
	public function testRemotePreviewsWhenLocalHostingOff(): void {
		$this->cache_downloaded_font();

		$urls = implode( "\n", $this->enqueue_controls() );

		$this->assertSame( '', $this->get_controls_inline_css() );
		$this->assertStringContainsString( 'Roboto Slab', $urls );
	}

	/**
	 * Filesystem method forced for the current test.
	 *
	 * @return string
	 */
	public function get_filesystem_method(): string {
		return $this->filesystem_method;
	}

	/**
	 * Filesystem methods that leave no usable filesystem.
	 *
	 * @return array{'no method': array{0: ''}, 'ftp without credentials': array{0: 'ftpext'}}
	 */
	public function provideUnusableFilesystems(): array {
		return array(
			'no method'               => array( '' ),
			'ftp without credentials' => array( 'ftpext' ),
		);
	}

	/**
	 * The controls still load when the filesystem cannot be set up.
	 *
	 * @dataProvider provideUnusableFilesystems
	 *
	 * @param string $method Filesystem method WordPress resolves to.
	 */
	public function testRemotePreviewsWithoutFilesystem( string $method ): void {
		update_option( Config::OPTION_LOCAL_GOOGLE_FONTS_HOSTING, true );
		$this->cache_downloaded_font();

		$GLOBALS['wp_filesystem'] = null;
		$this->filesystem_method  = $method;
		add_filter( 'filesystem_method', array( $this, 'get_filesystem_method' ) );

		$urls = implode( "\n", $this->enqueue_controls() );

		$this->assertSame( '', $this->get_controls_inline_css() );
		$this->assertStringContainsString( 'Roboto Slab', $urls );
	}

	/**
	 * Fonts not downloaded yet keep their remote previews.
	 */
	public function testRemotePreviewsWithEmptyFontCache(): void {
		update_option( Config::OPTION_LOCAL_GOOGLE_FONTS_HOSTING, true );

		$urls = implode( "\n", $this->enqueue_controls() );

		$this->assertSame( '', $this->get_controls_inline_css() );
		$this->assertStringContainsString( 'Roboto Slab', $urls );
	}
}
