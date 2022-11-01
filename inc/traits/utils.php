<?php
/**
 * Utils traits, shared with other classes.
 *
 * @package Neve\Traits
 */

namespace Neve\Traits;

/**
 * Trait Utils
 *
 * @package Neve\Traits;
 */
trait Utils {

	/**
	 * Decide if the notice for BF should be displayed.
	 *
	 * @return bool
	 */
	public function should_show_bf() {
		if ( defined( 'NEVE_PRO_VERSION' ) ) {
			return false;
		}

		$start_date   = strtotime( '2022-11-21 00:00:00' );
		$end_date     = strtotime( '2022-11-28 23:59:59' );
		$current_time = strtotime( current_time( 'Y-m-d H:i:s' ) );
		if ( $start_date <= $current_time && $current_time <= $end_date ) {
			return true;
		}

		return false;
	}
}
