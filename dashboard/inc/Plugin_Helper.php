<?php
/**
 * Plugin Action Helper
 *
 * @package Neve
 */

namespace Neve_Dash;

/**
 * Class Plugin_Helper
 *
 * @package Neve
 */
class Plugin_Helper {
	/**
	 * Check plugin state.
	 *
	 * @param string $slug - plugin slug.
	 *
	 * @return bool
	 */
	public function get_plugin_state( $slug ) {
		$plugin_link_suffix = $this->get_plugin_path( $slug );
		if ( file_exists( ABSPATH . 'wp-content/plugins/' . $plugin_link_suffix ) ) {
			return is_plugin_active( $plugin_link_suffix ) ? 'deactivate' : 'activate';
		}

		return 'install';
	}

	/**
	 * Get plugin path based on plugin slug.
	 *
	 * @param string $slug - plugin slug.
	 *
	 * @return string
	 */
	public function get_plugin_path( $slug ) {
		switch ( $slug ) {
			case 'mailin':
				return $slug . '/sendinblue.php';
				break;
			case 'wpforms-lite':
				return $slug . '/wpforms.php';
				break;
			case 'intergeo-maps':
			case 'visualizer':
			case 'translatepress-multilingual':
				return $slug . '/index.php';
				break;
			case 'beaver-builder-lite-version':
				return $slug . '/fl-builder.php';
				break;
			case 'adblock-notify-by-bweb':
				return $slug . '/adblock-notify.php';
				break;
			case 'feedzy-rss-feeds':
				return $slug . '/feedzy-rss-feed.php';
				break;
			default:
				return $slug . '/' . $slug . '.php';
		}
	}

	/**
	 * Call plugin api
	 *
	 * @param string $slug plugin slug.
	 *
	 * @return object
	 */
	public function get_plugin_details( $slug ) {
		include_once( ABSPATH . 'wp-admin/includes/plugin-install.php' );

		return plugins_api(
			'plugin_information',
			array(
				'slug'   => $slug,
				'fields' => array(
					'downloaded'        => false,
					'rating'            => false,
					'description'       => false,
					'short_description' => true,
					'donate_link'       => false,
					'tags'              => false,
					'sections'          => false,
					'homepage'          => false,
					'added'             => false,
					'last_updated'      => false,
					'compatibility'     => false,
					'tested'            => false,
					'requires'          => false,
					'downloadlink'      => false,
					'icons'             => false,
					'banners'           => true,
				),
			)
		);
	}

	/**
	 * Get Plugin Action link.
	 *
	 * @param string $slug plugin slug.
	 * @param string $action action [activate, deactivate].
	 * @return string
	 */
	public function get_plugin_action_link( $slug, $action = 'activate' ) {
		if ( ! in_array( $action, [ 'activate', 'deactivate' ] ) ) {
			return '';
		}

		return add_query_arg(
			array(
				'action'        => $action,
				'plugin'        => rawurlencode( $this->get_plugin_path( $slug ) ),
				'plugin_status' => 'all',
				'paged'         => '1',
				'_wpnonce'      => wp_create_nonce( $action . '-plugin_' . $this->get_plugin_path( $slug ) ),
			),
			esc_url( network_admin_url( 'plugins.php' ) )
		);
	}
}
