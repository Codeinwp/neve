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