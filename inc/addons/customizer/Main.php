<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package neve\addons\customizer
 */

namespace Neve\Addons\Customizer;

use Neve\Addons\Abstracts\Addon_Loader;

/**
 * Addon Loader
 *
 * @package Neve\Addons\Customizer
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
		return array();
	}
}
