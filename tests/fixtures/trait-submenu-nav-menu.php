<?php
/**
 * Menu fixture shared by the submenu toggle tests.
 *
 * @package neve
 */

/**
 * Trait NeveSubmenuNavMenuFixture
 */
trait NeveSubmenuNavMenuFixture {

	/**
	 * Render a menu through the Neve walker whose only parent item has one child.
	 *
	 * @param string $parent_title Title of the parent item.
	 * @param string $menu_id      `menu_id` passed to wp_nav_menu(); the walker branches on it.
	 *
	 * @return array{html: string, parent_id: int}
	 */
	private function render_submenu_nav_menu( string $parent_title, string $menu_id ): array {
		$nav_menu  = wp_create_nav_menu( 'Submenu Fixture ' . wp_generate_password( 6, false ) );
		$parent_id = wp_update_nav_menu_item(
			$nav_menu,
			0,
			array(
				'menu-item-title'  => $parent_title,
				'menu-item-url'    => home_url( '/shop/' ),
				'menu-item-type'   => 'custom',
				'menu-item-status' => 'publish',
			)
		);
		wp_update_nav_menu_item(
			$nav_menu,
			0,
			array(
				'menu-item-title'     => 'Cart',
				'menu-item-url'       => home_url( '/cart/' ),
				'menu-item-type'      => 'custom',
				'menu-item-status'    => 'publish',
				'menu-item-parent-id' => $parent_id,
			)
		);

		$html = wp_nav_menu(
			array(
				'menu'        => $nav_menu,
				'menu_id'     => $menu_id,
				'container'   => '',
				'echo'        => false,
				'fallback_cb' => false,
				'walker'      => new \Neve\Views\Nav_Walker(),
			)
		);

		return array(
			'html'      => (string) $html,
			'parent_id' => (int) $parent_id,
		);
	}
}
