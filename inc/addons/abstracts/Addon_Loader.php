<?php
/**
 * Addon loader abstract class.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Addons\Abstracts
 */

namespace Neve\Addons\Abstracts;

/**
 * Class Addon_Loader
 *
 * @package Neve\Addons\Abstracts
 */
abstract class Addon_Loader {
	/**
	 * Modules that will be dropped from loading.
	 *
	 * @var array
	 */
	private $removables = array();

	/**
	 * Modules that will be loaded.
	 *
	 * @var array
	 */
	private $addon_modules = array();

	/**
	 * Addon_Loader constructor.
	 */
	public function __construct() {
		$this->removables    = $this->set_removables();
		$this->addon_modules = $this->set_addons();
	}

	/**
	 * Set the modules that will be added.
	 *
	 * @return array
	 */
	abstract protected function set_addons();

	/**
	 * Set the features that will be removed.
	 *
	 * @return array
	 */
	abstract protected function set_removables();

	/**
	 * Filter the modules. Remove the removables and add the addons.
	 *
	 * @param array $modules the modules array that we filter.
	 *
	 * @return array
	 */
	final public function filter_modules( $modules ) {
		$removables = $this->removables;
		foreach ( $removables as $removable ) {
			$key = array_search( $removable, $modules );
			if ( $key === false ) {
				continue;
			}
			unset( $modules[ $key ] );
		}

		$addons = $this->addon_modules;
		foreach ( $addons as $addon ) {
			array_push( $modules, $addon );
		}

		return $modules;
	}
}
