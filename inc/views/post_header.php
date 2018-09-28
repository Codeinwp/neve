<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Page_Header
 *
 * @package Neve\Views
 */
class Post_Header extends Base_View {

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_before_content', array( $this, 'render_post_header' ) );
	}

	/**
	 * Render the post header.
	 *
	 * @param string $context the context provided in do_action.
	 */
	public function render_post_header( $context ) {
		if ( $context !== 'single-post' ) {
			return;
		}

		$content_order = array(
			'title',
			'thumbnail',
			'meta',
		);

		if ( class_exists( 'WooCommerce' ) && is_product() ) {
			$content_order = array( 'title' );
		}

		// Todo: add single content order here.
		foreach ( $content_order as $item ) {
			switch ( $item ) {
				case 'title':
					echo '<h1 class="title entry-title">' . wp_kses_post( get_the_title() ) . '</h1>';
					break;
				case 'thumbnail':
					echo get_the_post_thumbnail( null, 'neve-blog' );
					break;
				case 'meta':
					$this->render_post_meta();
					break;
			}
		}
	}

	/**
	 * Render the post meta.
	 */
	private function render_post_meta() {
		$default_meta_order = json_encode(
			array(
				'author',
				'category',
				'date',
				'comments',
			)
		);

		$meta_order = get_theme_mod( 'neve_post_meta_ordering', $default_meta_order );
		$meta_order = json_decode( $meta_order );
		do_action( 'neve_post_meta_single', $meta_order );
	}
}
