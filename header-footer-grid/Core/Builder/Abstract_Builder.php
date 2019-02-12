<?php
namespace HFG\Core\Builder;

use HFG\Core\Interfaces\Builder;

abstract class Abstract_Builder implements Builder {

	protected $control_id;
	protected $panel;
	protected $section;

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
}