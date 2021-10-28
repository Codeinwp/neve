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
	 * @var \ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager
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
		add_action( 'wp_insert_post', array( $this, 'update_has_template_transient' ), 10, 2 );
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
		/**
		 * Filters the css with base vars for elementor colors.
		 *
		 * @param array $css Single post page components.
		 *
		 * @since 3.1.0
		 */
		$css = apply_filters( 'neve_elementor_colors', $css );
		$css = Dynamic_Css::minify_css( $css );
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

		// Elementor locations compatibility. (This action fires by Elementor Pro)
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
	 * @param int $pid post id.
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

	/**
	 * Is the current page has an elementor template
	 *
	 * @param  string $location that location of the template such as single, archive etc.
	 * @param  string $cond Template showing condition it can be product_archive, product etc.
	 * @return bool
	 */
	public static function is_elementor_template( $location, $cond ) {
		if ( ! did_action( 'elementor_pro/init' ) ) {
			return false;
		}
		if ( ! class_exists( '\ElementorPro\Plugin', false ) ) {
			return false;
		}
		$conditions_manager = \ElementorPro\Plugin::instance()->modules_manager->get_modules( 'theme-builder' )->get_conditions_manager();

		$documents = $conditions_manager->get_documents_for_location( $location );

		foreach ( $documents as $document ) {
			$conditions = $conditions_manager->get_document_conditions( $document );
			foreach ( $conditions as $condition ) {
				if ( 'include' === $condition['type'] && $cond === $condition['name'] ) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Update has_template transient value when a post updated or inserted.
	 *
	 * @param  int      $post_ID that post ID.
	 * @param  \WP_Post $post that WP_Post object.
	 * @return void
	 */
	public function update_has_template_transient( $post_ID, $post ) {
		if ( $post->post_type !== 'elementor_library' ) {
			return;
		}

		$template_type = get_post_meta( $post_ID, '_elementor_template_type', true );

		// forcefully update has_template
		$this->has_template( $template_type, true );
	}

	/**
	 * Check if the site has Elementor template as independent from current post ID.
	 * The method was designed to use in customizer. ! Do not use it outside of the customizer.
	 * The method works if only Elementor Pro is active.
	 *
	 * @param  string $elementor_template_type that is template type such as page,product-archive,product,kit etc.
	 * @return bool
	 */
	public static function has_template( $elementor_template_type, $force_refresh = false ) {
		if ( ! class_exists( '\ElementorPro\Plugin', false ) ) {
			return false;
		}

		$transient_key        = 'neve_elementor_has_template_' . $elementor_template_type;
		$transient_expiry_sec = HOUR_IN_SECONDS;
		$cached_value         = get_transient( $transient_key ) == true; // cast transient (string) to bool

		if ( $force_refresh !== true && $cached_value !== false ) {
			return $cached_value;
		}

		$args = [
			'post_type'              => 'elementor_library',
			'post_status'            => 'publish',
			'update_post_term_cache' => false,
			'meta_key'               => '_elementor_template_type',
			'meta_value'             => $elementor_template_type, //phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_value
			'no_found_rows'          => true,
			'posts_per_page'         => 1,
			'fields'                 => 'ids',
		];

		$query = new \WP_Query( $args );

		// if elementor template not found
		if ( empty( $query->posts ) ) {
			set_transient( $transient_key, 0, $transient_expiry_sec );
			return false;
		}

		set_transient( $transient_key, 1, $transient_expiry_sec );
		return true;
	}
}
