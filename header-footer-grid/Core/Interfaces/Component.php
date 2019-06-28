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
	 * @return mixed
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_id();

	/**
	 * Return the settings for the component.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_settings();

	/**
	 * Define component props.
	 *
	 * @return mixed
	 * @since   1.0.0
	 * @access  public
	 */
	public function init();

	/**
	 * The render method for the component.
	 *
	 * @return mixed
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component();

	/**
	 * Called to register component controls.
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 * @since   1.0.0
	 * @access  public
	 */
	public function customize_register( WP_Customize_Manager $wp_customize );

	/**
	 * Add component settings.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings();

	/**
	 * Render method.
	 *
	 * @return mixed|string
	 * @since   1.0.0
	 * @access  public
	 */
	public function render();
}
