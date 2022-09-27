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
use HFG\Core\Css_Generator;
use HFG\Core\Customizer;
use HFG\Core\Settings\Config;
use HFG\Core\Settings\Manager;
use HFG\Traits\Core;
use PHP_CodeSniffer\Tokenizers\CSS;

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
	const VERSION = '2.0.0';
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
	 * Dynamic CSS generator.
	 *
	 * @since   2.7.0
	 * @var Css_Generator Dynamic CSS generator.
	 */
	private $css_generator;

	/**
	 * Main Instance
	 * Ensures only one instance of class is loaded or can be loaded.
	 *
	 * @return \HFG\Main|null Instance.
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
			self::$_instance->settings      = new Manager();
			self::$_instance->customizer    = new Customizer();
			self::$_instance->css_generator = new Css_Generator();
			$default_directories            = [];
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
		add_filter( 'neve_style_subscribers', array( $this, 'inline_styles' ) );
		if ( ! neve_is_new_builder() ) {
			add_action( 'admin_enqueue_scripts', array( $this, 'admin_utils_scripts' ) );
		}
	}

	/**
	 * JS utility scripts for admin
	 *
	 * @since   1.0.1
	 * @access  public
	 */
	public function admin_utils_scripts() {
		$layout_data   = self::get_instance()->get_builder( 'footer' )->get_layout_data();
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
	 * @param array  $args Component arguments.
	 */
	public function load( $slug, $name = '', $args = [] ) {

		$templates = array();
		$name      = (string) $name;
		if ( $name !== '' ) {
			$templates[] = "{$slug}-{$name}.php";
		}
		$templates[] = "{$slug}.php";

		$located = '';

		if ( count( self::$templates_location ) === 1 && count( $templates ) === 1 ) {
			load_template( self::$templates_location[0] . $templates[0], false, $args );

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
			load_template( $located, false, $args );
		}
	}


	/**
	 * Generate inline style CSS from array.
	 *
	 * @param array $subscribers Subscribers list.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function inline_styles( $subscribers ) {
		if ( is_customize_preview() ) {
			return $subscribers;
		}
		$css_array = [];
		/**
		 * An instance of Abstract_Builder.
		 *
		 * @var Abstract_Builder $builder
		 */
		foreach ( $this->get_builders() as $builder ) {
			$css_array = $builder->add_style( $css_array );
		}

		return array_merge( $subscribers, $css_array );
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
