<?php
/**
 * Tests for the accessible name of the AMP submenu toggle.
 *
 * @package neve
 */

require_once __DIR__ . '/fixtures/trait-submenu-nav-menu.php';

if ( ! function_exists( 'amp_is_request' ) ) {
	/**
	 * Stand-in for the AMP plugin, driven by the test flag.
	 *
	 * @return bool
	 */
	function amp_is_request() {
		return ! empty( $GLOBALS['neve_test_amp_request'] );
	}
}

/**
 * Class TestNeveAmpSubmenuAriaLabel
 */
class TestNeveAmpSubmenuAriaLabel extends WP_UnitTestCase {
	use NeveSubmenuNavMenuFixture;

	/**
	 * Serve the request as AMP and register the theme's AMP hooks.
	 *
	 * @return void
	 */
	public function set_up(): void {
		parent::set_up();
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );
		$GLOBALS['neve_test_amp_request'] = true;
		( new \Neve\Compatibility\Amp() )->register_hooks();
	}

	/**
	 * The parent test case restores the hooks registered above.
	 *
	 * @return void
	 */
	public function tear_down(): void {
		unset( $GLOBALS['neve_test_amp_request'] );
		parent::tear_down();
	}

	/**
	 * The AMP toggle is named after its menu item.
	 *
	 * @return void
	 */
	public function test_amp_submenu_toggle_is_named_after_its_item(): void {
		$html = $this->render_submenu_nav_menu( 'Shop <b>Now</b>', 'nv-primary-navigation-1' )['html'];

		$this->assertMatchesRegularExpression( '/<div class="caret-wrap amp-caret-wrap"[^>]* aria-label="Shop Now submenu"/', $html );
	}

	/**
	 * An item without a title still gets a non-empty name.
	 *
	 * @return void
	 */
	public function test_amp_submenu_toggle_has_a_fallback_name_for_an_empty_title(): void {
		$html = $this->render_submenu_nav_menu( '', 'nv-primary-navigation-1' )['html'];

		$this->assertMatchesRegularExpression( '/<div class="caret-wrap amp-caret-wrap"[^>]* aria-label="Submenu"/', $html );
	}
}
