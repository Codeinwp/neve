<?php
/**
 * Main entry point for Header Footer Grid
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Customizer;
use HFG\Core\Settings;

/**
 * Class Main
 *
 * @package HFG
 */
class Main {

	/**
	 * Holds the instance of this class.
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Main $_instance
	 */
	private static $_instance = null;

	/**
	 * Holds a reference to Settings class
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Settings $settings
	 */
	private $settings;

	/**
	 * Holds a reference to Customizer class
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Customizer $settings
	 */
	private $customizer;

	/**
	 * Main Instance
	 * Ensures only one instance of class is loaded or can be loaded.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return \HFG\Main Instance.
	 */
	public static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();

			self::$_instance->init();
			self::$_instance->settings   = Settings::get_instance();
			self::$_instance->customizer = new Customizer( Settings::get_instance() );
		}

		return self::$_instance;
	}

	/**
	 * Initializes the class
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {

		if ( ! apply_filters( 'hfg_active', true ) ) {
			return;
		}

		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}

	/**
	 * Return builders list, or builder details.
	 *
	 * @param string $builder Builder name, if required.
	 *
	 * @return Abstract_Builder[]|Abstract_Builder Builder array(s).
	 */
	public function get_builders( $builder = '' ) {
		if ( empty( $builder ) ) {
			$builder = Abstract_Builder::get_current_builder();
		}

		return $this->customizer->get_builders( $builder );
	}

	/**
	 * Load template.
	 *
	 * @param string $slug Template slug.
	 * @param string $slug Template variation.
	 *
	 */
	public function load( $slug, $name = '' ) {
		$location = apply_filters( 'hfg_load_template_' . $slug, $this->get_templates_location() . $slug, $name );

		get_template_part( $location, $name );
	}

	/**
	 * Get templates path location.
	 *
	 * @return string Templates path.
	 */
	public function get_templates_location() {
		return 'header-footer-grid/templates/';
	}

	/**
	 * Enqueue required files for the module.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function enqueue_scripts() {
		wp_enqueue_style( 'hfg-style', esc_url( $this->settings->url ) . '/assets/css/style.css' );

		wp_enqueue_script(
			'hfg-theme-functions',
			esc_url( $this->settings->url ) . '/assets/js/theme.js',
			array(
				'jquery',
			),
			false,
			true
		);
	}

	/**
	 * Called via hook to determine if module should be active or not.
	 * TODO: implement additional logic if required.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return bool
	 */
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

function hfg() {
	return Main::get_instance();
}