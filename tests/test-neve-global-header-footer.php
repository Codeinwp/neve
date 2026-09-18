<?php
/**
 * Tests for the global header and footer visibility toggles.
 *
 * @package neve
 */

/**
 * Class TestNeveGlobalHeaderFooter
 */
class TestNeveGlobalHeaderFooter extends WP_UnitTestCase {

	/**
	 * Setup.
	 */
	public function setUp(): void {
		parent::setUp();

		// Another test in the suite declares the WooCommerce class; the theme then
		// calls the conditional tags that come with it.
		require_once __DIR__ . '/stubs/woocommerce-cart.php';
		require_once __DIR__ . '/stubs/amp.php';

		$this->mark_header_and_footer_hooks();
	}

	/**
	 * Teardown.
	 */
	public function tearDown(): void {
		unset( $GLOBALS['neve_tests_is_amp'] );
		remove_theme_mod( 'neve_disable_header' );
		remove_theme_mod( 'neve_disable_footer' );

		parent::tearDown();
	}

	/**
	 * Print a marker on each header and footer hook, so the tests can tell which ones ran.
	 *
	 * @return void
	 */
	private function mark_header_and_footer_hooks() {
		$hooks = array(
			'neve_before_header_wrapper_hook',
			'neve_before_header_hook',
			'neve_do_header',
			'neve_after_header_hook',
			'neve_after_header_wrapper_hook',
			'neve_before_footer_hook',
			'neve_do_footer',
			'neve_after_footer_hook',
		);

		foreach ( $hooks as $hook ) {
			add_action(
				$hook,
				function () use ( $hook ) {
					echo '[' . esc_html( $hook ) . ']';
				}
			);
		}
	}

	/**
	 * Render the theme header.
	 *
	 * @return string
	 */
	private function render_header() {
		// Keep the markup under test free of whatever plugins print in the head.
		remove_all_actions( 'wp_head' );

		ob_start();
		load_template( get_theme_file_path( 'header.php' ), false );

		return (string) ob_get_clean();
	}

	/**
	 * Render the theme footer.
	 *
	 * @return string
	 */
	private function render_footer() {
		remove_all_actions( 'wp_footer' );

		ob_start();
		load_template( get_theme_file_path( 'footer.php' ), false );

		return (string) ob_get_clean();
	}

	/**
	 * Make a published page that carries meta.
	 *
	 * @param array $meta Meta keys and values.
	 *
	 * @return int
	 */
	private function make_page( $meta = array() ) {
		$page_id = self::factory()->post->create(
			array(
				'post_type'   => 'page',
				'post_status' => 'publish',
			)
		);

		foreach ( $meta as $key => $value ) {
			update_post_meta( $page_id, $key, $value );
		}

		return $page_id;
	}

	/**
	 * Whether the part is rendered.
	 *
	 * @param string $context The part name.
	 *
	 * @return bool
	 */
	private function renders( $context ) {
		return apply_filters( 'neve_filter_toggle_content_parts', true, $context );
	}

	/**
	 * The parts this feature covers.
	 *
	 * @return array
	 */
	public function header_and_footer() {
		return array(
			'header' => array( 'header' ),
			'footer' => array( 'footer' ),
		);
	}

	/*
	|--------------------------------------------------------------------------
	| What the toggle decides
	|--------------------------------------------------------------------------
	*/

	/**
	 * The header and the footer are rendered when no global toggle is set.
	 */
	public function test_header_and_footer_render_by_default() {
		$this->assertTrue( $this->renders( 'header' ) );
		$this->assertTrue( $this->renders( 'footer' ) );
	}

	/**
	 * Each toggle hides its own part and leaves the other one alone.
	 *
	 * @param string $part The part name.
	 *
	 * @dataProvider header_and_footer
	 */
	public function test_each_toggle_hides_only_its_own_part( $part ) {
		$other = $part === 'header' ? 'footer' : 'header';
		set_theme_mod( 'neve_disable_' . $part, true );

		$this->assertFalse( $this->renders( $part ) );
		$this->assertTrue( $this->renders( $other ) );
	}

