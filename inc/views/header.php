<?php
/**
 * Header View Manager
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use HFG\Core\Components\Nav;

/**
 * Class Header
 *
 * @package Neve\Views
 */
class Header extends Base_View {
	/**
	 * Nav instance number
	 *
	 * @var int
	 */
	static $primary_nav_instance_no = 1;
	/**
	 * Add hooks for the front end.
	 */
	public function init() {
		add_filter( 'wp_nav_menu_items', array( $this, 'add_last_menu_item' ), 10, 2 );
		add_filter( 'wp_page_menu', array( $this, 'add_fallback_last_menu_items' ), 10, 2 );
		add_action( 'wp_enqueue_scripts', array( $this, 'hide_last_menu_item_search_in_sidebar' ) );
	}

	/**
	 * Hide last menu item search in mobile sidebar.
	 */
	public function hide_last_menu_item_search_in_sidebar() {
		wp_add_inline_style( 'neve-style', '.header-menu-sidebar-inner li.menu-item-nav-search { display: none; }' );
	}

	/**
	 * Add the last menu item.
	 *
	 * @param string $items the nav menu markup.
	 * @param object $args  menu properties.
	 *
	 * @return string
	 */
	public function add_last_menu_item( $items, $args ) {
		if ( $args->theme_location !== 'primary' ) {
			return $items;
		}

		if ( strpos( $args->menu_class, 'max-mega-menu' ) ) {
			return $items;
		}

		$items = $this->get_last_menu_items_markup( $items );

		return $items;
	}

	/**
	 * Get the last menu items.
	 *
	 * @param string $items the menu markup.
	 *
	 * @return string
	 */
	private function get_last_menu_items_markup( $items = '' ) {
		$additional_items = $this->get_last_menu_item_setting();
		$additional_items = json_decode( $additional_items, true );
		if ( empty( $additional_items ) ) {
			return $items;
		}
		foreach ( $additional_items as $item ) {
			if ( $item === 'search' ) {
				$items .= $this->get_nav_menu_search();
			} elseif ( $item === 'cart' ) {
				$items .= $this->get_nav_menu_cart();
			} else {
				$items .= apply_filters( 'neve_last_menu_item_' . $item, '' );
			}
		}

		return apply_filters( 'neve_last_menu_item', $items );
	}

	/**
	 * Get the last menu item theme mod value.
	 *
	 * @return string
	 */
	private function get_last_menu_item_setting() {
		$default           = array();
		$current_component = 'default';
		if ( isset( Nav::$current_component ) ) {
			$current_component = Nav::$current_component;
		}
		$last_menu_setting_slug = apply_filters( 'neve_last_menu_setting_slug_' . $current_component, 'neve_last_menu_item' );

		return get_theme_mod( $last_menu_setting_slug, wp_json_encode( $default ) );
	}

	/**
	 * Get the markup for the nav menu search.
	 *
	 * @param bool $responsive should get the responsive version.
	 *
	 * @return string
	 */
	private function get_nav_menu_search( $responsive = false ) {
		// TODO when HFG is live we should drop this at all as we have a section for icon, or offer a way of disabling it.
		$tag   = 'li';
		$class = 'menu-item-nav-search minimal';
		if ( $responsive === true ) {
			$tag = 'span';

			$class .= ' responsive-nav-search ';
		}
		$search = '';

		$id = 'nv-menu-item-search-' . self::$primary_nav_instance_no;

		$search     .= '<' . esc_attr( $tag ) . ' class="' . esc_attr( $class ) . '" id="' . esc_attr( $id ) . '" tabindex="0" aria-label="search">';
		$extra_attrs = apply_filters( 'neve_search_menu_item_filter', '', self::$primary_nav_instance_no );
		$search     .= '<a href="#" class="nv-nav-search-icon" ' . $extra_attrs . '>' . neve_search_icon() . '</a>';
		$search     .= '<div class="nv-nav-search">';
		if ( $responsive === true ) {
			$search .= '<div class="container close-container">';
			$search .= '<a class="button button-secondary close-responsive-search">' . __( 'Close', 'neve' ) . '</a>';
			$search .= '</div>';
		}
		$search .= get_search_form( false );
		$search .= '</div>';
		$search .= '</' . esc_attr( $tag ) . '>';

		self::$primary_nav_instance_no += 1;

		return $search;
	}

	/**
	 * Get the markup for the nav menu cart.
	 *
	 * @param bool $responsive should get the responsive version.
	 *
	 * @return string
	 */
	private function get_nav_menu_cart( $responsive = false ) {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return '';
		}

		$tag   = 'li';
		$class = 'menu-item-nav-cart';
		if ( $responsive === true ) {
			$tag = 'span';

			$class .= ' responsive-nav-cart ';
		}
		$cart = '';

		$cart .= '<' . esc_attr( $tag ) . ' class="' . esc_attr( $class ) . '"><a href="' . esc_url( wc_get_cart_url() ) . '" class="cart-icon-wrapper">';
		$cart .= neve_cart_icon();
		$cart .= '<span class="screen-reader-text">' . __( 'Cart', 'neve' ) . '</span>';
		$cart .= '<span class="cart-count">' . WC()->cart->get_cart_contents_count() . '</span>';
		$cart .= '</a>';

		if ( is_cart() || is_checkout() ) {
			$cart .= '</' . esc_attr( $tag ) . '>';

			return $cart;
		}

		if ( $responsive === false ) {
			ob_start();
			the_widget(
				'WC_Widget_Cart',
				array(
					'title'         => ' ',
					'hide_if_empty' => true,
				),
				array(
					'before_widget' => $this->before_cart_popup(),
					'after_widget'  => $this->after_cart_popup(),
					'before_title'  => '',
					'after_title'   => '',
				)
			);
			$cart_widget = ob_get_contents();
			ob_end_clean();
			$cart .= $cart_widget;
		}

		$cart .= '</' . esc_attr( $tag ) . '>';

		return $cart;
	}

	/**
	 * Markup before cart popup widget in header.
	 *
	 * @return string
	 */
	private function before_cart_popup() {
		ob_start();
		echo '<div class="nv-nav-cart widget">';
		echo '<div class="widget woocommerce widget_shopping_cart">';
		do_action( 'neve_before_cart_popup' );
		$markup = ob_get_contents();
		ob_end_clean();
		return $markup;
	}

	/**
	 * Markup after cart popup widget in header.
	 *
	 * @return string
	 */
	private function after_cart_popup() {
		ob_start();
		do_action( 'neve_after_cart_popup' );
		echo '</div>';
		echo '</div>';
		$markup = ob_get_contents();
		ob_end_clean();
		return $markup;
	}


	/**
	 * Add last menu items to fallback menu.
	 *
	 * @param string $menu the menu markup.
	 * @param array  $args the menu args.
	 *
	 * @return string;
	 */
	public function add_fallback_last_menu_items( $menu, $args ) {
		if ( strpos( $args['menu_id'], 'nv-primary-navigation' ) === false ) {
			return $menu;
		}

		$items = $this->get_last_menu_items_markup( '' );

		$menu = str_replace( '</ul>', $items . '</ul>', $menu );

		return $menu;
	}
}
