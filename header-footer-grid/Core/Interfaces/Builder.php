<?php
/**
 * Builder Interface class for Header Footer Grid.
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
 * Interface Builder
 *
 * @package HFG\Core\Interfaces
 */
interface Builder {

	/**
	 * Init method for the builder.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @return mixed
	 */
	public function init();

	/**
	 * Get builder id.
	 *
	 * @return string Builder id.
	 */
	public function get_id();

	/**
	 * Method to get protected properties for class.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @param string $key The property key name.
	 *
	 * @return bool
	 */
	public function get_property( $key );

	/**
	 * Register builder scripts
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function scripts();

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
	 * Register a new component for builder.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param mixed $component_to_add A component.
	 *
	 * @return bool
	 */
	public function register_component( $component_to_add );

	/**
	 * Returns the builder components.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_components();

	/**
	 * Returns the components settings.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_components_settings();

	/**
	 * A representation of the builder as array.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_builder();

	/**
	 * Render row markup
	 *
	 * @param string $device_id Device id.
	 * @param string $row_id Row id.
	 * @param array  $row_details Row metadata.
	 */
	public function render_row( $device_id, $row_id, $row_details );
}
