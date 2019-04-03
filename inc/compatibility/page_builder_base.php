<?php
/**
 * Page Builder Compatibility extendable class.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Page_Builder_Base
 *
 * @package Neve\Compatibility
 */
abstract class Page_Builder_Base {

	/**
	 * Init function.
	 */
	abstract public function init();

	/**
	 * Decide if a page is edited with a page builder or not.
	 *
	 * @param string $pid Post id.
	 *
	 * @return bool
	 */
	abstract protected function is_edited_with_builder( $pid );

	/**
	 * Decide if we should set page template in builder or not.
	 */
	public function maybe_set_page_template() {
		if ( get_post_type() !== 'page' ) {
			return;
		}

		global $post;

		if ( ! isset( $post ) ) {
			return;
		}

		$post_id = get_the_ID();
		if ( ! isset( $post_id ) || $post_id === false ) {
			return;
		}

		/**
		 * Don't change if user already set a page template.
		 */
		$post_meta_template = get_post_meta( $post_id, '_wp_page_template', true );
		if ( $post_meta_template !== 'default' && ! empty( $post_meta_template ) ) {
			return;
		}

		/**
		 * Bail if page is not edited with builder.
		 */
		if ( $this->is_edited_with_builder( $post_id ) === false ) {
			return;
		}

		$this->set_page_template( $post_id );
	}

	/**
	 * Set page layout.
	 *
	 * @param string $post_id the post id.
	 */
	private function set_page_template( $post_id ) {
		global $post;

		if ( isset( $post ) && ( is_admin() || is_singular() ) && empty( $post->post_content ) ) {
			update_post_meta( $post_id, '_wp_page_template', 'page-templates/template-pagebuilder-full-width.php' );
		}
	}
}
