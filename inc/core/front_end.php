<?php
/**
 * Front end functionality
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Core
 */

namespace Neve\Core;

use Neve\Compatibility\Elementor;
use Neve\Compatibility\Starter_Content;
use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Core\Dynamic_Css;
use Neve\Core\Traits\Theme_Mods;

/**
 * Front end handler class.
 *
 * @package Neve\Core
 */
class Front_End {
	use Theme_Mods;

	/**
	 * Theme setup.
	 */
	public function setup_theme() {

		// Maximum allowed width for any content in the theme, like oEmbeds and images added to posts.  https://codex.wordpress.org/Content_Width
		global $content_width;
		if ( ! isset( $content_width ) ) {
			$content_width = apply_filters( 'neve_content_width', 1200 );
		}

		load_theme_textdomain( 'neve', get_template_directory() . '/languages' );

		$logo_settings = array(
			'flex-width'  => true,
			'flex-height' => true,
			'height'      => 50,
			'width'       => 200,
		);

		add_theme_support( 'align-wide' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'border' );
		add_theme_support( 'custom-background', [] );
		add_theme_support( 'custom-logo', $logo_settings );
		add_theme_support( 'custom-spacing' );
		add_theme_support( 'custom-units' );
		add_theme_support( 'customize-selective-refresh-widgets' );
		add_theme_support( 'editor-color-palette', $this->get_gutenberg_color_palette() );
		add_theme_support( 'fl-theme-builder-footers' );
		add_theme_support( 'fl-theme-builder-headers' );
		add_theme_support( 'fl-theme-builder-parts' );
		add_theme_support( 'header-footer-elementor' );
		add_theme_support( 'html5', array( 'search-form', 'script', 'style', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
		add_theme_support( 'lifterlms-sidebars' );
		add_theme_support( 'lifterlms' );
		add_theme_support( 'link-color' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'service_worker', true );
		add_theme_support( 'starter-content', ( new Starter_Content() )->get() );
		add_theme_support( 'title-tag' );
		add_filter( 'script_loader_tag', array( $this, 'filter_script_loader_tag' ), 10, 2 );
		add_filter( 'embed_oembed_html', array( $this, 'wrap_oembeds' ), 10, 3 );
		add_filter( 'video_embed_html', array( $this, 'wrap_jetpack_oembeds' ), 10, 1 );

		$this->add_amp_support();
		$nav_menus_to_register = apply_filters(
			'neve_register_nav_menus',
			array(
				'primary' => esc_html__( 'Primary Menu', 'neve' ),
				'footer'  => esc_html__( 'Footer Menu', 'neve' ),
				'top-bar' => esc_html__( 'Secondary Menu', 'neve' ),
			)
		);
		register_nav_menus( $nav_menus_to_register );

		add_image_size( 'neve-blog', 930, 620, true );
		add_filter( 'wp_nav_menu_args', array( $this, 'nav_walker' ), 1001 );
		add_filter( 'theme_mod_background_color', '__return_empty_string' );
		$this->add_woo_support();
		add_filter( 'neve_dynamic_style_output', array( $this, 'css_global_custom_colors' ), PHP_INT_MAX, 2 );
	}

	/**
	 * Gutenberg Block Color Palettes.
	 *
	 * Get the color palette in Gutenberg from Customizer colors.
	 */
	private function get_gutenberg_color_palette() {
		$prefix                  = ( apply_filters( 'ti_wl_theme_is_localized', false ) ? __( 'Theme', 'neve' ) : 'Neve' ) . ' - ';
		$gutenberg_color_palette = array();
		$from_global_colors      = [
			'neve-link-color'       => array(
				'val'   => 'var(--nv-primary-accent)',
				'label' => $prefix . __( 'Primary Accent', 'neve' ),
			),
			'neve-link-hover-color' => array(
				'val'   => 'var(--nv-secondary-accent)',
				'label' => $prefix . __( 'Secondary Accent', 'neve' ),
			),
			'nv-site-bg'            => array(
				'val'   => 'var(--nv-site-bg)',
				'label' => $prefix . __( 'Site Background', 'neve' ),
			),
			'nv-light-bg'           => array(
				'val'   => 'var(--nv-light-bg)',
				'label' => $prefix . __( 'Light Background', 'neve' ),
			),
			'nv-dark-bg'            => array(
				'val'   => 'var(--nv-dark-bg)',
				'label' => $prefix . __( 'Dark Background', 'neve' ),
			),
			'neve-text-color'       => array(
				'val'   => 'var(--nv-text-color)',
				'label' => $prefix . __( 'Text Color', 'neve' ),
			),
			'nv-text-dark-bg'       => array(
				'val'   => 'var(--nv-text-dark-bg)',
				'label' => $prefix . __( 'Text Dark Background', 'neve' ),
			),
			'nv-c-1'                => array(
				'val'   => 'var(--nv-c-1)',
				'label' => $prefix . __( 'Extra Color 1', 'neve' ),
			),
			'nv-c-2'                => array(
				'val'   => 'var(--nv-c-2)',
				'label' => $prefix . __( 'Extra Color 2', 'neve' ),
			),
		];

		// Add custom global colors
		$from_global_colors = array_merge( $from_global_colors, $this->get_global_custom_color_vars() );

		foreach ( $from_global_colors as $slug => $args ) {
			array_push(
				$gutenberg_color_palette,
				array(
					'name'  => esc_html( $args['label'] ),
					'slug'  => esc_html( $slug ),
					'color' => neve_sanitize_colors( $args['val'] ),
				)
			);
		}

		return array_values( $gutenberg_color_palette );
	}

	/**
	 * Returns global custom colors with css vars
	 *
	 * @return array[]
	 */
	private function get_global_custom_color_vars() {
		$css_vars = [];
		foreach ( Mods::get( Config::MODS_GLOBAL_CUSTOM_COLORS, [] ) as $slug => $args ) {
			$css_vars[ $slug ] = [
				'label' => $args['label'],
				'val'   => sprintf( 'var(--%s)', $slug ),
			];
		}

		return $css_vars;
	}

	/**
	 * Add AMP support
	 */
	private function add_amp_support() {
		if ( ! defined( 'AMP__VERSION' ) ) {
			return;
		}
		if ( version_compare( AMP__VERSION, '1.0.0', '<' ) ) {
			return;
		}
		add_theme_support(
			'amp',
			apply_filters(
				'neve_filter_amp_support',
				array(
					'paired' => true,
				)
			)
		);
	}

	/**
	 * Add WooCommerce support
	 */
	private function add_woo_support() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return;
		}

		$woocommerce_settings = apply_filters(
			'neves_woocommerce_args',
			array(
				'product_grid' => array(
					'default_columns' => 3,
					'default_rows'    => 4,
					'min_columns'     => 1,
					'max_columns'     => 6,
					'min_rows'        => 1,
				),
			)
		);

		add_theme_support( 'woocommerce', $woocommerce_settings );
		add_theme_support( 'wc-product-gallery-zoom' );
		add_theme_support( 'wc-product-gallery-lightbox' );
		add_theme_support( 'wc-product-gallery-slider' );

	}

