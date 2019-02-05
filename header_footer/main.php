<?php

class Hf {

	static $_instance;
	static $version;
	static $theme_url;
	static $theme_name;
	static $theme_author;
	static $path;

	/**
	 * @var Hf_Customizer
	 */
	public $customizer = null;

	/**
	 * Add functions to hooks
	 */
	function init_hooks() {
		add_action( 'after_setup_theme', array( $this, 'theme_setup' ) );
		add_action( 'after_setup_theme', array( $this, 'content_width' ), 0 );
		add_action( 'widgets_init', array( $this, 'register_sidebars' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ), 95 );
		add_filter( 'excerpt_more', array( $this, 'excerpt_more' ) );
		add_filter( 'excerpt_length', array( $this, 'excerpt_length' ) );
	}

	function excerpt_length( $length ) {
		return 25;
	}

	/**
	 * Filter the excerpt "read more" string.
	 *
	 * @param string $more "Read more" excerpt string.
	 *
	 * @return string (Maybe) modified "read more" excerpt string.
	 */
	function excerpt_more( $more ) {
		return '&hellip;';
	}

	/**
	 * Main Hf Instance.
	 *
	 * Ensures only one instance of Hf is loaded or can be loaded.
	 *
	 * @return Hf Main instance.
	 */
	static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance    = new self();
			$theme              = wp_get_theme();
			self::$version      = $theme->get( 'Version' );
			self::$theme_url    = $theme->get( 'ThemeURI' );
			self::$theme_name   = $theme->get( 'Name' );
			self::$theme_author = $theme->get( 'Author' );
			self::$path         = get_template_directory();

