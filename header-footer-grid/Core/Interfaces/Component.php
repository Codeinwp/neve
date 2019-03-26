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
	 * Shares the row partials list.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param array[WP_Customize_Partial] $partials_list A list of partials.
	 *
	 * @return mixed
	 */
	public function set_row_partials( array $partials_list = array() );

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
