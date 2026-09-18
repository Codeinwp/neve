<?php
/**
 * Ability: neve/site-get-state.
 *
 * A single grounding snapshot of the site's Neve configuration. The cheap tier
 * (colors, typography, layout, modules, license, integrations) is always
 * returned; heavy sections (header, footer, blog, single) are opt-in via
 * `sections`.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Class Site_Get_State
 *
 * @package Neve\Abilities
 */
class Site_Get_State extends Abstract_Ability {
	use Schema_Helpers;

	/**
	 * Cheap sections returned by default.
	 */
	const DEFAULT_SECTIONS = array( 'colors', 'typography', 'layout', 'buttons', 'menus', 'performance', 'modules', 'license', 'integrations' );

	/**
	 * All selectable sections.
	 */
	const ALL_SECTIONS = array( 'colors', 'typography', 'layout', 'buttons', 'menus', 'performance', 'modules', 'license', 'integrations', 'header', 'footer', 'blog', 'single', 'shop' );

	/**
	 * Menu locations registered by the theme.
	 */
	const MENU_LOCATIONS = array( 'primary', 'footer', 'top-bar' );

	/**
	 * {@inheritDoc}
	 */
	protected function get_id() {
		return 'site-get-state';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_label() {
		return __( 'Get site state', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_description() {
		return __( 'Return a grounding snapshot of the Neve site: color palette, typography, layout, active modules, license tier and integrations. Heavy sections (header, footer, blog, single, shop) are opt-in via the "sections" argument. Read this first to understand the site before making changes.', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_annotations() {
		return array( 'readonly' => true );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_input_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'sections' => array(
					'type'        => 'array',
					'description' => 'Sections to include. Defaults to the cheap set; add header/footer/blog/single/shop for heavier detail.',
					'items'       => array(
						'type' => 'string',
						'enum' => self::ALL_SECTIONS,
					),
				),
				'noop'     => array(
					'type'        => 'boolean',
					'description' => 'Optional compatibility flag; ignored. Clients that cannot call this ability with an empty object may send noop=true.',
				),
			),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_output_schema() {
		return array(
			'type'                 => 'object',
			'additionalProperties' => true,
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function run( array $input ) {
		$sections = isset( $input['sections'] ) && is_array( $input['sections'] ) && ! empty( $input['sections'] )
			? array_values( array_intersect( self::ALL_SECTIONS, $input['sections'] ) )
			: self::DEFAULT_SECTIONS;

		$state = array();

		foreach ( $sections as $section ) {
			$method = 'section_' . str_replace( '-', '_', $section );
			if ( ! method_exists( $this, $method ) ) {
				continue;
			}

			/**
			 * Filters one section of the site state snapshot.
			 *
			 * Neve Pro uses this to fill the modules / license sections and to
			 * add its own settings to the shared sections.
			 *
			 * @param array<mixed>  $data    The section data.
			 * @param string $section The section name.
			 */
			$state[ $section ] = (array) apply_filters( 'neve_ability_site_state_section', $this->$method(), $section );
		}

		return $state;
	}

	/**
	 * Colors / active palette.
	 *
	 * @return array<mixed>
	 */
	private function section_colors() {
		$palette = $this->decode_mod( get_theme_mod( 'neve_global_colors' ) );
		$active  = isset( $palette['activePalette'] ) ? $palette['activePalette'] : 'base';
		$colors  = array();

		if ( isset( $palette['palettes'][ $active ]['colors'] ) && is_array( $palette['palettes'][ $active ]['colors'] ) ) {
			$colors = $palette['palettes'][ $active ]['colors'];
		}

		$custom = $this->decode_mod( get_theme_mod( 'neve_global_custom_colors' ) );

		return array(
			'active_palette'     => $active,
			'available_palettes' => isset( $palette['palettes'] ) && is_array( $palette['palettes'] ) ? array_keys( $palette['palettes'] ) : array(),
			'colors'             => $colors,
			'custom_colors'      => count( $custom ),
		);
	}

	/**
	 * Typography.
	 *
	 * @return array<mixed>
	 */
	private function section_typography() {
		return array(
			'body_font'     => get_theme_mod( 'neve_body_font_family', '' ),
			'headings_font' => get_theme_mod( 'neve_headings_font_family', '' ),
			'body_typeface' => $this->decode_mod( get_theme_mod( 'neve_typeface_general' ) ),
		);
	}

	/**
	 * Layout.
	 *
	 * @return array<mixed>
	 */
	private function section_layout() {
		return array(
			'container_width' => $this->get_responsive_theme_mod( 'neve_container_width', 1170 ),
			'container_style' => get_theme_mod( 'neve_default_container_style', 'contained' ),
			'sidebar_layout'  => get_theme_mod( 'neve_default_sidebar_layout', 'right' ),
			'advanced_layout' => (bool) get_theme_mod( 'neve_advanced_layout_options', false ),
		);
	}

	/**
	 * Button appearance / spacing summary.
	 *
	 * @return array<mixed>
	 */
	private function section_buttons() {
		return array(
			'primary'   => $this->button_group_state( 'neve_button_padding', 'neve_button_typeface', 'neve_button_appearance' ),
			'secondary' => $this->button_group_state( 'neve_secondary_button_padding', 'neve_secondary_button_typeface', 'neve_secondary_button_appearance' ),
		);
	}

	/**
	 * Menu assignment summary.
	 *
	 * @return array<mixed>
	 */
	private function section_menus() {
		$locations = get_theme_mod( 'nav_menu_locations', array() );
		$locations = is_array( $locations ) ? $locations : array();
		$summary   = array();

		foreach ( self::MENU_LOCATIONS as $location ) {
			$menu_id = isset( $locations[ $location ] ) ? (int) $locations[ $location ] : 0;
			$menu    = $menu_id ? wp_get_nav_menu_object( $menu_id ) : null;
			$items   = $menu_id ? wp_get_nav_menu_items( $menu_id ) : array();

			$summary[ $location ] = array(
				'menu_id'     => $menu_id,
				'menu_name'   => $menu ? $menu->name : '',
				'items_count' => is_array( $items ) ? count( $items ) : 0,
			);
		}

		return $summary;
	}

	/**
	 * Performance option summary. Neve Pro adds its own toggles.
	 *
	 * @return array<mixed>
	 */
	private function section_performance() {
		$state = array();

		foreach ( Site_Set_Performance::OPTION_MAP as $key => $option_name ) {
			$state[ $key ] = (bool) get_option( $option_name, false );
		}

		return $state;
	}

	/**
	 * Neve Pro module enabled map. Empty without Neve Pro.
	 *
	 * @return array<string,bool>
	 */
	private function section_modules() {
		return array();
	}

	/**
	 * Neve Pro license tier and validity. Tier 0 without Neve Pro.
	 *
	 * @return array<mixed>
	 */
	private function section_license() {
		return array(
			'tier'  => 0,
			'valid' => false,
		);
	}

	/**
	 * Active integrations.
	 *
	 * @return array<string,bool>
	 */
	private function section_integrations() {
		return array(
			'neve_pro'    => defined( 'NEVE_PRO_VERSION' ),
			'woocommerce' => class_exists( 'WooCommerce', false ),
			'sparks'      => defined( 'SPARKS_WC_VERSION' ) || function_exists( 'sparks' ),
			'edd'         => class_exists( 'Easy_Digital_Downloads', false ),
			'lifterlms'   => class_exists( 'LifterLMS', false ),
			'learndash'   => defined( 'LEARNDASH_VERSION' ),
			'elementor'   => defined( 'ELEMENTOR_VERSION' ),
			'seo'         => defined( 'WPSEO_VERSION' ) || class_exists( 'WPSEO_Options' ) || defined( 'RANK_MATH_VERSION' ),
		);
	}

	/**
	 * Header builder summary (heavy).
	 *
	 * @return array<mixed>
	 */
	private function section_header() {
		return array_merge(
			$this->builder_summary( 'header' ),
			array(
				'transparent' => (bool) get_theme_mod( 'neve_transparent_header', false ),
			)
		);
	}

	/**
	 * Footer builder summary (heavy).
	 *
	 * @return array<mixed>
	 */
	private function section_footer() {
		$summary              = $this->builder_summary( 'footer' );
		$summary['copyright'] = get_theme_mod( 'footer_copyright_content', '' );

		return $summary;
	}

	/**
	 * Blog detail (heavy).
	 *
	 * @return array<mixed>
	 */
	private function section_blog() {
		return array_merge(
			array(
				'archive_container_style' => get_theme_mod( 'neve_blog_archive_container_style', 'contained' ),
				'archive_sidebar_layout'  => get_theme_mod( 'neve_blog_archive_sidebar_layout', 'right' ),
			),
			Display_Fields::read_group( 'blog' )
		);
	}

	/**
	 * Single post detail (heavy).
	 *
	 * @return array<mixed>
	 */
	private function section_single() {
		return array_merge(
			array(
				'container_style' => get_theme_mod( 'neve_single_post_container_style', 'contained' ),
				'sidebar_layout'  => get_theme_mod( 'neve_single_post_sidebar_layout', 'right' ),
			),
			Display_Fields::read_group( 'single' )
		);
	}

	/**
	 * WooCommerce shop detail (heavy). Empty when WooCommerce is not active.
	 *
	 * @return array<mixed>
	 */
	private function section_shop() {
		if ( ! class_exists( 'WooCommerce', false ) ) {
			return array();
		}

		return array_merge(
			array(
				'archive_sidebar_layout' => get_theme_mod( 'neve_shop_archive_sidebar_layout', 'right' ),
				'product_sidebar_layout' => get_theme_mod( 'neve_single_product_sidebar_layout', 'right' ),
			),
			Display_Fields::read_group( 'shop' )
		);
	}

	/**
	 * Read a button group from its theme mods.
	 *
	 * @param string $padding_mod    Theme mod key for padding.
	 * @param string $typeface_mod   Theme mod key for typography.
	 * @param string $appearance_mod Theme mod key for colors/radius.
	 * @return array<mixed>
	 */
	private function button_group_state( $padding_mod, $typeface_mod, $appearance_mod ) {
		return array(
			'padding'    => $this->decode_mod( get_theme_mod( $padding_mod, array() ) ),
			'typeface'   => $this->decode_mod( get_theme_mod( $typeface_mod, array() ) ),
			'appearance' => $this->decode_mod( get_theme_mod( $appearance_mod, array() ) ),
		);
	}

	/**
	 * Reduce a builder's layout to rows -> slots -> [component ids].
	 *
	 * @param string $builder_id The builder id.
	 * @return array<mixed>
	 */
	private function builder_summary( $builder_id ) {
		if ( ! class_exists( '\HFG\Main' ) ) {
			return array( 'rows' => array() );
		}

		$builder = \HFG\Main::get_instance()->get_builder( $builder_id );
		if ( ! is_object( $builder ) ) {
			return array( 'rows' => array() );
		}

		$layout = $builder->get_layout_data();
		$rows   = array();

		foreach ( $layout as $device => $device_rows ) {
			if ( ! is_array( $device_rows ) ) {
				continue;
			}
			foreach ( $device_rows as $row => $slots ) {
				if ( ! is_array( $slots ) || empty( $slots ) ) {
					continue;
				}
				$rows[ $device ][ $row ] = $this->ids_in_row( $slots );
			}
		}

		return array( 'rows' => $rows );
	}

	/**
	 * Pluck component ids from a row (slotted or flat).
	 *
	 * @param array<mixed> $slots The row data.
	 * @return array<mixed>
	 */
	private function ids_in_row( array $slots ) {
		$ids = array();

		if ( isset( $slots[0] ) ) {
			foreach ( $slots as $item ) {
				if ( isset( $item['id'] ) ) {
					$ids[] = $item['id'];
				}
			}
			return $ids;
		}

		foreach ( $slots as $slot => $items ) {
			if ( ! is_array( $items ) ) {
				continue;
			}
			foreach ( $items as $item ) {
				if ( isset( $item['id'] ) ) {
					$ids[ $slot ][] = $item['id'];
				}
			}
		}

		return $ids;
	}

	/**
	 * Decode a theme_mod that may be stored as JSON string or array.
	 *
	 * @param mixed $value The raw theme_mod value.
	 * @return array<mixed>
	 */
	private function decode_mod( $value ) {
		if ( is_array( $value ) ) {
			return $value;
		}

		if ( is_string( $value ) && '' !== $value ) {
			$decoded = json_decode( $value, true );
			if ( is_array( $decoded ) ) {
				return $decoded;
			}
		}

		return array();
	}
}
