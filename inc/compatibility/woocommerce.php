<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      04/09/2018
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

use HFG\Core\Components\CartIcon;
use HFG\Core\Magic_Tags;
use Neve\Core\Settings\Config;
use Neve\Customizer\Defaults\Layout;
use Neve\Views\Breadcrumbs;
use Neve\Views\Layouts\Layout_Sidebar;
use RankMath\Helper;
use WC_Payment_Gateways;

/**
 * Class Woocommerce
 *
 * @package Neve\Compatibility
 */
class Woocommerce {

	use Layout;

	/**
	 * Primary button selectors.
	 *
	 * @var array
	 */
	private $primary_buttons_selectors = array(
		'default' => '
			,.woocommerce *:not(.woocommerce-mini-cart__buttons) > a.button,
			.woocommerce *:not(.woocommerce-mini-cart__buttons) > .button:not(.nv-sidebar-toggle):not(.nv-close-cart-sidebar):not([name="apply_coupon"]):not(.more-details):not(.checkout-button),
			.woocommerce a.button.alt,
			.woocommerce a.button.button-primary,
			.woocommerce button.button:disabled,
			.woocommerce button.button:disabled[disabled],
			.woocommerce a.button.add_to_cart,
			.woocommerce a.product_type_grouped,
			.woocommerce a.product_type_external,
			.woocommerce a.product_type_variable,
			.woocommerce button.button.alt,
			.woocommerce button.button.alt.single_add_to_cart_button.disabled,
			.woocommerce button.button.alt.single_add_to_cart_button,
			.woocommerce .actions > button[type=submit],
			.woocommerce button#place_order,
			.woocommerce .return-to-shop > .button,
			.button.woocommerce-form-login__submit',
		'hover'   => '
			,.woocommerce *:not(.woocommerce-mini-cart__buttons) > a.button:hover,
			.woocommerce *:not(.woocommerce-mini-cart__buttons) > .button:not(.nv-sidebar-toggle):not(.nv-close-cart-sidebar):not([name="apply_coupon"]):not(.more-details):not(.checkout-button):hover,
			.woocommerce a.button.alt:hover,
			.woocommerce a.button.button-primary:hover,
			.woocommerce button.button:disabled:hover,
			.woocommerce button.button:disabled[disabled]:hover,
			.woocommerce a.button.add_to_cart:hover,
			.woocommerce a.product_type_grouped:hover,
			.woocommerce a.product_type_external:hover,
			.woocommerce a.product_type_variable:hover,
			.woocommerce button.button.alt.single_add_to_cart_button.disabled:hover,
			.woocommerce button.button.alt.single_add_to_cart_button:hover,
			.woocommerce .actions > button[type=submit]:hover,
			.woocommerce .return-to-shop > .button:hover,
			.button.woocommerce-form-login__submit:hover',
	);

	/**
	 * Secondary buttons selectors.
	 *
	 * @var array
	 */
	private $secondary_buttons_selectors = array(
		'default' => '
			,.woocommerce-cart table.cart td.actions .coupon > .input-text + .button,
			.woocommerce-checkout #neve-checkout-coupon .woocommerce-form-coupon .form-row-last button,
			.woocommerce button.button:not(.single_add_to_cart_button),
			.woocommerce a.added_to_cart,
			.woocommerce .checkout_coupon button.button,
			.woocommerce .price_slider_amount button.button,
			.woocommerce .button.button-secondary.more-details,
			.woocommerce-checkout #neve-checkout-coupon .woocommerce-form-coupon .form-row-last button.button',
		'hover'   => '
			,.woocommerce-cart table.cart td.actions .coupon > .input-text + .button:hover,
			.woocommerce-checkout #neve-checkout-coupon .woocommerce-form-coupon .form-row-last button:hover,
			.woocommerce button.button:not(.single_add_to_cart_button):hover,
			.woocommerce a.added_to_cart:hover,
			.woocommerce .checkout_coupon button.button:hover,
			.woocommerce .price_slider_amount button.button:hover,
			.woocommerce .button.button-secondary.more-details:hover,
			.woocommerce-checkout #neve-checkout-coupon .woocommerce-form-coupon .form-row-last button.button:hover',
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
		add_filter( 'body_class', array( $this, 'add_payment_method_class' ) );
		add_action( 'wp', array( $this, 'register_hooks' ), 11 );
		add_action( 'neve_react_controls_localization', array( $this, 'add_customizer_options' ) );
	}

