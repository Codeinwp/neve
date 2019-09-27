<?php
/**
 * Compatibility with Header Footer for Beaver Builder plugin.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Header_Footer_Beaver
 *
 * @package Neve\Compatibility
 */
class Header_Footer_Beaver {


	/**
	 * Init function.
	 */
	public function init() {
		if ( ! $this->should_load() ) {
			return false;
		}
		$this->add_theme_builder_hooks();
	}

	/**
	 * Check if plugin is installed.
	 */
	private function should_load() {
		if ( ! defined( 'FL_BUILDER_VERSION' ) ) {
			return false;
		}
		if ( ! class_exists( '\BB_Header_Footer', false ) ) {
			return false;
		}

		return true;
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
		$header_id = \BB_Header_Footer::get_settings( 'bb_header_id', '' );
		if ( empty( $header_id ) ) {
			return false;
		}
		remove_all_actions( 'neve_do_top_bar' );
		remove_all_actions( 'neve_do_header' );

		echo '<header id="nv-beaver-header">';
		\BB_Header_Footer::get_header_content();
		echo '</header>';

		return true;
	}

	/**
	 * Replace Footer hooks.
	 */
	public function do_footer() {
		$footer_id = \BB_Header_Footer::get_settings( 'bb_footer_id', '' );
		if ( empty( $footer_id ) ) {
			return false;
		}
		remove_all_actions( 'neve_do_footer' );
		echo '<footer id="nv-beaver-footer">';
		\BB_Header_Footer::get_footer_content();
		echo '</footer>';

		return true;
	}
}
