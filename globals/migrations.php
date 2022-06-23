<?php
/**
 * Migration methods for theme mods.
 *
 * @package migrations.php
 */

/**
 * Get button default appearance.
 *
 * @param string $button the button type [button|secondary_button].
 *
 * @return array
 */
function neve_get_button_appearance_default( $button = 'button' ) {
	$new_skin = neve_is_new_skin();
	if ( $new_skin ) {
		if ( $button !== 'button' ) {
			return [
				'type'                  => 'outline',
				'background'            => '',
				'backgroundHover'       => '',
				'text'                  => 'var(--nv-primary-accent)',
				'textHover'             => 'var(--nv-primary-accent)',
				'borderRadius'          => [
					'top'    => 3,
					'right'  => 3,
					'bottom' => 3,
					'left'   => 3,
				],
				'borderWidth'           => [
					'top'    => 3,
					'right'  => 3,
					'bottom' => 3,
					'left'   => 3,
				],
				'useShadow'             => false,
				'shadowColor'           => 'rgba(0,0,0,0.5)',
				'shadowProperties'      => [
					'blur'   => 5,
					'width'  => 0,
					'height' => 0,
				],
				'useShadowHover'        => false,
				'shadowColorHover'      => 'rgba(0,0,0,0.5)',
				'shadowPropertiesHover' => [
					'blur'   => 5,
					'width'  => 0,
					'height' => 0,
				],
			];
		}

		return [
			'type'                  => 'fill',
			'background'            => 'var(--nv-primary-accent)',
			'backgroundHover'       => 'var(--nv-primary-accent)',
			'text'                  => '#ffffff',
			'textHover'             => '#ffffff',
			'borderRadius'          => [
				'top'    => 3,
				'right'  => 3,
				'bottom' => 3,
				'left'   => 3,
			],
			'borderWidth'           => [
				'top'    => 1,
				'right'  => 1,
				'bottom' => 1,
				'left'   => 1,
			],
			'useShadow'             => false,
			'shadowColor'           => 'rgba(0,0,0,0.5)',
			'shadowProperties'      => [
				'blur'   => 5,
				'width'  => 0,
				'height' => 0,
			],
			'useShadowHover'        => false,
			'shadowColorHover'      => 'rgba(0,0,0,0.5)',
			'shadowPropertiesHover' => [
				'blur'   => 5,
				'width'  => 0,
				'height' => 0,
			],
		];
	}

	$defaults = [
		'type'                  => 'fill',
		'background'            => '',
		'backgroundHover'       => '',
		'text'                  => '',
		'textHover'             => '',
		'borderRadius'          => [
			'top'    => 3,
			'right'  => 3,
			'bottom' => 3,
			'left'   => 3,
		],
		'borderWidth'           => [
			'top'    => 1,
			'right'  => 1,
			'bottom' => 1,
			'left'   => 1,
		],
		'useShadow'             => false,
		'shadowColor'           => 'rgba(0,0,0,0.5)',
		'shadowProperties'      => [
			'blur'   => 5,
			'width'  => 0,
			'height' => 0,
		],
		'useShadowHover'        => false,
		'shadowColorHover'      => 'rgba(0,0,0,0.5)',
		'shadowPropertiesHover' => [
			'blur'   => 5,
			'width'  => 0,
			'height' => 0,
		],
	];
	if ( $button === 'secondary_button' ) {
		$defaults['type']                  = 'outline';
		$defaults['text']                  = get_theme_mod( 'neve_secondary_button_color' ) ? get_theme_mod( 'neve_secondary_button_color' ) : 'var(--nv-text-color)';
		$defaults['textHover']             = get_theme_mod( 'neve_secondary_button_hover_color' ) ? get_theme_mod( 'neve_secondary_button_hover_color' ) : 'var(--nv-text-color)';
		$defaults['borderRadius']          = get_theme_mod( 'neve_secondary_button_border_radius' ) ? get_theme_mod( 'neve_secondary_button_border_radius' ) : [
			'top'    => 3,
			'right'  => 3,
			'bottom' => 3,
			'left'   => 3,
		];
		$defaults['useShadow']             = get_theme_mod( 'neve_secondary_button_use_shadow' ) ? get_theme_mod( 'neve_secondary_button_use_shadow' ) : $defaults['useShadow'];
		$defaults['shadowColor']           = get_theme_mod( 'neve_secondary_button_shadow_color' ) ? get_theme_mod( 'neve_secondary_button_shadow_color' ) : $defaults['shadowColor'];
		$defaults['shadowProperties']      = get_theme_mod( 'neve_secondary_button_shadow_properties' ) ? get_theme_mod( 'neve_secondary_button_shadow_properties' ) : $defaults['shadowProperties'];
		$defaults['useShadowHover']        = get_theme_mod( 'neve_secondary_button_use_shadow_hover' ) ? get_theme_mod( 'neve_secondary_button_use_shadow_hover' ) : $defaults['useShadowHover'];
		$defaults['shadowColorHover']      = get_theme_mod( 'neve_secondary_button_shadow_color_hover' ) ? get_theme_mod( 'neve_secondary_button_shadow_color_hover' ) : $defaults['shadowColorHover'];
		$defaults['shadowPropertiesHover'] = get_theme_mod( 'neve_secondary_button_shadow_properties_hover' ) ? get_theme_mod( 'neve_secondary_button_shadow_properties_hover' ) : $defaults['shadowPropertiesHover'];

		return $defaults;
	}
	$defaults['background']            = get_theme_mod( 'neve_button_color' ) ? get_theme_mod( 'neve_button_color' ) : 'var(--nv-primary-accent)';
	$defaults['backgroundHover']       = get_theme_mod( 'neve_button_hover_color' ) ? get_theme_mod( 'neve_button_hover_color' ) : 'var(--nv-primary-accent)';
	$defaults['text']                  = get_theme_mod( 'neve_button_text_color' ) ? get_theme_mod( 'neve_button_text_color' ) : '#ffffff';
	$defaults['textHover']             = get_theme_mod( 'neve_button_hover_text_color' ) ? get_theme_mod( 'neve_button_hover_text_color' ) : '#ffffff';
	$defaults['borderRadius']          = get_theme_mod( 'neve_button_border_radius' ) ? get_theme_mod( 'neve_button_border_radius' ) : [
		'top'    => 3,
		'right'  => 3,
		'bottom' => 3,
		'left'   => 3,
	];
	$defaults['useShadow']             = get_theme_mod( 'neve_button_use_shadow' ) ? get_theme_mod( 'neve_button_use_shadow' ) : $defaults['useShadow'];
	$defaults['shadowColor']           = get_theme_mod( 'neve_button_shadow_color' ) ? get_theme_mod( 'neve_button_shadow_color' ) : $defaults['shadowColor'];
	$defaults['shadowProperties']      = get_theme_mod( 'neve_button_shadow_properties' ) ? get_theme_mod( 'neve_button_shadow_properties' ) : $defaults['shadowProperties'];
	$defaults['useShadowHover']        = get_theme_mod( 'neve_button_use_shadow_hover' ) ? get_theme_mod( 'neve_button_use_shadow_hover' ) : $defaults['useShadowHover'];
	$defaults['shadowColorHover']      = get_theme_mod( 'neve_button_shadow_color_hover' ) ? get_theme_mod( 'neve_button_shadow_color_hover' ) : $defaults['shadowColorHover'];
	$defaults['shadowPropertiesHover'] = get_theme_mod( 'neve_button_shadow_properties_hover' ) ? get_theme_mod( 'neve_button_shadow_properties_hover' ) : $defaults['shadowPropertiesHover'];

	return $defaults;
}

/**
 * Migrate the old value for the blog layout to the new values.
 */
function neve_migrate_blog_layout() {
	// Layout Setting
	$old_value = get_theme_mod( 'neve_blog_archive_layout' );
	if ( $old_value !== 'alternative' ) {
		return;
	}

	set_theme_mod( 'neve_blog_archive_layout', 'default' );
	set_theme_mod( 'neve_blog_list_alternative_layout', true );
}

/**
 * Migrate blog columns.
 */
function neve_migrate_blog_columns() {
	// Column Setting - Previously mobile was forced to 1.
	$old = get_theme_mod( 'neve_grid_layout' );
	if ( ! is_numeric( $old ) ) {
		return;
	}
	set_theme_mod(
		'neve_grid_layout',
		wp_json_encode(
			array(
				'desktop' => $old,
				'tablet'  => $old,
				'mobile'  => 1,
			)
		)
	);
}

add_action( 'init', 'neve_migrate_blog_layout' );
add_action( 'init', 'neve_migrate_blog_columns' );