	/**
	 * The toggles leave every other content part alone.
	 */
	public function test_other_content_parts_are_untouched() {
		set_theme_mod( 'neve_disable_header', true );
		set_theme_mod( 'neve_disable_footer', true );

		$this->assertTrue( $this->renders( 'title' ) );
		$this->assertTrue( $this->renders( 'featured-image' ) );
		$this->assertFalse( apply_filters( 'neve_filter_toggle_content_parts', false, 'sidebar' ) );
	}

	/*
	|--------------------------------------------------------------------------
	| The toggle against the post meta
	|--------------------------------------------------------------------------
	*/

	/**
	 * The global toggle wins over a page that carries the default meta value.
	 *
	 * The metabox stores 'off' both for an untouched page and for one that was turned on
	 * and off again, so 'off' must not count as a deliberate opt in.
	 *
	 * @param string $part The part name.
	 *
	 * @dataProvider header_and_footer
	 */
	public function test_global_toggle_wins_over_an_off_meta_value( $part ) {
		set_theme_mod( 'neve_disable_' . $part, true );
		$this->go_to( get_permalink( $this->make_page( array( 'neve_meta_disable_' . $part => 'off' ) ) ) );

		$this->assertFalse( $this->renders( $part ) );
	}

	/**
	 * A single page still turns the parts off on its own.
	 *
	 * @param string $part The part name.
	 *
	 * @dataProvider header_and_footer
	 */
	public function test_post_meta_still_disables_a_part_on_its_own( $part ) {
		$this->go_to( get_permalink( $this->make_page( array( 'neve_meta_disable_' . $part => 'on' ) ) ) );

		$this->assertFalse( $this->renders( $part ) );
	}

	/**
	 * Meta on one page does not leak to another.
	 */
	public function test_meta_does_not_leak_between_pages() {
		$with_meta = $this->make_page( array( 'neve_meta_disable_header' => 'on' ) );
		$plain     = $this->make_page();

		$this->go_to( get_permalink( $with_meta ) );
		$this->assertFalse( $this->renders( 'header' ) );

		$this->go_to( get_permalink( $plain ) );
		$this->assertTrue( $this->renders( 'header' ) );
	}

	/**
	 * The shop archive follows the global toggle, meta and all.
	 *
	 * The shop archive reads its meta from the shop page, which is the one archive that
	 * carries post meta at all.
	 */
	public function test_the_shop_page_meta_does_not_survive_the_global_toggle() {
		$shop_id = $this->make_page(
			array(
				'neve_meta_disable_header' => 'off',
				'neve_meta_disable_footer' => 'off',
			)
		);
		set_theme_mod( 'neve_disable_header', true );
		set_theme_mod( 'neve_disable_footer', true );

		// Stand in for wc_get_page_id( 'shop' ), which the theme resolves through this filter.
		add_filter(
			'neve_post_meta_filters_post_id',
			function () use ( $shop_id ) {
				return $shop_id;
			}
		);
		$this->go_to( get_permalink( $shop_id ) );

		$this->assertFalse( $this->renders( 'header' ) );
		$this->assertFalse( $this->renders( 'footer' ) );
	}

	/**
	 * The global toggle reaches the views that have no metabox.
	 *
	 * @param string $context The view to open.
	 *
	 * @dataProvider views_without_a_metabox
	 */
	public function test_global_toggle_reaches_views_without_a_metabox( $context ) {
		$post_id = self::factory()->post->create( array( 'post_status' => 'publish' ) );

		if ( $context === 'category' ) {
			$category_id = self::factory()->category->create();
			wp_set_post_categories( $post_id, array( $category_id ) );
			$url = get_category_link( $category_id );
		} else {
			$url = home_url( '/?s=neve' );
		}

		set_theme_mod( 'neve_disable_header', true );
		$this->go_to( $url );

		// Guard the fixture: the assertion only means something in the right view.
		$this->assertFalse( is_singular(), 'The metabox covers singular views, this must not be one.' );
		$this->assertFalse( $this->renders( 'header' ) );
	}

