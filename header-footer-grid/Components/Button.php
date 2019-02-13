<?php
namespace HFG\Components;

use HFG\Core\Abstract_Component;
use WP_Customize_Color_Control;
use WP_Customize_Manager;

class Button extends Abstract_Component {

	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Button', 'hfg-module' ) );
		$this->set_property( 'id', 'button_base' );
		$this->set_property( 'col', 0 );
		$this->set_property( 'width', 1 );
		$this->set_property( 'section', 'header_button' );
		$this->set_property( 'panel', $panel );
	}

	public function customize_register( WP_Customize_Manager $wp_customize ) {
		$wp_customize->add_section( $this->section , array(
			'title'    => $this->label,
			'priority' => 30,
			'panel' => $this->panel,
		) );

		$wp_customize->add_setting( $this->section . '_setting' , array(
			'default'   => '#000000',
			'transport' => 'refresh',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'link_color', array(
			'label'    => __( 'Header Color', 'starter' ),
			'section'  => $this->section,
			'settings' => $this->section . '_setting',
		) ) );
	}

	public function render() {
		return '<button>Cool</button>';
	}
}