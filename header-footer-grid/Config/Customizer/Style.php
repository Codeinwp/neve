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
			'normal' => __( 'Normal', 'hfg-module' ),  // null or false to disable.
			'hover'  => __( 'Hover', 'hfg-module' ), // null or false to disable.
		);
	}

	private function normal_fields() {
		return array(
			array(
				'name'       => 'text_color',
				'type'       => 'color',
				'label'      => __( 'Color', 'hfg-module' ),
				'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
			),
			array(
				'name'       => 'link_color',
				'type'       => 'color',
				'label'      => __( 'Link Color', 'hfg-module' ),
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
				'label'           => __( 'Margin', 'hfg-module' ),
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
				'label'           => __( 'Padding', 'hfg-module' ),
			),

			array(
				'name'  => 'bg_heading',
				'type'  => 'heading',
				'label' => __( 'Background', 'hfg-module' ),
			),

			array(
				'name'       => 'bg_color',
				'type'       => 'color',
				'label'      => __( 'Background Color', 'hfg-module' ),
				'css_format' => 'background-color: {{value}};',
			),
			array(
				'name'       => 'bg_image',
				'type'       => 'image',
				'label'      => __( 'Background Image', 'hfg-module' ),
				'css_format' => 'background-image: url("{{value}}");',
			),
			array(
				'name'       => 'bg_cover',
				'type'       => 'select',
				'choices'    => array(
					''        => __( 'Default', 'hfg-module' ),
					'auto'    => __( 'Auto', 'hfg-module' ),
					'cover'   => __( 'Cover', 'hfg-module' ),
					'contain' => __( 'Contain', 'hfg-module' ),
				),
				'required'   => array( 'bg_image', 'not_empty', '' ),
				'label'      => __( 'Size', 'hfg-module' ),
				'class'      => 'field-half-left',
				'css_format' => '-webkit-background-size: {{value}}; -moz-background-size: {{value}}; -o-background-size: {{value}}; background-size: {{value}};',
			),
			array(
				'name'       => 'bg_position',
				'type'       => 'select',
				'label'      => __( 'Position', 'hfg-module' ),
				'required'   => array( 'bg_image', 'not_empty', '' ),
				'class'      => 'field-half-right',
				'choices'    => array(
					''              => __( 'Default', 'hfg-module' ),
					'center'        => __( 'Center', 'hfg-module' ),
					'top left'      => __( 'Top Left', 'hfg-module' ),
					'top right'     => __( 'Top Right', 'hfg-module' ),
					'top center'    => __( 'Top Center', 'hfg-module' ),
					'bottom left'   => __( 'Bottom Left', 'hfg-module' ),
					'bottom center' => __( 'Bottom Center', 'hfg-module' ),
					'bottom right'  => __( 'Bottom Right', 'hfg-module' ),
				),
				'css_format' => 'background-position: {{value}};',
			),
			array(
				'name'       => 'bg_repeat',
				'type'       => 'select',
				'label'      => __( 'Repeat', 'hfg-module' ),
				'class'      => 'field-half-left',
				'required'   => array(
					array( 'bg_image', 'not_empty', '' ),
				),
				'choices'    => array(
					'repeat'    => __( 'Default', 'hfg-module' ),
					'no-repeat' => __( 'No repeat', 'hfg-module' ),
					'repeat-x'  => __( 'Repeat horizontal', 'hfg-module' ),
					'repeat-y'  => __( 'Repeat vertical', 'hfg-module' ),
				),
				'css_format' => 'background-repeat: {{value}};',
			),

			array(
				'name'       => 'bg_attachment',
				'type'       => 'select',
				'label'      => __( 'Attachment', 'hfg-module' ),
				'class'      => 'field-half-right',
				'required'   => array(
					array( 'bg_image', 'not_empty', '' ),
				),
				'choices'    => array(
					''       => __( 'Default', 'hfg-module' ),
					'scroll' => __( 'Scroll', 'hfg-module' ),
					'fixed'  => __( 'Fixed', 'hfg-module' ),
				),
				'css_format' => 'background-attachment: {{value}};',
			),

			array(
				'name'  => 'border_heading',
				'type'  => 'heading',
				'label' => __( 'Border', 'hfg-module' ),
			),

			array(
				'name'       => 'border_style',
				'type'       => 'select',
				'class'      => 'clear',
				'label'      => __( 'Border Style', 'hfg-module' ),
				'default'    => '',
				'choices'    => array(
					''       => __( 'Default', 'hfg-module' ),
					'none'   => __( 'None', 'hfg-module' ),
					'solid'  => __( 'Solid', 'hfg-module' ),
					'dotted' => __( 'Dotted', 'hfg-module' ),
					'dashed' => __( 'Dashed', 'hfg-module' ),
					'double' => __( 'Double', 'hfg-module' ),
					'ridge'  => __( 'Ridge', 'hfg-module' ),
					'inset'  => __( 'Inset', 'hfg-module' ),
					'outset' => __( 'Outset', 'hfg-module' ),
				),
				'css_format' => 'border-style: {{value}};',
			),

			array(
				'name'       => 'border_width',
				'type'       => 'css_ruler',
				'label'      => __( 'Border Width', 'hfg-module' ),
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
				'label'      => __( 'Border Color', 'hfg-module' ),
				'required'   => array(
					array( 'border_style', '!=', 'none' ),
					array( 'border_style', '!=', '' ),
				),
				'css_format' => 'border-color: {{value}};',
			),

			array(
				'name'       => 'border_radius',
				'type'       => 'css_ruler',
				'label'      => __( 'Border Radius', 'hfg-module' ),
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
				'label'      => __( 'Box Shadow', 'hfg-module' ),
				'css_format' => 'box-shadow: {{value}};',
			),
		);
	}

	private function hover_fields() {
		return array(
			array(
				'name'       => 'text_color',
				'type'       => 'color',
				'label'      => __( 'Color', 'hfg-module' ),
				'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
			),
			array(
				'name'       => 'link_color',
				'type'       => 'color',
				'label'      => __( 'Link Color', 'hfg-module' ),
				'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
			),
			array(
				'name'  => 'bg_heading',
				'type'  => 'heading',
				'label' => __( 'Background', 'hfg-module' ),
			),
			array(
				'name'       => 'bg_color',
				'type'       => 'color',
				'label'      => __( 'Background Color', 'hfg-module' ),
				'css_format' => 'background-color: {{value}};',
			),
			array(
				'name'  => 'border_heading',
				'type'  => 'heading',
				'label' => __( 'Border', 'hfg-module' ),
			),
			array(
				'name'       => 'border_style',
				'type'       => 'select',
				'label'      => __( 'Border Style', 'hfg-module' ),
				'default'    => '',
				'choices'    => array(
					''       => __( 'Default', 'hfg-module' ),
					'none'   => __( 'None', 'hfg-module' ),
					'solid'  => __( 'Solid', 'hfg-module' ),
					'dotted' => __( 'Dotted', 'hfg-module' ),
					'dashed' => __( 'Dashed', 'hfg-module' ),
					'double' => __( 'Double', 'hfg-module' ),
					'ridge'  => __( 'Ridge', 'hfg-module' ),
					'inset'  => __( 'Inset', 'hfg-module' ),
					'outset' => __( 'Outset', 'hfg-module' ),
				),
				'css_format' => 'border-style: {{value}};',
			),
			array(
				'name'       => 'border_width',
				'type'       => 'css_ruler',
				'label'      => __( 'Border Width', 'hfg-module' ),
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
				'label'      => __( 'Border Color', 'hfg-module' ),
				'required'   => array( 'border_style', '!=', 'none' ),
				'css_format' => 'border-color: {{value}};',
			),
			array(
				'name'       => 'border_radius',
				'type'       => 'css_ruler',
				'label'      => __( 'Border Radius', 'hfg-module' ),
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
				'label'      => __( 'Box Shadow', 'hfg-module' ),
				'css_format' => 'box-shadow: {{value}};',
			),
		);
	}
}
