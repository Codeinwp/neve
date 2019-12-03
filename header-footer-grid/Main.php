<?php
/**
 * Main entry point for Header Footer Grid
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Customizer;
use HFG\Core\Settings\Config;
use HFG\Core\Settings\Manager;
use HFG\Traits\Core;

/**
 * Class Main
 *
 * @package HFG
 */
class Main {
	use Core;
	/**
	 * Template relative directory.
	 */
	const TEMPLATES_DIRECTORY = 'header-footer-grid/templates/';
	/**
	 * Define version constant used for assets.
	 */
	const VERSION = '1.0.3';
	/**
	 * Holds the instance of this class.
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Main $_instance
	 */
	private static $_instance = null;
	/**
	 * Holds a reference to Settings class
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Manager $settings
	 */
	private $settings;
	/**
	 * Cache is active filter result.
	 *
	 * @var bool Is active?
	 */
	private static $is_active = true;
	/**
	 * Teamplates locations.
	 *
	 * @var array Header templates locations.
	 */
	private static $templates_location = [];
	/**
	 * Holds a reference to Customizer class
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Customizer $settings
	 */
	private $customizer;

	/**
	 * Main Instance
	 * Ensures only one instance of class is loaded or can be loaded.
	 *
	 * @return \HFG\Main Instance.
	 * @since   1.0.0
	 * @access  public
	 */
	public static function get_instance() {

		if ( null === self::$_instance && self::$is_active ) {
			if ( ! apply_filters( 'hfg_active', true ) ) {
				self::$is_active = false;

				return null;
			}
			self::$_instance = new self();
			self::$_instance->init();
			self::$_instance->settings   = new Manager();
			self::$_instance->customizer = new Customizer();
			$default_directories         = [];
			if ( is_child_theme() ) {
				$default_directories[] = get_stylesheet_directory() . '/' . self::TEMPLATES_DIRECTORY;
			}
			$default_directories[]    = get_template_directory() . '/' . self::TEMPLATES_DIRECTORY;
			self::$templates_location = apply_filters( 'hfg_template_locations', $default_directories );

		}

		return self::$_instance;
	}

	/**
	 * Initializes the class
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		// add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_filter( 'neve_style_output_neve-generated-style', array( $this, 'append_css_style' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_utils_scripts' ) );
	}

	/**
	 * JS utility scripts for admin
	 *
	 * @since   1.0.1
	 * @access  public
	 */
	public function admin_utils_scripts() {
		$layout_data   = Main::get_instance()->get_builder( 'footer' )->get_layout_data();
		$footer_top    = ( isset( $layout_data['desktop']['top'] ) ) ? $layout_data['desktop']['top'] : array();
		$footer_bottom = ( isset( $layout_data['desktop']['bottom'] ) ) ? $layout_data['desktop']['bottom'] : array();

		$footer_rows        = array_merge( wp_list_pluck( $footer_top, 'id' ), wp_list_pluck( $footer_bottom, 'id' ) );
		$sidebars_to_search = array(
			'footer-one-widgets',
			'footer-two-widgets',
			'footer-three-widgets',
			'footer-four-widgets',
		);
		$hide               = '';
		foreach ( $sidebars_to_search as $id ) {
			if ( ! in_array( $id, $footer_rows, true ) ) {
				$hide .= '$("#' . $id . '").parent().hide();';
			}
		}
		$hide_widgets = '
		( function( $ ) {
			setTimeout(function() {
				' . $hide . '
			}, 300);
		})(jQuery)
		';
		wp_add_inline_script( 'jquery', $hide_widgets );
	}

