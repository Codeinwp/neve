<?php
/**
 * Yoast Compatibility.
 *
 * @package Amp.php
 */

namespace Neve\Compatibility;

use WPSEO_Options;


/**
 * Class Yoast
 *
 * @package Neve\Compatibility
 */
class Yoast {

	/**
	 * Module init.
	 */
	public function init() {
		$this->load_yoast_breadcrumbs();
	}

	/**
	 * Load hooks and filters.
	 *
	 * @return false | void
	 */
	private function load_yoast_breadcrumbs() {
		if ( ! $this->is_yoast_breadcrumb_enabled() ) {
			return false;
		}
		$breadcrumbs_hooks = apply_filters(
			'neve_breadcrumbs_locations',
			array(
				'neve_before_loop',
				'neve_before_page_header',
				'neve_before_post_content',
			)
		);

		foreach ( $breadcrumbs_hooks as $hook ) {
			add_action( $hook, array( $this, 'render_yoast_breadcrumbs' ) );
		}
	}

	/**
	 * Check if Yoast breadcrumbs are enabled.
	 *
	 * @return bool
	 */
	public function is_yoast_breadcrumb_enabled() {
		if ( ! apply_filters( 'neve_show_breadcrumbs', true ) ) {
			return false;
		}

		if ( ! function_exists( 'yoast_breadcrumb' ) ) {
			return false;
		}

		return WPSEO_Options::get( 'breadcrumbs-enable', false ) === true;
	}

	/**
	 * Render Yoast Bredcrumbs.
	 */
	public function render_yoast_breadcrumbs() {
		yoast_breadcrumb( '<small id="breadcrumbs" style="margin-bottom: 20px; display: block;">', '</small>' );
	}


}
