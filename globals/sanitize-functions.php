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

	if ( ! preg_match( '/^var\((.*)\)$/iD', $value, $matches ) ) {
		return false;
	}

	$body     = $matches[1];
	$depth    = 0;
	$comma_at = null;
	$length   = strlen( $body );
	for ( $index = 0; $index < $length; $index++ ) {
		$character = $body[ $index ];
		if ( '(' === $character ) {
			$depth++;
		} elseif ( ')' === $character ) {
			$depth--;
			if ( $depth < 0 ) {
				return false;
			}
		} elseif ( ',' === $character && 0 === $depth && null === $comma_at ) {
			$comma_at = $index;
		}
	}

	if ( 0 !== $depth ) {
		return false;
	}

	$name = trim( null === $comma_at ? $body : substr( $body, 0, $comma_at ) );
	if ( ! preg_match( '/^--[a-z0-9_-]+$/i', $name ) ) {
		return false;
	}

	if ( null === $comma_at ) {
		return true;
	}

	$fallback = trim( substr( $body, $comma_at + 1 ) );
	if ( '' === $fallback ) {
		return false;
	}

	return neve_is_css_var( $fallback ) || '' !== neve_sanitize_row_text_color( $fallback );
}

/**
 * Check whether a value is a single CSS gradient function.
 *
 * @param string $value Value to check.
 *
 * @return bool
 */
function neve_is_css_gradient( string $value ): bool {
	$value = trim( $value );
	if ( ! preg_match( '/^(?:repeating-)?(linear|radial|conic)-gradient\((.*)\)$/iD', $value, $matches ) ) {
		return false;
	}

	$body = $matches[2];
	if ( '' === trim( $body ) || ! preg_match( '/^[a-z0-9#%.,\s\/_()\-]+$/i', $body ) ) {
		return false;
	}

	$arguments = array();
	$current   = '';
	$depth     = 0;
	$length    = strlen( $body );
	for ( $index = 0; $index < $length; $index++ ) {
		$character = $body[ $index ];
		if ( '(' === $character ) {
			$depth++;
		} elseif ( ')' === $character ) {
			$depth--;
			if ( $depth < 0 ) {
				return false;
			}
		}

		if ( ',' === $character && 0 === $depth ) {
			$arguments[] = trim( $current );
			$current     = '';
			continue;
		}

		$current .= $character;
	}

	if ( 0 !== $depth ) {
		return false;
	}
	$arguments[] = trim( $current );

	if ( ! neve_is_css_gradient_stop( $arguments[0], $matches[1] ) ) {
		if ( ! neve_is_css_gradient_prelude( $matches[1], $arguments[0] ) ) {
			return false;
		}
		array_shift( $arguments );
	}

	if ( count( $arguments ) < 2 ) {
		return false;
	}

	foreach ( $arguments as $argument ) {
		if ( ! neve_is_css_gradient_stop( $argument, $matches[1] ) ) {
			return false;
		}
	}

	return true;
}

/**
 * Get shared numeric patterns used by the CSS gradient validators.
 *
 * @return array<string, string>
 */
function neve_css_gradient_patterns(): array {
	$number          = '[+-]?(?:\d+(?:\.\d+)?|\.\d+)';
	$unsigned_number = '(?:\d+(?:\.\d+)?|\.\d+)';
	$zero            = '[+-]?(?:0+(?:\.0+)?|\.0+)';

	return array(
		'number'          => $number,
		'unsigned_number' => $unsigned_number,
		'zero'            => $zero,
		'length'          => '(?:' . $zero . '|' . $number . '(?:%|px|em|rem|vw|vh|vmin|vmax|ch|ex|cm|mm|in|pt|pc|q))',
	);
}

/**
 * Check whether a gradient's optional first argument is a supported prelude.
 *
 * @param string $type  Gradient type.
 * @param string $value Prelude value.
 *
 * @return bool
 */
