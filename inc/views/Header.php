<?php
/**
 * Header View Manager
 *
 * @package Neve
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
		add_filter( 'wp_nav_menu_args', array( $this, 'modify_primary_menu' ) );
	}

	/**
	 * Render navigation
	 */
	public function navigation() {
		$nav_classes = $this->header_classes(); ?>
		<nav class="navbar <?php echo esc_attr( $nav_classes ); ?>">
<!--			--><?php //hestia_before_header_content_trigger(); ?>
			<div class="container">
				<?php
				if ( ! $this->is_full_screen_menu() ) {
					$this->navbar_sidebar();
				}
				if ( apply_filters( 'hestia_header_show_primary_menu', true ) ) {
					$this->navbar_header();
					$this->render_primary_menu();
				}
				?>
			</div>
<!--			--><?php //hestia_after_header_content_trigger(); ?>
		</nav>
		<?php
	}

	/**
	 * Get the header class.
	 *
	 * @return string
	 */
	private function header_classes() {
		$class  = '';
		$class .= $this->get_nav_alignment_class();
		$class .= $this->get_full_screen_menu_class();
		$class .= $this->get_top_bar_enabled_class();
		if ( ! is_front_page() ) {
			$class .= ' navbar-not-transparent';
		}

		return $class;
	}

	/**
	 * Get the header alignment class.
	 *
	 * @return string
	 */
	private function get_nav_alignment_class() {
		$header_alignment = get_theme_mod( 'hestia_header_alignment', 'left' );
		if ( ! empty( $header_alignment ) ) {
			return ' hestia_' . $header_alignment;
		}

		return '';
	}

	/**
	 * Render primary menu markup.
	 */
	private function render_primary_menu() {
		wp_nav_menu(
			array(
				'theme_location' => 'primary',
				'menu_id'        => 'primary-menu',
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
			hestia_before_navbar_toggle_trigger();
			?>
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-navigation">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="sr-only"><?php esc_html_e( 'Toggle Navigation', 'hestia-pro' ); ?></span>
			</button>
			<?php
			hestia_after_navbar_toggle_trigger();
			?>
		</div>
		<?php
	}

	/**
	 * Render the navigation bar Sidebar.
	 */
	private function navbar_sidebar() {
		$header_alignment = get_theme_mod( 'hestia_header_alignment', 'left' );

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
			hestia_sidebar_placeholder( 'hestia-sidebar-header', 'header-sidebar', 'no-variable-width header-sidebar-wrapper' );
		}
	}

	/**
	 * Get class if navbar should be transparent.
	 *
	 * @return string
	 */
	private function get_transparent_nav_class() {
		$class = ' navbar-color-on-scroll navbar-transparent';

		if ( ! get_option( 'show_on_front' ) === 'page' ) {
			$class = '';
		}
		if ( ! is_front_page() ) {
			$class = '';
		}
		if ( is_front_page() && is_home() ) {
			return '';
		}
		if ( is_page_template() ) {
			$class = '';
		}

		$is_nav_transparent = get_theme_mod( 'hestia_navbar_transparent', true );
		if ( ! $is_nav_transparent ) {
			$class = '';
		}

		$hestia_navbar_transparent = get_theme_mod( 'hestia_big_title_hide', false );
		if ( $hestia_navbar_transparent ) {
			$class = ' no-slider';
		}

		return $class;
	}

	/**
	 * Get the full screen menu class.
	 *
	 * @return string
	 */
	private function get_full_screen_menu_class() {
		if ( $this->is_full_screen_menu() ) {
			return ' full-screen-menu';
		}

		return '';
	}

	/**
	 * Utility to check if is full screen menu.
	 *
	 * @return bool
	 */
	protected function is_full_screen_menu() {
		$has_full_screen_menu = get_theme_mod( 'hestia_full_screen_menu', false );
		if ( (bool) $has_full_screen_menu === true ) {
			return true;
		}

		return false;
	}

	/**
	 * Get the header class if top bar is enabled.
	 *
	 * @return string
	 */
	private function get_top_bar_enabled_class() {
		$is_top_bar_hidden = get_theme_mod( 'hestia_top_bar_hide', true );
		if ( (bool) $is_top_bar_hidden === false ) {
			return ' has-top-bar';
		}

		return '';
	}

	/**
	 * Do the navbar header.
	 */
	private function navbar_header() {
		?>
		<div class="nav-header">
				<a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"
						title="<?php bloginfo( 'name' ); ?>">
					<?php echo $this->logo(); ?></a>
			<?php $this->render_navbar_toggle(); ?>
		</div>
		<?php
	}

	/**
	 * Display your custom logo if present.
	 *
	 * @since Hestia 1.0
	 */
	private function logo() {
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
		$nav  = '<ul id="%1$s" class="%2$s">';
		$nav .= '%3$s';
		$nav .= apply_filters( 'hestia_after_primary_navigation_addons', $this->search_in_menu() );
		$nav .= '</ul>';

		return $nav;
	}

	/**
	 * Display search form in menu.
	 */
	private function search_in_menu() {
		$search_in_menu = get_theme_mod( 'hestia_search_in_menu', false );

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
		$output  = '';
		$output .= '<li class="hestia-search-in-menu">';
		$output .= '<div class="hestia-nav-search">';
		$output .= $form;
		$output .= '</div>';
		$output .= '<div class="hestia-toggle-search"><i class="fa fa-search"></i></div>';
		$output .= '</li>';

		return $output;
	}
}
