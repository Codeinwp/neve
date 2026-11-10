<?php
/**
 *
 * Sanitize functions.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      20/08/2018
 *
 * @package Neve\Globals
 */

/**
 * Check whether a value is a well formed CSS variable expression.
 *
 * @param mixed $value Value to check.
 *
 * @return bool
 */
function neve_is_css_var( $value ) {
	if ( ! is_string( $value ) ) {
		return false;
	}

	$value = trim( $value );

	if ( $value === '' || strlen( $value ) > 200 ) {
		return false;
	}

	$hex      = '#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})';
	$color_fn = '(?:rgb|rgba|hsl|hsla)\(\s*[0-9a-z.,%\/\s-]+\)';
	$keyword  = '[a-z]+(?:-[a-z]+)*';
	$fallback = '(?:(?P>nv_var)|' . $hex . '|' . $color_fn . '|' . $keyword . ')';
	$pattern  = '/^(?P<nv_var>var\(\s*--[a-z0-9_-]+\s*(?:,\s*' . $fallback . '\s*)?\))$/i';

	return (bool) preg_match( $pattern, $value );
}

/**
 * Check whether a value is a single CSS gradient function.
 *
 * @param string $value Value to check.
 *
 * @return bool
 */
function neve_is_css_gradient( string $value ): bool {
	// Recursion keeps parentheses balanced, so nothing can follow the closing one.
	return (bool) preg_match( '/^(?:repeating-)?(?:linear|radial|conic)-gradient(\((?:[a-z0-9#%.,\s\/_-]|(?1))*\))$/i', trim( $value ) );
}

/**
 * Check whether a value is a single rgb(), rgba(), hsl() or hsla() color.
 *
 * @param string $value Value to check.
 *
 * @return bool
 */
function neve_is_css_function_color( string $value ): bool {
	return (bool) preg_match( '/^(?:rgb|rgba|hsl|hsla)\(\s*[-0-9.% ,]+\)$/', trim( $value ) );
}

/**
 * Whether a value can close the CSS declaration it is printed in.
 *
 * JSON strings and arrays are checked value by value, so their own braces do not count.
 *
 * @param mixed $value Stored or incoming value.
 *
 * @return bool
 */
function neve_closes_css_declaration( $value ): bool {
	if ( is_string( $value ) ) {
		$decoded = json_decode( $value, true );

		return is_array( $decoded ) ? neve_closes_css_declaration( $decoded ) : (bool) preg_match( '/[;{}<>]/', $value );
	}

	if ( ! is_array( $value ) ) {
		return false;
	}

	foreach ( $value as $item ) {
		if ( neve_closes_css_declaration( $item ) ) {
			return true;
		}
	}

	return false;
}

/**
 * Sanitize a color control value.
 *
 * @param mixed $value Color value: CSS variable, gradient, rgb(), rgba(), hsl(), hsla() or hex.
 *
 * @return string
 */
function neve_sanitize_colors( $value ) {
	if ( ! is_string( $value ) && ! is_numeric( $value ) ) {
		return '';
	}

	$value = (string) $value;

	if ( neve_is_css_var( $value ) ) {
		return trim( $value );
	}

	if ( neve_is_css_gradient( $value ) ) {
		return trim( $value );
	}

	// Before the rgba parser, which only reads rgba(int,int,int,float).
	if ( neve_is_css_function_color( $value ) ) {
		return trim( $value );
	}

	// Is this an rgba color or a hex?
	$mode = ( false === strpos( $value, 'rgba' ) ) ? 'hex' : 'rgba';
	if ( 'rgba' === $mode ) {
		return neve_sanitize_rgba( $value );
	}

	$hex_color = sanitize_hex_color( $value );

	return null === $hex_color ? '' : $hex_color;
}

/**
 * Sanitize rgba color.
 *
 * @param mixed $value Color in rgba format.
 *
 * @return string
 */
