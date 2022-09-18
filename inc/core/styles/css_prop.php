<?php


namespace Neve\Core\Styles;


use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Views\Font_Manager;

class Css_Prop {
	/**
	 * Helper method to build the value based on 100 diff.
	 */
	public static function minus_100( $css_prop, $value, $meta, $device ) {
		return sprintf( "%s: %s%s;",
			( $css_prop ),
			( 100 - $value ),
			isset( $meta[ Dynamic_Selector::META_SUFFIX ] ) ? $meta[ Dynamic_Selector::META_SUFFIX ] : 'px'
		);
	}

	/**
	 * Get suffix from controls that store data in the following format:
	 * { desktop: value, tablet: value, mobile: value, deskotp-unit: px, tablet-unit: px, mobile-unit: px }
	 *
	 * @param array $meta Subscribers meta data.
	 */
	public static function get_unit_responsive( $meta, $device ) {
		$all_value = Mods::get( $meta['key'], isset( $meta[ Dynamic_Selector::META_DEFAULT ] ) ? $meta[ Dynamic_Selector::META_DEFAULT ] : null );
		$suffix    = 'px';
		if ( isset( $all_value[ $device . '-unit' ] ) ) {
			$suffix = $all_value[ $device . '-unit' ];
		} elseif ( isset( $all_value['unit'] ) ) {
			$suffix = $all_value['unit'];
		}

		return $suffix;
	}

	/**
	 * Get suffix from controls that store data in the following format:
	 * { desktop: value, tablet: value, mobile: value, suffix : { deskop: px, tablet: px, mobile: px} }
	 *
	 * @param array $meta Subscribers meta data.
	 */
	public static function get_suffix_responsive( $meta, $device ) {
		$default_value = isset( $meta[ Dynamic_Selector::META_DEFAULT ] ) ? $meta[ Dynamic_Selector::META_DEFAULT ] : null;
		$all_value     = isset( $meta[ Dynamic_Selector::META_AS_JSON ] ) ? Mods::to_json( $meta['key'], $default_value ) : Mods::get( $meta['key'], $default_value );

		// The neve_responsive_range_control component double JSON stringified, therefore try to parse it again.
		if( ! is_array( $all_value ) ) {
			$maybe_parse_json = json_decode( $all_value , true);

			if( is_array( $maybe_parse_json ) ) {
				$all_value = $maybe_parse_json;
			}
		}

		return isset( $all_value['suffix'][ $device ] ) ? $all_value['suffix'][ $device ] : ( isset( $all_value['suffix'] ) && is_string( $all_value['suffix'] ) ? $all_value['suffix'] : 'px' );;
	}

