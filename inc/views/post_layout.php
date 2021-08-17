<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Dynamic_Selector;
use Neve\Customizer\Defaults\Single_Post;
use Neve\Customizer\Options\Layout_Single_Post;

/**
 * Class Post_Layout
 *
 * @package Neve\Views
 */
class Post_Layout extends Base_View {
	use Single_Post;

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_do_single_post', [ $this, 'render_post' ] );

		if ( neve_is_new_skin() ) {
			add_action( 'neve_after_header_wrapper_hook', [ $this, 'render_cover_header' ] );
			add_filter( 'neve_post_title_alignment', [ $this, 'align_post_title' ] );
		}
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

		$content_order = $this->get_content_order();
		if ( empty( $content_order ) ) {
			return;
		}

		/** This filter is documented in header-footer-grid/templates/components/component-logo.php */
		$should_add_skip_lazy = apply_filters( 'neve_skip_lazy', true );
		$skip_lazy_class      = '';
		if ( $should_add_skip_lazy ) {
			$thumbnail_index = array_search( 'thumbnail', $content_order );
			$content_index   = array_search( 'content', $content_order );
			if ( $thumbnail_index < $content_index ) {
				$skip_lazy_class = 'skip-lazy';
			}
		}

		$content_order_length = count( $content_order );
		$header_layout        = get_theme_mod( 'neve_post_header_layout', 'normal' );
		foreach ( $content_order as $index => $item ) {
			switch ( $item ) {
				case 'title-meta':
					if ( Layout_Single_Post::is_cover_layout() ) {
						break;
					}
					$this->render_entry_header();
					break;
				case 'thumbnail':
					if ( Layout_Single_Post::is_cover_layout() ) {
						break;
					}
					echo '<div class="nv-thumb-wrap">';
					echo get_the_post_thumbnail(
						null,
						'neve-blog',
						array( 'class' => $skip_lazy_class )
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
					if ( Layout_Single_Post::is_cover_layout() ) {
						break;
					}
					if ( $index !== $content_order_length - 1 && $content_order[ $index + 1 ] === 'meta' ) {
						$this->render_entry_header();
						break;
					}
					$this->render_entry_header( false );
					break;
				case 'meta':
					if ( Layout_Single_Post::is_cover_layout() ) {
						break;
					}
					if ( $index !== 0 && $content_order[ $index - 1 ] === 'title' ) {
						break;
					}
					self::render_post_meta();
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
	 *
	 * @param bool $is_list Flag to render meta as a list or as a text.
	 *
	 * @return bool
	 */
	public static function render_post_meta( $is_list = true ) {
		if ( ! get_post() ) {
			return false;
		}
		$default_meta_order = get_theme_mod( 'neve_post_meta_ordering', wp_json_encode( array( 'author', 'date', 'comments' ) ) );
		$meta_order         = get_theme_mod( 'neve_single_post_meta_ordering', $default_meta_order );
		$meta_order         = is_string( $meta_order ) ? json_decode( $meta_order ) : $meta_order;
		$meta_order         = apply_filters( 'neve_post_meta_ordering_filter', $meta_order );

		do_action( 'neve_post_meta_single', $meta_order, $is_list );
		return true;
	}

	/**
	 * Render post header
	 *
	 * @param bool $render_meta Render meta flag.
	 * @return void
	 */
	private function render_entry_header( $render_meta = true ) {
		$alignment = apply_filters( 'neve_post_title_alignment', '' );

		echo '<div class="entry-header">';
		echo '<div class="nv-title-meta-wrap ' . esc_attr( $alignment ) . '">';
		do_action( 'neve_before_post_title' );
		echo '<h1 class="title entry-title">' . wp_kses_post( get_the_title() ) . '</h1>';
		if ( $render_meta ) {
			self::render_post_meta();
		}
		echo '</div>';
		echo '</div>';
	}

	/**
	 * Render the cover layout on single post.
	 */
	public function render_cover_header() {
		if ( ! is_singular( 'post' ) ) {
			return false;
		}

		$header_layout = get_theme_mod( 'neve_post_header_layout', 'normal' );
		if ( $header_layout !== 'cover' ) {
			return false;
		}

		$hide_thumbnail = get_theme_mod( 'neve_post_cover_hide_thumbnail', false );
		$post_thumbnail = get_the_post_thumbnail_url();
		$cover_style    = '';
		$main_class     = [ 'nv-post-cover' ];
		if ( $hide_thumbnail === false && ! empty( $post_thumbnail ) ) {
			$cover_style = 'style="background-image:url(' . esc_url( $post_thumbnail ) . ')"';
		}

		$container_class = [ 'container' ];

		$container_mode = get_theme_mod( 'neve_post_cover_container', 'contained' );

		$title_meta_wrap_classes = [
			'nv-title-meta-wrap',
		];
		$title_mode              = get_theme_mod( 'neve_post_cover_title_boxed_layout', false );
		if ( $title_mode ) {
			$title_meta_wrap_classes[] = 'nv-is-boxed';
		}
		$alignment = apply_filters( 'neve_post_title_alignment', '' );
		if ( $container_mode === 'contained' ) {
			$container_class[] = $alignment;
		} else {
			$main_class[] = $alignment;
		}

		$meta_before = get_theme_mod( 'neve_post_cover_meta_before_title', false );

		echo '<div class="' . esc_attr( implode( ' ', $main_class ) ) . '" ' . $cover_style . '>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo '<div class="nv-overlay"></div>';
		echo $container_mode === 'contained' ? '<div class="' . esc_attr( implode( ' ', $container_class ) ) . '">' : '';

		echo '<div class="' . esc_attr( implode( ' ', $title_meta_wrap_classes ) ) . '">';
		if ( $meta_before ) {
			self::render_post_meta();
		}
		do_action( 'neve_before_post_title' );
		echo '<h1 class="title entry-title">' . wp_kses_post( get_the_title() ) . '</h1>';
		if ( ! $meta_before ) {
			self::render_post_meta();
		}
		echo '</div>';

		echo $container_mode === 'contained' ? '</div>' : '';
		echo '</div>';
	}

	/**
	 * Filter that handles the post title alignment.
	 *
	 * @return string
	 */
	public function align_post_title( $classes ) {
		if ( ! is_singular( 'post' ) ) {
			return $classes;
		}
		$title_alignment_classes = $this->get_alignment_classes( 'neve_post_title_alignment', $this->post_title_alignment() );
		if ( empty( $title_alignment_classes ) ) {
			return $classes;
		}
		return $classes . ' ' . $title_alignment_classes;
	}

	/**
	 * Get elements order.
	 *
	 * @return array
	 */
	private function get_content_order() {
		$default_order = $this->post_ordering();

		$content_order = get_theme_mod( 'neve_layout_single_post_elements_order', wp_json_encode( $default_order ) );
		if ( ! is_string( $content_order ) ) {
			$content_order = wp_json_encode( $default_order );
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

		return apply_filters( 'neve_layout_single_post_elements_order', $content_order );
	}

	/**
	 * Convert from array to inline style.
	 *
	 * @param array $array Css properties in array.
	 *
	 * @return string
	 */
	private function get_inline_style( $array ) {
		return implode(
			'; ',
			array_map(
				function ( $v, $k ) {
					return sprintf( '%s:%s', $k, $v ); },
				$array,
				array_keys( $array )
			)
		);
	}

	/**
	 * Get alignment classes for the title on the cover layout.
	 *
	 * @param string $theme_mod Theme mod id.
	 * @param array  $default   The default value for the control.
	 *
	 * @return string
	 */
	private function get_alignment_classes( $theme_mod, $default = array() ) {
		$classes = [];

		$title_alignment = get_theme_mod( $theme_mod, $default );
		if ( empty( $title_alignment ) ) {
			return '';
		}

		foreach ( $title_alignment as $device_slug => $align_slug ) {
			$classes[] = $device_slug . '-' . $align_slug;
		}

		return implode( ' ', $classes );
	}

}
