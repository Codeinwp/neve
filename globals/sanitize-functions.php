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

	if ( neve_closes_css_declaration( $fallback ) ) {
		return false;
	}

	if ( neve_is_css_var( $fallback ) || (bool) preg_match( '/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i', $fallback ) ) {
		return true;
	}

	if ( neve_is_css_function_color( $fallback ) ) {
		return true;
	}

	return (bool) preg_match( '/^[a-z]+(?:-[a-z]+)*$/i', $fallback )
		&& '' !== neve_sanitize_row_text_color( $fallback );
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
	if ( '' === trim( $body ) || ! preg_match( '/^[a-z0-9#%.,\s\/_()+\-]+$/i', $body ) ) {
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

	$previous_was_stop = false;
	$last_index        = count( $arguments ) - 1;
	foreach ( $arguments as $index => $argument ) {
		if ( neve_is_css_gradient_stop( $argument, $matches[1] ) ) {
			$previous_was_stop = true;
			continue;
		}

		if ( ! $previous_was_stop || $index === $last_index || ! neve_is_css_gradient_hint( $argument, $matches[1] ) ) {
			return false;
		}

		$previous_was_stop = false;
	}

	return true;
}

/**
 * Get shared numeric patterns used by the CSS gradient validators.
 *
 * @return array<string, string>
 */
function neve_css_gradient_patterns(): array {
	$number             = '[+-]?(?:\d+(?:\.\d+)?|\.\d+)';
	$unsigned_number    = '(?:\d+(?:\.\d+)?|\.\d+)';
	$zero               = '[+-]?(?:0+(?:\.0+)?|\.0+)';
	$length_units       = 'px|em|rem|vw|vh|vi|vb|vmin|vmax|svw|svh|svi|svb|svmin|svmax|lvw|lvh|lvi|lvb|lvmin|lvmax|dvw|dvh|dvi|dvb|dvmin|dvmax|cqw|cqh|cqi|cqb|cqmin|cqmax|ch|ex|cap|ic|lh|rlh|cm|mm|in|pt|pc|q';
	$length_unit        = '(?:' . $length_units . ')';
	$absolute_length    = '(?:' . $zero . '|' . $number . $length_unit . ')';
	$length             = '(?:' . $absolute_length . '|' . $number . '%)';
	$nonnegative_length = '(?:\+?(?:0+(?:\.0+)?|\.0+)|\+?' . $unsigned_number . '(?:%|' . $length_units . '))';
	$calc_length        = 'calc\(\s*' . $length . '(?:\s+[+-]\s+' . $length . ')+\s*\)';

	return array(
		'number'             => $number,
		'unsigned_number'    => $unsigned_number,
		'zero'               => $zero,
		'length_unit'        => $length_unit,
		'absolute_length'    => $absolute_length,
		'simple_length'      => $length,
		'nonnegative_length' => $nonnegative_length,
		'length'             => '(?:' . $length . '|' . $calc_length . ')',
	);
}

/**
 * Split a CSS value on a delimiter that is outside parentheses.
 *
 * @param string $value     Value to split.
 * @param string $delimiter Single-character delimiter.
 *
 * @return array<int, string>|false
 */
function neve_css_split_top_level( string $value, string $delimiter = ',' ) {
	$parts   = array();
	$current = '';
	$depth   = 0;
	$length  = strlen( $value );

	for ( $index = 0; $index < $length; $index++ ) {
		$character = $value[ $index ];
		if ( '(' === $character ) {
			$depth++;
		} elseif ( ')' === $character ) {
			$depth--;
			if ( $depth < 0 ) {
				return false;
			}
		}

		if ( $delimiter === $character && 0 === $depth ) {
			$parts[] = trim( $current );
			$current = '';
			continue;
		}

		$current .= $character;
	}

	if ( 0 !== $depth ) {
		return false;
	}

	$parts[] = trim( $current );

	return $parts;
}

/**
 * Read a leading CSS function and the suffix after its balanced closing parenthesis.
 *
 * @param string $value Value beginning with a CSS function.
 *
 * @return array{name: string, value: string, body: string, suffix: string}|false
 */
function neve_css_leading_function( string $value ) {
	if ( ! preg_match( '/^([a-z][a-z0-9-]*)\(/i', $value, $matches ) ) {
		return false;
	}

	$depth  = 0;
	$length = strlen( $value );
	$start  = strlen( $matches[1] );
	for ( $index = $start; $index < $length; $index++ ) {
		$character = $value[ $index ];
		if ( '(' === $character ) {
			$depth++;
		} elseif ( ')' === $character ) {
			$depth--;
			if ( 0 === $depth ) {
				return array(
					'name'   => strtolower( $matches[1] ),
					'value'  => substr( $value, 0, $index + 1 ),
					'body'   => substr( $value, $start + 1, $index - $start - 1 ),
					'suffix' => substr( $value, $index + 1 ),
				);
			}
		}
	}

	return false;
}

