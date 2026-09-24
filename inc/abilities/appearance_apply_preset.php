<?php
/**
 * Ability: neve/appearance-apply-preset.
 *
 * One-shot whole-state presets. Kept separate from appearance-update because a
 * preset *replaces* state rather than merging it.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Class Appearance_Apply_Preset
 *
 * @package Neve\Abilities
 */
class Appearance_Apply_Preset extends Abstract_Ability {

	/**
	 * Font pairs keyed by their identifier (the heading font name). Body font
	 * mirrors Neve's default typography pairs.
	 */
	const FONT_PAIRS = array(
		'Inter'            => array(
			'headings' => 'Inter',
			'body'     => 'Inter',
		),
		'Playfair Display' => array(
			'headings' => 'Playfair Display',
			'body'     => 'Source Sans Pro',
		),
		'Montserrat'       => array(
			'headings' => 'Montserrat',
			'body'     => 'Open Sans',
		),
		'Nunito'           => array(
			'headings' => 'Nunito',
			'body'     => 'Lora',
		),
		'Lato'             => array(
			'headings' => 'Lato',
			'body'     => 'Karla',
		),
		'Outfit'           => array(
			'headings' => 'Outfit',
			'body'     => 'Spline Sans',
		),
		'Lora'             => array(
			'headings' => 'Lora',
			'body'     => 'Ubuntu',
		),
		'Prata'            => array(
			'headings' => 'Prata',
			'body'     => 'Hanken Grotesk',
		),
		'Albert Sans'      => array(
			'headings' => 'Albert Sans',
			'body'     => 'Albert Sans',
		),
		'Fraunces'         => array(
			'headings' => 'Fraunces',
			'body'     => 'Hanken Grotesk',
		),
	);

	/**
	 * Header preset enum value mapped to the theme's preset label.
	 */
	const HEADER_PRESETS = array(
		'Classic'     => 'Classic',
		'Inverted'    => 'Inverted',
		'Centered'    => 'Centered',
		'Spaced'      => 'Spaced',
		'Collapsed'   => 'Collapsed',
		'SearchField' => 'Search Field',
		'ButtonItem'  => 'Button Item',
	);

	/**
	 * {@inheritDoc}
	 */
	protected function get_id() {
		return 'appearance-apply-preset';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_label() {
		return __( 'Apply appearance preset', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_description() {
		return __( 'Apply a whole-state preset: a font pairing and/or a header layout preset. This replaces the affected settings rather than merging them.', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_annotations() {
		return array( 'idempotent' => true );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_input_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'font_pair'     => array(
					'type'        => 'string',
					'enum'        => array_keys( self::FONT_PAIRS ),
					'description' => 'A predefined font pairing (identified by its heading font).',
				),
				'header_preset' => array(
					'type'        => 'string',
					'enum'        => array_keys( self::HEADER_PRESETS ),
					'description' => 'A predefined header layout preset.',
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
				'applied'  => array(
					'type'                 => 'object',
					'additionalProperties' => true,
				),
				'affected' => array(
					'type'  => 'array',
					'items' => array( 'type' => 'string' ),
				),
			),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function run( array $input ) {
		$applied  = array();
		$affected = array();

		if ( isset( $input['font_pair'] ) && isset( self::FONT_PAIRS[ $input['font_pair'] ] ) ) {
			$pair = self::FONT_PAIRS[ $input['font_pair'] ];
			set_theme_mod( 'neve_headings_font_family', $pair['headings'] );
			set_theme_mod( 'neve_body_font_family', $pair['body'] );
			$applied['font_pair'] = $input['font_pair'];
			$affected[]           = 'neve_headings_font_family';
			$affected[]           = 'neve_body_font_family';
		}

		if ( isset( $input['header_preset'] ) && isset( self::HEADER_PRESETS[ $input['header_preset'] ] ) ) {
			$result = $this->apply_header_preset( self::HEADER_PRESETS[ $input['header_preset'] ] );
			if ( is_wp_error( $result ) ) {
				return $result;
			}
			$applied['header_preset'] = $input['header_preset'];
			$affected                 = array_merge( $affected, $result );
		}

		if ( empty( $applied ) ) {
			return $this->error( 'no_preset', __( 'Provide a font_pair and/or header_preset to apply.', 'neve' ) );
		}

		return array(
			'applied'  => $applied,
			'affected' => array_values( array_unique( $affected ) ),
		);
	}

	/**
	 * Apply a header preset by writing its setup theme_mods.
	 *
	 * @param string $label The theme's preset label.
	 * @return array<mixed>|\WP_Error List of affected theme_mod keys, or error.
	 */
	private function apply_header_preset( $label ) {
		if ( ! class_exists( '\HFG\Main' ) ) {
			return $this->error( 'hfg_unavailable', __( 'The header/footer builder is not available.', 'neve' ), 501 );
		}

		$builder = \HFG\Main::get_instance()->get_builder( 'header' );
		// We read presets from the theme's private get_header_presets() via
		// reflection because there is no public/filter seam exposing the built-in
		// presets. note_preset_drift() makes it observable if that ever breaks.
		if ( ! is_object( $builder ) || ! method_exists( $builder, 'get_header_presets' ) ) {
			$this->note_preset_drift( 'get_header_presets() is missing on the header builder' );
			return $this->error( 'presets_unavailable', __( 'No header presets found', 'neve' ), 501 );
		}

		try {
			$method = new \ReflectionMethod( $builder, 'get_header_presets' );
			$method->setAccessible( true );
			$presets = $method->invoke( $builder );
		} catch ( \ReflectionException $e ) {
			$this->note_preset_drift( 'reflection failed: ' . $e->getMessage() );
			return $this->error( 'presets_unavailable', __( 'No header presets found', 'neve' ), 501 );
		}

		$setup = '';
		foreach ( (array) $presets as $preset ) {
			if ( isset( $preset['label'], $preset['setup'] ) && $preset['label'] === $label ) {
				$setup = $preset['setup'];
				break;
			}
		}

		if ( '' === $setup ) {
			$this->note_preset_drift( 'preset label not found: ' . $label );
			return $this->error( 'unknown_preset', __( 'Unknown header preset.', 'neve' ) );
		}

		$mods = json_decode( $setup, true );
		if ( ! is_array( $mods ) ) {
			$this->note_preset_drift( 'preset setup did not decode to an array for: ' . $label );
			return $this->error( 'invalid_preset', __( 'The header preset could not be decoded.', 'neve' ), 500 );
		}

		$affected = array();
		foreach ( $mods as $key => $value ) {
			set_theme_mod( $key, $value );
			$affected[] = $key;
		}

		return $affected;
	}

	/**
	 * Surface a header-preset read failure so theme API drift is observable
	 * (rather than the ability just returning a generic error to the caller).
	 *
	 * @param string $reason Short human-readable reason.
	 * @return void
	 */
	private function note_preset_drift( $reason ) {
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
			error_log( 'Neve abilities: could not apply header preset (' . $reason . '). The theme\'s preset API may have changed.' );
		}

		/**
		 * Fires when applying a header preset fails, e.g. because Neve's
		 * (private) header-preset API changed shape.
		 *
		 * @param string $reason Short machine-readable reason.
		 */
		do_action( 'neve_abilities_header_preset_failed', $reason );
	}
}
