<?php
namespace HFG\Traits;

trait Core {
	public function get_assets_suffix() {
		$suffix = '.min';
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			$suffix = '';
		}

		return $suffix;
	}

	public function merge_items( $destination = array(), $new_array = array() ) {
		$keys     = array();
		$new_keys = array();

		foreach ( $destination as $item ) {
			if ( isset( $item['_key'] ) ) {
				$keys[ $item['_key'] ] = $item['_key'];
			}
		}

		if ( empty( $keys ) ) {
			return $destination;
		}

		// Add item if it not in saved list.
		foreach ( $new_array as $item ) {
			if ( isset( $item['_key'] ) ) {
				$new_keys[ $item['_key'] ] = $item['_key'];
				if ( ! isset( $keys[ $item['_key'] ] ) ) {
					$destination[] = $item;
				}
			}
		}

		// Remove the item not in the defined list.
		$new_destination = array();
		foreach ( $destination as $_dk => $item ) {
			if ( isset( $item['_key'] ) ) {
				if ( isset( $new_keys[ $item['_key'] ] ) ) {
					$new_destination[] = $item;
				}
			} else {
				$new_destination[] = $item;
			}
		}

		return $new_destination;
	}

	// Add more common options here ...
}
