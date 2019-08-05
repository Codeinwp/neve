<?php
/**
 * Breadcrumbs integration file.
 *
 * @package Neve\Views
 */
namespace Neve\Views;

use WPSEO_Options;


/**
 * Class Yoast
 *
 * @package Neve\Compatibility
 */
class Breadcrumbs extends Base_View {

	/**
	 * Module init.
	 */
	public function init() {
		add_action( 'neve_pro_hfg_breadcrumb', array( $this, 'render_breadcrumbs' ) );
		$this->load_theme_breadcrumbs();
	}

	/**
	 * Load hooks and filters.
	 */
	private function load_theme_breadcrumbs() {

		$breadcrumbs_hooks = apply_filters(
			'neve_breadcrumbs_locations',
			array(
				'neve_before_loop',
				'neve_before_page_header',
				'neve_before_post_content',
			)
		);

		foreach ( $breadcrumbs_hooks as $hook ) {
			add_action( $hook, array( $this, 'render_theme_breadcrumbs' ) );
		}
	}

	/**
	 * Render breadcrumbs in Neve theme.
	 *
	 * @return bool | void
	 */
	public function render_theme_breadcrumbs() {
		if ( ! $this->is_breadcrumb_enabled() ) {
			return false;
		}
		$this->render_breadcrumbs( 'small' );
	}

	/**
	 * Check if Yoast breadcrumbs are enabled.
	 *
	 * @return bool
	 */
	public function is_breadcrumb_enabled() {

		if ( ! apply_filters( 'neve_show_breadcrumbs', true ) ) {
			return false;
		}

		// Yoast breadcrumbs
		if ( function_exists( 'yoast_breadcrumb' ) ) {
			return WPSEO_Options::get( 'breadcrumbs-enable', false ) === true;
		}

		// SEOPress breadcrumbs
		if ( function_exists( 'seopress_display_breadcrumbs' ) ) {
			return true;
		}

		// Rank Math breadcrumbs
		if ( function_exists( 'rank_math_the_breadcrumbs' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Render Breadcrumbs.
	 */
	public function render_breadcrumbs( $html_tag ) {
		if ( is_front_page() ) {
			return false;
		}
		if ( empty( $html_tag ) ) {
			$html_tag = 'small';
		}

		// Yoast breadcrumbs
		if ( function_exists( 'yoast_breadcrumb' ) ) {
			yoast_breadcrumb( '<' . esc_html( $html_tag ) . ' class="nv--yoast-breadcrumb">', '</' . esc_html( $html_tag ) . '>' );
			return true;
		}

		// SEOPress breadcrumbs
		if ( function_exists( 'seopress_display_breadcrumbs' ) ) {
			return seopress_display_breadcrumbs();
		}

		// Rank Math breadcrumbs
		if ( function_exists( 'rank_math_the_breadcrumbs' ) ) {
			return rank_math_the_breadcrumbs();
		}

		return false;
	}


}
