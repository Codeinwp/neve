<?php
/**
 * Cover header view.
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use Neve\Customizer\Defaults\Single_Post;

/**
 * Class Cover_Header
 *
 * @package Neve\Views
 */
class Cover_Header extends Base_View {
	use Single_Post;

	/**
	 * Init function
	 */
	public function init() {
		if ( ! neve_is_new_skin() ) {
			return;
		}
		add_action( 'neve_after_header_wrapper_hook', [ $this, 'render_cover_header' ] );
	}

	/**
	 * Render the cover layout on single post.
	 */
	public function render_cover_header() {

		$context = $this->get_header_context();
		if ( empty( $context ) ) {
			return;
		}

		$header_layout = get_theme_mod( 'neve_' . $context . '_header_layout', 'normal' );
		if ( $header_layout !== 'cover' ) {
			return;
		}

		$hide_thumbnail = get_theme_mod( 'neve_' . $context . '_cover_hide_thumbnail', false );
		$post_thumbnail = get_the_post_thumbnail_url();
		$cover_style    = '';
		if ( $hide_thumbnail === false && ! empty( $post_thumbnail ) ) {
			$cover_style = 'background-image:url(' . esc_url( $post_thumbnail ) . ');';
		}

		$container_mode          = get_theme_mod( 'neve_' . $context . '_cover_container', 'contained' );
		$title_mode              = get_theme_mod( 'neve_' . $context . '_cover_title_boxed_layout', false );
		$title_meta_wrap_classes = [
			'nv-title-meta-wrap',
			$title_mode ? 'nv-is-boxed' : '',
		];

		$meta_before = '';
		if ( $context === 'post' ) {
			$meta_before = get_theme_mod( 'neve_post_cover_meta_before_title', false );
		}

		/**
		 * Filters the post title styles to override specific styles.
		 *
		 * @param string $style The styles for the title.
		 * @param string $context The context of the layout (e.g. 'cover', 'normal'). Default is 'normal'.
		 *
		 * @since 3.1.0
		 */
		$cover_style = apply_filters( 'neve_title_alignment_style', $cover_style, 'cover' );

		if ( ! empty( $cover_style ) ) {
			$cover_style = 'style="' . $cover_style . '"';
		}

		$hide_title = false;
		if ( $context === 'page' ) {
			$hide_title          = get_theme_mod( 'neve_page_hide_title', false );
			$specific_hide_title = get_post_meta( get_the_ID(), 'neve_meta_disable_title', true );
			if ( ! empty( $specific_hide_title ) ) {
				$hide_title = $specific_hide_title === 'on';
			}
		}

		echo '<div class="nv-post-cover" ' . wp_kses_post( $cover_style ) . '>';
		echo '<div class="nv-overlay"></div>';
		echo $container_mode === 'contained' ? '<div class="container">' : '';

		if ( ! $hide_title ) {
			echo '<div class="' . esc_attr( implode( ' ', $title_meta_wrap_classes ) ) . '">';
			if ( $meta_before === true ) {
				Post_Layout::render_post_meta();
			}
			do_action( 'neve_before_post_title' );
			echo '<h1 class="title entry-title">' . wp_kses_post( get_the_title() ) . '</h1>';
			if ( $meta_before === false ) {
				Post_Layout::render_post_meta();
			}
			echo '</div>';
		}

		echo $container_mode === 'contained' ? '</div>' : '';
		echo '</div>';
	}
}
