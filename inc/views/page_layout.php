<?php
/**
 * Single page layout.
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Page_Layout
 *
 * @package Neve\Views
 */
class Page_Layout extends Base_View {

	/**
	 * Init function
	 */
	public function init() {
		add_action( 'neve_after_header_wrapper_hook', [ $this, 'render_cover_header' ] );
		add_action( 'neve_do_single_page', array( $this, 'render_page' ) );
	}

	/**
	 * Render the cover layout on single post.
	 */
	public function render_cover_header() {
		if ( ! is_singular( 'page' ) ) {
			return false;
		}

		$header_layout = get_theme_mod( 'neve_page_header_layout', 'normal' );
		if ( $header_layout !== 'cover' ) {
			return false;
		}

		$cover_style = '';

		$hide_thumbnail = get_theme_mod( 'neve_page_hide_thumbnail', false );
		$page_thumbnail = get_the_post_thumbnail_url();
		if ( $hide_thumbnail === false && ! empty( $page_thumbnail ) ) {
			$cover_style = 'background-image:url(' . esc_url( $page_thumbnail ) . ');';
		}

		/**
		 * Filters the page title styles to override specific styles.
		 *
		 * @param string $style The styles for the title.
		 * @param string $context The context of the layout (e.g. 'cover', 'normal'). Default is 'normal'.
		 *
		 * @since 3.1.0
		 */
		$cover_style = apply_filters( 'neve_page_title_alignment_style', $cover_style, 'cover' );
		if ( ! empty( $cover_style ) ) {
			$cover_style = 'style="' . $cover_style . '"';
		}

		$container_mode = get_theme_mod( 'neve_page_cover_container', 'contained' );

		$title_meta_wrap_classes = [
			'nv-title-meta-wrap',
		];
		$title_mode              = get_theme_mod( 'neve_page_cover_title_boxed_layout', false );
		if ( $title_mode ) {
			$title_meta_wrap_classes[] = 'nv-is-boxed';
		}

		$hide_title = get_theme_mod( 'neve_page_hide_title', false );

		echo '<div class="nv-post-cover" ' . wp_kses_post( $cover_style ) . '>';
		echo '<div class="nv-overlay"></div>';
		echo $container_mode === 'contained' ? '<div class="container">' : '';
		if ( $hide_title === false ) {
			echo '<div class="' . esc_attr( implode( ' ', $title_meta_wrap_classes ) ) . '">';
			do_action( 'neve_before_post_title' );
			echo '<h1 class="title entry-title">' . wp_kses_post( get_the_title() ) . '</h1>';
			echo '</div>';
		}
		echo $container_mode === 'contained' ? '</div>' : '';
		echo '</div>';
	}

	/**
	 * Render single page.
	 */
	public function render_page() {
		echo '<div class="nv-content-wrap entry-content">';
		the_content();

		do_action( 'neve_before_page_comments' );
		if ( comments_open() || get_comments_number() ) {
			comments_template();
		}

		echo '</div>';
		do_action( 'neve_do_pagination', 'single' );
	}
}
