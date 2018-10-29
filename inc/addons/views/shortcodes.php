<?php
/**
 * Modify shortcodes in Pro version.
 *
 * @package Neve\Addons\Views
 */

namespace Neve\Addons\Views;

use Neve\Views\Base_View;

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
		add_filter( 'neve_expanding_cart', array( $this, 'cart_expanding' ) );
	}

	/**
	 * Add cart expanding in pro.
	 */
	public function cart_expanding() {
		ob_start();
		ob_clean();
		echo '<div class="nv-nav-cart">';
		the_widget( 'WC_Widget_Cart', 'title=' );
		echo '</div>';
		$cart = ob_get_contents();
		ob_end_clean();
		return $cart;
	}
}