function neve_is_css_gradient_prelude( string $type, string $value ): bool {
	$patterns   = neve_css_gradient_patterns();
	$value      = trim( $value );
	$number     = $patterns['number'];
	$zero       = $patterns['zero'];
	$angle      = '(?:' . $zero . '|' . $number . '(?:deg|grad|rad|turn))';
	$dimension  = $patterns['length'];
	$horizontal = '(?:left|center|right)';
	$vertical   = '(?:top|center|bottom)';
	$position   = '(?:(?:left|center|right|top|bottom|' . $dimension . ')|(?:' . $horizontal . '\s+' . $vertical . '|' . $vertical . '\s+' . $horizontal . ')|(?:' . $horizontal . '|' . $dimension . ')\s+(?:' . $vertical . '|' . $dimension . ')|(?:left|right)\s+' . $dimension . '\s+(?:top|bottom)\s+' . $dimension . '|(?:top|bottom)\s+' . $dimension . '\s+(?:left|right)\s+' . $dimension . ')';

	if ( 'linear' === strtolower( $type ) ) {
		$direction = '(?:(?:left|right)(?:\s+(?:top|bottom))?|(?:top|bottom)(?:\s+(?:left|right))?)';

		return (bool) preg_match( '/^(?:' . $angle . '|to\s+' . $direction . ')$/i', $value );
	}

	if ( 'radial' === strtolower( $type ) ) {
		$unsigned_number = $patterns['unsigned_number'];
		$extent          = '(?:closest-side|closest-corner|farthest-side|farthest-corner)';
		$circle_radius   = '(?:0+(?:\.0+)?|\.0+|' . $unsigned_number . '(?:px|em|rem|vw|vh|vmin|vmax|ch|ex|cm|mm|in|pt|pc|q))';
		$ellipse_radius  = '(?:0+(?:\.0+)?|\.0+|' . $unsigned_number . '(?:%|px|em|rem|vw|vh|vmin|vmax|ch|ex|cm|mm|in|pt|pc|q))';
		$size            = '(?:' . $extent . '|' . $circle_radius . '|' . $ellipse_radius . '\s+' . $ellipse_radius . ')';
		$circle          = '(?:circle(?:\s+(?:' . $extent . '|' . $circle_radius . '))?|(?:' . $extent . '|' . $circle_radius . ')\s+circle)';
		$ellipse         = '(?:ellipse(?:\s+(?:' . $extent . '|' . $ellipse_radius . '\s+' . $ellipse_radius . '))?|(?:' . $extent . '|' . $ellipse_radius . '\s+' . $ellipse_radius . ')\s+ellipse)';
		$shape_size      = '(?:' . $circle . '|' . $ellipse . ')';

		return (bool) preg_match( '/^(?:(?:' . $shape_size . '|' . $size . ')(?:\s+at\s+' . $position . ')?|at\s+' . $position . ')$/i', $value );
	}

	return (bool) preg_match( '/^(?:from\s+' . $angle . ')(?:\s+at\s+' . $position . ')?$|^at\s+' . $position . '$/i', $value );
}

/**
 * Check whether a gradient stop contains a supported color and positions.
 *
 * @param string $value Gradient stop.
 * @param string $type  Gradient type.
 *
 * @return bool
 */
