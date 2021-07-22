<?php
/**
 * Builder Migrator
 *
 * @since 3.0.0
 *
 * @package Neve\Core
 */

namespace Neve\Core;

/**
 * Class Admin
 *
 * @package Neve\Core
 */
class Builder_Migrator {

	/**
	 * Known builders.
	 *
	 * @var array
	 */
	private $builders = [
		'header'      => [ 'top', 'main', 'bottom', 'sidebar' ],
		'footer'      => [ 'top', 'main', 'bottom' ],
		'page_header' => [ 'top', 'bottom' ],
	];

	/**
	 * Current device migrating.
	 *
	 * @var string|null
	 */
	private static $current_device = null;

	/**
	 * Current builder migrating.
	 *
	 * @var string|null
	 */
	private static $current_builder = null;

	/**
	 * Current Row Migrating
	 *
	 * @var string|null
	 */
	private static $current_row = null;

	/**
	 * Row slots.
	 *
	 * @var string[]
	 */
	private $row_slots = [ 'left', 'c-left', 'center', 'c-right', 'right' ];

	/**
	 * Migrate row for columned builder.
	 *
	 * @param array $old_row old row values.
	 * @param array $next_row empty row array.
	 *
	 * @return array
	 */
	private function migrate_columns_row( $old_row, $next_row ) {
		$items_no        = count( $old_row );
		$columns_setting = 'hfg_' . self::$current_builder . '_layout_' . self::$current_row . '_columns_number';

		if ( $items_no > 5 ) {
			$items_no = 5;
		}

		set_theme_mod( $columns_setting, $items_no );

		foreach ( $old_row as $index => $item ) {
			$slot = $this->row_slots[ $index ];

			$next_row[ $slot ][] = [ 'id' => $item['id'] ];
		}

		return $next_row;
	}

	/**
	 * Get the component horizontal alignment on currently migrating device.
	 *
	 * @param string $component_id the component id.
	 *
	 * @return string
	 */
	private function get_component_alignment( $component_id ) {
		$default = [
			'desktop' => 'left',
			'mobile'  => 'left',
			'tablet'  => 'left',
		];

		if ( strpos( $component_id, 'primary-menu' ) !== false ) {
			$default['desktop'] = 'right';
		}

		$alignment = get_theme_mod( $component_id . '_component_align', $default );


		if ( ! isset( $alignment[ self::$current_device ] ) ) {
			return 'left';
		}

		$allowed = [ 'left', 'right', 'center' ];

		if ( ! in_array( $alignment[ self::$current_device ], $allowed ) ) {
			return 'left';
		}

		return $alignment[ self::$current_device ];
	}

