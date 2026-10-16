<?php
/**
 * Tests for the hidden-title screen-reader H1 fallback.
 *
 * @package neve
 */

/**
 * Class TestNeveHiddenTitleH1
 */
class TestNeveHiddenTitleH1 extends WP_UnitTestCase {

	/**
	 * Callbacks added during a test, removed in tear_down.
	 *
	 * @var list<array{0: string, 1: Closure, 2: int}>
	 */
	private $hooked = array();

	/**
	 * The cart-guard stubs declare a WooCommerce class but not is_woocommerce(),
	 * which the compat layer calls on the main-area hooks used here.
	 */
	public function set_up() {
		parent::set_up();
		// unfiltered_html: fixtures with script tags and HTML comments must survive saving.
		wp_set_current_user( 1 );
		if ( class_exists( 'WooCommerce', false ) && ! function_exists( 'is_woocommerce' ) ) {
			function is_woocommerce() {
				return false;
			}
		}
	}

	/**
	 * Remove hooks added by a test.
	 */
	public function tear_down() {
		foreach ( $this->hooked as $hook ) {
			remove_action( $hook[0], $hook[1], $hook[2] );
		}
		$this->hooked = array();
		parent::tear_down();
	}

	/**
	 * Hook an echo callback and remember it for cleanup.
	 *
	 * @param string $hook     Action name.
	 * @param string $markup   Markup to echo.
	 * @param int    $priority Priority.
	 */
	private function echo_on( $hook, $markup, $priority = 10 ) {
		$callback = function () use ( $markup ) {
			echo $markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		};
		add_action( $hook, $callback, $priority );
		$this->hooked[] = array( $hook, $callback, $priority );
	}

	/**
	 * Create a hidden-title page and load it.
	 *
	 * @param string $content Post content.
	 *
	 * @return int
	 */
	private function visit_page( $content ) {
		$id = self::factory()->post->create(
			array(
				'post_type'    => 'page',
				'post_status'  => 'publish',
				'post_content' => $content,
				'post_title'   => 'Fixture page',
			)
		);
		update_post_meta( $id, 'neve_meta_disable_title', 'on' );
		$this->go_to( get_permalink( $id ) );

		return $id;
	}

