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
	'neve_post_excerpt_length'                     => 30,
	'neve_post_meta_ordering'                      => '["author","comments"]',
	'neve_advanced_layout_options'                 => true,
	'neve_blog_archive_sidebar_layout'             => 'full-width',
	'neve_blog_archive_content_width'              => 100,
	'neve_body_font_family'                        => '',
	'neve_headings_font_family'                    => 'Libre Baskerville',
	'neve_button_appearance'                       => 
	array(
		'borderRadius'          => 
		array(
			'top'    => '100',
			'right'  => '100',
			'bottom' => '100',
			'left'   => '100',
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
			'mobile'  => '1.4',
			'tablet'  => '1.6',
			'desktop' => '1.6',
			'suffix'  => 
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'fontSize'      => 
		array(
			'mobile'  => '1.5',
			'tablet'  => '3.2',
			'desktop' => '3.2',
			'suffix'  => 
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'flag'          => true,
	),
	'neve_container_width'                         => '{"mobile":748,"tablet":992,"desktop":1170}',
	'neve_default_container_style'                 => 'contained',
	'neve_text_color'                              => '#2b2b2b',
	'neve_h2_typeface_general'                     => 
	array(
		'fontWeight'    => '500',
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
			'tablet'  => '1.4',
			'desktop' => '1.4',
			'suffix'  => 
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'fontSize'      => 
		array(
			'mobile'  => '1.3',
			'tablet'  => '2.3',
			'desktop' => '2.3',
			'suffix'  => 
			array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
		),
		'flag'          => false,
	),
	'neve_h3_typeface_general'                     => 
	array(
		'fontWeight'    => '500',
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
	'neve_single_post_sidebar_layout'              => 'right',
	'neve_other_pages_sidebar_layout'              => 'full-width',
	'neve_single_post_content_width'               => 70,
	'neve_other_pages_content_width'               => 100,
	'neve_typeface_general'                        => 
	array(
		'fontSize'      => 
		array(
			'suffix'  => 
			array(
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			),
			'mobile'  => '16',
			'tablet'  => 16,
			'desktop' => '18',
		),
		'lineHeight'    => 
		array(
			'mobile'  => '1.7',
			'tablet'  => '1.7',
			'desktop' => 1.7,
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
			'desktop' => '0',
		),
		'fontWeight'    => '400',
		'textTransform' => 'none',
		'flag'          => true,
	),
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
	'neve_grid_layout'                             => '{"desktop":2,"tablet":2,"mobile":1}',
	'neve_link_color'                              => '#2b2b2b',
	'neve_link_hover_color'                        => '#727272',
	'neve_secondary_button_appearance'             => 
	array(
		'borderRadius'          => 
		array(
			'top'    => '100',
			'right'  => '100',
			'bottom' => '100',
			'left'   => '100',
		),
		'borderWidth'           => 
		array(
			'top'    => '0',
			'right'  => '0',
			'bottom' => '0',
			'left'   => '0',
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
			'top'    => '14',
			'right'  => '40',
			'bottom' => '14',
			'left'   => '40',
		),
		'tablet'       => 
		array(
			'top'    => '14',
			'right'  => '40',
			'bottom' => '14',
			'left'   => '40',
		),
		'desktop'      => 
		array(
			'top'    => '14',
			'right'  => '40',
			'bottom' => '14',
			'left'   => '40',
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	),
	'neve_secondary_button_padding'                => 
	array(
		'mobile'       => 
		array(
			'top'    => '14',
			'right'  => '40',
			'bottom' => '14',
			'left'   => '40',
		),
		'tablet'       => 
		array(
			'top'    => '14',
			'right'  => '40',
			'bottom' => '14',
			'left'   => '40',
		),
		'desktop'      => 
		array(
			'top'    => '14',
			'right'  => '40',
			'bottom' => '14',
			'left'   => '40',
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
				'name'          => 'Base',
				'allowDeletion' => false,
				'colors'        => 
				array(
					'nv-primary-accent'   => '#fc5f45',
					'nv-secondary-accent' => '#38c695',
					'nv-site-bg'          => '#ffffff',
					'nv-light-bg'         => '#f4f4f4',
					'nv-dark-bg'          => '#14171c',
					'nv-text-color'       => '#393939',
					'nv-text-dark-bg'     => '#ffffff',
					'nv-c-1'              => '#b27cf5',
					'nv-c-2'              => '#feb960',
				),
			),
			'darkMode' => 
			array(
				'name'          => 'Dark Mode',
				'allowDeletion' => false,
				'colors'        => 
				array(
					'nv-primary-accent'   => '#fc5f45',
					'nv-secondary-accent' => '#38c695',
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
				'name'          => 'East Bay',
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
				'name'          => 'Green',
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
		'textTransform' => 'uppercase',
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
	'neve_archive_typography_post_title'           => 
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
			'tablet'  => '32',
			'desktop' => '32',
		),
		'flag'       => false,
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
	'hfg_footer_layout_v2'                         => '{"desktop":{"top":{"left":[],"c-left":[],"center":[],"c-right":[],"right":[]},"main":{"left":[],"c-left":[],"center":[],"c-right":[],"right":[]},"bottom":{"left":[],"c-left":[{"id":"footer_copyright"}],"center":[],"c-right":[],"right":[]}}}',
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
	'neve_layout_single_post_elements_order'       => '["content","tags","comments"]',
	'neve_post_header_layout'                      => 'cover',
	'neve_post_cover_height'                       => '{"mobile":250,"tablet":30,"desktop":50,"suffix":{"tablet":"vh","desktop":"vh","mobile":"px"}}',
	'neve_post_title_alignment'                    => 
	array(
		'mobile'  => 'left',
		'tablet'  => 'left',
		'desktop' => 'left',
	),
	'neve_post_title_position'                     => 
	array(
		'mobile'  => 'center',
		'tablet'  => 'center',
		'desktop' => 'flex-end',
	),
	'neve_post_cover_text_color'                   => 'var(--nv-text-dark-bg)',
	'neve_post_cover_title_boxed_layout'           => false,
	'neve_post_cover_title_boxed_background_color' => 'var(--nv-dark-bg)',
	'neve_post_content_ordering'                   => '["thumbnail","title-meta","excerpt"]',
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
	'neve_enable_featured_post'                    => true,
	'neve_blog_post_meta_fields'                   => '[{"slug":"author","title":"Author","visibility":"yes","hide_on_mobile":"","blocked":"yes"},{"slug":"comments","title":"Comments","visibility":"yes","hide_on_mobile":"","blocked":"yes"},{"slug":"category","title":"Category","visibility":"yes","hide_on_mobile":"","blocked":"yes"},{"slug":"date","title":"Date","visibility":"no","hide_on_mobile":"","blocked":"yes"}]',
);
