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
use Neve\Customizer\Options\Layout_Single_Post;

/**
 * Class Post_Layout
 *
 * @package Neve\Views
 */
class Post_Layout extends Base_View {

	const POST_COVER_HEIGHT                 = 'neve_post_cover_height';
	const POST_COVER_PADDING                = 'neve_post_cover_padding';
	const POST_COVER_BACKGROUND_COLOR       = 'neve_post_cover_background_color';
	const POST_COVER_OVERLAY_OPACITY        = 'neve_post_cover_overlay_opacity';
	const POST_COVER_TEXT_COLOR             = 'neve_post_cover_text_color';
	const POST_COVER_BLEND_MODE             = 'neve_post_cover_blend_mode';
	const POST_COVER_BOXED_TITLE_PADDING    = 'neve_post_cover_boxed_title_padding';
	const POST_COVER_BOXED_TITLE_BACKGROUND = 'neve_post_cover_boxed_title_background';

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'neve_do_single_post', array( $this, 'render_post' ) );
		add_action( 'neve_after_header_wrapper_hook', array( $this, 'render_cover_header' ) );
		add_filter( 'neve_style_subscribers', array( $this, 'add_subscribers' ) );
		add_filter( 'neve_post_title_alignment', array( $this, 'align_post_title' ) );
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

		$content_order = apply_filters( 'neve_layout_single_post_elements_order', $content_order );


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

		if ( empty( $content_order ) ) {
			return;
		}

		$content_order_length = count( $content_order );
		$header_layout        = get_theme_mod( 'neve_post_header_layout', 'normal' );
		foreach ( $content_order as $index => $item ) {
			switch ( $item ) {
				case 'title-meta':
					if ( $header_layout !== 'normal' ) {
						break;
					}
					$this->render_entry_header();
					break;
				case 'thumbnail':
					if ( $header_layout !== 'normal' ) {
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
					if ( $index !== $content_order_length - 1 && $content_order[ $index + 1 ] === 'meta' ) {
						$this->render_entry_header();
						break;
					}
					$this->render_entry_header( false );
					break;
				case 'meta':
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
		$default_meta_order = wp_json_encode(
			array(
				'author',
				'date',
				'comments',
			)
		);

		$meta_order = get_theme_mod( 'neve_post_meta_ordering', $default_meta_order );
		$meta_order = is_string( $meta_order ) ? json_decode( $meta_order ) : $meta_order;
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

		$alignment   = apply_filters( 'neve_post_title_alignment', '' );
		$position    = $this->get_alignment_classes( 'neve_post_title_position', Layout_Single_Post::post_title_position_default() );
		$cover_style = $this->get_cover_style();

		$container_classes = [
			'nv-cover-container',
			'single-post-container',
			$position,
		];
		$container_mode    = get_theme_mod( 'neve_post_cover_container', 'contained' );
		if ( $container_mode !== 'full-width' ) {
			$container_classes[] = 'container';
		}

		$title_meta_wrap_classes = [
			'nv-title-meta-wrap',
		];
		$title_mode              = get_theme_mod( 'neve_post_cover_boxed_title', true );
		if ( $title_meta_wrap_classes ) {
			$title_meta_wrap_classes[] = 'is-boxed';
		}

		echo '<div class="nv-post-cover ' . esc_attr( $alignment ) . '"';
		if ( ! empty( $cover_style ) ) {
			echo ' style="' . esc_attr( $cover_style ) . '"';
		}
		echo '>';
		echo '<div class="nv-overlay"></div>';
		echo '<div class="' . esc_attr( implode( ' ', $container_classes ) ) . '">';
		echo '<div class="' . esc_attr( implode( ' ', $title_meta_wrap_classes ) ) . '">';
		do_action( 'neve_before_post_title' );
		echo '<h1 class="title entry-title">' . wp_kses_post( get_the_title() ) . '</h1>';
		self::render_post_meta();
		echo '</div>';
		echo '</div>';
		echo '</div>';
	}

	/**
	 * Filter that handles the post title alignment.
	 *
	 * @return string
	 */
	public function align_post_title( $classes ) {
		$title_alignment_classes = $this->get_alignment_classes( 'neve_post_title_alignment', Layout_Single_Post::post_title_alignment_default() );
		if ( empty( $title_alignment_classes ) ) {
			return $classes;
		}
		return $classes . ' ' . $title_alignment_classes;
	}

	/**
	 * Get alignment classes for the title on the cover layout.
	 *
	 * @param string $theme_mod Theme mod id.
	 * @param string $default   The default value for the control.
	 *
	 * @return string
	 */
	private function get_alignment_classes( $theme_mod, $default = null ) {
		$classes = array();

		$title_alignment = get_theme_mod( $theme_mod, $default );
		if ( empty( $title_alignment ) ) {
			return '';
		}

		foreach ( $title_alignment as $device_slug => $align_slug ) {
			$classes[] = $device_slug . '-' . $align_slug;
		}

		return implode( ' ', $classes );
	}

	/**
	 * Get the background style for the cover layout.
	 *
	 * @return string
	 */
	private function get_cover_style() {
		$hide_thumbnail = get_theme_mod( 'neve_post_cover_hide_thumbnail', false );
		if ( $hide_thumbnail ) {
			return '';
		}
		$cover_style = [];

		$post_thumbnail = get_the_post_thumbnail_url();
		if ( ! empty( $post_thumbnail ) ) {
			$cover_style['background-image']    = 'url("' . esc_url( $post_thumbnail ) . '")';
			$cover_style['background-size']     = 'cover';
			$cover_style['background-repeat']   = 'no-repeat';
			$cover_style['background-position'] = 'center';
		}

		return $this->get_inline_style( $cover_style );
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
	 * Add dynamic style subscribers.
	 *
	 * @param array $subscribers Css subscribers.
	 *
	 * @return array|mixed
	 */
	public function add_subscribers( $subscribers = [] ) {

		$cover_padding_default                          = Layout_Single_Post::cover_padding_default();
		$subscribers['body.single-post .nv-post-cover'] = [
			Config::CSS_PROP_MIN_HEIGHT => [
				Dynamic_Selector::META_KEY           => self::POST_COVER_HEIGHT,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'responsive_suffix',
				Dynamic_Selector::META_AS_JSON       => true,
				Dynamic_Selector::META_DEFAULT       => '{ "mobile": "300", "tablet": "300", "desktop": "300" }',
			],
			Config::CSS_PROP_COLOR      => [
				Dynamic_Selector::META_KEY     => self::POST_COVER_TEXT_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-text-dark-bg)',
			],
		];

		$subscribers['body.single-post .nv-post-cover .nv-overlay'] = [
			Config::CSS_PROP_BACKGROUND_COLOR => [
				Dynamic_Selector::META_KEY     => self::POST_COVER_BACKGROUND_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-dark-bg)',
			],
			Config::CSS_PROP_MIX_BLEND_MODE   => [
				Dynamic_Selector::META_KEY     => self::POST_COVER_BLEND_MODE,
				Dynamic_Selector::META_DEFAULT => 'overlay',
			],
			Config::CSS_PROP_OPACITY          => [
				Dynamic_Selector::META_KEY           => self::POST_COVER_OVERLAY_OPACITY,
				Dynamic_Selector::META_DEFAULT       => '{ "mobile": "0", "tablet": "0", "desktop": "0" }',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
			],
		];


		$subscribers['body.single-post .nv-post-cover .nv-meta-list li, body.single-post .nv-post-cover .nv-meta-list a'] = [
			Config::CSS_PROP_COLOR => [
				Dynamic_Selector::META_KEY     => self::POST_COVER_TEXT_COLOR,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-text-dark-bg)',
			],
		];

		$subscribers['.nv-title-meta-wrap.is-boxed'] = [
			Config::CSS_PROP_PADDING          => [
				Dynamic_Selector::META_KEY           => self::POST_COVER_BOXED_TITLE_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'responsive_unit',
				Dynamic_Selector::META_DEFAULT       => $cover_padding_default,
			],
			Config::CSS_PROP_BACKGROUND_COLOR => [
				Dynamic_Selector::META_KEY     => self::POST_COVER_BOXED_TITLE_BACKGROUND,
				Dynamic_Selector::META_DEFAULT => 'var(--nv-dark-bg)',
			],
		];

		$subscribers['body.single-post .nv-post-cover .nv-cover-container'] = [
			Config::CSS_PROP_PADDING => [
				Dynamic_Selector::META_KEY           => self::POST_COVER_PADDING,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'responsive_unit',
				Dynamic_Selector::META_DEFAULT       => $cover_padding_default,
			],
		];

		return $subscribers;
	}
}
