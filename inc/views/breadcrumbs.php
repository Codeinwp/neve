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
				'neve_before_page_title',
				'neve_before_post_title',
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

		if ( function_exists( 'bcn_display' ) ) {
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
			yoast_breadcrumb( '<' . esc_html( $html_tag ) . ' class="nv--yoast-breadcrumb neve-breadcrumbs-wrapper">', '</' . esc_html( $html_tag ) . '>' );

			return true;
		}

		// SEOPress breadcrumbs
		if ( function_exists( 'seopress_display_breadcrumbs' ) ) {
			echo '<' . esc_html( $html_tag ) . ' class="neve-breadcrumbs-wrapper">';
			seopress_display_breadcrumbs();
			echo '</' . esc_html( $html_tag ) . '>';

			return true;
		}

		// Rank Math breadcrumbs
		if ( function_exists( 'rank_math_the_breadcrumbs' ) ) {
			echo '<' . esc_html( $html_tag ) . ' class="neve-breadcrumbs-wrapper">';
			rank_math_the_breadcrumbs(
				[
					'wrap_before' => '<nav aria-label="breadcrumbs" class="rank-math-breadcrumb">',
					'wrap_after'  => '</nav>',
				]
			);
			echo '</' . esc_html( $html_tag ) . '>';

			return true;
		}

		if ( function_exists( 'bcn_display' ) ) {
			echo '<small class="neve-breadcrumbs-wrapper">';
			bcn_display();
			echo '</small>';

			return true;
		}

		return false;
	}


}
