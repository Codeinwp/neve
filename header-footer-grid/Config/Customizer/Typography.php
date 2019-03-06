<?php
namespace HFG\Config\Customizer;

class Typography {
	public function __construct() {
		return array(
			array(
				'name'    => 'font',
				'type'    => 'select',
				'label'   => __( 'Font Family', 'hfg-module' ),
				'choices' => array(),
			),
			array(
				'name'    => 'font_weight',
				'type'    => 'select',
				'label'   => __( 'Font Weight', 'hfg-module' ),
				'choices' => array(),
			),
			array(
				'name'  => 'languages',
				'type'  => 'checkboxes',
				'label' => __( 'Font Languages', 'hfg-module' ),
			),
			array(
				'name'            => 'font_size',
				'type'            => 'slider',
				'label'           => __( 'Font Size', 'hfg-module' ),
				'device_settings' => true,
				'min'             => 9,
				'max'             => 80,
				'step'            => 1,
			),
			array(
				'name'            => 'line_height',
				'type'            => 'slider',
				'label'           => __( 'Line Height', 'hfg-module' ),
				'device_settings' => true,
				'min'             => 9,
				'max'             => 80,
				'step'            => 1,
			),
			array(
				'name'  => 'letter_spacing',
				'type'  => 'slider',
				'label' => __( 'Letter Spacing', 'hfg-module' ),
				'min'   => - 10,
				'max'   => 10,
				'step'  => 0.1,
			),
			array(
				'name'    => 'style',
				'type'    => 'select',
				'label'   => __( 'Font Style', 'hfg-module' ),
				'choices' => array(
					''        => __( 'Default', 'hfg-module' ),
					'normal'  => __( 'Normal', 'hfg-module' ),
					'italic'  => __( 'Italic', 'hfg-module' ),
					'oblique' => __( 'Oblique', 'hfg-module' ),
				),
			),
			array(
				'name'    => 'text_decoration',
				'type'    => 'select',
				'label'   => __( 'Text Decoration', 'hfg-module' ),
				'choices' => array(
					''             => __( 'Default', 'hfg-module' ),
					'underline'    => __( 'Underline', 'hfg-module' ),
					'overline'     => __( 'Overline', 'hfg-module' ),
					'line-through' => __( 'Line through', 'hfg-module' ),
					'none'         => __( 'None', 'hfg-module' ),
				),
			),
			array(
				'name'    => 'text_transform',
				'type'    => 'select',
				'label'   => __( 'Text Transform', 'hfg-module' ),
				'choices' => array(
					''           => __( 'Default', 'hfg-module' ),
					'uppercase'  => __( 'Uppercase', 'hfg-module' ),
					'lowercase'  => __( 'Lowercase', 'hfg-module' ),
					'capitalize' => __( 'Capitalize', 'hfg-module' ),
					'none'       => __( 'None', 'hfg-module' ),
				),
			),
		);
	}
}
