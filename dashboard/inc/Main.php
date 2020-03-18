<?php
/**
 * Main class of the Neve Dashboard
 */

namespace Neve_Dash;

/**
 * Class Main
 * @package Neve_Dash
 */
class Main {
	/**
	 * @var
	 * Current theme args
	 */
	private $theme_args = [];

	/**
	 * Main constructor.
	 */
	public function __construct() {
		$this->setup_config();
		$this->run_actions();
	}

	/**
	 * Run WordPress attached to actions.
	 */
	private function run_actions() {
		add_action( 'admin_menu', [ $this, 'register' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue' ] );
	}

	/**
	 * Setup the class props based on current theme.
	 */
	private function setup_config() {
		$theme = wp_get_theme();

		$this->theme_args['name']        = apply_filters( 'ti_wl_theme_name', $theme->__get( 'Name' ) );
		$this->theme_args['template']    = $theme->get( 'Template' );
		$this->theme_args['version']     = $theme->__get( 'Version' );
		$this->theme_args['description'] = apply_filters( 'ti_wl_theme_description', $theme->__get( 'Description' ) );
		$this->theme_args['slug']        = $theme->__get( 'stylesheet' );
	}

	/**
	 *
	 */
	public function register() {
		$theme = $this->theme_args;

		if ( empty( $theme['name'] ) || empty( $theme['slug'] ) ) {
			return;
		}

		$page_title = $theme['name'] . ' ' . __( 'Options', 'neve' ) . ' ';
		$menu_name  = $theme['name'] . ' ' . __( 'Options', 'neve' ) . ' ';

//		$required_actions = $this->get_recommended_actions_left();
//		if ( $required_actions > 0 ) {
//			$menu_name .= '<span class="badge-action-count update-plugins">' . esc_html( $required_actions ) . '</span>';
//		}

		$theme_page = ! empty( $theme['template'] ) ? $theme['template'] . '-welcome' : $theme['slug'] . '-welcome';
		add_theme_page( $page_title, $menu_name, 'activate_plugins', $theme_page, [ $this, 'render' ] );
	}

	/**
	 * Render the application stub.
	 *
	 * @return mixed
	 */
	public function render() {
		echo '<div id="neve-dashboard"></div>';
	}

	/**
	 * Load css and scripts for the about page
	 */
	public function enqueue() {
		$screen = get_current_screen();
		if ( ! isset( $screen->id ) ) {
			return;
		}

		$theme      = $this->theme_args;
		$theme_page = ! empty( $theme['template'] ) ? $theme['template'] . '-welcome' : $theme['slug'] . '-welcome';

		if ( $screen->id !== 'appearance_page_' . $theme_page ) {
			return;
		}

		$dependencies = [ 'react', 'react-dom', 'wp-i18n', 'wp-api', 'wp-components', 'wp-element' ];

		if ( ! empty ( $this->get_notifications() ) ) {
			$dependencies[] = 'updates';
		}

		wp_enqueue_style( 'neve-dash-style', get_template_directory_uri() . '/dashboard/build/build.css', [ 'wp-components' ], NEVE_VERSION );
		wp_register_script( 'neve-dash-script', get_template_directory_uri() . '/dashboard/build/build.js', $dependencies, NEVE_VERSION, true );
		wp_localize_script( 'neve-dash-script', 'neveDash', $this->get_localization() );
		wp_enqueue_script( 'neve-dash-script' );
	}

	private function get_localization() {
		return [
			'nonce'         => wp_create_nonce( 'wp_rest' ),
			'version'       => 'v' . NEVE_VERSION,
			'assets'        => get_template_directory_uri() . '/dashboard/assets/',
			'notifications' => $this->get_notifications(),
			'strings'       => [
				'header' => $this->theme_args['name'] . ' ' . __( 'Options', 'neve' )
			],
		];
	}

	private function get_notifications() {
		delete_site_transient( 'update_themes' );
		delete_site_transient( 'update_plugins' );
		_maybe_update_themes();
		_maybe_update_plugins();

		$notifications = [];
		$slug          = 'go';
		$themes_update = get_site_transient( 'update_themes' );
		if ( isset( $themes_update->response[ $slug ] ) ) {
			$update                = $themes_update->response[ $slug ];
			$notifications['neve'] = [
				'text'   => sprintf( __( 'New theme update for %s! Please update to %s.' ), $this->theme_args['name'], $update['new_version'] ),
				'update' => [
					'type' => 'theme',
					'slug' => $slug
				],
				'cta'    => __( 'Update Now', 'neve' ),
			];
		}

		$plugins_update = get_site_transient( 'update_plugins' );
		$plugin_path    = 'neve-pro-addon/neve-pro-addon.php';
		$plugin_path    = 'akismet/akismet.php';
		if ( isset( $plugins_update->response[ $plugin_path ] ) ) {
			$update                          = $plugins_update->response[ $plugin_path ];
			$notifications['neve-pro-addon'] = [
				'text'   => sprintf( __( 'New plugin update for %s! Please update to %s.' ), 'neve pro', $update->new_version ),
				'update' => [
					'type' => 'plugin',
//					'slug' => 'neve-pro-addon',
					'slug' => 'akismet',
//					'path' => 'neve-pro-addon/neve-pro-addon.php'
					'path' => $plugin_path
				],
				'cta'    => __( 'Update Now', 'neve' ),
			];
		}

		return $notifications;
	}
}