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
	 * which the compat layer calls on the body hooks used here.
	 */
	public function set_up() {
		parent::set_up();
		// Fixtures with script tags and HTML comments must survive saving; the bootstrap
		// assigns user 1 directly, so wp_set_current_user() alone leaves kses on.
		wp_set_current_user( 1 );
		kses_remove_filters();
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
		kses_init_filters();
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
	 * Fire the body hooks in the order header.php, page.php and footer.php do.
	 *
	 * @param int  $id         Page ID.
	 * @param bool $theme_body Fire the theme's own body-start hook; false mimics a template with only wp_body_open.
	 */
	private function fire_page_hooks( $id, $theme_body = true ) {
		if ( $theme_body ) {
			do_action( 'neve_body_start_after' );
		}
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
		do_action( 'neve_body_end_before' );
	}

	/**
	 * Render the page body and return the markup.
	 *
	 * @param int  $id         Page ID.
	 * @param bool $theme_body See fire_page_hooks().
	 *
	 * @return string
	 */
	private function render_page( $id, $theme_body = true ) {
		ob_start();
		$this->fire_page_hooks( $id, $theme_body );

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
		// The noscript H1 is not a heading; the base content scan would wrongly count it.
		$id     = $this->visit_page( '<!-- wp:html --><p>Body only</p><noscript><h1>Hidden</h1></noscript><!-- /wp:html -->' );
		$markup = $this->render_page( $id );

		$this->assertSame( 1, substr_count( $markup, '<h1 class="screen-reader-text">' ) );
		$this->assertStringNotContainsString( \Neve\Views\Page_Header::H1_PLACEHOLDER, $markup );
		$this->assertMatchesRegularExpression( '#<h1 class="screen-reader-text">Fixture page</h1>.*class="before".*Body only.*class="after"#s', $markup );
	}

	/**
	 * A template without the theme's body-start hook still buffers from wp_body_open.
	 */
	public function test_buffer_starts_on_wp_body_open_without_theme_hook() {
		$this->echo_on( 'neve_before_content', '<h1>Layout heading</h1>' );
		$id     = $this->visit_page( '<p>Body only</p>' );
		$markup = $this->render_page( $id, false );

		$this->assert_single_foreign_h1( $markup );
	}

	/**
	 * A buffer opened after ours and left open must not be closed by us; the
	 * placeholder is still resolved when the outer buffers flush.
	 */
	public function test_stray_open_buffer_is_left_alone() {
		$stray = function () {
			ob_start();
		};
		add_action( 'wp_body_open', $stray, 5 );
		$this->hooked[] = array( 'wp_body_open', $stray, 5 );

		$id = $this->visit_page( '<p>Body only</p>' );
		ob_start();
		$level = ob_get_level();
		$this->fire_page_hooks( $id );
		$this->assertSame( $level + 2, ob_get_level(), 'the stray and page-body buffers are both still open after the hooks' );
		while ( ob_get_level() > $level ) {
			ob_end_flush();
		}
		$markup = ob_get_clean();

		$this->assertSame( 1, substr_count( $markup, '<h1 class="screen-reader-text">' ) );
		$this->assertStringNotContainsString( \Neve\Views\Page_Header::H1_PLACEHOLDER, $markup );
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
	 * Hooks a custom layout can render an H1 on, with the priority used in the test.
	 *
	 * @return array<string, array{0: string, 1: int}>
	 */
	public function hook_provider() {
		return array(
			'body start'        => array( 'neve_body_start_after', 10 ),
			'after header'      => array( 'neve_after_header_hook', 10 ),
			'before the header' => array( 'neve_after_primary_start', 5 ),
			'before content'    => array( 'neve_before_content', 10 ),
			'before footer'     => array( 'neve_before_footer_hook', 10 ),
			'body end'          => array( 'neve_body_end_before', 10 ),
		);
	}

	/**
	 * An H1 rendered on any body hook suppresses the fallback.
	 *
	 * @dataProvider hook_provider
	 *
	 * @param string $hook     Action the H1 is echoed on.
	 * @param int    $priority Priority of the echo.
	 */
	public function test_hooked_h1_suppresses_fallback( $hook, $priority ) {
		$this->echo_on( $hook, '<h1>Layout heading</h1>', $priority );
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
	 * A script larger than pcre.backtrack_limit (1 MB by default) must still be
	 * skipped: the regex scan gave up there and counted the literal H1 inside it.
	 */
	public function test_large_inert_script_keeps_fallback() {
		$json   = '{"html":"<h1>Not a real heading</h1>","pad":"' . str_repeat( 'x', 1200000 ) . '"}';
		$script = '<script type="application/json">' . $json . '</script>';

		$this->assertFalse( \Neve\Views\Page_Header::markup_has_h1( $script ) );
		$this->assertTrue( \Neve\Views\Page_Header::markup_has_h1( $script . '<h1>Real heading</h1>' ) );

		$id     = $this->visit_page( '<!-- wp:html -->' . $script . '<!-- /wp:html -->' );
		$markup = $this->render_page( $id );

		$this->assertStringContainsString( '<h1 class="screen-reader-text">Fixture page</h1>', $markup );
	}

	/**
	 * Raw-text and comment edge cases the scanner has to get right.
	 *
	 * @dataProvider markup_provider
	 *
	 * @param string $markup   HTML.
	 * @param bool   $expected Whether it holds a real H1.
	 */
	public function test_markup_has_h1( $markup, $expected ) {
		$this->assertSame( $expected, \Neve\Views\Page_Header::markup_has_h1( $markup ) );
	}

	/**
	 * @return array<string, array{0: string, 1: bool}>
	 */
	public function markup_provider() {
		return array(
			'plain h1'                  => array( '<h1>Title</h1>', true ),
			'h1 with attributes'        => array( '<H1 class="x">Title</H1>', true ),
			'h10 is not h1'             => array( '<h10>Nope</h10>', false ),
			'h1 after a comment'        => array( '<!-- note --><h1>Title</h1>', true ),
			'h1 in unterminated comment' => array( '<!-- <h1>Title</h1>', false ),
			'h1 in mixed-case script'   => array( '<SCRIPT><h1>x</h1></Script ><p>y</p>', false ),
			'h1 in template'            => array( '<template id="t"><h1>x</h1></template>', false ),
			'h1 in nested template'     => array( '<template><template>a</template><h1>x</h1></template>', false ),
			'h1 after nested template'  => array( '<template><template>a</template></template><h1>Title</h1>', true ),
			'h1 after unterminated nested template' => array( '<template><template></template><h1>x</h1>', false ),
			'template closer in comment inside template' => array( '<template><!-- </template> --><h1>x</h1></template>', false ),
			'template closer in script inside template'  => array( '<template><script>"</template>"</script><h1>x</h1></template>', false ),
			'h1 text in attribute'                 => array( '<div data-tpl="<h1>x</h1>"><p>y</p></div>', false ),
			'h1 text in single-quoted attribute'   => array( '<div title=\'say "<h1>"\'><p>y</p></div>', false ),
			'template opener in attribute'         => array( '<div data-tpl="<template>"><h1>Title</h1>', true ),
			'script opener in attribute'           => array( '<div data-tpl="<script>"><h1>Title</h1>', true ),
			'comment opener in attribute'          => array( '<div title="<!--"><h1>Title</h1>', true ),
			'unterminated tag'                     => array( '<div data-tpl="<h1>Title', false ),
			'h1 opener at end of input'            => array( '<p>a</p><h1', false ),
			'h1 with unterminated attribute'       => array( '<p>a</p><h1 class="x', false ),
			'h1 text in custom element attribute'  => array( '<my-widget data-tpl="<h1>x</h1>"><p>y</p></my-widget>', false ),
			'template opener in custom element attribute' => array( '<my-widget data-tpl="<template>"><h1>Title</h1>', true ),
			'h1 in noscript'            => array( '<noscript><h1>x</h1></noscript>', false ),
			'h1 in textarea'            => array( '<textarea><h1>x</h1></textarea><p>y</p>', false ),
			'h1 in style'               => array( '<style>/* <h1> */ h1 { color: red; }</style><p>y</p>', false ),
			'h1 in title'               => array( '<title><h1>x</h1></title><p>y</p>', false ),
			'h1 after self-closing svg title' => array( '<svg><title/></svg><h1>Title</h1>', true ),
			'h1 breaks out of svg style'      => array( '<svg><style><h1>Title</h1></style></svg>', true ),
			'h1 breaks out of math style'     => array( '<math><style><h1>Title</h1></style></math>', true ),
			'foreignObject restores raw text' => array( '<svg><foreignObject><style><h1>x</h1></style></foreignObject></svg><p>y</p>', false ),
			'closed svg restores raw text'    => array( '<svg></svg><style><h1>x</h1></style>', false ),
			'self-closing svg opens nothing'  => array( '<svg/><style><h1>x</h1></style>', false ),
			'svg title is an integration point'  => array( '<svg><title><style><h1>x</h1></style></title></svg><p>y</p>', false ),
			'svg desc is an integration point'   => array( '<svg><desc><template><h1>x</h1></template></desc></svg><p>y</p>', false ),
			'math mtext is an integration point' => array( '<math><mtext><style><h1>x</h1></style></mtext></math>', false ),
			'html title under foreignObject is raw text' => array( '<svg><foreignObject><title><h1>x</h1></title></foreignObject></svg><p>y</p>', false ),
			'closed foreignObject returns to foreign rules' => array( '<svg><foreignObject>x</foreignObject><style><h1>Title</h1></style></svg>', true ),
			'closed svg title returns to foreign rules'     => array( '<svg><title>t</title><style><h1>Title</h1></style></svg>', true ),
			'closed svg desc returns to foreign rules'      => array( '<svg><desc>d</desc><style><h1>Title</h1></style></svg>', true ),
			'closed math mi returns to foreign rules'       => array( '<math><mi>m</mi><style><h1>Title</h1></style></math>', true ),
			'script end tag with attributes'     => array( '<script></script foo="bar"><h1>Title</h1>', true ),
			'style end tag with stray slash'     => array( '<style></style/><h1>Title</h1>', true ),
			'h1 in unterminated script' => array( '<script><h1>x</h1>', false ),
			'script closer in a string' => array( '<script>var a = "</scripts>";</script><h1>Title</h1>', true ),
			'h1 after script with lone comment opener' => array( '<script>var s = "<!--";</script><h1>Title</h1>', true ),
			'script inside a comment'   => array( '<!-- <script> --><h1>Title</h1>', true ),
			'stray angle bracket'       => array( '<<h1>Title</h1>', true ),
		);
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
	 * Without the body hooks the content scan still decides the fallback.
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
