<?php
class HeaderFooterCustomizer {

	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 */
	function preview_js() {
		if ( is_customize_preview() ) {
			//$suffix = Customify()->get_asset_suffix();
			$suffix = '';

			wp_enqueue_script( 'hf-customizer-auto-css', esc_url( get_template_directory_uri() ) . '/header_footer/assets/js/customizer/auto-css' . $suffix . '.js', array( 'customize-preview' ), '20151215', true );
			wp_enqueue_script(
				'hf-customizer',
				esc_url( get_template_directory_uri() ) . '/header_footer/assets/js/customizer/customizer' . $suffix . '.js',
				array(
					'customize-preview',
					'customize-selective-refresh',
				),
				'20151215',
				true
			);
			wp_localize_script(
				'hf-customizer-auto-css',
				'HFPreviewConfig',
				array(
					'fields'         => [],//$this->get_config(),
					'devices'        => array( 'desktop', 'tablet', 'mobile' ),//$this->devices,
					'typo_fields'    => $this->get_typo_fields(),
					'styling_config' => $this->get_styling_config(),
				)
			);
		}
	}

	public function get_typo_fields() {
		$typo_fields = array(
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

		return $typo_fields;
	}

	public function get_styling_config() {
		$fields = array(
			'tabs'          => array(
				'normal' => __( 'Normal', 'customify' ),  // null or false to disable.
				'hover'  => __( 'Hover', 'customify' ), // null or false to disable.
			),
			'normal_fields' => array(
				array(
					'name'       => 'text_color',
					'type'       => 'color',
					'label'      => __( 'Color', 'customify' ),
					'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
				),
				array(
					'name'       => 'link_color',
					'type'       => 'color',
					'label'      => __( 'Link Color', 'customify' ),
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
					'label'           => __( 'Margin', 'customify' ),
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
					'label'           => __( 'Padding', 'customify' ),
				),

				array(
					'name'  => 'bg_heading',
					'type'  => 'heading',
					'label' => __( 'Background', 'customify' ),
				),

				array(
					'name'       => 'bg_color',
					'type'       => 'color',
					'label'      => __( 'Background Color', 'customify' ),
					'css_format' => 'background-color: {{value}};',
				),
				array(
					'name'       => 'bg_image',
					'type'       => 'image',
					'label'      => __( 'Background Image', 'customify' ),
					'css_format' => 'background-image: url("{{value}}");',
				),
				array(
					'name'       => 'bg_cover',
					'type'       => 'select',
					'choices'    => array(
						''        => __( 'Default', 'customify' ),
						'auto'    => __( 'Auto', 'customify' ),
						'cover'   => __( 'Cover', 'customify' ),
						'contain' => __( 'Contain', 'customify' ),
					),
					'required'   => array( 'bg_image', 'not_empty', '' ),
					'label'      => __( 'Size', 'customify' ),
					'class'      => 'field-half-left',
					'css_format' => '-webkit-background-size: {{value}}; -moz-background-size: {{value}}; -o-background-size: {{value}}; background-size: {{value}};',
				),
				array(
					'name'       => 'bg_position',
					'type'       => 'select',
					'label'      => __( 'Position', 'customify' ),
					'required'   => array( 'bg_image', 'not_empty', '' ),
					'class'      => 'field-half-right',
					'choices'    => array(
						''              => __( 'Default', 'customify' ),
						'center'        => __( 'Center', 'customify' ),
						'top left'      => __( 'Top Left', 'customify' ),
						'top right'     => __( 'Top Right', 'customify' ),
						'top center'    => __( 'Top Center', 'customify' ),
						'bottom left'   => __( 'Bottom Left', 'customify' ),
						'bottom center' => __( 'Bottom Center', 'customify' ),
						'bottom right'  => __( 'Bottom Right', 'customify' ),
					),
					'css_format' => 'background-position: {{value}};',
				),
				array(
					'name'       => 'bg_repeat',
					'type'       => 'select',
					'label'      => __( 'Repeat', 'customify' ),
					'class'      => 'field-half-left',
					'required'   => array(
						array( 'bg_image', 'not_empty', '' ),
					),
					'choices'    => array(
						'repeat'    => __( 'Default', 'customify' ),
						'no-repeat' => __( 'No repeat', 'customify' ),
						'repeat-x'  => __( 'Repeat horizontal', 'customify' ),
						'repeat-y'  => __( 'Repeat vertical', 'customify' ),
					),
					'css_format' => 'background-repeat: {{value}};',
				),

				array(
					'name'       => 'bg_attachment',
					'type'       => 'select',
					'label'      => __( 'Attachment', 'customify' ),
					'class'      => 'field-half-right',
					'required'   => array(
						array( 'bg_image', 'not_empty', '' ),
					),
					'choices'    => array(
						''       => __( 'Default', 'customify' ),
						'scroll' => __( 'Scroll', 'customify' ),
						'fixed'  => __( 'Fixed', 'customify' ),
					),
					'css_format' => 'background-attachment: {{value}};',
				),

				array(
					'name'  => 'border_heading',
					'type'  => 'heading',
					'label' => __( 'Border', 'customify' ),
				),

				array(
					'name'       => 'border_style',
					'type'       => 'select',
					'class'      => 'clear',
					'label'      => __( 'Border Style', 'customify' ),
					'default'    => '',
					'choices'    => array(
						''       => __( 'Default', 'customify' ),
						'none'   => __( 'None', 'customify' ),
						'solid'  => __( 'Solid', 'customify' ),
						'dotted' => __( 'Dotted', 'customify' ),
						'dashed' => __( 'Dashed', 'customify' ),
						'double' => __( 'Double', 'customify' ),
						'ridge'  => __( 'Ridge', 'customify' ),
						'inset'  => __( 'Inset', 'customify' ),
						'outset' => __( 'Outset', 'customify' ),
					),
					'css_format' => 'border-style: {{value}};',
				),

				array(
					'name'       => 'border_width',
					'type'       => 'css_ruler',
					'label'      => __( 'Border Width', 'customify' ),
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
					'label'      => __( 'Border Color', 'customify' ),
					'required'   => array(
						array( 'border_style', '!=', 'none' ),
						array( 'border_style', '!=', '' ),
					),
					'css_format' => 'border-color: {{value}};',
				),

				array(
					'name'       => 'border_radius',
					'type'       => 'css_ruler',
					'label'      => __( 'Border Radius', 'customify' ),
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
					'label'      => __( 'Box Shadow', 'customify' ),
					'css_format' => 'box-shadow: {{value}};',
				),

			),

			'hover_fields' => array(
				array(
					'name'       => 'text_color',
					'type'       => 'color',
					'label'      => __( 'Color', 'customify' ),
					'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
				),
				array(
					'name'       => 'link_color',
					'type'       => 'color',
					'label'      => __( 'Link Color', 'customify' ),
					'css_format' => 'color: {{value}}; text-decoration-color: {{value}};',
				),
				array(
					'name'  => 'bg_heading',
					'type'  => 'heading',
					'label' => __( 'Background', 'customify' ),
				),
				array(
					'name'       => 'bg_color',
					'type'       => 'color',
					'label'      => __( 'Background Color', 'customify' ),
					'css_format' => 'background-color: {{value}};',
				),
				array(
					'name'  => 'border_heading',
					'type'  => 'heading',
					'label' => __( 'Border', 'customify' ),
				),
				array(
					'name'       => 'border_style',
					'type'       => 'select',
					'label'      => __( 'Border Style', 'customify' ),
					'default'    => '',
					'choices'    => array(
						''       => __( 'Default', 'customify' ),
						'none'   => __( 'None', 'customify' ),
						'solid'  => __( 'Solid', 'customify' ),
						'dotted' => __( 'Dotted', 'customify' ),
						'dashed' => __( 'Dashed', 'customify' ),
						'double' => __( 'Double', 'customify' ),
						'ridge'  => __( 'Ridge', 'customify' ),
						'inset'  => __( 'Inset', 'customify' ),
						'outset' => __( 'Outset', 'customify' ),
					),
					'css_format' => 'border-style: {{value}};',
				),
				array(
					'name'       => 'border_width',
					'type'       => 'css_ruler',
					'label'      => __( 'Border Width', 'customify' ),
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
					'label'      => __( 'Border Color', 'customify' ),
					'required'   => array( 'border_style', '!=', 'none' ),
					'css_format' => 'border-color: {{value}};',
				),
				array(
					'name'       => 'border_radius',
					'type'       => 'css_ruler',
					'label'      => __( 'Border Radius', 'customify' ),
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
					'label'      => __( 'Box Shadow', 'customify' ),
					'css_format' => 'box-shadow: {{value}};',
				),

			),

		);

		return apply_filters( 'customify/get_styling_config', $fields );
	}
}