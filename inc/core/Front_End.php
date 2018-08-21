<?php
/**
 * Front end functionality
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 * @package Neve\Core
 */

namespace Neve\Core;

/**
 * Front end handler class.
 *
 * @package Neve\Core
 */
class Front_End {
	/**
	 * Theme setup.
	 */
	public function setup_theme() {

		// Maximum allowed width for any content in the theme, like oEmbeds and images added to posts.  https://codex.wordpress.org/Content_Width
		global $content_width;
		if ( ! isset( $content_width ) ) {
			$content_width = 750;
		}

		load_theme_textdomain( 'neve', get_template_directory() . '/languages' );

		$header_settings = apply_filters(
			'neve_custom_header_settings', array(
				'width'       => 2000,
				'flex-height' => true,
				'height'      => 1150,
				'flex-width'  => true,
				'header-text' => false,
			)
		);

		$logo_settings = array(
			'flex-width'  => true,
			'flex-height' => true,
			'height'      => 100,
		);

		$custom_background_settings = array(
			'default-color' => apply_filters( 'neve_default_background_color', 'FFFFFF' ),
		);

		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'custom-logo', $logo_settings );
		add_theme_support( 'html5', array( 'search-form' ) );
		add_theme_support( 'custom-header', $header_settings );
		add_theme_support( 'customize-selective-refresh-widgets' );
		add_theme_support( 'custom-background', $custom_background_settings );

		register_nav_menus(
			array(
				'primary'      => esc_html__( 'Primary Menu', 'neve' ),
				'footer'       => esc_html__( 'Footer Menu', 'neve' ),
				'top-bar-menu' => esc_html__( 'Top Bar Menu', 'neve' ),
			)
		);

		add_image_size( 'neve-blog', 360, 240, true );

//		add_editor_style();
	}

	public function enqueue_scripts() {
		wp_enqueue_style( 'neve-style', get_template_directory_uri() . '/style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
	}


	/**
	 * Register widgets for the theme.
	 *
	 * @since    1.0.0
	 */
	public function register_sidebars() {
		$sidebars = array(
			'blog-sidebar'   => esc_html__( 'Sidebar', 'neve' ),
			'woo-sidebar'    => esc_html__( 'WooCommerce Sidebar', 'neve' ),
			'header-sidebar' => esc_html__( 'Navigation', 'neve' ),
		);

		$footer_sidebars = apply_filters(
			'hestia_footer_widget_areas_array', array(
				'footer-one-widgets'   => esc_html__( 'Footer One', 'neve' ),
				'footer-two-widgets'   => esc_html__( 'Footer Two', 'neve' ),
				'footer-three-widgets' => esc_html__( 'Footer Three', 'neve' ),
				'footer-four-widgets'  => esc_html__( 'Footer Four', 'neve' ),
			)
		);

		$footer_columns  = is_customize_preview() ? '4' : get_theme_mod( 'neve_footer_widget_columns', '3' );
		$footer_sidebars = array_slice( $footer_sidebars, 0, $footer_columns );
		$sidebars        = array_merge( $sidebars, $footer_sidebars );

		foreach ( $sidebars as $sidebar_id => $sidebar_name ) {
			$sidebar_settings = array(
				'name'          => $sidebar_name,
				'id'            => $sidebar_id,
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h5>',
				'after_title'   => '</h5>',
			);
			register_sidebar( $sidebar_settings );
		}
	}

}