<?php
/**
 * Top Bar
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Top_Bar
 */
class Top_Bar extends Base_View {

	/**
	 * Add hooks for the front end.
	 */
	public function init() {
		add_action( 'neve_do_top_bar', array( $this, 'render_top_bar' ) );
		$this->filter_content();
	}

	/**
	 * Apply filters on the top bar content.
	 */
	private function filter_content() {
		add_filter( 'neve_top_bar_content', 'wptexturize' );
		add_filter( 'neve_top_bar_content', 'convert_smilies' );
		add_filter( 'neve_top_bar_content', 'convert_chars' );
		add_filter( 'neve_top_bar_content', 'wpautop' );
		add_filter( 'neve_top_bar_content', 'shortcode_unautop' );
		add_filter( 'neve_top_bar_content', 'do_shortcode' );

	}

	/**
	 * The top bar markup.
	 */
	public function render_top_bar() {
		if ( ! $this->should_render_top_bar() ) {
			return;
		} ?>

		<div class="nv-top-bar">
			<div class="container">
				<div class="row">
					<div class="col-md-12 nv-tb-wrap <?php echo esc_attr( $this->get_alignment() ); ?>">
						<?php $this->inner_top_bar(); ?>
					</div>
				</div>
			</div>
		</div>
		<?php
	}

	/**
	 * Get the inner top bar content.
	 *
	 * @return void
	 */
	private function inner_top_bar() {
		$layout = $this->get_alignment();
		if ( $layout === 'content-menu' ) {
			$this->content();
			$this->menu();
		}
		if ( $layout === 'menu-content' ) {
			$this->menu();
			$this->content();
		}
	}

	/**
	 * Get the top bar alignment option.
	 *
	 * @return string
	 */
	private function get_alignment() {
		return get_theme_mod( 'neve_top_bar_layout', 'content-menu' );
	}

	/**
	 * Render menu part of top bar.
	 */
	private function menu() {
		wp_nav_menu(
			array(
				'theme_location' => 'top-bar',
				'menu_id'        => 'nv-top-bar-menu',
				'container'      => 'ul',
				'depth'          => - 1,
				'fallback_cb'    => '__return_false',
			)
		);
	}

	/**
	 * Render content part of top bar.
	 */
	private function content() {
		$content = get_theme_mod( 'neve_top_bar_content', '' );
		if ( empty( $content ) ) {
			return;
		}

		$markup = '';

		$content = apply_filters( 'neve_top_bar_content', $content );

		$markup .= '<div class="nv-top-bar-content">';
		$markup .= $content;
		$markup .= '</div>';

		echo $markup;
	}

	/**
	 * Utility to check if top bar should be enabled.
	 *
	 * @return bool
	 */
	private function should_render_top_bar() {
		$top_bar_enabled = get_theme_mod( 'neve_top_bar_enable', false );
		if ( (bool) $top_bar_enabled === false ) {
			return false;
		}

		return true;
	}
}
