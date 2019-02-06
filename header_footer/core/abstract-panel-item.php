<?php
abstract class AbstractPanelItem {

	protected $id;
	protected $section;
	protected $column;
	protected $width;
	protected $name;
	protected $label;
	protected $priority;
	protected $panel;

	public function item() {
		return array(
			'name'    => $this->label,
			'id'      => $this->id,
			'col'     => $this->column,
			'width'   => $this->width,
			'section' => $this->section, // Customizer section to focus when click settings.
		);
	}

	protected function set_property( $key = '', $value = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}
		$this->$key = $value;
		return true;
	}
}