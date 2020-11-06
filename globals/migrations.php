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
	$defaults = [
		'type'            => 'fill',
		'background'      => '',
		'backgroundHover' => '',
		'text'            => '',
		'textHover'       => '',
		'borderRadius'    => [
			'top'     => 3,
			'right'   => 3,
			'botttom' => 3,
			'left'    => 3,
		],
		'borderWidth'     => [
			'top'    => 1,
			'right'  => 1,
			'bottom' => 1,
			'left'   => 1,
		],
	];
	if ( $button === 'secondary_button' ) {
		$defaults['type']         = 'outline';
		$defaults['text']         = get_theme_mod( 'neve_secondary_button_color' ) ? get_theme_mod( 'neve_secondary_button_color' ) : 'var(--nv-text-color)';
		$defaults['textHover']    = get_theme_mod( 'neve_secondary_button_hover_color' ) ? get_theme_mod( 'neve_secondary_button_hover_color' ) : 'var(--nv-text-color)';
		$defaults['borderRadius'] = get_theme_mod( 'neve_secondary_button_border_radius' ) ? get_theme_mod( 'neve_secondary_button_border_radius' ) : 3;

		return $defaults;
	}
	$defaults['background']      = get_theme_mod( 'neve_button_color' ) ? get_theme_mod( 'neve_button_color' ) : 'var(--nv-primary-accent)';
	$defaults['backgroundHover'] = get_theme_mod( 'neve_button_hover_color' ) ? get_theme_mod( 'neve_button_hover_color' ) : 'var(--nv-primary-accent)';
	$defaults['text']            = get_theme_mod( 'neve_button_text_color' ) ? get_theme_mod( 'neve_button_text_color' ) : '#ffffff';
	$defaults['textHover']       = get_theme_mod( 'neve_button_hover_text_color' ) ? get_theme_mod( 'neve_button_hover_text_color' ) : '#ffffff';
	$defaults['borderRadius']    = get_theme_mod( 'neve_button_border_radius' ) ? get_theme_mod( 'neve_button_border_radius' ) : 3;

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
