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
			'neve_custom_header_settings',
			array(
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
			'height'      => 50,
			'width'       => 200,
		);

		$custom_background_settings = array(
			'default-color' => apply_filters( 'neve_default_background_color', 'ffffff' ),
		);

		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'custom-logo', $logo_settings );
		add_theme_support( 'html5', array( 'search-form' ) );
		add_theme_support( 'custom-header', $header_settings );
		add_theme_support( 'customize-selective-refresh-widgets' );
		add_theme_support( 'custom-background', $custom_background_settings );
		add_theme_support( 'themeisle-demo-import', $this->get_ti_demo_content_support_data() );

		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary Menu', 'neve' ),
				'footer'  => esc_html__( 'Footer Menu', 'neve' ),
				'top-bar' => esc_html__( 'Top Bar Menu', 'neve' ),
			)
		);

		add_image_size( 'neve-blog', 930, 620, true );

		$this->add_woo_support();
	}

	/**
	 * Enqueue scripts.
	 */
	public function enqueue_scripts() {

		if ( class_exists( 'WooCommerce' ) ) {
			wp_enqueue_style( 'neve-woocommerce', NEVE_ASSETS_URL . '/css/woocommerce' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
		}

		wp_register_style( 'neve-style', get_template_directory_uri() . '/style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
		wp_style_add_data( 'neve-style', 'rtl', 'replace' );
		wp_style_add_data( 'neve-style', 'suffix', '.min' );
		wp_enqueue_style( 'neve-style' );

		wp_enqueue_style( 'neve-icons', NEVE_ASSETS_URL . '/neve-icons/neve-icons' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );

		wp_register_script( 'neve-script', NEVE_ASSETS_URL . 'js/script' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.js', apply_filters( 'neve_filter_main_script_dependencies', array( 'jquery' ) ), NEVE_VERSION, false );
		wp_localize_script(
			'neve-script',
			'NeveProperties',
			apply_filters(
				'neve_filter_main_script_localization',
				array(
					'ajaxurl' => admin_url( 'admin-ajax.php' ),
					'nonce'   => wp_create_nonce( 'neve-theme-nonce' ),
				)
			)
		);
		wp_enqueue_script( 'neve-script' );

		if ( is_singular() ) {
			wp_enqueue_script( 'comment-reply' );
		}
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

	/**
	 * Add WooCommerce support
	 */
	private function add_woo_support() {
		if ( ! class_exists( 'WooCommerce' ) ) {
			return;
		}

		$woocommerce_settings = apply_filters(
			'neves_woocommerce_args',
			array(
				'single_image_width'            => 600,
				'thumbnail_image_width'         => 230,
				'gallery_thumbnail_image_width' => 160,
				'product_grid'                  => array(
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
	 * Get the themeisle demo content support data.
	 *
	 * @return array
	 */
	private function get_ti_demo_content_support_data() {
		$onboarding_sites = array(
			'local' => array(
				'neve-main'          => array(
					'url'   => 'https://demo.themeisle.com/neve',
					'title' => 'Neve 2018',
				),
				'neve-vet-center'    => array(
					'url'   => 'https://demo.themeisle.com/neve-vet-center/',
					'title' => 'Neve Vet Center',
				),
				'neve-energy-panels' => array(
					'url'   => 'https://demo.themeisle.com/neve-energy-panels/',
					'title' => 'Neve Energy Panels',
				),
			),
		);

		return apply_filters( 'neve_filter_onboarding_data', $onboarding_sites );
	}
}