	/**
	 * Migrate row for fluid builder.
	 *
	 * @param array $next_row empty row array.
	 * @param array $old_items old row values.
	 *
	 * @return array
	 */
	private function migrate_fluid_row( $next_row, $old_items ) {
		$items_no = count( $old_items );

		// We have only one item.
		if ( $items_no === 1 ) {
			$alignment        = $this->get_component_alignment( $old_items[0]['id'] );
			$width            = $old_items[0]['width'];
			$start_position   = $old_items[0]['x'];
			$next_row_content = [ 'id' => $old_items[0]['id'] ];

			// Item is at start of row. Slot it according to the alignment.
			// In the previous version, if the item was alone and started at the beginning of the row, it spanned the whole width.
			if ( $start_position === 0 ) {
				$next_row[ $alignment ][] = $next_row_content;

				return $next_row;
			}

			// Item is not at start or end. It spans until the end of the row.
			if ( $start_position > 0 ) {
				if ( $alignment === 'right' ) {
					$next_row['right'][] = $next_row_content;

					return $next_row;
				}

				$next_row['center'][] = $next_row_content;

				return $next_row;
			}

			// Item is at end of row. Slot it to the right.
			if ( $width + $start_position === 12 ) {
				$next_row['right'][] = $next_row_content;

				return $next_row;
			}

			// Item is not at start or end. Slot it at center.
			$next_row['center'][] = $next_row_content;

			return $next_row;
		}

		// Check if items fill the whole row so we can know if it has gaps.
		$filled_columns = array_reduce(
			$old_items,
			function ( $columns, $item ) {
				$columns += $item['width'];

				return $columns;
			}
		);
		$no_gaps        = $filled_columns === 12;

		// There are no gaps so we will only slot left and right;
		if ( $no_gaps ) {
			foreach ( $old_items as $item ) {
				$width             = $item['width'];
				$start_position    = $item['x'];
				$next_item_content = [ 'id' => $item['id'] ];
				$alignment         = $this->get_component_alignment( $item['id'] );

				// Item touches right. Slot it to the right.
				if ( $start_position + $width === 12 ) {
					$next_row['right'][] = $next_item_content;
					continue;
				}

				// Item is before center. Slot it to the left only if it isn't aligned to the right.
				if ( $start_position < 5 ) {
					if ( $alignment === 'right' ) {
						$next_row['right'][] = $next_item_content;
						continue;
					}

					$next_row['left'][] = $next_item_content;
					continue;
				}

				// Item is after center. Slot it to the right.
				if ( $start_position >= 5 ) {
					$next_row['right'][] = $next_item_content;
					continue;
				}
			}

			return $next_row;
		}

		$previous_item = null;
		$previous_slot = null;

		foreach ( $old_items as $index => $item ) {
			$width          = $item['width'];
			$start_position = $item['x'];
			$item_value     = [ 'id' => $item['id'] ];

			// Item starts at the most left point. Slot it to the left.
			if ( $start_position === 0 ) {
				$next_row['left'][] = $item_value;
				$previous_item      = $item;
				$previous_slot      = 'left';
				continue;
			}

			// If we already had an item, check if it touches the new one.
			if ( $previous_item && $previous_slot ) {
				// Slot it inside the same slot if it does and there is no gap.
				if ( $previous_item['x'] + $previous_item['width'] === $start_position ) {
					$next_row[ $previous_slot ][] = $item_value;
					$previous_item                = $item;
					continue;
				}

				// If item is at the end slot it right.
				// Accounts for previous but where items were extending the whole row when last.
				if ( $item['x'] + $item['width'] === 12 || $index === count( $old_items ) - 1 ) {
					$next_row['right'][] = $item_value;
					$previous_item       = $item;
					$previous_slot       = 'right';
					continue;
				}

				// Move to center slot if there is a gap and previous slotted was left.
				if ( $previous_slot === 'left' ) {
					$next_row['center'][] = $item_value;
					$previous_item        = $item;
					$previous_slot        = 'center';
					continue;
				}

				// All other cases fall inside the right slot.
				$next_row['right'][] = $item_value;
				$previous_item       = $item;
				$previous_slot       = 'right';
				continue;
			}

			// Item touches end. Slot it to the right.
			if ( $start_position + $width === 12 ) {
				$next_row['right'][] = $item_value;
				$previous_item       = $item;
				$previous_slot       = 'right';
				continue;
			}

			// Item is first but doesn't start at the left most point. Slot it to the center.
			if ( $index === 0 ) {
				$next_row['center'][] = $item_value;
				$previous_item        = $item;
				$previous_slot        = 'center';
				continue;
			}

			// Does not touch sides. Is not nearby previous.
			$next_row['center'][] = $item_value;
			$previous_slot        = 'center';
			$previous_item        = $item;
		}

		return $next_row;
	}

	/**
	 * Migrate single row of the builder.
	 *
	 * @param array $old_items old items inside the row.
	 *
	 * @return array
	 */
	private function migrate_single_row( $old_items ) {
		$next_row_value = array_fill_keys( $this->row_slots, [] );

		if ( count( $old_items ) === 0 ) {
			return $next_row_value;
		}

		if ( self::$current_builder === 'footer' ) {
			return $this->migrate_columns_row( $old_items, $next_row_value );
		}

		return $this->migrate_fluid_row( $next_row_value, $old_items );
	}

	/**
	 * Migrate single builder value.
	 *
	 * @return bool
	 */
	private function migrate_single_builder() {
		$old_value = $this->get_builder_value( self::$current_builder );

		if ( empty( $old_value ) ) {
			return true;
		}

		$old_value = json_decode( $old_value, true );

		$new_value = $this->get_new_builder_value_from_old( $old_value );

		set_theme_mod( $this->get_new_builder_mod_slug( self::$current_builder ), wp_json_encode( $new_value ) );

		return true;
	}

