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
	 * ID of the parent menu item created by render_sidebar_menu().
	 *
	 * @var int
	 */
	private $parent_id;

	/**
	 * Save titles as an administrator. The bootstrap sets $current_user without
	 * wp_set_current_user(), so the kses filters stay on and would encode `<`.
	 */
	public function set_up() {
		parent::set_up();
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );
	}

	/**
	 * Render a sidebar menu whose only parent item has one child.
	 *
	 * @param string $parent_title Title of the parent item.
	 *
	 * @return string
	 */
	private function render_sidebar_menu( $parent_title ) {
		$menu_id         = wp_create_nav_menu( 'Aria Label Test ' . $parent_title );
		$this->parent_id = wp_update_nav_menu_item(
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
				'menu-item-parent-id' => $this->parent_id,
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
	 * strip_tags() reads a lone `<` as the start of a tag and drops the rest of the
	 * title. An editor with unfiltered_html can save such a title, so the item name
	 * must survive in the label.
	 */
	public function test_toggle_aria_label_keeps_a_title_with_a_lone_less_than() {
		$html = $this->render_sidebar_menu( 'Kids <12' );

		$this->assertSame( 'Kids <12', get_post( $this->parent_id )->post_title );
		$this->assertStringContainsString( 'aria-label="Kids &lt;12 submenu"', $html );
	}

	/**
	 * Line breaks, tabs and repeated spaces in the title collapse to one space.
	 */
	public function test_toggle_aria_label_collapses_whitespace_in_the_title() {
		$html = $this->render_sidebar_menu( "Shop \n\t Now" );

		$this->assertStringContainsString( 'aria-label="Shop Now submenu"', $html );
	}
}
