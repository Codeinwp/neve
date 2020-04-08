<?php
/**
 * Define size subscriber.
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Views\Font_Manager;

/**
 * Class Typeface_Subscriber
 * @package Neve\Core\Styles
 */
class Typeface_Subscriber extends Responsive_Subscriber {
	const FONT_SIZE = 'fontSize';
	const LINE_HEIGHT = 'lineHeight';
	const LETTER_SPACING = 'letterSpacing';
	const FONT_WEIGHT = 'fontWeight';
	const TEXT_TRANSFORM = 'textTransform';

	/**
	 * Typeface has a special settings map,
	 * which is not compatible with the one from Responsive_Subscriber.
	 *
	 * @return bool|mixed
	 */
	public function get_value() {
		return Mods::get( $this->key, $this->default_value );
	}

	/**
	 * Transform value into a CSS rule. Selectors should not be included.
	 *
	 * @param string $css_prop
	 * @param string $context
	 *
	 * @return string
	 */
	protected function transform( $css_prop, $context ) {
		$typeface = $this->get_value();

		switch ( $context ) {
			case self::FONT_SIZE:
				$font_size = isset( $typeface[ self::FONT_SIZE ] ) ? $typeface[ self::FONT_SIZE ] : '';
				if ( empty( $font_size ) ) {
					return '';
				}

				return sprintf( ' %s: %spx; ', $css_prop, $font_size[ $this->get_device() ] );
				break;
			case self::LINE_HEIGHT:
				$line_height = isset( $typeface[ self::LINE_HEIGHT ] ) ? $typeface[ self::LINE_HEIGHT ] : '';

				if ( empty( $line_height ) ) {
					return '';
				}

				return sprintf( ' %s: %s%s; ', $css_prop, $line_height[ $this->get_device() ], isset( $line_height['suffix'][ $this->get_device() ] ) ? $line_height['suffix'][ $this->get_device() ] : '' );

				break;
			case self::LETTER_SPACING:
				$letter_spacing = isset( $typeface[ self::LETTER_SPACING ] ) ? $typeface[ self::LETTER_SPACING ] : '';
				if ( empty( $letter_spacing ) ) {
					return '';
				}
				//Handle case when letter spacing was using a legacy value, not responsive.
				if ( ! is_array( $letter_spacing ) && $this->get_device() === self::MOBILE ) {
					return sprintf( ' %s: %spx; ', $css_prop, $letter_spacing );
				}
				if ( is_array( $letter_spacing ) ) {
					return sprintf( ' %s: %spx; ', $css_prop, $letter_spacing[ $this->get_device() ] );
				}
				break;
			case self::FONT_WEIGHT:
				// This is a non-responsive prop.
				if ( $this->get_device() !== self::MOBILE ) {
					return '';
				}
				$font_weight = isset( $typeface[ self::FONT_WEIGHT ] ) ? $typeface[ self::FONT_WEIGHT ] : '';
				if ( empty( $font_weight ) ) {
					return '';
				}

				return sprintf( ' %s: %s; ', $css_prop, $font_weight );
				break;
			case self::TEXT_TRANSFORM:
				// This is a non-responsive prop.
				if ( $this->get_device() !== self::MOBILE ) {
					return '';
				}
				$text_transform = isset( $typeface[ self::TEXT_TRANSFORM ] ) ? $typeface[ self::TEXT_TRANSFORM ] : '';
				if ( empty( $text_transform ) ) {
					return '';
				}

				return sprintf( ' %s: %s; ', $css_prop, $text_transform );
				break;
		}
		if ( $css_prop === Config::CSS_PROP_FONT_FAMILY && $this->get_device() === self::MOBILE ) {
			$font = Mods::get( $context );
			if ( empty( $font ) || $font === 'default' ) {
				return '';
			}

			Font_Manager::add_google_font( $font, isset( $typeface[ self::FONT_WEIGHT ] ) ? $typeface[ self::FONT_WEIGHT ] : '400' );

			return sprintf( ' %s: %s; ', $css_prop, $font );
		}

		return '';
	}
}
