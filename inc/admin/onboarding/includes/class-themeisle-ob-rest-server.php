<?php
/**
 * Onboarding Rest Endpoints Handler.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      12/07/2018
 *
 * @package         themeisle-onboarding
 * @soundtrack      Caterpillar (feat. Eminem, King Green) - Royce da 5'9"
 */

/**
 * Class Themeisle_OB_Rest_Server
 *
 * @package ThemeIsle
 */
class Themeisle_OB_Rest_Server {
	/**
	 * Initialize the rest functionality.
	 */
	public function init() {
		add_action( 'rest_api_init', array( $this, 'register_endpoints' ) );
	}

	/**
	 * Register endpoints.
	 */
	public function register_endpoints() {
		register_rest_route(
			Themeisle_Onboarding::API_ROOT,
			'/initialize_sites_library',
			array(
				'methods'  => WP_REST_Server::READABLE,
				'callback' => array( $this, 'init_library' ),
			)
		);
		register_rest_route(
			Themeisle_Onboarding::API_ROOT,
			'/install_plugins',
			array(
				'methods'  => WP_REST_Server::EDITABLE,
				'callback' => array( $this, 'run_plugin_importer' ),
			)
		);
		register_rest_route(
			Themeisle_Onboarding::API_ROOT,
			'/import_content',
			array(
				'methods'  => WP_REST_Server::EDITABLE,
				'callback' => array( $this, 'run_xml_importer' ),
			)
		);
		register_rest_route(
			Themeisle_Onboarding::API_ROOT,
			'/import_theme_mods',
			array(
				'methods'  => WP_REST_Server::EDITABLE,
				'callback' => array( $this, 'run_theme_mods_importer' ),
			)
		);
		register_rest_route(
			Themeisle_Onboarding::API_ROOT,
			'/import_widgets',
			array(
				'methods'  => WP_REST_Server::EDITABLE,
				'callback' => array( $this, 'run_widgets_importer' ),
			)
		);
	}

	/**
	 * Initialize Library
	 *
	 * @return array
	 */
	public function init_library() {

		$cached = get_transient( Themeisle_Onboarding::STORAGE_TRANSIENT );

		if ( ! empty( $cached ) ) {
			// return $cached;
		}

		$theme_support = get_theme_support( 'themeisle-demo-import' );
		if ( empty( $theme_support[0] ) || ! is_array( $theme_support[0] ) ) {
			return array();
		}
		$local_data  = isset( $theme_support[0]['local'] ) ? $theme_support[0]['local'] : array();
		$remote_data = isset( $theme_support[0]['remote'] ) ? $theme_support[0]['remote'] : array();
		$data        = array();

		foreach ( $local_data as $slug => $args ) {
			$json_path = get_template_directory() . Themeisle_Onboarding::OBOARDING_PATH . '/demos/' . $slug . '/data.json';

			if ( ! file_exists( $json_path ) || ! is_readable( $json_path ) ) {
				continue;
			}

			require_once( ABSPATH . '/wp-admin/includes/file.php' );
			global $wp_filesystem;
			WP_Filesystem();
			$json = $wp_filesystem->get_contents( $json_path );

			$data['local'][ $slug ]                 = json_decode( $json, true );
			$data['local'][ $slug ]['title']        = esc_html( $args['title'] );
			$data['local'][ $slug ]['demo_url']     = esc_url( $args['url'] );
			$data['local'][ $slug ]['content_file'] = get_template_directory() . Themeisle_Onboarding::OBOARDING_PATH . '/demos/' . $slug . '/export.xml';
			$data['local'][ $slug ]['screenshot']   = esc_url( get_template_directory_uri() . Themeisle_Onboarding::OBOARDING_PATH . '/demos/' . $slug . '/screenshot.png' );
			$data['local'][ $slug ]['source']       = 'local';
		}

		foreach ( $remote_data as $slug => $args ) {
			$request       = wp_remote_get( $args['url'] . '/wp-json/ti-demo-data/data' );
			$response_code = wp_remote_retrieve_response_code( $request );

			if ( $response_code !== 200 ) {
				continue;
			}

			if ( empty( $request['body'] ) || ! isset( $request['body'] ) ) {
				continue;
			}

			$data['remote'][ $slug ]               = json_decode( $request['body'], true );
			$data['remote'][ $slug ]['title']      = esc_html( $args['title'] );
			$data['remote'][ $slug ]['demo_url']   = esc_url( $args['url'] );
			$data['remote'][ $slug ]['screenshot'] = esc_url( $args['screenshot'] );
			$data['remote'][ $slug ]['source']     = 'remote';
		}

		// set_transient( Themeisle_Onboarding::STORAGE_TRANSIENT, $data, 6 * HOUR_IN_SECONDS );
		return $data;
	}

	/**
	 * Run the plugin importer.
	 *
	 * @param WP_REST_Request $request the async request.
	 */
	public function run_plugin_importer( WP_REST_Request $request ) {
		// wp_send_json( 'Skip Plugin Import.' );
		require_once 'importers/class-themeisle-ob-plugin-importer.php';
		if ( ! class_exists( 'Themeisle_OB_Plugin_Importer' ) ) {
			wp_send_json_error( 'Issue with plugin importer' );
		}
		$plugin_importer = new Themeisle_OB_Plugin_Importer();
		$plugin_importer->install_plugins( $request );
	}

	/**
	 * Run the XML importer.
	 *
	 * @param WP_REST_Request $request the async request.
	 */
	public function run_xml_importer( WP_REST_Request $request ) {
		// wp_send_json( 'Skip Content Import.' );
		require_once 'importers/class-themeisle-ob-content-importer.php';
		if ( ! class_exists( 'Themeisle_OB_Content_Importer' ) ) {
			wp_send_json_error( 'Issue with content importer' );
		}
		$content_importer = new Themeisle_OB_Content_Importer();
		$content_importer->import_remote_xml( $request );
	}

	/**
	 * Run the theme mods importer.
	 *
	 * @param WP_REST_Request $request the async request.
	 */
	public function run_theme_mods_importer( WP_REST_Request $request ) {
		// wp_send_json( 'Skip Theme Mods Import.' );
		require_once 'importers/class-themeisle-ob-theme-mods-importer.php';
		if ( ! class_exists( 'Themeisle_OB_Theme_Mods_Importer' ) ) {
			wp_send_json_error( 'Issue with theme mods importer' );
		}
		$theme_mods_importer = new Themeisle_OB_Theme_Mods_Importer();
		$theme_mods_importer->import_theme_mods( $request );
	}

	/**
	 * Run the widgets importer.
	 *
	 * @param WP_REST_Request $request the async request.
	 */
	public function run_widgets_importer( WP_REST_Request $request ) {
		// wp_send_json( 'Skip Widget Import.' );
		require_once 'importers/class-themeisle-ob-widgets-importer.php';
		if ( ! class_exists( 'Themeisle_OB_Widgets_Importer' ) ) {
			wp_send_json_error( 'Issue with theme mods importer' );
		}
		$theme_mods_importer = new Themeisle_OB_Widgets_Importer();
		$theme_mods_importer->import_widgets( $request );
	}

}
