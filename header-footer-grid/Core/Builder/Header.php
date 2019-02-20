<?php
namespace HFG\Core\Builder;

class Header extends Abstract_Builder {

	public function __construct() {
		$this->set_property( 'control_id', 'neve_navigation_layout' );
		$this->set_property( 'panel', 'neve_header' );
		$this->set_property( 'section', '' );

		$this->layout_settings = get_theme_mod( $this->control_id . '_layout_settings' );
		add_action( 'hfg-header-render', array( $this, 'render' ) );
	}

	public function render() {
		echo  '<pre>' . var_dump( $this->builder_components ) . '</pre>';
		echo  '<pre>' . json_encode( $this->layout_settings ) . '</pre>';
	}
}