	/**
	 * Migrate old builder value to new format.
	 *
	 * @param array $old_value old builder value.
	 *
	 * @return array|boolean
	 */
	public function get_new_builder_value_from_old( $old_value ) {
		if ( ! is_array( $old_value ) ) {
			return false;
		}

		$empty_row = array_fill_keys( $this->row_slots, [] );

		$new_value = [];

		foreach ( $old_value as $device => $rows ) {

			self::$current_device = $device;

			// Setup the builders for each device.
			$new_value[ $device ] = array_fill_keys( $this->builders[ self::$current_builder ], $empty_row );

			// Sidebar is available only on mobile. We should remove it on other devices.
			if ( $device !== 'mobile' && isset( $new_value[ $device ]['sidebar'] ) ) {
				unset( $new_value[ $device ]['sidebar'] );
			}

			foreach ( $rows as $row_slug => $items ) {
				self::$current_row = $row_slug;
				// Sidebar row is treated differently.
				if ( $row_slug === 'sidebar' ) {
					// Make sure we have an empty array for the sidebar.
					$new_value[ $device ]['sidebar'] = [];
					// Push items inside the sidebar.
					foreach ( $items as $item ) {
						$new_value[ $device ]['sidebar'][] = [ 'id' => $item['id'] ];
					}
					continue;
				}

				// Proceed with normal migration for each row.
				$new_value[ $device ][ $row_slug ] = $this->migrate_single_row( $items );
			}
			self::$current_row = null;
		}

		self::$current_device = null;

		return $new_value;
	}

	/**
	 * Get the new theme mod slug for the specified builder.
	 *
	 * @param string $builder builder slug.
	 *
	 * @return string
	 */
	private function get_new_builder_mod_slug( $builder ) {
		return 'hfg_' . $builder . '_layout_v2';
	}

	/**
	 * Get individual builder value.
	 *
	 * @param string $builder builder slug.
	 *
	 * @return string
	 */
	private function get_builder_value( $builder ) {
		return get_theme_mod( 'hfg_' . $builder . '_layout' );
	}

	/**
	 * Main run function of the migrator.
	 *
	 * @return bool
	 */
	public function run() {
		$expected_builders = array_keys( $this->builders );

		foreach ( $expected_builders as $builder ) {
			// Attempt migration for every builder.
			self::$current_builder = $builder;
			$success               = $this->migrate_single_builder();

			// If it fails for one, it failed.
			if ( ! $success ) {
				return false;
			}
		}
		self::$current_builder = null;

		$success = $this->migrate_conditional_headers();

		if ( ! $success ) {
			return false;
		}

		// Migration success.
		return true;
	}

	/**
	 * Migrate conditional headers
	 *
	 * @return boolean
	 */
	private function migrate_conditional_headers() {
		if ( ! class_exists( '\Neve_Pro\Admin\Custom_Layouts_Cpt' ) ) {
			return true;
		}

		if ( ! method_exists( '\Neve_Pro\Admin\Custom_Layouts_Cpt', 'get_conditional_headers' ) ) {
			return true;
		}

		$headers = \Neve_Pro\Admin\Custom_Layouts_Cpt::get_conditional_headers();

		self::$current_builder = 'header';

		foreach ( $headers as $cpt_id => $header ) {
			$decoded = json_decode( $header, true );

			if ( ! is_array( $decoded ) || empty( $decoded ) ) {
				continue;
			}
			if ( ! isset( $decoded['hfg_header_layout'] ) ) {
				continue;
			}


			$migrated_value          = $this->get_new_builder_value_from_old( $decoded['hfg_header_layout'] );
			$new_mod_key             = $this->get_new_builder_mod_slug( 'header' );
			$decoded[ $new_mod_key ] = $migrated_value;

			update_post_meta( $cpt_id, 'theme-mods', wp_json_encode( $decoded ) );
			delete_transient( 'custom_layouts_post_map_v2' );
		}

		self::$current_builder = null;

		return true;
	}
}
