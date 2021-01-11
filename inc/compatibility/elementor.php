<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      05/09/2018
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

use Neve\Core\Dynamic_Css;

/**
 * Class Elementor
 *
 * @package Neve\Compatibility
 */
class Elementor extends Page_Builder_Base {

	/**
	 * Elementor location manager
	 *
	 * @var \ElementorPro\Modules\ThemeBuilder\Module
	 */
	public $elementor_location_manager;

	/**
	 * Init function.
	 */
	public function init() {
		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			return;
		}
		add_action( 'neve_dynamic_style_output', array( $this, 'fix_links' ), 99, 2 );
		add_action( 'wp', array( $this, 'add_theme_builder_hooks' ) );
		add_action( 'elementor/editor/before_enqueue_scripts', array( $this, 'maybe_set_page_template' ), 1 );
		add_filter( 'rest_request_after_callbacks', [ $this, 'alter_global_colors_in_picker' ], 999, 3 );
		add_filter( 'rest_request_after_callbacks', [ $this, 'alter_global_colors_front_end' ], 999, 3 );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ), 100 );
	}

	/**
	 * Enqueue Global Colors
	 */
	public function enqueue() {
		$colors = $this->get_current_palette_colors();
		$css    = ':root{';
		foreach ( $colors as $slug => $color ) {
			$css .= '--e-global-color-' . str_replace( '-', '', $slug ) . ':' . $color . ';';
		}
		$css .= '}';
		$css  = Dynamic_Css::minify_css( $css );
		wp_add_inline_style( 'neve-style', $css );
	}

	/**
	 * Filter rest responses to add Neve Palette Colors to pages using Elementor.
	 *
	 * @param \WP_REST_Response $response request response.
	 * @param array             $handler request handler.
	 * @param \WP_REST_Request  $request rest request.
	 * @return \WP_REST_Response
	 */
	public function alter_global_colors_front_end( $response, $handler, \WP_REST_Request $request ) {
		$route         = $request->get_route();
		$rest_to_slugs = [
			'nvprimaryaccent'   => 'nv-primary-accent',
			'nvsecondaryaccent' => 'nv-secondary-accent',
			'nvsitebg'          => 'nv-site-bg',
			'nvlightbg'         => 'nv-light-bg',
			'nvdarkbg'          => 'nv-dark-bg',
			'nvtextcolor'       => 'nv-text-color',
			'nvtextdarkbg'      => 'nv-text-dark-bg',
			'nvc1'              => 'nv-c-1',
			'nvc2'              => 'nv-c-2',
		];

		$rest_id = substr( $route, strrpos( $route, '/' ) + 1 );

		if ( ! in_array( $rest_id, array_keys( $rest_to_slugs ), true ) ) {
			return $response;
		}

		$colors   = $this->get_current_palette_colors();
		$response = new \WP_REST_Response(
			[
				'id'    => esc_attr( $rest_id ),
				'title' => $this->get_global_color_prefix() . esc_html( $rest_to_slugs[ $rest_id ] ),
				'value' => neve_sanitize_colors( $colors[ $rest_to_slugs[ $rest_id ] ] ),
			]
		);
		return $response;
	}

	/**
	 * Filter rest responses to add Neve Palette Colors to Elementor.
	 *
	 * @param \WP_REST_Response $response request response.
	 * @param array             $handler request handler.
	 * @param \WP_REST_Request  $request rest request.
	 * @return \WP_REST_Response
	 */
	public function alter_global_colors_in_picker( $response, $handler, \WP_REST_Request $request ) {
		$route = $request->get_route();

		if ( $route !== '/elementor/v1/globals' ) {
			return $response;
		}

		$label_map = [
			'nv-primary-accent'   => __( 'Primary Accent', 'neve' ),
			'nv-secondary-accent' => __( 'Secondary Accent', 'neve' ),
			'nv-site-bg'          => __( 'Site Background', 'neve' ),
			'nv-light-bg'         => __( 'Light Background', 'neve' ),
			'nv-dark-bg'          => __( 'Dark Background', 'neve' ),
			'nv-text-color'       => __( 'Text Color', 'neve' ),
			'nv-text-dark-bg'     => __( 'Text Dark Background', 'neve' ),
			'nv-c-1'              => __( 'Extra Color 1', 'neve' ),
			'nv-c-2'              => __( 'Extra Color 2', 'neve' ),
		];

		$colors = $this->get_current_palette_colors();
		$data   = $response->get_data();

		foreach ( $colors as $slug => $color_value ) {
			$no_hyphens                    = str_replace( '-', '', $slug );
			$data['colors'][ $no_hyphens ] = [
				'id'    => esc_attr( $no_hyphens ),
				'title' => $this->get_global_color_prefix() . esc_html( $label_map[ $slug ] ),
				'value' => neve_sanitize_colors( $color_value ),
			];
		}

		$response->set_data( $data );

		return $response;
	}

	/**
	 * Add support for elementor theme locations.
	 */
	public function add_theme_builder_hooks() {
		if ( ! class_exists( '\ElementorPro\Modules\ThemeBuilder\Module', false ) ) {
			return;
		}

		// Elementor locations compatibility.
		add_action( 'elementor/theme/register_locations', array( $this, 'register_theme_locations' ) );

		// Override theme templates.
		add_action( 'neve_do_top_bar', array( $this, 'do_header' ), 0 );
		add_action( 'neve_do_header', array( $this, 'do_header' ), 0 );
		add_action( 'neve_do_footer', array( $this, 'do_footer' ), 0 );
		add_action( 'neve_do_404', array( $this, 'do_404' ), 0 );
		add_action( 'neve_do_single_post', array( $this, 'do_single_post' ), 0 );
		add_action( 'neve_do_single_page', array( $this, 'do_single_page' ), 0 );
		add_action( 'neve_page_header', array( $this, 'remove_header_on_page' ), 0 );
	}

	/**
	 * Register Theme Location for Elementor
	 * see https://developers.elementor.com/theme-locations-api/
	 *
	 * @param \ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager $manager Elementor object.
	 */
	public function register_theme_locations( $manager ) {
		$manager->register_all_core_location();
		$this->elementor_location_manager = \ElementorPro\Modules\ThemeBuilder\Module::instance()->get_locations_manager();
	}

	/**
	 * Remove actions for elementor header to act properly.
	 */
	public function do_header() {
		$did_location = $this->elementor_location_manager->do_location( 'header' );
		if ( $did_location ) {
			remove_all_actions( 'neve_do_top_bar' );
			remove_all_actions( 'neve_do_header' );
		}
	}

	/**
	 * Remove actions for elementor footer to act properly.
	 */
	public function do_footer() {
		$did_location = $this->elementor_location_manager->do_location( 'footer' );
		if ( $did_location ) {
			remove_all_actions( 'neve_do_footer' );
		}
	}

	/**
	 * Remove actions for elementor 404 to act properly.
	 */
	public function do_404() {
		if ( ! is_404() ) {
			return;
		}
		$did_location = $this->elementor_location_manager->do_location( 'single' );
		if ( $did_location ) {
			remove_all_actions( 'neve_do_404' );
		}
	}

	/**
	 * Remove actions for elementor single post to act properly.
	 */
	public function do_single_post() {
		$did_location = $this->elementor_location_manager->do_location( 'single' );
		if ( $did_location ) {
			remove_all_actions( 'neve_do_single_post' );
		}
	}

	/**
	 * Remove actions for elementor single page to act properly.
	 */
	public function do_single_page() {
		$did_location = $this->elementor_location_manager->do_location( 'single' );
		if ( $did_location ) {
			remove_all_actions( 'neve_do_single_page' );
		}
	}

	/**
	 * Remove title on single page.
	 */
	public function remove_header_on_page() {
		if ( ! is_singular( 'page' ) ) {
			return;
		}
		if ( elementor_theme_do_location( 'single' ) ) {
			remove_all_actions( 'neve_page_header' );
		}
	}

	/**
	 * Check if it page was edited with page builder.
	 *
	 * @param string $pid post id.
	 *
	 * @return bool
	 */
	protected function is_edited_with_builder( $pid ) {
		$post_meta = get_post_meta( $pid, '_elementor_edit_mode', true );
		if ( $post_meta === 'builder' ) {
			return true;
		}

		return false;
	}

	/**
	 * Fix the underline of links added by neve.
	 *
	 * @param string $css Current css.
	 * @param string $context Context.
	 *
	 * @return string
	 */
	public function fix_links( $css, $context = 'frontend' ) {
		if ( $context !== 'frontend' ) {
			return $css;
		}

		return $css . '.nv-content-wrap .elementor a:not(.button):not(.wp-block-file__button){
				text-decoration: none;
			}';
	}

	/**
	 * Get current palette colors.
	 *
	 * @return array
	 */
	private function get_current_palette_colors() {
		$customizer = get_theme_mod( 'neve_global_colors', neve_get_global_colors_default( true ) );
		$active     = $customizer['activePalette'];
		$palettes   = $customizer['palettes'];
		$palette    = $palettes[ $active ];

		return $palette['colors'];
	}

	/**
	 * Get the global colors prefix.
	 *
	 * @return string
	 */
	private function get_global_color_prefix() {
		return ( apply_filters( 'ti_wl_theme_is_localized', false ) ? __( 'Theme', 'neve' ) : 'Neve' ) . ' - ';
	}
}
