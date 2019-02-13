<?php
namespace HFG\Core;

use WP_Customize_Manager;

abstract class Abstract_Component {

	protected $id;
	protected $section;
	protected $column;
	protected $width;
	protected $name;
	protected $label;
	protected $priority;
	protected $panel;

	public function get_settings() {
		return array(
			'name'    => $this->label,
			'id'      => $this->id,
			'col'     => $this->column,
			'width'   => $this->width,
			'section' => $this->section, // Customizer section to focus when click settings.
		);
	}

	public function get_id() {
		return $this->id;
	}

	protected function set_property( $key = '', $value = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}
		$this->$key = $value;
		return true;
	}

	public function get_property( $key = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}

		return $this->$key;
	}

	public function customize_register( WP_Customize_Manager $wp_customize ) {
		return $wp_customize;
	}

	protected function get_setting() {}

	protected function set_setting() {}

	abstract public function render();
}