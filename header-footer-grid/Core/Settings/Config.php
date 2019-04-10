<?php
/**
 * Config builder variables.
 *
 * @package     HFG
 * @copyright   Copyright (c) 2017, Marius Cristea
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       1.1.0
 */

namespace HFG\Core\Settings;
/**
 * Class Config
 *
 * @package HFG\Core\Settings
 */
class Config {
	/**
	 * Get library url location.
	 *
	 * @return string Library url.
	 */
	public static function get_url() {
		return get_template_directory_uri() . '/header-footer-grid';
	}

	/**
	 * Get theme support string.
	 *
	 * @return string Theme support string.
	 */
	public static function get_support() {
		return 'hfg_support';
	}

	/**
	 * Return library path.
	 *
	 * @return string Path.
	 */
	public static function get_path() {
		return get_template_directory() . '/header-footer-grid';
	}

}
