<?php
/**
 * Handles post meta for metabox.
 *
 * @package Neve\Views\Pluggable
 */

namespace Neve\Views\Pluggable;

use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Dynamic_Selector;

/**
 * Class Metabox_Settings
 *
 * @package Neve\Views\Pluggable
 */
class Metabox_Settings {

	/**
	 * Context mapping for the post meta.
	 *
	 * @var array
	 */
	private $context_mapping = array(
		'header'         => 'neve_meta_disable_header',
		'title'          => 'neve_meta_disable_title',
		'featured-image' => 'neve_meta_disable_featured_image',
		'footer'         => 'neve_meta_disable_footer',
	);

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_filter( 'neve_sidebar_position', array( $this, 'filter_sidebar_position' ) );
		add_filter( 'neve_container_class_filter', array( $this, 'filter_container_class' ), 100 );
		add_filter( 'body_class', array( $this, 'body_classes' ) );
		add_filter( 'neve_filter_toggle_content_parts', array( $this, 'filter_components_toggle' ), 100, 2 );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_content_width' ), 100 );
		add_action( 'wp_enqueue_scripts', array( $this, 'content_width' ), 999 );


		add_filter( 'neve_layout_single_post_elements_order', array( $this, 'filter_post_elements' ) );
		add_filter( 'neve_post_title_alignment', array( $this, 'filter_title_alignment' ) );
		add_filter( 'neve_display_author_avatar', array( $this, 'filter_author_avatar_display' ) );
	}

	/**
	 * Check if we should account for the meta settings.
	 *
	 * @return bool
	 */
	private function has_settings() {
		if ( ! is_single() && ! is_page() && ! $this->is_blog_static() ) {
			return false;
		}

		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return false;
		}

		return true;
	}

	/**
	 * Add body classes contextually.
	 *
	 * @param array $classes the body classes.
	 *
	 * @return array
	 */
	public function body_classes( $classes ) {

		if ( ! $this->has_settings() ) {
			return $classes;
		}

		$post_id = $this->get_post_id();

		foreach ( $this->context_mapping as $context => $meta_key ) {
			$meta_value = get_post_meta( $post_id, $meta_key, true );

			if ( empty( $meta_value ) ) {
				continue;
			}

			if ( $meta_value === 'on' ) {
				$classes[] = 'nv-without-' . $context;
			}
		}

		return $classes;
	}

	/**
	 * Get content width, if any.
	 *
	 * @return int|bool Content width.
	 */
	public function get_content_width() {
		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return false;
		}

		$content_width_status = get_post_meta( $post_id, 'neve_meta_enable_content_width', true );
		$content_width_status = empty( $content_width_status ) ? $this->get_content_width_status_default() : $content_width_status;
		if ( $content_width_status !== 'on' ) {
			return false;
		}

		return get_post_meta( $post_id, 'neve_meta_content_width', true );

	}

	/**
	 * Get continer type for current post.
	 *
	 * @return mixed|string
	 */
	public function get_container_type() {

		$post_id = $this->get_post_id();

		$meta_value = get_post_meta( $post_id, 'neve_meta_container', true );

		if ( empty( $meta_value ) || $meta_value === 'default' ) {
			return '';
		}
		if ( $post_id === false ) {
			return '';
		}

		return $meta_value;
	}

	/**
	 * Return container type for the selected post.
	 *
	 * @return string
	 */
	public function get_current_layout() {
		$container = $this->get_container_type();

		// Check customizer container type based on the context.
		if ( empty( $container ) ) {
			global $post_type;
			$container = $post_type === 'post' ? Mods::get( Config::MODS_SINGLE_POST_CONTAINER_STYLE, 'contained' ) : Mods::get( Config::MODS_DEFAULT_CONTAINER_STYLE, 'contained' );
		}

		return $container;
	}

	/**
	 * Set editor width.
	 */
	public function editor_content_width() {
		$meta_value = $this->get_content_width();
		$container  = $this->get_current_layout();


		// If contained, we set the block max-width based on the desktop container width.
		if ( $container === 'contained' ) {
			$editor_width = Mods::get( Config::MODS_CONTAINER_WIDTH );
			$editor_width = isset( $editor_width['desktop'] ) ? (int) $editor_width['desktop'] : 1170;
			if ( empty( $meta_value ) ) {
				$meta_value = $this->get_content_width_default();
			}
			$editor_width_normal = round( ( $meta_value / 100 ) * $editor_width ) . 'px';
		} else {
			// For full-width container, we use the content percent value.
			$editor_width_normal = ( empty( $meta_value ) ? 100 : $meta_value ) . '%';
		}


		$style = sprintf(
			'
			/* Main column width */
			.wp-block {
			    max-width: %s;
			}

			.wp-block[data-align="wide"] {
			    max-width: 70vw;
			}

			.wp-block[data-align="full"] {
			    max-width: none;
			}
			',
			$editor_width_normal
		);


		wp_add_inline_style( 'neve-gutenberg-style', $style );


	}

	/**
	 * Add content width.
	 */
	public function content_width() {
		$meta_value = (int) $this->get_content_width();

		if ( empty( $meta_value ) ) {
			return;
		}

		$sidebar_width   = 100 - absint( $meta_value );
		$container       = $this->get_current_layout();
		$container_class = $container === 'contained' ? ' .container ' : ' .container-fluid ';
		// Add the `!important` if in customizer, so that the live refresh doesn't affect this.
		$important = '';
		if ( is_customize_preview() ) {
			$important = '!important';
		}
		$max_width = Mods::to_json( Config::MODS_CONTAINER_WIDTH );
		$extra_css = '';
		if ( $container === 'contained' ) {
			$extra_css = sprintf(
				'
			#content.neve-main .container .alignfull > [class*="__inner-container"],#content.neve-main .alignwide > [class*="__inner-container"]{
				max-width: %s;
			}
			@media(min-width: 576px){
				#content.neve-main .container .alignfull > [class*="__inner-container"],#content.neve-main .alignwide > [class*="__inner-container"]{
					max-width: %s;
				}
			}
			',
				( $max_width[ Dynamic_Selector::MOBILE ] - Config::CONTENT_DEFAULT_PADDING ) . 'px',
				( $max_width[ Dynamic_Selector::TABLET ] - Config::CONTENT_DEFAULT_PADDING ) . 'px'
			);
		}

		$desktop_value = $container === 'contained'
			? round( ( $meta_value / 100 ) * $max_width[ Dynamic_Selector::DESKTOP ] - Config::CONTENT_DEFAULT_PADDING ) . 'px'
			: 'calc(' . $meta_value . '% + ' . ( Config::CONTENT_DEFAULT_PADDING / 2 ) . 'px)';


		$style = $extra_css . '
		@media(min-width: 960px) {
			#content.neve-main ' . esc_attr( $container_class ) . '.alignfull > [class*="__inner-container"],#content.neve-main ' . esc_attr( $container_class ) . ' .alignwide > [class*="__inner-container"]{
				max-width: ' . $desktop_value . ';
			}
			#content.neve-main > ' . esc_attr( $container_class ) . ' > .row > .col{ max-width: ' . absint( $meta_value ) . '%' . esc_attr( $important ) . '; }
			#content.neve-main > ' . esc_attr( $container_class ) . ' > .row > .nv-sidebar-wrap,
			#content.neve-main > ' . esc_attr( $container_class ) . ' > .row > .nv-sidebar-wrap.shop-sidebar { max-width: ' . absint( $sidebar_width ) . '%' . esc_attr( $important ) . '; }
		}
		';

		wp_add_inline_style( 'neve-style', Dynamic_Css::minify_css( $style ) );
	}

	/**
	 * Filter components that will be shown.
	 *
	 * @param bool   $status the status of the component.
	 * @param string $context context of the filter.
	 *
	 * @return bool
	 */
	public function filter_components_toggle( $status, $context ) {

		if ( ! $this->has_settings() ) {
			return $status;
		}

		$post_id = $this->get_post_id();

		/* If context isn't valid, bail. */
		if ( ! array_key_exists( $context, $this->context_mapping ) ) {
			return $status;
		}

		$meta_value = get_post_meta( $post_id, $this->context_mapping[ $context ], true );

		if ( empty( $meta_value ) ) {
			return $status;
		}

		if ( $meta_value === 'on' ) {
			return false;
		}

		return true;
	}

	/**
	 * Change sidebar position based on meta.
	 *
	 * @param string $position sidebar position coming from filter.
	 *
	 * @return mixed
	 */
	public function filter_sidebar_position( $position ) {
		if (
			! is_single()
			&& ! is_page()
			&& ( class_exists( 'WooCommerce', false ) && ! is_shop() )
			&& ! $this->is_blog_static() ) {
			return $position;
		}

		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return $position;
		}

		$meta_value = get_post_meta( $post_id, 'neve_meta_sidebar', true );
		if ( empty( $meta_value ) || $meta_value === 'default' ) {
			return $position;
		}

		return $meta_value;
	}

	/**
	 * Filter the container class based on meta.
	 *
	 * @param string $class container class.
	 *
	 * @return string
	 */
	public function filter_container_class( $class ) {

		// Don't filter on blog.
		if ( ! is_single() && ! is_page() && ! $this->is_blog_static() ) {
			return $class;
		}

		$meta_value = $this->get_container_type();

		if ( empty( $meta_value ) ) {
			return $class;
		}

		// Add `set-in-metabox` so that we don't affect this in customizer with live refresh.
		$customizer_context = '';
		if ( is_customize_preview() ) {
			$customizer_context = ' set-in-metabox ';
		}

		if ( $meta_value === 'contained' ) {
			return $customizer_context . ' container';
		} elseif ( $meta_value === 'full-width' ) {
			return $customizer_context . ' container-fluid';
		}

		return $class;
	}

	/**
	 * Get the post id.
	 *
	 * @return bool|string
	 */
	private function get_post_id() {
		if ( $this->is_blog_static() ) {
			return get_option( 'page_for_posts' );
		}

		if ( is_search() ) {
			return false;
		}

		if ( is_home() ) {
			return false;
		}

		global $post;
		if ( empty( $post ) ) {
			return false;
		}

		$post_id = apply_filters( 'neve_post_meta_filters_post_id', $post->ID );

		if ( ! isset( $post_id ) ) {
			return false;
		}

		return $post_id;
	}

	/**
	 * Check if the blog is set to a static page.
	 *
	 * @return bool
	 */
	private function is_blog_static() {
		return ( get_option( 'show_on_front' ) === 'page' && is_home() );
	}

	/**
	 * Get content width status default.
	 *
	 * @return string
	 */
	private function get_content_width_status_default() {
		if ( (int) $this->get_post_id() === (int) get_option( 'woocommerce_checkout_page_id' ) ) {
			return 'on';
		}

		return '';
	}

	/**
	 * Get content width status.
	 *
	 * @return int|string
	 */
	private function get_content_width_default() {
		if ( (int) $this->get_post_id() === (int) get_option( 'woocommerce_checkout_page_id' ) ) {
			return 100;
		}

		return 70;
	}

	/**
	 * Post elements order for title components.
	 *
	 * @param array $elements_order Elements order before this filter.
	 *
	 * @return array
	 */
	public function filter_post_elements( $elements_order ) {
		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return $elements_order;
		}

		$meta_elements_order = get_post_meta( $post_id, 'neve_post_elements_order', true );
		if ( empty( $meta_elements_order ) ) {
			return $elements_order;
		}

		return json_decode( $meta_elements_order, true );
	}

	/**
	 * Filter title alignment.
	 *
	 * @param string $alignment Title alignment.
	 *
	 * @return mixed
	 */
	public function filter_title_alignment( $alignment ) {
		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return $alignment;
		}

		$title_meta_alignment = get_post_meta( $post_id, 'neve_meta_title_alignment', true );
		if ( ! empty( $title_meta_alignment ) ) {
			return 'has-text-align-' . $title_meta_alignment;
		}
		return $alignment;
	}

	/**
	 * Filter the display of author avatar
	 *
	 * @param bool $show_avatar Display avatar flag.
	 *
	 * @return bool
	 */
	public function filter_author_avatar_display( $show_avatar ) {

		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return $show_avatar;
		}
		$show_author_avatar = get_post_meta( $post_id, 'neve_meta_author_avatar', true );

		if ( ! empty( $show_author_avatar ) ) {
			return $show_author_avatar === 'on';
		}

		return $show_avatar;
	}
}
