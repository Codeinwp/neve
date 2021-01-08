<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      04/09/2018
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

use HFG\Core\Components\CartIcon;
use Neve\Core\Settings\Config;
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
			.woocommerce-cart table.cart td.actions .coupon > .input-text + .button:hover,
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
		if ( ! class_exists( 'WooCommerce', false ) ) {
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

		remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10 );

		add_filter( 'woocommerce_product_description_heading', '__return_false' );
		add_filter( 'woocommerce_product_additional_information_heading', '__return_false' );

		// Add breadcrumbs and results count
		add_action( 'neve_bc_count', 'woocommerce_breadcrumb' );
		add_action( 'neve_bc_count', 'woocommerce_result_count' );

		$this->edit_woocommerce_header();
		$this->move_checkout_coupon();
		$this->add_inline_selectors();
		add_action( 'wp', [ $this, 'setup_form_buttons' ] );
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
		remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10 );
		remove_action( 'woocommerce_archive_description', 'woocommerce_product_archive_description', 10 );
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

		$button_text  = apply_filters( 'neve_filter_woo_sidebar_open_button_text', __( 'Filter', 'neve' ) . '»' );
		$button_attrs = apply_filters( 'neve_woocommerce_sidebar_filter_btn_data_attrs', '' );
		echo '<a class="nv-sidebar-toggle" ' . wp_kses_post( $button_attrs ) . '>' . esc_html( $button_text ) . '</a>';
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
		.wc-block-product-search form input.wc-block-product-search__field';
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
			.woocommerce .button.woocommerce-form-login__submit,
			.woocommerce.single .quantity input' );
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
		return ( $selectors . $this->secondary_buttons_selectors['default'] . ',.woocommerce a.nv-quick-view-product.top' );
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
		$fragments['.cart-count'] = '<span class="cart-count">' . WC()->cart->get_cart_contents_count() . '</span>';

		$cart_label = get_theme_mod( 'header_cart_icon_' . CartIcon::CART_LABEL );
		if ( strpos( $cart_label, '{cart_total}' ) !== false ) {
			$fragments['.nv-cart-icon-total-plain'] = '<span class="nv-cart-icon-total-plain">' . WC()->cart->cart_contents_total . '</span>';
		}
		if ( strpos( $cart_label, '{cart_total_currency_symbol}' ) !== false ) {
			$fragments['.nv-cart-icon-total-currency'] = '<span class="nv-cart-icon-total-currency">' . WC()->cart->get_cart_total() . '</span>';
		}


		return $fragments;
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
	 * Setup Form Buttons Type
	 */
	public function setup_form_buttons() {
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
}
