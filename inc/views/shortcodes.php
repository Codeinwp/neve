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
		add_shortcode( 'neve_cart', array( $this, 'cart_handler' ) );
	}

	/**
	 * Search shortcode callback function.
	 */
	public function search_handler() {
		$shortcode_markup = '';

		$shortcode_markup .= '<div class="neve-shortcode shortcode-search menu-item-nav-search"><a><span class="nv-icon nv-search"></span></a>';
		$shortcode_markup .= '<div class="nv-nav-search">';
		$shortcode_markup .= get_search_form( false );
		$shortcode_markup .= '</div>';
		$shortcode_markup .= '</div>';

		return $shortcode_markup;
	}

	/**
	 * Cart shortcode callback function.
	 */
	public function cart_handler() {
		$shortcode_markup = '';

		$shortcode_markup .= '<div class="neve-shortcode shortcode-cart menu-item-nav-cart"><a href="' . esc_url( wc_get_cart_url() ) . '"><span class="nv-icon nv-cart"></span>';
		$shortcode_markup .= '<span class="cart-count">' . WC()->cart->get_cart_contents_count() . '</span>';
		$shortcode_markup .= '</a>';
		ob_start();
		ob_clean();
		echo '<div class="nv-nav-cart">';
		the_widget( 'WC_Widget_Cart', 'title=' );
		echo '</div>';
		$cart = ob_get_contents();
		ob_end_clean();
		$shortcode_markup .= $cart;
		$shortcode_markup .= '</div>';

		return $shortcode_markup;
	}
}
