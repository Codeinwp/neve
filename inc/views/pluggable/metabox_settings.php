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
	const CONTENT_WIDTH          = 'neve_meta_content_width';
	const ENABLE_CONTENT_WIDTH   = 'neve_meta_enable_content_width';
	const CONTAINER              = 'neve_meta_container';
	const SIDEBAR                = 'neve_meta_sidebar';
	const TITLE_ALIGNMENT        = 'neve_meta_title_alignment';
	const DISABLE_HEADER         = 'neve_meta_disable_header';
	const DISABLE_TITLE          = 'neve_meta_disable_title';
	const DISABLE_FEATURED_IMAGE = 'neve_meta_disable_featured_image';
	const DISABLE_FOOTER         = 'neve_meta_disable_footer';
	const ELEMENTS_ORDER         = 'neve_post_elements_order';
	const SHOW_AVATAR            = 'neve_meta_author_avatar';
	/**
	 * Context mapping for the post meta.
	 *
	 * @var array
	 */
	private $context_mapping = array(
		'header'         => self::DISABLE_HEADER,
		'title'          => self::DISABLE_TITLE,
		'featured-image' => self::DISABLE_FEATURED_IMAGE,
		'footer'         => self::DISABLE_FOOTER,
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

		add_filter(
			'ti_tpc_template_meta',
			function () {
				return [
					self::SHOW_AVATAR,
					self::ELEMENTS_ORDER,
					self::DISABLE_FOOTER,
					self::DISABLE_FEATURED_IMAGE,
					self::DISABLE_TITLE,
					self::DISABLE_HEADER,
					self::TITLE_ALIGNMENT,
					self::SIDEBAR,
					self::CONTAINER,
					self::ENABLE_CONTENT_WIDTH,
					self::CONTENT_WIDTH,
				];
			}
		);
		add_filter( 'neve_layout_single_post_elements_order', array( $this, 'filter_post_elements' ) );
		add_filter( 'neve_title_alignment_style', array( $this, 'filter_title_alignment_style' ), 10, 2 );
		add_filter( 'neve_display_author_avatar', array( $this, 'filter_author_avatar_display' ), 15 );
		add_filter( 'neve_meta_content_width', array( $this, 'get_content_width' ) );
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
	 * Check if we should account for the meta settings.
	 *
	 * @return bool
	 */
	private function has_settings() {
		if (
			! is_single() &&
			! is_page() &&
			! $this->is_blog_static() &&
			$this->is_not_woo_shop()
		) {
			return false;
		}

		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return false;
		}

		return true;
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
	 * Get the post id.
	 *
	 * @return int|false
	 */
	private function get_post_id() {
		if ( $this->is_blog_static() ) {
			return (int) get_option( 'page_for_posts' );
		}

		// On shop page the returning id is the id of the first product. We need the id of the page.
		// is_archive is true for shop page, so we need to check shop before is_archive
		if ( class_exists( 'WooCommerce' ) && is_shop() ) {
			return wc_get_page_id( 'shop' );
		}

		if ( is_archive() ) {
			return false;
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
	 * Set editor width.
	 */
	public function editor_content_width() {
		global $post_type;
		$meta_value = $this->get_content_width();
		$container  = $this->get_current_layout();


		// If contained, we set the block max-width based on the desktop container width.
		if ( $container === 'contained' ) {
			$editor_width = Mods::get( Config::MODS_CONTAINER_WIDTH );
			$editor_width = isset( $editor_width['desktop'] ) ? (int) $editor_width['desktop'] : 1170;
			if ( empty( $meta_value ) ) {
				$meta_key   = $post_type === 'post' ? Config::MODS_SINGLE_CONTENT_WIDTH : Config::MODS_OTHERS_CONTENT_WIDTH;
				$meta_value = Mods::get( $meta_key, $this->get_content_width_default() );
			}
			$editor_width_normal = round( ( $meta_value / 100 ) * $editor_width ) . 'px';
		} else {
			// For full-width container, we use the content percent value.
			$editor_width_normal = ( empty( $meta_value ) ? 100 : $meta_value ) . '%';
		}

		$editor_title_opacity = 1;
		$tile_disabled        = $this->get_title_disabled();
		if ( $tile_disabled === 'on' ) {
			$editor_title_opacity = 0.5;
		}

		$style = sprintf(
			'
			/* Main column width */
			.wp-block,
			.block-editor-block-list__layout > .wp-block-separator,
			.block-editor-block-list__layout > .wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
			    max-width: %s;
			}

			.wp-block[data-align="wide"] {
			    max-width: 70vw;
			}

			.wp-block[data-align="full"] {
			    max-width: none;
			}
			h1.editor-post-title { opacity: %s; }
			',
			$editor_width_normal,
			$editor_title_opacity
		);

		$style = $this->add_button_shadow_styles( $style );

		wp_add_inline_style( 'neve-gutenberg-style', $style );


	}

	/**
	 * Get the disabled title status.
	 *
	 * @return false|mixed Status of the title.
	 */
	public function get_title_disabled() {
		$post_id = $this->get_post_id();
		if ( $post_id === false ) {
			return false;
		}
		return get_post_meta( $post_id, self::DISABLE_TITLE, true );
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

		$content_width_status = get_post_meta( $post_id, self::ENABLE_CONTENT_WIDTH, true );
		$content_width_status = empty( $content_width_status ) ? $this->get_content_width_status_default() : $content_width_status;
		if ( $content_width_status !== 'on' ) {
			return false;
		}

		return get_post_meta( $post_id, self::CONTENT_WIDTH, true );

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
	 * Get continer type for current post.
	 *
	 * @return mixed|string
	 */
	public function get_container_type() {

		$post_id = $this->get_post_id();

		$meta_value = get_post_meta( $post_id, self::CONTAINER, true );

		if ( empty( $meta_value ) || $meta_value === 'default' ) {
			return '';
		}
		if ( $post_id === false ) {
			return '';
		}

		return $meta_value;
	}

	/**
	 * Get content width status.
	 *
	 * @return int
	 */
	private function get_content_width_default() {
		if ( (int) $this->get_post_id() === (int) get_option( 'woocommerce_checkout_page_id' ) ) {
			return 100;
		}

		return 70;
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
		$important    = '';
		$hide_sidebar = '';
		if ( is_customize_preview() ) {
			$important = '!important';

			if ( $sidebar_width === 0 ) {
				$hide_sidebar = 'display: none;';
			}
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
			body:not(.neve-off-canvas) #content.neve-main > ' . esc_attr( $container_class ) . ' > .row > .nv-sidebar-wrap,
			body:not(.neve-off-canvas) #content.neve-main > ' . esc_attr( $container_class ) . ' > .row > .nv-sidebar-wrap.shop-sidebar { max-width: ' . absint( $sidebar_width ) . '%' . esc_attr( $important ) . '; ' . esc_attr( $hide_sidebar ) . ' }
		}
		';

		wp_add_inline_style( 'neve-style', Dynamic_Css::minify_css( $style ) );
	}

	/**
	 * Add button shadow styles if used.
	 *
	 * @param string $style Inline styles for the Gutenberg editor.
	 */
	private function add_button_shadow_styles( $style ) {
		$primary_values   = Mods::get( Config::MODS_BUTTON_PRIMARY_STYLE, neve_get_button_appearance_default() );
		$secondary_values = Mods::get( Config::MODS_BUTTON_SECONDARY_STYLE, neve_get_button_appearance_default( 'secondary' ) );
		if (
			( isset( $primary_values['useShadow'] ) && ! empty( $primary_values['useShadow'] ) ) ||
			( isset( $primary_values['useShadowHover'] ) && ! empty( $primary_values['useShadowHover'] ) ) ||
			( isset( $secondary_values['useShadow'] ) && ! empty( $secondary_values['useShadow'] ) ) ||
			( isset( $secondary_values['useShadowHover'] ) && ! empty( $secondary_values['useShadowHover'] ) )
		) {
			$style = '.editor-styles-wrapper .wp-block-button.is-style-primary .wp-block-button__link {box-shadow: var(--primarybtnshadow, none);} .editor-styles-wrapper .wp-block-button.is-style-primary .wp-block-button__link:hover {box-shadow: var(--primarybtnhovershadow, none);} .editor-styles-wrapper .wp-block-button.is-style-secondary .wp-block-button__link {box-shadow: var(--secondarybtnshadow, none);} .editor-styles-wrapper .wp-block-button.is-style-secondary .wp-block-button__link:hover {box-shadow: var(--secondarybtnhovershadow, none);}';
		}

		return $style;
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
	 * If WooCommerce does not exist or if ir exists and page is not shop
	 * This also touches the following issues:
	 * Codeinwp/neve-pro-addon/issues/999
	 * Codeinwp/neve/issues/2790
	 *
	 * @return bool
	 */
	private function is_not_woo_shop() {
		return ( ! class_exists( 'WooCommerce', false ) || ( class_exists( 'WooCommerce', false ) && ! is_shop() ) );
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
			! is_single() &&
			! is_page() &&
			! $this->is_blog_static() &&
			$this->is_not_woo_shop()
		) {
			return $position;
		}

		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return $position;
		}

		$meta_value       = get_post_meta( $post_id, self::SIDEBAR, true );
		$sidebar_position = empty( $meta_value ) || $meta_value === 'default' ? $position : $meta_value;

		return $sidebar_position;
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
		if (
			! is_single() &&
			! is_page() &&
			! $this->is_blog_static() &&
			$this->is_not_woo_shop()
		) {
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

		$meta_elements_order = get_post_meta( $post_id, self::ELEMENTS_ORDER, true );
		if ( empty( $meta_elements_order ) ) {
			return $elements_order;
		}

		return json_decode( $meta_elements_order, true );
	}

	/**
	 * Filters the styles provided and adds specific vars for post title if meta exists.
	 *
	 * @since 3.1.0
	 *
	 * @param string $style The inline title styles.
	 * @param string $context The context. ('cover', 'normal'). Defaults: 'normal'.
	 *
	 * @return string
	 */
	public function filter_title_alignment_style( $style, $context = 'normal' ) {
		// Don't override with specific post title styles in Customizer context.
		if ( is_customize_preview() ) {
			return $style;
		}

		$post_id = $this->get_post_id();

		if ( $post_id === false ) {
			return $style;
		}

		$title_meta_alignment = get_post_meta( $post_id, self::TITLE_ALIGNMENT, true );
		if ( empty( $title_meta_alignment ) ) {
			return $style;
		}

		$style .= '--textalign:' . esc_attr( $title_meta_alignment ) . ';';
		if ( $context === 'cover' ) {
			$justify_map = [
				'left'   => 'flex-start',
				'center' => 'center',
				'right'  => 'flex-end',
			];
			if ( isset( $justify_map[ $title_meta_alignment ] ) ) {
				$style .= '--justify:' . esc_attr( $justify_map[ $title_meta_alignment ] ) . ';';
			}
		}
		return $style;
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
		$show_author_avatar = get_post_meta( $post_id, self::SHOW_AVATAR, true );

		if ( ! empty( $show_author_avatar ) ) {
			return $show_author_avatar === 'on';
		}

		return $show_avatar;
	}
}
