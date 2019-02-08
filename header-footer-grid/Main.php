<?php
namespace HFG;

use HFG\Core\Customizer;
use HFG\Core\Builder\Panel;

class Main {

	private static $_instance = null;
	private static $version;
	private static $theme_url;
	private static $theme_name;
	private static $theme_author;
	private static $path;

	public function __construct() {
	}

	static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance    = new self();
			$theme              = wp_get_theme();
			self::$version      = $theme->get( 'Version' );
			self::$theme_url    = $theme->get( 'ThemeURI' );
			self::$theme_name   = $theme->get( 'Name' );
			self::$theme_author = $theme->get( 'Author' );
			self::$path         = get_template_directory();

			self::$_instance->init();
		}

		return self::$_instance;
	}

	/**
	 * Get data from method of property
	 *
	 * @param string $key
	 *
	 * @return bool|mixed
	 */
	public function get( $key ) {
		if ( method_exists( $this, 'get_' . $key ) ) {
			return call_user_func_array( array( $this, 'get_' . $key ), array() );
		} elseif ( property_exists( $this, $key ) ) {
			return $this->{$key};
		}

		return false;
	}

	public function init() {

		$builder = new Panel();
		$customizer = new Customizer();
		if ( is_admin() || is_customize_preview() ) {
			add_action( 'customize_preview_init', array( $customizer, 'preview_js' ), PHP_INT_MAX );
		}
	}

}
