<?php
use Neve\Core\Migration_Flags;
use Neve\Customizer\Defaults\Layout;

class LayoutDefaultsTraitWrapper {
	use Layout;
}
/**
 * Class TestGetV4Defaults
 */
class TestNeveV4Defaults extends WP_UnitTestCase {
	/**
	 * @var LayoutDefaultsTraitWrapper
	 */
	private $trait_wrapper;

	public function setUp() : void {
		$this->trait_wrapper = new LayoutDefaultsTraitWrapper();
	}

	/**
	 * Test the get_v4_defaults method.
	 */
	public function testGetV4Defaults() {
		// Simulate a new user after v4.
		update_option( Migration_Flags::USER_SINCE_VERSION, '4.0.0' );

		// Test with a valid ID.
		$this->assertEquals( 8, $this->trait_wrapper->get_v4_defaults( 'neve_blog_items_border_radius' ) );

		// Test with an invalid ID.
		$this->assertFalse( $this->trait_wrapper->get_v4_defaults( 'invalid_id', false ) );

		// Test with old default value.
		$this->assertEquals( 'old_default', $this->trait_wrapper->get_v4_defaults( 'invalid_id', 'old_default' ) );
	}

	/**
	 * Test the get_v4_defaults method with a user before v4.
	 */
	public function testOldDefaults() {
		update_option( Migration_Flags::USER_SINCE_VERSION, '3.8.16' );

		// Test with a valid ID.
		$this->assertEquals( 9, $this->trait_wrapper->get_v4_defaults( 'neve_blog_items_border_radius', 9 ) );

		// Test with an invalid ID.
		$this->assertFalse( $this->trait_wrapper->get_v4_defaults( 'invalid_id', false ) );

		// Test with old default value.
		$this->assertEquals( 'old_default', $this->trait_wrapper->get_v4_defaults( 'invalid_id', 'old_default' ) );
	}
}