	/**
	 * Adds async/defer attributes to enqueued / registered scripts.
	 *
	 * If #12009 lands in WordPress, this function can no-op since it would be handled in core.
	 *
	 * @link https://core.trac.wordpress.org/ticket/12009
	 *
	 * @param string $tag The script tag.
	 * @param string $handle The script handle.
	 *
	 * @return string Script HTML string.
	 */
	public function filter_script_loader_tag( $tag, $handle ) {
		foreach ( array( 'async', 'defer' ) as $attr ) {
			if ( ! wp_scripts()->get_data( $handle, $attr ) ) {
				continue;
			}
			// Prevent adding attribute when already added in #12009.
			if ( ! preg_match( ":\s$attr(=|>|\s):", $tag ) ) {
				$tag = preg_replace( ':(?=></script>):', " $attr", $tag, 1 );
			}
			// Only allow async or defer, not both.
			break;
		}

		return $tag;
	}

	/**
	 * Wrap embeds.
	 *
	 * @param string $markup embed markup.
	 * @param string $url embed url.
	 * @param array  $attr embed attributes [width/height].
	 *
	 * @return string
	 */
	public function wrap_oembeds( $markup, $url, $attr ) {
		$sources = [
			'youtube.com',
			'youtu.be',
			'cloudup.com',
			'dailymotion.com',
			'ted.com',
			'vimeo.com',
			'speakerdeck.com',
		];
		foreach ( $sources as $source ) {
			if ( strpos( $url, $source ) !== false ) {
				return '<div class="nv-iframe-embed">' . $markup . '</div>';
			}
		}

		return $markup;
	}

