<?php
/**
 * Theme mods wrapper
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Core
 */

namespace Neve\Core\Settings;

/**
 * Class Admin
 *
 * @package Neve\Core\Settings
 */
class Mods {

	/**
	 * Cached values.
	 *
	 * @var array Values cached.
	 */
	private static $_cached = [];

	/**
	 * Get theme mod.
	 *
	 * @param string $key Key value.
	 * @param string $default Default value.
	 *
	 * @return mixed Mod value.
	 */
	public static function get( $key, $default = false ) {
		if ( isset( self::$_cached[ $key ] ) ) {
			return ( self::$_cached[ $key ] );
		}

		self::$_cached[ $key ] = ( $default === false ) ? get_theme_mod( $key ) : get_theme_mod( $key, $default );

		return self::$_cached[ $key ];
	}

	/**
	 * Setter for the manager.
	 *
	 * @param string $key Key.
	 * @param mixed $value Value
	 */
	public static function set( $key, $value ) {
		self::$_cached[ $key ] = $value;
	}

	/**
	 * Get and transform setting to json.
	 *
	 * @param string $key Key name.
	 * @param string $default Default value.
	 * @param bool $as_array As array or Object?
	 *
	 * @return mixed
	 */
	public static function to_json( $key, $default = false, $as_array = true ) {
		return json_decode( self::get( $key, $default ), $as_array );
	}

}
