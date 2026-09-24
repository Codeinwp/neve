<?php
/**
 * Ability: neve/header-configure.
 *
 * Structural header builder edit. Component ids are validated against
 * header-list-components. Sticky/transparent and Pro components require Neve Pro.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Class Header_Configure
 *
 * @package Neve\Abilities
 */
class Header_Configure extends Abstract_Ability {
	use Builder_Configure;

	/**
	 * {@inheritDoc}
	 */
	protected function get_id() {
		return 'header-configure';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_label() {
		return __( 'Configure header', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_description() {
		return __( 'Place or remove header components, style rows, and toggle sticky/transparent header. Validate component ids with header-list-components first. Use dry_run to preview without saving.', 'neve' );
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
	 * {@inheritDoc}
	 */
	protected function get_input_schema() {
		return array(
			'type'       => 'object',
			'properties' => array(
				'place'       => array(
					'type'        => 'array',
					'description' => 'Components to place.',
					'items'       => array(
						'type'       => 'object',
						'required'   => array( 'component', 'row', 'slot' ),
						'properties' => array(
							'component' => array( 'type' => 'string' ),
							'row'       => array(
								'type' => 'string',
								'enum' => array( 'top', 'main', 'bottom', 'mobile-sidebar' ),
							),
							'slot'      => array(
								'type' => 'string',
								'enum' => self::$builder_slots,
							),
							'device'    => array(
								'type'    => 'string',
								'enum'    => array( 'desktop', 'mobile' ),
								'default' => 'desktop',
							),
						),
					),
				),
				'remove'      => array(
					'type'        => 'array',
					'description' => 'Components to remove.',
					'items'       => array(
						'type'       => 'object',
						'required'   => array( 'component' ),
						'properties' => array(
							'component' => array( 'type' => 'string' ),
							'device'    => array(
								'type' => 'string',
								'enum' => array( 'desktop', 'mobile' ),
							),
						),
					),
				),
				'row_style'   => array(
					'type'        => 'array',
					'description' => 'Per-row styling.',
					'items'       => array(
						'type'       => 'object',
						'required'   => array( 'row' ),
						'properties' => array(
							'row'        => array(
								'type' => 'string',
								'enum' => array( 'top', 'main', 'bottom', 'sidebar' ),
							),
							'height'     => array(
								'type'                 => 'object',
								'additionalProperties' => true,
							),
							'background' => array(
								'type'                 => 'object',
								'additionalProperties' => true,
							),
							'text_color' => array( 'type' => 'string' ),
						),
					),
				),
				'sticky'      => array(
					'type'        => 'boolean',
					'description' => 'Make the main header row sticky (Pro).',
				),
				'transparent' => array(
					'type'        => 'boolean',
					'description' => 'Enable transparent header (Pro).',
				),
				'dry_run'     => array(
					'type'        => 'boolean',
					'description' => 'Preview the resulting layout without saving.',
					'default'     => false,
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
				'layout_summary' => array(
					'type'                 => 'object',
					'additionalProperties' => true,
				),
				'warnings'       => array(
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
		$builder = $this->get_builder( 'header' );
		if ( null === $builder ) {
			return $this->error( 'hfg_unavailable', __( 'The header/footer builder is not available.', 'neve' ), 501 );
		}

		$warnings = array();
		$valid    = $this->component_ids( $builder );
		$layout   = $this->read_layout( $builder );
		$dry_run  = ! empty( $input['dry_run'] );

		// Sticky and transparent headers are Neve Pro features. Check them before
		// anything is saved so the request fails as a whole.
		foreach ( array( 'sticky', 'transparent' ) as $pro_field ) {
			if ( ! isset( $input[ $pro_field ] ) ) {
				continue;
			}
			$available = $this->handle_pro_field( $pro_field, (bool) $input[ $pro_field ], true );
			if ( is_wp_error( $available ) ) {
				return $available;
			}
		}

		if ( ! empty( $input['place'] ) && is_array( $input['place'] ) ) {
			foreach ( $input['place'] as $entry ) {
				if ( ! isset( $entry['component'], $entry['row'], $entry['slot'] ) ) {
					continue;
				}
				if ( ! in_array( $entry['component'], $valid, true ) ) {
					$warnings[] = sprintf(
						/* translators: %s: component id */
						__( 'Unknown component "%s"; skipped.', 'neve' ),
						$entry['component']
					);
					continue;
				}
				$device = isset( $entry['device'] ) ? $entry['device'] : 'desktop';
				$this->place( $layout, $entry['component'], $entry['row'], $entry['slot'], $device );
			}
		}

		if ( ! empty( $input['remove'] ) && is_array( $input['remove'] ) ) {
			foreach ( $input['remove'] as $entry ) {
				if ( ! isset( $entry['component'] ) ) {
					continue;
				}
				$this->remove( $layout, $entry['component'], isset( $entry['device'] ) ? $entry['device'] : null );
			}
		}

		if ( ! $dry_run && ! empty( $input['row_style'] ) && is_array( $input['row_style'] ) ) {
			foreach ( $input['row_style'] as $style ) {
				if ( ! isset( $style['row'] ) ) {
					continue;
				}
				$this->apply_row_style( 'header', $style['row'], $style );
			}
		}

		if ( ! $dry_run ) {
			foreach ( array( 'transparent', 'sticky' ) as $pro_field ) {
				if ( ! isset( $input[ $pro_field ] ) ) {
					continue;
				}
				$applied = $this->handle_pro_field( $pro_field, (bool) $input[ $pro_field ] );
				if ( is_wp_error( $applied ) ) {
					return $applied;
				}
			}
		}

		if ( ! $dry_run ) {
			set_theme_mod( $this->layout_mod( 'header' ), wp_json_encode( $layout ) );
		}

		return array(
			'layout_summary' => array( 'rows' => $this->summarize( $layout ) ),
			'warnings'       => $warnings,
		);
	}
}
