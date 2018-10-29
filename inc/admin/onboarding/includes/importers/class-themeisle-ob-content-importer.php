<?php
/**
 * Author:  Andrei Baicus <andrei@themeisle.com>
 * On:      21/06/2018
 *
 * @package    themeisle-onboarding
 * @soundtrack Guess Things Happen That Way - Johnny Cash
 */

/**
 * Class Themeisle_OB_Content_Importer
 *
 * @package ThemeIsle
 */
class Themeisle_OB_Content_Importer {
	/**
	 * Import Remote XML file.
	 *
	 * @param WP_REST_Request $request the async request.
	 */
	public function import_remote_xml( WP_REST_Request $request ) {

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( 'Not allowed to import content.' );
		}

		do_action( 'themeisle_ob_before_xml_import' );

		$params           = $request->get_json_params();
		$body             = $params['data'];
		$content_file_url = $body['contentFile'];

		if ( empty( $content_file_url ) ) {
			wp_send_json_error( 'No content to import.' );
		}

		if ( ! isset( $body['source'] ) || empty( $body['source'] ) ) {
			wp_send_json_error( 'Unkown source.' );
		}

		set_time_limit( 10000 );
		require_once( ABSPATH . 'wp-admin/includes/file.php' );
		require_once( ABSPATH . 'wp-admin/includes/image.php' );
		require_once( ABSPATH . 'wp-admin/includes/media.php' );

		if ( $body['source'] === 'remote' ) {
			require_once( ABSPATH . '/wp-admin/includes/file.php' );
			global $wp_filesystem;
			WP_Filesystem();
			$content_file      = $wp_filesystem->get_contents( $content_file_url );
			$content_file_path = $this->save_xhr_return_path( $content_file );
		} else {
			$content_file_path = $content_file_url;
		}

		$this->import_file( $content_file_path );

		if ( $body['source'] === 'remote' ) {
			unlink( $content_file_path );
		}

		do_action( 'themeisle_ob_after_xml_import' );

		print_r( 'Content imported.' . "\n", false );
		$this->maybe_bust_elementor_cache();

		// Set front page.
		if ( isset( $body['frontPage'] ) ) {
			$this->setup_front_page( $body['frontPage'] );
		}
		do_action( 'themeisle_ob_after_front_page_setup' );

		// Set shop pages.
		if ( isset( $body['shopPages'] ) ) {
			$this->setup_shop_pages( $body['shopPages'] );
		}
		do_action( 'themeisle_ob_after_shop_pages_setup' );

		die();
	}

	/**
	 * Save remote XML file and return the file path.
	 *
	 * @param string $content the content.
	 *
	 * @return string
	 */
	private function save_xhr_return_path( $content ) {
		$wp_upload_dir = wp_upload_dir( null, false );
		$file_path     = $wp_upload_dir['basedir'] . '/themeisle-demo-import.xml';
		ob_start();
		echo $content;
		$result = ob_get_clean();
		require_once( ABSPATH . '/wp-admin/includes/file.php' );
		global $wp_filesystem;
		WP_Filesystem();
		$wp_filesystem->put_contents( $file_path, $result );

		return $file_path;
	}

	/**
	 * Set up front page options by `post_name`.
	 *
	 * @param array $args the front page array.
	 */
	private function setup_front_page( $args ) {
		if ( ! is_array( $args ) ) {
			print_r( 'Invalid front page option.' . "\n" );

			return;
		}

		if ( $args['front_page'] === null && $args['blog_page'] === null ) {
			print_r( 'No front page to set up.' . "\n" );

			return;
		}

		update_option( 'show_on_front', 'page' );

		if ( isset( $args['front_page'] ) && $args['front_page'] !== null ) {
			$front_page_obj = get_page_by_path( $args['front_page'] );
			if ( isset( $front_page_obj->ID ) ) {
				update_option( 'page_on_front', $front_page_obj->ID );
			}
		}

		if ( isset( $args['blog_page'] ) && $args['blog_page'] !== null ) {
			$blog_page_obj = get_page_by_path( $args['blog_page'] );
			if ( isset( $blog_page_obj->ID ) ) {
				update_option( 'page_for_posts', $blog_page_obj->ID );
			}
		}

		print_r( 'Front page set up.' . "\n", false );
	}

	/**
	 * Set up shop pages options by `post_name`.
	 *
	 * @param array $pages the shop pages array.
	 */
	private function setup_shop_pages( $pages ) {
		if ( ! class_exists( 'WooCommerce' ) ) {
			print_r( 'WooCommerce not available.' . "\n", false );

			return;
		}
		if ( ! is_array( $pages ) ) {
			print_r( 'Cannot set up shop pages.' . "\n", false );

			return;
		}
		foreach ( $pages as $option_id => $slug ) {
			if ( ! empty( $slug ) ) {
				$page_object = get_page_by_path( $slug );
				if ( isset( $page_object->ID ) ) {
					update_option( $option_id, $page_object->ID );
				}
			}
		}
		print_r( 'Shop pages set up.' . "\n", false );
	}

	/**
	 * Maybe bust cache for elementor plugin.
	 */
	private function maybe_bust_elementor_cache() {
		if ( class_exists( '\Elementor\Plugin' ) ) {
			wp_remote_post(
				esc_url( admin_url( 'admin-ajax.php' ) ),
				array(
					'body' => array(
						'action' => 'elementor_clear_cache',
					),
				)
			);
			print_r( 'Busted Elementor Cache.' . "\n", false );
		}
	}

	/**
	 * Import file
	 *
	 * @param string $file_path the file path to import.
	 */
	private function import_file( $file_path ) {
		if ( empty( $file_path ) || ! file_exists( $file_path ) || ! is_readable( $file_path ) ) {
			wp_send_json_error( 'Export non-existent or is not readable.' );
		}
		$this->load_importer();
		$logger   = new Themeisle_OB_Logger();
		$importer = new Themeisle_OB_WXR_Importer();
		$importer->set_logger( $logger );
		$result = $importer->import( $file_path );
		if ( is_wp_error( $result ) ) {
			wp_send_json_error( 'Could not import content.' );
		}
	}

	/**
	 * Load the importer.
	 */
	private function load_importer() {
		if ( ! class_exists( 'WP_Importer' ) ) {
			defined( 'WP_LOAD_IMPORTERS' ) || define( 'WP_LOAD_IMPORTERS', true );
			require ABSPATH . '/wp-admin/includes/class-wp-importer.php';
		}
		require dirname( __FILE__ ) . '/helpers/wxr_importer/class-themeisle-ob-logger.php';
		require dirname( __FILE__ ) . '/helpers/wxr_importer/class-themeisle-ob-wxr-importer.php';
		require dirname( __FILE__ ) . '/helpers/wxr_importer/class-themeisle-ob-wxr-import-info.php';
	}

}
