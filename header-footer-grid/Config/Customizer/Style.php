<?php
namespace HFG\Config\Customizer;

class Style {
	public function __construct() {
		return array(
			'tabs'          => $this->tabs(),
			'normal_fields' => $this->normal_fields(),
			'hover_fields'  => $this->hover_fields(),
		);
	}

	private function tabs() {
		return array(
			'normal' => __( 'Normal', 'hfg' ),  // null or false to disable.
			'hover'  => __( 'Hover', 'hfg' ), // null or false to disable.
		);
	}

	private function normal_fields() {
		return array(
			array(
				'name'       => 'text_color',
				'type'       => 'color',
				'label'      => __( 'Color', 'hfg' ),
				'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
			),
			array(
				'name'       => 'link_color',
				'type'       => 'color',
				'label'      => __( 'Link Color', 'hfg' ),
				'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
			),

			array(
				'name'            => 'margin',
				'type'            => 'css_ruler',
				'device_settings' => true,
				'css_format'      => array(
					'top'    => 'margin-top: {{value}};',
					'right'  => 'margin-right: {{value}};',
					'bottom' => 'margin-bottom: {{value}};',
					'left'   => 'margin-left: {{value}};',
				),
				'label'           => __( 'Margin', 'hfg' ),
			),

			array(
				'name'            => 'padding',
				'type'            => 'css_ruler',
				'device_settings' => true,
				'css_format'      => array(
					'top'    => 'padding-top: {{value}};',
					'right'  => 'padding-right: {{value}};',
					'bottom' => 'padding-bottom: {{value}};',
					'left'   => 'padding-left: {{value}};',
				),
				'label'           => __( 'Padding', 'hfg' ),
			),

			array(
				'name'  => 'bg_heading',
				'type'  => 'heading',
				'label' => __( 'Background', 'hfg' ),
			),

			array(
				'name'       => 'bg_color',
				'type'       => 'color',
				'label'      => __( 'Background Color', 'hfg' ),
				'css_format' => 'background-color: {{value}};',
			),
			array(
				'name'       => 'bg_image',
				'type'       => 'image',
				'label'      => __( 'Background Image', 'hfg' ),
				'css_format' => 'background-image: url("{{value}}");',
			),
			array(
				'name'       => 'bg_cover',
				'type'       => 'select',
				'choices'    => array(
					''        => __( 'Default', 'hfg' ),
					'auto'    => __( 'Auto', 'hfg' ),
					'cover'   => __( 'Cover', 'hfg' ),
					'contain' => __( 'Contain', 'hfg' ),
				),
				'required'   => array( 'bg_image', 'not_empty', '' ),
				'label'      => __( 'Size', 'hfg' ),
				'class'      => 'field-half-left',
				'css_format' => '-webkit-background-size: {{value}}; -moz-background-size: {{value}}; -o-background-size: {{value}}; background-size: {{value}};',
			),
			array(
				'name'       => 'bg_position',
				'type'       => 'select',
				'label'      => __( 'Position', 'hfg' ),
				'required'   => array( 'bg_image', 'not_empty', '' ),
				'class'      => 'field-half-right',
				'choices'    => array(
					''              => __( 'Default', 'hfg' ),
					'center'        => __( 'Center', 'hfg' ),
					'top left'      => __( 'Top Left', 'hfg' ),
					'top right'     => __( 'Top Right', 'hfg' ),
					'top center'    => __( 'Top Center', 'hfg' ),
					'bottom left'   => __( 'Bottom Left', 'hfg' ),
					'bottom center' => __( 'Bottom Center', 'hfg' ),
					'bottom right'  => __( 'Bottom Right', 'hfg' ),
				),
				'css_format' => 'background-position: {{value}};',
			),
			array(
				'name'       => 'bg_repeat',
				'type'       => 'select',
				'label'      => __( 'Repeat', 'hfg' ),
				'class'      => 'field-half-left',
				'required'   => array(
					array( 'bg_image', 'not_empty', '' ),
				),
				'choices'    => array(
					'repeat'    => __( 'Default', 'hfg' ),
					'no-repeat' => __( 'No repeat', 'hfg' ),
					'repeat-x'  => __( 'Repeat horizontal', 'hfg' ),
					'repeat-y'  => __( 'Repeat vertical', 'hfg' ),
				),
				'css_format' => 'background-repeat: {{value}};',
			),

			array(
				'name'       => 'bg_attachment',
				'type'       => 'select',
				'label'      => __( 'Attachment', 'hfg' ),
				'class'      => 'field-half-right',
				'required'   => array(
					array( 'bg_image', 'not_empty', '' ),
				),
				'choices'    => array(
					''       => __( 'Default', 'hfg' ),
					'scroll' => __( 'Scroll', 'hfg' ),
					'fixed'  => __( 'Fixed', 'hfg' ),
				),
				'css_format' => 'background-attachment: {{value}};',
			),

			array(
				'name'  => 'border_heading',
				'type'  => 'heading',
				'label' => __( 'Border', 'hfg' ),
			),

			array(
				'name'       => 'border_style',
				'type'       => 'select',
				'class'      => 'clear',
				'label'      => __( 'Border Style', 'hfg' ),
				'default'    => '',
				'choices'    => array(
					''       => __( 'Default', 'hfg' ),
					'none'   => __( 'None', 'hfg' ),
					'solid'  => __( 'Solid', 'hfg' ),
					'dotted' => __( 'Dotted', 'hfg' ),
					'dashed' => __( 'Dashed', 'hfg' ),
					'double' => __( 'Double', 'hfg' ),
					'ridge'  => __( 'Ridge', 'hfg' ),
					'inset'  => __( 'Inset', 'hfg' ),
					'outset' => __( 'Outset', 'hfg' ),
				),
				'css_format' => 'border-style: {{value}};',
			),

			array(
				'name'       => 'border_width',
				'type'       => 'css_ruler',
				'label'      => __( 'Border Width', 'hfg' ),
				'required'   => array(
					array( 'border_style', '!=', 'none' ),
					array( 'border_style', '!=', '' ),
				),
				'css_format' => array(
					'top'    => 'border-top-width: {{value}};',
					'right'  => 'border-right-width: {{value}};',
					'bottom' => 'border-bottom-width: {{value}};',
					'left'   => 'border-left-width: {{value}};',
				),
			),
			array(
				'name'       => 'border_color',
				'type'       => 'color',
				'label'      => __( 'Border Color', 'hfg' ),
				'required'   => array(
					array( 'border_style', '!=', 'none' ),
					array( 'border_style', '!=', '' ),
				),
				'css_format' => 'border-color: {{value}};',
			),

			array(
				'name'       => 'border_radius',
				'type'       => 'css_ruler',
				'label'      => __( 'Border Radius', 'hfg' ),
				'css_format' => array(
					'top'    => 'border-top-left-radius: {{value}};',
					'right'  => 'border-top-right-radius: {{value}};',
					'bottom' => 'border-bottom-right-radius: {{value}};',
					'left'   => 'border-bottom-left-radius: {{value}};',
				),
			),

			array(
				'name'       => 'box_shadow',
				'type'       => 'shadow',
				'label'      => __( 'Box Shadow', 'hfg' ),
				'css_format' => 'box-shadow: {{value}};',
			),
		);
	}

