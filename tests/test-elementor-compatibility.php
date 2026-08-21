<?php
/**
 * Description Test Elementor compatibility
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
	 * Errored responses should be passed through untouched.
	 */
	public function test_global_colors_in_picker_passes_through_wp_error() {
		$elementor = new \Neve\Compatibility\Elementor();
		$request   = new WP_REST_Request( 'GET', self::GLOBALS_ROUTE );
		$error     = new WP_Error( 'rest_forbidden', 'Sorry, you are not allowed to do that.', [ 'status' => 403 ] );

		$this->assertSame( $error, $elementor->alter_global_colors_in_picker( $error, [], $request ) );
	}

	/**
	 * Errored responses on a color route should be passed through untouched.
	 */
	public function test_global_colors_front_end_passes_through_wp_error() {
		$elementor = new \Neve\Compatibility\Elementor();
		$request   = new WP_REST_Request( 'GET', '/elementor/v1/globals/colors/nvprimaryaccent' );
		$error     = new WP_Error( 'rest_forbidden', 'Sorry, you are not allowed to do that.', [ 'status' => 403 ] );

		$this->assertSame( $error, $elementor->alter_global_colors_front_end( $error, [], $request ) );
	}

	/**
	 * Valid responses should still get the Neve palette colors merged in.
	 */
	public function test_global_colors_in_picker_adds_palette_colors() {
		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			define( 'ELEMENTOR_VERSION', '3.0.0' );
		}

		$elementor = new \Neve\Compatibility\Elementor();
		$elementor->init();
		$request  = new WP_REST_Request( 'GET', self::GLOBALS_ROUTE );
		$response = new WP_REST_Response( [ 'colors' => [] ] );

		$filtered = $elementor->alter_global_colors_in_picker( $response, [], $request );
		$data     = $filtered->get_data();

		$this->assertArrayHasKey( 'nvprimaryaccent', $data['colors'] );
		$this->assertArrayHasKey( 'value', $data['colors']['nvprimaryaccent'] );
	}
}
