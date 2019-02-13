<?php
namespace HFG;

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Builder\Frontend;
use HFG\Core\Customizer;
use HFG\Core\Builder\Panel;
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
		$theme_support = get_theme_support( 'hfg_support' )[0];
		//var_dump( $theme_support );

		foreach ( $theme_support['builders'] as $builder => $components ) {
			//var_dump( $builder );
			if( class_exists( $builder ) ) {
				//var_dump( class_implements( $builder ) );
				//var_dump( in_array( 'HFG\Core\Interfaces\Builder', class_implements( $builder ) ) );
			}
		}

		//add_filter( 'hfg-active', array( $this, 'is_active' ) );

		$frontend = new Frontend();
		$builder = new Panel();
		$customizer = new Customizer();
		if ( is_admin() || is_customize_preview() ) {
			add_action( 'customize_register', array( $customizer, 'register' ), PHP_INT_MAX );
			add_action( 'customize_preview_init', array( $customizer, 'preview_js' ), PHP_INT_MAX );
		}
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

//class Main {
//
//	private static $_instance = null;
//	private static $version;
//	private static $theme_url;
//	private static $theme_name;
//	private static $theme_author;
//	private static $path;
//
//	public function __construct() {
//	}
//
//	static function get_instance() {
//		if ( is_null( self::$_instance ) ) {
//			self::$_instance    = new self();
//			$theme              = wp_get_theme();
//			self::$version      = $theme->get( 'Version' );
//			self::$theme_url    = $theme->get( 'ThemeURI' );
//			self::$theme_name   = $theme->get( 'Name' );
//			self::$theme_author = $theme->get( 'Author' );
//			self::$path         = get_template_directory();
//
//			self::$_instance->init();
//		}
//
//		return self::$_instance;
//	}
//
//	/**
//	 * Get data from method of property
//	 *
//	 * @param string $key
//	 *
//	 * @return bool|mixed
//	 */
//	public function get( $key ) {
//		if ( method_exists( $this, 'get_' . $key ) ) {
//			return call_user_func_array( array( $this, 'get_' . $key ), array() );
//		} elseif ( property_exists( $this, $key ) ) {
//			return $this->{$key};
//		}
//
//		return false;
//	}
//
//	public function  is_active() {
//		return true;
//	}
//
//	public function init() {
//		$settings = Settings::get_instance();
//
//		add_filter( 'hfg-active', array( $this, 'is_active' ) );
//
//		$frontend = new Frontend();
//		$builder = new Panel();
//		$customizer = new Customizer();
//		if ( is_admin() || is_customize_preview() ) {
//			add_action( 'customize_register', array( $customizer, 'register' ), PHP_INT_MAX );
//			add_action( 'customize_preview_init', array( $customizer, 'preview_js' ), PHP_INT_MAX );
//		}
//	}
//
//}
