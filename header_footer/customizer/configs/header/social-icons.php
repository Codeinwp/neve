<?php

class Hf_Builder_Item_Social_Icons {
	public $id = 'social-icons';
	public $section = 'header_social_icons';
	public $class = 'header-social-icons';
	public $selector = '';
	public $panel = 'header_settings';

	function __construct() {
		$this->selector = '.' . $this->class;
		add_filter( 'Hf/icon_used', array( $this, 'used_icon' ) );
	}

	function used_icon( $list = array() ) {
		$list[ $this->id ] = 1;

		return $list;
	}

	function item() {
		return array(
			'name'    => __( 'Social Icons', 'Hf' ),
			'id'      => $this->id,
			'col'     => 0,
			'width'   => '4',
			'section' => $this->section, // Customizer section to focus when click settings.
		);
	}

	function customize() {
		$section  = $this->section;
		$prefix   = $this->section;
		$fn       = array( $this, 'render' );
		$selector = "{$this->selector}.Hf-builder-social-icons";
		$config   = array(
			array(
				'name'           => $section,
				'type'           => 'section',
				'panel'          => $this->panel,
				'theme_supports' => '',
				'title'          => __( 'Social Icons', 'Hf' ),
			),

			array(
				'name'             => $prefix . '_items',
				'type'             => 'repeater',
				'section'          => $section,
				'selector'         => $this->selector,
				'render_callback'  => $fn,
				'title'            => __( 'Social Profiles', 'Hf' ),
				'live_title_field' => 'title',
				'default'          => array(
					array(
						'title' => 'Facebook',
						'url'   => '#',
						'icon'  => array(
							'type' => 'font-awesome',
							'icon' => 'fa fa-facebook',
						),
					),
					array(
						'title' => 'Twitter',
						'url'   => '#',
						'icon'  => array(
							'type' => 'font-awesome',
							'icon' => 'fa fa-twitter',
						),
					),
					array(
						'title' => 'Youtube',
						'url'   => '#',
						'icon'  => array(
							'type' => 'font-awesome',
							'icon' => 'fa fa-youtube-play',
						),
					),
					array(
						'title' => 'Instagram',
						'url'   => '#',
						'icon'  => array(
							'type' => 'font-awesome',
							'icon' => 'fa fa-instagram',
						),
					),
					array(
						'title' => 'Pinterest',
						'url'   => '#',
						'icon'  => array(
							'type' => 'font-awesome',
							'icon' => 'fa fa-pinterest',
						),
					),
				),
				'fields'           => array(
					array(
						'name'  => 'title',
						'type'  => 'text',
						'label' => __( 'Title', 'Hf' ),
					),
					array(
						'name'  => 'icon',
						'type'  => 'icon',
						'label' => __( 'Icon', 'Hf' ),
					),

					array(
						'name'  => 'url',
						'type'  => 'text',
						'label' => __( 'URL', 'Hf' ),
					),

				),
			),

			array(
				'name'            => $prefix . '_target',
				'type'            => 'checkbox',
				'section'         => $section,
				'selector'        => $this->selector,
				'render_callback' => $fn,
				'default'         => 1,
				'checkbox_label'  => __( 'Open link in a new tab.', 'Hf' ),
			),
			array(
				'name'            => $prefix . '_nofollow',
				'type'            => 'checkbox',
				'section'         => $section,
				'render_callback' => $fn,
				'default'         => 1,
				'checkbox_label'  => __( 'Adding rel="nofollow" for social links.', 'Hf' ),
			),

			array(
				'name'            => $prefix . '_size',
				'type'            => 'slider',
				'device_settings' => true,
				'section'         => $section,
				'min'             => 10,
				'step'            => 1,
				'max'             => 100,
				'selector'        => 'format',
				'css_format'      => "$selector li a { font-size: {{value}}; }",
				'label'           => __( 'Size', 'Hf' ),
			),

			array(
				'name'            => $prefix . '_padding',
				'type'            => 'slider',
				'device_settings' => true,
				'section'         => $section,
				'min'             => .1,
				'step'            => .1,
				'max'             => 5,
				'selector'        => "$selector li a",
				'unit'            => 'em',
				'css_format'      => 'padding: {{value_no_unit}}em;',
				'label'           => __( 'Padding', 'Hf' ),
			),

			array(
				'name'            => $prefix . '_spacing',
				'type'            => 'slider',
				'device_settings' => true,
				'section'         => $section,
				'min'             => 0,
				'max'             => 30,
				'selector'        => "$selector li",
				'css_format'      => 'margin-left: {{value}}; margin-right: {{value}};',
				'label'           => __( 'Icon Spacing', 'Hf' ),
			),

			array(
				'name'            => $prefix . '_shape',
				'type'            => 'select',
				'section'         => $section,
				'selector'        => '.header-social-icons',
				'default'         => 'circle',
				'render_callback' => $fn,
				'title'           => __( 'Shape', 'Hf' ),
				'choices'         => array(
					'rounded' => __( 'Rounded', 'Hf' ),
					'square'  => __( 'Square', 'Hf' ),
					'circle'  => __( 'Circle', 'Hf' ),
					'none'    => __( 'None', 'Hf' ),
				),
			),

			array(
				'name'            => $prefix . '_color_type',
				'type'            => 'select',
				'section'         => $section,
				'selector'        => $this->selector,
				'default'         => 'default',
				'render_callback' => $fn,
				'title'           => __( 'Color', 'Hf' ),
				'choices'         => array(
					'default' => __( 'Official Color', 'Hf' ),
					'custom'  => __( 'Custom', 'Hf' ),
				),
			),

			array(
				'name'       => $prefix . '_custom_color',
				'type'       => 'modal',
				'section'    => $section,
				'selector'   => "{$this->selector} li a",
				'required'   => array( $prefix . '_color_type', '==', 'custom' ),
				'css_format' => 'styling',
				'title'      => __( 'Custom Color', 'Hf' ),
				'fields'     => array(
					'tabs'           => array(
						'default' => __( 'Normal', 'Hf' ),
						'hover'   => __( 'Hover', 'Hf' ),
					),
					'default_fields' => array(
						array(
							'name'       => 'primary',
							'type'       => 'color',
							'label'      => __( 'Background Color', 'Hf' ),
							'selector'   => "$selector.color-custom li a",
							'css_format' => 'background-color: {{value}};',
						),
						array(
							'name'       => 'secondary',
							'type'       => 'color',
							'label'      => __( 'Icon Color', 'Hf' ),
							'selector'   => "$selector.color-custom li a",
							'css_format' => 'color: {{value}};',
						),
					),
					'hover_fields'   => array(
						array(
							'name'       => 'primary',
							'type'       => 'color',
							'label'      => __( 'Background Color', 'Hf' ),
							'selector'   => "$selector.color-custom li a:hover",
							'css_format' => 'background-color: {{value}};',
						),
						array(
							'name'       => 'secondary',
							'type'       => 'color',
							'label'      => __( 'Icon Color', 'Hf' ),
							'selector'   => "$selector.color-custom li a:hover",
							'css_format' => 'color: {{value}};',
						),
					),
				),
			),

			array(
				'name'        => $prefix . '_border',
				'type'        => 'modal',
				'section'     => $section,
				'selector'    => "{$this->selector} li a",
				'css_format'  => 'styling',
				'title'       => __( 'Border', 'Hf' ),
				'description' => __( 'Border & border radius', 'Hf' ),
				'fields'      => array(
					'tabs'           => array(
						'default' => '_',
					),
					'default_fields' => array(
						array(
							'name'       => 'border_style',
							'type'       => 'select',
							'class'      => 'clear',
							'label'      => __( 'Border Style', 'Hf' ),
							'default'    => 'none',
							'choices'    => array(
								''       => __( 'Default', 'Hf' ),
								'none'   => __( 'None', 'Hf' ),
								'solid'  => __( 'Solid', 'Hf' ),
								'dotted' => __( 'Dotted', 'Hf' ),
								'dashed' => __( 'Dashed', 'Hf' ),
								'double' => __( 'Double', 'Hf' ),
								'ridge'  => __( 'Ridge', 'Hf' ),
								'inset'  => __( 'Inset', 'Hf' ),
								'outset' => __( 'Outset', 'Hf' ),
							),
							'css_format' => 'border-style: {{value}};',
							'selector'   => "$selector li a",
						),

						array(
							'name'       => 'border_width',
							'type'       => 'css_ruler',
							'label'      => __( 'Border Width', 'Hf' ),
							'required'   => array( 'border_style', '!=', 'none' ),
							'selector'   => "$selector li a",
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
							'label'      => __( 'Border Color', 'Hf' ),
							'required'   => array( 'border_style', '!=', 'none' ),
							'selector'   => "$selector li a",
							'css_format' => 'border-color: {{value}};',
						),

						array(
							'name'       => 'border_radius',
							'type'       => 'slider',
							'label'      => __( 'Border Radius', 'Hf' ),
							'selector'   => "$selector li a",
							'css_format' => 'border-radius: {{value}};',
						),
					),
				),
			),

		);

		// Item Layout.
		return array_merge( $config, Hf_header_layout_settings( $this->id, $section ) );
	}

