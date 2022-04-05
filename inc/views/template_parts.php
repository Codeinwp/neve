<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      27/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use Neve\Core\Styles\Css_Vars;

/**
 * Class Template_Parts
 *
 * @package Neve\Views
 */
class Template_Parts extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'add_featured_post_style' ) );
		add_action( 'neve_do_featured_post', array( $this, 'render_featured_post' ) );
		add_action( 'neve_blog_post_template_part_content', array( $this, 'render_post' ) );
		add_filter( 'excerpt_more', array( $this, 'link_excerpt_more' ) );
		add_filter( 'the_content_more_link', array( $this, 'link_excerpt_more' ) );
	}

	/**
	 * Add inline style for featured post.
	 */
	public function add_featured_post_style() {
		if ( ! get_theme_mod( 'neve_enable_featured_post', false ) ) {
			return;
		}

		wp_add_inline_style(
			'neve-style',
			'.home.blog .nv-ft-post{margin-top:60px}.nv-ft-post{background:var(--nv-light-bg)}.nv-ft-post h2{font-size:calc( var(--fontSize, var(--h2FontSize)) * 1.3)}.nv-ft-post .nv-meta-list{display:block}.nv-ft-post .non-grid-content{padding:32px}.nv-ft-post .wp-post-image{position:absolute;object-fit:cover;width:100%;height:100%}.nv-ft-post .nv-post-thumbnail-wrap{margin:0;position:relative;min-height:320px}'
		);
	}

	/**
	 * Render featured posts section.
	 */
	public function render_featured_post() {
		if ( ! get_theme_mod( 'neve_enable_featured_post', false ) ) {
			return;
		}

		$post_type = get_post_type();
		if ( $post_type !== 'post' || ! is_home() ) {
			return;
		}

		/**
		 * Filters the content parts.
		 *
		 * @since 3.2
		 *
		 * @param int $value Number of featured posts
		 */
		$post_number = apply_filters( 'nv_featured_posts_number', 1 );

		$target = get_theme_mod( 'neve_featured_post_target', 'latest' );
		if ( $target === 'latest' ) {
			$posts = wp_get_recent_posts(
				array(
					'numberposts' => $post_number,
					'post_status' => 'publish',
				)
			);
		}

		if ( $target === 'sticky' ) {
			$posts = get_option( 'sticky_posts' );
		}

		if ( empty( $posts ) ) {
			return;
		}

		$posts_to_exclude = [];
		foreach ( $posts as $post ) {
			$post_id            = is_array( $post ) && array_key_exists( 'ID', $post ) ? $post['ID'] : $post;
			$posts_to_exclude[] = $post_id;
			// Fixes the excerpt link for the featured post
			add_filter(
				'excerpt_more',
				function() use ( $post_id ) {
					return $this->link_excerpt_more( ' [&hellip;]', $post_id );
				}
			);

			$has_thumbnail_class = apply_filters( 'neve_featured_has_post_thumbnail', '', $post_id );
			$data                = [
				'post_id'    => 'post-' . $post_id,
				'post_class' => $this->post_class( $post_id, 'nv-ft-post ' . $has_thumbnail_class ),
				'content'    => $this->get_article_inner_content( $post_id ),
			];
			$this->get_view( 'archive-post', $data );

			remove_all_filters( 'excerpt_more' );
		}
		add_filter(
			'nv_exclude_posts',
			function () use ( $posts_to_exclude ) {
				return $posts_to_exclude;
			}
		);
		add_filter( 'excerpt_more', array( $this, 'link_excerpt_more' ) );
	}

	/**
	 * Render the post.
	 */
	public function render_post() {
		$args = array(
			'post_id'    => 'post-' . get_the_ID(),
			'post_class' => $this->post_class(),
			'content'    => $this->get_article_inner_content(),
		);

		$this->get_view( 'archive-post', $args );
	}

	/**
	 * Echo the post class.
	 *
	 * @param int | null $post_id Post id.
	 * @param string     $additional Additional classes.
	 */
	protected function post_class( $post_id = null, $additional = '' ) {
		$class     = join( ' ', get_post_class( '', $post_id ) );
		$post_type = get_post_type( $post_id );
		if ( $post_type === 'neve_custom_layouts' ) {
			return $class;
		}
		$layout = $this->get_layout();
		$class .= ' layout-' . $layout;
		if ( in_array( $layout, [ 'grid', 'covers' ], true ) ) {
			$class .= ' ' . $this->get_grid_columns_class();
		} else {
			$class .= ' col-12 ';
			if ( $post_id === null ) {
				$class .= ' nv-non-grid-article';
			}
		}

		$class .= ' ' . $additional;
		return $class;
	}

	/**
	 * Render inner content for <article>
	 *
	 * @param int | null $post_id Post id.
	 *
	 * @return string
	 */
	private function get_article_inner_content( $post_id = null ) {
		$markup            = '';
		$layout            = $this->get_layout();
		$is_featured_post  = $post_id !== null;
		$featured_template = in_array( $layout, [ 'alternative', 'default', 'grid' ], true ) ? 'tp1' : 'tp2';
		$default_order     = array(
			'thumbnail',
			'title-meta',
			'excerpt',
		);
		$order             = json_decode( get_theme_mod( 'neve_post_content_ordering', wp_json_encode( $default_order ) ) );

		if ( in_array( $layout, [ 'alternative', 'default' ], true ) || ( $is_featured_post && $featured_template === 'tp1' ) ) {
			if ( in_array( 'thumbnail', $order, true ) || ( $is_featured_post && $featured_template === 'tp1' ) ) {
				$markup .= $this->get_post_thumbnail( $post_id );
			}
			$markup .= '<div class="non-grid-content ' . esc_attr( $layout ) . '-layout-content">';
			$markup .= $this->get_ordered_content_parts( true, $post_id );
			$markup .= '</div>';

			return $markup;
		}

		if ( $layout === 'covers' ) {
			$style = '';
			if ( in_array( 'thumbnail', $order, true ) ) {
				$thumb  = get_the_post_thumbnail_url( $post_id );
				$style .= ! empty( $thumb ) ? 'background-image: url(' . esc_url( $thumb ) . ')' : '';
			}
			$markup .= '<div class="cover-post nv-post-thumbnail-wrap" style="' . esc_attr( $style ) . '">';
			$markup .= '<div class="inner">';
			$markup .= $this->get_ordered_content_parts( true, $post_id );
			$markup .= '</div>';
			$markup .= '</div>';

			return $markup;
		}

		return $this->get_ordered_content_parts( false, $post_id );
	}

	/**
	 * Render the post thumbnail.
	 *
	 * @param int | null $post_id Post id.
	 * @return string
	 */
	private function get_post_thumbnail( $post_id = null ) {
		if ( ! has_post_thumbnail( $post_id ) ) {
			return '';
		}

		global $neve_thumbnail_skip_lazy_added;

		/** This filter is documented in header-footer-grid/templates/components/component-logo.php */
		$should_add_skip_lazy = apply_filters( 'neve_skip_lazy', true );
		$image_class          = '';
		if ( $should_add_skip_lazy && ! isset( $neve_thumbnail_skip_lazy_added ) ) {
			$image_class                    = 'skip-lazy';
			$neve_thumbnail_skip_lazy_added = true;
		}

		$markup = '<div class="nv-post-thumbnail-wrap">';

		$markup .= '<a href="' . esc_url( get_the_permalink( $post_id ) ) . '" rel="bookmark" title="' . the_title_attribute(
			array(
				'echo' => false,
			)
		) . '">';

		$pid     = $post_id ? $post_id : get_the_ID();
		$markup .= get_the_post_thumbnail(
			$pid,
			'neve-blog',
			array( 'class' => $image_class )
		);
		$markup .= '</a>';
		$markup .= '</div>';

		return apply_filters( 'neve_blog_post_thumbnail_markup', $markup );
	}

	/**
	 * Get the posts layout.
	 *
	 * @return string
	 */
	private function get_layout() {
		$layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );

		if ( $layout !== 'default' ) {
			return $layout;
		}

		if ( get_theme_mod( 'neve_blog_list_alternative_layout', false ) === true ) {
			$layout = 'alternative';
		}

		return $layout;
	}

	/**
	 * Render title.
	 *
	 * @param int | null $post_id Post id.
	 *
	 * @return string
	 */
	private function get_title( $post_id = null ) {
		$markup = '<h2 class="blog-entry-title entry-title">';

		$markup .= '<a href="' . esc_url( get_the_permalink( $post_id ) ) . '" rel="bookmark">';
		$markup .= get_the_title( $post_id );
		$markup .= '</a>';
		$markup .= '</h2>';

		return $markup;
	}

	/**
	 * Render meta.
	 *
	 * @param int | null $post_id Post id.
	 *
	 * @return string
	 */
	private function get_meta( $post_id = null ) {
		$default_meta_order = wp_json_encode(
			array(
				'author',
				'date',
				'comments',
			)
		);

		$meta_order = get_theme_mod( 'neve_post_meta_ordering', $default_meta_order );

		$meta_order = is_string( $meta_order ) ? json_decode( $meta_order ) : $meta_order;

		ob_start();
		do_action( 'neve_post_meta_archive', $meta_order, true, $post_id );
		$meta = ob_get_clean();

		return $meta;
	}

	/**
	 * Render excerpt.
	 *
	 * @param int | null $post_id Post id.
	 * @return string
	 */
	private function get_excerpt( $post_id = null ) {
		ob_start();
		do_action( 'neve_excerpt_archive', 'index', $post_id );
		$excerpt = ob_get_clean();

		return $excerpt;
	}

	/**
	 * Get grid columns class.
	 *
	 * @return string
	 */
	private function get_grid_columns_class() {
		if ( neve_is_new_skin() ) {
			return '';
		}

		$classes    = '';
		$columns    = get_theme_mod(
			'neve_grid_layout',
			wp_json_encode(
				[
					'desktop' => 1,
					'tablet'  => 1,
					'mobile'  => 1,
				]
			)
		);
		$columns    = json_decode( $columns, true );
		$device_map = [
			'desktop' => 'md',
			'tablet'  => 'sm',
			'mobile'  => '',
		];

		foreach ( $columns as $device => $column_number ) {
			if ( $column_number === 0 || empty( $column_number ) ) {
				$column_number = 1;
			}
			$classes .= ' col-' . ( $device !== 'mobile' ? $device_map[ $device ] . '-' : '' ) . ( 12 / absint( $column_number ) );
		}

		return $classes;
	}

	/**
	 * Change link excerpt more.
	 *
	 * @param string     $moretag read more tag.
	 * @param int | null $post_id Post id.
	 * @return string
	 */
	public function link_excerpt_more( $moretag, $post_id = null ) {
		$new_moretag = '&hellip;&nbsp;';

		if ( $moretag !== ' [&hellip;]' ) {
			$new_moretag = '';
		}

		$read_more_args = apply_filters(
			'neve_read_more_args',
			array(
				'text'    => esc_html__( 'Read More', 'neve' ) . ' &raquo;',
				'classes' => '',
			)
		);

		$markup  = '<a href="' . esc_url( get_the_permalink( $post_id ) ) . '"';
		$markup .= ' class="' . esc_attr( $read_more_args['classes'] ) . '"';
		$markup .= ' rel="bookmark">';
		$markup .= esc_html( $read_more_args['text'] );
		$markup .= '<span class="screen-reader-text">' . get_the_title( $post_id ) . '</span>';
		$markup .= '</a>';

		if ( ! empty( $read_more_args['classes'] ) ) {
			$style  = neve_is_new_skin() ? '' : 'padding: 10px 0 0;';
			$markup = '<div class="read-more-wrapper" style="' . esc_attr( $style ) . '">' . $markup . '</div>';
		}

		$new_moretag .= $markup;

		return $new_moretag;
	}

	/**
	 * Get ordered content parts.
	 *
	 * @param bool       $exclude_thumbnail exclude thumbnail from order.
	 * @param int | null $post_id Post id.
	 * @return string
	 */
	private function get_ordered_content_parts( $exclude_thumbnail = false, $post_id = null ) {
		$markup        = '';
		$default_order = array(
			'thumbnail',
			'title-meta',
			'excerpt',
		);

		$order = get_theme_mod( 'neve_post_content_ordering', wp_json_encode( $default_order ) );
		$order = json_decode( $order, true );
		if ( $post_id !== null && in_array( 'thumbnail', $order, true ) ) {
			$key = array_search( 'thumbnail', $order );
			if ( $key !== false ) {
				unset( $order[ $key ] );
			}
			array_unshift( $order, 'thumbnail' );
		}

		foreach ( $order as $content_bit ) {
			switch ( $content_bit ) {
				case 'thumbnail':
					if ( $exclude_thumbnail ) {
						break;
					}
					$markup .= $this->get_post_thumbnail( $post_id );
					break;
				case 'title':
					$markup .= $this->get_title( $post_id );
					break;
				case 'meta':
					$markup .= $this->get_meta( $post_id );
					break;
				case 'title-meta':
					$markup .= $this->get_title( $post_id );
					$markup .= $this->get_meta( $post_id );
					break;
				case 'excerpt':
					$markup .= $this->get_excerpt( $post_id );
					$markup .= wp_link_pages(
						array(
							'before'      => '<div class="post-pages-links"><span>' . apply_filters( 'neve_page_link_before', esc_html__( 'Pages:', 'neve' ) ) . '</span>',
							'after'       => '</div>',
							'link_before' => '<span class="page-link">',
							'link_after'  => '</span>',
							'echo'        => false,
						)
					);
					break;
				default:
					break;
			}
		}

		return $markup;
	}
}
