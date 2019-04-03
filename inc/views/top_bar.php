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
	 *
	 * @return void
	 */
	public function render_top_bar() {
		if ( ! $this->should_render_top_bar() ) {
			return;
		}

		$args = array(
			'alignment_class' => $this->get_alignment(),
			'content'         => $this->get_inner_top_bar(),
		);

		$this->get_view( 'top-bar', $args );
	}

	/**
	 * Get the inner top bar content.
	 *
	 * @return string
	 */
	private function get_inner_top_bar() {
		$layout = $this->get_alignment();
		$markup = '';
		if ( $layout === 'content-menu' ) {
			$markup .= $this->get_content();
			$markup .= $this->get_menu();
		}
		if ( $layout === 'menu-content' ) {
			$markup .= $this->get_menu();
			$markup .= $this->get_content();
		}

		return $markup;
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
	 *
	 * @return string
	 */
	private function get_menu() {
		return wp_nav_menu(
			array(
				'theme_location' => 'top-bar',
				'menu_id'        => 'nv-top-bar-menu',
				'container'      => 'ul',
				'depth'          => - 1,
				'fallback_cb'    => '__return_false',
				'echo'           => false,
			)
		);
	}

	/**
	 * Render content part of top bar.
	 *
	 * @return string
	 */
	private function get_content() {
		$content = get_theme_mod( 'neve_top_bar_content', '' );
		if ( empty( $content ) ) {
			return '';
		}

		$markup = '';

		$content = apply_filters( 'neve_top_bar_content', $content );

		$markup .= '<div class="nv-top-bar-content">';
		$markup .= $content;
		$markup .= '</div>';

		return $markup;
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