function neve_sanitize_rgba( $value ) {
	if ( ! is_string( $value ) ) {
		return 'rgba(0,0,0,0)';
	}

	$red   = 'rgba(0,0,0,0)';
	$green = 'rgba(0,0,0,0)';
	$blue  = 'rgba(0,0,0,0)';
	$alpha = 'rgba(0,0,0,0)';   // If empty or an array return transparent

	// By now we know the string is formatted as an rgba color so we need to further sanitize it.
	$value = str_replace( ' ', '', $value );
	sscanf( $value, 'rgba(%d,%d,%d,%f)', $red, $green, $blue, $alpha );

	return 'rgba(' . $red . ',' . $green . ',' . $blue . ',' . $alpha . ')';
}

/**
 * Sanitize checkbox output.
 *
 * @param bool $value value to be sanitized.
 *
 * @return bool
 */
function neve_sanitize_checkbox( $value ) {
	return true === (bool) $value;
}

/**
 * Check if a string is in json format
 *
 * @param string $string Input.
 *
 * @return bool
 * @since 1.1.38
 */
function neve_is_json( $string ) {
	return is_string( $string ) && is_array( json_decode( $string, true ) );
}

/**
 * Sanitize values for range inputs.
 *
 * @param string $input Control input.
 *
 * @return string|float Returns json string or float.
 */
function neve_sanitize_range_value( $input ) {
	if ( ! neve_is_json( $input ) ) {
		return floatval( $input );
	}
	$range_value            = json_decode( $input, true );
	$range_value['desktop'] = isset( $range_value['desktop'] ) && is_numeric( $range_value['desktop'] ) ? floatval( $range_value['desktop'] ) : '';
	$range_value['tablet']  = isset( $range_value['tablet'] ) && is_numeric( $range_value['tablet'] ) ? floatval( $range_value['tablet'] ) : '';
	$range_value['mobile']  = isset( $range_value['mobile'] ) && is_numeric( $range_value['mobile'] ) ? floatval( $range_value['mobile'] ) : '';
	if ( isset( $range_value['suffix'] ) ) {
		if ( is_array( $range_value['suffix'] ) ) {
			$range_value['suffix'] = array_map( 'neve_sanitize_css_unit', $range_value['suffix'] );
		} else {
			$range_value['suffix'] = neve_sanitize_css_unit( $range_value['suffix'] );
		}
	}
	return wp_json_encode( $range_value );
}

/**
 * Sanitize a CSS unit stored by a responsive range control.
 *
 * @param mixed $unit CSS unit.
 *
 * @return string
 */
function neve_sanitize_css_unit( $unit ) {
	if ( ! is_string( $unit ) || ! in_array( $unit, array( 'px', 'em', 'rem', 'vh', '%', '—' ), true ) ) {
		return 'px';
	}

	return $unit;
}

/**
 * Sanitize font weight values.
 *
 * @param string $value font-weight value.
 *
 * @return string
 */
function neve_sanitize_font_weight( $value ) {
	$allowed = array( '100', '200', '300', '400', '500', '600', '700', '800', '900' );

	if ( ! in_array( (string) $value, $allowed, true ) ) {
		return '300';
	}

	return $value;
}

/**
 * Sanitize font weight values.
 *
 * @param string $value font-weight value.
 *
 * @return string
 */
function neve_sanitize_text_transform( $value ) {
	$allowed = array( 'none', 'capitalize', 'uppercase', 'lowercase' );

	if ( ! in_array( $value, $allowed, true ) ) {
		return 'none';
	}

	return $value;
}

/**
 * Sanitize the background control.
 *
 * @param array $value input value.
 *
 * @return WP_Error | array
 */
function neve_sanitize_background( $value ) {
	if ( ! is_array( $value ) ) {
		return new WP_Error();
	}

	if ( ! isset( $value['type'] ) || ! in_array( $value['type'], array( 'image', 'color' ), true ) ) {
		return new WP_Error();
	}

	if ( ! isset( $value['focusPoint'] ) ) {
		$value['focusPoint'] = [
			'x' => 0.5,
			'y' => 0.5,
		];
	}

	foreach ( $value['focusPoint'] as $coordinate => $val ) {
		if ( is_numeric( $val ) ) {
			continue;
		}

		$val = 0;

		$value['focusPoint'][ $coordinate ] = $val;
	}


	$value['imageUrl']          = esc_url( $value['imageUrl'] ?? '' );
	$value['colorValue']        = neve_sanitize_colors( $value['colorValue'] ?? '' );
	$value['overlayColorValue'] = neve_sanitize_colors( $value['overlayColorValue'] ?? '' );

	$value['overlayOpacity'] = (int) ( $value['overlayOpacity'] ?? 0 );
	if ( $value['overlayOpacity'] > 100 || $value['overlayOpacity'] < 0 ) {
		$value['overlayOpacity'] = 50;
	}

	$value['fixed']       = (bool) ( $value['fixed'] ?? false );
	$value['useFeatured'] = (bool) ( $value['useFeatured'] ?? false );

	return $value;
}

