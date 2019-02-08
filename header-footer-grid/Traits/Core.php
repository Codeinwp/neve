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

	// Add more common options here ...
}