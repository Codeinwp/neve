<?php
/**
 * Neve Features Factory
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Core
 */

namespace Neve\Core;

use Neve\Core\Settings\Mods;

/**
 * The core entry class.
 *
 * @package Neve\Core
 */
class Core_Loader {
	/**
	 * Features that will be loaded.
	 *
	 * @access   protected
	 * @var array $features Features that will be loaded.
	 */
	protected $features = array();

	/**
	 * Define the core functionality of the theme.
	 *
	 * @access public
	 */
	public function __construct() {
		add_action( 'after_switch_theme', [ $this, 'check_new_user' ] );
		add_action( 'themeisle_ob_after_xml_import', [ $this, 'update_content_import_flag' ] );

		$this->define_hooks();
		$this->define_modules();
		$this->load_modules();
	}

	/**
	 * Update content import flag.
	 */
	public function update_content_import_flag() {
		update_option( 'neve_imported_demo', 'yes' );
	}

	/**
	 * Checks that the user is new.
	 */
	public function check_new_user() {
		$new = get_option( 'neve_new_user' );
		if ( $new === 'yes' ) {
			return;
		}

		$install_time = get_option( 'neve_install' );
		$now          = get_option( 'neve_user_check_time' );

		if ( empty( $now ) ) {
			$now = time();
			update_option( 'neve_user_check_time', $now );
		}

		if ( empty( $install_time ) ) {
			return;
		}

		if ( ( $now - $install_time ) <= 60 ) {
			update_option( 'neve_new_user', 'yes' );

			return;
		}

		update_option( 'neve_new_user', 'no' );
	}

	/**
	 * Define the features that will be loaded.
	 */
	private function define_modules() {

		$features = array(
			'Customizer\Loader',
			'Views\Tweaks',
			'Views\Font_Manager',
			'Views\Top_Bar',
			'Views\Header',
			'Views\Template_Parts',
			'Views\Page_Header',
			'Views\Post_Layout',
			'Views\Page_Layout',
			'Views\Cover_Header',
			'Views\Product_Layout',
			'Views\Content_None',
			'Views\Content_404',
			'Views\Breadcrumbs',

			'Views\Layouts\Layout_Container',
			'Views\Layouts\Layout_Sidebar',

			'Views\Partials\Post_Meta',
			'Views\Partials\Excerpt',
			'Views\Partials\Comments',

			'Views\Pluggable\Pagination',
			'Views\Pluggable\Masonry',
			'Views\Pluggable\Metabox_Settings',

			'Core\Dynamic_Css',

			'Compatibility\Generic',
			'Compatibility\WooCommerce',
			'Compatibility\Elementor',
			'Compatibility\Header_Footer_Elementor',
			'Compatibility\Amp',
			'Compatibility\Header_Footer_Beaver',
			'Compatibility\Beaver',
			'Compatibility\Lifter',
			'Compatibility\Patterns',
			'Compatibility\PWA',
			'Compatibility\PPOM',
			'Compatibility\Web_Stories',
			'Compatibility\Easy_Digital_Downloads',
			'Compatibility\WPML',

			'Admin\Metabox\Manager',
			'Admin\Troubleshoot\Main',
			'Admin\Dashboard\Main',
			'Admin\Hooks_Upsells',
		);

		if ( $this->is_fse_child_theme() ) {
			$features[] = 'Compatibility\Fse';
		}

		$this->features = apply_filters( 'neve_filter_main_modules', $features );
	}

	/**
	 * Check Features and register them.
	 *
	 * @access  private
	 */
	private function load_modules() {
		$factory = new Factory( $this->features );
		$factory->load_modules();
	}

	/**
	 * Register all of the hooks related to the functionality
	 * of the theme setup.
	 *
	 * @access   private
	 */
	private function define_hooks() {
		// Avoid mods cache on customizer preview.
		if ( is_customize_preview() ) {
			Mods::$no_cache = true;
		}
		$admin = new Admin();
		add_action( 'init', array( $admin, 'load_site_import' ), 20 );
		add_action( 'admin_enqueue_scripts', array( $admin, 'register_react_components' ), 0 );
		add_action( 'ti-about-after-sidebar-content', array( $admin, 'render_logger_toggle' ) );

		$key_lite = str_replace( '-', '_', basename( get_template_directory() ) );
		add_filter(
			$key_lite . '_logger_data',
			function () {
				return [ 'mods' => array_filter( get_theme_mods() ) ];
			}
		);
		$front_end = new Front_End();
		add_action( 'wp_enqueue_scripts', array( $front_end, 'enqueue_scripts' ) );
		add_action( 'after_setup_theme', array( $front_end, 'setup_theme' ) );
		add_action( 'widgets_init', array( $front_end, 'register_sidebars' ) );
	}

	/**
	 * Check if we're on a child theme, and it enables FSE.
	 *
	 * @return bool
	 */
	private function is_fse_child_theme() {
		if ( ! is_child_theme() ) {
			return false;
		}

		$theme_json = get_stylesheet_directory() . '/theme.json';

		if ( ! file_exists( $theme_json ) ) {
			return false;
		}

		if ( ! defined( 'NEVE_FSE_MODE' ) ) {
			return false;
		}

		if ( NEVE_FSE_MODE !== true ) {
			return false;
		}

		return true;
	}
}
