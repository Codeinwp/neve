<?php
/**
 * Generic Tweaks
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Tweaks
 */
class Tweaks extends Base_View {

	/**
	 * Add hooks for the front end.
	 */
	public function init() {
		// Remove gallery default style.
		add_filter( 'use_default_gallery_style', '__return_false' );
		add_filter( 'get_search_form', array( $this, 'add_search_icon' ), PHP_INT_MAX );
		add_filter( 'get_product_search_form', array( $this, 'add_search_icon' ), PHP_INT_MAX );
	}

	/**
	 * Add
	 *
	 * @param string $markup search form markup.
	 *
	 * @return mixed
	 */
	public function add_search_icon( $markup ) {
		$markup = str_replace( '</form>', '<div class="nv-search-icon-wrap">' . neve_search_icon() . '</div></form>', $markup );
		return $markup;
	}
}