	/**
	 * Add payment method class on body.
	 *
	 * @param array $classes Body classes.
	 *
	 * @return array
	 */
	public function add_payment_method_class( $classes ) {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return $classes;
		}

		if ( ! is_checkout() ) {
			return $classes;
		}

		$payment_method = $this->get_payment_method();
		if ( ! $payment_method ) {
			return $classes;
		}

		$classes[] = 'nv-pay-' . esc_html( $payment_method );
		return $classes;
	}

	/**
	 * Add params to specify if the site has elementor templates.
	 *
	 * @param  array $options current options.
	 * @return array
	 */
	public function add_customizer_options( $options ) {
		$options['elementor']['hasElementorShopTemplate']    = Elementor::has_template( 'product-archive' );
		$options['elementor']['hasElementorProductTemplate'] = Elementor::has_template( 'product' );
		return $options;
	}

	/**
	 * Get the selected payment method.
	 *
	 * @return string | null
	 */
	private function get_payment_method() {
		if ( ! function_exists( 'WC' ) ) {
			return null;
		}

		if ( ! class_exists( 'WC_Payment_Gateways' ) ) {
			return null;
		}

		$payment_method = WC()->session->get( 'chosen_payment_method' );
		if ( ! $payment_method ) {
			// If payment method is null, see if there is only one option;
			$payment_gateways          = new WC_Payment_Gateways();
			$available_payment_methods = $payment_gateways->get_available_payment_gateways();
			if ( is_array( $available_payment_methods ) && count( $available_payment_methods ) === 1 ) {
				return array_keys( $available_payment_methods )[0];
			}
		}
		return $payment_method;
	}

	/**
	 * Should module load?
	 *
	 * @return bool
	 */
	public function should_load() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return false;
		}

		// Prevent doing any modifications on the checkout page if the payment method is Klarna.
		if ( is_checkout() ) {
			$payment_method = $this->get_payment_method();
			if ( $payment_method === 'kco' ) {
				return false;
			}
		}

		$is_shop_template    = Elementor::is_elementor_template( 'archive', 'product_archive' );
		$is_product_template = Elementor::is_elementor_template( 'single', 'product' );

		return ! ( $is_shop_template || $is_product_template );
	}

	/**
	 * Register hooks
	 *
	 * @return void
	 */
	public function register_hooks() {
		if ( ! $this->should_load() ) {
			return;
		}

		$this->sidebar_manager = new Layout_Sidebar();

		add_action( 'admin_init', array( $this, 'set_update_woo_width_flag' ), 9 );
		add_action( 'admin_footer', array( $this, 'update_woo_width' ) );

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
		// add_filter( 'neve_sidebar_position', array( $this, 'product_page_sidebar_default_position' ), 9 );

		// Remove WooCommerce wrap.
		remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );
		remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );

		add_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );

		add_filter( 'neve_post_meta_filters_post_id', array( $this, 'adapt_meta_for_shop_page' ) );

		/**
		 * Ensure cart contents update when products are added to the cart via AJAX
		 */
		add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'cart_link_fragment' ) );

		remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10 );

		add_filter( 'woocommerce_product_description_heading', '__return_false' );
		add_filter( 'woocommerce_product_additional_information_heading', '__return_false' );

		add_filter( 'woocommerce_cart_item_price', array( $this, 'show_crossed_regular_price_on_cart' ), 10, 3 );

		// Add breadcrumbs and results count
		add_action( 'neve_bc_count', [ $this, 'render_breadcrumbs' ] );
		add_action( 'neve_bc_count', 'woocommerce_result_count' );

		$this->edit_woocommerce_header();
		$this->move_checkout_coupon();
		$this->add_inline_selectors();
		add_action( 'wp', [ $this, 'setup_form_buttons' ] );

		if ( neve_is_new_skin() ) {
			add_action(
				'woocommerce_checkout_before_customer_details',
				function () {
					echo '<div class="nv-customer-details">';
				},
				0
			);
			add_action( 'woocommerce_checkout_after_customer_details', [ $this, 'close_div' ], PHP_INT_MAX );
			add_action(
				'woocommerce_checkout_before_order_review_heading',
				function () {
					echo '<div class="nv-order-review">';
				}
			);
			add_action( 'woocommerce_checkout_after_order_review', [ $this, 'close_div' ] );

			add_action(
				'woocommerce_before_single_product_summary',
				function () {
					echo '<div class="nv-single-product-top">';
				},
				11
			);
			// here the priority should always be to close earlier than the Neve PRO performance module opening div
			add_action( 'woocommerce_after_single_product_summary', [ $this, 'close_div' ], -100 );
			// Change default for shop columns WooCommerce option.
			add_filter( 'default_option_woocommerce_catalog_columns', [ $this, 'change_default_shop_cols' ] );
		}
	}

	/**
	 * Normally, WooCommerce doesn't show the regular price on the cart, just shows the sale price.
	 * With that, the regular price is shown also as crossed on the cart.
	 *
	 * @param  string $price that current price column value on the cart page.
	 * @param  array  $cart_item current cart item.
	 * @param  string $cart_item_key cart item key.
	 * @return string
	 */
	public function show_crossed_regular_price_on_cart( $price, $cart_item, $cart_item_key ) {
		$product = $cart_item['data'];

		return $product->get_price_html();
	}

	/**
	 * Change default for catalog columns.
	 *
	 * @param int $default default value -> 4.
	 *
	 * @return int
	 */
	public function change_default_shop_cols( $default ) {
		return 3;
	}

	/**
	 * Set a flag that tells the plugin that woocommerce pages were created from their tool.
	 *
	 * @return bool
	 */
	public function set_update_woo_width_flag() {

		if ( ! isset( $_GET['page'] ) ) {
			return false;
		}

		$current_page = sanitize_text_field( wp_unslash( $_GET['page'] ) );
		if ( 'wc-status' !== $current_page && 'wc-setup' !== $current_page ) {
			return false;
		}

		if ( $current_page === 'wc-status' && ( ! isset( $_GET['action'] ) || ! isset( $_GET['_wpnonce'] ) || 'install_pages' !== sanitize_text_field( wp_unslash( $_GET['action'] ) ) ) ) {
			return false;
		}

		if ( $current_page === 'wc-setup' && ( ! isset( $_GET['step'] ) || 'payment' !== sanitize_text_field( wp_unslash( $_GET['step'] ) ) ) ) {
			return false;
		}

		update_option( 'neve_update_woo_width', 'yes' );
		set_transient( 'woocommerce_shop_page_id', 'executed', 10 * MINUTE_IN_SECONDS );

		return true;
	}

	/**
	 * Update WooCommerce pages after the pages were created from their tool,
	 *
	 * @return bool
	 */
	public function update_woo_width() {
		if ( get_option( 'neve_update_woo_width' ) !== 'yes' ) {
			return false;
		}

		$cart_id     = get_option( 'woocommerce_cart_page_id' );
		$checkout_id = get_option( 'woocommerce_checkout_page_id' );
		$my_account  = get_option( 'woocommerce_myaccount_page_id' );
		$pages       = array( $cart_id, $checkout_id, $my_account );
		foreach ( $pages as $page_id ) {
			if ( empty( $page_id ) ) {
				continue;
			}
			update_post_meta( $page_id, 'neve_meta_sidebar', 'full-width' );
			update_post_meta( $page_id, 'neve_meta_enable_content_width', 'on' );
			update_post_meta( $page_id, 'neve_meta_content_width', 100 );
		}
		update_option( 'neve_update_woo_width', false );

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
		if ( neve_is_new_skin() ) {
			$default['delimiter'] = '<span class="nv-breadcrumb-delimiter">\</span>';

			return $default;
		}

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
	 * Change functions hooked into woocommerce header.
	 */
	private function edit_woocommerce_header() {
		remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
		add_action( 'nv_woo_header_bits', 'woocommerce_catalog_ordering', 30 );
		add_filter( 'woocommerce_show_page_title', '__return_false' );
		add_action( 'neve_before_shop_loop_content', array( $this, 'add_header_bits' ), 0 );

		// Change breadcrumbs.
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
		do_action( 'neve_bc_count' );
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

		$button_attrs = apply_filters( 'neve_woocommerce_sidebar_filter_btn_data_attrs', '' );


		if ( neve_is_new_skin() ) {
			echo '<a href="#" class="nv-sidebar-toggle" ' . wp_kses_post( $button_attrs ) . '>';
			echo '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 21.6667V1.66667C25 0.75 24.25 0 23.3333 0H1.66667C0.75 0 0 0.75 0 1.66667V21.6667C0 22.5833 0.75 23.3333 1.66667 23.3333H23.3333C24.25 23.3333 25 22.5833 25 21.6667ZM8.33333 13.3333H10C10.9167 13.3333 11.6667 14.0833 11.6667 15C11.6667 15.9167 10.9167 16.6667 10 16.6667H8.33333V19.1667C8.33333 19.6333 7.96667 20 7.5 20C7.03333 20 6.66667 19.6333 6.66667 19.1667V16.6667H5C4.08333 16.6667 3.33333 15.9167 3.33333 15C3.33333 14.0833 4.08333 13.3333 5 13.3333H6.66667V4.16667C6.66667 3.7 7.03333 3.33333 7.5 3.33333C7.96667 3.33333 8.33333 3.7 8.33333 4.16667V13.3333ZM15 10H16.6667V19.1667C16.6667 19.6333 17.0333 20 17.5 20C17.9667 20 18.3333 19.6333 18.3333 19.1667V10H20C20.9167 10 21.6667 9.25 21.6667 8.33333C21.6667 7.41667 20.9167 6.66667 20 6.66667H18.3333V4.16667C18.3333 3.7 17.9667 3.33333 17.5 3.33333C17.0333 3.33333 16.6667 3.7 16.6667 4.16667V6.66667H15C14.0833 6.66667 13.3333 7.41667 13.3333 8.33333C13.3333 9.25 14.0833 10 15 10Z" fill="currentColor"/></svg>';
			echo '</a>';

			return;
		}

		$button_text = apply_filters( 'neve_filter_woo_sidebar_open_button_text', __( 'Filter', 'neve' ) . '»' );
		echo '<a href="#" class="nv-sidebar-toggle" ' . wp_kses_post( $button_attrs ) . '>' . esc_html( $button_text ) . '</a>';
	}

	/**
	 * Add inline selectors for woocommerce.
	 */
	private function add_inline_selectors() {

		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_NORMAL,
			array(
				$this,
				'add_primary_btns_normal',
			),
			10,
			1
		);
		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_HOVER,
			array(
				$this,
				'add_primary_btns_hover',
			),
			10,
			1
		);
		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_PADDING,
			array(
				$this,
				'add_primary_btns_padding',
			),
			10,
			1
		);


		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_NORMAL,
			array(
				$this,
				'add_secondary_btns_normal',
			),
			10,
			1
		);
		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_HOVER,
			array(
				$this,
				'add_secondary_btns_hover',
			),
			10,
			1
		);
		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_PADDING,
			array(
				$this,
				'add_secondary_btns_padding',
			),
			10,
			1
		);

		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_FORM_INPUTS,
			array(
				$this,
				'add_inputs_selectors',
			),
			10,
			1
		);

		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_FORM_INPUTS_WITH_SPACING,
			array(
				$this,
				'add_inputs_spacing_selectors',
			),
			10,
			1
		);


		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_FORM_INPUTS_LABELS,
			array(
				$this,
				'add_labels_selectors',
			),
			10,
			1
		);

		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_FORM_SEARCH_INPUTS,
			array(
				$this,
				'add_search_inputs_selector',
			),
			10,
			1
		);

		add_filter( 'neve_body_font_family_selectors', array( $this, 'add_font_families' ) );
		add_filter( 'neve_headings_typeface_selectors', array( $this, 'add_typeface_selectors' ) );
	}

	/**
	 * Add checkout labels to style.
	 *
	 * @param string $selectors css selectors for labels.
	 *
	 * @return string
	 */
	public function add_inputs_selectors( $selectors ) {
		return $selectors . ',
		.woocommerce-cart table.cart td.actions .coupon .input-text,
		.woocommerce-page .select2-container--default .select2-selection--single,
		.woocommerce-page .woocommerce form .form-row input.input-text,
		.woocommerce-page .woocommerce form .form-row textarea,
		input.wc-block-product-search__field';
	}

	/**
	 * Add additional inputs spacing.
	 *
	 * @param string $selectors css selectors for inputs that need spacing.
	 *
	 * @return string
	 */
	public function add_inputs_spacing_selectors( $selectors ) {
		return $selectors . ', .woocommerce-page .select2';
	}

	/**
	 * Add checkout labels to style.
	 *
	 * @param string $selectors css selectors for labels.
	 *
	 * @return string
	 */
	public function add_labels_selectors( $selectors ) {
		return ( $selectors . ', .woocommerce form .form-row label' );
	}

	/**
	 * Add product search input selector.
	 *
	 * @param string $selectors css selectors for labels.
	 *
	 * @return string
	 */
	public function add_search_inputs_selector( $selectors ) {
		return ( $selectors . ', form.woocommerce-product-search input[type="search"]' );
	}

	/**
	 * Add primary btn selectors.
	 *
	 * @param string $selectors Current CSS selectors.
	 *
	 * @return string
	 */
	public function add_primary_btns_normal( $selectors ) {
		return ( $selectors . $this->primary_buttons_selectors['default'] );
	}

	/**
	 * Add primary btn selectors.
	 *
	 * @param string $selectors Current CSS selectors.
	 *
	 * @return string
	 */
	public function add_primary_btns_hover( $selectors ) {
		return ( $selectors . $this->primary_buttons_selectors['hover'] );
	}

	/**
	 * Add primary btn selectors for padding.
	 *
	 * @param string $selectors Current CSS selectors.
	 *
	 * @return string
	 */
	public function add_primary_btns_padding( $selectors ) {
		return ( $selectors . ',.woocommerce a.button,
			.woocommerce .button,
			.woocommerce a.button.loading,
			.woocommerce a.button.alt,
			.woocommerce a.button.button-primary,
			.woocommerce button.button:disabled,
			.woocommerce button.button:disabled[disabled],
			.woocommerce a.button.add_to_cart,
			.woocommerce a.product_type_grouped,
			.woocommerce a.product_type_external,
			.woocommerce a.product_type_variable,
			.woocommerce button.button.alt.single_add_to_cart_button.disabled,
			.woocommerce button.button.alt.single_add_to_cart_button,
			.woocommerce .actions > button[type=submit],
			.woocommerce button#place_order,
			.woocommerce .return-to-shop > .button,
			.woocommerce .button.woocommerce-form-login__submit' );
	}

	/**
	 * Add secondary btn selectors.
	 *
	 * @param string $selectors Current CSS selectors.
	 *
	 * @return string
	 */
	public function add_secondary_btns_normal( $selectors ) {

		return ( $selectors . $this->secondary_buttons_selectors['default'] );

	}

	/**
	 * Add secondary btn selectors.
	 *
	 * @param string $selectors Current CSS selectors.
	 *
	 * @return string
	 */
	public function add_secondary_btns_hover( $selectors ) {

		return ( $selectors . $this->secondary_buttons_selectors['hover'] );

	}

	/**
	 * Add secondary btn selectors for padding.
	 *
	 * @param string $selectors Current CSS selectors.
	 *
	 * @return string
	 */
	public function add_secondary_btns_padding( $selectors ) {
		return ( $selectors . $this->secondary_buttons_selectors['default'] . ',.woocommerce div.sp-quick-view-product.top' );
	}

	/**
	 * Add selectors for the headings typeface styles.
	 *
	 * @param array $array the headings selectors.
	 *
	 * @return array
	 */
	public function add_typeface_selectors( $array ) {
		$array['h1'] = $array['h1'] . ', .woocommerce.single .product_title';
		$array['h3'] = $array['h3'] . ', .woocommerce-billing-fields > h3, .woocommerce-shipping-fields > h3';

		return $array;
	}

	/**
	 * Add font family selectors.
	 *
	 * @param string $selectors css selectors to apply body font family to.
	 *
	 * @return string
	 */
	public function add_font_families( $selectors ) {
		$selectors .= ',.cart_totals > h2, .cross-sells > h2, #order_review_heading';

		return $selectors;
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

		$new_skin         = neve_is_new_skin();
		$advanced_options = get_theme_mod( 'neve_advanced_layout_options', $new_skin );

		$mod = 'neve_default_sidebar_layout';
		if ( $advanced_options === true ) {
			$mod = 'neve_shop_archive_sidebar_layout';
			if ( is_product() ) {
				$mod = 'neve_single_product_sidebar_layout';
			}
		}

		$default   = $this->sidebar_layout_alignment_default( $mod );
		$theme_mod = apply_filters( 'neve_sidebar_position', get_theme_mod( $mod, $default ) );
		if ( $theme_mod !== 'right' && $theme_mod !== 'left' ) {
			return false;
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
		$fragments['.cart-count'] = '<span class="cart-count">' . WC()->cart->get_cart_contents_count() . '</span>';

		$cart_label = get_theme_mod( 'header_cart_icon_' . CartIcon::CART_LABEL );
		if ( ! empty( $cart_label ) ) {
			$cart_label                    = Magic_Tags::get_instance()->do_magic_tags( $cart_label );
			$fragments['.cart-icon-label'] = '<span class="cart-icon-label inherit-ff">' . $cart_label . '</span>';
		}

		return $fragments;
	}

	/**
	 * Render woocommerce breadcrumbs.
	 */
	public function render_breadcrumbs() {

		/**
		 * Filters the visibility of breadcrumbs.
		 *
		 * @param bool $status Whether the breadcrumbs should be displayed or not.
		 * @since 3.1
		 */
		$should_display_breadcrumbs = apply_filters( 'neve_breadcrumbs_toggle', true );
		if ( ! $should_display_breadcrumbs ) {
			return;
		}

		/**
		 * Filters the condition that decides if breadcrumbs should be loaded from WooCommerce or 3rd parties.
		 *
		 * @param bool $status Whether the breadcrumbs should be loaded from 3rd parties or not.
		 * @since 3.1
		 */
		$enable_3rd_party_breadcrumbs = apply_filters( 'neve_woo_3rd_party_breadcrumbs', false );
		if ( ! $enable_3rd_party_breadcrumbs ) {
			woocommerce_breadcrumb();
			return;
		}

		$is_seo_breadcrumb = Breadcrumbs::maybe_render_seo_breadcrumbs( 'small', true );
		if ( ! $is_seo_breadcrumb ) {
			woocommerce_breadcrumb();
		}
	}

	/**
	 * Add form buttons selectors.
	 *
	 * @param string $selector css selector.
	 *
	 * @return string
	 */
	public function add_buttons_selectors( $selector ) {
		return $selector . ',.woocommerce #review_form #respond input#submit,
		.woocommerce-cart .woocommerce .wc-proceed-to-checkout > a.button.checkout-button,
		.woocommerce-checkout #payment .place-order button#place_order,
		.woocommerce-account.woocommerce-edit-account .woocommerce .woocommerce-MyAccount-content p > button[type="submit"][name="save_account_details"].woocommerce-Button.button,
		.wc-block-product-search .wc-block-product-search__button:not(:disabled):not([aria-disabled=true])';
	}

	/**
	 * Add form buttons padding selectors.
	 *
	 * @param string $selector css selector.
	 *
	 * @return string
	 */
	public function add_buttons_padding_selectors( $selector ) {
		return $selector . ',.woocommerce #review_form #respond input#submit';
	}

	/**
	 * Add form buttons hover selectors.
	 *
	 * @param string $selector css selector.
	 *
	 * @return string
	 */
	public function add_buttons_hover_selectors( $selector ) {
		return $selector . ',.woocommerce #review_form #respond input#submit:hover,
		 .woocommerce a.button.checkout-button:hover,
		 .woocommerce button#place_order:hover,
		 .woocommerce-account.woocommerce-edit-account .woocommerce .woocommerce-MyAccount-content p > button[type="submit"][name="save_account_details"].woocommerce-Button.button:hover,
		 .wc-block-product-search .wc-block-product-search__button:not(:disabled):not([aria-disabled=true]):hover';
	}

	/**
	 * Setup legacy form buttons.
	 *
	 * @since 3.0.0
	 */
	private function setup_legacy_form_buttons() {
		$form_buttons_type = get_theme_mod( 'neve_form_button_type', 'primary' );
		if ( $form_buttons_type === 'primary' ) {
			add_filter(
				'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_NORMAL,
				array( $this, 'add_buttons_selectors' ),
				10,
				1
			);
			add_filter(
				'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_PADDING,
				array( $this, 'add_buttons_padding_selectors' ),
				10,
				1
			);
			add_filter(
				'neve_selectors_' . Config::CSS_SELECTOR_BTN_PRIMARY_HOVER,
				array( $this, 'add_buttons_hover_selectors' ),
				10,
				1
			);

			return;
		}
		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_NORMAL,
			array( $this, 'add_buttons_selectors' ),
			10,
			1
		);
		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_PADDING,
			array( $this, 'add_buttons_padding_selectors' ),
			10,
			1
		);
		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_BTN_SECONDARY_HOVER,
			array( $this, 'add_buttons_hover_selectors' ),
			10,
			1
		);
	}

	/**
	 * Setup Form Buttons Type
	 */
	public function setup_form_buttons() {
		if ( ! neve_is_new_skin() ) {
			$this->setup_legacy_form_buttons();

			return;
		}
		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_FORM_BUTTON,
			function ( $selectors ) {
				return $selectors . '
				,#review_form #respond input#submit,
				.woocommerce-cart .wc-proceed-to-checkout a.checkout-button,
				.woocommerce-checkout #payment .place-order button#place_order,
				.woocommerce-account .woocommerce [type="submit"]';
			},
			10,
			1
		);
		add_filter(
			'neve_selectors_' . Config::CSS_SELECTOR_FORM_BUTTON_HOVER,
			function ( $selectors ) {
				return $selectors . '
				,#review_form #respond input#submit:hover,
				.woocommerce-cart .wc-proceed-to-checkout a.checkout-button:hover,
				.woocommerce-checkout #payment .place-order button#place_order:hover,
				.woocommerce-account .woocommerce [type="submit"]:hover';
			},
			10,
			1
		);
	}
}
