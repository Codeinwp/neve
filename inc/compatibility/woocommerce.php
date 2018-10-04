<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      04/09/2018
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

use Neve\Views\Layouts\Layout_Sidebar;

/**
 * Class Woocommerce
 *
 * @package Neve\Compatibility
 */
class Woocommerce {

	/**
	 * Sidebar manager.
	 *
	 * @var Neve\Views\Layouts\Layout_Sidebar
	 */
	private $sidebar_manager;

	/**
	 * Initialize the module.
	 */
	public function init() {
		if ( ! class_exists( 'WooCommerce' ) ) {
			return;
		}
		$this->sidebar_manager = new Layout_Sidebar();

		// Wrap content.
		add_action( 'neve_after_primary_start', array( $this, 'wrap_pages_start' ) );
		add_action( 'neve_before_primary_end', array( $this, 'wrap_pages_end' ) );

		add_action( 'woocommerce_before_main_content', array( $this, 'wrap_main_content_start' ), 15 );
		add_action( 'woocommerce_after_main_content', array( $this, 'close_div' ), 15 );

		// Handle shop sidebar.
		remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );
		add_action( 'woocommerce_before_main_content', array( $this, 'shop_sidebar_left' ) );
		add_action( 'woocommerce_sidebar', array( $this, 'shop_sidebar_right' ) );