	private function hover_fields() {
		return array(
			array(
				'name'       => 'text_color',
				'type'       => 'color',
				'label'      => __( 'Color', 'hfg' ),
				'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
			),
			array(
				'name'       => 'link_color',
				'type'       => 'color',
				'label'      => __( 'Link Color', 'hfg' ),
				'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
			),
			array(
				'name'  => 'bg_heading',
				'type'  => 'heading',
				'label' => __( 'Background', 'hfg' ),
			),
			array(
				'name'       => 'bg_color',
				'type'       => 'color',
				'label'      => __( 'Background Color', 'hfg' ),
				'css_format' => 'background-color: {{value}};',
			),
			array(
				'name'  => 'border_heading',
				'type'  => 'heading',
				'label' => __( 'Border', 'hfg' ),
			),
			array(
				'name'       => 'border_style',
				'type'       => 'select',
				'label'      => __( 'Border Style', 'hfg' ),
				'default'    => '',
				'choices'    => array(
					''       => __( 'Default', 'hfg' ),
					'none'   => __( 'None', 'hfg' ),
					'solid'  => __( 'Solid', 'hfg' ),
					'dotted' => __( 'Dotted', 'hfg' ),
					'dashed' => __( 'Dashed', 'hfg' ),
					'double' => __( 'Double', 'hfg' ),
					'ridge'  => __( 'Ridge', 'hfg' ),
					'inset'  => __( 'Inset', 'hfg' ),
					'outset' => __( 'Outset', 'hfg' ),
				),
				'css_format' => 'border-style: {{value}};',
			),
			array(
				'name'       => 'border_width',
				'type'       => 'css_ruler',
				'label'      => __( 'Border Width', 'hfg' ),
				'required'   => array( 'border_style', '!=', 'none' ),
				'css_format' => array(
					'top'    => 'border-top-width: {{value}};',
					'right'  => 'border-right-width: {{value}};',
					'bottom' => 'border-bottom-width: {{value}};',
					'left'   => 'border-left-width: {{value}};',
				),
			),
			array(
				'name'       => 'border_color',
				'type'       => 'color',
				'label'      => __( 'Border Color', 'hfg' ),
				'required'   => array( 'border_style', '!=', 'none' ),
				'css_format' => 'border-color: {{value}};',
			),
			array(
				'name'       => 'border_radius',
				'type'       => 'css_ruler',
				'label'      => __( 'Border Radius', 'hfg' ),
				'css_format' => array(
					'top'    => 'border-top-left-radius: {{value}};',
					'right'  => 'border-top-right-radius: {{value}};',
					'bottom' => 'border-bottom-right-radius: {{value}};',
					'left'   => 'border-bottom-left-radius: {{value}};',
				),
			),
			array(
				'name'       => 'box_shadow',
				'type'       => 'shadow',
				'label'      => __( 'Box Shadow', 'hfg' ),
				'css_format' => 'box-shadow: {{value}};',
			),
		);
	}
}