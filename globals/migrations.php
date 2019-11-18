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
		'borderRadius'    => 3,
		'borderWidth'     => 1,
	];
	if ( $button === 'secondary_button' ) {
		$defaults['type']         = 'outline';
		$defaults['text']         = get_theme_mod( 'neve_secondary_button_color' ) ? get_theme_mod( 'neve_secondary_button_color' ) : '#676767';
		$defaults['textHover']    = get_theme_mod( 'neve_secondary_button_hover_color' ) ? get_theme_mod( 'neve_secondary_button_hover_color' ) : '#676767';
		$defaults['borderRadius'] = get_theme_mod( 'neve_secondary_button_border_radius' ) ? get_theme_mod( 'neve_secondary_button_border_radius' ) : 3;

		return $defaults;
	}
	$defaults['background']      = get_theme_mod( 'neve_button_color' ) ? get_theme_mod( 'neve_button_color' ) : '#0366d6';
	$defaults['backgroundHover'] = get_theme_mod( 'neve_button_hover_color' ) ? get_theme_mod( 'neve_button_hover_color' ) : '#0366d6';
	$defaults['text']            = get_theme_mod( 'neve_button_text_color' ) ? get_theme_mod( 'neve_button_text_color' ) : '#ffffff';
	$defaults['textHover']       = get_theme_mod( 'neve_button_hover_text_color' ) ? get_theme_mod( 'neve_button_hover_text_color' ) : '#ffffff';
	$defaults['borderRadius']    = get_theme_mod( 'neve_button_border_radius' ) ? get_theme_mod( 'neve_button_border_radius' ) : 3;

	return $defaults;
}
