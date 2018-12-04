<?php
/**
 * Features Factory
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Core
 */

namespace Neve\Core;

/**
 * The class responsible for instantiating new Neve features.
 *
 * @package    Neve\Core
 * @author     Themeisle <friends@themeisle.com>
 */
class Factory {
	/**
	 * Modules
	 *
	 * @var array
	 */
	private $modules;

	/**
	 * The modules namespace.
	 *
	 * @var string
	 */
	private $namespace;

	/**
	 * Factory constructor.
	 *
	 * @param array  $modules   the modules that will be loaded.
	 * @param string $namespace the modules namespace.
	 */
	public function __construct( $modules, $namespace = '\\Neve\\' ) {
		if ( ! is_array( $modules ) || empty( $modules ) ) {
			return;
		}
		$this->namespace = $namespace;
		$this->modules   = $modules;
	}

	/**
	 * Actually load the modules.
	 */
	public function load_modules() {
		foreach ( $this->modules as $module_name ) {
			$module = $this->build( $module_name );
			if ( $module !== null ) {
				$module->init();
			}
		}
	}

	/**
	 * The build method for creating a new Neve module class.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param   string $class The name of the feature to instantiate.
	 *
	 * @return  object|null
	 */
	private function build( $class ) {
		$full_class_name = $this->namespace . $class;
		if ( class_exists( $full_class_name ) ) {
			return new $full_class_name;
		}

		return null;
	}
}
