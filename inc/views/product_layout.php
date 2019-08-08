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
			$query_args['tax_query'] = array(
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
		echo '<section class="exclusive products">';
		if ( ! empty( $title ) ) {
			echo '<h2>' . wp_kses_post( $title ) . '</h2>';
		}

		echo '<ul class="products exclusive-products">';
		while ( $loop->have_posts() ) {
			$loop->the_post();
			wc_get_template_part( 'content', 'product' );
			$dots++;
		}
		wp_reset_postdata();
		echo '</ul>';
		echo '<div class="dots-nav">';
		for ( $i = 0; $i < $dots; $i++ ) {
			echo '<a class="dot"></a>';
		}
		echo '</div>';
		echo '</section>';
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