	/**
	 * Transform rule meta into CSS rule string.
	 *
	 * @param string $css_prop CSS Prop.
	 * @param string|array $value Dynamic value.
	 * @param array $meta Rule meta.
	 * @param string $device Current device.
	 *
	 * @return string
	 */
	public static function transform( $css_prop, $value, $meta, $device ) {
		//If we have a custom filter, let's call it.
		if ( isset( $meta['filter'] ) ) {
			if ( is_callable( $meta['filter'] ) ) {
				return call_user_func_array( $meta['filter'], [ $css_prop, $value, $meta, $device ] );
			}
			if ( method_exists( __CLASS__, $meta['filter'] ) ) {
				return call_user_func_array( [ __CLASS__, $meta['filter'] ], [ $css_prop, $value, $meta, $device ] );
			}

			return '';
		}

		if ( isset( $meta['override'] ) ) {
			return sprintf( '%s:%s;', $css_prop, $meta['override'] );
		}

		switch ( $css_prop ) {
			case Config::CSS_PROP_BACKGROUND_COLOR:
			case Config::CSS_PROP_COLOR:
			case Config::CSS_PROP_FILL_COLOR:
			case Config::CSS_PROP_BORDER_COLOR:
				$mode   = ( false === strpos( $value, 'rgba' ) ) ? 'hex' : 'rgba';
				$is_var = ( strpos( $value, 'var' ) !== false );

				if ( $mode === 'hex' && ! $is_var ) {
					$value = strpos( $value, "#" ) === 0 ? $value : '#' . $value;
				}

				return sprintf( "%s: %s%s;", ( $css_prop ), neve_sanitize_colors( $value ), isset( $meta['important'] ) && $meta['important'] ? '!important' : '' );
			case Config::CSS_PROP_MAX_WIDTH:
			case Config::CSS_PROP_WIDTH:
			case Config::CSS_PROP_FLEX_BASIS:
			case Config::CSS_PROP_MARGIN_LEFT:
			case Config::CSS_PROP_MARGIN_RIGHT:
			case Config::CSS_PROP_MARGIN_TOP:
			case Config::CSS_PROP_MARGIN_BOTTOM:
			case Config::CSS_PROP_PADDING_LEFT:
			case Config::CSS_PROP_PADDING_RIGHT:
			case Config::CSS_PROP_HEIGHT:
			case Config::CSS_PROP_MIN_HEIGHT:
			case Config::CSS_PROP_LEFT:
			case Config::CSS_PROP_RIGHT:
				$suffix = isset( $meta[ Dynamic_Selector::META_SUFFIX ] ) ? $meta[ Dynamic_Selector::META_SUFFIX ] : 'px';

				if ( $suffix === 'responsive_suffix' ) {
					$suffix = self::get_suffix_responsive( $meta, $device );
				}

				return sprintf( "%s: %s%s;",
					( $css_prop ),
					( $value ),
					$suffix
				);
			case Config::CSS_PROP_BORDER_RADIUS:
			case Config::CSS_PROP_BORDER_WIDTH:
			case Config::CSS_PROP_PADDING:
			case Config::CSS_PROP_MARGIN:
				$suffix = isset( $meta[ Dynamic_Selector::META_SUFFIX ] ) ? $meta[ Dynamic_Selector::META_SUFFIX ] : 'px';
				if ( ! is_array( $value ) ) {
					return sprintf( "%s:%s%s;",
						$css_prop,
						absint( $value ), $suffix );
				}

				if ( ! isset( $meta['is_responsive'] ) || $meta['is_responsive'] === false ) {
					$suffix = isset( $value['unit'] ) ? $value['unit'] : 'px';
				}

				if ( $suffix === 'responsive_unit' ) {
					$suffix = self::get_unit_responsive( $meta, $device );
				}

				$non_empty_values = array_filter( $value, 'strlen' ); // @phpstan-ignore-line
				if ( count( $non_empty_values ) === 4 ) {
					return sprintf( "%s:%s%s %s%s %s%s %s%s;",
						$css_prop,
						(int) $value['top'],
						$suffix,
						(int) $value['right'],
						$suffix,
						(int) $value['bottom'],
						$suffix,
						(int) $value['left'],
						$suffix
					);
				}
				$rule     = '';
				$patterns = [
					Config::CSS_PROP_MARGIN        => 'margin-%s',
					Config::CSS_PROP_PADDING       => 'padding-%s',
					Config::CSS_PROP_BORDER_WIDTH  => 'border-%s-width',
					Config::CSS_PROP_BORDER_RADIUS => [
						'top'    => 'border-top-left-radius',
						'right'  => 'border-top-right-radius',
						'bottom' => 'border-bottom-right-radius',
						'left'   => 'border-bottom-left-radius',
					],
				];

				if ( isset( $non_empty_values['unit'] ) ) {
					unset ( $non_empty_values['unit'] );
				}

				foreach ( $non_empty_values as $position => $position_value ) {
					$rule .= sprintf( "%s:%s%s;",
						sprintf( ( is_array( $patterns[ $css_prop ] ) ? $patterns[ $css_prop ][ $position ] : $patterns[ $css_prop ] ), $position ),
						(int) $position_value,
						$suffix
					);
				}

				return $rule;
			//Line height uses an awkward format saved, and we can't define it as responsive because we would need to use the suffix part.
			case Config::CSS_PROP_LINE_HEIGHT:
			case Config::CSS_PROP_FONT_SIZE:

				$suffix = isset( $meta[ Dynamic_Selector::META_SUFFIX ] ) ? $meta[ Dynamic_Selector::META_SUFFIX ] : 'em';
				// We consider the provided suffix as default, in case that we have a responsive setting with responsive suffix.
				if ( isset( $meta[ Dynamic_Selector::META_IS_RESPONSIVE ] ) && $meta[ Dynamic_Selector::META_IS_RESPONSIVE ] ) {
					$all_value = Mods::get( $meta['key'] );
					$suffix    = isset( $all_value['suffix'][ $device ] ) ? $all_value['suffix'][ $device ] : ( isset( $all_value['suffix'] ) ? $all_value['suffix'] : $suffix );
				}

				return sprintf( ' %s: %s%s;', $css_prop, $value, $suffix );
			//Letter spacing has a legacy value of non-responsive which we need to take into consideration.
			case Config::CSS_PROP_LETTER_SPACING:
				return sprintf( ' %s: %spx;', $css_prop, $value );
			case Config::CSS_PROP_CUSTOM_BTN_TYPE:
				if ( $value !== 'outline' ) {
					return 'border:none;';
				}

				return "border:1px solid;";
			case Config::CSS_PROP_FONT_WEIGHT:
				if ( isset( $meta['font'] ) ) {
					$font = strpos( $meta['font'], 'mods_' ) === 0 ? Mods::get( str_replace( 'mods_', '', $meta['font'] ) ) : $meta['font'];
					Font_Manager::add_google_font( $font, strval( $value ) );
				}

				return sprintf( ' %s: %s;', $css_prop, intval( $value ) );
			case Config::CSS_PROP_FONT_FAMILY:
				if ( $value === 'default' ) {
					return '';
				}
				Font_Manager::add_google_font( $value );

				return sprintf( ' %s: %s, var(--nv-fallback-ff);', $css_prop, $value );
			case Config::CSS_PROP_TEXT_TRANSFORM:
			case Config::CSS_PROP_BOX_SHADOW:
			case Config::CSS_PROP_MIX_BLEND_MODE:
			case Config::CSS_PROP_OPACITY:
			case Config::CSS_PROP_GRID_TEMPLATE_COLS:
				return sprintf( ' %s: %s;', $css_prop, $value );
			default:
				$is_font_family_var = strpos( strtolower( $css_prop ), 'fontfamily' ) > - 1;

				if ( $is_font_family_var ) {
					Font_Manager::add_google_font( $value );

					$value = self::format_font_family_value( $value );
				}

				if ( isset( $meta['directional-prop'] ) ) {
					return self::transform_directional_prop( $meta, $device, $value, $css_prop, $meta['directional-prop'] );
				}

				$suffix = self::get_suffix( $meta, $device, $value, $css_prop );

				return sprintf( ' %s: %s%s;', $css_prop, $value, $suffix );
		}
	}

