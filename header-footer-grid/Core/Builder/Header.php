<?php
namespace HFG\Core\Builder;

class Header extends Abstract_Builder {

	public function __construct( $control_id = '', $panel = '', $section = '' ) {
		$this->set_property( 'control_id', $control_id );
		$this->set_property( 'panel', $panel );
		$this->set_property( 'section', $section );
	}
}