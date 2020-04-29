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
	 * No cache mode.
	 *
	 * @var bool Should we avoid cache.
	 */
	public static $no_cache = false;

	/**
	 * Get theme mod.
	 *
	 * @param string $key Key value.
	 * @param string $default Default value.
	 *
	 * @return mixed Mod value.
	 */
	public static function get( $key, $default = false ) {
		$master_default = $default;
		$subkey         = null;
		if ( strpos( $key, '.' ) !== false ) {
			$key_parts      = explode( '.', $key );
			$key            = $key_parts[0];
			$subkey         = $key_parts[1];
			$master_default = false;
		}

		if ( ! isset( self::$_cached[ $key ] ) || self::$no_cache ) {
			$master_default        = $master_default === false ? self::defaults( $key ) : $master_default;
			self::$_cached[ $key ] =
				( $master_default === false ) ?
					get_theme_mod( $key ) :
					get_theme_mod( $key, $master_default );
		}

		if ( $subkey === null ) {
			return self::$_cached[ $key ];
		}
		$value = is_string( self::$_cached[ $key ] ) ? json_decode( self::$_cached[ $key ], true ) : self::$_cached[ $key ];

		return isset( $value[ $subkey ] ) ? $value[ $subkey ] : $default;
	}

	/***
	 * Forced defaults.
	 *
	 * @param string $key Key name.
	 *
	 * @return array|bool
	 */
	private static function defaults( $key ) {
		switch ( $key ) {
			case Config::MODS_CONTAINER_WIDTH:
				return '{ "mobile": 748, "tablet": 992, "desktop": 1170 }';
				break;
			case Config::MODS_BUTTON_PRIMARY_STYLE:
				return neve_get_button_appearance_default();
				break;
			case Config::MODS_BUTTON_SECONDARY_STYLE:
				return neve_get_button_appearance_default( 'secondary_button' );
				break;
			case Config::MODS_TYPEFACE_GENERAL:
				$defaults  = self::get_typography_defaults(
					[
						'line_height'    => 'neve_body_line_height',
						'letter_spacing' => 'neve_body_letter_spacing',
						'font_weight'    => 'neve_body_font_weight',
						'text_transform' => 'neve_body_text_transform',
					]
				);
				$font_size = Mods::to_json( 'neve_body_font_size' );
				if ( ! empty( $font_size ) ) {
					$defaults['fontSize'] = $font_size;
				}

				return $defaults;
				break;
			case Config::MODS_TYPEFACE_H1:
			case Config::MODS_TYPEFACE_H2:
			case Config::MODS_TYPEFACE_H3:
			case Config::MODS_TYPEFACE_H4:
			case Config::MODS_TYPEFACE_H5:
			case Config::MODS_TYPEFACE_H6:
				$defaults   = self::get_typography_defaults(
					[
						'line_height'    => 'neve_headings_line_height',
						'letter_spacing' => 'neve_headings_letter_spacing',
						'font_weight'    => 'neve_headings_font_weight',
						'text_transform' => 'neve_headings_text_transform',
					]
				);
				$legacy_map = [
					Config::MODS_TYPEFACE_H6 => [
						'font_size'   => 'neve_h6_font_size',
						'line_height' => 'neve_h6_line_height',
					],
					Config::MODS_TYPEFACE_H5 => [
						'font_size'   => 'neve_h5_font_size',
						'line_height' => 'neve_h5_line_height',
					],
					Config::MODS_TYPEFACE_H4 => [
						'font_size'   => 'neve_h4_font_size',
						'line_height' => 'neve_h4_line_height',
					],
					Config::MODS_TYPEFACE_H3 => [
						'font_size'   => 'neve_h3_font_size',
						'line_height' => 'neve_h3_line_height',
					],
					Config::MODS_TYPEFACE_H2 => [
						'font_size'   => 'neve_h2_font_size',
						'line_height' => 'neve_h2_line_height',
					],
					Config::MODS_TYPEFACE_H1 => [
						'font_size'   => 'neve_h1_font_size',
						'line_height' => 'neve_h1_line_height',
					],
				];

				$font_size = Mods::to_json( $legacy_map[ $key ]['font_size'] );
				if ( ! empty( $font_size ) ) {
					$defaults['fontSize'] = $font_size;
				}
				$line_height = Mods::to_json( $legacy_map[ $key ]['line_height'] );
				if ( ! empty( $line_height ) ) {
					$defaults['lineHeight'] = $line_height;
				}

				return $defaults;
				break;
		}

		return false;
	}

	/**
	 * Helper method to get defaults for typography.
	 *
	 * @param array $args Legacy mods.
	 *
	 * @return array
	 */
	private static function get_typography_defaults( $args ) {

		$line_height    = Mods::to_json( $args['line_height'] );
		$letter_spacing = Mods::get( $args['letter_spacing'] );
		$font_weight    = Mods::get( $args['font_weight'] );
		$text_transform = Mods::get( $args['text_transform'] );
		$defaults       = [];
		if ( ! empty( $line_height ) ) {
			$defaults['lineHeight'] = $line_height;
		}
		if ( ! empty( $letter_spacing ) ) {
			$defaults['letterSpacing'] = $letter_spacing;
		}
		if ( ! empty( $font_weight ) ) {
			$defaults['fontWeight'] = $font_weight;
		}
		if ( ! empty( $text_transform ) ) {
			$defaults['textTransform'] = $text_transform;
		}

		return $defaults;
	}

	/**
	 * Setter for the manager.
	 *
	 * @param string $key Key.
	 * @param mixed  $value Value.
	 */
	public static function set( $key, $value ) {
		self::$_cached[ $key ] = $value;
	}

	/**
	 * Get and transform setting to json.
	 *
	 * @param string $key Key name.
	 * @param string $default Default value.
	 * @param bool   $as_array As array or Object.
	 *
	 * @return mixed
	 */
	public static function to_json( $key, $default = false, $as_array = true ) {
		return json_decode( self::get( $key, $default ), $as_array );
	}

}
