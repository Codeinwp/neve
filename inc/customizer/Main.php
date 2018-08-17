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
		$this->define_hooks();
		$this->load_modules();
	}

	/**
	 * Define the modules that will be loaded.
	 */
	private function define_modules() {
		$this->customizer_modules = apply_filters( 'neve_filter_customizer_modules', array() );
	}

	private function define_hooks() {

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
		add_filter( 'neve_filter_customizer_modules', $addon_manager, 'filter_modules' );
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