<?php
/**
 * WordPress troubleshooting module.
 *
 * @package Neve
 */

namespace Neve\Admin\Troubleshoot;

use ThemeisleSDK\Product;

/**
 * Class Main
 *
 * @package Neve\Admin\Troubleshoot
 */
final class Main {
	/**
	 * Init function
	 *
	 * @return void
	 */
	public function init() {
		add_filter( 'debug_information', [ $this, 'neve_add_debug_info' ] );

		add_filter( 'site_status_tests', [ $this, 'neve_add_tests' ] );
	}

	/**
	 * Register Neve Accordion on Debug Info page.
	 *
	 * @param array $debug_info Debug List.
	 *
	 * @return array
	 */
	public function neve_add_debug_info( $debug_info ) {
		$custom_customizer_css = wp_get_custom_css();

		$debug_info['neve'] = array(
			'label'  => __( 'Neve', 'neve' ),
			'fields' => array(
				'api'            => array(
					'label'   => __( 'API connectivity', 'neve' ),
					'value'   => $this->test_api_connectivity() ? __( 'YES', 'neve' ) : __( 'NO', 'neve' ) . ' ' . get_transient( 'neve_troubleshoot_api_reason' ),
					'private' => false,
				),
				'child'          => array(
					'label'   => __( 'Child theme files', 'neve' ),
					'value'   => is_child_theme() ? $this->list_files() : __( 'NO', 'neve' ),
					'private' => false,
				),
				'customizer_css' => array(
					'label'   => __( 'Customizer Custom CSS', 'neve' ),
					'value'   => empty( $custom_customizer_css ) ? 'NO' : $custom_customizer_css,
					'private' => false,
				),
			),
		);

		return $debug_info;
	}

	/**
	 * List active theme files
	 *
	 * @return string
	 */
	public function list_files() {
		return implode( ",\n\r", list_files( get_stylesheet_directory(), 2 ) );
	}

	/**
	 * Register tests for the Status Page
	 *
	 * @param array $tests List of tests.
	 *
	 * @return array
	 */
	public function neve_add_tests( $tests ) {
		$tests['direct']['neve_api_test'] = array(
			'label' => __( 'Neve API connectivity', 'neve' ),
			'test'  => [ $this, 'neve_api_test' ],
		);
		return $tests;
	}

	/**
	 * Neve API test pretty response
	 *
	 * @return array
	 */
	public function neve_api_test() {
		$result = array(
			'label'       => __( 'Neve API connectivity', 'neve' ),
			'status'      => 'good',
			'badge'       => array(
				'label' => __( 'Neve', 'neve' ),
				'color' => 'blue',
			),
			'description' => sprintf(
				'<p>%s</p>',
				__( 'API connectivity for Neve is available.', 'neve' )
			),
			'actions'     => '',
			'test'        => 'neve_api_test',
		);

		if ( ! $this->test_api_connectivity() ) {
			$result['status']         = 'critical';
			$result['label']          = __( 'Can NOT connect to API', 'neve' );
			$result['badge']['color'] = 'red';
			$result['description']    = sprintf(
				'<p>%s</p>',
				__( 'API connectivity for Neve is NOT available on your site.', 'neve' )
			);
			$result['actions']       .= sprintf(
				'<p><a href="%s">%s</a></p>',
				esc_url( 'https://themeisle.com/contact/' ),
				__( 'Contact Support', 'neve' )
			);
		}

		return $result;
	}

	/**
	 * Test API connectivity to Themeisle
	 *
	 * @return bool
	 */
	public function test_api_connectivity() {
		$transient = get_transient( 'neve_troubleshoot_api_response' );
		if ( $transient !== false ) {
			return ( $transient === 'yes' );
		}
		$response = wp_remote_get( //phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.wp_remote_get_wp_remote_get, Already used.
			sprintf( '%shealth', Product::API_URL ),
			array(
				'timeout'   => 15, //phpcs:ignore WordPressVIPMinimum.Performance.RemoteRequestTimeout.timeout_timeout, Inherited by wp_remote_get only, for vip environment we use defaults.
				'sslverify' => false,
			)
		);
		if ( is_wp_error( $response ) || 200 != wp_remote_retrieve_response_code( $response ) ) {
			$reason = is_wp_error( $response ) ? $response->get_error_message() : $response['response']['message'];
			set_transient( 'neve_troubleshoot_api_reason', $reason, 10 * MINUTE_IN_SECONDS );
			set_transient( 'neve_troubleshoot_api_response', 'no', 10 * MINUTE_IN_SECONDS );
			return false;
		}
		set_transient( 'neve_troubleshoot_api_reason', '', 10 * MINUTE_IN_SECONDS );
		set_transient( 'neve_troubleshoot_api_response', 'yes', 10 * MINUTE_IN_SECONDS );
		return true;
	}
}
