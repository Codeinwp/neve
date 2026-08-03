<?php
/**
 * Minimal WooCommerce stubs for the cart markup tests.
 *
 * `WooCommerce::$cart` starts out null, reproducing the "plugin loaded, cart
 * missing" state; tests that need a usable cart assign a `WC_Cart` themselves.
 *
 * @package neve
 */

if ( ! defined( 'NEVE_TESTS_WC_CART_STUB' ) ) {
	define( 'NEVE_TESTS_WC_CART_STUB', true );
}

if ( ! class_exists( 'WooCommerce', false ) ) {
	/**
	 * Stand-in for the WooCommerce main class, with no cart object.
	 */
	class WooCommerce {
		/**
		 * The cart instance, null until a test assigns one.
		 *
		 * @var \WC_Cart|null
		 */
		public $cart = null;
	}
}

if ( ! class_exists( 'WC_Cart', false ) ) {
	/**
	 * Stand-in for the cart, carrying just the contents count.
	 */
	class WC_Cart {
		/**
		 * Number of items in the cart.
		 *
		 * @var int
		 */
		private $count;

		/**
		 * Constructor.
		 *
		 * @param int $count number of items in the cart.
		 */
		public function __construct( $count = 0 ) {
			$this->count = $count;
		}

		/**
		 * Cart contents count.
		 *
		 * @return int
		 */
		public function get_cart_contents_count() {
			return $this->count;
		}
	}
}

if ( ! class_exists( 'WC_Widget_Cart', false ) ) {
	/**
	 * Stand-in for the mini cart widget rendered inside the cart icon component.
	 */
	class WC_Widget_Cart extends WP_Widget {
		/**
		 * Constructor.
		 */
		public function __construct() {
			parent::__construct( 'neve_tests_wc_widget_cart', 'Cart', array( 'classname' => 'widget_shopping_cart' ) );
		}

		/**
		 * Output the widget.
		 *
		 * @param array $args     widget arguments.
		 * @param array $instance widget instance settings.
		 */
		public function widget( $args, $instance ) {
			echo '<div class="widget_shopping_cart_content"></div>';
		}
	}
}

if ( ! function_exists( 'WC' ) ) {
	/**
	 * Return the stubbed WooCommerce instance.
	 *
	 * @return \WooCommerce
	 */
	function WC() { // phpcs:ignore WordPress.NamingConventions.ValidFunctionName.FunctionNameInvalid
		static $instance = null;

		if ( $instance === null ) {
			$instance = new WooCommerce();
		}

		return $instance;
	}
}

if ( ! function_exists( 'wc_get_cart_url' ) ) {
	/**
	 * Cart permalink stub.
	 *
	 * @return string
	 */
	function wc_get_cart_url() {
		return home_url( '/cart/' );
	}
}

if ( ! function_exists( 'is_cart' ) ) {
	/**
	 * The cart page is never the current request in these tests.
	 *
	 * @return bool
	 */
	function is_cart() {
		return false;
	}
}

if ( ! function_exists( 'is_checkout' ) ) {
	/**
	 * The checkout page is never the current request in these tests.
	 *
	 * @return bool
	 */
	function is_checkout() {
		return false;
	}
}
