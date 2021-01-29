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
		add_filter( 'fl_theme_builder_part_hooks', array( $this, 'register_part_hooks' ) );
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

	/**
	 * Register part hooks for Beaver Themer.
	 *
	 * @return array
	 */
	public function register_part_hooks() {
		return array(
			array(
				'label' => __( 'Header', 'neve' ),
				'hooks' => array(
					'neve_before_header_wrapper_hook' => __( 'Before header wrapper', 'neve' ),
					'neve_before_header_hook'         => __( 'Before header', 'neve' ),
					'neve_after_header_hook'          => __( 'After header', 'neve' ),
					'neve_after_header_wrapper_hook'  => __( 'After header wrapper', 'neve' ),
				),
			),
			array(
				'label' => __( 'Footer', 'neve' ),
				'hooks' => array(
					'neve_before_footer_hook' => __( 'Before footer', 'neve' ),
					'neve_after_footer_hook'  => __( 'After footer', 'neve' ),
				),
			),
			array(
				'label' => __( 'Single Page', 'neve' ),
				'hooks' => array(
					'neve_before_page_header'   => __( 'Before page header', 'neve' ),
					'neve_before_content'       => __( 'Before content', 'neve' ),
					'neve_after_content'        => __( 'After content', 'neve' ),
					'neve_before_page_comments' => __( 'Before comments', 'neve' ),
				),
			),
			array(
				'label' => __( 'Single Post', 'neve' ),
				'hooks' => array(
					'neve_before_post_content' => __( 'Before content', 'neve' ),
					'neve_after_post_content'  => __( 'After content', 'neve' ),
				),
			),
			array(
				'label' => __( 'Cart Popup', 'neve' ),
				'hooks' => array(
					'neve_before_cart_popup'          => __( 'Before cart popup', 'neve' ),
					'neve_after_cart_popup'           => __( 'After cart popup', 'neve' ),
					'neve_cart_icon_after_cart_total' => __( 'After cart total', 'neve' ),
				),
			),
			array(
				'label' => __( 'Blog', 'neve' ),
				'hooks' => array(
					'neve_before_posts_loop' => __( 'Before posts loop', 'neve' ),
					'neve_after_posts_loop'  => __( 'After posts loop', 'neve' ),
				),
			),
			array(
				'label' => __( 'Sideber', 'neve' ),
				'hooks' => array(
					'neve_before_sidebar_content' => __( 'Before sidebar content', 'neve' ),
					'neve_after_sidebar_content'  => __( 'After sidebar content', 'neve' ),
				),
			),
		);
	}
}
