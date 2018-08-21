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

	public function render_footer() { ?>
		<footer>
			<div class="container">
				<?php echo $this->render_footer_sidebars(); ?>
			</div>
		</footer>
	<?php }

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

	private function footer_sidebars_number() {
		return get_theme_mod( 'neve_footer_widget_columns', '3' );
	}

	/**
	 * Render the footer sidebars.
	 */
	private function render_footer_sidebars() {
		$sidebars = $this->get_footer_sidebars();
		if ( empty( $sidebars ) ) {
			return '';
		}

		echo '<div class="row nv-footer-widgets">';
		foreach ( $sidebars as $sidebar ) {
			echo '<div class="' . esc_attr( $this->the_sidebar_class() ) . '">';
			dynamic_sidebar( $sidebar );
			echo '</div>';
		}
		echo '</div>';
	}

	/**
	 * Function to display footer content.
	 *
	 * @since  1.1.24
	 * @access public
	 */
	public function the_footer_content() {
		hestia_before_footer_trigger();

		?>
		<footer class="footer <?php echo esc_attr( $this->the_footer_class() ); ?> footer-big">
			<?php hestia_before_footer_content_trigger(); ?>
			<div class="container">
				<?php hestia_before_footer_widgets_trigger(); ?>
				<?php $this->render_footer_sidebars(); ?>
				<?php hestia_after_footer_widgets_trigger(); ?>
				<?php $this->wrapped_bottom_footer_content(); ?>
			</div>
			<?php hestia_after_footer_content_trigger(); ?>
		</footer>
		<?php
		hestia_after_footer_trigger();
	}

	/**
	 * Filter footer menu classes to account for alignment.
	 *
	 * @param string $classes the footer classes.
	 *
	 * @return mixed
	 */
	public function modify_footer_menu_classes( $classes ) {
		if ( 'footer' !== $classes['theme_location'] ) {
			return $classes;
		}
		$classes['menu_class'] .= ' ' . $this->add_footer_menu_alignment_class();

		return $classes;
	}

	/**
	 * Function to display footer copyright and footer menu.
	 */
	private function wrapped_bottom_footer_content() {
		echo '<div class="hestia-bottom-footer-content">';
		do_action( 'hestia_do_bottom_footer_content' );
		echo '</div>';
	}

	/**
	 * Function to display footer copyright and footer menu.
	 * Also used as callback for selective refresh.
	 */
	public function bottom_footer_content() {
		$hestia_general_credits = get_theme_mod(
			'hestia_general_credits',
			sprintf(
			/* translators: %1$s is Theme Name, %2$s is WordPress */
				esc_html__( '%1$s | Powered by %2$s', 'hestia-pro' ),
				sprintf(
				/* translators: %s is Theme name */
					'<a href="https://themeisle.com/themes/hestia/" target="_blank" rel="nofollow">%s</a>',
					esc_html__( 'Hestia', 'hestia-pro' )
				),
				/* translators: %1$s is URL, %2$s is WordPress */
				sprintf(
					'<a href="%1$s" rel="nofollow">%2$s</a>',
					esc_url( __( 'http://wordpress.org', 'hestia-pro' ) ),
					esc_html__( 'WordPress', 'hestia-pro' )
				)
			)
		);

		wp_nav_menu(
			array(
				'theme_location' => 'footer',
				'depth'          => 1,
				'container'      => 'ul',
				'menu_class'     => 'footer-menu',
			)
		);
		?>
		<?php if ( ! empty( $hestia_general_credits ) || is_customize_preview() ) : ?>
			<div class="copyright <?php echo esc_attr( $this->add_footer_copyright_alignment_class() ); ?>">
				<?php echo wp_kses_post( $hestia_general_credits ); ?>
			</div>
		<?php
		endif;
	}

	/**
	 * Add the footer copyright alignment class.
	 *
	 * @return string
	 */
	private function add_footer_copyright_alignment_class() {
		$hestia_copyright_alignment = get_theme_mod( 'hestia_copyright_alignment', 'right' );
		if ( $hestia_copyright_alignment === 'left' ) {
			return 'pull-left';
		}
		if ( $hestia_copyright_alignment === 'center' ) {
			return 'hestia-center';
		}

		return 'pull-right';
	}

	/**
	 * Add the footer menu alignment class.
	 *
	 * @return string
	 */
	private function add_footer_menu_alignment_class() {
		$hestia_copyright_alignment = get_theme_mod( 'hestia_copyright_alignment', 'right' );
		if ( $hestia_copyright_alignment === 'left' ) {
			return 'pull-right';
		}
		if ( $hestia_copyright_alignment === 'center' ) {
			return 'hestia-center';
		}

		return 'pull-left';
	}

	/**
	 * Utility to get the footer class for color changes.
	 */
	private function the_footer_class() {
		$footer_style = get_theme_mod( 'hestia_alternative_footer_style', 'black_footer' );
		$class        = 'footer-black';

		if ( $footer_style === 'white_footer' ) {
			$class = '';
		}

		return $class;
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
