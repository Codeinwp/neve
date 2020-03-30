<?php
/**
 * Handles post meta for metabox.
 *
 * @package Neve\Views\Pluggable
 */

namespace Neve\Views\Pluggable;

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
		add_action( 'wp_enqueue_scripts', array( $this, 'content_width' ), 999 );
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
	 * Add content width.
	 */
	public function content_width() {
		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return;
		}

		$content_width_status = get_post_meta( $post_id, 'neve_meta_enable_content_width', true );
		$content_width_status = empty( $content_width_status ) ? $this->get_content_width_status_default() : $content_width_status;
		if ( $content_width_status !== 'on' ) {
			return;
		}

		$meta_value = get_post_meta( $post_id, 'neve_meta_content_width', true );
		$meta_value = empty( $meta_value ) ? $this->get_content_width_default() : $meta_value;

		if ( empty( $meta_value ) ) {
			return;
		}

		$sidebar_width = 100 - absint( $meta_value );

		// Add the `!important` if in customizer, so that the live refresh doesn't affect this.
		$important = '';
		if ( is_customize_preview() ) {
			$important = '!important';
		}

		$style = '@media(min-width: 960px) {
			#content.neve-main > .container > .row > .col, 
			#content.neve-main > .container-fluid > .row > .col { max-width: ' . absint( $meta_value ) . '%' . esc_attr( $important ) . '; } 
			#content.neve-main > .container > .row > .nv-sidebar-wrap, 
			#content.neve-main > .container > .row > .nv-sidebar-wrap.shop-sidebar,
			#content.neve-main > .container-fluid > .row > .nv-sidebar-wrap, 
			#content.neve-main > .container-fluid > .row > .nv-sidebar-wrap.shop-sidebar { max-width: ' . absint( $sidebar_width ) . '%' . esc_attr( $important ) . '; }
		}';

		wp_add_inline_style( 'neve-style', $style );
	}

	/**
	 * Filter components that will be shown.
	 *
	 * @param bool   $status  the status of the component.
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
		$meta_value = empty( $meta_value ) ? $this->get_sidebar_default() : $meta_value;
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

		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return $class;
		}

		$meta_value = get_post_meta( $post_id, 'neve_meta_container', true );

		if ( empty( $meta_value ) || $meta_value === 'default' ) {
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
	 * Get sidebar default.
	 *
	 * @return string
	 */
	private function get_sidebar_default() {
		if ( (int) $this->get_post_id() === (int) get_option( 'woocommerce_checkout_page_id' ) ) {
			return 'full-width';
		}

		return '';
	}
}
