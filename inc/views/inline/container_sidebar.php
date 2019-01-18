<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Typography.php
 */

namespace Neve\Views\Inline;

/**
 * Class Container_Sidebar
 *
 * @package Neve\Views\Inline
 */
class Container_Sidebar extends Base_Inline {
	/**
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		$this->container_style();
		$this->content_style();
	}

	/**
	 * Container styles.
	 */
	private function container_style() {
		$container_width = get_theme_mod( 'neve_container_width' );
		$container_width = json_decode( $container_width, true );
		$settings        = array(
			array(
				'css_prop' => 'max-width',
				'value'    => $container_width,
				'suffix'   => 'px',
			),
		);
		$this->add_responsive_style( $settings, '.container' );
	}

	/**
	 * Content style.
	 */
	private function content_style() {
		$advanced_options = get_theme_mod( 'neve_advanced_layout_options', false );
		if ( $advanced_options === false ) {
			$selectors = array(
				'content' => '#content .container .col',
				'sidebar' => '.nv-sidebar-wrap, .nv-sidebar-wrap.shop-sidebar',
			);
			$this->add_one_content_width( $selectors, 'neve_sitewide_content_width' );

			return false;
		}
		$this->handle_individual_content_width();
	}

	/**
	 * Handle individual content width.
	 */
	private function handle_individual_content_width() {
		$content_widths = array(
			'neve_other_pages_content_width'  => array(
				'content' => 'body:not(.single):not(.archive):not(.blog) .neve-main > .container .col',
				'sidebar' => 'body:not(.single):not(.archive):not(.blog) .nv-sidebar-wrap',
			),
			'neve_blog_archive_content_width' => array(
				'content' => '.neve-main > .archive-container .nv-index-posts.col',
				'sidebar' => '.neve-main > .archive-container .nv-sidebar-wrap',
			),
			'neve_single_post_content_width'  => array(
				'content' => '.neve-main > .single-post-container .nv-single-post-wrap.col',
				'sidebar' => '.neve-main > .single-post-container .nv-sidebar-wrap',
			),
		);

		if ( class_exists( 'WooCommerce' ) ) {
			$content_widths = array_merge(
				$content_widths,
				array(
					'neve_shop_archive_content_width'   => array(
						'content' => '.archive.woocommerce .neve-main > .shop-container .nv-shop.col',
						'sidebar' => '.archive.woocommerce .neve-main > .shop-container .nv-sidebar-wrap',
					),
					'neve_single_product_content_width' => array(
						'content' => '.single-product .neve-main > .shop-container .nv-shop.col',
						'sidebar' => '.single-product .neve-main > .shop-container .nv-sidebar-wrap',
					),
				)
			);
		}

		array_walk( $content_widths, array( $this, 'add_one_content_width' ) );
	}

	/**
	 * Add style for the individual content width.
	 *
	 * @param array  $selectors css selectors.
	 * @param string $theme_mod theme mod key.
	 */
	private function add_one_content_width( $selectors, $theme_mod ) {
		if ( empty( $theme_mod ) ) {
			return;
		}
		if ( ! is_array( $selectors ) ) {
			return;
		}
		if ( ! array_key_exists( 'sidebar', $selectors ) || ! array_key_exists( 'content', $selectors ) ) {
			return;
		}

		$content_width = get_theme_mod( $theme_mod, false );

		if ( $content_width === false ) {
			return;
		}

		$sidebar_width = 100 - $content_width;

		$content_setup = array(
			array(
				'css_prop' => 'max-width',
				'value'    => absint( $content_width ),
				'suffix'   => '%',
			),
		);
		$sidebar_setup = array(
			array(
				'css_prop' => 'max-width',
				'value'    => absint( $sidebar_width ),
				'suffix'   => '%',
			),
		);

		$this->add_style( $content_setup, $selectors['content'], 'desktop' );
		$this->add_style( $sidebar_setup, $selectors['sidebar'], 'desktop' );
	}
}
