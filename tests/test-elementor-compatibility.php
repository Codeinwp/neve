<?php
/**
 * Tests Elementor compatibility.
 *
 * @package neve
 */

/**
 * Class TestElementorCompatibility
 */
class TestElementorCompatibility extends WP_UnitTestCase {

	/**
	 * The globals REST route filtered by the picker callback.
	 */
	const GLOBALS_ROUTE = '/elementor/v1/globals';

	/**
	 * A single global color REST route, filtered by the front end callback.
	 */
	const COLOR_ROUTE = self::GLOBALS_ROUTE . '/colors/nvprimaryaccent';

	/**
	 * Build a compatibility instance in a post-init state.
	 *
	 * Avoids ::init(), which needs ELEMENTOR_VERSION defined and would leak that
	 * constant plus its hooks into the rest of the suite.
	 *
	 * @return \Neve\Compatibility\Elementor
	 */
	private function get_elementor_compat() {
		$elementor = new \Neve\Compatibility\Elementor();

		$custom_colors = new ReflectionProperty( $elementor, 'custom_global_colors' );
		$custom_colors->setAccessible( true );
		$custom_colors->setValue( null, [] );

		return $elementor;
	}

	/**
	 * Errored responses should be passed through untouched.
	 */
	public function test_global_colors_in_picker_passes_through_wp_error() {
		$elementor = $this->get_elementor_compat();
		$request   = new WP_REST_Request( 'GET', self::GLOBALS_ROUTE );
		$error     = new WP_Error( 'rest_forbidden', 'Sorry, you are not allowed to do that.', [ 'status' => 403 ] );

		$this->assertSame( $error, $elementor->alter_global_colors_in_picker( $error, [], $request ) );
	}

	/**
	 * Errored responses on a color route should be passed through untouched.
	 */
	public function test_global_colors_front_end_passes_through_wp_error() {
		$elementor = $this->get_elementor_compat();
		$request   = new WP_REST_Request( 'GET', self::COLOR_ROUTE );
		$error     = new WP_Error( 'rest_forbidden', 'Sorry, you are not allowed to do that.', [ 'status' => 403 ] );

		$this->assertSame( $error, $elementor->alter_global_colors_front_end( $error, [], $request ) );
	}

	/**
	 * Valid responses should still get the Neve palette colors merged in.
	 */
	public function test_global_colors_in_picker_adds_palette_colors() {
		$elementor = $this->get_elementor_compat();
		$request   = new WP_REST_Request( 'GET', self::GLOBALS_ROUTE );
		$response  = new WP_REST_Response( [ 'colors' => [] ] );

		$filtered = $elementor->alter_global_colors_in_picker( $response, [], $request );
		$data     = $filtered->get_data();

		$this->assertArrayHasKey( 'nvprimaryaccent', $data['colors'] );
		$this->assertArrayHasKey( 'value', $data['colors']['nvprimaryaccent'] );
	}

	/**
	 * Valid responses on a single color route should be replaced with the Neve color.
	 */
	public function test_global_colors_front_end_overrides_color() {
		$elementor = $this->get_elementor_compat();
		$request   = new WP_REST_Request( 'GET', self::COLOR_ROUTE );
		$response  = new WP_REST_Response( [] );

		$filtered = $elementor->alter_global_colors_front_end( $response, [], $request );
		$data     = $filtered->get_data();

		$this->assertSame( 'nvprimaryaccent', $data['id'] );
		$this->assertArrayHasKey( 'value', $data );
	}
}
