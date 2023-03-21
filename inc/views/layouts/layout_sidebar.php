<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      27/08/2018
 *
 * @package Neve\Views\Layouts
 */

namespace Neve\Views\Layouts;

use Neve\Customizer\Defaults\Layout;
use Neve\Views\Base_View;

/**
 * Class Layout_Container
 *
 * @package Neve\Views\Layouts
 */
class Layout_Sidebar extends Base_View {
	use Layout;

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_do_sidebar', array( $this, 'sidebar' ), 10, 2 );
		add_filter( 'body_class', array( $this, 'add_body_class' ) );
	}

	/**
	 * Render the sidebar.
	 *
	 * @param string $context  context passed into do_action.
	 * @param string $position position passed into do_action.
	 */
	public function sidebar( $context, $position ) {
		$sidebar_setup = $this->get_sidebar_setup( $context );
		$theme_mod     = $sidebar_setup['theme_mod'];
		$theme_mod     = apply_filters( 'neve_sidebar_position', get_theme_mod( $theme_mod, $this->sidebar_layout_alignment_default( $theme_mod ) ) );

		$content_width = get_theme_mod( $sidebar_setup['content_width'], $this->sidebar_layout_width_default( $sidebar_setup['content_width'] ) );

		$meta_width = apply_filters( 'neve_meta_content_width', false );

		if ( $meta_width !== false && ! empty( $meta_width ) ) {
			$content_width = $meta_width;
		}

		$class_hide_sidebar_conditionally = '';

		if ( $content_width >= 95 && ! $this->shop_sidebar_is_off_canvas() ) {
			$class_hide_sidebar_conditionally = 'hide';
			if ( $context !== 'shop' && ! is_customize_preview() ) {
				// do not load sidebar as SSR
				return;
			}
		}

		if ( $theme_mod !== $position ) {
			return;
		}

		if ( ! is_active_sidebar( $sidebar_setup['sidebar_slug'] ) ) {
			return;
		}

		$args = array(
			'wrap_classes' => 'nv-' . $position . ' ' . $sidebar_setup['sidebar_slug'] . ' ' . $class_hide_sidebar_conditionally,
			'data_attrs'   => apply_filters( 'neve_sidebar_data_attrs', '', $sidebar_setup['sidebar_slug'] ),
			'close_button' => $this->get_sidebar_close( $sidebar_setup['sidebar_slug'] ),
			'slug'         => $sidebar_setup['sidebar_slug'],
			'context'      => $context,
			'position'     => $position,
		);

		$this->get_view( 'sidebar', $args );
	}

	/**
	 * Add classes to the main tag.
	 *
	 * @param array $classes the body classes.
	 *
	 * @return array
	 */
	public function add_body_class( $classes ) {
		$context = $this->get_context();

		$sidebar_setup = $this->get_sidebar_setup( $context );
		$theme_mod     = $sidebar_setup['theme_mod'];
		$theme_mod     = apply_filters( 'neve_sidebar_position', get_theme_mod( $theme_mod, $this->sidebar_layout_alignment_default( $theme_mod ) ) );

		$layout       = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		$posts_layout = ' nv-blog-' . $layout;

		$classes[] = $posts_layout;
		$classes[] = 'nv-sidebar-' . $theme_mod;

		return $classes;
	}

	/**
	 * Get the sidebar setup. Returns array (`theme_mod`, `sidebar_slug`) based on context.
	 *
	 * @param string $context the provided context.
	 *
	 * @return array
	 */
	public function get_sidebar_setup( $context ) {
		$advanced_options = get_theme_mod( 'neve_advanced_layout_options', true );
		$sidebar_setup    = [
			'theme_mod'     => '',
			'content_width' => '',
			'sidebar_slug'  => 'blog-sidebar',
		];

		if ( class_exists( 'WooCommerce', false ) && ( is_woocommerce() || is_product() || is_cart() || is_checkout() || is_account_page() ) ) {
			$sidebar_setup['sidebar_slug'] = 'shop-sidebar';
		}

		if ( $advanced_options === false ) {
			$sidebar_setup['theme_mod']     = 'neve_default_sidebar_layout';
			$sidebar_setup['content_width'] = 'neve_sitewide_content_width';
			$sidebar_setup['has_widgets']   = is_active_sidebar( $sidebar_setup['sidebar_slug'] );

			return apply_filters( 'neve_before_returning_sidebar_setup', $sidebar_setup );
		}

		switch ( $context ) {
			case 'blog-archive':
				$sidebar_setup['theme_mod']     = 'neve_blog_archive_sidebar_layout';
				$sidebar_setup['content_width'] = 'neve_blog_archive_content_width';
				break;
			case 'single-post':
				$sidebar_setup['theme_mod'] = 'neve_single_post_sidebar_layout';
				if ( class_exists( 'WooCommerce', false ) && is_product() ) {
					$sidebar_setup['theme_mod']     = 'neve_single_product_sidebar_layout';
					$sidebar_setup['content_width'] = 'neve_single_product_content_width';
				}
				break;
			case 'single-page':
				$sidebar_setup['theme_mod']     = 'neve_other_pages_sidebar_layout';
				$sidebar_setup['content_width'] = 'neve_other_pages_content_width';
				break;
			case 'shop':
				if ( class_exists( 'WooCommerce', false ) ) {
					$sidebar_setup['sidebar_slug'] = 'shop-sidebar';
					if ( is_woocommerce() ) {
						$sidebar_setup['theme_mod']     = 'neve_shop_archive_sidebar_layout';
						$sidebar_setup['content_width'] = 'neve_shop_archive_content_width';
					}
					if ( is_product() ) {
						$sidebar_setup['theme_mod']     = 'neve_single_product_sidebar_layout';
						$sidebar_setup['content_width'] = 'neve_single_product_content_width';
					}
				}
				break;
			default:
				$sidebar_setup['theme_mod']     = 'neve_other_pages_sidebar_layout';
				$sidebar_setup['content_width'] = 'neve_other_pages_content_width';
		}

		$sidebar_setup['has_widgets'] = is_active_sidebar( $sidebar_setup['sidebar_slug'] );

		$sidebar_setup = apply_filters( 'neve_before_returning_sidebar_setup', apply_filters( 'neve_sidebar_setup_filter', $sidebar_setup ) );

		add_filter(
			'neve_' . $context . '_sidebar_setup',
			function () use ( $sidebar_setup ) {
				return $sidebar_setup;
			}
		);
		return $sidebar_setup;
	}

	/**
	 * Render sidebar toggle.
	 *
	 * @param string $slug sidebar slug.
	 *
	 * @return string
	 */
	private function get_sidebar_close( $slug ) {
		if ( $slug !== 'shop-sidebar' ) {
			return '';
		}
		$label        = apply_filters( 'neve_filter_sidebar_close_button_text', __( 'Close', 'neve' ), $slug );
		$button_attrs = apply_filters( 'neve_filter_sidebar_close_button_data_attrs', '', $slug );

		return '<div class="sidebar-header"><a href="#" class="nv-sidebar-toggle in-sidebar button-secondary secondary-default" ' . $button_attrs . '>' . esc_html( $label ) . '</a></div>';
	}

	/**
	 * Get current context.
	 *
	 * @return string|false
	 */
	private function get_context() {
		if ( class_exists( 'WooCommerce', false ) && ( is_woocommerce() || is_product() || is_cart() || is_checkout() || is_account_page() ) ) {
			return 'shop';
		}

		if ( is_page() ) {
			return 'single-page';
		}

		if ( is_single() ) {
			return 'single-post';
		}

		if ( is_archive() || is_home() ) {
			return 'blog-archive';
		}

		return false;
	}
}
