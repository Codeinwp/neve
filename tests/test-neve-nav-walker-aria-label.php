<?php
/**
 * Tests for the mobile menu dropdown toggle aria-label built by the nav walker.
 *
 * @package neve
 */

/**
 * Class TestNeveNavWalkerAriaLabel
 */
class TestNeveNavWalkerAriaLabel extends WP_UnitTestCase {

	/**
	 * A plugin that widens wp_kses_allowed_html for every context, including the
	 * reserved 'strip' one, must not leak Neve's title wrapper into the toggle
	 * aria-label. Regression test for #4623 (Booster for WooCommerce does this).
	 */
	public function test_toggle_aria_label_survives_permissive_kses_filter() {
		$menu_id   = wp_create_nav_menu( 'Aria Label Test' );
		$parent_id = wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-title'  => 'Shop',
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

		$permissive = static function ( $allowed_html ) {
			$allowed_html['span']['class'] = true;
			return $allowed_html;
		};
		add_filter( 'wp_kses_allowed_html', $permissive, PHP_INT_MAX );

		try {
			$html = wp_nav_menu(
				array(
					'menu'        => $menu_id,
					'menu_id'     => 'nv-primary-navigation-mobile-sidebar',
					'container'   => '',
					'echo'        => false,
					'fallback_cb' => false,
					'walker'      => new \Neve\Views\Nav_Walker(),
				)
			);
		} finally {
			remove_filter( 'wp_kses_allowed_html', $permissive, PHP_INT_MAX );
		}

		$this->assertStringContainsString( 'aria-label="Toggle Shop"', $html );
	}
}
