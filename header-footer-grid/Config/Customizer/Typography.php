<?php
namespace HFG\Config\Customizer;

class Typography {
	public function __construct() {
		return array(
			array(
				'name'    => 'font',
				'type'    => 'select',
				'label'   => __( 'Font Family', 'customify' ),
				'choices' => array(),
			),
			array(
				'name'    => 'font_weight',
				'type'    => 'select',
				'label'   => __( 'Font Weight', 'customify' ),
				'choices' => array(),
			),
			array(
				'name'  => 'languages',
				'type'  => 'checkboxes',
				'label' => __( 'Font Languages', 'customify' ),
			),
			array(
				'name'            => 'font_size',
				'type'            => 'slider',
				'label'           => __( 'Font Size', 'customify' ),
				'device_settings' => true,
				'min'             => 9,
				'max'             => 80,
				'step'            => 1,
			),
			array(
				'name'            => 'line_height',
				'type'            => 'slider',
				'label'           => __( 'Line Height', 'customify' ),
				'device_settings' => true,
				'min'             => 9,
				'max'             => 80,
				'step'            => 1,
			),
			array(
				'name'  => 'letter_spacing',
				'type'  => 'slider',
				'label' => __( 'Letter Spacing', 'customify' ),
				'min'   => - 10,
				'max'   => 10,
				'step'  => 0.1,
			),
			array(
				'name'    => 'style',
				'type'    => 'select',
				'label'   => __( 'Font Style', 'customify' ),
				'choices' => array(
					''        => __( 'Default', 'customify' ),
					'normal'  => __( 'Normal', 'customify' ),
					'italic'  => __( 'Italic', 'customify' ),
					'oblique' => __( 'Oblique', 'customify' ),
				),
			),
			array(
				'name'    => 'text_decoration',
				'type'    => 'select',
				'label'   => __( 'Text Decoration', 'customify' ),
				'choices' => array(
					''             => __( 'Default', 'customify' ),
					'underline'    => __( 'Underline', 'customify' ),
					'overline'     => __( 'Overline', 'customify' ),
					'line-through' => __( 'Line through', 'customify' ),
					'none'         => __( 'None', 'customify' ),
				),
			),
			array(
				'name'    => 'text_transform',
				'type'    => 'select',
				'label'   => __( 'Text Transform', 'customify' ),
				'choices' => array(
					''           => __( 'Default', 'customify' ),
					'uppercase'  => __( 'Uppercase', 'customify' ),
					'lowercase'  => __( 'Lowercase', 'customify' ),
					'capitalize' => __( 'Capitalize', 'customify' ),
					'none'       => __( 'None', 'customify' ),
				),
			),
		);
	}
}