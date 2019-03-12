<?php
/**
 * Component Interface class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Interfaces;

use WP_Customize_Manager;

/**
 * Interface Component
 *
 * @package HFG\Core\Interfaces
 */
interface Component {

	/**
	 * Getter for component id.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @return mixed
	 */
	public function get_id();

	/**
	 * Return the settings for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_settings();

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 */
	public function customize_register( WP_Customize_Manager $wp_customize );

	/**
	 * Render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return mixed|string
	 */
	public function render();
}
