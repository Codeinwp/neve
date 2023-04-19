<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      28/08/2018
 *
 * @package Neve\Views
 */


namespace Neve\Views;

use Neve\Customizer\Defaults\Layout;
use Neve\Customizer\Defaults\Single_Post;
use Neve\Customizer\Options\Layout_Single_Post;

/**
 * Class Post_Layout
 *
 * @package Neve\Views
 */
class Post_Layout extends Base_View {
	use Single_Post;
	use Layout;

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_do_single_post', [ $this, 'render_post' ] );
		add_filter( 'neve_post_has_comments', [ $this, 'post_has_comments' ] );
	}

	/**
	 * Detect if comments post element is enabled.
	 *
	 * @return bool
	 */
	public function post_has_comments() {
		$post_type              = get_post_type();
		$supported_post_types   = apply_filters( 'neve_post_type_supported_list', [], 'block_editor' );
		$supported_post_types[] = 'post';
		if ( ! in_array( $post_type, $supported_post_types, true ) ) {
			return false;
		}

		if ( ! is_singular( $post_type ) ) {
			return false;
		}

		$content_order = $this->get_content_order();

		if ( empty( $content_order ) ) {
			return false;
		}

		if ( ! in_array( 'comments', $content_order ) ) {
			return false;
		}

		return true;
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

		$meta_order = get_theme_mod( 'neve_single_post_meta_fields', self::get_default_single_post_meta_fields() );
		$meta_order = is_string( $meta_order ) ? json_decode( $meta_order ) : $meta_order;

		// We take the result and apply the neve_post_meta_ordering_filter that allows us to add values in neve pro
		$meta_order = apply_filters( 'neve_post_meta_ordering_filter', $meta_order );

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
		$normal_style = apply_filters( 'neve_title_alignment_style', '', 'normal' );
		if ( ! empty( $normal_style ) ) {
			$normal_style = 'style="' . $normal_style . '"';
		}

		echo '<div class="entry-header" ' . wp_kses_post( $normal_style ) . '>';
		echo '<div class="nv-title-meta-wrap">';
		do_action( 'neve_before_post_title' );
		echo '<h1 class="title entry-title">' . wp_kses_post( get_the_title() ) . '</h1>';
		if ( $render_meta ) {
			self::render_post_meta();
		}
		echo '</div>';
		echo '</div>';
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
}
