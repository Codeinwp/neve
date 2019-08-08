<?php
/**
 * Compatibility with Elementor Header Footer plugin.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Header_Footer_Elementor
 *
 * @package Neve\Compatibility
 */
class Header_Footer_Elementor {

	/**
	 * Check if plugin is installed.
	 */
	private function should_load() {
		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			return false;
		}
		if ( ! class_exists( 'Header_Footer_Elementor', false ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Init function.
	 */
	public function init() {
		if ( ! $this->should_load() ) {
			return;
		}

		$this->add_theme_builder_hooks();
	}

	/**
	 * Replace theme hooks with the one from the plugin.
	 */
	private function add_theme_builder_hooks() {
		add_action( 'neve_do_header', array( $this, 'do_header' ), 0 );
		add_action( 'neve_do_footer', array( $this, 'do_footer' ), 0 );
	}

	/**
	 * Replace Header hooks.
	 */
	public function do_header() {
		if ( ! hfe_header_enabled() ) {
			return;
		}
		hfe_render_header();
		remove_all_actions( 'neve_do_top_bar' );
		remove_all_actions( 'neve_do_header' );
	}

	/**
	 * Replace Footer hooks.
	 */
	public function do_footer() {
		if ( ! hfe_footer_enabled() ) {
			return;
		}
		hfe_render_footer();
		remove_all_actions( 'neve_do_footer' );
	}
}
