<?php
/**
 * Footer Main Manager
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Footer
 */
class Footer extends Base_View {

	/**
	 * Initialization of the feature.
	 */
	public function init() {
		// add_action( 'neve_do_footer', array( $this, 'render_footer' ) );
	}

	/**
	 * Render the footer.
	 */
	public function render_footer() {

		$args = array(
			'sidebar_class'      => $this->the_sidebar_class(),
			'sidebars'           => $this->get_footer_sidebars(),
			'footer_has_widgets' => $this->footer_has_widgets(),
			'content'            => $this->get_footer_content(),
		);

		$this->get_view( 'footer', $args );
	}

	/**
	 * Get the footer content
	 *
	 * @return string
	 */
	private function get_footer_content() {
		$content_type = get_theme_mod( 'neve_footer_content_type', 'text' );
		if ( $content_type === 'none' ) {
			return '';
		}
		switch ( $content_type ) {
			case 'text':
				return $this->get_footer_text();
				break;
			case 'footer_menu':
				return $this->get_footer_menu();
				break;
			default:
				break;
		}

		return '';
	}

	/**
	 * Render content for text.
	 */
	private function get_footer_text() {
		$content = get_theme_mod(
			'neve_footer_text',
			apply_filters(
				'ti_wl_copyright',
				sprintf(
					/* translators: %1$s is Theme Name ( Neve ), %2$s is WordPress */
					esc_html__( '%1$s | Powered by %2$s', 'neve' ),
					wp_kses_post( '<p><a href="https://themeisle.com/themes/neve/" rel="nofollow">Neve</a>' ),
					wp_kses_post( '<a href="http://wordpress.org" rel="nofollow">WordPress</a></p>' )
				)
			)
		);

		return wp_kses_post( $content );
	}

	/**
	 * Render content for menu.
	 */
	private function get_footer_menu() {
		$menu = wp_nav_menu(
			array(
				'theme_location' => 'footer',
				'depth'          => 1,
				'container'      => 'ul',
				'menu_class'     => 'footer-menu',
				'echo'           => false,
			)
		);

		return $menu;
	}

	/**
	 * Get an array of footer sidebars slugs.
	 *
	 * @return array
	 */
	private function get_footer_sidebars() {
		$sidebars           = array(
			'footer-one-widgets',
			'footer-two-widgets',
			'footer-three-widgets',
			'footer-four-widgets',
		);
		$number_of_sidebars = $this->footer_sidebars_number();
		$sidebars           = array_slice( $sidebars, 0, $number_of_sidebars );

		return $sidebars;
	}

	/**
	 * Get number of footer sidebars.
	 *
	 * @return string
	 */
	private function footer_sidebars_number() {
		return get_theme_mod( 'neve_footer_widget_columns', '3' );
	}

	/**
	 * Get the sidebars class.
	 *
	 * @return string the sidebar class
	 */
	private function the_sidebar_class() {
		$sidebars_count = $this->footer_sidebars_number();

		if ( empty( $sidebars_count ) ) {
			return 'col-md-4';
		}

		$suffix = abs( 12 / $sidebars_count );
		$class  = 'col-md-' . $suffix;

		return $class;
	}

	/**
	 * Utility to check if any of the footer sidebars have widgets.
	 *
	 * @return bool
	 */
	private function footer_has_widgets() {
		$sidebars = $this->get_footer_sidebars();
		if ( empty( $sidebars ) ) {
			return false;
		}

		foreach ( $sidebars as $footer_sidebar ) {
			$has_widgets = is_active_sidebar( $footer_sidebar );
			if ( $has_widgets ) {
				return true;
			}
		}

		return false;
	}

}
