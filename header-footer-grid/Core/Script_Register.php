<?php
/**
 * Handles Inline Script Register for HFG components
 *
 * @package Neve
 */
namespace HFG\Core;

/**
 * Class Script_Register
 *
 * @package HFG\Core
 */
class Script_Register {

	/**
	 * Holds the instance of the class.
	 *
	 * @var Script_Register
	 */
	private static $_instance;

	/**
	 * Holds all queued scripts data.
	 *
	 * @var array
	 */
	private $scripts = [];

	/**
	 * Returns the instance of the class.
	 *
	 * @return Script_Register
	 */
	public static function get_instance() {
		if ( null === self::$_instance ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function __construct() {}

	/**
	 * Check if handle is already queued to avoid duplicates.
	 *
	 * @param string $handle Unique handle for the inline script.
	 *
	 * @return bool
	 */
	public function is_queued( $handle ) {
		return isset( $this->scripts[ $handle ] );
	}

	/**
	 * Register to queue.
	 *
	 * @param string $handle Unique handle for the inline script.
	 * @param string $data Script data.
	 */
	public function register_script( $handle, $data ) {
		if ( empty( $data ) ) {
			return;
		}
		if ( $this->is_queued( $handle ) ) {
			return;
		}
		$this->scripts[ $handle ] = $data;
	}

	/**
	 * Return the inline script.
	 *
	 * @return string
	 */
	public function inline_scripts() {
		if ( empty( $this->scripts ) ) {
			return '';
		}
		return implode( '', array_values( $this->scripts ) );
	}
}