	/**
	 * Render the page body the way header.php, page.php and footer.php do.
	 *
	 * @param int $id Page ID.
	 *
	 * @return string
	 */
	private function render_page( $id ) {
		ob_start();
		do_action( 'wp_body_open' );
		do_action( 'neve_after_header_hook' );
		do_action( 'neve_after_primary_start' );
		do_action( 'neve_page_header', 'single-page' );
		do_action( 'neve_before_content', 'single-page' );
		echo apply_filters( 'the_content', get_post_field( 'post_content', $id ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		do_action( 'neve_after_content', 'single-page' );
		do_action( 'neve_before_primary_end' );
		do_action( 'neve_before_footer_hook' );
		// Core's own wp_footer callbacks print scripts enqueued by other tests and a deprecation notice.
		remove_action( 'wp_footer', 'the_block_template_skip_link' );
		remove_action( 'wp_footer', 'wp_print_footer_scripts', 20 );
		do_action( 'wp_footer' );

		return ob_get_clean();
	}

	/**
	 * Count H1 elements in markup.
	 *
	 * @param string $markup HTML.
	 *
	 * @return int
	 */
	private function count_h1( $markup ) {
		return preg_match_all( '/<h1[\s>]/i', $markup );
	}

	/**
	 * Assert the page has exactly one H1 and it is not the fallback.
	 *
	 * @param string $markup Rendered page.
	 */
	private function assert_single_foreign_h1( $markup ) {
		$this->assertSame( 1, $this->count_h1( $markup ) );
		$this->assertStringNotContainsString( 'screen-reader-text', $markup );
		$this->assertStringNotContainsString( \Neve\Views\Page_Header::H1_PLACEHOLDER, $markup );
	}

	/**
	 * Hidden title with no other H1 gets the screen-reader fallback once, in place.
	 */
	public function test_fallback_renders_once_in_title_position() {
		$this->echo_on( 'neve_before_content', '<p class="before">before</p>' );
		$this->echo_on( 'neve_after_content', '<p class="after">after</p>' );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_page( $id );

		$this->assertSame( 1, $this->count_h1( $markup ) );
		$this->assertStringNotContainsString( \Neve\Views\Page_Header::H1_PLACEHOLDER, $markup );
		$this->assertMatchesRegularExpression( '#<h1 class="screen-reader-text">Fixture page</h1>.*class="before".*Body only.*class="after"#s', $markup );
	}

	/**
	 * An H1 that exists only in rendered output (synced pattern) suppresses the fallback.
	 */
	public function test_pattern_h1_suppresses_fallback() {
		$block_id = self::factory()->post->create(
			array(
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_content' => '<!-- wp:heading {"level":1} --><h1>Pattern heading</h1><!-- /wp:heading -->',
			)
		);
		$id       = $this->visit_page( '<!-- wp:block {"ref":' . $block_id . '} /--><!-- wp:paragraph --><p>Body</p><!-- /wp:paragraph -->' );
		$markup   = $this->render_page( $id );

		$this->assert_single_foreign_h1( $markup );
	}

	/**
	 * An H1 hooked after the page header (custom layouts) suppresses the fallback.
	 */
	public function test_hooked_h1_after_header_suppresses_fallback() {
		$this->echo_on( 'neve_before_content', '<h1>Layout heading</h1>' );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_page( $id );

		$this->assert_single_foreign_h1( $markup );
	}

	/**
	 * An H1 hooked before the page header (blog-page layouts) suppresses the fallback.
	 */
	public function test_hooked_h1_before_header_suppresses_fallback() {
		$this->echo_on( 'neve_after_primary_start', '<h1>Early layout heading</h1>', 5 );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_page( $id );

		$this->assert_single_foreign_h1( $markup );
	}

	/**
	 * An H1 in a header custom layout suppresses the fallback.
	 */
	public function test_header_hook_h1_suppresses_fallback() {
		$this->echo_on( 'neve_after_header_hook', '<h1>Header layout heading</h1>' );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_page( $id );

		$this->assert_single_foreign_h1( $markup );
	}

	/**
	 * An H1 in a footer custom layout suppresses the fallback.
	 */
	public function test_footer_hook_h1_suppresses_fallback() {
		$this->echo_on( 'neve_before_footer_hook', '<h1>Footer layout heading</h1>' );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_page( $id );

		$this->assert_single_foreign_h1( $markup );
	}

	/**
	 * An H1 inside a script template is not a heading, so the fallback stays.
	 */
	public function test_h1_inside_script_does_not_count() {
		$id     = $this->visit_page( '<!-- wp:html --><script type="text/template"><h1>Not a heading</h1></script><!-- /wp:html -->' );
		$markup = $this->render_page( $id );

		$this->assertSame( 1, $this->count_h1( preg_replace( '#<script.*?</script>#s', '', $markup ) ) );
		$this->assertStringContainsString( '<h1 class="screen-reader-text">Fixture page</h1>', $markup );
	}

	/**
	 * An H1 inside an HTML comment is not a heading, so the fallback stays.
	 */
	public function test_h1_inside_comment_does_not_count() {
		$id     = $this->visit_page( '<!-- wp:html --><!-- <h1>Old heading</h1> --><!-- /wp:html -->' );
		$markup = $this->render_page( $id );

		$this->assertStringContainsString( '<h1 class="screen-reader-text">Fixture page</h1>', $markup );
	}

	/**
	 * A lone "<!--" inside a script must not hide a real H1 that follows it.
	 */
	public function test_unbalanced_comment_in_script_does_not_hide_h1() {
		$this->echo_on( 'neve_before_content', '<script>var s = "<!--";</script>' );
		$this->echo_on( 'neve_after_content', '<h1>Layout heading</h1><!-- trailing comment -->' );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_page( $id );

		$this->assert_single_foreign_h1( $markup );
	}

	/**
	 * Without wp_body_open the content scan still decides the fallback.
	 */
	public function test_unbuffered_path_keeps_content_scan() {
		$view = new \Neve\Views\Page_Header();

		$this->visit_page( '<h1>Content heading</h1>' );
		ob_start();
		$view->fallback_h1( 'Fixture page' );
		$this->assertSame( '', ob_get_clean() );

		$this->visit_page( '<p>Body only</p>' );
		ob_start();
		$view->fallback_h1( 'Fixture page' );
		$this->assertSame( '<h1 class="screen-reader-text">Fixture page</h1>', ob_get_clean() );
	}
}