/**
 * Get the supported CSS color interpolation method pattern.
 *
 * @return string
 */
function neve_css_gradient_interpolation_pattern(): string {
	$rectangular = '(?:srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|lab|oklab|xyz|xyz-d50|xyz-d65)';
	$polar       = '(?:hsl|hwb|lch|oklch)(?:\s+(?:shorter|longer|increasing|decreasing)\s+hue)?';
	$custom      = '--[a-z0-9_-]+';

	return 'in\s+(?:' . $rectangular . '|' . $polar . '|' . $custom . ')';
}

/**
 * Match a gradient prelude with an optional color interpolation method.
 *
 * @param string $value         Prelude value.
 * @param string $base_pattern  Direction, shape or position pattern.
 * @param string $interpolation Color interpolation pattern.
 *
 * @return bool
 */
function neve_css_gradient_matches_prelude( string $value, string $base_pattern, string $interpolation ): bool {
	if ( preg_match( '/^' . $base_pattern . '$/i', $value ) || preg_match( '/^' . $interpolation . '$/i', $value ) ) {
		return true;
	}

	if ( preg_match( '/^(' . $interpolation . ')\s+(.+)$/i', $value, $matches ) ) {
		return (bool) preg_match( '/^' . $base_pattern . '$/i', $matches[2] );
	}

	if ( preg_match( '/^(.+)\s+(' . $interpolation . ')$/i', $value, $matches ) ) {
		return (bool) preg_match( '/^' . $base_pattern . '$/i', $matches[1] );
	}

	return false;
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
	$patterns      = neve_css_gradient_patterns();
	$value         = trim( $value );
	$number        = $patterns['number'];
	$zero          = $patterns['zero'];
	$angle         = '(?:' . $zero . '|' . $number . '(?:deg|grad|rad|turn))';
	$dimension     = $patterns['simple_length'];
	$horizontal    = '(?:left|center|right)';
	$vertical      = '(?:top|center|bottom)';
	$position      = '(?:(?:left|center|right|top|bottom|' . $dimension . ')|(?:' . $horizontal . '\s+' . $vertical . '|' . $vertical . '\s+' . $horizontal . ')|(?:' . $horizontal . '|' . $dimension . ')\s+(?:' . $vertical . '|' . $dimension . ')|(?:left|right)\s+' . $dimension . '\s+' . $vertical . '|' . $vertical . '\s+(?:left|right)\s+' . $dimension . '|(?:top|bottom)\s+' . $dimension . '\s+' . $horizontal . '|' . $horizontal . '\s+(?:top|bottom)\s+' . $dimension . '|(?:left|right)\s+' . $dimension . '\s+(?:top|bottom)\s+' . $dimension . '|(?:top|bottom)\s+' . $dimension . '\s+(?:left|right)\s+' . $dimension . ')';
	$interpolation = neve_css_gradient_interpolation_pattern();

	if ( 'linear' === strtolower( $type ) ) {
		$direction = '(?:(?:left|right)(?:\s+(?:top|bottom))?|(?:top|bottom)(?:\s+(?:left|right))?)';
		$base      = '(?:' . $angle . '|to\s+' . $direction . ')';

		return neve_css_gradient_matches_prelude( $value, $base, $interpolation );
	}

	if ( 'radial' === strtolower( $type ) ) {
		$unsigned_number = $patterns['unsigned_number'];
		$extent          = '(?:closest-side|closest-corner|farthest-side|farthest-corner)';
		$circle_radius   = '(?:\+?(?:0+(?:\.0+)?|\.0+)|\+?' . $unsigned_number . $patterns['length_unit'] . ')';
		$ellipse_radius  = $patterns['nonnegative_length'];
		$size            = '(?:' . $extent . '|' . $circle_radius . '|' . $ellipse_radius . '\s+' . $ellipse_radius . ')';
		$circle          = '(?:circle(?:\s+(?:' . $extent . '|' . $circle_radius . '))?|(?:' . $extent . '|' . $circle_radius . ')\s+circle)';
		$ellipse         = '(?:ellipse(?:\s+(?:' . $extent . '|' . $ellipse_radius . '\s+' . $ellipse_radius . '))?|(?:' . $extent . '|' . $ellipse_radius . '\s+' . $ellipse_radius . ')\s+ellipse)';
		$shape_size      = '(?:' . $circle . '|' . $ellipse . ')';
		$base            = '(?:(?:' . $shape_size . '|' . $size . ')(?:\s+at\s+' . $position . ')?|at\s+' . $position . ')';

		return neve_css_gradient_matches_prelude( $value, $base, $interpolation );
	}

	$base = '(?:(?:from\s+' . $angle . ')(?:\s+at\s+' . $position . ')?|at\s+' . $position . ')';

	return neve_css_gradient_matches_prelude( $value, $base, $interpolation );
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

	$function = neve_css_leading_function( $value );
	if ( false !== $function && ( '' === $function['suffix'] || preg_match( '/^\s/', $function['suffix'] ) ) ) {
		$is_color = 'var' === $function['name']
			? neve_is_css_var( $function['value'] )
			: neve_is_css_gradient_function_color( $function['value'] );

		return $is_color && neve_gradient_stop_has_valid_positions( $function['suffix'], $type );
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
	$function = neve_css_leading_function( trim( $value ) );
	if ( false === $function || '' !== trim( $function['suffix'] ) ) {
		return false;
	}

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

	if ( (bool) preg_match( '/^(?:' . $rgb . '|' . $rgb_modern . '|' . $hsl . '|' . $hsl_modern . ')$/i', $value ) ) {
		return true;
	}

	$none_percentage   = '(?:none|' . $number . '%)';
	$none_component    = '(?:none|' . $component . ')';
	$none_hue          = '(?:none|' . $hue . ')';
	$optional_alpha    = '(?:\s*\/\s*' . $none_component . ')?';
	$modern_components = '\s+' . $none_component . '\s+' . $none_component . '\s+' . $none_component . $optional_alpha . '\s*';

	switch ( $function['name'] ) {
		case 'hwb':
			return (bool) preg_match( '/^\s*' . $none_hue . '\s+' . $none_percentage . '\s+' . $none_percentage . $optional_alpha . '\s*$/i', $function['body'] );
		case 'lab':
		case 'oklab':
			return (bool) preg_match( '/^\s*' . $none_component . '\s+' . $none_component . '\s+' . $none_component . $optional_alpha . '\s*$/i', $function['body'] );
		case 'lch':
		case 'oklch':
			return (bool) preg_match( '/^\s*' . $none_component . '\s+' . $none_component . '\s+' . $none_hue . $optional_alpha . '\s*$/i', $function['body'] );
		case 'color':
			$space = '(?:srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65|--[a-z0-9_-]+)';

			return (bool) preg_match( '/^\s*' . $space . $modern_components . '$/i', $function['body'] );
		case 'device-cmyk':
			return (bool) preg_match( '/^\s*' . $none_component . '(?:\s+' . $none_component . '){3}' . $optional_alpha . '\s*$/i', $function['body'] );
		case 'color-mix':
			return neve_is_css_color_mix( $function['body'] );
		case 'light-dark':
			$colors = neve_css_split_top_level( $function['body'] );

			return false !== $colors && 2 === count( $colors )
				&& neve_is_css_gradient_color( $colors[0] )
				&& neve_is_css_gradient_color( $colors[1] );
		default:
			return false;
	}
}

/**
 * Check a complete color value used by another color function.
 *
 * @param string $value Color value.
 *
 * @return bool
 */
function neve_is_css_gradient_color( string $value ): bool {
	$value = trim( $value );
	if ( (bool) preg_match( '/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i', $value ) ) {
		return true;
	}

	if ( neve_is_css_var( $value ) || neve_is_css_gradient_function_color( $value ) ) {
		return true;
	}

	return (bool) preg_match( '/^[a-z]+(?:-[a-z]+)*$/i', $value )
		&& '' !== neve_sanitize_row_text_color( $value );
}

/**
 * Check a color-mix() body.
 *
 * @param string $value Function body.
 *
 * @return bool
 */
function neve_is_css_color_mix( string $value ): bool {
	$arguments = neve_css_split_top_level( $value );
	if ( false === $arguments || 3 !== count( $arguments ) ) {
		return false;
	}

	if ( ! preg_match( '/^' . neve_css_gradient_interpolation_pattern() . '$/i', $arguments[0] ) ) {
		return false;
	}

	$weights = array();
	foreach ( array_slice( $arguments, 1 ) as $color_stop ) {
		if ( neve_is_css_gradient_color( $color_stop ) ) {
			$weights[] = null;
			continue;
		}

		if ( ! preg_match( '/^(.*\S)\s+(' . neve_css_gradient_patterns()['number'] . '%)$/', $color_stop, $matches )
			|| ! neve_is_css_gradient_color( $matches[1] ) ) {
			return false;
		}

		$weight = (float) substr( $matches[2], 0, -1 );
		if ( $weight < 0 || $weight > 100 ) {
			return false;
		}
		$weights[] = $weight;
	}

	return null === $weights[0] || null === $weights[1] || 0.0 !== $weights[0] + $weights[1];
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

	$positions = neve_css_split_top_level_whitespace( $value );
	if ( false === $positions || count( $positions ) > 2 ) {
		return false;
	}

	foreach ( $positions as $position ) {
		if ( ! neve_is_css_gradient_dimension( $position, $type ) ) {
			return false;
		}
	}

	return true;
}

/**
 * Check a color transition hint between two gradient stops.
 *
 * @param string $value Transition hint.
 * @param string $type  Gradient type.
 *
 * @return bool
 */
function neve_is_css_gradient_hint( string $value, string $type ): bool {
	return neve_is_css_gradient_dimension( trim( $value ), $type );
}

/**
 * Split a CSS value on whitespace that is outside parentheses.
 *
 * @param string $value Value to split.
 *
 * @return array<int, string>|false
 */
function neve_css_split_top_level_whitespace( string $value ) {
	$parts   = array();
	$current = '';
	$depth   = 0;
	$length  = strlen( $value );

	for ( $index = 0; $index < $length; $index++ ) {
		$character = $value[ $index ];
		if ( '(' === $character ) {
			$depth++;
		} elseif ( ')' === $character ) {
			$depth--;
			if ( $depth < 0 ) {
				return false;
			}
		}

		if ( 0 === $depth && ctype_space( $character ) ) {
			if ( '' !== $current ) {
				$parts[] = $current;
				$current = '';
			}
			continue;
		}

		$current .= $character;
	}

	if ( 0 !== $depth ) {
		return false;
	}

	if ( '' !== $current ) {
		$parts[] = $current;
	}

	return $parts;
}

/**
 * Check a gradient stop dimension, including supported CSS math functions.
 *
 * @param string $value Dimension value.
 * @param string $type  Gradient type.
 *
 * @return bool
 */
function neve_is_css_gradient_dimension( string $value, string $type ): bool {
	$patterns = neve_css_gradient_patterns();
	$number   = $patterns['number'];
	$zero     = $patterns['zero'];
	$direct   = 'conic' === strtolower( $type )
		? '(?:' . $zero . '|' . $number . '(?:%|deg|grad|rad|turn))'
		: $patterns['simple_length'];

	if ( (bool) preg_match( '/^' . $direct . '$/i', trim( $value ) ) ) {
		return true;
	}

	return neve_is_css_gradient_math_function( trim( $value ), $type );
}

/**
 * Check a calc(), min(), max(), clamp() or var() dimension.
 *
 * @param string $value CSS function.
 * @param string $type  Gradient type.
 *
 * @return bool
 */
function neve_is_css_gradient_math_function( string $value, string $type ): bool {
	$value_type = neve_css_gradient_math_function_type( $value, $type );

	return false !== $value_type && 'number' !== $value_type;
}

/**
 * Get the result type of a CSS math function.
 *
 * @param string $value CSS function.
 * @param string $type  Gradient type.
 *
 * @return string|false
 */
function neve_css_gradient_math_function_type( string $value, string $type ) {
	$function = neve_css_leading_function( $value );
	if ( false === $function || '' !== trim( $function['suffix'] ) ) {
		return false;
	}

	if ( 'var' === $function['name'] ) {
		$arguments = neve_css_split_top_level( $function['body'] );
		if ( false === $arguments || count( $arguments ) > 2 || ! preg_match( '/^\s*--[a-z0-9_-]+\s*$/i', $arguments[0] ) ) {
			return false;
		}

		if ( 2 === count( $arguments ) ) {
			$fallback_type = neve_css_gradient_math_expression_type( $arguments[1], $type );
			if ( false === $fallback_type || 'number' === $fallback_type ) {
				return false;
			}
		}

		return 'unknown';
	}

	if ( ! in_array( $function['name'], array( 'calc', 'min', 'max', 'clamp' ), true ) ) {
		return false;
	}

	$arguments = neve_css_split_top_level( $function['body'] );
	if ( false === $arguments || in_array( '', $arguments, true ) ) {
		return false;
	}

	if ( ( 'calc' === $function['name'] && 1 !== count( $arguments ) )
		|| ( 'clamp' === $function['name'] && 3 !== count( $arguments ) ) ) {
		return false;
	}

	$result_type = false;
	foreach ( $arguments as $argument ) {
		$argument_type = neve_css_gradient_math_expression_type( $argument, $type );
		if ( false === $argument_type ) {
			return false;
		}

		if ( false === $result_type || 'unknown' === $result_type ) {
			$result_type = $argument_type;
			continue;
		}

		if ( 'unknown' !== $argument_type && $argument_type !== $result_type ) {
			return false;
		}
	}

	return $result_type;
}

/**
 * Check an arithmetic expression inside a CSS math function.
 *
 * @param string $value Expression.
 * @param string $type  Gradient type.
 *
 * @return bool
 */
function neve_is_css_gradient_math_expression( string $value, string $type ): bool {
	return false !== neve_css_gradient_math_expression_type( $value, $type );
}

/**
 * Get the result type of an arithmetic expression inside a CSS math function.
 *
 * @param string $value Expression.
 * @param string $type  Gradient type.
 *
 * @return string|false
 */
function neve_css_gradient_math_expression_type( string $value, string $type ) {
	$value = trim( $value );
	if ( '' === $value ) {
		return false;
	}

	$operands  = array();
	$operators = array();
	$current   = '';
	$depth     = 0;
	$length    = strlen( $value );
	for ( $index = 0; $index < $length; $index++ ) {
		$character = $value[ $index ];
		if ( '(' === $character ) {
			$depth++;
		} elseif ( ')' === $character ) {
			$depth--;
			if ( $depth < 0 ) {
				return false;
			}
		}

		if ( 0 === $depth && in_array( $character, array( '+', '-', '/' ), true ) ) {
			$trimmed = trim( $current );
			if ( '' === $trimmed ) {
				$current .= $character;
				continue;
			}
			if ( in_array( $character, array( '+', '-' ), true )
				&& ( ! ctype_space( $value[ $index - 1 ] ) || $index + 1 >= $length || ! ctype_space( $value[ $index + 1 ] ) ) ) {
				return false;
			}
			$operands[]  = $trimmed;
			$operators[] = $character;
			$current     = '';
			continue;
		}

		$current .= $character;
	}

	if ( 0 !== $depth || '' === trim( $current ) ) {
		return false;
	}
	$operands[] = trim( $current );

	$result_type = neve_css_gradient_math_operand_type( $operands[0], $type );
	if ( false === $result_type ) {
		return false;
	}

	foreach ( $operators as $index => $operator ) {
		$operand_type = neve_css_gradient_math_operand_type( $operands[ $index + 1 ], $type );
		if ( false === $operand_type ) {
			return false;
		}

		if ( '/' === $operator ) {
			if ( 'dimension' === $operand_type ) {
				if ( 'dimension' !== $result_type && 'unknown' !== $result_type ) {
					return false;
				}
				$result_type = 'number';
			} elseif ( 'number' !== $operand_type && 'unknown' !== $operand_type ) {
				return false;
			}
			continue;
		}

		if ( 'unknown' === $result_type ) {
			$result_type = $operand_type;
			continue;
		}

		if ( 'unknown' !== $operand_type && $operand_type !== $result_type ) {
			return false;
		}
	}

	return $result_type;
}

/**
 * Get the result type of one operand inside a CSS math expression.
 *
 * @param string $value Operand.
 * @param string $type  Gradient type.
 *
 * @return string|false
 */
function neve_css_gradient_math_operand_type( string $value, string $type ) {
	$value    = trim( $value );
	$patterns = neve_css_gradient_patterns();
	$number   = $patterns['number'];
	$zero     = $patterns['zero'];
	$direct   = 'conic' === strtolower( $type )
		? '(?:' . $zero . '|' . $number . '(?:%|deg|grad|rad|turn))'
		: $patterns['simple_length'];

	if ( (bool) preg_match( '/^' . $number . '$/i', $value ) ) {
		return 'number';
	}

	if ( (bool) preg_match( '/^' . $direct . '$/i', $value ) ) {
		return 'dimension';
	}

	if ( strlen( $value ) > 2 && '(' === $value[0] && ')' === $value[ strlen( $value ) - 1 ] ) {
		return neve_css_gradient_math_expression_type( substr( $value, 1, -1 ), $type );
	}

	return neve_css_gradient_math_function_type( $value, $type );
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

	if ( preg_match( '/^#(?:[0-9a-f]{4}|[0-9a-f]{8})$/i', trim( $value ), $match ) ) {
		return $match[0];
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
