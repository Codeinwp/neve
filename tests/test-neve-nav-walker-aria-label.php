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
	 * Render a sidebar menu whose only parent item has one child.
	 *
	 * @param string $parent_title Title of the parent item.
	 *
	 * @return string
	 */
	private function render_sidebar_menu( $parent_title ) {
		$menu_id   = wp_create_nav_menu( 'Aria Label Test ' . $parent_title );
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

		return wp_nav_menu(
			array(
				'menu'        => $menu_id,
				'menu_id'     => 'nv-primary-navigation-mobile-sidebar',
				'container'   => '',
				'echo'        => false,
				'fallback_cb' => false,
				'walker'      => new \Neve\Views\Nav_Walker(),
			)
		);
	}

	/**
	 * A plugin that widens wp_kses_allowed_html for every context, including the
	 * reserved 'strip' one, must not leak Neve's title wrapper into the toggle
	 * aria-label. Regression test for #4623 (Booster for WooCommerce does this).
	 */
	public function test_toggle_aria_label_survives_permissive_kses_filter() {
		$permissive = static function ( $allowed_html ) {
			$allowed_html['span']['class'] = true;
			return $allowed_html;
		};
		add_filter( 'wp_kses_allowed_html', $permissive, PHP_INT_MAX );

		try {
			$html = $this->render_sidebar_menu( 'Shop' );
		} finally {
			remove_filter( 'wp_kses_allowed_html', $permissive, PHP_INT_MAX );
		}

		$this->assertStringContainsString( 'aria-label="Shop submenu"', $html );
	}

	/**
	 * strip_tags() reads a lone `<` as the start of a tag and drops the rest of the
	 * title. An editor with unfiltered_html can save such a title, so the item name
	 * must survive in the label.
	 */
	public function test_toggle_aria_label_keeps_a_title_with_a_lone_less_than() {
		$html = $this->render_sidebar_menu( 'Kids <12' );

		$this->assertStringContainsString( 'aria-label="Kids &lt;12 submenu"', $html );
	}
}
