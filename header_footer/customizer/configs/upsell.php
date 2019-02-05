<?php
if ( is_admin() || is_customize_preview() ) {

	add_filter( 'Hf/customizer/config', 'Hf_pro_upsell', 9999 );

	function Hf_pro_upsell( $configs ) {

		if ( class_exists( 'Hf_Pro' ) ) {
			return $configs;
		}

		$configs[] = array(
			'name'          => 'Hf-pro',
			'type'          => 'section',
			'section_class' => 'Hf_WP_Customize_Section_Pro',
			'priority'      => 0,
			'pro_text'      => __( 'Hf Pro modules available', 'Hf' ),
			'pro_url'       => 'https://wpHf.com/pricing/?utm_source=theme_dashboard&utm_medium=links&utm_campaign=customizer_top',
		);

		$configs[] = array(
			'name'          => 'header_settings_pro',
			'panel'         => 'header_settings',
			'type'          => 'section',
			'section_class' => 'Hf_WP_Customize_Section_Pro',
			'priority'      => 99999,
			'title'         => __( 'Header options in Hf Pro', 'Hf' ),
			'teaser'        => true,
			'pro_url'       => 'https://wpHf.com/pricing/?utm_source=theme_dashboard&utm_medium=links&utm_campaign=customizer_header_side',
			'features'      => array(
				__( 'Header Sticky', 'Hf' ),
				__( 'Header Transparent', 'Hf' ),
				__( 'More HTML Items', 'Hf' ),
				__( 'Secondary Menu', 'Hf' ),
				__( 'Icon Box', 'Hf' ),
				__( 'Contact Info', 'Hf' ),
				__( 'And more header settings', 'Hf' ),
			),
		);

		$configs[] = array(
			'name'          => 'footer_settings_pro',
			'panel'         => 'footer_settings',
			'type'          => 'section',
			'priority'      => 99999,
			'section_class' => 'Hf_WP_Customize_Section_Pro',
			'title'         => __( 'More Footer options in Hf Pro', 'Hf' ),
			'pro_url'       => 'https://wpHf.com/pricing/?utm_source=theme_dashboard&utm_medium=links&utm_campaign=customizer_footer_side',
			'teaser'        => true,
			'features'      => array(
				__( 'Footer Top Row', 'Hf' ),
				__( 'Horizontal Menu Item', 'Hf' ),
				__( 'More HTML Items', 'Hf' ),
				__( 'Icon Box Item', 'Hf' ),
				__( 'Contact Info Item', 'Hf' ),
				__( 'Payment Methods Item', 'Hf' ),
			),
		);

		return $configs;
	}
}
