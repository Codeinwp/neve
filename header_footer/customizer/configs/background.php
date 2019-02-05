<?php

class Hf_Advanced_Styling_Background {

	function __construct() {
		add_filter( 'Hf/customizer/config', array( $this, 'config' ), 100 );
	}

	function config( $configs = array() ) {

		$config = array(

			array(
				'name'     => 'background',
				'type'     => 'section',
				'priority' => 15,
				'panel'    => 'styling_panel',
				'title'    => __( 'Background', 'Hf' ),
			),

			array(
				'name'       => 'background',
				'type'       => 'styling',
				'section'    => 'background',
				'title'      => __( 'Site Background', 'Hf' ),
				'selector'   => array(
					'normal' => 'body',
				),
				'css_format' => 'styling', // styling.
				'fields'     => array(
					'normal_fields' => array(
						'text_color'     => false,
						'link_color'     => false,
						'padding'        => false,
						'margin'         => false,
						'border_heading' => false,
						'border_width'   => false,
						'border_color'   => false,
						'border_radius'  => false,
						'box_shadow'     => false,
						'border_style'   => false,
					),
					'hover_fields'  => false,
				),
			),

			array(
				'name'     => 'site_content_styling',
				'type'     => 'section',
				'panel'    => 'styling_panel',
				'priority' => 20,
				'title'    => __( 'Site Content', 'Hf' ),
			),

			array(
				'name'       => 'site_content_styling',
				'type'       => 'styling',
				'section'    => 'background',
				'title'      => __( 'Content Area Background', 'Hf' ),
				'selector'   => array(
					'normal' => '.site-content',
				),
				'default'   => array(
					'normal' => array(
						'bg_color' => '#FFFFFF',
					),
				),
				'css_format' => 'styling', // styling.
				'fields'     => array(
					'normal_fields' => array(
						'text_color'     => false,
						'link_color'     => false,
						'padding'        => false,
						'margin'         => false,
						'border_heading' => false,
						'border_width'   => false,
						'border_color'   => false,
						'border_radius'  => false,
						'box_shadow'     => false,
						'border_style'   => false,
					),
					'hover_fields'  => false,
				),
			),

		);

		return array_merge( $configs, $config );

	}

}

new Hf_Advanced_Styling_Background();
