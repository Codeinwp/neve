<?php
/**
 * Plugin Importer.
 *
 * Author:  Andrei Baicus <andrei@themeisle.com>
 * On:      21/06/2018
 *
 * @package    themeisle-onboarding
 * @soundtrack Kick In the Door (2014 Remastered Version) - The Notorious B.I.G.
 */

/**
 * Class Themeisle_OB_Plugin_Importer
 */
class Themeisle_OB_Plugin_Importer {

	/**
	 * Install Plugins.
	 *
	 * @param WP_REST_Request $request contains the plugins that should be installed.
	 */
	public function install_plugins( WP_REST_Request $request ) {
		if ( ! current_user_can( 'install_plugins' ) ) {
			wp_send_json_error( 'Sorry, you are not allowed to install plugins on this site.' );
		}

		do_action( 'themeisle_ob_before_plugins_install' );

		$params  = $request->get_json_params();
		$plugins = $params['data'];

		foreach ( $plugins as $slug => $state ) {
			if ( $state === false ) {
				unset( $plugins[ $slug ] );
			}
		}

		if ( empty( $plugins ) || ! is_array( $plugins ) ) {
			wp_send_json_success( 'No plugins to install.' );
		}

		$active_plugins = get_option( 'active_plugins' );

		foreach ( $plugins as $plugin_slug => $nicename ) {
			if ( in_array( $plugin_slug, $active_plugins ) ) {
				continue;
			}
			$this->install_single_plugin( $plugin_slug );
			$this->activate_single_plugin( $plugin_slug );
		}

		do_action( 'themeisle_ob_after_plugins_install' );

		wp_send_json_success( 'Done.' );
	}

	/**
	 * Install a single plugin
	 *
	 * @param string $plugin_slug plugin slug.
	 */
	private function install_single_plugin( $plugin_slug ) {
		$plugin_dir = WP_PLUGIN_DIR . '/' . $plugin_slug;

		if ( is_dir( $plugin_dir ) ) {
			return;
		}

		do_action( 'themeisle_ob_before_single_plugin_install', $plugin_slug );

		require_once( ABSPATH . 'wp-admin/includes/plugin-install.php' );
		require_once( ABSPATH . 'wp-admin/includes/file.php' );
		require_once( ABSPATH . 'wp-admin/includes/misc.php' );
		require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
		require_once( ABSPATH . 'wp-admin/includes/class-wp-upgrader.php' );

		$api = plugins_api(
			'plugin_information',
			array(
				'slug'   => $plugin_slug,
				'fields' => array(
					'short_description' => false,
					'sections'          => false,
					'requires'          => false,
					'rating'            => false,
					'ratings'           => false,
					'downloaded'        => false,
					'last_updated'      => false,
					'added'             => false,
					'tags'              => false,
					'compatibility'     => false,
					'homepage'          => false,
					'donate_link'       => false,
				),
			)
		);

		require_once 'helpers/class-themeisle-ob-quiet-skin.php';
		$skin     = new Themeisle_OB_Quiet_Skin(
			array(
				'api' => $api,
			)
		);
		$upgrader = new Plugin_Upgrader( $skin );
		$install  = $upgrader->install( $api->download_link );
		if ( $install !== true ) {
			print_r( 'Error: Install process failed (' . ucwords( $plugin_slug ) . ').' . "\n", false );

			return;
		}
		print_r( 'Installed "' . ucwords( $plugin_slug ) . '"' . "\n ", false );

		do_action( 'themeisle_ob_after_single_plugin_install', $plugin_slug );
	}

	/**
	 * Get full plugin path.
	 *
	 * @param string $slug The plugin slug.
	 *
	 * @return string
	 */
	private function get_plugin_path( $slug ) {
		$plugin_dir = WP_PLUGIN_DIR . '/' . $slug;

		if ( $slug === 'advanced-css-editor' ) {
			return $plugin_dir . '/css-editor.php';
		}

		if ( $slug === 'contact-form-7' ) {
			return $plugin_dir . '/wp-contact-form-7.php';
		}

		$plugin_path = $plugin_dir . '/' . $slug . '.php';

		if ( ! file_exists( $plugin_path ) ) {
			$plugin_path = $plugin_dir . '/' . 'index.php';
		}

		return $plugin_path;
	}

	/**
	 * Get plugin entry file.
	 *
	 * @param string $slug The plugin slug.
	 *
	 * @return string
	 */
	private function get_plugin_entry( $slug ) {
		if ( $slug === 'advanced-css-editor' ) {
			return $slug . '/css-editor.php';
		}

		$plugins_dir = WP_PLUGIN_DIR . '/';
		$entry       = $slug . '/' . $slug . '.php';
		if ( ! file_exists( $plugins_dir . $entry ) ) {
			$entry = $slug . '/index.php';
		}

		return $entry;
	}

	/**
	 * Activate a single plugin
	 *
	 * @param string $plugin_slug plugin slug.
	 */
	private function activate_single_plugin( $plugin_slug ) {
		$plugin_dir = WP_PLUGIN_DIR . '/' . $plugin_slug;

		$plugin_path  = $this->get_plugin_path( $plugin_slug );
		$plugin_entry = $this->get_plugin_entry( $plugin_slug );

		if ( ! file_exists( $plugin_path ) ) {
			print_r( 'No plugin with the slug "' . $plugin_slug . '" under that directory.' . "\n" );

			return;
		}

		do_action( 'themeisle_ob_before_single_plugin_activation', $plugin_slug );

		include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

		if ( is_plugin_active( $plugin_entry ) ) {
			print_r( '"' . ucwords( $plugin_slug ) . '" already active.' . "\n" );

			return;
		}
		$this->maybe_provide_activation_help( $plugin_slug, $plugin_dir );

		activate_plugin( $plugin_path );
		print_r( 'Activated ' . ucwords( $plugin_slug ) . '.' . "\n" );

		do_action( 'themeisle_ob_after_single_plugin_activation', $plugin_slug );
	}

	/**
	 * Take care of plugins that need special conditions on activation.
	 *
	 * @param string $slug plugin slug.
	 * @param string $path plugin path.
	 */
	private function maybe_provide_activation_help( $slug, $path ) {
		if ( $slug === 'woocommerce' ) {
			require_once( $path . '/includes/admin/wc-admin-functions.php' );
		}
	}
}
