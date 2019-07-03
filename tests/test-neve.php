<?php
/**
 * Class TestNeve
 *
 * @package Hestia
 */

/**
 * Sample test case.
 */
class TestNeve extends WP_UnitTestCase {
	/**
	 * Test Constants.
	 */
	public function testConstants() {
		$this->assertTrue( defined( 'NEVE_VERSION' ) );
		$this->assertTrue( defined( 'NEVE_INC_DIR' ) );
		$this->assertTrue( defined( 'NEVE_ASSETS_URL' ) );
	}

	/**
	 * Make sure NEVE_DEBUG is false.
	 */
	public function testDebugOff() {
		$this->assertFalse( NEVE_DEBUG );
	}
}
