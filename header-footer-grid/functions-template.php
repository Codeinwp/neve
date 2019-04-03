<?php
/**
 * Global scoped functions for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG;

use HFG\Core\Builder\Abstract_Builder;

/**
 * Return registered builders.
 *
 * @param string $builder_name The builder id.
 *
 * @return Abstract_Builder[]|Abstract_Builder Array of builders registered.
 */
function get_builders( $builder_name = '' ) {
	return Main::get_instance()->get_builders( $builder_name );
}

/**
 * Render a specified builder.
 *
 * @param string $builder_name The builder id.
 */
function render_builder( $builder_name = '' ) {
	Main::get_instance()->get_builders( $builder_name )->render();
}

/**
 * Render a specific component.
 *
 * @param string $builder_name The builder id.
 * @param null   $device The device.
 * @param null   $row_index The row index.
 */
function render_components( $builder_name = '', $device = null, $row_index = null ) {
	Main::get_instance()->get_builders( $builder_name )->render_components( $device, $row_index );
}

/**
 * Returns the current component.
 *
 * @param string $builder_name The builder id.
 * @param null   $component_id The component id.
 *
 * @return Core\Components\Abstract_Component
 */
function current_component( $builder_name = '', $component_id = null ) {
	$builder = Main::get_instance()->get_builders( $builder_name );
	$builder = is_array( $builder ) ? reset( $builder ) : $builder;

	return $builder->get_component( $component_id );
}

/**
 * Exposes the settings.
 *
 * @return Core\Settings
 */
function settings() {
	return Core\Settings::get_instance();
}

/**
 * Returns the current device.
 *
 * @param string $builder_name The builder id.
 *
 * @return string|null
 */
function current_device( $builder_name = '' ) {
	return Main::get_instance()->get_builders( $builder_name )->get_current_device();
}

/**
 * Returns the current row.
 *
 * @param string $builder_name The builder id.
 *
 * @return string|null
 */
function current_row( $builder_name = '' ) {
	return Main::get_instance()->get_builders( $builder_name )->get_current_row_index();
}