	/**
	 * Load template.
	 *
	 * @param string $slug Template slug.
	 * @param string $name Template variation.
	 */
	public function load( $slug, $name = '' ) {

		$templates = array();
		$name      = (string) $name;
		if ( $name !== '' ) {
			$templates[] = "{$slug}-{$name}.php";
		}
		$templates[] = "{$slug}.php";

		$located = '';

		if ( count( self::$templates_location ) === 1 && count( $templates ) === 1 ) {
			load_template( self::$templates_location[0] . $templates[0], false );

			return;
		}

		foreach ( self::$templates_location as $location ) {
			foreach ( $templates as $template ) {
				if ( is_file( $location . $template ) ) {
					$located = $location . $template;
					break;
				}
			}
			if ( '' !== $located ) {
				break;
			}
		}

		if ( '' !== $located ) {
			load_template( $located, false );
		}
	}

	/**
	 * Enqueue required files for the module.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function enqueue_scripts() {
		if ( ! $this->should_enqueue_assets() ) {
			return;
		}

		// wp_register_style( 'hfg-style', esc_url( Config::get_url() ) . '/assets/css/style.min.css', array(), self::VERSION );
		// wp_style_add_data( 'hfg-style', 'rtl', 'replace' );
		// wp_style_add_data( 'hfg-style', 'suffix', '.min' );
		// wp_enqueue_style( 'hfg-style' );
		// wp_enqueue_script(
		// 'hfg-theme-functions',
		// esc_url( Config::get_url() ) . '/assets/js/theme.min.js',
		// array(),
		// self::VERSION,
		// true
		// );
	}

	/**
	 * Appends css style to neve inline styles.
	 *
	 * @param string $style CSS rules.
	 *
	 * @return string
	 * @since   1.0.0
	 * @access  public
	 */
	public function append_css_style( $style ) {
		return $style . $this->inline_styles();
	}

	/**
	 * Generate inline style CSS from array.
	 *
	 * @return string
	 * @since   1.0.0
	 * @access  public
	 */
	public function inline_styles() {
		if ( is_customize_preview() ) {
			return;
		}
		$css_array = [];
		/**
		 * An instance of Abstract_Builder.
		 *
		 * @var Abstract_Builder $builder
		 */
		foreach ( $this->get_builders() as $builder ) {
			$builder_css_array = $builder->add_style( $css_array );
			$css_array         = $this->array_merge_recursive_distinct( $css_array, $builder_css_array );
		}

		return $this->css_array_to_css( $css_array );
	}

	/**
	 * Return builders list, or builder details.
	 *
	 * @return Abstract_Builder[] Builder array(s).
	 */
	public function get_builders() {
		return $this->customizer->get_builders();
	}

	/**
	 * Return builders list, or builder details.
	 *
	 * @param string $builder Builder name, if required.
	 *
	 * @return Abstract_Builder Builder array(s).
	 */
	public function get_builder( $builder = '' ) {
		if ( empty( $builder ) ) {
			$builder = Abstract_Builder::get_current_builder();
		}

		return $this->customizer->get_builders( $builder );
	}

	/**
	 * Cloning is forbidden.
	 *
	 * @access public
	 * @since  1.0.0
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, '', '1.0.0' );
	}

	/**
	 * Un-serializing instances of this class is forbidden.
	 *
	 * @access public
	 * @since  1.0.0
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, '', '1.0.0' );
	}


	/**
	 * Check if assets should be enqueued.
	 *
	 * @return bool
	 */
	private function should_enqueue_assets() {
		$disabled_templates = array( 'elementor_canvas' );
		$current_template   = get_page_template_slug();

		if ( in_array( $current_template, $disabled_templates, true ) ) {
			return false;
		}
		if ( is_singular() ) {
			$id     = get_the_ID();
			$header = get_post_meta( $id, 'neve_meta_disable_header', true );
			$footer = get_post_meta( $id, 'neve_meta_disable_footer', true );
			if ( $header === 'on' && $footer === 'on' ) {
				return false;
			}
		}

		return true;
	}
}

/**
 * Function to return Main instance.
 *
 * @return Main
 * @since   1.0.0
 */
function hfg() {
	return Main::get_instance();
}
