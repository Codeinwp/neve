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
	 * The onboarding config.
	 *
	 * @var array
	 */
	private $onboarding_config = array();

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
		add_theme_support( 'fl-theme-builder-headers' );
		add_theme_support( 'fl-theme-builder-footers' );
		add_theme_support( 'header-footer-elementor' );
		add_theme_support( 'lifterlms-sidebars' );
		add_theme_support( 'lifterlms' );

		add_filter( 'themeisle_gutenberg_templates', array( $this, 'add_gutenberg_templates' ) );

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
		$this->add_woo_support();
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
	 * Get the themeisle demo content support data.
	 *
	 * @return array
	 */
	private function get_ti_demo_content_support_data() {
		$theme_options = wp_get_theme();
		$theme_name    = apply_filters( 'ti_wl_theme_name', $theme_options->__get( 'Name' ) );

		$this->onboarding_config = array(
			'editors'     => array(
				'elementor',
			),
			'local'       => array(
				'elementor' => array(
					'neve-main'          => array(
						'url'   => 'https://demo.themeisle.com/neve/',
						'title' => 'Original',
					),
					'neve-restaurant'    => array(
						'url'              => 'https://demo.themeisle.com/neve-restaurant/',
						'title'            => 'Restaurant',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587624/restaurant',
					),
					'neve-charity'       => array(
						'url'              => 'https://demo.themeisle.com/neve-charity/',
						'title'            => 'Charity',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587605/charity',
					),
					'neve-vet-center'    => array(
						'url'              => 'https://demo.themeisle.com/neve-vet-center/',
						'title'            => 'Vet Center',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587611/vet-center',
					),
					'neve-doctors'       => array(
						'url'              => 'https://demo.themeisle.com/neve-doctors/',
						'title'            => 'Doctors',
						'unsplash_gallery' => 'https://unsplash.com/collections/4587593/doctor',
					),
					'neve-energy-panels' => array(
						'url'   => 'https://demo.themeisle.com/neve-energy-panels/',
						'title' => 'Energy Panels',
					),
					'neve-lawyers'       => array(
						'url'   => 'https://demo.themeisle.com/neve-lawyers/',
						'title' => 'Lawyers',
					),
					'neve-freelancer'    => array(
						'url'   => 'https://demo.themeisle.com/neve-freelancer/',
						'title' => 'Freelancer',
					),
					'neve-shop'          => array(
						'url'   => 'https://demo.themeisle.com/neve-shop/',
						'title' => 'Shop',
					),
					'neve-zelle'         => array(
						'url'   => 'https://demo.themeisle.com/neve-zelle/',
						'title' => 'Travel Agency',
					),
				),
			),
			'upsell'      => array(
				'elementor' => array(
					'neve-cafe'          => array(
						'url'        => 'https://demo.themeisle.com/neve-cafe/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-cafe-demo-screenshot-big.png',
						'title'      => 'Coffe Shop',
					),
					'neve-constructions' => array(
						'url'        => 'https://demo.themeisle.com/neve-constructions/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-constructions-demo-screenshot-big.png',
						'title'      => 'Constructions Company',
					),
					'neve-showcase'      => array(
						'url'        => 'https://demo.themeisle.com/neve-showcase/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-showcase-demo-screenshot-big.png',
						'title'      => 'Showcase',
					),
					'neve-consultants'   => array(
						'url'        => 'https://demo.themeisle.com/neve-consultants/',
						'screenshot' => 'https://demo.themeisle.com/hestia-pro-demo-content/wp-content/uploads/sites/105/2019/06/neve-consulting-demo-screenshot-big.png',
						'title'      => 'Business Consulting',
					),
				),
			),
			'can_migrate' => array(
				'zerif-pro'  => array(
					'theme_name'        => 'Zelle Pro',
					'theme_mod_check'   => 'zelle_frontpage_was_imported',
					'template'          => 'zelle',
					'heading'           => __( 'Want to keep using Zelle\'s homepage?', 'neve' ),
					'description'       => __( 'Hi! We\'ve noticed you were using Zelle before. To make your transition easier, we can help you keep the same beautiful homepage you had before, by converting it into an Elementor template. This option will also import your homepage content.', 'neve' ),
					'mandatory_plugins' => array(
						'elementor' => 'Elementor Page Builder',
					),
				),
				'zerif-lite' => array(
					'theme_name'        => 'Zelle Lite',
					'theme_mod_check'   => 'zelle_frontpage_was_imported',
					'template'          => 'zelle',
					'heading'           => __( 'Want to keep using Zelle\'s homepage?', 'neve' ),
					'description'       => __( 'Hi! We\'ve noticed you were using Zelle before. To make your transition easier, we can help you keep the same beautiful homepage you had before, by converting it into an Elementor template. This option will also import your homepage content.', 'neve' ),
					'mandatory_plugins' => array(
						'elementor' => 'Elementor Page Builder',
					),
				),
			),
			'i18n'        => array(
				'templates_title'       => __( 'Ready to use pre-built websites with 1-click installation', 'neve' ),
				/* translators: %s - theme name */
				'templates_description' => sprintf( __( 'With %s, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve' ), $theme_name ),
			),
			'pro_link'    => 'https://themeisle.com/themes/neve/upgrade/',

		);

		$this->add_gutenberg_starter_sites();

		return apply_filters( 'neve_filter_onboarding_data', $this->onboarding_config );
	}

	/**
	 * Add gutenberg starter sites if wp_version > 5.0.0
	 */
	private function add_gutenberg_starter_sites() {
		global $wp_version;

		if ( version_compare( $wp_version, '5.0', '>' ) === false ) {
			return;
		}

		$this->onboarding_config['editors'][]          = 'gutenberg';
		$this->onboarding_config['local']['gutenberg'] = array(
			'neve-main-gutenberg' => array(
				'url'   => 'https://demo.themeisle.com/neve-onboarding-gutenberg',
				'title' => 'Original',
			),
		);

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
					'name'  => esc_html( $color_name ),
					'slug'  => esc_html( $slug ),
					'color' => sanitize_hex_color( $color ),
				)
			);
		}

		/**
		 * Remove duplicate colors.
		 */
		$temp_arr = array_unique(
			array_map(
				function ( $el ) {
					return $el['color'];
				},
				$gutenberg_color_palette
			)
		);

		return array_intersect_key( $gutenberg_color_palette, $temp_arr );
	}

	/**
	 * Add new Gutenberg templates on Otter plugin.
	 *
	 * @return array
	 */
	public function add_gutenberg_templates( $templates_list ) {
		$current_theme = wp_get_theme()->Name;

		$templates = array(
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'big title', 'header', 'about' ),
				'categories'     => array( 'header' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/big-title/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/big-title/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'about us', 'about', 'description', 'showcase' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/about-us/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/about-us/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'focus', 'our focus', 'services', 'features', 'showcase' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/our-focus/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/our-focus/screenshot.png',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'video', 'embed', 'youtube', 'movie' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/video/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/video/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array(
					'team',
					'our team',
					'employees',
					'clients',
					'members',
					'people',
					'image',
					'card',
				),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/our-team/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/our-team/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'ribbon', 'statistics', 'numbers', 'clients', 'banner', 'logo', 'carousel' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/ribbon/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/ribbon/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'pricing', 'plan', 'packages', 'membership', 'product' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/pricing/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/pricing/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'testimonials', 'review', 'feedback', 'testimonial', 'happy', 'clients' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/testimonials/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/testimonials/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array(
					'features',
					'card',
					'about',
					'services',
					'advantages',
					'items',
					'boxes',
					'why',
				),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/features/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/features/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'blog', 'stories', 'posts', 'grid' ),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/blog/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/blog/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array(
					'contact',
					'us',
					'form',
					'message',
					'email',
					'support',
					'get',
					'in',
					'touch',
				),
				'categories'     => array( 'content' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/contact/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/contact/screenshot.jpg',
			),
			array(
				'title'          => '',
				'type'           => 'block',
				'author'         => $current_theme,
				'keywords'       => array( 'footer', 'resources', 'links', 'credits', 'contact', 'social', 'sharing' ),
				'categories'     => array( 'footer' ),
				'template_url'   => get_template_directory_uri() . '/gutenberg/blocks/footer/template.json',
				'screenshot_url' => get_template_directory_uri() . '/gutenberg/blocks/footer/screenshot.png',
			),
		);

		$list = array_merge( $templates, $templates_list );

		return $list;
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
			wp_register_style( 'neve-woocommerce', NEVE_ASSETS_URL . 'css/woocommerce' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
			wp_style_add_data( 'neve-woocommerce', 'rtl', 'replace' );
			wp_style_add_data( 'neve-woocommerce', 'suffix', '.min' );
			wp_enqueue_style( 'neve-woocommerce' );
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

		wp_register_script( 'neve-script', NEVE_ASSETS_URL . 'js/frontend.js', apply_filters( 'neve_filter_main_script_dependencies', array() ), NEVE_VERSION, true );
		wp_localize_script(
			'neve-script',
			'NeveProperties',
			apply_filters(
				'neve_filter_main_script_localization',
				array(
					'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
					'nonce'   => wp_create_nonce( 'wp_rest' ),
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
}
