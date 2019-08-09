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
		add_filter( 'neve_display_author_avatar', array( $this, 'should_display_author_avatar' ) );
		add_action( 'neve_post_meta_archive', array( $this, 'render_meta_list' ) );
		add_action( 'neve_post_meta_single', array( $this, 'render_meta_list' ) );
		add_action( 'neve_do_tags', array( $this, 'render_tags_list' ) );
	}

	/**
	 * Show/hide author avatar based on customizer option
	 *
	 * @param bool $value option value.
	 *
	 * @return bool
	 */
	public function should_display_author_avatar( $value ) {

		$show_avatar = get_theme_mod( 'neve_author_avatar', false );

		if ( $show_avatar === true ) {
			return true;
		}

		return false;
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
		$order     = $this->sanitize_order_array( $order );
		$pid       = get_the_ID();
		$post_type = get_post_type( $pid );
		$markup    = '';
		$markup   .= '<ul class="nv-meta-list">';
		foreach ( $order as $meta ) {
			switch ( $meta ) {
				case 'author':
					$author_email   = get_the_author_meta( 'user_email' );
					$gravatar_args  = apply_filters(
						'neve_gravatar_args',
						array(
							'size' => 20,
						)
					);
					$avatar_url     = get_avatar_url( $author_email, $gravatar_args );
					$avatar_markup  = '<img class="photo" alt="' . get_the_author() . '" src="' . esc_url( $avatar_url ) . '" />&nbsp;';
					$display_avatar = apply_filters( 'neve_display_author_avatar', false );

					$markup .= '<li class="meta author vcard">';
					if ( $display_avatar ) {
						$markup .= $avatar_markup;
					}
					$markup .= '<span class="author-name fn">';
					if ( ! $display_avatar ) {
						$markup .= __( 'by', 'neve' ) . ' ';
					}
					$markup .= wp_kses_post( get_the_author_posts_link() ) . '</span>';

					$markup .= '</li>';
					break;
				case 'date':
					$markup .= '<li class="meta date posted-on">';
					$markup .= $this->get_time_tags();
					$markup .= '</li>';
					break;
				case 'category':
					if ( $post_type !== 'post' ) {
						break;
					}
					$markup .= '<li class="meta category">';
					$markup .= get_the_category_list( ', ', get_the_ID() );
					$markup .= '</li>';
					break;
				case 'comments':
					$comments = $this->get_comments();
					if ( empty( $comments ) ) {
						break;
					}
					$markup .= '<li class="meta comments">';
					$markup .= $comments;
					$markup .= '</li>';
					break;
				case 'reading':
					if ( $post_type !== 'post' ) {
						break;
					}
					$markup .= '<li class="meta reading-time">';
					$markup .= apply_filters( 'neve_do_read_time', '' );
					$markup .= '</li>';
					break;
				case 'default':
					break;
				default:
					break;
			}
		}
		$markup .= '</ul>';
		echo neve_custom_kses_escape( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			$markup,
			array(
				'time' => array(
					'class'    => true,
					'datetime' => true,
					'content'  => true,
				),
			)
		);
	}

	/**
	 * Makes sure there's a valid meta order array.
	 *
	 * @param array $order meta order array.
	 *
	 * @return mixed
	 */
	private function sanitize_order_array( $order ) {
		$allowed_order_values = apply_filters(
			'neve_meta_filter',
			array(
				'author'   => __( 'Author', 'neve' ),
				'category' => __( 'Category', 'neve' ),
				'date'     => __( 'Date', 'neve' ),
				'comments' => __( 'Comments', 'neve' ),
			)
		);
		foreach ( $order as $index => $value ) {
			if ( ! array_key_exists( $value, $allowed_order_values ) ) {
				unset( $order[ $index ] );
			}
		}

		return $order;
	}

	/**
	 * Get <time> tags.
	 *
	 * @return string
	 */
	private function get_time_tags() {
		$time = '<time class="entry-date published" datetime="' . esc_attr( get_the_date( 'c' ) ) . '" content="' . esc_attr( get_the_date( 'Y-m-d' ) ) . '">' . esc_html( get_the_date() ) . '</time>';
		if ( get_the_time( 'U' ) === get_the_modified_time( 'U' ) ) {
			return $time;
		}
		$time .= '<time class="updated" datetime="' . esc_attr( get_the_modified_date( 'c' ) ) . '">' . esc_html( get_the_modified_date() ) . '</time>';

		return $time;
	}

	/**
	 * Get the comments with a link.
	 *
	 * @return string
	 */
	private function get_comments() {
		if ( ! comments_open() ) {
			return '';
		}
		$comments_number = get_comments_number();
		if ( $comments_number < 1 ) {
			return '';
		}
		/* translators: %s: number of comments */
		$comments = sprintf( _n( '%s Comment', '%s Comments', $comments_number, 'neve' ), $comments_number );

		return '<a href="' . esc_url( get_comments_link() ) . '">' . esc_html( $comments ) . '</a>';
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
			$html    .= '<a href=' . esc_url( $tag_link ) . ' title="' . esc_attr( $tag->name ) . '" class=' . esc_attr( $tag->slug ) . ' rel="tag">';
			$html    .= esc_html( $tag->name ) . '</a>';
		}
		$html .= ' </div> ';
		echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}
