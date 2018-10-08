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
}
