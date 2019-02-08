<?php
namespace HFG\Core\Builder;

use HFG\Components\Button;

class Panel {
	public function __construct() {
		$this->init();
	}

	public function init() {
		$layout_builder = new Layout();
		$layout_builder->init();

		$layout_builder->register_item( 'header', new Button() );
	}
}