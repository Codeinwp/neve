<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      05/09/2018
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Elementor
 *
 * @package Neve\Compatibility
 */
class Elementor extends Page_Builder_Base {

	/**
	 * Init function.
	 */
	public function init() {
		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			return;
		}
		$this->add_theme_builder_hooks();

		add_action( 'elementor/editor/before_enqueue_scripts', array( $this, 'maybe_set_page_template' ), 1 );
	}

	/**
	 * Add support for elementor theme locations.
	 */
	private function add_theme_builder_hooks() {
		if ( ! class_exists( '\ElementorPro\Modules\ThemeBuilder\Module' ) ) {
			return;
		}

		// Elementor locations compatibility.
		add_action( 'elementor/theme/register_locations', array( $this, 'register_theme_locations' ) );

		// Override theme templates.
		add_action( 'neve_do_header', array( $this, 'do_header' ), 0 );
		add_action( 'neve_do_footer', array( $this, 'do_footer' ), 0 );

	}

	/**
	 * Check if it page was edited with page builder.
	 *
	 * @param string $pid post id.
	 *
	 * @return bool
	 */
	protected function is_edited_with_builder( $pid ) {
		$post_meta = get_post_meta( $pid, '_elementor_edit_mode', true );
		if ( $post_meta === 'builder' ) {
			return true;
		}

		return false;
	}

	/**
	 * Register Theme Location for Elementor
	 * see https://developers.elementor.com/theme-locations-api/
	 *
	 * @param \ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager $manager Elementor object.
	 */
	public function register_theme_locations( $manager ) {
		$manager->register_all_core_location();
	}

	/**
	 * Remove actions for elementor header to act properly.
	 */
	public function do_header() {
		$did_location = \ElementorPro\Modules\ThemeBuilder\Module::instance()->get_locations_manager()->do_location( 'header' );
		if ( $did_location ) {
			remove_all_actions( 'neve_do_header' );
		}
	}

	/**
	 * Remove actions for elementor footer to act properly.
	 */
	public function do_footer() {
		$did_location = \ElementorPro\Modules\ThemeBuilder\Module::instance()->get_locations_manager()->do_location( 'footer' );
		if ( $did_location ) {
			remove_all_actions( 'neve_do_footer' );
		}
	}
}
