<?php
require_once __DIR__ . '/core/abstract-panel-item.php';

class Test extends AbstractPanelItem {

	public function set( $key = '', $value = '' ) {
		$this->set_property( $key, $value );
	}
}

$test = new Test();

$test->set( 'id', 'theID' );

var_dump( $test->item() );