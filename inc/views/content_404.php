<?php
/**
 * Content 404 class.
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Content_404
 *
 * @package Neve\Views
 */
class Content_404 extends Base_View {

	/**
	 * Init function.
	 */
	public function init() {
		add_action( 'neve_do_404', array( $this, 'render_404_page' ) );
	}

	/**
	 * Render 404 page.
	 */
	public function render_404_page() {
		$container_class = apply_filters( 'neve_container_class_filter', 'container', 'blog-archive' );

		echo '<div class="' . esc_attr( $container_class ) . ' archive-container">';
		echo '<div class="row">';
		do_action( 'neve_do_sidebar', 'blog-archive', 'left' );
		echo '<div class="nv-index-posts blog col">';

		echo '<div class="col-12 nv-content-none-wrap">';
		echo '<p>';
		esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'neve' );
		echo '</p>';
		echo '<div class="nv-seach-form-wrap">';
		get_search_form();
		echo '</div>';
		echo '</div>';

		echo '<div class="w-100"></div>';
		echo '</div>';
		do_action( 'neve_do_sidebar', 'blog-archive', 'right' );
		echo '</div>';
		echo '</div>';
	}
}
