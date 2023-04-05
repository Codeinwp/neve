<?php
/**
 * PPOM compatibility.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class PPOM
 */
class PPOM {

	/**
	 * Init function.
	 *
	 * @return bool
	 */
	public function init() {
		if ( ! $this->should_load() ) {
			return false;
		}

		$this->load_hooks();

		return true;
	}

	/**
	 * Is plugin available?.
	 */
	private function should_load() {
		return defined( 'PPOM_VERSION' );
	}

	/**
	 * Load hooks.
	 */
	private function load_hooks() {
		/**
		 * Neve has display:flex on the single product page, but PPOM has display:block on the same page.
		 * Prevent PPOM's override of Neve's CSS.
		 *
		 * Issue: https://github.com/Codeinwp/woocommerce-product-addon/issues/106
		*/
		add_filter( 'ppom_sp_ac_force_css_display_block', '__return_false' );
	}
}
