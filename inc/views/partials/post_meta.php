<?php
/**
 * Should handle post meta display.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views\Partials;

use Neve\Views\Base_View;

/**
 * Class Post_Meta
 *
 * @package Neve\Views
 */
class Post_Meta extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_post_meta_archive', array( $this, 'render_meta_list' ) );
		add_action( 'neve_post_meta_single', array( $this, 'render_meta_list' ) );
		add_action( 'neve_do_tags', array( $this, 'render_tags_list' ) );
	}

	/**
	 * Render meta list.
	 *
	 * @param array $order the order array. Passed through the action parameter.
	 */
	public function render_meta_list( $order ) {
		if ( ! is_array( $order ) || empty( $order ) ) {
			return;
		}
		$order  = $this->sanitize_order_array( $order );
		$markup = '';

		$markup .= '<ul class="nv-meta-list">';
		foreach ( $order as $meta ) {
			switch ( $meta ) {
				case 'author':
					$markup .= '<li class="meta author"><span class="nv-icon nv-author"></span>';
					$markup .= get_the_author_posts_link();
					$markup .= '</li>';
					break;
				case 'date':
					$markup .= '<li class="meta date"><span class="nv-icon nv-calendar"></span>';
					$markup .= '<span>' . get_the_date() . '</span>';
					$markup .= '</li>';
					break;
				case 'category':
					$markup .= '<li class="meta category"><span class="nv-icon nv-folder"></span>';
					$markup .= get_the_category_list( ' / ', get_the_ID() );
					$markup .= '</li>';
					break;
				case 'comments':
					$comments = $this->get_comments();
					if ( empty( $comments ) ) {
						break;
					}
					$markup .= '<li class="meta comments"><span class="nv-icon nv-comment"></span>';
					$markup .= $this->get_comments();
					$markup .= '</li>';
					break;
				case 'default':
					break;
			}
		}
		$markup .= '</ul>';

		echo wp_kses_post( ( $markup ) );
	}

	/**
	 * Get the comments with a link.
	 *
	 * @return string
	 */
	private function get_comments() {
		$comments_number = get_comments_number();
		if ( ! comments_open() ) {
			return '';
		}
		if ( $comments_number == 0 ) {
			$comments = __( 'No Comments', 'neve' );
		} elseif ( $comments_number > 1 ) {
			$comments = $comments_number . __( ' Comments', 'neve' );
		} else {
			$comments = __( '1 Comment', 'neve' );
		}

		return '<a href="' . get_comments_link() . '">' . $comments . '</a>';
	}

	/**
	 * Makes sure there's a valid meta order array.
	 *
	 * @param array $order meta order array.
	 *
	 * @return mixed
	 */
	private function sanitize_order_array( $order ) {
		$allowed_order_values = array(
			'author',
			'date',
			'category',
			'comments',
		);
		foreach ( $order as $index => $value ) {
			if ( ! in_array( $value, $allowed_order_values ) ) {
				unset( $order[ $index ] );
			}
		}

		return $order;
	}

	/**
	 * Render the tags list.
	 */
	public function render_tags_list() {
		$tags = get_the_tags();
		if ( ! is_array( $tags ) ) {
			return;
		}
		$html  = '<div class="nv-tags-list">';
		$html .= '<span>' . __( 'Tags', 'neve' ) . ':</span>';
		foreach ( $tags as $tag ) {
			$tag_link = get_tag_link( $tag->term_id );
			$html    .= '<a href=' . esc_url( $tag_link ) . ' title="' . esc_html( $tag->name ) . '" class=' . esc_attr( $tag->slug ) . '>';
			$html    .= esc_html( $tag->name ) . '</a>';
		}
		$html .= ' </div> ';
		echo $html;
	}
}
