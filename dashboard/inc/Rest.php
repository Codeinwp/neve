<?php


namespace Neve_Dash;

use WP_REST_Request;
use WP_REST_Response;

class Rest {
	/**
	 * The API root.
	 */
	const API_ROOT = 'neve-dash/v1';

	/**
	 * Initialize.
	 */
	public function init() {
		add_action( 'rest_api_init', [ $this, 'routes' ] );
	}

	/**
	 * Register routes.
	 */
	public function routes() {
		register_rest_route(
			self::API_ROOT,
			'/toggle_tracking',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => [ $this, 'toggle_tracking' ],
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			)
		);
	}

	/**
	 * Toggles the logger option from the SDK.
	 *
	 * @param WP_REST_Request $request rest request.
	 *
	 * @return WP_REST_Response
	 */
	public function toggle_tracking( WP_REST_Request $request ) {
		$data = $request->get_json_params();

		if ( $data['value'] ) {
			update_option( 'neve_logger_flag', 'yes' );

			return new WP_REST_Response(
				[
					'success' => true,
					'message' => __( 'Option enabled', 'neve' ),
				] 
			);
		}
		update_option( 'neve_logger_flag', 'no' );

		return new WP_REST_Response(
			[
				'success' => true,
				'message' => __( 'Option disabled', 'neve' ),
			] 
		);
	}
}
