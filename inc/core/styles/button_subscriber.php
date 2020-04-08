<?php


namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;

/**
 * Class Button_Subscriber
 * @package Neve\Core\Styles
 */
class Button_Subscriber extends Mod_Subscriber {
	const BACKGROUND = 'background';
	const TEXT = 'text';
	const BACKGROUND_HOVER = 'backgroundHover';
	const TEXT_HOVER = 'textHover';
	const BORDER_RADIUS = 'borderRadius';
	const TYPE = 'type';
	const BORDER_WIDTH = 'borderWidth';

	/**
	 * Generate CSS for the content area.
	 *
	 * @param string $css_prop
	 * @param string $context
	 *
	 * @return string|void
	 */
	protected function transform( $css_prop, $context ) {
		$value = $this->get_value();

		switch ( $context ) {
			case self::TEXT:
			case self::TEXT_HOVER:
				if ( ! isset( $value[ $context ] ) || empty( $value[ $context ] ) ) {
					return '';
				}

				return sprintf( "%s:%s;", $css_prop, sanitize_hex_color( $value[ $context ] ) );
				break;
			case self::BACKGROUND:
			case self::BACKGROUND_HOVER:
				if ( ! array_key_exists( $context, $value ) ) {
					return '';
				}
				$value[ $context ] = $value[ $context ] ? sanitize_hex_color( $value[ $context ] ) : 'transparent';

				return sprintf( "%s:%s;", $css_prop, $value[ $context ] );
				break;
			case self::BORDER_RADIUS:
				if ( ! isset( $value[ self::BORDER_RADIUS ] ) ) {
					return '';
				}
				if ( ! is_array( $value[ self::BORDER_RADIUS ] ) ) {
					return sprintf( "%s:%spx;", $css_prop, absint( $value[ self::BORDER_RADIUS ] ) );
				}
				$rules     = '';
				$positions = [
					'top'    => Config::CSS_PROP_BORDER_RADIUS_TOP_LEFT,
					'right'  => Config::CSS_PROP_BORDER_RADIUS_TOP_RIGHT,
					'bottom' => Config::CSS_PROP_BORDER_RADIUS_BOTTOM_RIGHT,
					'left'   => Config::CSS_PROP_BORDER_RADIUS_BOTTOM_LEFT,
				];
				foreach ( $value[ self::BORDER_RADIUS ] as $position => $value ) {
					$rules .= sprintf( "%s:%spx;", $positions[ $position ], $value );
				}

				return $rules;
				break;
			case self::TYPE:
				if ( $value[ self::TYPE ] !== 'outline' ) {
					return 'border:none;';
				}

				return Config::CSS_PROP_BORDER . ":1px solid;";
				break;
			case self::BORDER_WIDTH:
				if ( $value[ self::TYPE ] !== 'outline' ) {
					return '';
				}
				if ( ! is_array( $value[ self::BORDER_WIDTH ] ) ) {
					return sprintf( "%s:%spx;", $css_prop, absint( $value[ self::BORDER_WIDTH ] ) );
				}
				$rules = 'border-style: solid;';

				$rules .= sprintf( "border-width:%spx %spx %spx %spx;",
					$value[ self::BORDER_WIDTH ]['top'],
					$value[ self::BORDER_WIDTH ]['right'],
					$value[ self::BORDER_WIDTH ]['bottom'],
					$value[ self::BORDER_WIDTH ]['left']
				);


				return $rules;
				break;
		}

		return '';

	}
}
