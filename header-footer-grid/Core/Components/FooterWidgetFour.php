<?php
namespace HFG\Core\Components;

class FooterWidgetFour extends Abstract_FooterWidget {

	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Footer Sidebar 4', 'hfg-module' ) );
		$this->set_property( 'id', 'footer-4' );
		$this->set_property( 'col', 0 );
		$this->set_property( 'row', 'top' );
		$this->set_property( 'width', 3 );
		$this->set_property( 'section', 'sidebar-widgets-footer-4' );
		$this->set_property( 'panel', $panel );

		add_filter( 'customize_section_active', array( $this, 'footer_widgets_show' ), 15, 2 );
	}
}