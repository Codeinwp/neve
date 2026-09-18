<?php
/**
 * Reusable JSON Schema fragments and responsive theme_mod helpers.
 *
 * Shared by the appearance abilities so the responsive typography / spacing
 * contracts stay identical across reads and writes.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Trait Schema_Helpers
 *
 * @package Neve\Abilities
 */
trait Schema_Helpers {

	/**
	 * Responsive typeface schema (font size / line height / spacing / weight).
	 *
	 * @param string $description Description for the property.
	 * @return array<mixed>
	 */
	protected function typeface_schema( $description = 'Typography settings' ) {
		return array(
			'type'        => 'object',
			'description' => $description,
			'properties'  => array(
				'fontSize'      => $this->responsive_value_schema( 'Font size per device', true ),
				'lineHeight'    => $this->responsive_value_schema( 'Line height per device', false ),
				'letterSpacing' => $this->responsive_value_schema( 'Letter spacing per device', false ),
				'fontWeight'    => array(
					'type' => 'string',
					'enum' => array( 'none', '100', '200', '300', '400', '500', '600', '700', '800', '900' ),
				),
				'textTransform' => array(
					'type' => 'string',
					'enum' => array( 'none', 'capitalize', 'uppercase', 'lowercase' ),
				),
			),
		);
	}

	/**
	 * Responsive numeric value schema, optionally with a unit suffix.
	 *
	 * @param string $description    Description for the property.
	 * @param bool   $include_suffix Whether to include the px/em/rem suffix object.
	 * @return array<mixed>
	 */
	protected function responsive_value_schema( $description, $include_suffix = true ) {
		$schema = array(
			'type'        => 'object',
			'description' => $description,
			'properties'  => array(
				'mobile'  => array( 'type' => 'number' ),
				'tablet'  => array( 'type' => 'number' ),
				'desktop' => array( 'type' => 'number' ),
			),
		);

		if ( $include_suffix ) {
			$schema['properties']['suffix'] = array(
				'type'       => 'object',
				'properties' => array(
					'mobile'  => array(
						'type' => 'string',
						'enum' => array( 'px', 'em', 'rem' ),
					),
					'tablet'  => array(
						'type' => 'string',
						'enum' => array( 'px', 'em', 'rem' ),
					),
					'desktop' => array(
						'type' => 'string',
						'enum' => array( 'px', 'em', 'rem' ),
					),
				),
			);
		}

		return $schema;
	}

	/**
	 * Responsive integer schema (spacing / sizing).
	 *
	 * @param string $description Description for the property.
	 * @param int    $min         Minimum value.
	 * @param int    $max         Maximum value.
	 * @return array<mixed>
	 */
	protected function responsive_integer_schema( $description, $min = 0, $max = 3000 ) {
		return array(
			'type'        => 'object',
			'description' => $description,
			'properties'  => array(
				'mobile'  => array(
					'type'    => 'integer',
					'minimum' => $min,
					'maximum' => $max,
				),
				'tablet'  => array(
					'type'    => 'integer',
					'minimum' => $min,
					'maximum' => $max,
				),
				'desktop' => array(
					'type'    => 'integer',
					'minimum' => $min,
					'maximum' => $max,
				),
			),
		);
	}

	/**
	 * Box model schema (top / right / bottom / left).
	 *
	 * @param string $description Description for the property.
	 * @return array<mixed>
	 */
	protected function box_model_schema( $description ) {
		return array(
			'type'        => 'object',
			'description' => $description,
			'properties'  => array(
				'top'    => array( 'type' => 'number' ),
				'right'  => array( 'type' => 'number' ),
				'bottom' => array( 'type' => 'number' ),
				'left'   => array( 'type' => 'number' ),
			),
		);
	}

	/**
	 * Hex color schema.
	 *
	 * @param string $description Description for the property.
	 * @return array<mixed>
	 */
	protected function color_schema( $description ) {
		return array(
			'type'        => 'string',
			'description' => $description,
		);
	}

	/**
	 * Parse a responsive JSON theme_mod into a {mobile,tablet,desktop} array.
	 *
	 * @param string $theme_mod Theme mod name.
	 * @param int    $default   Default value for each breakpoint.
	 * @return array<mixed>
	 */
	protected function get_responsive_theme_mod( $theme_mod, $default ) {
		$default_json = wp_json_encode(
			array(
				'mobile'  => $default,
				'tablet'  => $default,
				'desktop' => $default,
			)
		);

		$raw    = get_theme_mod( $theme_mod, $default_json );
		$parsed = is_string( $raw ) ? json_decode( $raw, true ) : $raw;

		if ( ! is_array( $parsed ) ) {
			$parsed = array();
		}

		return array(
			'mobile'  => isset( $parsed['mobile'] ) ? $parsed['mobile'] : $default,
			'tablet'  => isset( $parsed['tablet'] ) ? $parsed['tablet'] : $default,
			'desktop' => isset( $parsed['desktop'] ) ? $parsed['desktop'] : $default,
		);
	}
}
