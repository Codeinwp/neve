<?php
namespace HFG\Core\Builder;

use HFG\Core\Abstract_Component;

class Header extends Abstract_Builder {

	public function __construct( $control_id = '', $panel = '', $section = '' ) {
		$this->set_property( 'control_id', $control_id );
		$this->set_property( 'panel', $panel );
		$this->set_property( 'section', $section );
	}

	public function get_builder() {
		return array(
			'id' => 'header',
			'control_id' => $this->control_id,
			'version_id' => $this->control_id,
			'panel' => $this->panel,
			'section' => $this->section,
		);
	}

	public function register_component( Abstract_Component $component ) {
	}
}