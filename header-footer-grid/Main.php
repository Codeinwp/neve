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
		if ( ! apply_filters( 'hfg_active', true ) ) {
			return null;
		}
		if ( null === self::$_instance ) {
			self::$_instance = new self();
			self::$_instance->init();
			self::$_instance->settings   = new Manager();
			self::$_instance->customizer = new Customizer();
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
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
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
		$hide_widgets = '
		( function( $ ) {
			setTimeout(function() {
				if ( $("#footer-one-widgets").find(\'div.widget\').length === 0 ) {
					$("#footer-one-widgets").parent().hide();
				}
				if ( $("#footer-two-widgets").find(\'div.widget\').length === 0 ) {
					$("#footer-two-widgets").parent().hide();
				}
				if ( $("#footer-three-widgets").find(\'div.widget\').length === 0 ) {
					$("#footer-three-widgets").parent().hide();
				}
				if ( $("#footer-four-widgets").find(\'div.widget\').length === 0 ) {
					$("#footer-four-widgets").parent().hide();
				}
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
		$template_locations = apply_filters(
			'hfg_template_locations',
			array(
				get_stylesheet_directory() . '/' . $this->get_templates_location(),
				get_template_directory() . '/' . $this->get_templates_location(),
			)
		);

		$templates = array();
		$name      = (string) $name;
		if ( $name !== '' ) {
			$templates[] = "{$slug}-{$name}.php";
		}
		$templates[] = "{$slug}.php";

		$located = '';
		foreach ( $template_locations as $location ) {
			foreach ( $templates as $template ) {
				if ( file_exists( $location . $template ) ) {
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
	 * Get templates path location.
	 *
	 * @return string Templates path.
	 */
	public function get_templates_location() {
		return 'header-footer-grid/templates/';
	}

	/**
	 * Enqueue required files for the module.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function enqueue_scripts() {
		$suffix = $this->get_assets_suffix();
		wp_enqueue_style( 'hfg-style', esc_url( Config::get_url() ) . '/assets/css/style' . $suffix . '.css', array(), self::VERSION );

		wp_enqueue_script(
			'hfg-theme-functions',
			esc_url( Config::get_url() ) . '/assets/js/theme' . $suffix . '.js',
			array(),
			self::VERSION,
			true
		);
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
