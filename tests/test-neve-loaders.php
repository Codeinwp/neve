<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      05/10/2018
 *
 * @package neve
 */


/**
 * Class TestNeveLoaders
 */
class TestNeveLoaders extends WP_UnitTestCase {

	/**
	 * Check if autoloader has prefix and abstract classes are being loaded.
	 */
	public function testAutoloader() {
		$this->assertClassHasAttribute( 'prefixes', '\Neve\Autoloader' );
		$this->assertTrue( class_exists( '\Neve\Customizer\Base_Customizer' ) );
		$this->assertTrue( class_exists( '\Neve\Views\Base_View' ) );
		$this->assertTrue( class_exists( '\Neve\Views\Inline\Base_Inline' ) );
	}

	/**
	 * Test factory with single module.
	 */
	public function testFactory() {
		$factory    = new \Neve\Core\Factory(
			array(
				'Views\Pluggable\Pagination',
			)
		);
		$test_class = $factory->build( 'Views\Pluggable\Pagination' );
		$this->assertInstanceOf( 'Neve\Views\Pluggable\Pagination', $test_class );
	}

	/**
	 * A module name with no class behind it resolves to null.
	 *
	 * The list this factory walks is assembled from filters and theme
	 * compatibility flags, so a name can outlive the file that declares it.
	 * build() is documented to return null for that, and both callers check
	 * for null, but it used to instantiate blind and take down the request.
	 */
	public function testFactoryBuildReturnsNullForMissingClass() {
		$factory = new \Neve\Core\Factory( array( 'Views\Pluggable\Definitely_Absent' ) );

		$this->assertNull( $factory->build( 'Views\Pluggable\Definitely_Absent' ) );
	}

	/**
	 * A missing module is skipped without stopping the ones after it.
	 */
	public function testFactoryLoadModulesSkipsMissingClass() {
		$factory = new \Neve\Core\Factory(
			array(
				'Views\Pluggable\Definitely_Absent',
				'Views\Pluggable\Pagination',
			)
		);

		$factory->load_modules();

		$this->assertTrue( class_exists( 'Neve\Views\Pluggable\Pagination', false ) );
	}

	/**
	 * The Neve_Pro namespace is the one the reported crash came through, so
	 * cover a non-default prefix too.
	 */
	public function testFactoryBuildReturnsNullForMissingClassInOtherNamespace() {
		$factory = new \Neve\Core\Factory(
			array( 'Modules\Header_Footer_Grid\Submenu\Customizer\Definitely_Absent_Settings' ),
			'\\Neve_Pro\\'
		);

		$this->assertNull( $factory->build( 'Modules\Header_Footer_Grid\Submenu\Customizer\Definitely_Absent_Settings' ) );
	}
}
