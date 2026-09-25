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
	 * Reset the static custom colors so they don't leak into other tests.
	 */
	public function tearDown(): void {
		$this->set_custom_global_colors( null );

		parent::tearDown();
	}

	/**
	 * Set the static custom global colors on the compatibility class.
	 *
	 * @param array<string, array{label: string, val: string}>|null $colors Custom global colors, or null for the unloaded default.
	 */
	private function set_custom_global_colors( ?array $colors ): void {
		$custom_colors = new ReflectionProperty( \Neve\Compatibility\Elementor::class, 'custom_global_colors' );
		$custom_colors->setAccessible( true );
		$custom_colors->setValue( null, $colors );
	}

	/**
	 * Build a compatibility instance in a post-init state.
	 *
	 * Avoids ::init(), which needs ELEMENTOR_VERSION defined and would leak that
	 * constant plus its hooks into the rest of the suite.
	 *
	 * @param array<string, array{label: string, val: string}> $custom_global_colors Custom global colors theme mod value.
	 *
	 * @return \Neve\Compatibility\Elementor
	 */
	private function get_elementor_compat( array $custom_global_colors = [] ) {
		$elementor = new \Neve\Compatibility\Elementor();

		$this->set_custom_global_colors( $custom_global_colors );

		return $elementor;
	}

	/**
	 * Elementor's error for a global ID missing from its kit.
	 *
	 * @return WP_Error
	 */
	private function get_global_not_found_error() {
		return new WP_Error( 'global_not_found', 'The Global value you are trying to use is not available.', [ 'status' => 404 ] );
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

	/**
	 * Elementor's not-found error for a Neve color should resolve to the palette color.
	 */
	public function test_global_colors_front_end_resolves_neve_color_on_not_found() {
		$elementor = $this->get_elementor_compat();
		$request   = new WP_REST_Request( 'GET', self::COLOR_ROUTE );

		$filtered = $elementor->alter_global_colors_front_end( $this->get_global_not_found_error(), [], $request );

		$this->assertInstanceOf( WP_REST_Response::class, $filtered );

		$palettes = neve_get_global_colors_default( true );
		$expected = $palettes['palettes'][ $palettes['activePalette'] ]['colors']['nv-primary-accent'];
		$data     = $filtered->get_data();

		$this->assertSame( 'nvprimaryaccent', $data['id'] );
		$this->assertSame( neve_sanitize_colors( $expected ), $data['value'] );
	}

	/**
	 * Elementor's not-found error for a custom Neve color should resolve to that color.
	 */
	public function test_global_colors_front_end_resolves_custom_color_on_not_found() {
		$elementor = $this->get_elementor_compat(
			[
				'custom' => [
					'label' => 'Custom',
					'val'   => '#123456',
				],
			]
		);
		$request   = new WP_REST_Request( 'GET', self::GLOBALS_ROUTE . '/colors/custom' );

		$filtered = $elementor->alter_global_colors_front_end( $this->get_global_not_found_error(), [], $request );

		$this->assertInstanceOf( WP_REST_Response::class, $filtered );

		$data = $filtered->get_data();

		$this->assertSame( 'custom', $data['id'] );
		$this->assertSame( '#123456', $data['value'] );
	}

	/**
	 * Elementor's not-found error for a non-Neve color should be passed through untouched.
	 */
	public function test_global_colors_front_end_passes_through_not_found_for_unknown_color() {
		$elementor = $this->get_elementor_compat();
		$request   = new WP_REST_Request( 'GET', self::GLOBALS_ROUTE . '/colors/primary' );
		$error     = $this->get_global_not_found_error();

		$this->assertSame( $error, $elementor->alter_global_colors_front_end( $error, [], $request ) );
	}

	/**
	 * Elementor's not-found error on a non-color route should be passed through for a Neve ID.
	 */
	public function test_global_colors_front_end_passes_through_not_found_on_typography_route() {
		$elementor = $this->get_elementor_compat();
		$request   = new WP_REST_Request( 'GET', self::GLOBALS_ROUTE . '/typography/nvprimaryaccent' );
		$error     = $this->get_global_not_found_error();

		$this->assertSame( $error, $elementor->alter_global_colors_front_end( $error, [], $request ) );
	}
}
