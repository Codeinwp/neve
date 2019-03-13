<?php

namespace HFG\Traits;

trait Responsive {


	private function render_responsive_toggles( $devices ) {
		$output = '<ul class="responsive-switchers">';

		$is_first = true;
		foreach ( $devices as $device ) {
			$output .= '<li class="' . $device . '">';
			$classes = array( 'preview-' . $device );
			if ( $is_first ) {
				$classes[] = 'active';
				$is_first  = false;
			}
			$output  .= '<button type="button" class="' . implode( ' ', $classes ) . '" data-device="' . $device . '">';
			$dashicon = 'dashicons-' . $device;
			if ( $device === 'mobile' ) {
				$dashicon = 'dashicons-smartphone';
			}
			$output .= '<i class="dashicons ' . $dashicon . '"></i>';
			$output .= '</button>';
			$output .= '</li>';
		}

		$output .= '</ul>';

		return $output;
	}
}