function neve_is_css_gradient_stop( string $value, string $type ): bool {
	$value = trim( $value );
	if ( preg_match( '/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})(?=\s|$)/i', $value, $matches ) ) {
		return neve_gradient_stop_has_valid_positions( substr( $value, strlen( $matches[0] ) ), $type );
	}

	if ( preg_match( '/^((?:var|rgb|rgba|hsl|hsla)(\((?:[a-z0-9#%.,\s\/_-]|(?2))*\)))(?=\s|$)/i', $value, $matches ) ) {
		if ( 0 === stripos( $matches[1], 'var(' ) ) {
			$is_color = neve_is_css_var( $matches[1] );
		} else {
			$is_color = neve_is_css_gradient_function_color( $matches[1] );
		}

		return $is_color && neve_gradient_stop_has_valid_positions( substr( $value, strlen( $matches[1] ) ), $type );
	}

	if ( ! preg_match( '/^([a-z]+(?:-[a-z]+)*)(?=\s|$)/i', $value, $matches ) ) {
		return false;
	}

	return '' !== neve_sanitize_row_text_color( $matches[1] )
		&& neve_gradient_stop_has_valid_positions( substr( $value, strlen( $matches[1] ) ), $type );
}

/**
 * Check a function color used by a gradient stop.
 *
 * @param string $value Function color.
 *
 * @return bool
 */
function neve_is_css_gradient_function_color( string $value ): bool {
	$patterns   = neve_css_gradient_patterns();
	$number     = $patterns['number'];
	$component  = $number . '%?';
	$alpha      = $number . '%?';
	$hue        = $number . '(?:deg|grad|rad|turn)?';
	$rgb_legacy = '(?:' . $number . '(?:\s*,\s*' . $number . '){2}|' . $number . '%(?:\s*,\s*' . $number . '%){2})';
	$rgb        = '(?:rgb|rgba)\(\s*' . $rgb_legacy . '(?:\s*,\s*' . $alpha . ')?\s*\)';
	$rgb_modern = '(?:rgb|rgba)\(\s*' . $component . '\s+' . $component . '\s+' . $component . '(?:\s*\/\s*' . $alpha . ')?\s*\)';
	$hsl        = '(?:hsl|hsla)\(\s*' . $hue . '\s*,\s*' . $number . '%\s*,\s*' . $number . '%(?:\s*,\s*' . $alpha . ')?\s*\)';
	$hsl_modern = '(?:hsl|hsla)\(\s*' . $hue . '\s+' . $number . '%\s+' . $number . '%(?:\s*\/\s*' . $alpha . ')?\s*\)';

	return (bool) preg_match( '/^(?:' . $rgb . '|' . $rgb_modern . '|' . $hsl . '|' . $hsl_modern . ')$/i', $value );
}

/**
 * Check the optional one or two positions after a gradient stop color.
 *
 * @param string $value Position suffix.
 * @param string $type  Gradient type.
 *
 * @return bool
 */
function neve_gradient_stop_has_valid_positions( string $value, string $type ): bool {
	$value = trim( $value );
	if ( '' === $value ) {
		return true;
	}

	$patterns  = neve_css_gradient_patterns();
	$number    = $patterns['number'];
	$zero      = $patterns['zero'];
	$dimension = 'conic' === strtolower( $type )
		? '(?:' . $zero . '|' . $number . '(?:%|deg|grad|rad|turn))'
		: $patterns['length'];

	return (bool) preg_match( '/^' . $dimension . '(?:\s+' . $dimension . ')?$/i', $value );
}

/**
 * Check whether a value is a single rgb(), rgba(), hsl() or hsla() color.
 *
 * @param string $value Value to check.
 *
 * @return bool
 */
