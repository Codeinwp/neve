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
	 * Primary button selectors.
	 *
	 * @var array
	 */
	private $primary_buttons_selectors = array(
		'default' => '
			,.woocommerce a.button,
			.woocommerce .button:not(.nv-sidebar-toggle),
			.woocommerce a.button.alt,
			.woocommerce a.button.button-primary,
			.woocommerce a.button.checkout-button,
			.woocommerce button.button:disabled,
			.woocommerce button.button:disabled[disabled],
			.woocommerce a.button.add_to_cart,
			.woocommerce a.product_type_grouped,
			.woocommerce a.product_type_external,
			.woocommerce a.product_type_variable,
			.woocommerce button.button.alt.single_add_to_cart_button.disabled,
			.woocommerce button.button.alt.single_add_to_cart_button,
			.woocommerce .actions > button[type=submit],
			.woocommerce .checkout.wc-forward,
			.woocommerce button#place_order,
			.woocommerce .return-to-shop > .button,
			ul[id^="nv-primary-navigation"] .nv-nav-cart a.button.checkout.wc-forward',
		'hover'   => '
			,.woocommerce a.button:hover,
			.woocommerce .button:not(.nv-sidebar-toggle):hover,
			.woocommerce a.button.alt:hover,
			.woocommerce a.button.button-primary:hover,
			.woocommerce a.button.checkout-button:hover,
			.woocommerce button.button:disabled:hover,
			.woocommerce button.button:disabled[disabled]:hover,
			.woocommerce a.button.add_to_cart:hover,
			.woocommerce a.product_type_grouped:hover,
			.woocommerce a.product_type_external:hover,
			.woocommerce a.product_type_variable:hover,
			.woocommerce button.button.alt.single_add_to_cart_button.disabled:hover,
			.woocommerce button.button.alt.single_add_to_cart_button:hover,
			.woocommerce .actions > button[type=submit]:hover,
			.woocommerce .checkout.wc-forward:hover,
			.woocommerce button#place_order:hover,
			.woocommerce .return-to-shop > .button:hover,
			ul[id^="nv-primary-navigation"] .nv-nav-cart a.button.checkout.wc-forward:hover',
	);

	/**
	 * Secondary buttons selectors.
	 *
	 * @var array
	 */
	private $secondary_buttons_selectors = array(
		'default'          => '
			,.woocommerce-cart table.cart td.actions .coupon > .input-text + .button,
			.woocommerce-checkout #neve-checkout-coupon .woocommerce-form-coupon .form-row-last button,
			.woocommerce button.button,
			.woocommerce a.added_to_cart, 
			.woocommerce .checkout_coupon button.button, 
			.woocommerce #review_form #respond input#submit,
			.woocommerce .price_slider_amount button.button:not(.nv-sidebar-toggle),
			.woocommerce .button.button-secondary.more-details',
		'hover'            => '
			,#comments input[type=submit]:hover,
			.woocommerce-cart table.cart td.actions .coupon > .input-text + .button:hover,
			.woocommerce-checkout #neve-checkout-coupon .woocommerce-form-coupon .form-row-last button:hover,
			.woocommerce button.button:hover, 
			.woocommerce a.added_to_cart:hover, 
			.woocommerce .checkout_coupon button.button:hover, 
			.woocommerce #review_form #respond input#submit:hover,
			.woocommerce .price_slider_amount button.button:hover,
			.woocommerce .button.button-secondary.more-details:hover',
		'no-padding'       => '
			,.woocommerce ul[id^="nv-primary-navigation"] .woocommerce-mini-cart__buttons.buttons a.button.wc-forward:not(.checkout), 
			.woocommerce .woocommerce-mini-cart__buttons.buttons a.button.wc-forward:not(.checkout)',
		'no-padding-hover' => '
			,.woocommerce ul[id^="nv-primary-navigation"] .woocommerce-mini-cart__buttons.buttons a.button.wc-forward:not(.checkout):hover, 
			.woocommerce .woocommerce-mini-cart__buttons.buttons a.button.wc-forward:not(.checkout):hover',
	);
	/**
	 * Sidebar manager.
	 *
	 * @var \Neve\Views\Layouts\Layout_Sidebar
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

		/**
		 * Change product page sidebar default position
		 * Priority 9 to allow meta control to override this value
		 */
		add_filter( 'neve_sidebar_position', array( $this, 'product_page_sidebar_default_position' ), 9 );

		// Remove WooCommerce wrap.
		remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );
		remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );

		add_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );

		add_filter( 'neve_post_meta_filters_post_id', array( $this, 'adapt_meta_for_shop_page' ) );

		/**
		 * Ensure cart contents update when products are added to the cart via AJAX
		 */
		add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'cart_link_fragment' ) );

		add_filter( 'woocommerce_is_sold_individually', array( $this, 'remove_quantity' ), 10, 2 );

		remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10 );

		add_filter( 'woocommerce_product_description_heading', '__return_false' );
		add_filter( 'woocommerce_product_additional_information_heading', '__return_false' );

		$this->edit_woocommerce_header();
		$this->move_checkout_coupon();
		$this->add_inline_selectors();
	}

	/**
	 * Remove quantity input on single product.
	 *
	 * @return bool
	 */
	public function remove_quantity() {
		if ( ! is_product() ) {
			return false;
		}

		return true;
	}

	/**
	 * Change breadcrumb delimiter.
	 *
	 * @param array $default breadcrumbs defaults.
	 *
	 * @return mixed
	 */
	public function change_breadcrumbs_delimiter( $default ) {
		$default['delimiter'] = '<span class="nv-breadcrumb-delimiter">&raquo;</span>';

		return $default;
	}

	/**
	 * Change the default sidebar position for the product page.
	 *
	 * @param string $input - the value of the customizer control.
	 *
	 * @return string
	 */
	public function product_page_sidebar_default_position( $input ) {

		if ( is_product() ) {
			return get_theme_mod( 'neve_single_product_sidebar_layout', 'full-width' );
		}

		return $input;
	}

	/**
	 * Remove last breadcrumb on single product.
	 *
	 * @param array $crumbs breadcrumbs.
	 * @param array $args   breadcrumbs args.
	 *
	 * @return array
	 */
	public function remove_last_breadcrumb( $crumbs, $args ) {
		if ( ! is_product() ) {
			return $crumbs;
		}
		$length               = sizeof( $crumbs ) - 1;
		$crumbs[ $length ][0] = '';

		return $crumbs;
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
		add_action( 'nv_woo_header_bits', 'woocommerce_catalog_ordering', 30 );
		add_filter( 'woocommerce_show_page_title', '__return_false' );
		add_action( 'neve_before_shop_loop_content', array( $this, 'add_header_bits' ), 0 );

		// Change breadcrumbs.
		add_filter( 'woocommerce_get_breadcrumb', array( $this, 'remove_last_breadcrumb' ), 10, 2 );
		add_filter( 'woocommerce_breadcrumb_defaults', array( $this, 'change_breadcrumbs_delimiter' ) );
	}

	/**
	 * Add header for woocommerce pages.
	 */
	public function add_header_bits() {
		if ( ! is_shop() && ! is_product() && ! is_product_category() && ! is_product_taxonomy() && ! is_product_tag() ) {
			return;
		}

		echo '<div class="nv-bc-count-wrap">';
		woocommerce_breadcrumb();
		woocommerce_result_count();
		echo '</div>';

		if ( is_product() ) {
			return;
		}

		echo '<div class="nv-woo-filters">';
		$this->sidebar_toggle();
		do_action( 'nv_woo_header_bits' );
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
		$before_shop_classes = apply_filters( 'neve_before_shop_classes', 'nv-index-posts nv-shop col' );
		echo '<div class="' . esc_attr( $before_shop_classes ) . '">';
		do_action( 'neve_before_shop_loop_content' );
	}

	/**
	 * Wrap start of woocommerce pages.
	 */
	public function wrap_pages_start() {
		if ( ! is_woocommerce() ) {
			return;
		}
		echo '<div class="' . esc_attr( apply_filters( 'neve_container_class_filter', 'container' ) ) . ' shop-container">';
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

		$button_text  = apply_filters( 'neve_filter_woo_sidebar_open_button_text', __( 'Filter', 'neve' ) . '»' );
		$button_attrs = apply_filters( 'neve_woocommerce_sidebar_filter_btn_data_attrs', '' );
		echo '<a class="nv-sidebar-toggle" ' . wp_kses_post( $button_attrs ) . '>' . esc_html( $button_text ) . '</a>';
	}

	/**
	 * Add inline selectors for woocommerce.
	 */
	private function add_inline_selectors() {
		add_filter( 'neve_link_color_filter', array( $this, 'add_link_color' ) );
		add_filter( 'neve_link_hover_color_filter', array( $this, 'add_link_color' ) );
		add_filter( 'neve_button_color_filter', array( $this, 'add_button_color' ) );
		add_filter( 'neve_button_hover_color_filter', array( $this, 'add_button_hover_color' ) );
		add_filter( 'neve_button_text_color_filter', array( $this, 'add_button_text_color' ) );
		add_filter( 'neve_button_hover_text_color_filter', array( $this, 'add_button_hover_text_color' ) );
		add_filter( 'neve_button_border_radius_selectors_filter', array( $this, 'add_button_border_radius' ) );
		add_filter( 'neve_button_padding_selectors', array( $this, 'add_button_padding_selectors' ), 10, 2 );

		add_filter( 'neve_secondary_button_color_filter', array( $this, 'add_secondary_button_color' ) );
		add_filter( 'neve_secondary_button_hover_color_filter', array( $this, 'add_secondary_button_hover_color' ) );
		add_filter(
			'neve_secondary_button_border_radius_selectors_filter',
			array(
				$this,
				'add_secondary_button_border_radius',
			)
		);

		add_filter( 'neve_menu_items_color_filter', array( $this, 'add_menu_items_color' ) );
		add_filter( 'neve_menu_items_hover_color_filter', array( $this, 'add_menu_items_hover_color' ) );
		add_filter( 'neve_body_font_family_selectors', array( $this, 'add_font_families' ) );
	}

	/**
	 * Add selectors for menu item color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return mixed
	 */
	public function add_menu_items_color( $color_setup ) {
		$color_setup['color']['selectors'] .= ', .menu-item-nav-cart .cart-count';

		return $color_setup;
	}

	/**
	 * Add selectors for menu item hover color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return mixed
	 */
	public function add_menu_items_hover_color( $color_setup ) {
		$color_setup['color']['selectors'] .= ', .menu-item-nav-cart:hover .cart-count';

		return $color_setup;
	}

	/**
	 * Add font family selectors.
	 *
	 * @param string $selectors css selectors to apply body font family to.
	 *
	 * @return string
	 */
	public function add_font_families( $selectors ) {
		$selectors .= ',.cart_totals > h2, .cross-sells > h2, .woocommerce-billing-fields > h3, #order_review_heading, .woocommerce-shipping-fields > h3';

		return $selectors;
	}

	/**
	 * Add button color colors.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_button_color( $color_setup ) {
		$color_setup['background']['selectors'] .= $this->primary_buttons_selectors['default'];

		return $color_setup;
	}

	/**
	 * Add button hover color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_button_hover_color( $color_setup ) {
		$color_setup['background']['selectors'] .= $this->primary_buttons_selectors['hover'];

		return $color_setup;
	}

	/**
	 * Add secondary button color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_secondary_button_color( $color_setup ) {
		$color_setup['color']['selectors']        .= $this->secondary_buttons_selectors['no-padding'];
		$color_setup['color']['selectors']        .= $this->secondary_buttons_selectors['default'];
		$color_setup['border-color']['selectors'] .= $this->secondary_buttons_selectors['no-padding'];
		$color_setup['border-color']['selectors'] .= $this->secondary_buttons_selectors['default'];

		return $color_setup;
	}

	/**
	 * Add secondary button hover color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_secondary_button_hover_color( $color_setup ) {
		$color_setup['color']['selectors']        .= $this->secondary_buttons_selectors['hover'];
		$color_setup['color']['selectors']        .= $this->secondary_buttons_selectors['no-padding-hover'];
		$color_setup['border-color']['selectors'] .= $this->secondary_buttons_selectors['hover'];
		$color_setup['border-color']['selectors'] .= $this->secondary_buttons_selectors['no-padding-hover'];

		return $color_setup;
	}

	/**
	 * Add button text color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_button_text_color( $color_setup ) {
		$color_setup['color']['selectors'] .= $this->primary_buttons_selectors['default'];

		return $color_setup;
	}

	/**
	 * Add button hover text color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_button_hover_text_color( $color_setup ) {
		$color_setup['color']['selectors'] .= $this->primary_buttons_selectors['hover'];

		return $color_setup;
	}

	/**
	 * Add button border radius.
	 *
	 * @param string $selectors the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return string
	 */
	public function add_button_border_radius( $selectors ) {
		$selectors .= $this->primary_buttons_selectors['default'];

		return $selectors;
	}

	/**
	 * Add secondary button border radius.
	 *
	 * @param string $selectors the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return string
	 */
	public function add_secondary_button_border_radius( $selectors ) {
		$selectors .= $this->secondary_buttons_selectors['default'];
		$selectors .= $this->secondary_buttons_selectors['no-padding'];
		$selectors .= ',.woocommerce a.nv-quick-view-product.top';

		return $selectors;
	}

	/**
	 * Add buttons paddings.
	 *
	 * @param string $selectors css selectors.
	 * @param string $theme_mod theme mod key.
	 *
	 * @return string
	 */
	public function add_button_padding_selectors( $selectors, $theme_mod ) {
		if ( $theme_mod === 'neve_button_padding' ) {
			$selectors .= '
			,.woocommerce a.button,
			.woocommerce .button,
			.woocommerce a.button.alt,
			.woocommerce a.button.button-primary,
			.woocommerce a.button.checkout-button,
			.woocommerce button.button:disabled,
			.woocommerce button.button:disabled[disabled],
			.woocommerce a.button.add_to_cart,
			.woocommerce a.product_type_grouped,
			.woocommerce a.product_type_external,
			.woocommerce a.product_type_variable,
			.woocommerce button.button.alt.single_add_to_cart_button.disabled,
			.woocommerce button.button.alt.single_add_to_cart_button,
			.woocommerce .actions > button[type=submit],
			.woocommerce .checkout.wc-forward,
			.woocommerce button#place_order,
			.woocommerce .return-to-shop > .button';
		}

		if ( $theme_mod === 'neve_secondary_button_padding' ) {
			$selectors .= $this->secondary_buttons_selectors['default'];
			$selectors .= ',.woocommerce a.nv-quick-view-product.top';
		}

		return $selectors;
	}

	/**
	 * Add link colors.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_link_color( $color_setup ) {
		$color_setup['color']['selectors'] .= '';

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
		}

		return true;
	}

	/**
	 * Does what it says.
	 */
	private function move_checkout_coupon() {
		/**
		 * Checkout page
		 *
		 * @see move_coupon()
		 * @see clear_coupon()
		 */
		add_action( 'woocommerce_before_checkout_form', array( $this, 'move_coupon' ) );
		add_action( 'woocommerce_before_checkout_billing_form', array( $this, 'clear_coupon' ) );
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

	/**
	 * Update the counter of products in cart.
	 *
	 * @param array $fragments WooFragments.
	 *
	 * @return mixed
	 */
	public function cart_link_fragment( $fragments ) {
		$fragments['.cart-icon-wrapper'] = '<a href="' . esc_url( wc_get_cart_url() ) . '" class="cart-icon-wrapper">';

		$fragments['.cart-icon-wrapper'] .= neve_cart_icon();
		$fragments['.cart-icon-wrapper'] .= '<span class="screen-reader-text">' . __( 'Cart', 'neve' ) . '</span>';
		$fragments['.cart-icon-wrapper'] .= '<span class="cart-count">' . WC()->cart->get_cart_contents_count() . '</span>';
		$fragments['.cart-icon-wrapper'] .= '</a>';

		return $fragments;
	}
}
