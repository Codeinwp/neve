<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 * @package Neve\Customizer
 */

namespace Neve\Customizer;

use Neve\Core\Factory;

/**
 * Main customizer handler.
 *
 * @package Neve\Customizer
 */
class Main {

	/**
	 * Customizer modules.
	 *
	 * @var array
	 */
	private $customizer_modules = array();

	public function __construct() {
//		add_action( 'customize_preview_init', array( $this, 'enqueue_customizer_script' ) );
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'enqueue_customizer_controls' ) );
	}

	/**
	 * Initialize the customizer functionality
	 */
	public function init() {
		global $wp_customize;

		if ( ! isset( $wp_customize ) ) {
			return;
		}
		$this->maybe_load_addons();
		$this->define_modules();
		$this->load_modules();
	}

	/**
	 * Define the modules that will be loaded.
	 */
	private function define_modules() {
		$this->customizer_modules = apply_filters( 'neve_filter_customizer_modules', array(
			'Customizer\Options\Header'
		) );
	}

	public function enqueue_customizer_controls() {
		wp_enqueue_style( 'neve-customizer-style', NEVE_ASSETS_URL . '/css/customizer-style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), NEVE_VERSION );
		wp_enqueue_script(
			'neve-customizer-controls', NEVE_ASSETS_URL . '/js/customizer-controls.min.js',
			array(
				'jquery',
				'wp-color-picker',
			), NEVE_VERSION, true
		);
	}

	/**
	 * Load addons if needed.
	 *
	 * @return void
	 */
	private function maybe_load_addons() {
		if ( ! class_exists( '\Neve\Addons\Customizer\Main' ) ) {
			return;
		}
		$addon_manager = new \Neve\Addons\Customizer\Main();
		add_filter( 'neve_filter_customizer_modules', array( $addon_manager, 'filter_modules' ) );
	}

	/**
	 * Load the customizer modules.
	 *
	 * @return void
	 */
	private function load_modules() {
		$factory = new Factory( $this->customizer_modules );
		$factory->load_modules();
	}
}