	/**
	 * Get suffix for generic settings.
	 *
	 * @param array $meta Meta array.
	 * @param string $device Current device.
	 * @param mixed $value Value.
	 *
	 * @return string
	 *
	 * @since 3.0.0
	 */
	public static function get_suffix( $meta, $device, $value, $css_prop ) {
		$suffix = isset( $meta[ Dynamic_Selector::META_SUFFIX ] ) ? $meta[ Dynamic_Selector::META_SUFFIX ] : '';

		// If not responsive, most controls use 'unit' key inside value.
		if ( ! isset( $meta['is_responsive'] ) || $meta['is_responsive'] === false ) {
			$suffix = isset( $value['unit'] ) ? $value['unit'] : $suffix;
		}

		// If responsive, try to find the suffix.
		if ( isset( $meta[ Dynamic_Selector::META_IS_RESPONSIVE ] ) && $meta[ Dynamic_Selector::META_IS_RESPONSIVE ] ) {
			$all_value = Mods::get( $meta['key'] );
			$suffix    = isset( $all_value['suffix'][ $device ] ) ? $all_value['suffix'][ $device ] : ( isset( $all_value['suffix'] ) ? $all_value['suffix'] : $suffix );
		}

		if ( $suffix === 'responsive_unit' ) {
			$suffix = self::get_unit_responsive( $meta, $device );
		}

		if ( $suffix === 'responsive_suffix' ) {
			$suffix = self::get_suffix_responsive( $meta, $device );
		}

		// Enqueue any google fonts we might be missing.
		if ( isset ( $meta['font'] ) ) {
			$font = strpos( $meta['font'], 'mods_' ) === 0 ? Mods::get( str_replace( 'mods_', '', $meta['font'] ) ) : $meta['font'];
			Font_Manager::add_google_font( $font, strval( $value ) );
		}

		return $suffix === '—' ? '' : $suffix;
	}

