<?php
/**
 * Shared header/footer builder mutation helpers.
 *
 * Reads and writes the `hfg_{builder}_layout_v2` theme_mod as a structured
 * place/move/remove surface so callers never hand-edit the nested JSON.
 *
 * @package Neve\Abilities
 */

namespace Neve\Abilities;

/**
 * Trait Builder_Configure
 *
 * @package Neve\Abilities
 */
trait Builder_Configure {

	/**
	 * Standard v2 slots.
	 *
	 * @var string[]
	 */
	private static $builder_slots = array( 'left', 'c-left', 'center', 'c-right', 'right' );

	/**
	 * Fetch the live builder instance.
	 *
	 * @param string $builder_id "header" or "footer".
	 * @return object|null
	 */
	protected function get_builder( $builder_id ) {
		if ( ! class_exists( '\HFG\Main' ) ) {
			return null;
		}

		$builder = \HFG\Main::get_instance()->get_builder( $builder_id );

		return is_object( $builder ) ? $builder : null;
	}

	/**
	 * Theme_mod key holding the builder layout.
	 *
	 * @param string $builder_id Builder id.
	 * @return string
	 */
	protected function layout_mod( $builder_id ) {
		return 'hfg_' . $builder_id . '_layout_v2';
	}

	/**
	 * Read the current layout as a nested array, normalizing devices/rows.
	 *
	 * @param object $builder The builder instance.
	 * @return array<mixed>
	 */
	protected function read_layout( $builder ) {
		$layout = $builder->get_layout_data();

		return is_array( $layout ) ? $layout : array();
	}

	/**
	 * Valid component ids for the builder.
	 *
	 * @param object $builder The builder instance.
	 * @return string[]
	 */
	protected function component_ids( $builder ) {
		$ids = array();
		foreach ( $builder->get_components() as $component ) {
			$ids[] = $component->get_id();
		}

		return $ids;
	}

	/**
	 * Place a component into a row/slot for a device.
	 *
	 * @param array<mixed> $layout    Reference to the layout.
	 * @param string       $component Component id.
	 * @param string       $row       Row key (or "mobile-sidebar").
	 * @param string       $slot      Slot key.
	 * @param string       $device    Device key.
	 * @return void
	 */
	protected function place( array &$layout, $component, $row, $slot, $device ) {
		// Avoid duplicating the same component within the same target.
		$this->remove_from_device( $layout, $component, $device );

		if ( 'mobile-sidebar' === $row ) {
			if ( ! isset( $layout['mobile']['sidebar'] ) || ! is_array( $layout['mobile']['sidebar'] ) ) {
				$layout['mobile']['sidebar'] = array();
			}
			$layout['mobile']['sidebar'][] = array( 'id' => $component );
			return;
		}

		if ( ! isset( $layout[ $device ][ $row ][ $slot ] ) || ! is_array( $layout[ $device ][ $row ][ $slot ] ) ) {
			$layout[ $device ][ $row ][ $slot ] = array();
		}
		$layout[ $device ][ $row ][ $slot ][] = array( 'id' => $component );
	}

	/**
	 * Remove a component from a device (or every device when null).
	 *
	 * @param array<mixed> $layout    Reference to the layout.
	 * @param string       $component Component id.
	 * @param string|null  $device    Device key, or null for all.
	 * @return void
	 */
	protected function remove( array &$layout, $component, $device = null ) {
		$devices = null === $device ? array_keys( $layout ) : array( $device );
		foreach ( $devices as $dev ) {
			$this->remove_from_device( $layout, $component, $dev );
		}
	}

	/**
	 * Remove a component from one device's rows/slots.
	 *
	 * @param array<mixed> $layout    Reference to the layout.
	 * @param string       $component Component id.
	 * @param string       $device    Device key.
	 * @return void
	 */
	private function remove_from_device( array &$layout, $component, $device ) {
		if ( ! isset( $layout[ $device ] ) || ! is_array( $layout[ $device ] ) ) {
			return;
		}

		foreach ( $layout[ $device ] as $row => &$slots ) {
			if ( ! is_array( $slots ) ) {
				continue;
			}

			// Flat row (mobile sidebar).
			if ( isset( $slots[0] ) ) {
				$slots = array_values(
					array_filter(
						$slots,
						function ( $item ) use ( $component ) {
							return ! ( isset( $item['id'] ) && $item['id'] === $component );
						}
					)
				);
				continue;
			}

			foreach ( $slots as $slot => &$items ) {
				if ( ! is_array( $items ) ) {
					continue;
				}
				$items = array_values(
					array_filter(
						$items,
						function ( $item ) use ( $component ) {
							return ! ( isset( $item['id'] ) && $item['id'] === $component );
						}
					)
				);
			}
			unset( $items );
		}
		unset( $slots );
	}

	/**
	 * Apply per-row style settings (height / background / text color).
	 *
	 * @param string       $builder_id Builder id.
	 * @param string       $row        Row key.
	 * @param array<mixed> $style      Style block.
	 * @return string[] Affected theme_mod keys.
	 */
	protected function apply_row_style( $builder_id, $row, array $style ) {
		$prefix   = 'hfg_' . $builder_id . '_layout_' . $row;
		$affected = array();

		if ( isset( $style['height'] ) ) {
			set_theme_mod( $prefix . '_height', wp_json_encode( map_deep( $style['height'], 'sanitize_text_field' ) ) );
			$affected[] = $prefix . '_height';
		}
		if ( isset( $style['background'] ) ) {
			set_theme_mod( $prefix . '_background', map_deep( $style['background'], 'sanitize_text_field' ) );
			$affected[] = $prefix . '_background';
		}
		if ( isset( $style['text_color'] ) ) {
			set_theme_mod( $prefix . '_new_text_color', sanitize_text_field( $style['text_color'] ) );
			$affected[] = $prefix . '_new_text_color';
		}

		return $affected;
	}

	/**
	 * Reduce a layout to rows -> slots -> [component ids].
	 *
	 * @param array<mixed> $layout The layout.
	 * @return array<mixed>
	 */
	protected function summarize( array $layout ) {
		$summary = array();
		foreach ( $layout as $device => $rows ) {
			if ( ! is_array( $rows ) ) {
				continue;
			}
			foreach ( $rows as $row => $slots ) {
				if ( ! is_array( $slots ) || empty( $slots ) ) {
					continue;
				}

				if ( isset( $slots[0] ) ) {
					$ids = array();
					foreach ( $slots as $item ) {
						if ( isset( $item['id'] ) ) {
							$ids[] = $item['id'];
						}
					}
					if ( ! empty( $ids ) ) {
						$summary[ $device ][ $row ] = $ids;
					}
					continue;
				}

				foreach ( $slots as $slot => $items ) {
					if ( ! is_array( $items ) ) {
						continue;
					}
					foreach ( $items as $item ) {
						if ( isset( $item['id'] ) ) {
							$summary[ $device ][ $row ][ $slot ][] = $item['id'];
						}
					}
				}
			}
		}

		return $summary;
	}
}
