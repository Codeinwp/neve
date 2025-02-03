<?php
/**
 * Starter content theme mods definition.
 *
 * @package Neve\Compatibility\Starter_Content
 */
return array(
	'logo_show_tagline'                            => 0,
	'nav-icon_button_appearance'                   =>
	array(
		'borderRadius'          =>
		array(
			'top'    => '3',
			'left'   => '3',
			'bottom' => '3',
			'right'  => '3',
		),
		'borderWidth'           =>
		array(
			'top'    => 1,
			'right'  => 1,
			'bottom' => 1,
			'left'   => 1,
		),
		'useShadow'             => false,
		'shadowColor'           => 'rgba(0,0,0,0.5)',
		'shadowProperties'      =>
		array(
			'blur'   => 5,
			'width'  => 0,
			'height' => 0,
		),
		'useShadowHover'        => false,
		'shadowColorHover'      => 'rgba(0,0,0,0.5)',
		'shadowPropertiesHover' =>
		array(
			'blur'   => 5,
			'width'  => 0,
			'height' => 0,
		),
		'type'                  => 'outline',
		'background'            => '',
		'backgroundHover'       => '',
		'text'                  => '',
		'textHover'             => '',
	),
	'hfg_header_layout_top_background'             =>
	array(
		'type'              => 'color',
		'colorValue'        => '#f0f0f0',
		'imageUrl'          => '',
		'focusPoint'        =>
		array(
			'x' => 0.5,
			'y' => 0.5,
		),
		'overlayColorValue' => '',
		'overlayOpacity'    => 50,
		'fixed'             => false,
		'useFeatured'       => false,
	),
	'hfg_header_layout_main_background'            =>
	array(
		'type'              => 'color',
		'imageUrl'          => '',
		'focusPoint'        =>
		array(
			'x' => 0.5,
			'y' => 0.5,
		),
		'colorValue'        => 'var(--nv-site-bg)',
		'overlayColorValue' => '',
		'overlayOpacity'    => 50,
		'fixed'             => false,
		'useFeatured'       => false,
	),
	'hfg_header_layout_bottom_background'          =>
	array(
		'type'              => 'color',
		'colorValue'        => '#ffffff',
		'imageUrl'          => '',
		'focusPoint'        =>
		array(
			'x' => 0.5,
			'y' => 0.5,
		),
		'overlayColorValue' => '',
		'overlayOpacity'    => 50,
		'fixed'             => false,
		'useFeatured'       => false,
	),
	'hfg_header_layout_sidebar_background'         =>
	array(
		'type'              => 'color',
		'imageUrl'          => '',
		'focusPoint'        =>
		array(
			'x' => 0.5,
			'y' => 0.5,
		),
		'colorValue'        => 'var(--nv-site-bg)',
		'overlayColorValue' => '',
		'overlayOpacity'    => 50,
		'fixed'             => false,
		'useFeatured'       => false,
	),
	'hfg_footer_layout_top_background'             =>
	array(
		'type'              => 'color',
		'colorValue'        => '#ffffff',
		'imageUrl'          => '',
		'focusPoint'        =>
		array(
			'x' => 0.5,
			'y' => 0.5,
		),
		'overlayColorValue' => '',
		'overlayOpacity'    => 50,
		'fixed'             => false,
		'useFeatured'       => false,
	),
	'hfg_footer_layout_bottom_background'          =>
	array(
		'type'              => 'color',
		'imageUrl'          => '',
		'focusPoint'        =>
		array(
			'x' => 0.5,
			'y' => 0.5,
		),
		'colorValue'        => 'var(--nv-dark-bg)',
		'overlayColorValue' => '',
		'overlayOpacity'    => 50,
		'fixed'             => false,
		'useFeatured'       => false,
	),
	'neve_blog_archive_layout'                     => 'grid',
	'neve_post_meta_ordering'                      => '["author","comments"]',
	'neve_advanced_layout_options'                 => true,
	'neve_blog_archive_sidebar_layout'             => 'full-width',
	'neve_blog_archive_content_width'              => 100,
	'neve_body_font_family'                        => '',
	'neve_headings_font_family'                    => '',
	'neve_button_appearance'                       =>
	array(
		'borderRadius'          =>
		array(
			'top'    => '4',
			'right'  => '4',
			'bottom' => '4',
			'left'   => '4',
		),
		'borderWidth'           =>
		array(
			'top'    => 1,
			'right'  => 1,
			'bottom' => 1,
			'left'   => 1,
		),
		'useShadow'             => false,
		'shadowColor'           => 'rgba(0,0,0,0.5)',
		'shadowProperties'      =>
		array(
			'blur'   => 5,
			'width'  => 0,
			'height' => 0,
		),
		'useShadowHover'        => false,
		'shadowColorHover'      => 'rgba(0,0,0,0.5)',
		'shadowPropertiesHover' =>
		array(
			'blur'   => 5,
			'width'  => 0,
			'height' => 0,
		),
		'type'                  => 'fill',
		'background'            => 'var(--nv-primary-accent)',
		'backgroundHover'       => 'var(--nv-secondary-accent)',
		'text'                  => '#fefefe',
		'textHover'             => '#ffffff',
	),
	'neve_h1_typeface_general'                     =>
	array(
		'fontWeight'    => '600',
		'textTransform' => 'none',
		'letterSpacing' =>
		array(
			'mobile'  => 0,
			'tablet'  => 0,
			'desktop' => 0,
		),
		'lineHeight'    =>
		array(
			'mobile'  => '1.2',
			'tablet'  => '1.3',
			'desktop' => '1.3',
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'fontSize'      =>
		array(
			'mobile'  => '39',
			'tablet'  => '55',
			'desktop' => 70,
			'suffix'  =>
			array(
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			),
		),
		'flag'          => true,
	),
	'neve_container_width'                         => '{"mobile":748,"tablet":992,"desktop":1170}',
	'neve_default_container_style'                 => 'contained',
	'neve_text_color'                              => '#2b2b2b',
	'neve_h3_typeface_general'                     =>
	array(
		'fontWeight'    => '600',
		'textTransform' => 'none',
		'letterSpacing' =>
		array(
			'mobile'  => 0,
			'tablet'  => 0,
			'desktop' => 0,
		),
		'lineHeight'    =>
		array(
			'mobile'  => '1.3',
			'tablet'  => '1.3',
			'desktop' => '1.3',
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'fontSize'      =>
		array(
			'mobile'  => '20',
			'tablet'  => '20',
			'desktop' => '24',
			'suffix'  =>
			array(
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			),
		),
		'flag'          => false,
	),
	'neve_other_pages_sidebar_layout'              => 'full-width',
	'neve_single_post_content_width'               => 70,
	'neve_other_pages_content_width'               => 100,
	'primary-menu_color'                           => 'var(--nv-text-color)',
	'primary-menu_active_color'                    => 'var(--nv-text-color)',
	'primary-menu_hover_color'                     => 'var(--nv-secondary-accent)',
	'primary-menu_component_typeface'              =>
	array(
		'fontSize'      =>
		array(
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
			'mobile'  => 1,
			'tablet'  => 1,
			'desktop' => 0.8,
		),
		'lineHeight'    =>
		array(
			'mobile'  => 1.6,
			'tablet'  => 1.6,
			'desktop' => 1.6,
		),
		'letterSpacing' =>
		array(
			'mobile'  => 0,
			'tablet'  => 0,
			'desktop' => 0,
		),
		'fontWeight'    => '600',
		'textTransform' => 'uppercase',
	),
	'neve_link_color'                              => '#2b2b2b',
	'neve_link_hover_color'                        => '#727272',
	'neve_secondary_button_appearance'             =>
	array(
		'borderRadius'          =>
		array(
			'top'    => '4',
			'right'  => '4',
			'bottom' => '4',
			'left'   => '4',
		),
		'borderWidth'           =>
		array(
			'top'    => '2',
			'right'  => '2',
			'bottom' => '2',
			'left'   => '2',
		),
		'useShadow'             => false,
		'shadowColor'           => 'rgba(0,0,0,0.5)',
		'shadowProperties'      =>
		array(
			'blur'   => 5,
			'width'  => 0,
			'height' => 0,
		),
		'useShadowHover'        => false,
		'shadowColorHover'      => 'rgba(0,0,0,0.5)',
		'shadowPropertiesHover' =>
		array(
			'blur'   => 5,
			'width'  => 0,
			'height' => 0,
		),
		'type'                  => 'outline',
		'background'            => 'rgba(0, 0, 0, 0)',
		'backgroundHover'       => 'var(--nv-secondary-accent)',
		'text'                  => 'var(--nv-primary-accent)',
		'textHover'             => 'var(--nv-text-dark-bg)',
	),
	'logo_max_width'                               => '{"mobile":32,"tablet":32,"desktop":32}',
	'neve_button_padding'                          =>
	array(
		'mobile'       =>
		array(
			'top'    => '12',
			'right'  => '24',
			'bottom' => '12',
			'left'   => '24',
		),
		'tablet'       =>
		array(
			'top'    => '12',
			'right'  => '24',
			'bottom' => '12',
			'left'   => '24',
		),
		'desktop'      =>
		array(
			'top'    => '12',
			'right'  => '24',
			'bottom' => '12',
			'left'   => '24',
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	),
	'neve_secondary_button_padding'                =>
	array(
		'mobile'       =>
		array(
			'top'    => '12',
			'right'  => '24',
			'bottom' => '12',
			'left'   => '24',
		),
		'tablet'       =>
		array(
			'top'    => '12',
			'right'  => '24',
			'bottom' => '12',
			'left'   => '24',
		),
		'desktop'      =>
		array(
			'top'    => '12',
			'right'  => '24',
			'bottom' => '12',
			'left'   => '24',
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	),
	'neve_blog_list_alternative_layout'            => true,
	'neve_h4_typeface_general'                     =>
	array(
		'fontWeight'    => '600',
		'textTransform' => 'none',
		'letterSpacing' =>
		array(
			'mobile'  => 0,
			'tablet'  => 0,
			'desktop' => 0,
		),
		'lineHeight'    =>
		array(
			'mobile'  => '1.3',
			'tablet'  => '1.3',
			'desktop' => '1.3',
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'fontSize'      =>
		array(
			'mobile'  => '16',
			'tablet'  => '16',
			'desktop' => '20',
			'suffix'  =>
			array(
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			),
		),
		'flag'          => false,
	),
	'neve_h5_typeface_general'                     =>
	array(
		'fontWeight'    => '600',
		'textTransform' => 'none',
		'letterSpacing' =>
		array(
			'mobile'  => 0,
			'tablet'  => 0,
			'desktop' => 0,
		),
		'lineHeight'    =>
		array(
			'mobile'  => '1.3',
			'tablet'  => '1.3',
			'desktop' => '1.3',
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'fontSize'      =>
		array(
			'mobile'  => '14',
			'tablet'  => '14',
			'desktop' => '16',
			'suffix'  =>
			array(
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			),
		),
		'flag'          => false,
	),
	'neve_h6_typeface_general'                     =>
	array(
		'fontWeight'    => '600',
		'textTransform' => 'none',
		'letterSpacing' =>
		array(
			'mobile'  => 0,
			'tablet'  => 0,
			'desktop' => 0,
		),
		'lineHeight'    =>
		array(
			'mobile'  => '1.3',
			'tablet'  => '1.3',
			'desktop' => '1.3',
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'fontSize'      =>
		array(
			'mobile'  => '14',
			'tablet'  => '14',
			'desktop' => '16',
			'suffix'  =>
			array(
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			),
		),
		'flag'          => false,
	),
	'neve_global_colors'                           =>
	array(
		'activePalette' => 'base',
		'palettes'      =>
		array(
			'base'     =>
			array(
				// translators: name of the color pallet.
				'name'          => __( 'Base', 'neve' ),
				'allowDeletion' => false,
				'colors'        =>
				array(
					'nv-primary-accent'   => '#0065cb',
					'nv-secondary-accent' => '#0057ad',
					'nv-site-bg'          => '#ffffff',
					'nv-light-bg'         => '#f8f8f8',
					'nv-dark-bg'          => '#0d1821',
					'nv-text-color'       => '#2c2c2c',
					'nv-text-dark-bg'     => '#ffffff',
					'nv-c-1'              => '#77b978',
					'nv-c-2'              => '#f37262',
				),
			),
			'darkMode' =>
			array(
				'name'          => __( 'Dark Mode', 'neve' ),
				'allowDeletion' => false,
				'colors'        =>
				array(
					'nv-primary-accent'   => '#0065cb',
					'nv-secondary-accent' => '#0057ad',
					'nv-site-bg'          => '#0d1821',
					'nv-light-bg'         => '#14232f',
					'nv-dark-bg'          => '#070e13',
					'nv-text-color'       => '#ffffff',
					'nv-text-dark-bg'     => '#ffffff',
					'nv-c-1'              => '#77b978',
					'nv-c-2'              => '#f37262',
				),
			),
			'eastBay'  =>
			array(
				// translators: name of the color pallet.
				'name'          => __( 'East Bay', 'neve' ),
				'allowDeletion' => true,
				'colors'        =>
				array(
					'nv-primary-accent'   => '#4b547d',
					'nv-secondary-accent' => '#3f4669',
					'nv-site-bg'          => '#ffffff',
					'nv-light-bg'         => '#c6caed',
					'nv-dark-bg'          => '#000500',
					'nv-text-color'       => '#121212',
					'nv-text-dark-bg'     => '#ffffff',
					'nv-c-1'              => '#77b978',
					'nv-c-2'              => '#f37262',
				),
			),
			'green'    =>
			array(
				'name'          => __( 'Green', 'neve' ),
				'allowDeletion' => true,
				'colors'        =>
				array(
					'nv-primary-accent'   => '#04724d',
					'nv-secondary-accent' => '#04583c',
					'nv-site-bg'          => '#ffffff',
					'nv-light-bg'         => '#f1f0ea',
					'nv-dark-bg'          => '#0d1821',
					'nv-text-color'       => '#2c2c2c',
					'nv-text-dark-bg'     => '#ffffff',
					'nv-c-1'              => '#77b978',
					'nv-c-2'              => '#f37262',
				),
			),
		),
	),
	'hfg_footer_layout_bottom_new_text_color'      => 'var(--nv-text-dark-bg)',
	'logo_display'                                 => 'logoTitle',
	'neve_button_typeface'                         =>
	array(
		'fontSize'      =>
		array(
			'suffix'  =>
			array(
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			),
			'mobile'  => '14',
			'tablet'  => '14',
			'desktop' => '18',
		),
		'flag'          => false,
		'lineHeight'    =>
		array(
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
			'mobile'  => 1.6,
			'tablet'  => 1.6,
			'desktop' => 1.6,
		),
		'textTransform' => 'capitalize',
	),
	'neve_secondary_button_typeface'               =>
	array(
		'fontSize' =>
		array(
			'suffix'  =>
			array(
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			),
			'mobile'  => '14',
			'tablet'  => '14',
			'desktop' => '16',
		),
		'flag'     => false,
	),
	'neve_fallback_font_family'                    => 'Arial, Helvetica, sans-serif',
	'neve_form_fields_padding'                     =>
	array(
		'top'    => '10',
		'bottom' => 10,
		'left'   => 12,
		'right'  => 12,
		'unit'   => 'px',
	),
	'neve_form_button_type'                        => 'primary',
	'neve_form_fields_border_radius'               =>
	array(
		'top'    => '0',
		'right'  => '0',
		'left'   => '0',
		'bottom' => '0',
		'unit'   => 'px',
	),
	'neve_single_post_typography_post_title'       =>
	array(
		'fontSize'   =>
		array(
			'suffix'  =>
			array(
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			),
			'mobile'  => '28',
			'tablet'  => '40',
			'desktop' => '65',
		),
		'flag'       => true,
		'lineHeight' =>
		array(
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
			'mobile'  => '',
			'tablet'  => '',
			'desktop' => '',
		),
	),
	'neve_had_old_skin'                            => false,
	'footer_copyright_color'                       => 'var(--nv-text-dark-bg)',
	'footer_copyright_component_align'             =>
	array(
		'desktop' => 'center',
		'tablet'  => 'center',
		'mobile'  => 'center',
	),
	'hfg_footer_layout_v2'                         => '{"desktop":{"top":{"left":[],"c-left":[],"center":[],"c-right":[],"right":[]},"main":{"left":[],"c-left":[],"center":[],"c-right":[],"right":[]},"bottom":{"left":[],"c-left":[{"id":"footer_copyright"},{"id":"footer-menu"}],"center":[],"c-right":[],"right":[]}}}',
	'neve_form_fields_spacing'                     => 4,
	'neve_form_fields_background_color'            => 'var(--nv-site-bg)',
	'footer_copyright_component_typeface'          =>
	array(
		'fontSize'      =>
		array(
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
			'mobile'  => 1,
			'tablet'  => 1,
			'desktop' => 1,
		),
		'lineHeight'    =>
		array(
			'mobile'  => 1.6,
			'tablet'  => 1.6,
			'desktop' => 1.6,
			'suffix'  =>
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'letterSpacing' =>
		array(
			'mobile'  => 0,
			'tablet'  => 0,
			'desktop' => 0,
		),
		'fontWeight'    => '500',
		'textTransform' => 'none',
	),
	'neve_post_cover_height'                       => '{"mobile":250,"tablet":30,"desktop":50,"suffix":{"tablet":"vh","desktop":"vh","mobile":"px"}}',
	'neve_post_title_alignment'                    =>
	array(
		'mobile'  => 'left',
		'tablet'  => 'left',
		'desktop' => 'left',
	),
	'neve_post_cover_text_color'                   => 'var(--nv-text-dark-bg)',
	'neve_post_cover_title_boxed_layout'           => false,
	'neve_post_cover_title_boxed_background_color' => 'var(--nv-dark-bg)',
	'neve_enable_masonry'                          => false,
	'neve_post_thumbnail_box_shadow'               => 0,
	'primary-menu_style'                           => 'style-border-top',
	'neve_post_cover_background_color'             => 'var(--nv-secondary-accent)',
	'neve_post_cover_padding'                      =>
	array(
		'mobile'       =>
		array(
			'top'    => 40,
			'right'  => 15,
			'bottom' => 40,
			'left'   => 15,
		),
		'tablet'       =>
		array(
			'top'    => 60,
			'right'  => 30,
			'bottom' => 60,
			'left'   => 30,
		),
		'desktop'      =>
		array(
			'top'    => 60,
			'right'  => 40,
			'bottom' => '60',
			'left'   => 40,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	),
	'neve_post_cover_overlay_opacity'              => 80,
	'neve_post_cover_container'                    => 'contained',
	'neve_post_cover_title_boxed_padding'          =>
	array(
		'mobile'       =>
		array(
			'top'    => 40,
			'right'  => 15,
			'bottom' => 40,
			'left'   => 15,
		),
		'tablet'       =>
		array(
			'top'    => 60,
			'right'  => 30,
			'bottom' => 60,
			'left'   => 30,
		),
		'desktop'      =>
		array(
			'top'    => 60,
			'right'  => 40,
			'bottom' => '60',
			'left'   => 40,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	),
	'neve_single_post_meta_ordering'               => '["author","date"]',
	'neve_form_fields_border_width'                =>
	array(
		'top'    => '2',
		'right'  => '2',
		'left'   => '2',
		'bottom' => '2',
		'unit'   => 'px',
	),
	'neve_form_fields_border_color'                => 'var(--nv-light-bg)',
	'neve_input_text_color'                        => 'var(--nv-text-color)',
	'footer-menu_component_align'                  =>
	array(
		'desktop' => 'right',
		'tablet'  => 'left',
		'mobile'  => 'left',
	),
	'hfg_footer_layout_bottom_columns_number'      => 2,
	'custom_logo'                                  => '{{featured-image-logo}}',
	'logo_color'                                   => 'var(--nv-text-color)',
	'neve_blog_post_meta_fields'                   => '[{"slug":"author","title":"' . __( 'Author', 'neve' ) . '","visibility":"yes","hide_on_mobile":"","blocked":"yes"},{"slug":"comments","title":"' . __( 'Comments', 'neve' ) . '","visibility":"yes","hide_on_mobile":"","blocked":"yes"},{"slug":"category","title":"' . __( 'Category', 'neve' ) . '","visibility":"yes","hide_on_mobile":"","blocked":"yes"},{"slug":"date","title":"' . __( 'Date', 'neve' ) . '","visibility":"no","hide_on_mobile":"","blocked":"yes"}]',
	// V4 changes.
	'neve_blog_items_border_radius'                => 8,
	'neve_blog_content_padding'                    => [
		'mobile'       => [
			'top'    => 25,
			'right'  => 25,
			'bottom' => 25,
			'left'   => 25,
		],
		'tablet'       => [
			'top'    => 25,
			'right'  => 25,
			'bottom' => 25,
			'left'   => 25,
		],
		'desktop'      => [
			'top'    => 25,
			'right'  => 25,
			'bottom' => 25,
			'left'   => 25,
		],
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	],
	'neve_enable_card_style'                       => true,
	'neve_blog_grid_card_bg_color'                 => 'var(--nv-site-bg)',
	'neve_blog_grid_text_color'                    => 'var(--nv-text-color)',
	'neve_blog_card_shadow'                        => 0.5,
	'neve_blog_archive_aspect_ratio'               => '4-3',
	'neve_post_excerpt_length'                     => 35,
	'neve_layout_single_post_elements_order'       => wp_json_encode(
		[
			'title-meta',
			'content',
			'tags',
			'comments',
		]
	),
	'neve_single_post_sidebar_layout'              => 'full-width',
	'neve_archive_hide_title'                      => true,
);
