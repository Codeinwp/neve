<?php
namespace HFG\Core\Interfaces;

use WP_Customize_Manager;

interface Builder {

	public function get_property( $key );

	public function get_builder();

	public function customize_register( WP_Customize_Manager $wp_customize );

	public function register_component( $component_to_add );

	public function get_components();
}