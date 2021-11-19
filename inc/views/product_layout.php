<?php
/**
 * Product layout class.
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Product_Layout
 *
 * @package Neve\Views
 */
class Product_Layout extends Base_View {

	/**
	 * Init function.
	 */
	public function init() {
		if ( ! $this->should_load() ) {
			return;
		}
		add_action( 'woocommerce_after_single_product_summary', array( $this, 'render_exclusive_products_section' ), 20 );
		add_filter( 'body_class', array( $this, 'body_classes' ) );
		add_action( 'woocommerce_before_shop_loop_item', array( $this, 'card_content_wrapper' ), 1 );
		add_action( 'woocommerce_after_shop_loop_item', array( $this, 'wrapper_close_div' ), 100 );

		// Wrap product image in a div and add another div for buttons on image option
		add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'product_image_wrap' ), 8 );
		add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'out_of_stock_badge' ), 9 );

		// We are using this twice since product_image_wrap is opening two divs which needs to be closed.
		add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'wrapper_close_div' ), 11 );
		add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'wrapper_close_div' ), 14 );

	}

	/**
	 * Product image wrapper.
	 */
	public function product_image_wrap() {
		$product_classes = apply_filters( 'neve_wrapper_class', '' );
		echo '<div class="nv-product-image ' . esc_attr( $product_classes ) . '">';
		/**
		 * Fires before the product warpper is rendered.
		 *
		 * @since 2.11
		 */
		do_action( 'neve_product_image_wrap_before' );
		echo '<div class="img-wrap">';
	}

	/**
	 * Closing tag
	 */
	public function wrapper_close_div() {
		echo '</div>';
	}
	/**
	 * Add out of stock label.
	 *
	 * @return bool
	 */
	public function out_of_stock_badge() {
		global $product;
		if ( $product->is_in_stock() ) {
			return false;
		}
		$out_of_stock_label = apply_filters( 'nv_out_of_stock_text', __( 'Out of stock', 'neve' ) );

		echo '<div class="out-of-stock-badge">';
		echo wp_kses_post( $out_of_stock_label );
		echo '</div>';
		return true;
	}

	/**
	 * Wrapper for card content.
	 */
	public function card_content_wrapper() {
		$card_attributes = apply_filters(
			'nv_product_card_wrapper_attributes',
			[
				'class' => 'nv-card-content-wrapper',
			]
		);

		$attributes = '';
		foreach ( $card_attributes as $attr => $val ) {
			$attributes .= ' ' . $attr . '="' . $val . '"';
		}

		echo wp_kses_post( '<div ' . $attributes . '>' );
	}

	/**
	 * Check if the class should load.
	 *
	 * @return bool
	 */
	private function should_load() {
		return class_exists( 'WooCommerce', false );
	}

	/**
	 * Render exclusive products section
	 */
	public function render_exclusive_products_section() {
		$products_category = get_theme_mod( 'neve_exclusive_products_category', '-' );
		if ( $products_category === '-' || neve_is_amp() ) {
			return;
		}

		$title = get_theme_mod( 'neve_exclusive_products_title' );

		$query_args = array(
			'post_type'           => 'product',
			'post_status'         => 'publish',
			'ignore_sticky_posts' => 1,
			'posts_per_page'      => 10,
		);

		if ( $products_category !== 'all' ) {
			$query_args['tax_query'] = array( // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
				array(
					'taxonomy' => 'product_cat',
					'field'    => 'term_id', // This is optional, as it defaults to 'term_id'
					'terms'    => $products_category,
					'operator' => 'IN', // Possible values are 'IN', 'NOT IN', 'AND'.
				),
				array(
					'taxonomy' => 'product_visibility',
					'field'    => 'slug',
					'terms'    => 'exclude-from-catalog', // Possibly 'exclude-from-search' too
					'operator' => 'NOT IN',
				),
			);
		}

		$loop = new \WP_Query( $query_args );
		if ( ! $loop->have_posts() ) {
			return;
		}
		$dots = 0;
		echo '<section class="' . esc_attr( apply_filters( 'neve_exclusive_products_class', 'exclusive products' ) ) . '">';
		if ( ! empty( $title ) ) {
			echo '<h2>' . wp_kses_post( $title ) . '</h2>';
		}

		echo '<ul class="products exclusive-products">';
		add_filter( 'woocommerce_post_class', array( $this, 'prefix_post_class' ), 21, 2 );
		while ( $loop->have_posts() ) {
			$loop->the_post();
			wc_get_template_part( 'content', 'product' );
			$dots++;
		}
		remove_filter( 'woocommerce_post_class', array( $this, 'prefix_post_class' ) );
		wp_reset_postdata();
		echo '</ul>';

		if ( $loop->post_count > 4 ) {
			echo '<div class="dots-nav">';
			for ( $i = 0; $i < $dots; $i++ ) {
				echo '<a class="dot"></a>';
			}
			echo '</div>';
		}

		echo '</section>';
	}

	/**
	 * Function that remove woocommerce first / last classes on products.
	 * This function is applied only on Exclusive products.
	 *
	 * @param array $classes WooCommerce classes on products.
	 *
	 * @return array|mixed
	 */
	public function prefix_post_class( $classes ) {
		if ( 'product' === get_post_type() ) {
			$classes = array_diff( $classes, array( 'first', 'last' ) );
		}
		return $classes;
	}

	/**
	 * Add body classes contextually.
	 *
	 * @param array $classes the body classes.
	 *
	 * @return array
	 */
	public function body_classes( $classes ) {
		$products_category = get_theme_mod( 'neve_exclusive_products_category', '-' );
		if ( $products_category === '-' || ! is_product() ) {
			return $classes;
		}
		$classes[] = 'nv-exclusive';

		return $classes;
	}
}
