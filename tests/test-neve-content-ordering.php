<?php
/**
 * Tests for the blog post content ordering guard.
 *
 * `neve_post_content_ordering` is written by the Customizer as a JSON string, but the
 * theme mod can reach rendering as an array (external theme-mod data, a `theme_mod_`
 * filter). Passing that array straight to `json_decode()` is a fatal TypeError on PHP 8.
 *
 * @package neve
 */

/**
 * Class TestNeveContentOrdering
 */
class TestNeveContentOrdering extends WP_UnitTestCase {

	/**
	 * Default component order shipped by the theme.
	 *
	 * @var array
	 */
	private $defaults = array( 'thumbnail', 'title-meta', 'excerpt' );

	/**
	 * Remove the mod between tests.
	 */
	public function tearDown(): void {
		remove_theme_mod( 'neve_post_content_ordering' );
		parent::tearDown();
	}

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
	public function test_returns_defaults_when_mod_missing() {
		$this->assertSame( $this->defaults, $this->get_ordered_components() );
		$this->assertSame( $this->defaults, $this->get_ordered_components( true ) );
	}

	/**
	 * A JSON string mod - the shape the Customizer control writes - is decoded.
	 */
	public function test_decodes_json_string_mod() {
		set_theme_mod( 'neve_post_content_ordering', wp_json_encode( array( 'title-meta', 'thumbnail' ) ) );

		$this->assertSame( array( 'title-meta', 'thumbnail' ), $this->get_ordered_components( true ) );
	}

	/**
	 * An array-valued mod is returned as-is instead of fataling in json_decode().
	 */
	public function test_array_mod_does_not_fatal() {
		$order = array( 'excerpt', 'thumbnail' );
		set_theme_mod( 'neve_post_content_ordering', $order );

		$this->assertSame( $order, $this->get_ordered_components() );
		$this->assertSame( $order, $this->get_ordered_components( true ) );
	}

	/**
	 * An array injected by a theme_mod_ filter is handled the same way.
	 */
	public function test_array_from_theme_mod_filter_does_not_fatal() {
		$order  = array( 'title-meta', 'excerpt' );
		$filter = function () use ( $order ) {
			return $order;
		};
		add_filter( 'theme_mod_neve_post_content_ordering', $filter );

		$components = $this->get_ordered_components( true );

		remove_filter( 'theme_mod_neve_post_content_ordering', $filter );

		$this->assertSame( $order, $components );
	}

	/**
	 * Values that are neither arrays nor valid JSON arrays fall back to the defaults.
	 *
	 * @param mixed $mod the stored mod value.
	 *
	 * @dataProvider provide_invalid_mods
	 */
	public function test_invalid_mod_falls_back_to_defaults( $mod ) {
		set_theme_mod( 'neve_post_content_ordering', $mod );

		$this->assertSame( $this->defaults, $this->get_ordered_components( true ) );
	}

	/**
	 * The customizer side reader tolerates the same shapes.
	 *
	 * @param mixed $mod      the stored mod value.
	 * @param array $expected the expected order.
	 *
	 * @dataProvider provide_mod_shapes
	 */
	public function test_post_elements_order_handles_all_shapes( $mod, $expected ) {
		set_theme_mod( 'neve_post_content_ordering', $mod );

		$layout_blog = new \Neve\Customizer\Options\Layout_Blog();
		$method      = new ReflectionMethod( $layout_blog, 'get_post_elements_order' );
		$method->setAccessible( true );

		$this->assertSame( $expected, $method->invoke( $layout_blog ) );
	}

	/**
	 * Mod shapes and the order they should produce.
	 *
	 * @return array
	 */
	public function provide_mod_shapes() {
		$defaults = array( 'thumbnail', 'title-meta', 'excerpt' );

		return array(
			'json string' => array( wp_json_encode( array( 'excerpt', 'thumbnail' ) ), array( 'excerpt', 'thumbnail' ) ),
			'array'       => array( array( 'excerpt', 'thumbnail' ), array( 'excerpt', 'thumbnail' ) ),
			'broken json' => array( '[thumbnail,', $defaults ),
			'boolean'     => array( true, $defaults ),
		);
	}

	/**
	 * The sanitize callback keeps valid input and never fatals on an array.
	 */
	public function test_sanitize_handles_arrays_and_invalid_input() {
		$layout_blog = new \Neve\Customizer\Options\Layout_Blog();
		$encoded     = wp_json_encode( $this->defaults );

		// A valid JSON string is passed through untouched.
		$this->assertSame( wp_json_encode( array( 'excerpt', 'thumbnail' ) ), $layout_blog->sanitize_post_content_ordering( wp_json_encode( array( 'excerpt', 'thumbnail' ) ) ) );

		// An array is accepted and normalized back to a JSON string.
		$this->assertSame( wp_json_encode( array( 'excerpt', 'thumbnail' ) ), $layout_blog->sanitize_post_content_ordering( array( 'excerpt', 'thumbnail' ) ) );

		// Unknown components, broken JSON and scalars fall back to the defaults.
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( wp_json_encode( array( 'thumbnail', 'evil' ) ) ) );
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( array( 'thumbnail', 'evil' ) ) );
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( '[thumbnail,' ) );
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( '' ) );
		$this->assertSame( $encoded, $layout_blog->sanitize_post_content_ordering( true ) );
	}

	/**
	 * Invalid mod values.
	 *
	 * @return array
	 */
	public function provide_invalid_mods() {
		return array(
			'empty string'   => array( '' ),
			'broken json'    => array( '[thumbnail,' ),
			'json scalar'    => array( '"thumbnail"' ),
			'integer'        => array( 5 ),
			'boolean'        => array( true ),
		);
	}
}