/**
 * Sanitize the button appearance control.
 *
 * @param mixed $value The control value.
 *
 * @return array<string, mixed>
 */
function neve_sanitize_button_appearance( $value ) {
	if ( ! is_array( $value ) ) {
		return array();
	}

	$color_fields = array( 'background', 'backgroundHover', 'text', 'textHover', 'shadowColor', 'shadowColorHover' );
	foreach ( $color_fields as $field ) {
		if ( array_key_exists( $field, $value ) ) {
			$value[ $field ] = neve_sanitize_colors( $value[ $field ] );
		}
	}
	foreach ( array( 'borderRadius', 'borderWidth' ) as $field ) {
		if ( array_key_exists( $field, $value ) ) {
			$value[ $field ] = neve_sanitize_button_dimension( $value[ $field ] );
		}
	}

	return $value;
}

/**
 * Sanitize the directional dimensions stored by a button appearance control.
 *
 * @param mixed $value Stored directional dimensions.
 *
 * @return array{top: int, right: int, bottom: int, left: int}
 */
function neve_sanitize_button_dimension( $value ) {
	$sanitized = array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), 0 );
	if ( is_numeric( $value ) ) {
		return array_fill_keys( array_keys( $sanitized ), absint( $value ) );
	}
	if ( ! is_array( $value ) ) {
		return $sanitized;
	}

	foreach ( array_keys( $sanitized ) as $direction ) {
		if ( isset( $value[ $direction ] ) && is_numeric( $value[ $direction ] ) ) {
			$sanitized[ $direction ] = absint( $value[ $direction ] );
		}
	}

	return $sanitized;
}

/**
 * Format a sanitized color as a CSS custom-property rule.
 *
 * @param string $css_prop CSS custom property.
 * @param mixed  $value    Stored color value.
 *
 * @return string
 */
function neve_sanitize_color_css_rule( $css_prop, $value ) {
	$color = 'transparent' === $value ? $value : neve_sanitize_colors( $value );

	return '' === $color ? '' : sprintf( ' %s: %s;', $css_prop, $color );
}

/**
 * Format sanitized directional dimensions as a CSS custom-property rule.
 *
 * @param string $css_prop CSS custom property.
 * @param mixed  $value    Stored directional dimensions.
 * @param array  $meta     Dynamic selector metadata.
 * @param string $device   Current responsive device.
 * @phpstan-param array{directional-prop: string, key: string, suffix?: string, is_responsive?: bool} $meta
 *
 * @return string
 */
function neve_sanitize_directional_css_rule( $css_prop, $value, $meta, $device ) {
	$sanitized = array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), 0 );
	if ( is_numeric( $value ) ) {
		$sanitized = array_fill_keys( array_keys( $sanitized ), (float) $value );
	} elseif ( is_array( $value ) ) {
		foreach ( array_keys( $sanitized ) as $direction ) {
			if ( isset( $value[ $direction ] ) && is_numeric( $value[ $direction ] ) ) {
				$sanitized[ $direction ] = (float) $value[ $direction ];
			}
		}
		if ( isset( $value['unit'] ) ) {
			$sanitized['unit'] = neve_sanitize_css_unit( $value['unit'] );
		}
	}

	return \Neve\Core\Styles\Css_Prop::transform_directional_prop( $meta, $device, $sanitized, $css_prop, $meta['directional-prop'] );
}

/**
 * Format a sanitized numeric value as a CSS custom-property rule.
 *
 * @param string $css_prop CSS custom property.
 * @param mixed  $value    Stored numeric value.
 * @param array  $meta     Dynamic selector metadata.
 * @phpstan-param array{suffix?: string} $meta
 *
 * @return string
 */
