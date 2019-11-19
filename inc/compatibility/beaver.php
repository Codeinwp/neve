<?php
/**
 * Add compatibility with Beaver Themer header and footer.
 * Check https://kb.wpbeaverbuilder.com/article/389-add-header-footer-and-parts-support-to-your-theme for the
 * compatibility guid.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Bever
 *
 * @package Neve\Compatibility
 */
class Beaver extends Page_Builder_Base {

	/**
	 * Init function.
	 */
	public function init() {
		if ( ! defined( 'FL_THEME_BUILDER_VERSION' ) ) {
			return;
		}

		add_action( 'wp', array( $this, 'add_theme_builder_hooks' ) );
	}

	/**
	 * Check if it page was edited with page builder.
	 *
	 * @param string $pid post id.
	 *
	 * @return bool
	 */
	protected function is_edited_with_builder( $pid ) {
		if ( class_exists( '\FLBuilderModel', false ) ) {
			return \FLBuilderModel::is_builder_enabled( $pid );
		}

		return false;
	}

	/**
	 * Load Beaver compatibility style.
	 */
	public function load_style() {
		wp_add_inline_style( 'neve-style', '.fl-builder.bbhf-transparent-header:not(.bhf-sticky-header) #nv-beaver-header .fl-row-content-wrap{background-color:transparent;border:none;transition:background-color .3s ease-in-out}.fl-builder.bbhf-transparent-header .bhf-fixed-header:not(.bhf-fixed) .fl-row-content-wrap{background-color:transparent;border:none;transition:background-color .3s ease-in-out}.fl-builder.bbhf-transparent-header #nv-beaver-header{position:absolute;z-index:10;width:100%}' );
	}

	/**
	 * Add support for elementor theme locations.
	 */
	public function add_theme_builder_hooks() {

		if ( ! class_exists( '\FLThemeBuilderLayoutData', false ) ) {
			return;
		}
		add_action( 'wp_enqueue_scripts', [ $this, 'load_style' ] );
		// Get the header ID.
		$header_ids = \FLThemeBuilderLayoutData::get_current_page_header_ids();

		// If we have a header, remove the theme header and hook in Theme Builder's.
		if ( ! empty( $header_ids ) ) {
			remove_all_actions( 'neve_do_top_bar' );
			remove_all_actions( 'neve_do_header' );
			add_action( 'neve_do_header', 'FLThemeBuilderLayoutRenderer::render_header' );
		}

		// Get the footer ID.
		$footer_ids = \FLThemeBuilderLayoutData::get_current_page_footer_ids();

		// If we have a footer, remove the theme footer and hook in Theme Builder's.
		if ( ! empty( $footer_ids ) ) {
			remove_all_actions( 'neve_do_footer' );
			add_action( 'neve_do_footer', 'FLThemeBuilderLayoutRenderer::render_footer' );
		}

	}
}
