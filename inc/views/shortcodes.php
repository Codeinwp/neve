<?php
/**
 * Create custom shortcodes.
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Shortcodes
 *
 * @package Neve\Views
 */
class Shortcodes extends Base_View {

	/**
	 * Initialization of the feature.
	 */
	public function init() {
		add_shortcode( 'neve_search', array( $this, 'search_handler' ) );
	}

	/**
	 * Search shortcode callback function.
	 */
	public function search_handler() {
		$shortcode_markup = '';

		$shortcode_markup .= '<div class="shortcode-search menu-item-nav-search"><a><span class="nv-icon nv-search"></span></a>';
		$shortcode_markup .= '<div class="nv-nav-search">';
		$shortcode_markup .= get_search_form( false );
		$shortcode_markup .= '</div>';
		$shortcode_markup .= '</div>';

		return $shortcode_markup;
	}
}