function neve_sanitize_numeric_css_rule( $css_prop, $value, $meta ) {
	$suffix = isset( $meta['suffix'] ) ? $meta['suffix'] : '';

	return sprintf( ' %s: %d%s;', $css_prop, absint( $value ), $suffix );
}

/**
 * Format a sanitized responsive range as a CSS rule.
 *
 * @param string $css_prop CSS property.
 * @param mixed  $value    Stored range value for the current device.
 * @param array  $meta     Dynamic selector metadata.
 * @param string $device   Current responsive device.
 * @phpstan-param array{key: string, default?: mixed, as_json?: mixed} $meta
 *
 * @return string
 */
function neve_sanitize_responsive_range_css_rule( $css_prop, $value, $meta, $device ) {
	$suffix = \Neve\Core\Styles\Css_Prop::get_suffix_responsive( $meta, $device );

	return sprintf( '%s: %s%s;', $css_prop, (float) $value, $suffix );
}

/**
 * Format sanitized button dimensions as a CSS custom-property rule.
 *
 * @param string $css_prop CSS custom property.
 * @param mixed  $value    Stored directional dimensions.
 * @param array  $meta     Dynamic selector metadata.
 * @param string $device   Current responsive device.
 * @phpstan-param array{directional-prop: string, key: string, override?: int|string} $meta
 *
 * @return string
 */
function neve_sanitize_button_dimension_css_rule( $css_prop, $value, $meta, $device ) {
	if ( isset( $meta['override'] ) ) {
		return sprintf( '%s:%d;', $css_prop, absint( $meta['override'] ) );
	}

	return neve_sanitize_directional_css_rule( $css_prop, neve_sanitize_button_dimension( $value ), $meta, $device );
}

/**
 * Format a sanitized button shadow as a CSS custom-property rule.
 *
 * @param string $css_prop CSS custom property.
 * @param mixed  $value    Stored shadow color.
 * @param int    $width    Horizontal offset.
 * @param int    $height   Vertical offset.
 * @param int    $blur     Blur radius.
 *
 * @return string
 */
function neve_sanitize_shadow_css_rule( $css_prop, $value, $width, $height, $blur ) {
	$color = neve_sanitize_colors( $value );
	if ( '' === $color ) {
		$color = 'none';
	}

	return sprintf( '%1$s:%2$dpx %3$dpx %4$dpx %5$s;', $css_prop, $width, $height, $blur, $color );
}

/**
 * Sanitize the typography control.
 *
 * @param array $value the control value.
 *
 * @return array
 */
function neve_sanitize_typography_control( $value ) {
	$keys = [
		'lineHeight',
		'letterSpacing',
		'fontWeight',
		'fontSize',
		'textTransform',
	];

	// Approve Keys.
	foreach ( $value as $key => $values ) {
		if ( ! in_array( $key, $keys, true ) ) {
			unset( $value[ $key ] );
		}
	}

	// Font Weight.
	if ( ! in_array( $value['fontWeight'], [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ], true ) ) {
		$value['fontWeight'] = '300';
	}
	// Text Transform.
	if ( ! in_array( $value['textTransform'], [ 'none', 'uppercase', 'lowercase', 'capitalize' ], true ) ) {
		$value['textTransform'] = 'none';
	}

	// Make sure we deal with arrays.
	foreach ( [ 'letterSpacing', 'lineHeight', 'fontSize' ] as $value_type ) {
		if ( ! is_array( $value[ $value_type ] ) ) {
			$value[ $value_type ] = [];
		}
	}

	return $value;
}

/**
 * Sanitize alignment.
 *
 * @param array $input alignment responsive array.
 *
 * @return array
 */
function neve_sanitize_alignment( $input ) {
	$default = [
		'mobile'  => 'left',
		'tablet'  => 'left',
		'desktop' => 'left',
	];
	$allowed = [ 'left', 'center', 'right', 'justify' ];

	if ( ! is_array( $input ) ) {
		return $default;
	}

	foreach ( $input as $device => $alignment ) {
		if ( ! in_array( $alignment, $allowed ) ) {
			$input[ $device ] = 'left';
		}
	}

	return $input;
}

/**
 * Sanitize position.
 *
 * @param array $input alignment responsive array.
 *
 * @return array
 */
