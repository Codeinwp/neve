<?php
namespace HFG\Core\Interfaces;

use WP_Customize_Manager;

interface Component {

	public function get_id();

	public function get_settings();

	public function customize_register( WP_Customize_Manager $wp_customize );

	public function render();
}