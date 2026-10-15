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
	 * @var array
	 */
	private $hooked = array();

	/**
	 * The cart-guard stubs declare a WooCommerce class but not is_woocommerce(),
	 * which the compat layer calls on the main-area hooks used here.
	 */
	public function set_up() {
		parent::set_up();
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
	 * Create a page, optionally with a hidden title, and load it.
	 *
	 * @param string $content Post content.
	 * @param bool   $hidden  Hide the title.
	 *
	 * @return int
	 */
	private function visit_page( $content, $hidden = true ) {
		$id = self::factory()->post->create(
			array(
				'post_type'    => 'page',
				'post_status'  => 'publish',
				'post_content' => $content,
				'post_title'   => 'Fixture page',
			)
		);
		if ( $hidden ) {
			update_post_meta( $id, 'neve_meta_disable_title', 'on' );
		}
		$this->go_to( get_permalink( $id ) );

		return $id;
	}

	/**
	 * Render the main area the way page.php does and return the markup.
	 *
	 * @param int $id Page ID.
	 *
	 * @return string
	 */
	private function render_main( $id ) {
		ob_start();
		do_action( 'neve_after_primary_start' );
		do_action( 'neve_page_header', 'single-page' );
		do_action( 'neve_before_content', 'single-page' );
		echo apply_filters( 'the_content', get_post_field( 'post_content', $id ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		do_action( 'neve_after_content', 'single-page' );
		do_action( 'neve_before_primary_end' );

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
	 * Hidden title with no other H1 gets the screen-reader fallback once.
	 */
	public function test_fallback_renders_when_nothing_else_provides_h1() {
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_main( $id );

		$this->assertSame( 1, $this->count_h1( $markup ) );
		$this->assertStringContainsString( '<h1 class="screen-reader-text">Fixture page</h1>', $markup );
		$this->assertStringNotContainsString( \Neve\Views\Page_Header::H1_PLACEHOLDER, $markup );
	}

	/**
	 * An H1 in the content suppresses the fallback.
	 */
	public function test_content_h1_suppresses_fallback() {
		$id     = $this->visit_page( '<h1>Content heading</h1><p>Body</p>' );
		$markup = $this->render_main( $id );

		$this->assertSame( 1, $this->count_h1( $markup ) );
		$this->assertStringNotContainsString( 'screen-reader-text', $markup );
	}

	/**
	 * An H1 hooked after the page header (custom layouts) suppresses the fallback.
	 */
	public function test_hooked_h1_after_header_suppresses_fallback() {
		$this->echo_on( 'neve_before_content', '<h1>Layout heading</h1>' );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_main( $id );

		$this->assertSame( 1, $this->count_h1( $markup ) );
		$this->assertStringNotContainsString( 'screen-reader-text', $markup );
	}

	/**
	 * An H1 hooked before the page header (blog-page layouts) suppresses the fallback.
	 */
	public function test_hooked_h1_before_header_suppresses_fallback() {
		$this->echo_on( 'neve_after_primary_start', '<h1>Early layout heading</h1>', 5 );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_main( $id );

		$this->assertSame( 1, $this->count_h1( $markup ) );
		$this->assertStringNotContainsString( 'screen-reader-text', $markup );
	}

	/**
	 * An H1 inside a script template is not a heading, so the fallback stays.
	 */
	public function test_h1_inside_script_does_not_count() {
		$this->echo_on( 'neve_before_content', '<script type="text/template"><h1>Not a heading</h1></script>' );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_main( $id );

		$this->assertStringContainsString( '<h1 class="screen-reader-text">Fixture page</h1>', $markup );
	}

	/**
	 * A visible title renders the normal H1 and never the fallback.
	 */
	public function test_visible_title_renders_normal_h1() {
		$id     = $this->visit_page( '<p>Body only</p>', false );
		$markup = $this->render_main( $id );

		$this->assertSame( 1, $this->count_h1( $markup ) );
		$this->assertStringContainsString( '<h1>Fixture page</h1>', $markup );
		$this->assertStringNotContainsString( 'screen-reader-text', $markup );
	}

	/**
	 * Without the main-area hooks the content scan still decides the fallback.
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

	/**
	 * Output buffering never drops or reorders the rendered main area.
	 */
	public function test_markup_is_passed_through_unchanged() {
		$this->echo_on( 'neve_before_content', '<p class="before">before</p>' );
		$this->echo_on( 'neve_after_content', '<p class="after">after</p>' );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_main( $id );

		$this->assertMatchesRegularExpression( '#screen-reader-text.*class="before".*Body only.*class="after"#s', $markup );
	}
}