function neve_sanitize_position( $input ) {
	$default = [
		'mobile'  => 'center',
		'tablet'  => 'center',
		'desktop' => 'center',
	];
	$allowed = [ 'flex-start', 'center', 'flex-end' ];

	if ( ! is_array( $input ) ) {
		return $default;
	}

	foreach ( $input as $device => $alignment ) {
		if ( ! in_array( $alignment, $allowed ) ) {
			$input[ $device ] = 'center';
		}
	}

	return $input;
}

/**
 * Sanitize meta order control.
 *
 * @param string $value Control input.
 */
function neve_sanitize_meta_ordering( $value ) {
	$allowed = array(
		'author',
		'category',
		'date',
		'comments',
		'reading',
	);

	if ( empty( $value ) ) {
		return wp_json_encode( $allowed );
	}

	$decoded = json_decode( $value, true );

	foreach ( $decoded as $val ) {
		if ( ! in_array( $val, $allowed, true ) ) {
			return wp_json_encode( $allowed );
		}
	}

	return $value;
}

/**
 * Sanitize meta repeater control.
 *
 * @param string $value Control input.
 */
function neve_sanitize_meta_repeater( $value ) {

	$sanitized_value = [];

	$allowed_slugs = [
		'author',
		'category',
		'date',
		'comments',
		'reading',
	];

	$allowed_properties = [
		'slug',
		'title',
		'visibility',
		'blocked',
		'hide_on_mobile',
		'meta_type',
		'field',
		'format',
		'fallback',
		'__kbKey',
	];

	if ( empty( $value ) ) {
		return wp_json_encode( $sanitized_value );
	}

	$decoded = json_decode( $value, true );

	foreach ( $decoded as $val ) {
		if ( isset( $val->slug ) && ! in_array( $val->slug, $allowed_slugs, true ) ) {
			return wp_json_encode( $sanitized_value );
		}

		foreach ( $val as $property => $value ) {
			if ( ! in_array( $property, $allowed_properties, true ) ) {
				return wp_json_encode( $sanitized_value );
			}
			$val[ $property ] = wp_kses_post( $value );
		}

		$sanitized_value[] = $val;
	}

	return wp_json_encode( $sanitized_value );
}

/**
 * Sanitize blend mode option.
 *
 * @param string $input Control input.
 *
 * @return string
 */
function neve_sanitize_blend_mode( $input ) {
	$blend_mode_options = [ 'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'saturation', 'color', 'difference', 'exclusion', 'hue', 'luminosity' ];
	if ( ! in_array( $input, $blend_mode_options, true ) ) {
		return 'normal';
	}
	return $input;
}

/**
 * Sanitize the container layout value
 *
 * @param string $value value from the control.
 *
 * @return string
 */
function neve_sanitize_container_layout( $value ) {
	$allowed_values = array( 'contained', 'full-width' );
	if ( ! in_array( $value, $allowed_values, true ) ) {
		return 'contained';
	}

	return esc_html( $value );
}

/**
 * Sanitize Button Type option.
 *
 * @param string $value the control value.
 *
 * @return string
 */
function neve_sanitize_button_type( $value ) {
	if ( ! in_array( $value, [ 'primary', 'secondary' ], true ) ) {
		return 'primary';
	}

	return $value;
}

/**
 * Sanitize VSpacing type.
 *
 * @param string $value the control value.
 *
 * @return string
 */
function neve_sanitize_vspace_type( $value ) {
	return ! in_array( $value, [ 'inherit', 'specific' ], true ) ? 'inherit' : $value;
}

/**
 * Sanitize font variants.
 *
 * @param string[] $value the incoming value.
 *
 * @return string[]
 */
function neve_sanitize_font_variants( $value ) {
	$allowed = [
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
		'100italic',
		'200italic',
		'300italic',
		'400italic',
		'500italic',
		'600italic',
		'700italic',
		'800italic',
		'900italic',
	];
	if ( ! is_array( $value ) ) {
		return [];
	}

	foreach ( $value as $variant ) {
		if ( in_array( $variant, $allowed, true ) ) {
			continue;
		}
		$key = array_search( $variant, $value );
		unset( $value[ $key ] );
	}

	return $value;
}
