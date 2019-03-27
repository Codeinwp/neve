<?php
/**
 * Header View Manager
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Header
 *
 * @package Neve\Views
 */
class Header extends Base_View {
	/**
	 * Add hooks for the front end.
	 */
	public function init() {
		// add_action( 'neve_do_header', array( $this, 'render_navigation' ) );
		add_filter( 'wp_nav_menu_items', array( $this, 'add_last_menu_item' ), 10, 2 );
		add_filter( 'wp_page_menu', array( $this, 'add_fallback_last_menu_items' ), 10, 2 );
	}

	/**
	 * Render navigation
	 */
	public function render_navigation() {

		$args = array(
			'home_url'                  => home_url( '/' ),
			'logo'                      => $this->get_logo(),
			'navbar_class'              => $this->get_navbar_class(),
			'primary_menu'              => $this->get_primary_menu(),
			'responsive_last_menu_item' => $this->get_responsive_last_menu_item(),
		);
		$this->get_view( 'navbar', $args );
	}

	/**
	 * Get the markup for last menu item on mobile.
	 *
	 * @return string
	 */
	private function get_responsive_last_menu_item() {

		$additional_item = $this->get_last_menu_item_setting();

		if ( $additional_item === 'none' ) {
			return '';
		}
		if ( 'search' === $additional_item ) {
			return $this->get_nav_menu_search( true );
		}
		if ( 'cart' === $additional_item ) {
			return $this->get_nav_menu_cart( true );
		}
		if ( 'search-cart' === $additional_item ) {
			return $this->get_nav_menu_search( true ) . $this->get_nav_menu_cart( true );
		}
		if ( 'cart-search' === $additional_item ) {
			return $this->get_nav_menu_cart( true ) . $this->get_nav_menu_search( true );
		}
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
		$class = 'menu-item-nav-search';
		if ( $responsive === true ) {
			$tag = 'span';

			$class .= ' responsive-nav-search ';
		}
		$search = '';

		$search .= '<' . esc_attr( $tag ) . ' class="' . esc_attr( $class ) . '" tabindex="0" aria-label="search">';
		$search .= '<a><span class="nv-icon nv-search"></span></a>';
		$search .= '<div class="nv-nav-search">';
		if ( $responsive === true ) {
			$search .= '<div class="container close-container">';
			$search .= '<a class="button button-secondary close-responsive-search">' . __( 'Close', 'neve' ) . '</a>';
			$search .= '</div>';
		}
		$search .= get_search_form( false );
		$search .= '</div>';
		$search .= '</' . esc_attr( $tag ) . '>';

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
		if ( ! class_exists( 'WooCommerce' ) ) {
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
		$cart .= '<span class="nv-icon nv-cart"></span>';
		$cart .= '<span class="screen-reader-text">' . __( 'Cart', 'neve' ) . '</span>';
		$cart .= '<span class="cart-count">' . WC()->cart->get_cart_contents_count() . '</span>';
		$cart .= '</a>';

		if ( is_cart() || is_checkout() ) {
			$cart .= '</' . esc_attr( $tag ) . '>';

			return $cart;
		}

		if ( $responsive === false ) {
			ob_start();
			echo '<div class="nv-nav-cart">';
			the_widget( 'WC_Widget_Cart', 'title=' );
			echo '</div>';
			$cart_widget = ob_get_contents();
			ob_end_clean();
			$cart .= $cart_widget;
		}
		$cart .= '</' . esc_attr( $tag ) . '>';

		return $cart;
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

		$items = $this->get_last_menu_items_markup( $items );

		return $items;
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
		if ( $args['menu_id'] !== 'nv-primary-navigation' ) {
			return $menu;
		}

		$items = $this->get_last_menu_items_markup( '' );

		$menu = str_replace( '</ul>', $items . '</ul>', $menu );

		return $menu;
	}

	/**
	 * Get the navbar class.
	 *
	 * @return string
	 */
	private function get_navbar_class() {
		return 'nav-' . $this->get_navbar_layout();
	}

	/**
	 * Get the navbar layout.
	 *
	 * @return string
	 */
	private function get_navbar_layout() {
		return get_theme_mod( 'neve_navigation_layout', 'left' );
	}

	/**
	 * Render primary menu markup.
	 */
	private function get_primary_menu() {
		$menu = '<div role="navigation" aria-label="' . esc_html( __( 'Primary Menu', 'neve' ) ) . '">';

		$menu .= wp_nav_menu(
			array(
				'theme_location' => 'primary',
				'menu_id'        => 'nv-primary-navigation',
				'container'      => 'ul',
				'walker'         => new Nav_Walker(),
				'fallback_cb'    => '\Neve\Views\Nav_Walker::fallback',
				'echo'           => false,
			)
		);

		$menu .= '</div>';

		return $menu;
	}

	/**
	 * Display your custom logo if present.
	 */
	public function get_logo() {
		if ( get_theme_mod( 'custom_logo' ) ) {
			$logo          = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' );
			$alt_attribute = get_post_meta( get_theme_mod( 'custom_logo' ), '_wp_attachment_image_alt', true );
			if ( empty( $alt_attribute ) ) {
				$alt_attribute = get_bloginfo( 'name' );
			}
			$logo = '<img src="' . esc_url( $logo[0] ) . '" alt="' . esc_attr( $alt_attribute ) . '">';

			return $logo;
		}
		$tag = 'p';
		if ( get_option( 'show_on_front' ) === 'posts' && is_home() ) {
			$tag = 'h1';
		}

		$logo  = '<' . $tag . '>' . esc_html( get_bloginfo( 'name' ) ) . '</' . $tag . '>';
		$logo .= '<small>' . esc_html( get_bloginfo( 'description' ) ) . '</small>';

		return $logo;
	}

	/**
	 * Get the last menu item theme mod value.
	 *
	 * @return string
	 */
	private function get_last_menu_item_setting() {
		$default = 'search';
		if ( class_exists( 'WooCommerce' ) ) {
			$default = 'search-cart';
		}

		return get_theme_mod( 'neve_last_menu_item', $default );
	}

	/**
	 * Get the last menu items.
	 *
	 * @param string $items the menu markup.
	 *
	 * @return string
	 */
	private function get_last_menu_items_markup( $items = '' ) {
		$additional_item = $this->get_last_menu_item_setting();

		if ( $additional_item === 'none' ) {
			return $items;
		}

		if ( 'search' === $additional_item || 'search-cart' === $additional_item ) {
			$items .= $this->get_nav_menu_search();
		}

		if ( 'cart' === $additional_item || 'search-cart' === $additional_item || 'cart-search' === $additional_item ) {
			$items .= $this->get_nav_menu_cart();
		}

		return apply_filters( 'neve_last_menu_item', $items );
	}
}
