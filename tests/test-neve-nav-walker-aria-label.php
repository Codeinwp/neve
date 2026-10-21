<?php
/**
 * Tests for the mobile menu dropdown toggle aria-label built by the nav walker.
 *
 * @package neve
 */

require_once __DIR__ . '/fixtures/trait-submenu-nav-menu.php';

/**
 * Class TestNeveNavWalkerAriaLabel
 */
class TestNeveNavWalkerAriaLabel extends WP_UnitTestCase {
	use NeveSubmenuNavMenuFixture;

	/**
	 * Save titles as an administrator. The bootstrap sets $current_user without
	 * wp_set_current_user(), so the kses filters stay on and would encode `<`.
	 */
	public function set_up() {
		parent::set_up();
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );
	}

	/**
	 * strip_tags() reads a lone `<` as the start of a tag and drops the rest of the
	 * title. An editor with unfiltered_html can save such a title, so the item name
	 * must survive in the label.
	 */
	public function test_toggle_aria_label_keeps_a_title_with_a_lone_less_than() {
		$menu = $this->render_submenu_nav_menu( 'Kids <12', 'nv-primary-navigation-mobile-sidebar' );

		$this->assertSame( 'Kids <12', get_post( $menu['parent_id'] )->post_title );
		$this->assertStringContainsString( 'aria-label="Kids &lt;12 submenu"', $menu['html'] );
	}

	/**
	 * Line breaks, tabs and repeated spaces in the title collapse to one space.
	 */
	public function test_toggle_aria_label_collapses_whitespace_in_the_title() {
		$html = $this->render_submenu_nav_menu( "Shop \n\t Now", 'nv-primary-navigation-mobile-sidebar' )['html'];

		$this->assertStringContainsString( 'aria-label="Shop Now submenu"', $html );
	}
}
