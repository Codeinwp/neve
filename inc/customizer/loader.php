<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Customizer
 */

namespace Neve\Customizer;

use Neve\Core\Factory;

/**
 * Main customizer handler.
 *
 * @package Neve\Customizer
 */
class Loader {

	/**
	 * Customizer modules.
	 *
	 * @var array
	 */
	private $customizer_modules = array();

	/**
	 * Loader constructor.
	 */
	public function __construct() {
		add_action( 'customize_preview_init', array( $this, 'enqueue_customizer_preview' ) );
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'enqueue_customizer_controls' ) );
	}

	/**
	 * Initialize the customizer functionality
	 */
	public function init() {
		global $wp_customize;

		if ( ! isset( $wp_customize ) ) {
			return;
		}
		$this->define_modules();
		$this->load_modules();
	}

	/**
	 * Define the modules that will be loaded.
	 */
	private function define_modules() {
		$this->customizer_modules = apply_filters(
			'neve_filter_customizer_modules',
			array(
				'Customizer\Options\Main',
				'Customizer\Options\Layout_Container',
				'Customizer\Options\Layout_Blog',
				'Customizer\Options\Layout_Single_Post',
				'Customizer\Options\Layout_Single_Product',
				'Customizer\Options\Layout_Sidebar',
				'Customizer\Options\Top_Bar',
				'Customizer\Options\Typography',
				'Customizer\Options\Colors_Background',
				'Customizer\Options\Buttons',
				'Customizer\Options\Rtl',
				'Customizer\Options\Upsells',
			)
		);
	}

	/**
	 * Enqueue customizer controls script.
	 */
	public function enqueue_customizer_controls() {
		wp_register_style( 'neve-customizer-style', NEVE_ASSETS_URL . 'css/customizer-style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), NEVE_VERSION );
		wp_style_add_data( 'neve-customizer-style', 'rtl', 'replace' );
		wp_style_add_data( 'neve-customizer-style', 'suffix', '.min' );
		wp_enqueue_style( 'neve-customizer-style' );

		wp_enqueue_script(
			'neve-customizer-controls',
			NEVE_ASSETS_URL . 'js/customizer-controls' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.js',
			array(
				'jquery',
				'wp-color-picker',
			),
			NEVE_VERSION,
			true
		);

		$editor_dependencies = array(
			'wp-i18n',
			'wp-components',
			'wp-edit-post',
			'wp-element',
		);
		wp_register_script( 'react-controls', get_template_directory_uri() . '/inc/customizer/controls/react/bundle/controls.js', $editor_dependencies, NEVE_VERSION, true );
		wp_localize_script(
			'react-controls',
			'NeveReactCustomize',
			apply_filters(
				'neve_react_controls_localization',
				array(
					'fonts' => array(
						'System' => neve_get_standard_fonts(),
						'Google' => neve_get_google_fonts(),
					),
				)
			)
		);
		wp_enqueue_script( 'react-controls' );
		wp_enqueue_style(
			'react-controls',
			get_template_directory_uri() .
			'/inc/customizer/controls/react/bundle/controls.css',
			array( 'wp-components' ),
			NEVE_VERSION
		);
		wp_enqueue_style(
			'neve-fonts-control-google-fonts',
			'https://fonts.googleapis.com/css?family=' . join( '|', neve_get_google_fonts() ) . '&text=Abc',
			[],
			NEVE_VERSION
		);
	}

	/**
	 * Enqueue customizer preview script.
	 */
	public function enqueue_customizer_preview() {
		wp_enqueue_style(
			'neve-customizer-preview-style',
			NEVE_ASSETS_URL . 'css/customizer-preview' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css',
			array(),
			NEVE_VERSION
		);
		wp_register_script(
			'neve-customizer-preview',
			NEVE_ASSETS_URL . 'js/customizer-preview.js',
			array(),
			NEVE_VERSION,
			true
		);
		wp_localize_script( 'neve-customizer-preview', 'neveCustomizePreview', apply_filters( 'neve_customize_preview_localization', array() ) );
		wp_enqueue_script( 'neve-customizer-preview' );
	}

	/**
	 * Load the customizer modules.
	 *
	 * @return void
	 */
	private function load_modules() {
		$factory = new Factory( $this->customizer_modules );
		$factory->load_modules();
	}
}
