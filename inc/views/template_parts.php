<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      27/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use Neve\Compatibility\WPML;
use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Config;
use Neve\Customizer\Defaults\Layout;
use Neve_Pro\Modules\Blog_Pro\Dynamic_Style;

/**
 * Class Template_Parts
 *
 * @package Neve\Views
 */
class Template_Parts extends Base_View {
	use Layout;

	/**
	 * Use to temporary disable excerpt functionality.
	 *
	 * @var bool
	 */
	private $disable_excerpt = false;
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'add_featured_post_style' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'add_vertical_spacing_style' ) );
		add_action( 'neve_do_featured_post', array( $this, 'render_featured_post' ) );
		add_action( 'neve_blog_post_template_part_content', array( $this, 'render_post' ) );
		add_filter( 'excerpt_more', array( $this, 'link_excerpt_more' ) );
		add_filter( 'the_content_more_link', array( $this, 'link_excerpt_more' ) );
		add_filter( 'render_block_data', array( $this, 'temporary_disable_excerpt_more' ), -99, 3 );
	}

	/**
	 * Checks if a query block has the excerpt more block added to avoid duplicate read more.
	 *
	 * @param array $block_data Block data.
	 * @param array $block_type Block type.
	 * @param array $attributes Block attributes.
	 *
	 * @return array
	 */
	public function temporary_disable_excerpt_more( $block_data, $block_type, $attributes ) {

		if ( 'core/post-excerpt' === $block_type['blockName'] ) {
			$this->disable_excerpt = true;
		}
		return $block_data;

	}

	/**
	 * Add vertical spacing inline style if the control has values.
	 */
	public function add_vertical_spacing_style() {
		if ( ! get_theme_mod( Config::MODS_CONTENT_VSPACING ) ) {
			return;
		}
		$inline_style = '.page .neve-main, .single:not(.single-product) .neve-main{ margin:var(--c-vspace) }';
		wp_add_inline_style( 'neve-style', Dynamic_Css::minify_css( $inline_style ) );
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
			'
			.nv-ft-post {
				margin-top:60px
			}
			.nv-ft-post .nv-ft-wrap:not(.layout-covers){
				background:var(--nv-light-bg);
			}
			.nv-ft-post h2{
				font-size:calc( var(--fontsize, var(--h2fontsize)) * 1.3)
			}
			.nv-ft-post .nv-meta-list{
				display:block
			}
			.nv-ft-post .non-grid-content{
				padding:32px
			}
			.nv-ft-post .wp-post-image{
				position:absolute;
				object-fit:cover;
				width:100%;
				height:100%
			}
			.nv-ft-post:not(.layout-covers) .nv-post-thumbnail-wrap{
				margin:0;
				position:relative;
				min-height:320px
			}
			'
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

		// If the query is for a paged result and not for the first page don't display featured post.
		if ( is_paged() ) {
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

			/**
			 * Filters the featured posts.
			 *
			 * @since 3.5.6
			 *
			 * @param array $posts Array of posts. The return value can be an array of posts or an array of post IDs.
			 */
			$posts = apply_filters( 'neve_filter_featured_posts', $posts );
		}

		if ( $target === 'sticky' ) {
			$posts = get_option( 'sticky_posts' );
		}

		if ( empty( $posts ) ) {
			return;
		}

		$wrapper_classes  = apply_filters( 'neve_posts_wrapper_class', [] );
		$posts_to_exclude = [];

		echo '<div class="' . esc_attr( join( ' ', $wrapper_classes ) ) . '">';
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
		echo '</div>';
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
		if ( ! in_array( $layout, [ 'grid', 'covers' ], true ) ) {
			$class .= ' col-12 ';
			if ( $post_id === null ) {
				$class .= ' nv-non-grid-article';
			}
		}

		// Filter the Core classes for missing components.
		$is_thumbnail_inactive = ! in_array( 'thumbnail', $this->get_ordered_components(), true );
		if ( $is_thumbnail_inactive ) {
			$class = str_replace( 'has-post-thumbnail', '', $class );
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

		$is_thumbnail_active = in_array( 'thumbnail', $this->get_ordered_components(), true );

		if ( in_array( $layout, [ 'alternative', 'default' ], true ) || ( $is_featured_post && $featured_template === 'tp1' ) ) {
			$markup .= '<div class="' . esc_attr( $layout ) . '-post nv-ft-wrap">';
			if ( $is_thumbnail_active || ( $is_featured_post && $featured_template === 'tp1' ) ) {
				$markup .= $this->get_post_thumbnail( $post_id );
			}
			$markup .= '<div class="non-grid-content ' . esc_attr( $layout ) . '-layout-content">';
			$markup .= $this->get_ordered_content_parts( true, $post_id );
			$markup .= '</div>';
			$markup .= '</div>';

			return $markup;
		}

		if ( $layout === 'covers' ) {
			$markup .= '<div class="cover-post nv-ft-wrap">';
			$markup .= '<div class="cover-overlay"></div>';
			if ( $is_thumbnail_active ) {
				$markup .= $this->get_post_thumbnail( $post_id, true );
			}
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
	 * @param bool       $skip_link Flag to skip wrapping post image in a tag.
	 *
	 * @return string
	 */
	private function get_post_thumbnail( $post_id = null, $skip_link = false ) {
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

		$image_wrap_classes = $this->get_image_wrap_classes();
		$markup             = '<div class="' . esc_attr( $image_wrap_classes ) . '">';

		if ( ! $skip_link ) {
			$markup .= '<a href="' . esc_url( get_the_permalink( $post_id ) ) . '" rel="bookmark" title="' . the_title_attribute(
				array(
					'echo' => false,
				)
			) . '">';
		}

		$pid     = $post_id ? $post_id : get_the_ID();
		$markup .= get_the_post_thumbnail(
			$pid,
			'neve-blog',
			array( 'class' => $image_class )
		);
		if ( ! $skip_link ) {
			$markup .= '</a>';
		}
		$markup .= '</div>';

		return apply_filters( 'neve_blog_post_thumbnail_markup', $markup );
	}

	/**
	 * Get css classes for post image wrap.
	 *
	 * @return string
	 */
	private function get_image_wrap_classes() {
		$post_classes = [ 'nv-post-thumbnail-wrap', 'img-wrap' ];

		if ( defined( 'NEVE_PRO_VERSION' ) ) {
			$blog_image_hover = get_theme_mod( 'neve_blog_image_hover', 'none' );
			if ( $blog_image_hover !== 'none' ) {
				$post_classes[] = $blog_image_hover;
			}
		}
		return esc_attr( implode( ' ', $post_classes ) );
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
	 * @return string | bool
	 */
	private function get_meta( $post_id = null ) {
		$default       = wp_json_encode( [ 'author', 'date', 'comments' ] );
		$default_value = neve_get_default_meta_value( 'neve_post_meta_ordering', $default );
		$meta_order    = get_theme_mod( 'neve_blog_post_meta_fields', wp_json_encode( $default_value ) );

		if ( ! is_array( $meta_order ) ) {
			$meta_order = json_decode( $meta_order );
			if ( empty( $meta_order ) ) {
				return false;
			}
		}

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
	 * Change link excerpt more.
	 *
	 * @param string     $moretag read more tag.
	 * @param int | null $post_id Post id.
	 * @return string
	 */
	public function link_excerpt_more( $moretag, $post_id = null ) {


		if ( $this->disable_excerpt ) {
			$this->disable_excerpt = false;
			return $moretag;
		}

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
			$markup = '<div class="read-more-wrapper">' . $markup . '</div>';
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
		$markup             = '';
		$ordered_components = $this->get_ordered_components( true );

		if ( $post_id !== null && in_array( 'thumbnail', $ordered_components, true ) ) {
			$key = array_search( 'thumbnail', $ordered_components );
			if ( $key !== false ) {
				unset( $ordered_components[ $key ] );
			}
			array_unshift( $ordered_components, 'thumbnail' );
		}

		foreach ( $ordered_components as $content_bit ) {
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

	/**
	 * Get components (thumbnail, title, meta, excerpt) in the order they are set in the Customizer.
	 *
	 * @param bool $associative Whether to return an associative array or not.
	 *
	 * @return mixed
	 */
	public function get_ordered_components( $associative = false ) {
		$default_ordered_components = array(
			'thumbnail',
			'title-meta',
			'excerpt',
		);

		return json_decode( get_theme_mod( 'neve_post_content_ordering', wp_json_encode( $default_ordered_components ) ), $associative );
	}
}
