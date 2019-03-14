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
	 * Register hooks for builder.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function register_builder_hooks();

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
}
