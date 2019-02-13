<?php
namespace HFG\Core\Builder;

class Header extends Abstract_Builder {

	public function __construct() {
		$this->set_property( 'control_id', 'neve_navigation_layout' );
		$this->set_property( 'panel', 'neve_header' );
		$this->set_property( 'section', '' );
	}
}