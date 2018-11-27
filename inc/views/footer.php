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
		add_action( 'neve_do_footer', array( $this, 'render_footer' ) );
	}

	/**
	 * Render the footer.
	 */
	public function render_footer() {
		neve_before_footer_trigger();
		?>
		<footer role="contentinfo">
			<?php $this->render_footer_sidebars(); ?>
			<?php $this->render_footer_content(); ?>
		</footer>
		<?php
		neve_after_footer_trigger();
	}

	/**
	 * Render the footer sidebars.
	 */
	private function render_footer_sidebars() {
		if ( ! $this->footer_has_widgets() ) {
			return;
		}

		$sidebars = $this->get_footer_sidebars();
		echo '<div class="footer-content-wrap">';
		echo '<div class="container">';
		echo '<div class="row nv-footer-widgets">';
		foreach ( $sidebars as $sidebar ) {
			echo '<div class="' . esc_attr( $this->the_sidebar_class() ) . '">';
			dynamic_sidebar( $sidebar );
			echo '</div>';
		}
		echo '</div>'; // .row
		echo '</div>'; // .container
		echo '</div>'; // .footer-content-wrap
	}

	/**
	 * Render the footer content.
	 */
	public function render_footer_content() {
		$content_type = get_theme_mod( 'neve_footer_content_type', 'text' );
		if ( $content_type === 'none' ) {
			return;
		}
		echo '<div class="footer-content-wrap footer-second-section">';
		echo '<div class="container">';
		echo '<div class="row nv-footer-content">';
		echo '<div class="col-12">';

		switch ( $content_type ) {
			case 'text':
				$this->render_content_text();
				break;
			case 'footer_menu':
				$this->render_content_menu();
				break;
			default:
		}

		echo '</div>'; // .col-12
		echo '</div>'; // .row
		echo '</div>'; // .container
		echo '</div>'; // .footer-content-wrap
	}

	/**
	 * Render content for text.
	 */
	private function render_content_text() {
		$content = get_theme_mod(
			'neve_footer_text',
			sprintf(
				/* translators: %1$s is Theme Name (Neve), %2$s is WordPress */
				esc_html__( '%1$s | Powered by %2$s', 'neve' ),
				wp_kses_post( '<a href="https://themeisle.com/themes/neve/" target="_blank" rel="nofollow">Neve</a>' ),
				wp_kses_post( '<a href="http://wordpress.org" rel="nofollow">WordPress</a>' )
			)
		);

		echo wp_kses_post( $content );
	}

	/**
	 * Render content for menu.
	 */
	private function render_content_menu() {
		wp_nav_menu(
			array(
				'theme_location' => 'footer',
				'depth'          => 1,
				'container'      => 'ul',
				'menu_class'     => 'footer-menu',
			)
		);
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
