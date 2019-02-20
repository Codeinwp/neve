<?php
namespace HFG;

use HFG\Core\Customizer;
use HFG\Core\Settings;

class Main {
	private static $_instance = null;

	private $settings;

	/**
	 * Main Instance
	 *
	 * Ensures only one instance of class is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @return \HFG\Main Instance.
	 */
	public static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance    = new self();

			self::$_instance->settings = Settings::get_instance();
			self::$_instance->init();
		}
		return self::$_instance;
	}

	public function init() {
		$customizer = new Customizer( $this->settings );

		add_filter( 'hfg-active', array( $this, 'is_active' ) );
		add_filter( 'hfg-header-render', array( $this, 'render_header' ) );

//		add_action( 'customize_save', array( $this, 'test' ), 10, 1 );
//		add_action( 'customize_preview_section', array( $this, 'test' ), 10, 1 );
//		add_action( 'customize_preview_panel', array( $this, 'test' ), 10, 1 );
//		add_action( 'customize_render_partials_before', array( $this, 'test2' ), 10, 2 );
	}

	public function render_header() {
		/**
		 * @var \WP_Customize_Manager $wp_customize
		 */
		//global $wp_customize;

		//var_dump( $wp_customize->settings() );

		echo '<h1>Header here</h1>';
	}

	public function test2( \WP_Customize_Selective_Refresh $selective_refresh, $partials = array() ) {
		error_log( 'ACTION customize_render_partials_before' );
		error_log( json_encode( $selective_refresh ) );
		error_log( json_encode( $partials ) );
		error_log( json_encode( $_POST['customized'] ) );
		error_log( json_encode( get_theme_mods() ) );
	}

	public function test( \WP_Customize_Manager $wp_customize ) {
		error_log( 'Customize Register Button' );
		error_log( json_encode( $wp_customize ) );
		error_log( json_encode( $wp_customize->get_section( 'header_button' ) ) );
		error_log( json_encode( $wp_customize->get_setting( 'neve_navigation_layout' ) ) );
		error_log( json_encode( $wp_customize->get_control( 'button_base' ) ) );
		error_log( json_encode( $wp_customize->get_setting( 'button_base' ) ) );
	}

	public function is_active() {
		return true;
	}

	/**
	 * Cloning is forbidden.
	 *
	 * @access public
	 * @since  1.0.0
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'hfg-module' ), '1.0.0' );
	}

	/**
	 * Un-serializing instances of this class is forbidden.
	 *
	 * @access public
	 * @since  1.0.0
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'hfg-module' ), '1.0.0' );
	}
}