		// Remove WooCommerce wrap.
		remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );
		remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );

		add_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );

		$this->edit_woocommerce_header();
		$this->add_inline_selectors();

		$this->move_checkout_coupon_under_order_summary();
		add_filter( 'neve_post_meta_filters_post_id', array( $this, 'adapt_meta_for_shop_page' ) );
	}

	/**
	 * Change functions hooked into woocommerce header.
	 */
	private function edit_woocommerce_header() {
		remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10 );
		remove_action( 'woocommerce_archive_description', 'woocommerce_product_archive_description', 10 );
		remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
		add_filter( 'woocommerce_show_page_title', '__return_false' );
		add_action( 'neve_after_primary_start', array( $this, 'add_header_bits' ), 0 );
	}

	/**
	 * Add header for woocommerce pages.
	 */
	public function add_header_bits() {
		if ( ! is_shop() && ! is_product() && ! is_product_category() && ! is_product_taxonomy() && ! is_product_tag() ) {
			return;
		}
		echo '<div class="' . apply_filters( 'neve_container_class_filter', 'container' ) . '">';
		echo '<div class="row">';
		echo '<div class="wrap-header col-12">';
		echo '<div class="nv-bc-count-wrap col">';
		woocommerce_breadcrumb();
		woocommerce_result_count();
		echo '</div>';
		echo '<div class="nv-woo-filters">';
		$this->sidebar_toggle();
		woocommerce_catalog_ordering();
		echo '</div>';
		echo '</div>';
		echo '</div>';
		echo '</div>';
	}

	/**
	 * Handle left shop sidebar.
	 */
	public function shop_sidebar_left() {
		$this->sidebar_manager->sidebar( 'shop', 'left' );
	}

	/**
	 * Handle right shop sidebar.
	 */
	public function shop_sidebar_right() {
		$this->sidebar_manager->sidebar( 'shop', 'right' );
	}

	/**
	 * Close div.
	 */
	public function close_div() {
		echo '</div>';
	}

	/**
	 * Wrap main content start.
	 */
	public function wrap_main_content_start() {
		echo '<div class="nv-index-posts nv-shop col">';
	}

	/**
	 * Wrap start of woocommerce pages.
	 */
	public function wrap_pages_start() {
		if ( ! is_woocommerce() ) {
			return;
		}
		echo '<div class="' . apply_filters( 'neve_container_class_filter', 'container' ) . ' shop-container">';
		echo '<div class="row">';
	}

	/**
	 * Wrap end of page.
	 */
	public function wrap_pages_end() {
		if ( ! is_woocommerce() ) {
			return;
		}
		$this->close_div();
		$this->close_div();
	}

	/**
	 * Render sidebar toggle for responsive view.
	 */
	public function sidebar_toggle() {

		if ( ! $this->should_render_sidebar_toggle() ) {
			return;
		}

		echo '<span class="nv-sidebar-toggle button button-secondary">' . apply_filters( 'neve_filter_woo_sidebar_open_button_text', __( 'Filter', 'neve' ) ) . '</span>';
	}

	/**
	 * Add inline selectors for woocommerce.
	 */
	private function add_inline_selectors() {
		add_filter( 'neve_link_color_filter', array( $this, 'add_link_color' ) );
		add_filter( 'neve_link_hover_color_filter', array( $this, 'add_link_hover_color' ) );
		add_filter( 'neve_theme_color_filter', array( $this, 'add_theme_color' ) );
	}

	/**
	 * Add theme color colors.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_theme_color( $color_setup ) {
		$color_setup['background']['selectors'] .=
			', .nv-nav-cart .woocommerce-mini-cart__buttons a.button:last-child, 
			
			.woocommerce #respond input#submit,
			.woocommerce #respond input#submit:focus,
			.woocommerce #respond input#submit:hover, 
			.woocommerce a.button,
			.woocommerce a.button:focus,
			.woocommerce a.button:hover, 
			.woocommerce button.button,
			.woocommerce button.button:focus,
			.woocommerce button.button:hover, 
			.woocommerce input.button,
			.woocommerce input.button:focus,
			.woocommerce input.button:hover, 
			.woocommerce #respond input#submit.alt,
			.woocommerce #respond input#submit.alt:focus,
			.woocommerce #respond input#submit.alt:hover, 
			.woocommerce a.button.alt,
			.woocommerce a.button.alt:focus,
			.woocommerce a.button.alt:hover, 
			.woocommerce button.button.alt,
			.woocommerce button.button.alt:focus,
			.woocommerce button.button.alt:hover, 
			.woocommerce input.button.alt,
			.woocommerce input.button.alt:focus,
			.woocommerce input.button.alt:hover, 
			.woocommerce button.button.alt.disabled,
			.woocommerce button.button.alt.disabled:focus,
			.woocommerce button.button.alt.disabled:hover,
			.woocommerce a.button.checkout-button.alt, 
			.woocommerce a.button.checkout-button.alt:focus, 
			.woocommerce a.button.checkout-button.alt:active,
			 .nv-nav-cart .woocommerce-mini-cart__buttons a.button:first-child:hover,
			 .woocommerce .widget_price_filter .ui-slider .ui-slider-range,
			 .woocommerce .widget_price_filter .ui-slider .ui-slider-handle,
			 .woocommerce-cart table.cart td.actions .coupon > .input-text + .button:hover,
			 .woocommerce a.added_to_cart:hover,
			 .nv-nav-cart .woocommerce-mini-cart__buttons a.button:first-child:hover';

		$color_setup['border-top-color-desktop']['selectors'] .=
			', .nv-nav-cart';

		$color_setup['border-color']['selectors'] .=
			', .nv-nav-cart .woocommerce-mini-cart__buttons a.button:first-child, 
			.woocommerce-ordering .orderby, 
			.woocommerce-cart table.cart td.actions .coupon > .input-text + .button,
			.woocommerce a.added_to_cart';

		$color_setup['color']['selectors'] .=
			', .nv-nav-cart .woocommerce-mini-cart__buttons a.button:first-child, 
			.woocommerce-ordering .orderby,
			.woocommerce-cart table.cart td.actions .coupon > .input-text + .button,
			.woocommerce a.added_to_cart';

		return $color_setup;
	}

	/**
	 * Add link colors.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_link_color( $color_setup ) {
		$color_setup['color']['selectors'] .=
			', .woocommerce .woocommerce-breadcrumb a, 
			.woocommerce div.product .woocommerce-tabs ul.tabs li a';

		return $color_setup;
	}

	/**
	 * Add link hover colors.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_link_hover_color( $color_setup ) {
		$color_setup['color']['selectors'] .=
			', .woocommerce .woocommerce-breadcrumb a:hover, 
			.woocommerce div.product .woocommerce-tabs ul.tabs li a:hover';

		return $color_setup;
	}

	/**
	 * Adapt the meta-box so it works on the shop page.
	 *
	 * @param string $post_id post id.
	 *
	 * @return string
	 */
	public function adapt_meta_for_shop_page( $post_id ) {
		if ( ! is_shop() ) {
			return $post_id;
		}

		return get_option( 'woocommerce_shop_page_id' );
	}

	/**
	 * Check if we should render the mobile sidebar toggle.
	 *
	 * @return bool
	 */
	private function should_render_sidebar_toggle() {
		if ( ! is_active_sidebar( 'shop-sidebar' ) ) {
			return false;
		}
		if ( is_shop() ) {
			$theme_mod = apply_filters( 'neve_sidebar_position', get_theme_mod( 'neve_shop_archive_sidebar_layout', 'right' ) );
			if ( $theme_mod !== 'right' && $theme_mod !== 'left' ) {
				return false;
			}
		}
		if ( is_product() ) {
			$theme_mod = apply_filters( 'neve_sidebar_position', get_theme_mod( 'neve_single_product_sidebar_layout', 'right' ) );
			if ( $theme_mod !== 'right' && $theme_mod !== 'left' ) {
				return false;
			}

			return false;
		}

		return true;
	}

	/**
	 * Does what it says.
	 */
	private function move_checkout_coupon_under_order_summary() {
		/**
		 * Checkout page
		 *
		 * @see move_coupon()
		 * @see clear_coupon()
		 */
		add_action( 'woocommerce_before_checkout_form', array( $this, 'move_coupon' ) );
		add_action( 'woocommerce_checkout_order_review', array( $this, 'clear_coupon' ) );
	}


	/**
	 * Checkout page
	 * Move the coupon field and message info after the order table.
	 */
	public function move_coupon() {
		wc_enqueue_js( '$( $( ".woocommerce-checkout div.woocommerce-info, .checkout_coupon, .woocommerce-form-login" ).detach() ).appendTo( "#neve-checkout-coupon" );' );
	}

	/**
	 * Checkout page
	 * Add the id neve-checkout-coupon to be able to Move the coupon field and message info after the order table.
	 */
	public function clear_coupon() {
		echo '<div id="neve-checkout-coupon"></div><div style="clear:both"></div>';
	}
}
