<?php
/**
 * Ti_Onboarding Class
 *
 * This class is responsible for managing the onboarding process for the Ti_Onboarding instance, which is a part of the Neve theme.
 * It ensures that only one instance of Ti_Onboarding is created and provides a method to access that instance.
 *
 * @package Neve\Admin\Onboarding
 * @since 3.7
 */

namespace Neve\Admin\Onboarding;

/**
 * Class Ti_Onboarding
 */
class Ti_Onboarding {

	/**
	 * Holds the current instance of the onboarding class.
	 *
	 * @since 3.7
	 * @var Ti_Onboarding|null
	 */
	private static $instance = null;

	/**
	 * Holds the current theme name.
	 *
	 * @since 3.7
	 * @var string Current theme name.
	 */
	protected $theme_name = '';

	/**
	 * Holds the parent theme page where the onboarding submenu will be added.
	 *
	 * @since 3.7
	 * @var string Current theme page.
	 */
	protected $theme_page = '';

	/**
	 * The slug name to refer to this onboarding submenu page.
	 *
	 * @since 3.7
	 * @var string
	 */
	protected $page_slug;

	/**
	 * Complete URL to Onboarding Wizard.
	 *
	 * @since 3.7
	 * @var string
	 */
	protected $page_url;


	/**
	 * Get the singleton instance of the Ti_Onboarding class.
	 *
	 * If the instance does not exist, it will be created.
	 *
	 * @since 3.7
	 *
	 * @return Ti_Onboarding The single instance of the Ti_Onboarding class.
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Class constructor.
	 */
	public function __construct() {
		$this->init_globals();
		$this->init_actions();
	}

	/**
	 * Initialize global variables used throughout the class.
	 *
	 * @return void
	 */
	private function init_globals() {
		$current_theme = wp_get_theme();
		$template      = $current_theme->get( 'Template' );
		$stylesheet    = $current_theme->__get( 'stylesheet' );

		$this->theme_name = strtolower( apply_filters( 'ti_wl_theme_name', $current_theme->__get( 'Name' ) ) );
		$this->theme_page = ! empty( $template ) ? $template . '-welcome' : $stylesheet . '-welcome';
		$this->page_slug  = apply_filters( 'ti_theme_setup_onboarding_page_slug', 'neve-onboarding' );
		$this->page_url   = 'admin.php?page=' . $this->page_slug;
	}

	/**
	 * Initialize actions and hooks.
	 *
	 * @return void
	 */
	private function init_actions() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( ! is_child_theme() ) {
			add_action( 'after_switch_theme', array( $this, 'enable_onboarding' ) );
		}

		add_action( 'admin_menu', array( $this, 'admin_menus' ) );
		add_action( 'admin_init', array( $this, 'admin_redirects' ), 30 );
		add_action( 'admin_init', array( $this, 'render' ), 30 );
	}

	/**
	 * Enable the onboarding process by setting a transient.
	 *
	 * @return void
	 */
	public function enable_onboarding() {
		set_transient( '_' . $this->theme_name . '_activation_redirect', 1 );
	}

	/**
	 * Add admin menus/screens for the onboarding process.
	 *
	 * @return void
	 */
	public function admin_menus() {
		add_submenu_page( $this->theme_page, __( 'Setup Wizard', 'neve' ), __( 'Setup Wizard', 'neve' ), 'manage_options', $this->page_slug, array( $this, $this->page_slug ) );
	}

	/**
	 * Handle admin redirects during the onboarding process.
	 *
	 * @return void
	 */
	public function admin_redirects() {
		if ( ! get_transient( '_' . $this->theme_name . '_activation_redirect' ) || get_option( $this->theme_name . '_setup_complete', false ) ) {
			return;
		}
		delete_transient( '_' . $this->theme_name . '_activation_redirect' );
		wp_safe_redirect( admin_url( $this->page_url ) );
		exit;
	}

	/**
	 * Render the setup wizard during the onboarding process.
	 *
	 * @return void
	 */
	public function render() {
		if ( empty( $_GET['page'] ) || $this->page_slug !== $_GET['page'] ) {
			return;
		}

		$build_path   = get_template_directory_uri() . '/assets/apps/onboarding/build/';
		$dependencies = ( include get_template_directory() . '/assets/apps/onboarding/build/onboarding.asset.php' );
		wp_enqueue_script( 'neve-onboarding', $build_path . 'onboarding.js', $dependencies['dependencies'], $dependencies['version'], true );
		wp_register_style( 'neve-onboarding-style', $build_path . 'style-onboarding.css', array( 'wp-components', 'wp-admin' ), $dependencies['version'] );
		wp_style_add_data( 'neve-onboarding-style', 'rtl', 'replace' );
		wp_enqueue_style( 'neve-onboarding-style' );

		$this->setup_wizard_header();
		echo '<div id="neve-onboarding"></div>';
		$this->setup_wizard_footer();
		exit;
	}

	/**
	 * @return void
	 */
	public function setup_wizard_header() { ?>
		<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
		<head>
			<meta name="viewport" content="width=device-width" />
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<title><?php _e( 'Theme &rsaquo; Setup Wizard', 'neve' ); ?></title>
			<?php wp_print_scripts( 'neve-onboarding-style' ); ?>
			<?php do_action( 'admin_print_styles' ); ?>
			<?php do_action( 'admin_print_scripts' ); ?>
			<?php do_action( 'admin_head' ); ?>
		</head>
		<body class="themeisle-setup wp-core-ui">
		<?php
	}

	/**
	 * Setup Wizard Footer
	 */
	public function setup_wizard_footer() {
		echo '</body>';
		@do_action( 'admin_footer' );
		do_action( 'admin_print_footer_scripts' );
		echo '</html>';
	}
}
