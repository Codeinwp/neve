<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Post_Layout
 *
 * @package Neve\Views
 */
class Post_Layout extends Base_View {

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_do_single_post', array( $this, 'render_post' ) );
	}

	/**
	 * Render the post header.
	 *
	 * @param string $context the context provided in do_action.
	 */
	public function render_post( $context ) {
		if ( $context !== 'single-post' ) {
			return;
		}

		$default_order = apply_filters(
			'neve_single_post_elements_default_order',
			array(
				'title-meta',
				'thumbnail',
				'content',
				'tags',
				'comments',
			)
		);

		$content_order = get_theme_mod( 'neve_layout_single_post_elements_order', json_encode( $default_order ) );
		if ( ! is_string( $content_order ) ) {
			$content_order = json_encode( $default_order );
		}
		$content_order = json_decode( $content_order, true );
		if ( apply_filters( 'neve_filter_toggle_content_parts', true, 'title' ) !== true ) {
			$title_key = array_search( 'title-meta', $content_order, true );
			if ( $title_key !== false ) {
				unset( $content_order[ $title_key ] );
			}
		}

		if ( apply_filters( 'neve_filter_toggle_content_parts', true, 'featured-image' ) !== true || ! has_post_thumbnail() ) {
			$thumb_index = array_search( 'thumbnail', $content_order, true );
			if ( $thumb_index !== false ) {
				unset( $content_order[ $thumb_index ] );
			}
		}

		if ( empty( $content_order ) ) {
			return;
		}

		foreach ( $content_order as $item ) {
			switch ( $item ) {
				case 'title-meta':
					$this->render_entry_header();
					break;
				case 'thumbnail':
					echo '<div class="nv-thumb-wrap">';
					echo get_the_post_thumbnail(
						null,
						'neve-blog'
					);
					echo '</div>';
					break;
				case 'content':
					do_action( 'neve_before_content', 'single-post' );
					echo '<div class="nv-content-wrap entry-content">';
					the_content();
					echo '</div>';
					do_action( 'neve_do_pagination', 'single' );
					do_action( 'neve_after_content', 'single-post' );
					break;
				case 'post-navigation':
					do_action( 'neve_post_navigation' );
					break;
				case 'tags':
					do_action( 'neve_do_tags' );
					break;
				case 'title':
					echo '<h1 class="title entry-title">' . wp_kses_post( get_the_title() ) . '</h1>';
					break;
				case 'meta':
					$this->render_post_meta();
					break;
				case 'author-biography':
					do_action( 'neve_layout_single_post_author_biography' );
					break;
				case 'related-posts':
					do_action( 'neve_do_related_posts' );
					break;
				case 'sharing-icons':
					do_action( 'neve_do_sharing' );
					break;
				case 'comments':
					comments_template();
					break;
				default:
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
				'date',
				'comments',
			)
		);

		$meta_order = get_theme_mod( 'neve_post_meta_ordering', $default_meta_order );
		$meta_order = json_decode( $meta_order );
		do_action( 'neve_post_meta_single', $meta_order );
	}

	/**
	 * Render post header
	 *
	 * @return void
	 */
	private function render_entry_header() {
		echo '<div class="entry-header">';
		echo '<div class="nv-title-meta-wrap">';
		do_action( 'neve_before_post_title' );
		echo '<h1 class="title entry-title">' . wp_kses_post( get_the_title() ) . '</h1>';
		$this->render_post_meta();
		echo '</div>';
		echo '</div>';

	}
}
