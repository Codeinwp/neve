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
			($css_prop),
			(100 - $value),
			isset( $meta[ Dynamic_Selector::META_SUFFIX ] ) ? $meta[ Dynamic_Selector::META_SUFFIX ] : 'px'
		);
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
		if ( isset( $meta[ 'filter' ] ) ) {
			if ( is_callable( $meta[ 'filter' ] ) ) {
				return call_user_func_array( $meta[ 'filter' ], [ $css_prop, $value, $meta, $device ] );
			}
			if ( method_exists( __CLASS__, $meta[ 'filter' ] ) ) {
				return call_user_func_array( [ __CLASS__, $meta[ 'filter' ] ], [ $css_prop, $value, $meta, $device ] );
			}

			return '';
		}


		switch ( $css_prop ) {
			case Config::CSS_PROP_BACKGROUND_COLOR:
			case Config::CSS_PROP_COLOR:
			case Config::CSS_PROP_FILL_COLOR:
			case Config::CSS_PROP_BORDER_COLOR:
				$mode = (false === strpos( $value, 'rgba' )) ? 'hex' : 'rgba';
				$is_var = (strpos( $value, 'var' ) !== false);

				if ( $mode === 'hex' && ! $is_var ) {
					$value = strpos( $value, "#" ) === 0 ? $value : '#' . $value;
				}

				return sprintf( "%s: %s%s;", ($css_prop), neve_sanitize_colors( $value ), isset( $meta[ 'important' ] ) && $meta[ 'important' ] ? '!important' : '' );
				break;
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
					$all_value = Mods::get( $meta[ 'key' ], isset( $meta[ Dynamic_Selector::META_DEFAULT ] ) ? $meta[ Dynamic_Selector::META_DEFAULT ] : null );

					$suffix = isset( $all_value[ 'suffix' ] ) ? $all_value[ 'suffix' ][ $device ] : (isset( $all_value[ 'suffix' ] ) ? $all_value[ 'suffix' ] : 'px');;
				}

				return sprintf( "%s: %s%s;",
					($css_prop),
					($value),
					$suffix
				);
				break;
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
					$all_value = Mods::get( $meta['key'], isset( $meta[ Dynamic_Selector::META_DEFAULT ] ) ? $meta[ Dynamic_Selector::META_DEFAULT ] : null );
					$suffix    = 'px';
					if ( isset( $all_value[ $device . '-unit' ] ) ) {
						$suffix = $all_value[ $device . '-unit' ];
					} elseif ( isset( $all_value['unit'] ) ) {
						$suffix = $all_value['unit'];
					}
				}
				$non_empty_values = array_filter( $value, 'strlen' );
				if ( count( $non_empty_values ) === 4 ) {
					return sprintf( "%s:%s%s %s%s %s%s %s%s;",
						$css_prop,
						(int) $value[ 'top' ],
						$suffix,
						(int) $value[ 'right' ],
						$suffix,
						(int) $value[ 'bottom' ],
						$suffix,
						(int) $value[ 'left' ],
						$suffix
					);
				}
				$rule = '';
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

				if( isset( $non_empty_values['unit'] ) ) {
					unset ($non_empty_values['unit']);
				}

				foreach ( $non_empty_values as $position => $position_value ) {
					$rule .= sprintf( "%s:%s%s;",
						sprintf( (is_array( $patterns[ $css_prop ] ) ? $patterns[ $css_prop ][ $position ] : $patterns[ $css_prop ]), $position ),
						(int) $position_value,
						$suffix
					);
				}

				return $rule;
				break;
			//Line height uses an awkward format saved, and we can't define it as responsive because we would need to use the suffix part.
			case Config::CSS_PROP_LINE_HEIGHT:
			case Config::CSS_PROP_FONT_SIZE:

				$suffix = isset( $meta[ Dynamic_Selector::META_SUFFIX ] ) ? $meta[ Dynamic_Selector::META_SUFFIX ] : 'em';
				// We consider the provided suffix as default, in case that we have a responsive setting with responsive suffix.
				if ( isset( $meta[ Dynamic_Selector::META_IS_RESPONSIVE ] ) && $meta[ Dynamic_Selector::META_IS_RESPONSIVE ] ) {
					$all_value = Mods::get( $meta[ 'key' ] );
					$suffix = isset( $all_value[ 'suffix' ][ $device ] ) ? $all_value[ 'suffix' ][ $device ] : (isset( $all_value[ 'suffix' ] ) ? $all_value[ 'suffix' ] : $suffix);
				}

				return sprintf( ' %s: %s%s; ', $css_prop, $value, $suffix );
				break;
			//Letter spacing has a legacy value of non-responsive which we need to take into consideration.
			case Config::CSS_PROP_LETTER_SPACING:
				return sprintf( ' %s: %spx; ', $css_prop, $value );
				break;
			case Config::CSS_PROP_CUSTOM_BTN_TYPE:
				if ( $value !== 'outline' ) {
					return 'border:none;';
				}

				return "border:1px solid;";
				break;
			case Config::CSS_PROP_FONT_WEIGHT:
				if ( isset( $meta[ 'font' ] ) ) {
					$font = strpos( $meta[ 'font' ], 'mods_' ) === 0 ? Mods::get( str_replace( 'mods_', '', $meta[ 'font' ] ) ) : $meta[ 'font' ];
					Font_Manager::add_google_font( $font, strval( $value ) );
				}

				return sprintf( ' %s: %s;', $css_prop, intval( $value ) );
				break;
			case Config::CSS_PROP_FONT_FAMILY:
				if ( $value === 'default' ) {
					return '';
				}
				Font_Manager::add_google_font( $value );

				return sprintf( ' %s: %s, var(--nv-fallback-ff); ', $css_prop, $value );

				break;
			case Config::CSS_PROP_TEXT_TRANSFORM:
			case Config::CSS_PROP_BOX_SHADOW:
				return sprintf( ' %s: %s; ', $css_prop, $value );
				break;
		}

		return '';
	}
}