	/**
	 * Wrap Jetpack embeds.
	 * Fixes the compose module aspect ratio issue.
	 *
	 * @param string $markup embed markup.
	 *
	 * @return string
	 */
	public function wrap_jetpack_oembeds( $markup ) {
		return '<div class="nv-iframe-embed">' . $markup . '</div>';
	}

	/**
	 * Tweak menu walker to support selective refresh.
	 *
	 * @param array $args List of arguments for navigation.
	 *
	 * @return mixed
	 */
	public function nav_walker( $args ) {
		if ( isset( $args['walker'] ) && is_string( $args['walker'] ) && class_exists( $args['walker'] ) ) {
			$args['walker'] = new $args['walker']();
		}

		return $args;
	}

	/**
	 * Enqueue scripts and styles.
	 */
	public function enqueue_scripts() {
		$this->add_styles();
		$this->add_inline_styles();
		$this->add_scripts();
	}

	/**
	 * Enqueue inline styles for core components.
	 */
	private function add_inline_styles() {

		// Add Inline styles if buttons shadows are being used.
		$primary_values   = get_theme_mod( Config::MODS_BUTTON_PRIMARY_STYLE, neve_get_button_appearance_default() );
		$secondary_values = get_theme_mod( Config::MODS_BUTTON_SECONDARY_STYLE, neve_get_button_appearance_default( 'secondary' ) );

		$style = '';

		if (
			( isset( $primary_values['useShadow'] ) && ! empty( $primary_values['useShadow'] ) ) ||
			( isset( $primary_values['useShadowHover'] ) && ! empty( $primary_values['useShadowHover'] ) ) ||
			( isset( $secondary_values['useShadow'] ) && ! empty( $secondary_values['useShadow'] ) ) ||
			( isset( $secondary_values['useShadowHover'] ) && ! empty( $secondary_values['useShadowHover'] ) )
		) {
			$style .= '.button.button-primary, .is-style-primary .wp-block-button__link {box-shadow: var(--primarybtnshadow, none);} .button.button-primary:hover, .is-style-primary .wp-block-button__link:hover {box-shadow: var(--primarybtnhovershadow, none);} .button.button-secondary, .is-style-secondary .wp-block-button__link {box-shadow: var(--secondarybtnshadow, none);} .button.button-secondary:hover, .is-style-secondary .wp-block-button__link:hover {box-shadow: var(--secondarybtnhovershadow, none);}';
		}

		foreach ( neve_get_headings_selectors() as $heading_id => $heading_selector ) {
			$font_family = get_theme_mod( $this->get_mod_key_heading_fontfamily( $heading_id ), '' ); // default value is empty string to be consistent with default customizer control value.

			$css_var = sprintf( '--%1$sfontfamily', $heading_id );

			if ( is_customize_preview() ) {
				$style .= sprintf( '%s {font-family: var(%s, var(--headingsfontfamily)), var(--nv-fallback-ff);} ', $heading_id, $css_var ); // fallback values for the first page load on the customizer
				continue;
			}

			// If font family is inherit, do not add a style for this heading.
			if ( $font_family === '' ) {
				continue;
			}

			$style .= sprintf( '%s {font-family: var(%s);}', $heading_id, $css_var );
		}

		if ( empty( $style ) ) {
			return;
		}

		wp_add_inline_style( 'neve-style', Dynamic_Css::minify_css( $style ) );
	}

