<?php
/**
 * Tests for the guarded file-include helpers.
 *
 * @package neve
 */

/**
 * Class TestNeveFileGuards
 */
class TestNeveFileGuards extends WP_UnitTestCase {

	/**
	 * Directory holding the fixture files.
	 *
	 * @var string
	 */
	private $fixture_dir;

	/**
	 * Create the fixture directory.
	 */
	public function set_up() {
		parent::set_up();

		$this->fixture_dir = get_temp_dir() . 'neve-file-guards/';

		if ( ! is_dir( $this->fixture_dir ) ) {
			mkdir( $this->fixture_dir, 0777, true );
		}
	}

	/**
	 * Drop the fixture directory.
	 */
	public function tear_down() {
		foreach ( glob( $this->fixture_dir . '*' ) as $file ) {
			unlink( $file );
		}

		if ( is_dir( $this->fixture_dir ) ) {
			rmdir( $this->fixture_dir );
		}

		parent::tear_down();
	}

	/**
	 * Write a fixture file and return its path.
	 *
	 * @param string $name     File name.
	 * @param string $contents File body.
	 *
	 * @return string
	 */
	private function fixture( $name, $contents ) {
		$path = $this->fixture_dir . $name;
		file_put_contents( $path, $contents );

		return $path;
	}

	/**
	 * A missing file yields the fallback instead of `include`'s false.
	 */
	public function testRequireArrayFallsBackForMissingFile() {
		$this->assertSame(
			array(),
			neve_require_array( $this->fixture_dir . 'does-not-exist.php' )
		);
		$this->assertSame(
			array( 'a' ),
			neve_require_array( $this->fixture_dir . 'does-not-exist.php', array( 'a' ) )
		);
	}

	/**
	 * A directory passed where a file is expected is not includable.
	 */
	public function testRequireArrayFallsBackForDirectory() {
		$this->assertSame( array(), neve_require_array( $this->fixture_dir ) );
	}

	/**
	 * A file that returns something other than an array yields the fallback.
	 */
	public function testRequireArrayFallsBackForNonArrayReturn() {
		$path = $this->fixture( 'scalar.php', '<?php return "not an array";' );

		$this->assertSame( array(), neve_require_array( $path ) );
	}

	/**
	 * A well-formed file returns its array.
	 */
	public function testRequireArrayReturnsFileContents() {
		$path = $this->fixture( 'good.php', '<?php return array( "Roboto" => array( "400" ) );' );

		$this->assertSame( array( 'Roboto' => array( '400' ) ), neve_require_array( $path ) );
	}

	/**
	 * Called twice, the file's array is returned both times.
	 *
	 * Guards against a regression to `include_once`, which returns true rather
	 * than the array on the second call.
	 */
	public function testRequireArrayIsRepeatable() {
		$path = $this->fixture( 'repeat.php', '<?php return array( "x" => 1 );' );

		$this->assertSame( array( 'x' => 1 ), neve_require_array( $path ) );
		$this->assertSame( array( 'x' => 1 ), neve_require_array( $path ) );
	}

	/**
	 * An absent build manifest still yields keys the enqueue calls can read.
	 */
	public function testAssetMetaIsUsableWhenBuildIsMissing() {
		$meta = neve_get_asset_meta( $this->fixture_dir . 'never-built.asset.php' );

		$this->assertSame( array(), $meta['dependencies'] );
		$this->assertSame( NEVE_VERSION, $meta['version'] );
	}

	/**
	 * A manifest missing one of the two required keys is backfilled.
	 */
	public function testAssetMetaBackfillsPartialManifest() {
		$path = $this->fixture( 'partial.asset.php', '<?php return array( "version" => "abc123" );' );
		$meta = neve_get_asset_meta( $path );

		$this->assertSame( array(), $meta['dependencies'] );
		$this->assertSame( 'abc123', $meta['version'] );
	}

	/**
	 * Keys beyond the two required ones survive, since the customizer loader
	 * reads a 'chunks' entry off the same manifest.
	 */
	public function testAssetMetaPreservesExtraKeys() {
		$path = $this->fixture(
			'chunks.asset.php',
			'<?php return array( "dependencies" => array( "wp-element" ), "version" => "v1", "chunks" => array( "a.js" ) );'
		);
		$meta = neve_get_asset_meta( $path );

		$this->assertSame( array( 'wp-element' ), $meta['dependencies'] );
		$this->assertSame( 'v1', $meta['version'] );
		$this->assertSame( array( 'a.js' ), $meta['chunks'] );
	}

	/**
	 * Google fonts still resolve to a usable array through the guarded helper.
	 */
	public function testGoogleFontsStillLoad() {
		$fonts = neve_get_google_fonts();

		$this->assertIsArray( $fonts );
		$this->assertNotEmpty( $fonts );
	}

	/**
	 * Enqueue the customizer controls with a given font list in place.
	 *
	 * neve_get_google_fonts() runs its result through this filter, so it can
	 * stand in for the list the helper would return, including the empty list
	 * a missing globals/google-fonts.php now produces.
	 *
	 * @param array $fonts Font list to return.
	 */
	private function enqueue_controls_with_fonts( array $fonts ) {
		$filter = function () use ( $fonts ) {
			return $fonts;
		};

		add_filter( 'neve_google_fonts_array', $filter );

		try {
			( new \Neve\Customizer\Loader() )->enqueue_customizer_controls();
		} finally {
			remove_filter( 'neve_google_fonts_array', $filter );
		}
	}

	/**
	 * The missing-file case reaches array_chunk() with a zero length.
	 *
	 * A missing globals/google-fonts.php resolves to an empty list, and
	 * array_chunk() raises a ValueError for any length below 1 on PHP 8, so
	 * opening the customizer fataled even though the include itself was safe.
	 */
	public function testCustomizerControlsSurviveMissingFontFile() {
		$this->enqueue_controls_with_fonts( array() );

		$this->assertFalse(
			wp_style_is( 'neve-fonts-control-google-fonts-0', 'enqueued' ),
			'No font chunk should be enqueued when the font list is empty.'
		);
	}

	/**
	 * Integer division floors to zero below five entries, so a short but
	 * perfectly valid list hit the same ValueError.
	 *
	 * @dataProvider provideShortFontLists
	 *
	 * @param array $fonts Font list shorter than one chunk.
	 */
	public function testCustomizerControlsSurviveShortFontList( array $fonts ) {
		$this->enqueue_controls_with_fonts( $fonts );

		$this->assertTrue(
			wp_style_is( 'neve-fonts-control-google-fonts-0', 'enqueued' ),
			'A short list should still enqueue its fonts.'
		);
	}

	/**
	 * Font lists that floor to a zero chunk length.
	 *
	 * @return array
	 */
	public function provideShortFontLists() {
		return array(
			'one font'    => array( array( 'Roboto' ) ),
			'four fonts'  => array( array( 'Roboto', 'Lato', 'Inter', 'Arvo' ) ),
		);
	}

	/**
	 * A list long enough to chunk normally is unaffected.
	 */
	public function testCustomizerControlsChunkLongFontList() {
		$this->enqueue_controls_with_fonts(
			array( 'Roboto', 'Lato', 'Inter', 'Arvo', 'Rubik', 'Cabin', 'Karla', 'Oxygen', 'Muli', 'Nunito' )
		);

		$this->assertTrue( wp_style_is( 'neve-fonts-control-google-fonts-0', 'enqueued' ) );
		$this->assertTrue( wp_style_is( 'neve-fonts-control-google-fonts-4', 'enqueued' ) );
	}
}
