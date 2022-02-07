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

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
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
		add_filter( 'neve_display_author_avatar', array( $this, 'should_display_author_avatar' ), 15 );
		add_action( 'neve_post_meta_archive', array( $this, 'render_meta_list' ), 10, 3 );
		add_action( 'neve_post_meta_single', array( $this, 'render_meta_list' ), 10, 3 );
		add_action( 'neve_do_tags', array( $this, 'render_tags_list' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'meta_custom_separator' ) );
		add_filter( 'neve_gravatar_args', [ $this, 'add_dynamic_gravatar' ] );
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
		if ( is_singular() ) {
			$show_avatar = get_theme_mod( 'neve_single_post_author_avatar', $show_avatar );
		}

		return $show_avatar;
	}

	/**
	 * Add dynamic gravatar values.
	 *
	 * @param array $args_array Avatar args.
	 *
	 * @return mixed
	 */
	public function add_dynamic_gravatar( $args_array ) {

		$meta_key    = Config::MODS_ARCHIVE_POST_META_AUTHOR_AVATAR_SIZE;
		$default     = '{ "mobile": 20, "tablet": 20, "desktop": 20 }';
		$avatar_size = Mods::to_json( $meta_key, $default );
		if ( is_singular( 'post' ) ) {
			$single_avatar_size = Mods::to_json( Config::MODS_SINGLE_POST_META_AUTHOR_AVATAR_SIZE );
			$avatar_size        = ! empty( $single_avatar_size ) ? $single_avatar_size : $avatar_size;
		}
		$avatar_size = apply_filters( 'neve_author_avatar_size_filter', $avatar_size );

		if ( ! isset( $args_array['size'] ) ) {
			return $args_array;
		}

		if ( ! is_array( $avatar_size ) ) {
			return $args_array;
		}

		$args_array['size'] = max( $avatar_size );

		return $args_array;
	}

	/**
	 * Render meta list.
	 *
	 * @param array      $order   the order array. Passed through the action parameter.
	 * @param bool       $as_list Flag to display meta as list or as text.
	 * @param int | null $post_id Post id.
	 */
	public function render_meta_list( $order, $as_list = true, $post_id = null ) {
		if ( ! is_array( $order ) || empty( $order ) ) {
			return;
		}
		$order = $this->sanitize_order_array( $order );

		$pid       = $post_id ? $post_id : get_the_ID();
		$post_type = get_post_type( $pid );
		$markup    = $as_list === true ? '<ul class="nv-meta-list">' : '<span class="nv-meta-list nv-dynamic-meta">';
		$index     = 1;
		$tag       = $as_list === true ? 'li' : 'span';
		foreach ( $order as $meta ) {
			switch ( $meta ) {
				case 'author':
					$markup .= '<' . $tag . '  class="meta author vcard">';
					$markup .= self::neve_get_author_meta( $post_id );
					$markup .= '</' . $tag . '>';
					break;
				case 'date':
					$date_meta_classes = array(
						'meta',
						'date',
						'posted-on',
					);

					$created           = get_the_time( 'U' );
					$modified          = get_the_modified_time( 'U' );
					$has_updated_time  = $created !== $modified;
					$show_updated_time = get_theme_mod( 'neve_show_last_updated_date', false );
					if ( is_singular( 'post' ) ) {
						$show_updated_time = get_theme_mod( 'neve_single_post_show_last_updated_date', $show_updated_time );
					}
					if ( $show_updated_time && $has_updated_time ) {
						$date_meta_classes[] = 'nv-show-updated';
					}

					$markup .= '<' . $tag . ' class="' . esc_attr( implode( ' ', $date_meta_classes ) ) . '">';
					$markup .= self::get_time_tags( $post_id );
					$markup .= '</' . $tag . '>';
					break;
				case 'category':
					if ( ! in_array( 'category', get_object_taxonomies( $post_type ) ) ) {
						break;
					}
					$pid     = $post_id !== null ? $post_id : get_the_ID();
					$markup .= '<' . $tag . ' class="meta category">';
					$markup .= get_the_category_list( ', ', '', $pid );
					$markup .= '</' . $tag . '>';
					break;
				case 'comments':
					$comments = self::get_comments( $post_id );
					if ( empty( $comments ) ) {
						break;
					}
					$markup .= '<' . $tag . ' class="meta comments">';
					$markup .= $comments;
					$markup .= '</' . $tag . '>';
					break;
				case 'reading':
					$allowed_context = apply_filters( 'neve_post_type_supported_list', [ 'post' ], 'block_editor' );
					if ( ! in_array( $post_type, $allowed_context ) ) {
						break;
					}
					$reading_time = apply_filters( 'neve_do_read_time', $post_id );
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
			$index ++;
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
	 * @param int | null $post_id Post id.
	 *
	 * @return string | false
	 */
	public static function neve_get_author_meta( $post_id = null ) {

		global $post;

		$current_post = $post_id !== null ? get_post( $post_id ) : $post;

		if ( ! isset( $current_post ) ) {
			return false;
		}

		$author_id      = $current_post->post_author;
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
			esc_attr( sprintf( __( 'Posts by %s', 'neve' ), $display_name ) ),
			$display_name
		);

		$link = apply_filters( 'the_author_posts_link', $link );

		$markup .= wp_kses_post( $link ) . '</span>';

		return $markup;
	}

	/**
	 * Get <time> tags.
	 *
	 * @param int | null $post_id Post id.
	 * @return string
	 */
	public static function get_time_tags( $post_id = null ) {
		$created           = get_the_time( 'U', $post_id );
		$modified          = get_the_modified_time( 'U', $post_id );
		$has_updated_time  = $created !== $modified;
		$show_updated_time = get_theme_mod( 'neve_show_last_updated_date', false );
		if ( is_singular( 'post' ) ) {
			$show_updated_time = get_theme_mod( 'neve_single_post_show_last_updated_date', $show_updated_time );
		}
		$format = get_option( 'date_format' );

		$prefixes = array(
			'published' => '',
			'updated'   => '',
		);

		/**
		 * Filters the prefix of the published date and the updated date of a post.
		 *
		 * @param array $prefixes {
		 *     Prefix location and value.
		 *
		 *     @type string $published The prefix for the published date.
		 *     @type string $updated The prefix for the updated date.
		 * }
		 *
		 * @since 2.11
		 */
		$prefixes = apply_filters( 'neve_meta_date_prefix', $prefixes );

		$updated_time_markup = '<time class="updated" datetime="' . esc_attr( date_i18n( 'c', $modified ) ) . '">';
		if ( array_key_exists( 'updated', $prefixes ) && ! empty( $prefixes['updated'] ) ) {
			$updated_time_markup .= wp_kses_post( $prefixes['updated'] );
		}
		$updated_time_markup .= esc_html( date_i18n( $format, $modified ) ) . '</time>';

		if ( $show_updated_time && $has_updated_time ) {
			return $updated_time_markup;
		}

		$time = '<time class="entry-date published" datetime="' . esc_attr( date_i18n( 'c', $created ) ) . '" content="' . esc_attr( date_i18n( 'Y-m-d', $created ) ) . '">';
		if ( array_key_exists( 'published', $prefixes ) && ! empty( $prefixes['published'] ) ) {
			$time .= wp_kses_post( $prefixes['published'] );
		}
		$time .= esc_html( date_i18n( $format, $created ) ) . '</time>';

		if ( ! $has_updated_time ) {
			return $time;
		}
		$time .= $updated_time_markup;

		return $time;
	}

	/**
	 * Get the comments with a link.
	 *
	 * @param int | null $post_id Post id.
	 *
	 * @return string|false
	 */
	public static function get_comments( $post_id = null ) {
		if ( ! get_post( $post_id ) ) {
			return false;
		}
		if ( ! comments_open( $post_id ) ) {
			return false;
		}
		$comments_number = get_comments_number( $post_id );
		if ( $comments_number < 1 ) {
			return false;
		}
		if ( ! is_front_page() && is_home() ) {
			return false;
		}
		/* translators: %s: number of comments */
		$comments = sprintf( _n( '%s Comment', '%s Comments', $comments_number, 'neve' ), $comments_number );

		return '<a href="' . esc_url( get_comments_link( $post_id ) ) . '">' . esc_html( $comments ) . '</a>';
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

	/**
	 * Change metadata separator according to the customizer setting
	 */
	public function meta_custom_separator() {

		$separator = get_theme_mod( 'neve_metadata_separator', esc_html( '/' ) );
		if ( is_singular() ) {
			$separator = get_theme_mod( 'neve_single_post_metadata_separator', $separator );
		}
		$separator = apply_filters( 'neve_metadata_separator_filter', $separator );

		$custom_css  = '';
		$custom_css .= '.nv-meta-list li.meta:not(:last-child):after { content:"' . esc_html( $separator ) . '" }';

		wp_add_inline_style( 'neve-style', $custom_css );
	}

}
