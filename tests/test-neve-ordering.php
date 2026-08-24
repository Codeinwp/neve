<?php
/**
 * Tests for the ordering guards.
 *
 * The ordering mods - `neve_post_content_ordering` for the blog, and
 * `neve_layout_single_post_elements_order` for the single post - are written by the
 * Customizer as JSON strings, but they can reach PHP as arrays (external theme-mod data, a
 * `theme_mod_` filter, the Neve Pro custom post type module). Passing an array straight to
 * `json_decode()` is a fatal TypeError on PHP 8, and a value that decodes to null fatals
 * further down in `in_array()` / `array_search()`.
 *
 * @package neve
 */

/**
 * Class TestNeveOrdering
 */
class TestNeveOrdering extends WP_UnitTestCase {

	/**
	 * Default blog component order shipped by the theme.
	 *
	 * @var array
	 */
	private $blog_defaults = array( 'thumbnail', 'title-meta', 'excerpt' );

	/**
	 * Remove the mods between tests.
	 */
	public function tearDown(): void {
		remove_theme_mod( 'neve_post_content_ordering' );
		remove_theme_mod( 'neve_layout_single_post_elements_order' );
		parent::tearDown();
	}

	/*
	 * ---------------------------------------------------------------------------------------
	 * Blog - neve_post_content_ordering
	 * ---------------------------------------------------------------------------------------
	 */

	/**
	 * Get the ordered components from the template parts view.
	 *
	 * @param bool $associative whether to decode associatively.
	 *
	 * @return mixed
	 */
	private function get_ordered_components( $associative = false ) {
		$template_parts = new \Neve\Views\Template_Parts();

		return $template_parts->get_ordered_components( $associative );
	}

	/**
	 * The default is used when no mod is set.
	 */
	public function test_blog_returns_defaults_when_mod_missing() {
		$this->assertSame( $this->blog_defaults, $this->get_ordered_components() );
		$this->assertSame( $this->blog_defaults, $this->get_ordered_components( true ) );
	}

	/**
	 * A JSON string mod - the shape the Customizer control writes - is decoded.
	 */
	public function test_blog_decodes_json_string_mod() {
		set_theme_mod( 'neve_post_content_ordering', wp_json_encode( array( 'title-meta', 'thumbnail' ) ) );

		$this->assertSame( array( 'title-meta', 'thumbnail' ), $this->get_ordered_components( true ) );
	}

	/**
	 * An array-valued mod is returned as-is instead of fataling in json_decode().
	 */
	public function test_blog_array_mod_does_not_fatal() {
		$order = array( 'excerpt', 'thumbnail' );
		set_theme_mod( 'neve_post_content_ordering', $order );

		$this->assertSame( $order, $this->get_ordered_components() );
		$this->assertSame( $order, $this->get_ordered_components( true ) );
	}

	/**
	 * An array injected by a theme_mod_ filter is handled the same way.
	 */
	public function test_blog_array_from_theme_mod_filter_does_not_fatal() {
		$order  = array( 'title-meta', 'excerpt' );
		$filter = function () use ( $order ) {
			return $order;
		};
		add_filter( 'theme_mod_neve_post_content_ordering', $filter );

		try {
 			$components = $this->get_ordered_components( true );
 			$this->assertSame( $order, $components );
 		} finally {
 			remove_filter( 'theme_mod_neve_post_content_ordering', $filter );
 		}
	}

	/**
	 * Values that are neither arrays nor valid JSON arrays fall back to the defaults.
	 *
	 * @param mixed $mod the stored mod value.
	 *
	 * @dataProvider provide_invalid_blog_mods
	 */
	public function test_blog_invalid_mod_falls_back_to_defaults( $mod ) {
		set_theme_mod( 'neve_post_content_ordering', $mod );

		$this->assertSame( $this->blog_defaults, $this->get_ordered_components() );
		$this->assertSame( $this->blog_defaults, $this->get_ordered_components( true ) );
	}

	/**
	 * Invalid blog mod values.
	 *
	 * @return array
	 */
	public function provide_invalid_blog_mods() {
		return array(
			'empty string' => array( '' ),
			'broken json'  => array( '[thumbnail,' ),
			'json scalar'  => array( '"thumbnail"' ),
			'integer'      => array( 5 ),
			'boolean'      => array( true ),
		);
	}

	/**
	 * The customizer side reader tolerates the same shapes.
	 *
	 * @param mixed $mod      the stored mod value.
	 * @param array $expected the expected order.
	 *
	 * @dataProvider provide_blog_mod_shapes
	 */
	public function test_blog_post_elements_order_handles_all_shapes( $mod, $expected ) {
		set_theme_mod( 'neve_post_content_ordering', $mod );

		$layout_blog = new \Neve\Customizer\Options\Layout_Blog();
		$method      = new ReflectionMethod( $layout_blog, 'get_post_elements_order' );
		$method->setAccessible( true );

		$this->assertSame( $expected, $method->invoke( $layout_blog ) );
	}