function neve_is_css_function_color( string $value ): bool {
	return neve_is_css_gradient_function_color( trim( $value ) );
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

	foreach ( $value as $key => $item ) {
		if ( ( is_string( $key ) && (bool) preg_match( '/[;{}<>]/', $key ) ) || neve_closes_css_declaration( $item ) ) {
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
		$component = '[+-]?(?:\d+(?:\.\d*)?|\.\d+)%?';
		if ( ! preg_match( '/^rgba\(\s*' . $component . '(?:\s*,\s*' . $component . '){2,3}\s*\)/', trim( $value ), $match ) ) {
			return '';
		}

		return neve_sanitize_rgba( $match[0] );
	}

	$hex_color = sanitize_hex_color( $value );

	return null === $hex_color ? '' : $hex_color;
}

/**
 * Sanitize row text colors, which historically allow CSS named colors.
 *
 * @param mixed $value Row text color.
 *
 * @return string
 */
function neve_sanitize_row_text_color( $value ) {
	if ( ! is_string( $value ) ) {
		return '';
	}

	if ( '' === $value ) {
		return '';
	}

	$color = neve_sanitize_colors( $value );
	if ( '' !== $color ) {
		return $color;
	}

	if ( neve_closes_css_declaration( $value ) ) {
		return '';
	}

	$named_colors = explode(
		' ',
		'aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen currentcolor transparent'
	);
	$sanitized    = strtolower( sanitize_text_field( $value ) );

	return in_array( $sanitized, $named_colors, true ) ? $sanitized : '';
}

/**
 * Sanitize a font family before it is stored or printed in CSS.
 *
 * @param mixed $value Font family value.
 *
 * @return string
 */
function neve_sanitize_font_family( $value ) {
	if ( ! is_string( $value ) ) {
		return '';
	}
	if ( (bool) preg_match( '/[;{}<>]/', $value ) ) {
		return '';
	}

	$value = sanitize_text_field( $value );

	return neve_closes_css_declaration( $value ) ? '' : $value;
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
		$range_value['suffix'] = neve_sanitize_css_suffix( $range_value['suffix'] );
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
 * Sanitize a scalar or responsive CSS suffix.
 *
 * @param mixed $suffix CSS suffix value.
 *
 * @return string|array<array-key, string>
 */
function neve_sanitize_css_suffix( $suffix ) {
	return is_array( $suffix ) ? array_map( 'neve_sanitize_css_unit', $suffix ) : neve_sanitize_css_unit( $suffix );
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

	foreach ( array( 'imageUrl', 'colorValue', 'overlayColorValue' ) as $string_field ) {
		if ( array_key_exists( $string_field, $value ) && ! is_string( $value[ $string_field ] ) ) {
			return new WP_Error();
		}
	}

	if ( isset( $value['focusPoint'] ) && ! is_array( $value['focusPoint'] ) ) {
		return new WP_Error();
	}

	if ( isset( $value['overlayOpacity'] ) && ! is_numeric( $value['overlayOpacity'] ) ) {
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
			$value[ $field ] = 'transparent' === $value[ $field ] ? 'transparent' : neve_sanitize_colors( $value[ $field ] );
		}
	}
	foreach ( array( 'borderRadius', 'borderWidth' ) as $field ) {
		if ( array_key_exists( $field, $value ) ) {
			$value[ $field ] = neve_sanitize_button_dimension( $value[ $field ] );
		}
	}
	foreach ( array( 'shadowProperties', 'shadowPropertiesHover' ) as $field ) {
		if ( array_key_exists( $field, $value ) ) {
			$value[ $field ] = neve_sanitize_button_shadow_properties( $value[ $field ] );
		}
	}

	return $value;
}

/**
 * Sanitize button shadow offsets and blur.
 *
 * @param mixed $value Stored shadow properties.
 *
 * @return array{blur: int, width: int, height: int}
 */
function neve_sanitize_button_shadow_properties( $value ) {
	$sanitized = array_fill_keys( array( 'blur', 'width', 'height' ), 0 );
	if ( ! is_array( $value ) ) {
		return $sanitized;
	}

	foreach ( array_keys( $sanitized ) as $property ) {
		if ( isset( $value[ $property ] ) && is_numeric( $value[ $property ] ) ) {
			$sanitized[ $property ] = (int) $value[ $property ];
		}
	}
	$sanitized['blur'] = abs( $sanitized['blur'] );

	return $sanitized;
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
 * Format a sanitized font family as a CSS custom-property rule.
 *
 * @param string $css_prop CSS custom property.
 * @param mixed  $value    Stored font family.
 *
 * @return string
 */
function neve_sanitize_font_family_css_rule( $css_prop, $value ) {
	$font_family = neve_sanitize_font_family( $value );
	if ( '' === $font_family ) {
		return '';
	}

	\Neve\Views\Font_Manager::add_google_font( $font_family );

	return sprintf( ' %s: %s;', $css_prop, \Neve\Core\Styles\Css_Prop::format_font_family_value( $font_family ) );
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
	$sanitized = neve_sanitize_directional_value( $value );
	if ( empty( array_filter( $sanitized, 'is_numeric' ) ) ) {
		return '';
	}

	return \Neve\Core\Styles\Css_Prop::transform_directional_prop( $meta, $device, $sanitized, $css_prop, $meta['directional-prop'] );
}

/**
 * Sanitize directional values before formatting them as CSS.
 *
 * @param mixed $value Stored directional dimensions.
 *
 * @return array<string, float|string>
 */
function neve_sanitize_directional_value( $value ) {
	$sanitized = array_fill_keys( array( 'top', 'right', 'bottom', 'left' ), '' );
	if ( is_numeric( $value ) ) {
		return array_fill_keys( array_keys( $sanitized ), (float) $value );
	}
	if ( ! is_array( $value ) ) {
		return $sanitized;
	}

	foreach ( array_keys( $sanitized ) as $direction ) {
		if ( isset( $value[ $direction ] ) && is_numeric( $value[ $direction ] ) ) {
			$sanitized[ $direction ] = (float) $value[ $direction ];
		}
	}
	if ( isset( $value['unit'] ) ) {
		$sanitized['unit'] = neve_sanitize_css_unit( $value['unit'] );
	}

	return $sanitized;
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
 * Format a button shadow after normalizing its stored properties.
 *
 * @param string $css_prop   CSS custom property.
 * @param mixed  $value      Stored shadow color.
 * @param mixed  $properties Stored shadow properties.
 *
 * @return string
 */
function neve_sanitize_button_shadow_css_rule( $css_prop, $value, $properties ) {
	$properties = neve_sanitize_button_shadow_properties( $properties );

	return neve_sanitize_shadow_css_rule( $css_prop, $value, $properties['width'], $properties['height'], $properties['blur'] );
}

/**
 * Sanitize the typography control.
 *
 * @param mixed $value The control value.
 *
 * @return array{}|array{fontWeight?: string|null, textTransform: string, fontSize: array<array-key, mixed>, lineHeight: array<array-key, mixed>, letterSpacing: array<array-key, mixed>}
 */
function neve_sanitize_typography_control( $value ) {
	if ( ! is_array( $value ) ) {
		return array();
	}

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
	if ( isset( $value['fontWeight'] ) && ! in_array( $value['fontWeight'], [ 'none', 'normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900' ], true ) ) {
		$value['fontWeight'] = '300';
	}
	// Text Transform.
	if ( ! isset( $value['textTransform'] ) || ! in_array( $value['textTransform'], [ 'none', 'uppercase', 'lowercase', 'capitalize' ], true ) ) {
		$value['textTransform'] = 'none';
	}

	// Keep only numeric responsive values and allowlisted units.
	foreach ( [ 'letterSpacing', 'lineHeight', 'fontSize' ] as $value_type ) {
		if ( ! isset( $value[ $value_type ] ) || ! is_array( $value[ $value_type ] ) ) {
			$value[ $value_type ] = [];
			continue;
		}

		foreach ( array( 'mobile', 'tablet', 'desktop' ) as $device ) {
			if ( isset( $value[ $value_type ][ $device ] ) && ! is_numeric( $value[ $value_type ][ $device ] ) ) {
				unset( $value[ $value_type ][ $device ] );
			}
		}

		if ( isset( $value[ $value_type ]['suffix'] ) ) {
			$value[ $value_type ]['suffix'] = neve_sanitize_css_suffix( $value[ $value_type ]['suffix'] );
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
