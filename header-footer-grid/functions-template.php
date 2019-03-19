<?php

namespace HFG;

use HFG\Core\Builder\Abstract_Builder;

/**
 * Return registered builders.
 *
 * @param string $builder_name
 *
 * @return Abstract_Builder[]|Abstract_Builder Array of builders registered.
 */
function get_builders( $builder_name = '' ) {
	return Main::get_instance()->get_builders( $builder_name );
}

function render_builder( $builder_name = '' ) {
	Main::get_instance()->get_builders( $builder_name )->render();
}

function render_components( $builder_name = '', $device = null, $row_index = null ) {
	Main::get_instance()->get_builders( $builder_name )->render_components( $device, $row_index );
}

/**
 * @param string $builder_name
 * @param null   $component_id
 *
 * @return Core\Components\Abstract_Component
 */
function current_component( $builder_name = '', $component_id = null ) {
	$builder = Main::get_instance()->get_builders( $builder_name );
	$builder = is_array( $builder ) ? reset( $builder ) : $builder;

	return $builder->get_component( $component_id );
}

function settings() {
	return Core\Settings::get_instance();
}

function current_device( $builder_name = '' ) {
	return Main::get_instance()->get_builders( $builder_name )->get_current_device();
}

function current_row( $builder_name = '' ) {
	return Main::get_instance()->get_builders( $builder_name )->get_current_row_index();
}
