<?php
/**
 * Defaults for HFG builder.
 *
 * @package     HFG
 * @copyright   Copyright (c) 2017, Marius Cristea
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       1.1.0
 */

namespace HFG\Core\Settings;

/**
 * Class Defaults
 *
 * @package HFG\Core\Settings
 */
class Defaults implements \ArrayAccess {

	/**
	 * Holds default schema used for migration purposes or smart defaults.
	 *
	 * @var array|mixed|void Schema array.
	 */
	public static $defaults_schema = [];

	/**
	 * Defaults constructor.
	 */
	public function __construct() {
		self::$defaults_schema = apply_filters( 'hfg_settings_schema', [] );
	}

	/**
	 * Check if we have the setting.
	 *
	 * @param mixed $offset Offset key.
	 *
	 * @return bool Is set?
	 */
	public function offsetExists( $offset ) {
		return isset( self::$defaults_schema[ $offset ] );
	}

	/**
	 * Return setting value.
	 *
	 * @param mixed $offset Offset id.
	 *
	 * @return mixed Value.
	 */
	public function offsetGet( $offset ) {
		return self::$defaults_schema[ $offset ];
	}

	/**
	 * Set value.
	 *
	 * @param mixed $offset Default key.
	 * @param mixed $value Default value.
	 */
	public function offsetSet( $offset, $value ) {
		self::$defaults_schema[ $offset ] = $value;
	}

	/**
	 * Remove default from collection.
	 *
	 * @param mixed $offset Offset key.
	 */
	public function offsetUnset( $offset ) {
		unset( self::$defaults_schema[ $offset ] );
	}
}