	/**
	 * Blog mod shapes and the order they should produce.
	 *
	 * @return array
	 */
	public function provide_blog_mod_shapes() {
		$defaults = array( 'thumbnail', 'title-meta', 'excerpt' );

		return array(
			'json string' => array( wp_json_encode( array( 'excerpt', 'thumbnail' ) ), array( 'excerpt', 'thumbnail' ) ),
			'array'       => array( array( 'excerpt', 'thumbnail' ), array( 'excerpt', 'thumbnail' ) ),
			'broken json' => array( '[thumbnail,', $defaults ),
			'boolean'     => array( true, $defaults ),
		);
	}

	/**
	 * The blog sanitize callback keeps valid input and never fatals on an array.
	 */
	public function test_blog_sanitize_handles_arrays_and_invalid_input() {
		$layout_blog = new \Neve\Customizer\Options\Layout_Blog();
		$encoded     = wp_json_encode( $this->blog_defaults );

		// A valid JSON string is passed through untouched.
		$this->assertSame( wp_json_encode( array( 'excerpt', 'thumbnail' ) ), $layout_blog->sanitize_post_content_ordering( wp_json_encode( array( 'excerpt', 'thumbnail' ) ) ) );

		// An array is accepted and normalized back to a JSON string.
		$this->assertSame( wp_json_encode( array( 'excerpt', 'thumbnail' ) ), $layout_blog->sanitize_post_content_ordering( array( 'excerpt', 'thumbnail' ) ) );

		// Associative, sparse and JSON object input is reindexed - the ordering control needs a JSON list.
		$this->assertSame( wp_json_encode( array( 'excerpt', 'thumbnail' ) ), $layout_blog->sanitize_post_content_ordering( array( 'a' => 'excerpt', 'b' => 'thumbnail' ) ) );
		$this->assertSame( wp_json_encode( array( 'excerpt', 'thumbnail' ) ), $layout_blog->sanitize_post_content_ordering( array( 2 => 'excerpt', 5 => 'thumbnail' ) ) );
		$this->assertSame( wp_json_encode( array( 'excerpt', 'thumbnail' ) ), $layout_blog->sanitize_post_content_ordering( '{"a":"excerpt","b":"thumbnail"}' ) );

		// Unknown components, broken JSON and scalars fall back to the defaults.
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( wp_json_encode( array( 'thumbnail', 'evil' ) ) ) );
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( array( 'thumbnail', 'evil' ) ) );
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( '[thumbnail,' ) );
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( '' ) );
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( true ) );
	}

	/*
	 * ---------------------------------------------------------------------------------------
	 * Single post - neve_layout_single_post_elements_order
	 * ---------------------------------------------------------------------------------------
	 */

	/**
	 * Get the rendering side content order.
	 *
	 * @return array
	 */
	private function get_content_order() {
		$post_layout = new \Neve\Views\Post_Layout();
		$method      = new ReflectionMethod( $post_layout, 'get_content_order' );
		$method->setAccessible( true );

		return $method->invoke( $post_layout );
	}

	/**
	 * Ask the customizer whether an element is enabled.
	 *
	 * @param string $element the element slug.
	 *
	 * @return bool
	 */
	private function element_is_enabled( $element ) {
		$layout_single_post = new \Neve\Customizer\Options\Layout_Single_Post();

		return $layout_single_post->element_is_enabled( $element );
	}

	/**
	 * Run the single post control sanitize callback.
	 *
	 * @param mixed $value the value to sanitize.
	 *
	 * @return string
	 */
	private function sanitize_single_post( $value ) {
		$layout_single_post = new \Neve\Customizer\Options\Layout_Single_Post();

		return $layout_single_post->sanitize_post_elements_ordering( $value );
	}

	/**
	 * A JSON string mod - the shape the Customizer control writes - is decoded.
	 */
	public function test_single_post_decodes_json_string_mod() {
		set_theme_mod( 'neve_layout_single_post_elements_order', wp_json_encode( array( 'content', 'tags' ) ) );

		$this->assertSame( array( 'content', 'tags' ), $this->get_content_order() );
		$this->assertTrue( $this->element_is_enabled( 'tags' ) );
		$this->assertFalse( $this->element_is_enabled( 'comments' ) );
	}

	/**
	 * An array valued mod does not fatal on the rendering side.
	 */
	public function test_single_post_array_mod_does_not_fatal_on_render() {
		set_theme_mod( 'neve_layout_single_post_elements_order', array( 'content', 'comments' ) );

		$this->assertSame( array( 'content', 'comments' ), $this->get_content_order() );
	}

	/**
	 * An array valued mod does not fatal in the customizer active callback.
	 */
	public function test_single_post_array_mod_does_not_fatal_in_active_callback() {
		set_theme_mod( 'neve_layout_single_post_elements_order', array( 'content', 'comments' ) );

		$this->assertTrue( $this->element_is_enabled( 'comments' ) );
		$this->assertFalse( $this->element_is_enabled( 'tags' ) );
	}

	/**
	 * An array injected by a theme_mod_ filter - the shape Neve Pro uses for custom post
	 * types - is handled the same way.
	 */
	public function test_single_post_array_from_theme_mod_filter_does_not_fatal() {
		$order  = array( 'title-meta', 'content' );
		$filter = function () use ( $order ) {
			return $order;
		};
		add_filter( 'theme_mod_neve_layout_single_post_elements_order', $filter );

		$content_order = $this->get_content_order();
		$enabled       = $this->element_is_enabled( 'content' );

		remove_filter( 'theme_mod_neve_layout_single_post_elements_order', $filter );

		$this->assertSame( $order, $content_order );
		$this->assertTrue( $enabled );
	}

	/**
	 * Values that are neither arrays nor valid JSON arrays fall back to the defaults.
	 *
	 * @param mixed $mod the stored mod value.
	 *
	 * @dataProvider provide_invalid_single_post_mods
	 */
	public function test_single_post_invalid_mod_falls_back_to_defaults( $mod ) {
		set_theme_mod( 'neve_layout_single_post_elements_order', $mod );

		$this->assertContains( 'content', $this->get_content_order() );
		$this->assertTrue( $this->element_is_enabled( 'content' ) );
	}

	/**
	 * Invalid single post mod values.
	 *
	 * @return array
	 */
	public function provide_invalid_single_post_mods() {
		return array(
			'empty string' => array( '' ),
			'broken json'  => array( '[content,' ),
			'json scalar'  => array( '"content"' ),
			'integer'      => array( 5 ),
			'boolean'      => array( true ),
		);
	}

	/**
	 * The single post sanitize callback keeps valid input and never fatals on an array.
	 */
	public function test_single_post_sanitize_handles_arrays_and_invalid_input() {
		$order   = array( 'content', 'tags' );
		$encoded = wp_json_encode( $order );

		// A valid JSON string is passed through.
		$this->assertSame( $encoded, $this->sanitize_single_post( $encoded ) );

		// An array is accepted and normalized back to a JSON string.
		$this->assertSame( $encoded, $this->sanitize_single_post( $order ) );

		// Associative, sparse and JSON object input is reindexed - the ordering control needs a JSON list.
		$this->assertSame( $encoded, $this->sanitize_single_post( array( 'a' => 'content', 'b' => 'tags' ) ) );
		$this->assertSame( $encoded, $this->sanitize_single_post( array( 2 => 'content', 5 => 'tags' ) ) );
		$this->assertSame( $encoded, $this->sanitize_single_post( '{"a":"content","b":"tags"}' ) );

		// Unknown components, broken JSON and scalars fall back to every allowed component.
		foreach ( array( wp_json_encode( array( 'content', 'evil' ) ), array( 'content', 'evil' ), '[content,', '', true ) as $invalid ) {
			$decoded = json_decode( $this->sanitize_single_post( $invalid ), true );
			$this->assertIsArray( $decoded );
			$this->assertContains( 'content', $decoded );
			$this->assertContains( 'comments', $decoded );
		}
	}

	/**
	 * The metabox per post override tolerates an array or broken meta value.
	 */
	public function test_single_post_metabox_elements_order_filter_handles_all_shapes() {
		$post_id = self::factory()->post->create( array( 'post_status' => 'publish' ) );
		$this->go_to( get_permalink( $post_id ) );

		$metabox  = new \Neve\Views\Pluggable\Metabox_Settings();
		$fallback = array( 'title-meta', 'content' );

		// A JSON string - the shape the editor sidebar saves - wins over the customizer order.
		update_post_meta( $post_id, 'neve_post_elements_order', wp_json_encode( array( 'content', 'tags' ) ) );
		$this->assertSame( array( 'content', 'tags' ), $metabox->filter_post_elements( $fallback ) );

		// An array valued meta - only reachable when the meta was written before the
		// registered sanitize_text_field callback was in place - is returned as is
		// instead of fataling.
		add_filter( 'get_post_metadata', $array_meta = function ( $value, $object_id, $meta_key ) use ( $post_id ) {
			if ( $object_id === $post_id && $meta_key === 'neve_post_elements_order' ) {
				return array( array( 'tags', 'content' ) );
			}

			return $value;
		}, 10, 3 );

		try {
 			$this->assertSame( array( 'tags', 'content' ), $metabox->filter_post_elements( $fallback ) );
 		} finally {
 			remove_filter( 'get_post_metadata', $array_meta, 10 );
 		}

		// Broken JSON falls back to the order passed in by the customizer.
		update_post_meta( $post_id, 'neve_post_elements_order', '[content,' );
		$this->assertSame( $fallback, $metabox->filter_post_elements( $fallback ) );
	}
}
