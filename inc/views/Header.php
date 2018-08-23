<?php
/**
 * Header View Manager
 *
 * @package Neve\Views
 */

namespace Neve\Views;
/**
 * Class Hestia_Header_Manager
 */
class Header {
	/**
	 * Add hooks for the front end.
	 */
	public function init() {
		add_action( 'neve_do_header', array( $this, 'navigation' ) );
//		add_filter( 'wp_nav_menu_args', array( $this, 'modify_primary_menu' ) );
	}

	public function xxx($nm) {
		var_dump( $nm );
	}
	/**
	 * Render navigation
	 */
	public function navigation() { ?>
		<nav class="nv-navbar">
			<div class="container">
				<div class="row">
					<div class="col-md-12 nv-nav-wrap">
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
	 * Render primary menu markup.
	 */
	private function render_primary_menu() {
		wp_nav_menu(
			array(
				'theme_location' => 'primary',
				'menu_id'        => 'nv-primary-navigation',
				'container'      => 'ul',
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
			<button type="button" class="navbar-toggle">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="screen-reader-text"><?php esc_html_e( 'Toggle Navigation', 'hestia-pro' ); ?></span>
			</button>
			<?php
			neve_after_navbar_toggle_trigger();
			?>
		</div>
		<?php
	}

	/**
	 * Render the navigation bar Sidebar.
	 */
	private function navbar_sidebar() {
		$header_alignment = get_theme_mod( 'neve_header_alignment', 'left' );

		if ( $header_alignment !== 'right' ) {
			return;
		}

		if ( is_active_sidebar( 'header-sidebar' ) ) {
			?>
			<div class="header-sidebar-wrapper">
				<div class="header-widgets-wrapper">
					<?php
					dynamic_sidebar( 'header-sidebar' );
					?>
				</div>
			</div>
			<?php
		}
		if ( ! is_active_sidebar( 'header-sidebar' ) && is_customize_preview() ) {
			neve_sidebar_placeholder( 'neve-sidebar-header', 'header-sidebar', 'no-variable-width header-sidebar-wrapper' );
		}
	}

	/**
	 * Utility to check if is full screen menu.
	 *
	 * @return bool
	 */
	protected function is_full_screen_menu() {
		$has_full_screen_menu = get_theme_mod( 'neve_full_screen_menu', false );
		if ( (bool) $has_full_screen_menu === true ) {
			return true;
		}

		return false;
	}

	/**
	 * Do the navbar header.
	 */
	private function render_navbar_header() {
		?>
		<div class="site-logo" itemtype="http://schema.org/Brand">
			<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"
					title="<?php bloginfo( 'name' ); ?>">
				<?php echo $this->get_logo(); ?></a>
		</div>
		<?php
	}

	/**
	 * Display your custom logo if present.
	 *
	 * @since Hestia 1.0
	 */
	private function get_logo() {
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

	/**
	 * Filter Primary Navigation to add navigation cart and search.
	 *
	 * @param string $markup the markup for the navigation addons.
	 *
	 * @access public
	 * @return mixed
	 */
	public function modify_primary_menu( $markup ) {
		if ( 'primary' !== $markup['theme_location'] ) {
			return $markup;
		}
		$markup['items_wrap'] = $this->display_filtered_navigation();

		return $markup;
	}

	/**
	 * Display navigation.
	 *
	 * @return string
	 */
	private function display_filtered_navigation() {
		$nav = '<ul id="%1$s" class="%2$s">';
		$nav .= '%3$s';
		$nav .= apply_filters( 'neve_after_primary_navigation_addons', $this->search_in_menu() );
		$nav .= '</ul>';

		return $nav;
	}

	/**
	 * Display search form in menu.
	 */
	private function search_in_menu() {
		$search_in_menu = get_theme_mod( 'neve_search_in_menu', false );

		if ( (bool) $search_in_menu === false ) {
			return '';
		}
		add_filter( 'get_search_form', array( $this, 'filter_search_form' ) );
		$form = get_search_form( false );
		remove_filter( 'get_search_form', array( $this, 'filter_search_form' ) );

		return $form;
	}

	/**
	 * Filter the search form to adapt to our needs.
	 *
	 * @param string $form search form markup.
	 *
	 * @return string
	 */
	public function filter_search_form( $form ) {
		$output = '';
		$output .= '<li class="neve-search-in-menu">';
		$output .= '<div class="neve-nav-search">';
		$output .= $form;
		$output .= '</div>';
		$output .= '<div class="neve-toggle-search"><i class="fa fa-search"></i></div>';
		$output .= '</li>';

		return $output;
	}
}