	/**
	 * Views the metabox never reached.
	 *
	 * @return array
	 */
	public function views_without_a_metabox() {
		return array(
			'category archive' => array( 'category' ),
			'search results'   => array( 'search' ),
		);
	}

	/*
	|--------------------------------------------------------------------------
	| The markup
	|--------------------------------------------------------------------------
	*/

	/**
	 * The header wrapper is rendered when the header is on.
	 */
	public function test_header_wrapper_is_rendered_when_enabled() {
		$markup = $this->render_header();

		$this->assertStringContainsString( '<header', $markup );
		$this->assertStringContainsString( '[neve_do_header]', $markup );
	}

	/**
	 * A disabled header leaves no empty wrapper behind and runs none of its hooks.
	 */
	public function test_disabled_header_leaves_no_wrapper_or_hooks_behind() {
		set_theme_mod( 'neve_disable_header', true );
		$markup = $this->render_header();

		$this->assertStringNotContainsString( '<header', $markup );
		$this->assertStringNotContainsString( '[neve_do_header]', $markup );
		$this->assertStringNotContainsString( '[neve_before_header_hook]', $markup );
		$this->assertStringNotContainsString( '[neve_after_header_hook]', $markup );
	}

	/**
	 * A disabled header keeps the skip link, the page skeleton and the wrapper hooks.
	 */
	public function test_disabled_header_keeps_the_skip_link_and_the_skeleton() {
		set_theme_mod( 'neve_disable_header', true );
		$markup = $this->render_header();

		$this->assertStringContainsString( 'neve-skip-link', $markup );
		$this->assertStringContainsString( '<div class="wrapper">', $markup );
		$this->assertStringContainsString( '<main id="content"', $markup );
		$this->assertStringContainsString( '[neve_before_header_wrapper_hook]', $markup );
		$this->assertStringContainsString( '[neve_after_header_wrapper_hook]', $markup );
	}

	/**
	 * The post meta removes the wrapper as well, the way the global toggle does.
	 */
	public function test_post_meta_also_removes_the_header_wrapper() {
		$this->go_to( get_permalink( $this->make_page( array( 'neve_meta_disable_header' => 'on' ) ) ) );

		$this->assertStringNotContainsString( '<header', $this->render_header() );
	}

	/**
	 * The footer is rendered when it is on.
	 */
	public function test_footer_is_rendered_when_enabled() {
		$this->assertStringContainsString( '[neve_do_footer]', $this->render_footer() );
	}

	/**
	 * A disabled footer runs no footer hooks and still closes the page.
	 */
	public function test_disabled_footer_runs_no_hooks_and_closes_the_page() {
		set_theme_mod( 'neve_disable_footer', true );
		$markup = $this->render_footer();

		$this->assertStringNotContainsString( '[neve_do_footer]', $markup );
		$this->assertStringNotContainsString( '[neve_before_footer_hook]', $markup );
		$this->assertStringContainsString( '</main>', $markup );
		$this->assertStringContainsString( '</body>', $markup );
	}

	/*
	|--------------------------------------------------------------------------
	| The block theme template
	|--------------------------------------------------------------------------
	*/

	/**
	 * Render the header of the block theme compatibility layer.
	 *
	 * @return string
	 */
	private function render_fse_header() {
		$fse = new \Neve\Compatibility\Fse();
		$this->go_to( get_permalink( $this->make_page() ) );

		$template = $fse->get_template_slug();
		$this->assertSame( 'page', $template, 'Expected the page template.' );
		set_theme_mod( 'neve_fse_' . $template, true );

		ob_start();
		$fse->handle_header();

		return (string) ob_get_clean();
	}

