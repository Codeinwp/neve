<?php
/**
 * Tests for the accessible name of the AMP submenu toggle.
 *
 * @package neve
 */

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
	 * Render a primary menu whose only parent item has one child.
	 *
	 * @param string $parent_title Title of the parent item.
	 *
	 * @return string
	 */
	private function render_primary_menu( string $parent_title ): string {
		$menu_id   = wp_create_nav_menu( 'AMP Aria Label Test ' . wp_generate_password( 6, false ) );
		$parent_id = wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-title'  => $parent_title,
				'menu-item-url'    => home_url( '/shop/' ),
				'menu-item-type'   => 'custom',
				'menu-item-status' => 'publish',
			)
		);
		wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-title'     => 'Cart',
				'menu-item-url'       => home_url( '/cart/' ),
				'menu-item-type'      => 'custom',
				'menu-item-status'    => 'publish',
				'menu-item-parent-id' => $parent_id,
			)
		);

		return (string) wp_nav_menu(
			array(
				'menu'        => $menu_id,
				'menu_id'     => 'nv-primary-navigation-1',
				'container'   => '',
				'echo'        => false,
				'fallback_cb' => false,
				'walker'      => new \Neve\Views\Nav_Walker(),
			)
		);
	}

	/**
	 * The AMP toggle is named after its menu item.
	 *
	 * @return void
	 */
	public function test_amp_submenu_toggle_is_named_after_its_item(): void {
		$html = $this->render_primary_menu( 'Shop <b>Now</b>' );

		$this->assertMatchesRegularExpression( '/<div class="caret-wrap amp-caret-wrap"[^>]* aria-label="Shop Now submenu"/', $html );
	}

	/**
	 * An item without a title still gets a non-empty name.
	 *
	 * @return void
	 */
	public function test_amp_submenu_toggle_has_a_fallback_name_for_an_empty_title(): void {
		$html = $this->render_primary_menu( '' );

		$this->assertMatchesRegularExpression( '/<div class="caret-wrap amp-caret-wrap"[^>]* aria-label="Submenu"/', $html );
	}
}
