<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Addons
 */

namespace Neve\Addons;

use Neve\Addons\Abstracts\Addon_Loader;

/**
 * Class Main
 *
 * @package Neve\Addons
 */
class Main extends Addon_Loader {
	/**
	 * Set the modules that will be added.
	 *
	 * @return array
	 */
	protected function set_addons() {
		return array();
	}

	/**
	 * Set the features that will be removed.
	 *
	 * @return array
	 */
	protected function set_removables() {
		return array(
			'',
		);
	}


}
