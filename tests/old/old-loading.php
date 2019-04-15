<?php
/**
 * Loading test for lower PHP versions.
 *
 * @package neve
 */

/**
 * Test library loading.
 */
class TestLoading extends WP_UnitTestCase {
	/**
	 * Test if the library is loading properly and version is exported.
	 */
	public function test_class_init() {
		$this->assertFalse( class_exists( '\Neve\Autoloader' ) );
	}

}
