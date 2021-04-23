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
	 * @var string[]
	 */
	private $builders = [
		'header'      => [ 'top', 'main', 'bottom', 'sidebar' ],
		'footer'      => [ 'top', 'main', 'bottom' ],
		'page_header' => [ 'top', 'bottom' ]
	];


	/**
	 * Row slots.
	 *
	 * @var string[]
	 */
	private $row_slots = [ 'left', 'c-left', 'center', 'c-right', 'right' ];

	/**
	 * Migrate row for columned builder.
	 *
	 * @param array $next_row empty row array.
	 * @param string $row_slug row slug.
	 * @param array $old_row old row values.
	 *
	 * @return array
	 */
	private function migrate_columns_row( $old_row, $next_row, $row_slug, $builder ) {
		$items_no        = count( $old_row );
		$columns_setting = 'hfg_' . $builder . '_layout_' . $row_slug . '_columns_number';

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
	 * Migrate row for fluid builder.
	 *
	 * @param array $next_row empty row array.
	 * @param array $old_items old row values.
	 *
	 * @return array
	 */
	private function migrate_fluid_row( $next_row, $old_items ) {
		if ( count( $old_items ) === 1 ) {
			if ( $old_items[0]['x'] === 0 ) {
				$next_row['left'] = [ 'id' => $old_items[0]['id'] ];

				return $next_row;
			}

			if ( $old_items[0]['width'] + $old_items[0]['x'] === 12 ) {
				$next_row['right'] = [ 'id' => $old_items[0]['id'] ];

				return $next_row;
			}
		}

		return $next_row;
	}

	/**
	 * Migrate single row of the builder.
	 *
	 * @param $old_items
	 * @param $row_slug
	 * @param $builder
	 *
	 * @return array
	 */
	private function migrate_single_row( $old_items, $row_slug, $builder ) {
		$next_row_value = array_fill_keys( $this->row_slots, [] );

		if ( count( $old_items ) === 0 ) {
			return $next_row_value;
		}

		if ( $builder === 'footer' ) {
			return $this->migrate_columns_row( $old_items, $next_row_value, $row_slug, $builder );
		}

		return $this->migrate_fluid_row( $next_row_value, $old_items );
	}

	/**
	 * Migrate single builder value.
	 *
	 * @param string $builder builder slug.
	 *
	 * @return bool
	 */
	private function migrate_single_builder( $builder ) {
		$old_value = $this->get_builder_value( $builder );

		if ( empty( $old_value ) ) {
			return true;
		}

		$old_value = json_decode( $old_value, true );

		if ( ! is_array( $old_value ) ) {
			return false;
		}

		$empty_rows = array_fill_keys( $this->row_slots, [] );

		$new_value = [];

		foreach ( $old_value as $device => $rows ) {

			// Setup the builders for each device.
			$new_value[ $device ] = array_fill_keys( $this->builders[ $builder ], $empty_rows );

			// Sidebar is available only on mobile. We should remove it on other devices.
			if ( $device !== 'mobile' && isset( $new_value[ $device ]['sidebar'] ) ) {
				unset ( $new_value[ $device ]['sidebar'] );
			}

			foreach ( $rows as $row_slug => $items ) {
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
				$new_value[ $device ][ $row_slug ] = $this->migrate_single_row( $items, $row_slug, $builder );
			}
		}
		echo '<pre>';
		print_r( var_export( $new_value, true ) );
		echo '</pre>';

		//TODO: save the theme mod.

		return true;
	}

	/**
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
			$success = $this->migrate_single_builder( $builder );

			// If it fails for one, it failed.
			if ( ! $success ) {
				return false;
			}
		}

		// Migration success.
		return true;
	}
}
