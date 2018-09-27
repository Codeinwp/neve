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


		//Handle shop sidebar.
		remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );
		add_action( 'woocommerce_before_main_content', array( $this, 'shop_sidebar_left' ) );
		add_action( 'woocommerce_sidebar', array( $this, 'shop_sidebar_right' ) );

		// Remove WooCommerce wrap.
		remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );
		remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );


		add_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );

		$this->edit_woocommerce_header();

	}

	private function edit_woocommerce_header() {
		remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10 );
		remove_action( 'woocommerce_archive_description', 'woocommerce_product_archive_description', 10 );
		remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
		add_filter( 'woocommerce_show_page_title', '__return_false' );
		add_action( 'woocommerce_before_main_content', array( $this, 'add_header_bits' ), 20 );
	}

	public function add_header_bits() {
		echo '<div class="nv-bc-count-wrap">';
		woocommerce_breadcrumb();
		woocommerce_result_count();
		echo '</div>';
		echo '<div class="nv-woo-filters">';
		$this->sidebar_toggle();
		woocommerce_catalog_ordering();
		echo '</div>';
	}

	public function shop_sidebar_left() {
		$this->sidebar_manager->sidebar( 'shop', 'left' );
	}

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
		echo '<div class="container shop-container">';
		echo '<div class="row">';
	}

	public function wrap_pages_end() {
		if ( ! is_woocommerce() ) {
			return;
		}
		$this->close_div();
		$this->close_div();
	}

	public function sidebar_toggle() {
		if( is_single() ) {
			return;
		}
		echo '<span class="nv-sidebar-toggle button button-secondary">' . apply_filters( 'neve_filter_woo_sidebar_open_button_text', __( 'Filter', 'neve' ) ) . '</span>';
	}

}
