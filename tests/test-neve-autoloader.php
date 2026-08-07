<?php
/**
 * Tests for the Neve autoloader's missing-file handling.
 *
 * @package neve
 */

/**
 * Class TestNeveAutoloader
 */
class TestNeveAutoloader extends WP_UnitTestCase {

	/**
	 * Base directory used for the fixture namespace.
	 *
	 * @var string
	 */
	private $fixture_dir;

	/**
	 * Create a base directory that is registered but holds no class files.
	 */
	public function set_up() {
		parent::set_up();

		$this->fixture_dir = get_temp_dir() . 'neve-autoloader-fixture/';

		if ( ! is_dir( $this->fixture_dir ) ) {
			mkdir( $this->fixture_dir, 0777, true );
		}
	}

	/**
	 * Remove the fixture directory and any files written into it.
	 */
	public function tear_down() {
		$this->remove_tree( $this->fixture_dir );

		parent::tear_down();
	}

	/**
	 * Recursively delete a fixture directory.
	 *
	 * @param string $dir Directory to remove.
	 */
	private function remove_tree( $dir ) {
		if ( ! is_dir( $dir ) ) {
			return;
		}

		foreach ( glob( rtrim( $dir, '/' ) . '/*' ) as $path ) {
			if ( is_dir( $path ) ) {
				$this->remove_tree( $path );
				continue;
			}
			unlink( $path );
		}

		rmdir( $dir );
	}

	/**
	 * A mapped prefix whose class file is absent must report failure rather
	 * than fatal on `require`.
	 *
	 * This is the Neve_Pro case: the namespace is registered whenever
	 * NEVE_PRO_SPL_ROOT is defined, so any class file missing from the Pro
	 * install used to take the whole request down.
	 */
	public function testMissingMappedFileReturnsFalse() {
		$autoloader = new \Neve\Autoloader();
		$autoloader->add_namespace( 'Neve_Fixture', $this->fixture_dir );

		$this->assertFalse(
			$autoloader->load_class( 'Neve_Fixture\\Widgets\\Absent_Widget' ),
			'A mapped class with no file on disk should resolve to false.'
		);
	}

	/**
	 * An unmapped namespace is left for the next SPL autoloader.
	 */
	public function testUnmappedNamespaceReturnsFalse() {
		$autoloader = new \Neve\Autoloader();
		$autoloader->add_namespace( 'Neve_Fixture', $this->fixture_dir );

		$this->assertFalse( $autoloader->load_class( 'Some_Other_Vendor\\Thing' ) );
	}

	/**
	 * A present class file is still required, and its path returned.
	 */
	public function testExistingMappedFileIsLoaded() {
		file_put_contents(
			$this->fixture_dir . 'present_widget.php',
			'<?php namespace Neve_Fixture; class Present_Widget {}'
		);

		$autoloader = new \Neve\Autoloader();
		$autoloader->add_namespace( 'Neve_Fixture', $this->fixture_dir );

		$this->assertSame(
			$this->fixture_dir . 'present_widget.php',
			$autoloader->load_class( 'Neve_Fixture\\Present_Widget' )
		);
		$this->assertTrue( class_exists( '\\Neve_Fixture\\Present_Widget', false ) );
	}

	/**
	 * With several base directories registered for one prefix, a miss in the
	 * first must fall through to the second instead of stopping the search.
	 */
	public function testSearchFallsThroughToLaterBaseDirectory() {
		$second_dir = $this->fixture_dir . 'second/';
		mkdir( $second_dir, 0777, true );
		file_put_contents(
			$second_dir . 'fallback_widget.php',
			'<?php namespace Neve_Fixture; class Fallback_Widget {}'
		);

		$autoloader = new \Neve\Autoloader();
		$autoloader->add_namespace( 'Neve_Fixture', $this->fixture_dir );
		$autoloader->add_namespace( 'Neve_Fixture', $second_dir );

		$this->assertSame(
			$second_dir . 'fallback_widget.php',
			$autoloader->load_class( 'Neve_Fixture\\Fallback_Widget' )
		);
	}

	/**
	 * Traits and interfaces are mapped to files by this autoloader too, so a
	 * successful load must be reported for them and not only for classes.
	 *
	 * The theme relies on this: Neve\Core\Theme_Info and several customizer
	 * defaults are traits, and class_exists() reports false for those.
	 *
	 * @dataProvider provideNonClassDeclarations
	 *
	 * @param string $keyword  Declaration keyword to write into the fixture.
	 * @param string $basename File/name stem for the fixture.
	 */
	public function testNonClassDeclarationsAreReportedAsLoaded( $keyword, $basename ) {
		file_put_contents(
			$this->fixture_dir . strtolower( $basename ) . '.php',
			sprintf( '<?php namespace Neve_Fixture; %s %s {}', $keyword, $basename )
		);

		$autoloader = new \Neve\Autoloader();
		$autoloader->add_namespace( 'Neve_Fixture', $this->fixture_dir );

		$this->assertSame(
			$this->fixture_dir . strtolower( $basename ) . '.php',
			$autoloader->load_class( 'Neve_Fixture\\' . $basename ),
			sprintf( 'Loading a %s should report the mapped file, not false.', $keyword )
		);
	}

	/**
	 * Declaration kinds that class_exists() does not report.
	 *
	 * @return array
	 */
	public function provideNonClassDeclarations() {
		return array(
			'trait'     => array( 'trait', 'Fixture_Trait' ),
			'interface' => array( 'interface', 'Fixture_Interface' ),
		);
	}

	/**
	 * A failed lookup must not block a later-registered SPL autoloader from
	 * resolving the same class.
	 */
	public function testFailedLookupLeavesClassLoadableByNextAutoloader() {
		$autoloader = new \Neve\Autoloader();
		$autoloader->add_namespace( 'Neve_Fixture', $this->fixture_dir );
		$autoloader->register();

		$fallback = function ( $class ) {
			if ( 'Neve_Fixture\\Late_Widget' !== $class ) {
				return;
			}
			eval( 'namespace Neve_Fixture; class Late_Widget {}' ); // phpcs:ignore Squiz.PHP.Eval.Discouraged
		};
		spl_autoload_register( $fallback );

		try {
 			$this->assertTrue( class_exists( '\\Neve_Fixture\\Late_Widget' ) );
 		} finally {
 			spl_autoload_unregister( $fallback );
 			spl_autoload_unregister( array( $autoloader, 'load_class' ) );
 		}
	}
}