	/**
	 * Enqueue styles.
	 */
	private function add_styles() {
		if ( class_exists( 'WooCommerce', false ) ) {
			$style_path = 'css/woocommerce';

			wp_register_style( 'neve-woocommerce', NEVE_ASSETS_URL . $style_path . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
			wp_style_add_data( 'neve-woocommerce', 'rtl', 'replace' );
			wp_style_add_data( 'neve-woocommerce', 'suffix', '.min' );
			if ( ! Elementor::is_elementor_checkout() ) {
				wp_enqueue_style( 'neve-woocommerce' );
			}
		}

		if ( class_exists( 'Easy_Digital_Downloads' ) ) {

			$style_path = 'css/easy-digital-downloads';

			wp_register_style( 'neve-easy-digital-downloads', NEVE_ASSETS_URL . $style_path . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
			wp_style_add_data( 'neve-easy-digital-downloads', 'rtl', 'replace' );
			wp_style_add_data( 'neve-easy-digital-downloads', 'suffix', '.min' );
			wp_enqueue_style( 'neve-easy-digital-downloads' );

		}

		$style_path = '/style-main-new';

		wp_register_style( 'neve-style', get_template_directory_uri() . $style_path . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
		wp_style_add_data( 'neve-style', 'rtl', 'replace' );
		wp_style_add_data( 'neve-style', 'suffix', '.min' );
		wp_enqueue_style( 'neve-style' );

		$mm_path = 'mega-menu';

		wp_register_style( 'neve-mega-menu', get_template_directory_uri() . '/assets/css/' . $mm_path . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
		wp_style_add_data( 'neve-mega-menu', 'rtl', 'replace' );
		wp_style_add_data( 'neve-mega-menu', 'suffix', '.min' );
	}

	/**
	 * Enqueue scripts.
	 */
	private function add_scripts() {
		if ( neve_is_amp() ) {
			return;
		}

		wp_register_script( 'neve-script', NEVE_ASSETS_URL . 'js/build/modern/frontend.js', apply_filters( 'neve_filter_main_script_dependencies', array() ), NEVE_VERSION, true );

		wp_localize_script(
			'neve-script',
			'NeveProperties',
			apply_filters(
				'neve_filter_main_script_localization',
				array(
					'ajaxurl'     => esc_url( admin_url( 'admin-ajax.php' ) ),
					'nonce'       => wp_create_nonce( 'wp_rest' ),
					'isRTL'       => is_rtl(),
					'isCustomize' => is_customize_preview(),
				)
			)
		);
		wp_enqueue_script( 'neve-script' );
		wp_script_add_data( 'neve-script', 'async', true );
		$inline_scripts = apply_filters( 'hfg_component_scripts', '' );
		if ( ! empty( $inline_scripts ) ) {
			wp_add_inline_script( 'neve-script', $inline_scripts );
		}

		if ( class_exists( 'WooCommerce', false ) && is_woocommerce() ) {
			wp_register_script( 'neve-shop-script', NEVE_ASSETS_URL . 'js/build/modern/shop.js', array(), NEVE_VERSION, true );
			wp_enqueue_script( 'neve-shop-script' );
			wp_script_add_data( 'neve-shop-script', 'async', true );
		}

		if ( $this->should_load_comments_reply() ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}

	/**
	 * Dequeue comments-reply script if comments are closed.
	 *
	 * @return bool
	 */
	public function should_load_comments_reply() {

		if ( ! is_singular() ) {
			return false;
		}

		if ( ! comments_open() ) {
			return false;
		}

		if ( ! (bool) get_option( 'thread_comments' ) ) {
			return false;
		}

		if ( post_password_required() ) {
			return false;
		}

		$post_type = get_post_type();
		if ( ! post_type_supports( $post_type, 'comments' ) ) {
			return false;
		}

		if ( ! apply_filters( 'neve_post_has_comments', false ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Register widgets for the theme.
	 *
	 * @since    1.0.0
	 */
	public function register_sidebars() {
		$sidebars = array(
			'blog-sidebar' => esc_html__( 'Sidebar', 'neve' ),
			'shop-sidebar' => esc_html__( 'Shop Sidebar', 'neve' ),
		);

		$footer_sidebars = apply_filters(
			'neve_footer_widget_areas_array',
			array(
				'footer-one-widgets'   => esc_html__( 'Footer One', 'neve' ),
				'footer-two-widgets'   => esc_html__( 'Footer Two', 'neve' ),
				'footer-three-widgets' => esc_html__( 'Footer Three', 'neve' ),
				'footer-four-widgets'  => esc_html__( 'Footer Four', 'neve' ),
			)
		);

		$sidebars = array_merge( $sidebars, $footer_sidebars );

		foreach ( $sidebars as $sidebar_id => $sidebar_name ) {
			$sidebar_settings = array(
				'name'          => $sidebar_name,
				'id'            => $sidebar_id,
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<p class="widget-title">',
				'after_title'   => '</p>',
			);
			register_sidebar( $sidebar_settings );
		}
	}

	/**
	 * Get strings.
	 *
	 * @return array
	 */
	public function get_strings() {
		return [
			'add_item'                 => __( 'Add item', 'neve' ),
			'add_items'                => __( 'Add items by clicking the ones below.', 'neve' ),
			'all_selected'             => __( 'All items are already selected.', 'neve' ),
			'page_layout'              => __( 'Page Layout', 'neve' ),
			'page_title'               => __( 'Page Title', 'neve' ),
			'upsell_components'        => __( 'Upgrade to Neve Pro and unlock all components, including Wish List, Breadcrumbs, Custom Layouts and many more.', 'neve' ),
			'header_booster'           => esc_html__( 'Header Booster', 'neve' ),
			'blog_booster'             => esc_html__( 'Blog Booster', 'neve' ),
			'woo_booster'              => esc_html__( 'WooCommerce Booster', 'neve' ),
			'custom_layouts'           => esc_html__( 'Custom Layouts', 'neve' ),
			'white_label'              => esc_html__( 'White Label module', 'neve' ),
			'scroll_to_top'            => esc_html__( 'Scroll to Top module', 'neve' ),
			'elementor_booster'        => esc_html__( 'Elementor Booster', 'neve' ),
			'ext_h_description'        => esc_html__( 'Extend your header with more components and settings, build sticky/transparent headers or display them conditionally.', 'neve' ),
			'ctm_h_description'        => esc_html__( 'Easily create custom headers and footers as well as adding your own custom code or content in any of the hooks locations.', 'neve' ),
			'elem_description'         => esc_html__( 'Leverage the true flexibility of Elementor with powerful addons and templates that you can import with just one click.', 'neve' ),
			'get_pro_cta'              => esc_html__( 'Get the PRO version!', 'neve' ),
			'opens_new_tab_des'        => esc_html__( '(opens in a new tab)', 'neve' ),
			'filter'                   => __( 'Filter', 'neve' ),
			/* translators: %s - Theme name */
			'neve_options'             => __( '%s Options', 'neve' ),
			'migrate_builder_d'        => __( 'Migrating builder data', 'neve' ),
			'rollback_builder'         => __( 'Rolling back builder', 'neve' ),
			'remove_old_data'          => __( 'Removing old data', 'neve' ),
			'customizer_values_notice' => __( 'You must save the current customizer values before running the migration.', 'neve' ),
			'wrong_reload_notice'      => __( 'Something went wrong. Please reload the page and try again.', 'neve' ),
			'rollback_to_old'          => __( 'Want to roll back to the old builder?', 'neve' ),
			'new_hfg_experience'       => __( "We've created a new Header/Footer Builder experience! You can always roll back to the old builder from right here.", 'neve' ),
			'manual_adjust'            => __( 'Some manual adjustments may be required.', 'neve' ),
			'reload'                   => __( 'Reload', 'neve' ),
			'migrate'                  => __( 'Migrate Builders Data', 'neve' ),
			'legacy_skin'              => __( 'Legacy Skin', 'neve' ),
			'neve_30'                  => __( 'Neve 3.0', 'neve' ),
			'switching_skin'           => __( 'Switching skin', 'neve' ),
			'switch_skin'              => __( 'Switch Skin', 'neve' ),
			'dismiss'                  => __( 'Dismiss', 'neve' ),
			'rollback'                 => __( 'Roll Back', 'neve' ),
		];
	}

	/**
	 * Adds CSS rules to resolve .has-dynamicslug-color .has-dynamicslug-background-color classes.
	 *
	 * @param  string $current_styles Current dynamic style.
	 * @param  string $context gutenberg|frontend Represents the type of the context.
	 * @return string dynamic styles has resolving global custom colors
	 */
	public function css_global_custom_colors( $current_styles, $context ) {
		if ( $context !== 'frontend' ) {
			return $current_styles;
		}

		foreach ( Mods::get( Config::MODS_GLOBAL_CUSTOM_COLORS, [] ) as $slug => $args ) {
			$css_var         = sprintf( 'var(--%s) !important', $slug );
			$current_styles .= Dynamic_CSS::minify_css( sprintf( '.has-%s-color {color:%s} .has-%s-background-color {background-color:%s}', $slug, $css_var, $slug, $css_var ) );
		}

		return $current_styles;
	}
}