	/**
	 * Transforms the directional properties.
	 *
	 * @param array $meta Meta array.
	 * @param string $device Current device.
	 * @param array|int $value Value.
	 * @param string $css_prop Css Property.
	 * @param string $type Type of directional property.
	 *
	 * @return string
	 */
	public static function transform_directional_prop( $meta, $device, $value, $css_prop, $type ) {
		$suffix   = self::get_suffix( $meta, $device, $value, $css_prop );
		$suffix   = $suffix ? $suffix : 'px';
		$template = '';

		// Make sure that this is directional, even if an int value is provided.
		if ( is_int( $value ) ) {
			$directions = Config::$directional_keys;
			$value      = array_fill_keys( $directions, $value );
		}

		// If we still don't have an array. Make sure to drop this setting.
		if ( ! is_array( $value ) ) {
			return '';
		}

		// Directional array without any other keys than the actual directions.
		$filtered = array_filter( $value, function ( $key ) {
			return in_array( $key, Config::$directional_keys, true );
		}, ARRAY_FILTER_USE_KEY );

		if ( count( array_unique( $filtered ) ) === 1 ) {

			if ( neve_value_is_zero( $value['top'] ) ) {
				$suffix = '';
			}

			if ( empty( $value['top'] ) && ! neve_value_is_zero( $value['top'] ) ) {
				return '';
			}

			$template .= $value['top'] . $suffix;

			return $css_prop . ':' . $template . ';';
		}

		if ( count( array_unique( $filtered ) ) === 2 && $value['top'] === $value['bottom'] && $value['right'] === $value['left'] ) {

			if ( neve_value_is_zero( $value['top'] ) && neve_value_is_zero( $value['right'] ) ) {
				return '';
			}

			$top_suffix   = neve_value_is_zero( $value['top'] ) ? '' : $suffix;
			$right_suffix = neve_value_is_zero( $value['right'] ) ? '' : $suffix;

			$template .= $value['top'] . $top_suffix . ' ' . $value['right'] . $right_suffix;

			return $css_prop . ':' . $template . ';';
		}

		foreach ( Config::$directional_keys as $direction ) {
			if ( ! isset( $value[ $direction ] ) || neve_value_is_zero( $value[ $direction ] ) ) {
				$template .= '0 ';

				continue;
			}
			$template .= $value[ $direction ] . $suffix . ' ';
		}

		if ( empty( $template ) ) {
			return '';
		}

		$template = trim( $template ) . ';';

		return $css_prop . ':' . $template . ';';
	}

	/**
	 * Format the font family value.
	 *
	 * @param string $value the font family value.
	 */
	public static function format_font_family_value( $value ) {
		// At some point we were setting the DB values with quotes and removed that.
		// Make sure we drop the slashes and quotes.
		$value = str_replace( [ '"', '\\' ], '', $value );

		if ( strpos( $value, ',' ) !== false ) {
			$value = explode( ',', $value );

			$value = array_map( 'self::quote_font_family', $value );

			return join( ',', $value );
		}

		return self::quote_font_family( $value );
	}

	/**
	 * Strip side spaces wrap font family in quotes.
	 *
	 * @param string $family the font family.
	 *
	 * @return string
	 */
	private static function quote_font_family( $family ) {
		// Make sure we don't have whitespace.
		$family = trim( $family );
		// Remove quotes. Because of previously faulty fix.
		$family = trim( $family, '"' );
		if ( strpos( $family, ' ' ) === false ) {
			return $family;
		}

		return '"' . $family . '"';
	}
}