	/**
	 * The block theme header wrapper is rendered when the header is on.
	 */
	public function test_fse_header_wrapper_is_rendered_when_enabled() {
		$this->assertStringContainsString( '<header', $this->render_fse_header() );
	}

	/**
	 * A disabled header leaves no wrapper behind in the block theme template either.
	 */
	public function test_fse_disabled_header_leaves_no_wrapper_behind() {
		set_theme_mod( 'neve_disable_header', true );
		$markup = $this->render_fse_header();

		$this->assertStringNotContainsString( '<header', $markup );
		$this->assertStringContainsString( 'neve-skip-link', $markup );
		$this->assertStringContainsString( '<main id="content"', $markup );
	}

	/*
	|--------------------------------------------------------------------------
	| The customizer controls
	|--------------------------------------------------------------------------
	*/

	/**
	 * The toggles survive a full customizer cycle, with every other module registering too.
	 */
	public function test_the_toggles_survive_a_full_customizer_cycle() {
		require_once ABSPATH . WPINC . '/class-wp-customize-manager.php';

		global $wp_customize;
		$wp_customize = new WP_Customize_Manager();

		$loader = new \Neve\Customizer\Loader();
		$loader->init();
		do_action( 'customize_register', $wp_customize );

		$parts = array(
			'header' => 'hfg_header',
			'footer' => 'hfg_footer',
		);

		foreach ( $parts as $part => $panel ) {
			$section = $wp_customize->get_section( 'neve_' . $part . '_visibility' );
			$control = $wp_customize->get_control( 'neve_disable_' . $part );

			$this->assertNotNull( $section, 'The ' . $part . ' section is missing.' );
			$this->assertNotNull( $control, 'The ' . $part . ' toggle is missing.' );
			$this->assertSame( $panel, $section->panel );
			$this->assertSame( 'neve_' . $part . '_visibility', $control->section );

			$setting = $wp_customize->get_setting( 'neve_disable_' . $part );
			$this->assertFalse( $setting->default );
			$this->assertTrue( $setting->sanitize( 'on' ) );
			$this->assertFalse( $setting->sanitize( '' ) );
		}
	}

	/**
	 * The builder panels hide every section by default, so the toggles have to be named in the styles.
	 *
	 * Without this rule the sections register, render and stay invisible.
	 */
	public function test_the_sections_are_whitelisted_in_the_builder_panel_styles() {
		$scss = file_get_contents( get_theme_file_path( 'assets/apps/customizer-controls/src/scss/_general.scss' ) );

		$panels = array(
			'hfg_header' => 'neve_header_visibility',
			'hfg_footer' => 'neve_footer_visibility',
		);

		foreach ( $panels as $panel => $section ) {
			$this->assertStringContainsString(
				'#sub-accordion-panel-' . $panel . ' #accordion-section-' . $section,
				(string) $scss,
				'Sections in the builder panels stay hidden unless this rule names them.'
			);
		}
	}
	/*
	|--------------------------------------------------------------------------
	| Other plugins that render into the header
	|--------------------------------------------------------------------------
	*/

	/**
	 * The AMP state elements outlive a disabled header.
	 *
	 * They are printed around the header but one of them drives the WooCommerce shop
	 * sidebar, which is still on the page when the header is gone.
	 */
	public function test_amp_states_survive_a_disabled_header() {
		$GLOBALS['neve_tests_is_amp'] = true;
		$amp                          = new \Neve\Compatibility\Amp();
		$amp->register_hooks();

		$with_header = $this->render_header();
		$this->assertStringContainsString( '<header', $with_header );
		$this->assertStringContainsString( 'nvAmpWooSidebarExpanded', $with_header );

		set_theme_mod( 'neve_disable_header', true );
		$without_header = $this->render_header();

		$this->assertStringNotContainsString( '<header', $without_header );
		$this->assertStringContainsString( 'nvAmpWooSidebarExpanded', $without_header );
		$this->assertStringContainsString( 'nvAmpMenuExpanded', $without_header );
	}
}
