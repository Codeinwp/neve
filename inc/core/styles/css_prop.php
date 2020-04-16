<?php


namespace Neve\Core\Styles;


use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Views\Font_Manager;
use Sabberworm\CSS\Property\Selector;

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


		switch ( $css_prop ) {
			case Config::CSS_PROP_BACKGROUND_COLOR:
			case Config::CSS_PROP_COLOR:
			case Config::CSS_PROP_BORDER_COLOR:
				return sprintf( "%s: %s;", ( $css_prop ), sanitize_hex_color( $value ) );
				break;
			case Config::CSS_PROP_MAX_WIDTH:
			case Config::CSS_PROP_WIDTH:
			case Config::CSS_PROP_FLEX_BASIS:
			case Config::CSS_PROP_HEIGHT:
				return sprintf( "%s: %s%s;",
					( $css_prop ),
					( $value ),
					isset( $meta[ Dynamic_Selector::META_SUFFIX ] ) ? $meta[ Dynamic_Selector::META_SUFFIX ] : 'px'
				);
				break;
			case Config::CSS_PROP_BORDER_RADIUS:
			case Config::CSS_PROP_BORDER_WIDTH:
			case Config::CSS_PROP_PADDING:
				$suffix = isset( $meta[ Dynamic_Selector::META_SUFFIX ] ) ? $meta[ Dynamic_Selector::META_SUFFIX ] : 'px';
				if ( ! is_array( $value ) ) {
					return sprintf( "%s:%s%s;",
						$css_prop,
						absint( $value ), $suffix );
				}

				return sprintf( "%s:%s%s %s%s %s%s %s%s;",
					$css_prop,
					absint( $value['top'] ),
					$suffix,
					absint( $value['right'] ),
					$suffix,
					absint( $value['bottom'] ),
					$suffix,
					absint( $value['left'] ),
					$suffix
				);
				break;
			//Line height uses an awkward format saved, and we can't define it as responsive because we would need to use the suffix part.
			case Config::CSS_PROP_LINE_HEIGHT:
			case Config::CSS_PROP_FONT_SIZE:
				$all_value = Mods::get( $meta['key'] );
				$suffix    = isset( $all_value['suffix'] ) ? $all_value['suffix'][ $device ] : ( isset( $value['suffix'] ) ? $value['suffix'] : 'em' );

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
				if ( isset( $meta['font'] ) ) {
					$font = strpos( $meta['font'], 'mods_' ) === 0 ? Mods::get( str_replace( 'mods_', '', $meta['font'] ) ) : $meta['font'];
					Font_Manager::add_google_font( $font, strval( $value ) );
				}

				return sprintf( ' %s: %s;', $css_prop, intval( $value ) );
				break;
			case Config::CSS_PROP_FONT_FAMILY:
				if ( $value === 'default' ) {
					return '';
				}
				Font_Manager::add_google_font( $value );

				return sprintf( ' %s: %s; ', $css_prop, $value );

				break;
				break;
			case Config::CSS_PROP_TEXT_TRANSFORM:
				return sprintf( ' %s: %s; ', $css_prop, $value );
				break;

		}

		return '';
	}
}
