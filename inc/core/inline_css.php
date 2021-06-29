<?php
/**
 * Inline Style template manager.
 * Used for registering templates and having a single instance of the template
 * across the whole application.
 *
 * @package Neve\Core
 */

namespace Neve\Core;

/**
 * Class Inline_Css
 * @package Neve\Core
 */
class Inline_Css {

	/**
	 * Instance of this class.
	 *
	 * @var Inline_Css
	 */
	private static $_instance = null;

	/**
	 * List of queued inline styles.
	 *
	 * @var array
	 */
	private static $queued_styles = [];

	/**
	 * Returns the active instance of the class
	 * or a new one.
	 *
	 * @return Inline_Css
	 */
	public static function get_instance() {
		if ( self::$_instance == null ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * Add to the active queue.
	 *
	 * @param string $path The path to require.
	 */
	public function add_to_queue( $path ) {
		$style = require_once $path;
		self::$queued_styles[md5($path)] = $style;
	}

	/**
	 * Returns and inline style from queue.
	 *
	 * @param string $path The path for witch to return the style.
	 *
	 * @return string
	 */
	public function get_by_path( $path ) {
		return self::$queued_styles[ md5($path) ] ?? '';
	}

	/**
	 * Get all inline styles.
	 *
	 * @return string
	 */
	public function get_styles() {
		$css = '';
		foreach ( self::$queued_styles as $inline_style ) {
			$css .= $inline_style;
		}
		return $css;
	}

}
