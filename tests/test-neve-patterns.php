<?php
/**
 * Tests for the bundled block patterns and the homepage Customizer link.
 *
 * @package neve
 */

/**
 * Class TestNevePatterns
 */
class TestNevePatterns extends WP_UnitTestCase {

	/**
	 * Register the patterns again so the test does not depend on bootstrap order.
	 */
	public function set_up() {
		parent::set_up();

		( new \Neve\Compatibility\Patterns() )->define_patterns();
	}

	/**
	 * Every file in block-patterns is registered and sits in the Neve category.
	 */
	public function test_every_pattern_file_is_registered_in_neve_category() {
		$this->assertTrue( WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( 'neve' ) );

		$files = glob( get_template_directory() . '/inc/compatibility/block-patterns/*.php' );
		$this->assertNotEmpty( $files );

		$registry = WP_Block_Patterns_Registry::get_instance();
		foreach ( $files as $file ) {
			$name = 'neve/' . basename( $file, '.php' );

			$this->assertTrue( $registry->is_registered( $name ), $name . ' is not registered' );
			$this->assertContains( 'neve', $registry->get_registered( $name )['categories'], $name . ' is missing the neve category' );
		}
	}

	/**
	 * Homepage patterns are offered as starter patterns for new pages.
	 */
	public function test_homepage_patterns_are_page_starter_patterns() {
		$registry = WP_Block_Patterns_Registry::get_instance();

		foreach ( array( 'neve/homepage-business', 'neve/homepage-simple' ) as $name ) {
			$pattern = $registry->get_registered( $name );

			$this->assertSame( array( 'core/post-content' ), $pattern['blockTypes'] );
			$this->assertSame( array( 'page' ), $pattern['postTypes'] );
			$this->assertNotEmpty( parse_blocks( $pattern['content'] )[0]['blockName'] );
		}
	}

	/**
	 * Without a static front page the link points to a new page.
	 */
	public function test_homepage_link_creates_page_when_none_is_set() {
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );
		update_option( 'show_on_front', 'posts' );

		$control = $this->get_homepage_link_control();

		$this->assertNotNull( $control );
		$this->assertSame( admin_url( 'post-new.php?post_type=page' ), $control->url );
	}

	/**
	 * With a static front page the link opens it in the editor.
	 */
	public function test_homepage_link_edits_front_page() {
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );
		$page_id = self::factory()->post->create( array( 'post_type' => 'page' ) );
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $page_id );

		$control = $this->get_homepage_link_control();

		$this->assertNotNull( $control );
		$this->assertSame( get_edit_post_link( $page_id, 'raw' ), $control->url );
	}

	/**
	 * Users who cannot edit pages do not get the link.
	 */
	public function test_homepage_link_hidden_without_edit_pages() {
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'subscriber' ) ) );

		$this->assertNull( $this->get_homepage_link_control() );
	}

	/**
	 * Homepage Settings stays visible on a site with no pages so the create link can be used.
	 */
	public function test_homepage_settings_visible_without_pages() {
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );
		require_once ABSPATH . WPINC . '/class-wp-customize-manager.php';

		$wp_customize = new WP_Customize_Manager();
		$wp_customize->register_controls();
		$this->assertFalse( $wp_customize->has_published_pages() );

		$main = new \Neve\Customizer\Options\Main();
		$main->register_controls_callback( $wp_customize );
		$main->after_controls_registered();

		$this->assertTrue( $wp_customize->get_section( 'static_front_page' )->active() );
	}

	/**
	 * Run the Main customizer options against a fresh manager.
	 *
	 * @return WP_Customize_Control|null
	 */
	private function get_homepage_link_control() {
		require_once ABSPATH . WPINC . '/class-wp-customize-manager.php';

		$wp_customize = new WP_Customize_Manager();
		( new \Neve\Customizer\Options\Main() )->register_controls_callback( $wp_customize );

		return $wp_customize->get_control( 'neve_homepage_link' );
	}
}
