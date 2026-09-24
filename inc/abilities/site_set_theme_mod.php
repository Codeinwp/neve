<?php
/**
 * Ability: neve/site-set-theme-mod.
 *
 * Allowlisted escape hatch for the long tail of Neve theme_mods (scroll-to-top,
 * form fields, etc.). The allowlist is intentionally disjoint from the keys
 * owned by the coarse appearance / header / footer abilities, so each setting
 * has exactly one write path.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Class Site_Set_Theme_Mod
 *
 * @package Neve\Abilities
 */
class Site_Set_Theme_Mod extends Abstract_Ability {

	/**
	 * Default allowlist of reachable theme_mods. Extend via the
	 * `neve_abilities_theme_mod_allowlist` filter.
	 */
	const ALLOWLIST = array(
		// Scroll to top.
		'neve_scroll_to_top',
		'neve_scroll_to_top_padding',
		'neve_scroll_to_top_border_radius',
		'neve_scroll_to_top_icon_color',
		'neve_scroll_to_top_icon_hover_color',
		'neve_scroll_to_top_background_color',
		'neve_scroll_to_top_background_hover_color',
		// Form fields.
		'neve_form_fields_padding',
		'neve_form_fields_spacing',
		'neve_form_fields_border_width',
		'neve_form_fields_border_radius',
		'neve_form_fields_border_color',
		'neve_form_fields_background_color',
		'neve_input_text_color',
		// Menu Icon.
		'nav-icon_menu_icon',
		'nav-icon_svg_menu_icon',
		'nav-icon_menu_label',
		'nav-icon_button_appearance',
		'hfg_header_layout_sidebar_layout',
		'hfg_header_layout_sidebar_width',
		'hfg_header_layout_sidebar_background',
		'hfg_header_layout_sidebar_new_text_color',
	);

	/**
	 * {@inheritDoc}
	 */
	protected function get_id() {
		return 'site-set-theme-mod';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_label() {
		return __( 'Get or set an allowlisted theme setting', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_description() {
		return __( 'Read or write a single allowlisted Neve theme setting (the long tail not covered by the higher-level abilities, e.g. scroll-to-top and form-field styling). Use action "get" to read and "set" to write.', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_annotations() {
		return array(
			'readonly'    => false,
			'destructive' => false,
			'idempotent'  => true,
		);
	}

	/**
	 * The allowlist, filterable at runtime.
	 *
	 * @return string[]
	 */
	private function allowlist() {
		/**
		 * Filters the theme_mods reachable through neve/site-set-theme-mod.
		 *
		 * @param string[] $allowlist Theme mod keys.
		 */
		$list = (array) apply_filters( 'neve_abilities_theme_mod_allowlist', self::ALLOWLIST );

		return array_values( array_unique( $list ) );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_input_schema() {
		return array(
			'type'       => 'object',
			'required'   => array( 'action', 'key' ),
			'properties' => array(
				'action' => array(
					'type'        => 'string',
					'enum'        => array( 'get', 'set' ),
					'description' => 'Whether to read or write the setting.',
				),
				'key'    => array(
					'type'        => 'string',
					'enum'        => $this->allowlist(),
					'description' => 'The allowlisted theme_mod key.',
				),
				'value'  => array(
					'description' => 'The value to write (required for "set"). May be a scalar or an object for structured settings.',
				),
			),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_output_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'success' => array( 'type' => 'boolean' ),
				'error'   => array(
					'type'       => 'object',
					'properties' => array(
						'code'    => array( 'type' => 'string' ),
						'message' => array( 'type' => 'string' ),
						'field'   => array( 'type' => 'string' ),
					),
				),
				'key'     => array( 'type' => 'string' ),
				'value'   => array(),
			),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function run( array $input ) {
		$action = isset( $input['action'] ) ? $input['action'] : 'get';
		$key    = isset( $input['key'] ) ? $input['key'] : '';

		if ( ! in_array( $key, $this->allowlist(), true ) ) {
			return $this->validation_issue( 'key_not_allowed', __( 'That theme setting is not reachable through this ability.', 'neve' ), 'key' );
		}

		if ( 'set' === $action ) {
			if ( ! array_key_exists( 'value', $input ) ) {
				return $this->validation_issue( 'missing_value', __( 'A value is required when setting a theme setting.', 'neve' ), 'value' );
			}

			set_theme_mod( $key, $this->sanitize_value( $input['value'] ) );
		}

		return array(
			'success' => true,
			'key'     => $key,
			'value'   => get_theme_mod( $key ),
		);
	}

	/**
	 * Lightly sanitize a value, preserving structured (array) settings.
	 *
	 * @param mixed $value The incoming value.
	 * @return mixed
	 */
	private function sanitize_value( $value ) {
		if ( is_array( $value ) ) {
			return map_deep( $value, 'sanitize_text_field' );
		}

		if ( is_string( $value ) ) {
			return sanitize_text_field( $value );
		}

		return $value;
	}
}
