<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      27/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

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
		add_action( 'neve_blog_post_template_part_content', array( $this, 'render_post' ) );
		add_filter( 'excerpt_more', array( $this, 'link_excerpt_more' ) );
		add_filter( 'the_content_more_link', array( $this, 'link_excerpt_more' ) );
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
	 */
	private function post_class() {
		$class = join( ' ', get_post_class() );

		$box_shadow = (int) $this->get_box_shadow();
		if ( $box_shadow !== 0 ) {
			$class .= ' nv-shadow-' . $box_shadow;
		}
		$class .= ' col-12 layout-' . $this->get_layout();
		if ( $this->get_layout() === 'grid' ) {
			$class .= ' ' . $this->get_grid_columns_class();
		} else {
			$class .= ' nv-non-grid-article';
		}
		return $class;
	}

	/**
	 * Render inner content for <article>
	 *
	 * @return string
	 */
	private function get_article_inner_content() {
		$markup = '';

		if ( $this->get_layout() !== 'grid' ) {
			$markup .= $this->get_post_thumbnail();
			$markup .= '<div class="non-grid-content ' . esc_attr( $this->get_layout() ) . '-layout-content">';
			$markup .= $this->get_title();
			$markup .= $this->get_meta();
			$markup .= $this->get_excerpt();
			$markup .= wp_link_pages(
				array(
					'before'      => '<div class="post-pages-links"><span>' . apply_filters( 'neve_page_link_before', esc_html__( 'Pages:', 'neve' ) ) . '</span>',
					'after'       => '</div>',
					'link_before' => '<span class="page-link">',
					'link_after'  => '</span>',
					'echo'        => false,
				)
			);
			$markup .= '</div>';

			return $markup;
		}

		$default_order = array(
			'thumbnail',
			'title-meta',
			'excerpt',
		);
		$order         = get_theme_mod( 'neve_post_content_ordering', json_encode( $default_order ) );
		$order         = json_decode( $order, true );
		foreach ( $order as $content_bit ) {
			switch ( $content_bit ) {
				case 'thumbnail':
					$markup .= $this->get_post_thumbnail();
					break;
				case 'title':
					$markup .= $this->get_title();
					break;
				case 'meta':
					$markup .= $this->get_meta();
					break;
				case 'title-meta':
					$markup .= $this->get_title();
					$markup .= $this->get_meta();
					break;
				case 'excerpt':
					$markup .= $this->get_excerpt();
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

	/**
	 * Render the post thumbnail.
	 *
	 * @return string
	 */
	private function get_post_thumbnail() {
		if ( ! has_post_thumbnail() ) {
			return '';
		}
		$markup = '<div class="nv-post-thumbnail-wrap">';

		$markup .= '<a href="' . esc_url( get_the_permalink() ) . '" rel="bookmark" title="' . the_title_attribute(
			array(
				'echo' => false,
			)
		) . '">';
		$markup .= get_the_post_thumbnail(
			get_the_ID(),
			'neve-blog'
		);
		$markup .= '</a>';
		$markup .= '</div>';

		return $markup;
	}

	/**
	 * Get box shadow type.
	 */
	private function get_box_shadow() {
		return get_theme_mod( 'neve_post_thumbnail_box_shadow', 0 );
	}

	/**
	 * Get the posts layout.
	 *
	 * @return string
	 */
	private function get_layout() {
		return get_theme_mod( 'neve_blog_archive_layout', 'grid' );
	}

	/**
	 * Render title.
	 *
	 * @return string
	 */
	private function get_title() {
		$markup = '';

		$markup .= '<h2 class="blog-entry-title entry-title">';
		$markup .= '<a href="' . esc_url( get_the_permalink() ) . '" rel="bookmark">';
		$markup .= get_the_title();
		$markup .= '</a>';
		$markup .= '</h2>';

		return $markup;
	}

	/**
	 * Render meta.
	 *
	 * @return string
	 */
	private function get_meta() {
		$default_meta_order = json_encode(
			array(
				'author',
				'date',
				'comments',
			)
		);

		$meta_order = get_theme_mod( 'neve_post_meta_ordering', $default_meta_order );
		$meta_order = json_decode( $meta_order );

		ob_start();
		do_action( 'neve_post_meta_archive', $meta_order );
		$meta = ob_get_clean();

		return $meta;
	}

	/**
	 * Render excerpt.
	 *
	 * @return string
	 */
	private function get_excerpt() {
		ob_start();
		do_action( 'neve_excerpt_archive', 'index' );
		$excerpt = ob_get_clean();

		return $excerpt;
	}

	/**
	 * Get grid columns class.
	 *
	 * @return string
	 */
	private function get_grid_columns_class() {
		$column_numbers = get_theme_mod( 'neve_grid_layout', 1 );
		if ( $column_numbers === 0 ) {
			$column_numbers = 1;
		}

		return 'col-sm-' . ( 12 / absint( $column_numbers ) );
	}

	/**
	 * Change link excerpt more.
	 *
	 * @param string $moretag read more tag.
	 *
	 * @return string
	 */
	public function link_excerpt_more( $moretag ) {

		$new_moretag = '&hellip;&nbsp;';

		if ( isset( $moretag ) && ( $moretag !== ' [&hellip;]' ) ) {
			$new_moretag = '';
		}

		$read_more_args = apply_filters(
			'neve_read_more_args',
			array(
				'text'    => esc_html__( 'Read More', 'neve' ) . ' &raquo;',
				'classes' => '',
			)
		);

		$markup  = '<a href="' . esc_url( get_the_permalink() ) . '"';
		$markup .= ' class="' . esc_attr( $read_more_args['classes'] ) . '"';
		$markup .= ' rel="bookmark">';
		$markup .= esc_html( $read_more_args['text'] );
		$markup .= '<span class="screen-reader-text">' . get_the_title() . '</span>';
		$markup .= '</a>';

		if ( ! empty( $read_more_args['classes'] ) ) {
			$markup = '<div class="read-more-wrapper" style="padding: 10px 0 0;">' . $markup . '</div>';
		}

		$new_moretag .= $markup;

		return $new_moretag;
	}
}
