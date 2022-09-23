<?php
/**
 * Content none class.
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Content_None
 *
 * @package Neve\Views
 */
class Content_None extends Base_View {

	/**
	 * Init function.
	 */
	public function init() {
		add_action( 'neve_do_content_none', array( $this, 'render_content_none' ) );
	}

	/**
	 * Render content none;
	 */
	public function render_content_none() {
		echo '<div class="col-12 nv-content-none-wrap">';
		if ( is_home() && current_user_can( 'publish_posts' ) ) {
			echo '<p>';

			printf(
				/* translators: %s is Link to new post */
				esc_html__( 'Ready to publish your first post? %s.', 'neve' ),
				sprintf(
					/* translators: %1$s is Link to new post, %2$s is Get started here */
					'<a href="%1$s">%2$s</a>',
					esc_url( admin_url( 'post-new.php' ) ),
					esc_html__( 'Get started here', 'neve' )
				)
			);

			echo '</p>';
		} elseif ( is_search() ) {
			$this->render_search_none();
		}

		echo '</div>';
		comments_template();
	}

	/**
	 * Render Search 404.
	 */
	private function render_search_none() {
		echo '<p>';
		esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'neve' );
		echo '</p>';
		echo '<div class="nv-seach-form-wrap">';
		get_search_form();
		echo '</div>';
	}
}
