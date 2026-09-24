<?php
/**
 * Ability: neve/footer-configure.
 *
 * Footer counterpart to header-configure. Rows/slots are driven by discovery
 * (the footer builder is not symmetric to the header). Editing copyright is a
 * Pro feature.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Class Footer_Configure
 *
 * @package Neve\Abilities
 */
class Footer_Configure extends Abstract_Ability {
	use Builder_Configure;

	/**
	 * {@inheritDoc}
	 */
	protected function get_id() {
		return 'footer-configure';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_label() {
		return __( 'Configure footer', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_description() {
		return __( 'Place or remove footer components, style rows, and edit the copyright (Pro). Validate component ids with header-list-components (builder=footer). Use dry_run to preview without saving.', 'neve' );
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
				'place'     => array(
					'type'        => 'array',
					'description' => 'Components to place.',
					'items'       => array(
						'type'       => 'object',
						'required'   => array( 'component', 'row', 'slot' ),
						'properties' => array(
							'component' => array( 'type' => 'string' ),
							'row'       => array(
								'type' => 'string',
								'enum' => array( 'top', 'main', 'bottom' ),
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
				'remove'    => array(
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
				'row_style' => array(
					'type'        => 'array',
					'description' => 'Per-row styling.',
					'items'       => array(
						'type'       => 'object',
						'required'   => array( 'row' ),
						'properties' => array(
							'row'        => array(
								'type' => 'string',
								'enum' => array( 'top', 'main', 'bottom' ),
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
				'copyright' => array(
					'type'        => 'string',
					'description' => 'Footer copyright text (Pro).',
				),
				'dry_run'   => array(
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
		$builder = $this->get_builder( 'footer' );
		if ( null === $builder ) {
			return $this->error( 'hfg_unavailable', __( 'The header/footer builder is not available.', 'neve' ), 501 );
		}

		$warnings = array();
		$valid    = $this->component_ids( $builder );
		$layout   = $this->read_layout( $builder );
		$dry_run  = ! empty( $input['dry_run'] );

		// Editing the copyright is a Neve Pro feature. Check it before anything
		// is saved so the request fails as a whole.
		if ( isset( $input['copyright'] ) ) {
			$available = $this->handle_pro_field( 'copyright', $input['copyright'], true );
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
				if ( isset( $style['row'] ) ) {
					$this->apply_row_style( 'footer', $style['row'], $style );
				}
			}
		}

		if ( ! $dry_run && isset( $input['copyright'] ) ) {
			$applied = $this->handle_pro_field( 'copyright', $input['copyright'] );
			if ( is_wp_error( $applied ) ) {
				return $applied;
			}
			if ( ! $this->layout_has_component( $layout, 'footer_copyright' ) ) {
				$warnings[] = __( 'Copyright text was saved, but the Copyright footer component is not placed. Add footer_copyright to a footer row to render it.', 'neve' );
			}
		}

		if ( ! $dry_run ) {
			set_theme_mod( $this->layout_mod( 'footer' ), wp_json_encode( $layout ) );
		}

		return array(
			'layout_summary' => array( 'rows' => $this->summarize( $layout ) ),
			'warnings'       => $warnings,
		);
	}

	/**
	 * Whether a footer layout currently contains a given component.
	 *
	 * @param array<mixed> $layout       Builder layout.
	 * @param string       $component_id Component id to search for.
	 * @return bool
	 */
	private function layout_has_component( array $layout, $component_id ) {
		$found = false;
		$rows  = $this->summarize( $layout );

		array_walk_recursive(
			$rows,
			function ( $value ) use ( $component_id, &$found ) {
				if ( $component_id === $value ) {
					$found = true;
				}
			}
		);

		return $found;
	}
}
