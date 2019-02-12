<?php
namespace HFG\Core\Interfaces;

use HFG\Core\Abstract_Component;

interface Builder {

	public function get_property( $key );

	public function get_builder();

	public function register_component( Abstract_Component $component );
}