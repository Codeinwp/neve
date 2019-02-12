<?php
namespace HFG\Components;

use HFG\Core\Abstract_Component;

class Button extends Abstract_Component {

	public function __construct() {
		$this->set_property( 'label', __( 'Button', 'header-footer-i18n' ) );
		$this->set_property( 'id', 'button_base' );
		$this->set_property( 'col', 0 );
		$this->set_property( 'width', 1 );
		$this->set_property( 'section', 'header_button' );
	}

	public function render() {
		return '<button>Cool</button>';
	}
}