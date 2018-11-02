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
		add_theme_support( 'customize-selective-refresh-widgets' );
		add_theme_support( 'custom-background', $custom_background_settings );
		add_theme_support( 'themeisle-demo-import', $this->get_ti_demo_content_support_data() );
		add_theme_support( 'align-wide' );
		add_theme_support( 'editor-color-palette', $this->get_gutenberg_color_palette() );
		add_theme_support( 'editor-font-sizes', $this->get_gutenberg_font_sizes() );
		add_theme_support( 'fl-theme-builder-headers' );
		add_theme_support( 'fl-theme-builder-footers' );
		add_theme_support( 'amp', array( 'paired' => true ) );

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

	/**
	 * Gutenberg Block Color Palettes.
	 *
	 * Get the color palette in Gutenberg from Customizer colors.
	 */
	private function get_gutenberg_color_palette() {
		$gutenberg_color_palette = array();

		array_push(
			$gutenberg_color_palette,
			array(
				'name'  => __( 'Black', 'neve' ),
				'slug'  => 'black',
				'color' => '#000000',
			)
		);

		array_push(
			$gutenberg_color_palette,
			array(
				'name'  => __( 'White', 'neve' ),
				'slug'  => 'white',
				'color' => '#ffffff',
			)
		);

		$color_controls = array(
			'neve_button_color'     => array(
				'default' => '#0366d6',
				'label'   => __( 'Button Color', 'neve' ),
			),
			'neve_link_color'       => array(
				'default' => '#0366d6',
				'label'   => __( 'Link Color', 'neve' ),
			),
			'neve_link_hover_color' => array(
				'default' => '#0366d6',
				'label'   => __( 'Link Hover Color', 'neve' ),
			),
			'neve_text_color'       => array(
				'default' => '#404248',
				'label'   => __( 'Text Color', 'neve' ),
			),
		);

		foreach ( $color_controls as $control_name => $control_data ) {
			$color      = get_theme_mod( $control_name, $control_data['default'] );
			$color_name = $control_data['label'];
			$slug       = preg_replace( '~[^\pL\d]+~u', '-', strtolower( $control_name ) );
			array_push(
				$gutenberg_color_palette,
				array(
					'name'  => $color_name,
					'slug'  => $slug,
					'color' => $color,
				)
			);
		}

		/**
		 * Remove duplicate colors.
		 */
		$temp_arr = array_unique( array_map( function ( $el ) {
			return $el['color'];
		}, $gutenberg_color_palette ) );

		return array_intersect_key( $gutenberg_color_palette, $temp_arr );
	}

	/**
	 * Gutenberg Block Font Size.
	 * This function get the font size dynamically from customizer.
	 */
	private function get_gutenberg_font_sizes() {

		$body_font_size         = get_theme_mod( 'neve_body_font_size', 15 );
		$body_font_size_decoded = json_decode( $body_font_size, true );
		if ( is_array( $body_font_size_decoded ) ) {
			$body_font_size = $body_font_size_decoded['desktop'];
		}

		$font_size_array = array(
			array(
				'name'      => __( 'Body font size', 'neve' ),
				'shortName' => __( 'Body', 'neve' ),
				'size'      => $body_font_size,
				'slug'      => 'neve-body',
			),
		);

		$defaults = array(
			2,
			1.75,
			1.5,
			1.25,
			1,
			1,
		);
		for ( $i = 1; $i <= 6; $i ++ ) {
			$font_size         = get_theme_mod( 'neve_h' . $i . '_font_size', $defaults[ $i - 1 ] );
			$font_size_decoded = json_decode( $font_size, true );
			if ( is_array( $font_size_decoded ) ) {
				$font_size = $font_size_decoded['desktop'];
			}
			if ( ! empty( $font_size ) ) {
				array_push(
					$font_size_array,
					array(
						// translators: Heading size.
						'name'      => sprintf( __( 'H%d', 'neve' ), $i ),
						// translators: Heading size.
						'shortName' => sprintf( __( 'H%d', 'neve' ), $i ),
						'size'      => ( $font_size * 15 ),
						'slug'      => 'neve-h' . $i,
					)
				);
			}
		}

		return $font_size_array;
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
	 * Enqueue scripts and styles.
	 */
	public function enqueue_scripts() {
		$this->add_styles();
		$this->add_scripts();
	}

	/**
	 * Enqueue styles.
	 */
	private function add_styles() {
		if ( class_exists( 'WooCommerce' ) ) {
			wp_enqueue_style( 'neve-woocommerce', NEVE_ASSETS_URL . 'css/woocommerce' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
		}

		wp_register_style( 'neve-style', get_template_directory_uri() . '/style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
		wp_style_add_data( 'neve-style', 'rtl', 'replace' );
		wp_style_add_data( 'neve-style', 'suffix', '.min' );
		wp_enqueue_style( 'neve-style' );
	}

	/**
	 * Enqueue scripts.
	 */
	private function add_scripts() {
		if ( neve_is_amp() ) {
			return;
		}

		wp_register_script( 'neve-script', NEVE_ASSETS_URL . 'js/script' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.js', apply_filters( 'neve_filter_main_script_dependencies', array( 'jquery' ) ), NEVE_VERSION, false );
		wp_localize_script(
			'neve-script',
			'NeveProperties',
			apply_filters(
				'neve_filter_main_script_localization',
				array(
					'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
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
}