			self::$_instance->init();
		}

		return self::$_instance;
	}

	/**
	 * Get data from method of property
	 *
	 * @param string $key
	 *
	 * @return bool|mixed
	 */
	function get( $key ) {
		if ( method_exists( $this, 'get_' . $key ) ) {
			return call_user_func_array( array( $this, 'get_' . $key ), array() );
		} elseif ( property_exists( $this, $key ) ) {
			return $this->{$key};
		}

		return false;
	}


	/**
	 * Set the content width in pixels, based on the theme's design and stylesheet.
	 *
	 * Priority 0 to make it available to lower priority callbacks.
	 *
	 * @global int $content_width
	 */
	function content_width() {
		$GLOBALS['content_width'] = apply_filters( 'Hf_content_width', 843 );
	}

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function theme_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Hf, use a find and replace
		 * to change 'Hf' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'Hf', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'Hf' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add theme support for page excerpt.
		add_post_type_support( 'page', 'excerpt' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		/**
		 * WooCommerce support.
		 */
		add_theme_support( 'woocommerce' );
		add_theme_support( 'wc-product-gallery-zoom' );
		add_theme_support( 'wc-product-gallery-lightbox' );
		add_theme_support( 'wc-product-gallery-slider' );

		/**
		 * Support Gutenberg.
		 *
		 * @since 0.2.6
		 */
		add_theme_support( 'align-wide' );

		/**
		 * Add editor style support.
		 */
		add_theme_support( 'editor-styles' );

	}

	/**
	 * Register sidebars area.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
	 */
	function register_sidebars() {
		register_sidebar(
			array(
				'name'          => esc_html__( 'Primary Sidebar', 'Hf' ),
				'id'            => 'sidebar-1',
				'description'   => esc_html__( 'Add widgets here.', 'Hf' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<h4 class="widget-title">',
				'after_title'   => '</h4>',
			)
		);
		register_sidebar(
			array(
				'name'          => esc_html__( 'Secondary Sidebar', 'Hf' ),
				'id'            => 'sidebar-2',
				'description'   => esc_html__( 'Add widgets here.', 'Hf' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<h4 class="widget-title">',
				'after_title'   => '</h4>',
			)
		);

		for ( $i = 1; $i <= 6; $i ++ ) {
			register_sidebar(
				array(
					/* translators: 1: Widget number. */
					'name'          => sprintf( __( 'Footer Sidebar %d', 'Hf' ), $i ),
					'id'            => 'footer-' . $i,
					'description'   => __( 'Add widgets here.', 'Hf' ),
					'before_widget' => '<section id="%1$s" class="widget %2$s">',
					'after_widget'  => '</section>',
					'before_title'  => '<h4 class="widget-title">',
					'after_title'   => '</h4>',
				)
			);
		}

	}

	/**
	 * Get asset suffix `.min` or empty if WP_DEBUG enabled
	 *
	 * @return string
	 */
	function get_asset_suffix() {
		$suffix = '.min';
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			$suffix = '';
		}

		return $suffix;
	}

	/**
	 * Get theme style.css url
	 *
	 * @return string
	 */
	function get_style_uri() {
		$suffix     = $this->get_asset_suffix();
		$style_dir  = get_template_directory();
		$suffix_css = $suffix;
		$css_file   = false;
		if ( is_rtl() ) {
			$suffix_css = '-rtl' . $suffix;
		}

		$min_file = $style_dir . '/style' . $suffix_css . '.css';
		if ( file_exists( $min_file ) ) {
			$css_file = esc_url( get_template_directory_uri() ) . '/style' . $suffix_css . '.css';
		}

		if ( ! $css_file ) {
			$css_file = get_stylesheet_uri();
		}

		return $css_file;
	}

	/**
	 * Enqueue scripts and styles.
	 */
	function scripts() {

		if ( ! class_exists( 'Hf_Font_Icons' ) ) {
			require_once get_template_directory() . '/inc/customizer/class-customizer-icons.php';
		}
		Hf_Font_Icons::get_instance()->enqueue();

		$suffix = $this->get_asset_suffix();

		do_action( 'Hf/load-scripts' );

		$css_files = apply_filters(
			'neve/theme/css',
			array(
				'google-font' => Hf_Customizer_Auto_CSS::get_instance()->get_font_url(),
				'style'       => $this->get_style_uri(),
			)
		);

		$js_files = apply_filters(
			'neve/theme/js',
			array(
				'customify-themejs' => array(
					'url'  => esc_url( get_template_directory_uri() ) . '/assets/js/theme' . $suffix . '.js',
					'ver'  => self::$version,
				),
			)
		);

		foreach ( $css_files as $id => $url ) {
			$deps = array();
			if ( is_array( $url ) ) {
				$arg = wp_parse_args(
					$url,
					array(
						'deps' => array(),
						'url'  => '',
						'ver'  => self::$version,
					)
				);
				wp_enqueue_style( 'Hf-' . $id, $arg['url'], $arg['deps'], $arg['ver'] );
			} elseif ( $url ) {
				wp_enqueue_style( 'Hf-' . $id, $url, $deps, self::$version );
			}
		}

		foreach ( $js_files as $id => $arg ) {
			$deps = array();
			$ver  = '';
			if ( is_array( $arg ) ) {
				$arg = wp_parse_args(
					$arg,
					array(
						'deps' => '',
						'url'  => '',
						'ver'  => '',
					)
				);

				$deps = $arg['deps'];
				$url  = $arg['url'];
				$ver  = $arg['ver'];
			} else {
				$url = $arg;
			}

			if ( ! $ver ) {
				$ver = self::$version;
			}

			wp_enqueue_script( $id, $url, $deps, $ver, true );
		}

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		wp_add_inline_style( 'Hf-style', Hf_Customizer_Auto_CSS::get_instance()->auto_css() );
		wp_localize_script(
			'Hf-themejs',
			'Hf_JS',
			apply_filters( // phpcs:ignore
				'Hf_JS',
				array(
					'css_media_queries' => Hf_Customizer_Auto_CSS::get_instance()->media_queries,
					'sidebar_menu_no_duplicator' => Hf()->get_setting( 'header_sidebar_menu_no_duplicator' ),
				)
			)
		);

		do_action( 'neve/theme/scripts' );
	}

	function admin_scripts() {

	}

	private function includes() {
		$files = array(
			'customizer/class-customizer.php',
			// Customizer additions.
			'panel-builder/class-panel-builder.php',
		);

		foreach ( $files as $file ) {
			require_once self::$path . $file;
		}

		$this->load_configs();
		$this->load_compatibility();
		$this->admin_includes();
	}

	/**
	 * Load admin files
	 *
	 * @since 0.0.1
	 * @since 0.2.6 Load editor style.
	 *
	 * @return void
	 */
	private function admin_includes() {
		if ( ! is_admin() ) {
			return;
		}

		$files = array(
			'/header_footer/admin/editor.php',  // Metabox settings.
			'/header_footer/admin/dashboard.php',  // Metabox settings.
		);

		foreach ( $files as $file ) {
			require_once get_template_directory() . $file;
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
	}

	/**
	 * Load configs
	 */
	private function load_configs() {

		$config_files = array(
			// Site Settings.
			'upsell',
			'layouts',
			'blogs',
			'single-blog-post',
			'related-posts',

			'search',
			'styling',
			'typography',
			'page-header',
			'background',
			'compatibility',
			// Header Builder Panel.
			'header/panel',
			'header/html',
			'header/logo',
			'header/nav-icon',
			'header/primary-menu',
			'header/templates',
			'header/templates',
			'header/logo',
			'header/search-icon',
			'header/search-box',
			'header/menus',
			'header/nav-icon',
			'header/button',
			'header/social-icons',
			// Footer Builder Panel.
			'footer/panel',
			'footer/widgets',
			'footer/templates',
			'footer/widgets',
			'footer/copyright',
			'footer/social-icons',

		);

		$path = get_template_directory();
		// Load default config values.
		require_once $path . '/header_footer/customizer/configs/config-default.php';

		// Load site configs.
		foreach ( $config_files as $f ) {
			$file = $path . "/header_footer/customizer/configs/{$f}.php";
			if ( file_exists( $file ) ) {
				require_once $file;
			}
		}

	}

	/**
	 * Load site compatibility supports
	 */
	private function load_compatibility() {

		$compatibility_config_files = array(
			'elementor',         // Plugin breadcrumb-navxt & Yoat Seo.
			'breadcrumb',         // Plugin breadcrumb-navxt & Yoat Seo.
			'woocommerce/woocommerce',  // Plugin WooCommerce.
		);
		foreach ( $compatibility_config_files as $f ) {
			$file = self::$path . "/inc/compatibility/{$f}.php";
			if ( file_exists( $file ) ) {
				require_once $file;
			}
		}
	}

	/**
	 * Check if WooCommerce plugin activated
	 *
	 * @see WooCommerce
	 * @see wc
	 *
	 * @return bool
	 */
	function is_woocommerce_active() {
		return class_exists( 'WooCommerce' ) || function_exists( 'wc' );
	}

	function is_using_post() {
		$use = false;
		if ( is_singular() ) {
			$use = true;
		} else {
			if ( is_front_page() && is_home() ) {
				$use = false;
			} elseif ( is_front_page() ) {
				// static homepage.
				$use = true;
			} elseif ( is_home() ) {
				// blog page.
				$use = true;
			} else {
				if ( $this->is_woocommerce_active() ) {
					if ( is_shop() ) {
						$use = true;
					}
				}
			}
		}

		return $use;
	}

	function is_blog() {
		$is_blog = false;
		if ( is_front_page() && is_home() ) {
			$is_blog = true;
		} elseif ( is_front_page() ) { //phpcs:ignore
			// static homepage.
		} elseif ( is_home() ) {
			$is_blog = true;
		}

		return $is_blog;
	}

	function get_current_post_id() {
		$id = get_the_ID();
		if ( is_front_page() && is_home() ) {
			$id = false;
		} elseif ( is_front_page() ) {
			// Static homepage.
			$id = get_option( 'page_on_front' );
		} elseif ( is_home() ) {
			// Blog page.
			$id = get_option( 'page_for_posts' );
		} else {
			if ( $this->is_woocommerce_active() ) {
				if ( is_shop() ) {
					$id = wc_get_page_id( 'shop' );
				}
			}
		}

		return $id;
	}

	function init() {
		$this->init_hooks();
		$this->includes();
		$this->customizer = Hf_Customizer::get_instance();
		$this->customizer->init();
		do_action( 'Hf/init' );
	}

	function get_setting( $id, $device = 'desktop', $key = null ) {
		return Hf_Customizer::get_instance()->get_setting( $id, $device, $key );
	}

	function get_media( $value, $size = null ) {
		return Hf_Customizer::get_instance()->get_media( $value, $size );
	}

	function get_setting_tab( $name, $tab = null ) {
		return Hf_Customizer::get_instance()->get_setting_tab( $name, $tab );
	}

	function get_post_types( $_builtin = true ) {
		if ( 'all' === $_builtin ) {
			$post_type_args = array(
				'publicly_queryable' => true,
			);
		} else {
			$post_type_args = array(
				'publicly_queryable' => true,
				'_builtin'           => $_builtin,
			);
		}

		$_post_types = get_post_types( $post_type_args, 'objects' );

		$post_types = array();

		foreach ( $_post_types as $post_type => $object ) {
			$post_types[ $post_type ] = array(
				'name'          => $object->label,
				'singular_name' => $object->labels->singular_name,
			);
		}

		return $post_types;
	}

}
