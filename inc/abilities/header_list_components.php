<?php
/**
 * Ability: neve/header-list-components.
 *
 * The live component menu for the header and footer builders, and the source
 * of truth for valid component ids when calling header-configure / footer-configure.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Class Header_List_Components
 *
 * @package Neve\Abilities
 */
class Header_List_Components extends Abstract_Ability {

	/**
	 * Standard slots for the v2 builder rows (the mobile "sidebar" row is flat).
	 */
	const SLOTS = array( 'left', 'c-left', 'center', 'c-right', 'right' );

	/**
	 * {@inheritDoc}
	 */
	protected function get_id() {
		return 'header-list-components';
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_label() {
		return __( 'List header/footer components', 'neve' );
	}

	/**
	 * {@inheritDoc}
	 */
	protected function get_description() {
		return __( 'List the available header or footer builder components, their rows/slots, and where each component is currently placed. Use this as the source of truth for valid component ids before calling header-configure or footer-configure.', 'neve' );
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
				'builder' => array(
					'type'        => 'string',
					'enum'        => array( 'header', 'footer' ),
					'default'     => 'header',
					'description' => 'Which builder to inspect.',
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
				'builder'    => array( 'type' => 'string' ),
				'rows'       => array(
					'type'  => 'array',
					'items' => array( 'type' => 'string' ),
				),
				'slots'      => array(
					'type'  => 'array',
					'items' => array( 'type' => 'string' ),
				),
				'components' => array(
					'type'  => 'array',
					'items' => array(
						'type'       => 'object',
						'properties' => array(
							'id'               => array( 'type' => 'string' ),
							'label'            => array( 'type' => 'string' ),
							'available'        => array( 'type' => 'boolean' ),
							'requires'         => array( 'type' => 'string' ),
							'currently_placed' => array( 'type' => 'array' ),
						),
					),
				),
			),
		);
	}

	/**
	 * {@inheritDoc}
	 */
	protected function run( array $input ) {
		$builder_id = isset( $input['builder'] ) ? $input['builder'] : 'header';

		if ( ! class_exists( '\HFG\Main' ) ) {
			return $this->error( 'hfg_unavailable', __( 'The header/footer builder is not available.', 'neve' ), 501 );
		}

		$builder = \HFG\Main::get_instance()->get_builder( $builder_id );

		if ( ! is_object( $builder ) ) {
			return $this->error( 'invalid_builder', __( 'Unknown builder.', 'neve' ) );
		}

		$layout = $builder->get_layout_data();
		$placed = $this->collect_placements( $layout );

		$rows = array();
		foreach ( $layout as $device_rows ) {
			if ( is_array( $device_rows ) ) {
				$rows = array_merge( $rows, array_keys( $device_rows ) );
			}
		}
		$rows = array_values( array_unique( $rows ) );

		$components = array();
		foreach ( $builder->get_components() as $component ) {
			$settings = $component->get_settings();
			$id       = isset( $settings['id'] ) ? $settings['id'] : $component->get_id();

			$components[] = array(
				'id'               => $id,
				'label'            => isset( $settings['name'] ) ? $settings['name'] : $id,
				'available'        => true,
				'requires'         => ! empty( $settings['fromTheme'] ) ? 'free' : 'pro',
				'currently_placed' => isset( $placed[ $id ] ) ? $placed[ $id ] : array(),
			);
		}

		return array(
			'builder'    => $builder_id,
			'rows'       => $rows,
			'slots'      => self::SLOTS,
			'components' => $components,
		);
	}

	/**
	 * Index where each component id currently sits, keyed by component id.
	 *
	 * @param array<mixed> $layout The decoded layout data ([device][row][slot] => items).
	 * @return array<string,array<int,array{device:string,row:string,slot:string}>>
	 */
	private function collect_placements( array $layout ) {
		$placed = array();

		foreach ( $layout as $device => $device_rows ) {
			if ( ! is_array( $device_rows ) ) {
				continue;
			}

			foreach ( $device_rows as $row => $slots ) {
				if ( ! is_array( $slots ) ) {
					continue;
				}

				// The mobile "sidebar" row is a flat list rather than slotted.
				$is_flat = isset( $slots[0] );

				if ( $is_flat ) {
					$this->record_items( $placed, $slots, $device, $row, '' );
					continue;
				}

				foreach ( $slots as $slot => $items ) {
					if ( is_array( $items ) ) {
						$this->record_items( $placed, $items, $device, $row, $slot );
					}
				}
			}
		}

		return $placed;
	}

	/**
	 * Append component placement entries.
	 *
	 * @param array<mixed> $placed Reference to the placement index.
	 * @param array<mixed> $items  Component items ([ ['id'=>..], .. ]).
	 * @param string       $device Device key.
	 * @param string       $row    Row key.
	 * @param string       $slot   Slot key.
	 * @return void
	 */
	private function record_items( array &$placed, array $items, $device, $row, $slot ) {
		foreach ( $items as $item ) {
			if ( ! isset( $item['id'] ) ) {
				continue;
			}

			$placed[ $item['id'] ][] = array(
				'device' => $device,
				'row'    => $row,
				'slot'   => $slot,
			);
		}
	}
}
