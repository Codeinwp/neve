<?php
/**
 * The class are used to get supported post types for the specific context.
 * 
 * @package Neve\Core
 */
namespace Neve\Core;

/**
 * Supported_Post_Types.
 */
class Supported_Post_Types {
	const SUPPORTED_CONTEXTS = array( 'block_editor' );

	/**
	 * 
	 * Stores post types.
	 * 
	 * @var array
	 */
	public static $maps = [];
	
	/**
	 * Get supported post types
	 *
	 * @param  string $context can be block_editor for now.
	 * @return array|false
	 */
	public static function get( $context ) {
		if ( ! in_array( $context, self::SUPPORTED_CONTEXTS, true ) ) {
			return false;
		}

		if ( ! array_key_exists( $context, self::$maps ) ) {
			$get_func = 'get_' . $context;

			self::$maps[ $context ] = apply_filters( 'neve_post_type_supported_list', self::$get_func(), $context );
		}

		return self::$maps[ $context ];
	}

	/**
	 * Get supported post types for the 'block_editor' context.
	 *
	 * @return array
	 */
	public static function get_block_editor() {
		return array( 'post', 'page' );
	}
}
