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
		add_action( 'neve_do_header', array( $this, 'render_navigation' ) );
		add_filter( 'wp_nav_menu_items', array( $this, 'add_last_menu_item' ), 10, 2 );
	}

	/**
	 * Render navigation
	 */
	public function render_navigation() {
		?>
		<nav class="nv-navbar">
			<div class="container">
				<div class="row">
					<div class="col-md-12 nv-nav-wrap <?php echo esc_attr( $this->get_navbar_class() ); ?>">
						<div class="nv-nav-header">
							<?php
							$this->render_navbar_header();
							$this->render_navbar_toggle();
							?>
						</div>
						<?php
						$this->render_primary_menu();
						?>
					</div>
				</div>
			</div>
		</nav>
		<?php
	}

	/**
	 * Add the last menu item.
	 *
	 * @param array  $items the nav items.
	 * @param object $args  menu properties.
	 *
	 * @return string
	 */
	public function add_last_menu_item( $items, $args ) {
		if ( $args->theme_location !== 'primary' ) {
			return $items;
		}

		$additional_item = get_theme_mod( 'neve_last_menu_item', 'none' );
		if ( $additional_item === 'none' ) {
			return $items;
		}

		if ( 'search' === $additional_item ) {
			$items .= '<li class="menu-item-nav-search"><a><span class="nv-icon nv-search"></span></a>';
			$items .= '<div class="nv-nav-search">';
			$items .= get_search_form( false );
			$items .= '</div>';
			$items .= '</li>';
		}

		if ( 'cart' === $additional_item ) {
			if ( ! class_exists( 'WooCommerce' ) ) {
				return $items;
			}
			$items .= '<li class="menu-item-nav-cart"><a href="' . esc_url( wc_get_cart_url() ) . '"><span class="nv-icon nv-cart"></span>';
			$items .= '<span class="cart-count">' . WC()->cart->get_cart_contents_count() . '</span>';
			$items .= '</a>';
			if ( ! is_cart() ) {
				ob_start();
				echo '<div class="nv-nav-cart">';
				the_widget( 'WC_Widget_Cart', 'title=' );
				echo '</div>';
				$cart = ob_get_contents();
				ob_end_clean();
				$items .= $cart;
			}
			$items .= '</li>';
		}

		return $items;
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
	private function render_primary_menu() {
		wp_nav_menu(
			array(
				'theme_location' => 'primary',
				'menu_id'        => 'nv-primary-navigation',
				'container'      => 'ul',
				'walker'         => new Nav_Walker(),
			)
		);
	}

	/**
	 * Render navbar toggle markup.
	 */
	private function render_navbar_toggle() {
		if ( ! has_nav_menu( 'primary' ) && current_user_can( 'edit_theme_options' ) ) {
			return;
		}

		?>
		<div class="navbar-toggle-wrapper">
			<?php
			neve_before_navbar_toggle_trigger();
			?>
			<div class="navbar-toggle">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="screen-reader-text"><?php esc_html_e( 'Toggle Navigation', 'neve' ); ?></span>
			</div>
			<?php
			neve_after_navbar_toggle_trigger();
			?>
		</div>
		<?php
	}

	/**
	 * Do the navbar header.
	 */
	private function render_navbar_header() {
		?>
		<div class="site-logo">
			<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"
					title="<?php bloginfo( 'name' ); ?>">
				<?php echo $this->get_logo(); ?></a>
		</div>
		<?php
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
		} else {
			$logo = '<p>' . get_bloginfo( 'name' ) . '</p>';
		}

		return $logo;
	}
}