	function render( $item_config = array() ) {

		$shape        = Hf()->get_setting( $this->section . '_shape', 'all' );
		$color_type   = Hf()->get_setting( $this->section . '_color_type' );
		$items        = Hf()->get_setting( $this->section . '_items' );
		$nofollow     = Hf()->get_setting( $this->section . '_nofollow' );
		$target_blank = Hf()->get_setting( $this->section . '_target' );

		$rel = '';
		if ( 1 == $nofollow ) {
			$rel = 'rel="nofollow" ';
		}

		$target = '_self';
		if ( 1 == $target_blank ) {
			$target = '_blank';
		}

		if ( ! empty( $items ) ) {
			$classes   = array();
			$classes[] = $this->class;
			$classes[] = 'Hf-builder-social-icons';
			if ( $shape ) {
				$shape = ' shape-' . sanitize_text_field( $shape );
			}
			if ( $color_type ) {
				$classes[] = 'color-' . sanitize_text_field( $color_type );
			}

			echo '<ul class="' . esc_attr( join( ' ', $classes ) ) . '">';
			foreach ( (array) $items as $index => $item ) {
				$item = wp_parse_args(
					$item,
					array(
						'title'       => '',
						'icon'        => '',
						'url'         => '',
						'_visibility' => '',
					)
				);

				if ( 'hidden' !== $item['_visibility'] ) {
					echo '<li>';
					if ( ! $item['url'] ) {
						$item['url'] = '#';
					}

					$icon = wp_parse_args(
						$item['icon'],
						array(
							'type' => '',
							'icon' => '',
						)
					);

					if ( $item['url'] && $icon['icon'] ) {
						echo '<a class="social-' . str_replace(
							array( ' ', 'fa-fa' ),
							array(
								'-',
								'icon',
							),
							esc_attr( $icon['icon'] )
						) . $shape . '" ' . $rel . 'target="' . esc_attr( $target ) . '" href="' . esc_url( $item['url'] ) . '">';
					}

					if ( $icon['icon'] ) {
						echo '<i class="icon ' . esc_attr( $icon['icon'] ) . '" title="' . esc_attr( $item['title'] ) . '"></i>';
					}

					if ( $item['url'] ) {
						echo '</a>';
					}
					echo '</li>';
				}
			}

			echo '</ul>';
		}

	}

}

Hf_Customize_Layout_Builder()->register_item( 'header', new Hf_Builder_Item_Social_Icons() );
