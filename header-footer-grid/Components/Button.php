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
		$prefix   = $this->section;
		$fn       = array( $this, 'render' );
		$selector = 'a.item--' . $this->id;

		$wp_customize->add_section( $this->section , array(
			'title'    => $this->label,
			'priority' => 30,
			'panel' => $this->panel,
		) );
//
//		$wp_customize->add_setting( $prefix . '_text' . '_setting' , array(
//			'theme_supports'  => 'hfg_support',
//			'default'   => __( 'Button', 'hfg-module' ),
//			'transport' => 'refresh',
//		) );
//
//		$wp_customize->add_control( $prefix . '_text', array(
//			'name'            => $prefix . '_text',
//			'label'           => __( 'Text', 'hfg-module' ),
//			'type'            => 'text',
//			'section'         => $this->section,
//			'selector'        => $selector,
//			'render_callback' => $fn,
//			'settings'        => $prefix . '_text' . '_setting',
//		) );
//
//		$wp_customize->add_setting( $prefix . '_setting' , array(
//			'default'   => '#000000',
//			'transport' => 'refresh',
//		) );
//
//		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'link_color', array(
//			'label'    => __( 'Header Color', 'starter' ),
//			'section'  => $this->section,
//			'settings' => $prefix . '_setting',
//		) ) );

		$config   = array(
			array(
				'name'            => $prefix . '_text',
				'type'            => 'text',
				'section'         => $this->section,
				'theme_supports'  => '',
				'selector'        => $selector,
				'render_callback' => $fn,
				'title'           => __( 'Text', 'hfg-module' ),
				'default'         => __( 'Button', 'hfg-module' ),
			),

			array(
				'name'            => $prefix . '_icon',
				'type'            => 'icon',
				'section'         => $this->section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'theme_supports'  => '',
				'title'           => __( 'Icon', 'hfg-module' ),
			),

			array(
				'name'            => $prefix . '_position',
				'type'            => 'radio_group',
				'section'         => $this->section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'default'         => 'before',
				'title'           => __( 'Icon Position', 'hfg-module' ),
				'choices'         => array(
					'before' => __( 'Before', 'hfg-module' ),
					'after'  => __( 'After', 'hfg-module' ),
				),
			),

			array(
				'name'            => $prefix . '_link',
				'type'            => 'text',
				'section'         => $this->section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'title'           => __( 'Link', 'hfg-module' ),
			),

			array(
				'name'            => $prefix . '_target',
				'type'            => 'checkbox',
				'section'         => $this->section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'checkbox_label'  => __( 'Open link in a new tab.', 'hfg-module' ),
			),

			array(
				'name'        => $prefix . '_typography',
				'type'        => 'typography',
				'section'     => $this->section,
				'title'       => __( 'Typography', 'hfg-module' ),
				'description' => __( 'Advanced typography for button', 'hfg-module' ),
				'selector'    => $selector,
				'css_format'  => 'typography',
				'default'     => array(),
			),

			array(
				'name'        => $prefix . '_styling',
				'type'        => 'styling',
				'section'     => $this->section,
				'title'       => __( 'Styling', 'hfg-module' ),
				'description' => __( 'Advanced styling for button', 'hfg-module' ),
				'selector'    => array(
					'normal' => $selector,
					'hover'  => $selector . ':hover',
				),
				'css_format'  => 'styling',
				'default'     => array(),
				'fields'      => array(
					'normal_fields' => array(
						'link_color'    => false, // disable for special field.
						'margin'        => false,
						'bg_image'      => false,
						'bg_cover'      => false,
						'bg_position'   => false,
						'bg_repeat'     => false,
						'bg_attachment' => false,
					),
					'hover_fields'  => array(
						'link_color' => false, // disable for special field.
					),
				),
			),
		);

		$this->add_settings_and_controls( $wp_customize, $config );
	}

	public function render() {
		return '<button>Cool</button>';
	}
}