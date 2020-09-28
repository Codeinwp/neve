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
		add_action( 'neve_post_meta_single', array( $this, 'render_meta_list' ), 10, 2 );
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
	 * @param array $order   the order array. Passed through the action parameter.
	 * @param bool  $as_list Flag to display meta as list or as text.
	 */
	public function render_meta_list( $order, $as_list = true ) {
		if ( ! is_array( $order ) || empty( $order ) ) {
			return;
		}
		$order     = $this->sanitize_order_array( $order );
		$pid       = get_the_ID();
		$post_type = get_post_type( $pid );
		$markup    = $as_list === true ? '<ul class="nv-meta-list">' : '<span class="nv-meta-list nv-dynamic-meta">';
		$index     = 1;
		$tag       = $as_list === true ? 'li' : 'span';
		foreach ( $order as $meta ) {
			switch ( $meta ) {
				case 'author':
					$markup .= '<' . $tag . '  class="meta author vcard">';
					$markup .= self::neve_get_author_meta();
					$markup .= '</' . $tag . '>';
					break;
				case 'date':
					$markup .= '<' . $tag . ' class="meta date posted-on">';
					$markup .= self::get_time_tags();
					$markup .= '</' . $tag . '>';
					break;
				case 'category':
					if ( $post_type !== 'post' ) {
						break;
					}
					$markup .= '<' . $tag . ' class="meta category">';
					$markup .= get_the_category_list( ', ', get_the_ID() );
					$markup .= '</' . $tag . '>';
					break;
				case 'comments':
					$comments = self::get_comments();
					if ( empty( $comments ) ) {
						break;
					}
					$markup .= '<' . $tag . ' class="meta comments">';
					$markup .= $comments;
					$markup .= '</' . $tag . '>';
					break;
				case 'reading':
					if ( $post_type !== 'post' ) {
						break;
					}
					$reading_time = apply_filters( 'neve_do_read_time', '' );
					if ( empty( $reading_time ) ) {
						break;
					}
					$markup .= '<' . $tag . ' class="meta reading-time">';
					$markup .= $reading_time;
					$markup .= '</' . $tag . '>';
					break;
				case 'default':
				default:
					break;
			}
			$index += 1;
		}
		$markup .= $as_list === true ? '</ul>' : '</span>';
		echo ( $markup ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
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
	 * Get the author meta.
	 *
	 * @return string
	 */
	public static function neve_get_author_meta() {
		global $post;

		$author_id      = $post->post_author;
		$user_nicename  = get_the_author_meta( 'user_nicename', $author_id );
		$display_name   = get_the_author_meta( 'display_name', $author_id );
		$author_email   = get_the_author_meta( 'user_email', $author_id );
		$gravatar_args  = apply_filters(
			'neve_gravatar_args',
			array(
				'size' => 20,
			)
		);
		$display_avatar = apply_filters( 'neve_display_author_avatar', false );
		$avatar_url     = get_avatar_url( $author_email, $gravatar_args );
		$avatar_markup  = '<img class="photo" alt="' . get_the_author() . '" src="' . esc_url( $avatar_url ) . '" />&nbsp;';

		$markup = '';
		if ( $display_avatar ) {
			$markup .= $avatar_markup;
		}
		$markup .= '<span class="author-name fn">';
		if ( ! $display_avatar ) {
			$markup .= __( 'by', 'neve' ) . ' ';
		}

		$link = sprintf(
			'<a href="%1$s" title="%2$s" rel="author">%3$s</a>',
			esc_url( get_author_posts_url( $author_id, $user_nicename ) ),
			/* translators: %s: Author's display name. */
			esc_attr( sprintf( __( 'Posts by %s' ), $display_name ) ),
			$display_name
		);

		$link = apply_filters( 'the_author_posts_link', $link );

		$markup .= wp_kses_post( $link ) . '</span>';

		return $markup;
	}

	/**
	 * Get <time> tags.
	 *
	 * @return string
	 */
	public static function get_time_tags() {
		$created  = get_the_time( 'U' );
		$format   = get_option( 'date_format' );
		$modified = get_the_modified_time( 'U' );
		$time     = '<time class="entry-date published" datetime="' . esc_attr( date_i18n( 'c', $created ) ) . '" content="' . esc_attr( date_i18n( 'Y-m-d', $created ) ) . '">' . esc_html( date_i18n( $format, $created ) ) . '</time>';
		if ( $created === $modified ) {
			return $time;
		}
		$time .= '<time class="updated" datetime="' . esc_attr( date_i18n( 'c', $modified ) ) . '">' . esc_html( date_i18n( $format, $modified ) ) . '</time>';

		return $time;
	}
	/**
	 * Get the comments with a link.
	 *
	 * @return string
	 */
	public static function get_comments() {
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
