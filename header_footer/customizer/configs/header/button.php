<?php

class Hf_Builder_Item_Button {
	public $id = 'button';

	function __construct() {
		add_filter( 'Hf/icon_used', array( $this, 'used_icon' ) );
	}

	function used_icon( $list = array() ) {
		$list[ $this->id ] = 1;

		return $list;
	}

	function item() {
		return array(
			'name'    => __( 'Button', 'Hf' ),
			'id'      => 'button',
			'col'     => 0,
			'width'   => '4',
			'section' => 'header_button', // Customizer section to focus when click settings.
		);
	}

	function customize() {
		$section  = 'header_button';
		$prefix   = 'header_button';
		$fn       = array( $this, 'render' );
		$selector = 'a.item--' . $this->id;
		$config   = array(
			array(
				'name'  => $section,
				'type'  => 'section',
				'panel' => 'header_settings',
				'title' => __( 'Button', 'Hf' ),
			),

			array(
				'name'            => $prefix . '_text',
				'type'            => 'text',
				'section'         => $section,
				'theme_supports'  => '',
				'selector'        => $selector,
				'render_callback' => $fn,
				'title'           => __( 'Text', 'Hf' ),
				'default'         => __( 'Button', 'Hf' ),
			),

			array(
				'name'            => $prefix . '_icon',
				'type'            => 'icon',
				'section'         => $section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'theme_supports'  => '',
				'title'           => __( 'Icon', 'Hf' ),
			),

			array(
				'name'            => $prefix . '_position',
				'type'            => 'radio_group',
				'section'         => $section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'default'         => 'before',
				'title'           => __( 'Icon Position', 'Hf' ),
				'choices'         => array(
					'before' => __( 'Before', 'Hf' ),
					'after'  => __( 'After', 'Hf' ),
				),
			),

			array(
				'name'            => $prefix . '_link',
				'type'            => 'text',
				'section'         => $section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'title'           => __( 'Link', 'Hf' ),
			),

			array(
				'name'            => $prefix . '_target',
				'type'            => 'checkbox',
				'section'         => $section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'checkbox_label'  => __( 'Open link in a new tab.', 'Hf' ),
			),

			array(
				'name'        => $prefix . '_typography',
				'type'        => 'typography',
				'section'     => $section,
				'title'       => __( 'Typography', 'Hf' ),
				'description' => __( 'Advanced typography for button', 'Hf' ),
				'selector'    => $selector,
				'css_format'  => 'typography',
				'default'     => array(),
			),

			array(
				'name'        => $prefix . '_styling',
				'type'        => 'styling',
				'section'     => $section,
				'title'       => __( 'Styling', 'Hf' ),
				'description' => __( 'Advanced styling for button', 'Hf' ),
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

		// Item Layout.
		return array_merge( $config, Hf_header_layout_settings( $this->id, $section ) );
	}


	function render() {
		$text          = Hf()->get_setting( 'header_button_text' );
		$icon          = Hf()->get_setting( 'header_button_icon' );
		$new_window    = Hf()->get_setting( 'header_button_target' );
		$link          = Hf()->get_setting( 'header_button_link' );
		$icon_position = Hf()->get_setting( 'header_button_position' );
		$classes       = array( 'item--' . $this->id, 'Hf-btn Hf-builder-btn' );

		$icon = wp_parse_args(
			$icon,
			array(
				'type' => '',
				'icon' => '',
			)
		);

		$target = '';
		if ( 1 == $new_window ) {
			$target = ' target="_blank" ';
		}

		$icon_html = '';
		if ( $icon['icon'] ) {
			$icon_html = '<i class="' . esc_attr( $icon['icon'] ) . '"></i> ';
		}
		$classes[] = 'is-icon-' . $icon_position;
		if ( ! $text ) {
			$text = __( 'Button', 'Hf' );
		}

		echo '<a' . $target . ' href="' . esc_url( $link ) . '" class="' . esc_attr( join( ' ', $classes ) ) . '">';
		if ( 'after' != $icon_position ) {
			echo $icon_html . esc_html( $text );
		} else {
			echo esc_html( $text ) . $icon_html;
		}
		echo '</a>';
	}
}

Hf_Customize_Layout_Builder()->register_item( 'header', new Hf_Builder_Item_Button() );


