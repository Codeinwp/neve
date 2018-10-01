<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      27/08/2018
 *
 * @package Neve\Views\Layouts
 */

namespace Neve\Views\Layouts;

use Neve\Views\Base_View;

/**
 * Class Layout_Container
 *
 * @package Neve\Views\Layouts
 */
class Layout_Container extends Base_View {

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_filter( 'neve_container_class_filter', array( $this, 'container_layout' ), 10, 2 );
	}

	/**
	 * Get the container style.
	 *
	 * @param string $value   the value passed in the filter.
	 * @param string $context the context passed in the filter.
	 *
	 * @return string
	 */
	public function container_layout( $value, $context = 'single-page' ) {
		if ( $context === 'blog-archive' ) {
			return ( $this->get_container_class( 'neve_blog_archive_container_style' ) );
		}

		if ( $context === 'single-post' ) {
			return ( $this->get_container_class( 'neve_single_post_container_style' ) );
		}

		if ( $context === 'single-page' ) {
			if ( class_exists( 'WooCommerce' ) ) {
				if ( is_product() ) {
					return ( $this->get_container_class( 'neve_single_product_container_style' ) );
				}

				if ( is_shop() ) {
					return ( $this->get_container_class( 'neve_shop_archive_container_style' ) );
				}
			}
		}

		return $this->get_container_class( 'neve_default_container_style' );
	}

	/**
	 * Returns container class based on the theme mod.
	 *
	 * @param string $theme_mod the theme mod from which to get the container class.
	 *
	 * @return string
	 */
	private function get_container_class( $theme_mod ) {
		$container_type = get_theme_mod( $theme_mod, 'contained' );
		if ( $container_type === 'contained' ) {
			return 'container';
		}

		return 'container-fluid';
	}
}
