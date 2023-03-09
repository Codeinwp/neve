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
		'text'                  => '#fff',
		'textHover'             => '#fff',
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
