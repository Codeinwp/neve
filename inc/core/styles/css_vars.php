<?php
/**
 * CSS Variables trait
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;

/**
 * Trait Css_Vars
 *
 * @since 3.0.0
 */
trait Css_Vars {
	/**
	 * Get container rules.
	 *
	 * @return array[]
	 */
	public function get_container_rules() {
		return [
			'--container' => [
				Dynamic_Selector::META_KEY           => Config::MODS_CONTAINER_WIDTH,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
				Dynamic_Selector::META_DEFAULT       => '{ "mobile": 748, "tablet": 992, "desktop": 1170 }',
			],
		];
	}

	/**
	 * Get button rules.
	 *
	 * @return array
	 */
	public function get_button_rules() {
		$mod_key_primary   = Config::MODS_BUTTON_PRIMARY_STYLE;
		$default_primary   = neve_get_button_appearance_default();
		$mod_key_secondary = Config::MODS_BUTTON_SECONDARY_STYLE;
		$default_secondary = neve_get_button_appearance_default( 'secondary' );

		$rules = [
			'--primaryBtnBg'             => [
				Dynamic_Selector::META_KEY => $mod_key_primary . '.background',
			],
			'--secondaryBtnBg'           => [
				Dynamic_Selector::META_KEY => $mod_key_secondary . '.background',
			],
			'--primaryBtnHoverBg'        => [
				Dynamic_Selector::META_KEY => $mod_key_primary . '.backgroundHover',
			],
			'--secondaryBtnHoverBg'      => [
				Dynamic_Selector::META_KEY => $mod_key_secondary . '.backgroundHover',
			],
			'--primaryBtnColor'          => [
				Dynamic_Selector::META_KEY => $mod_key_primary . '.text',
			],
			'--secondaryBtnColor'        => [
				Dynamic_Selector::META_KEY => $mod_key_secondary . '.text',
			],
			'--primaryBtnHoverColor'     => [
				Dynamic_Selector::META_KEY => $mod_key_primary . '.textHover',
			],
			'--secondaryBtnHoverColor'   => [
				Dynamic_Selector::META_KEY => $mod_key_secondary . '.textHover',
			],
			'--primaryBtnBorderRadius'   => [
				Dynamic_Selector::META_KEY    => $mod_key_primary . '.borderRadius',
				Dynamic_Selector::META_SUFFIX => 'px',
				'directional-prop'            => Config::CSS_PROP_BORDER_RADIUS,
			],
			'--secondaryBtnBorderRadius' => [
				Dynamic_Selector::META_KEY    => $mod_key_secondary . '.borderRadius',
				Dynamic_Selector::META_SUFFIX => 'px',
				'directional-prop'            => Config::CSS_PROP_BORDER_RADIUS,
			],
		];


		$primary_values   = get_theme_mod( $mod_key_primary, $default_primary );
		$secondary_values = get_theme_mod( $mod_key_secondary, $default_secondary );

		// Border Width
		if ( isset( $primary_values['type'] ) && $primary_values['type'] === 'outline' ) {
			$rules['--primaryBtnBorderWidth'] = [
				Dynamic_Selector::META_KEY    => $mod_key_primary . '.borderWidth',
				Dynamic_Selector::META_SUFFIX => 'px',
				'directional-prop'            => Config::CSS_PROP_BORDER_WIDTH,
			];
		}
		if ( isset( $secondary_values['type'] ) && $secondary_values['type'] === 'outline' ) {
			$rules['--secondaryBtnBorderWidth'] = [
				Dynamic_Selector::META_KEY    => $mod_key_secondary . '.borderWidth',
				Dynamic_Selector::META_SUFFIX => 'px',
				'directional-prop'            => Config::CSS_PROP_BORDER_WIDTH,
			];
		}

		$mod_key_primary       = Config::MODS_BUTTON_PRIMARY_PADDING;
		$default_primary       = Mods::get_alternative_mod_default( Config::MODS_BUTTON_PRIMARY_PADDING );

		$rules['--btnPadding'] = [
			Dynamic_Selector::META_KEY           => $mod_key_primary,
			Dynamic_Selector::META_DEFAULT       => $default_primary,
			Dynamic_Selector::META_IS_RESPONSIVE => true,
			Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) {
				$mod_key_primary = Config::MODS_BUTTON_PRIMARY_STYLE;
				$default_primary = neve_get_button_appearance_default();

				$mod_key_secondary = Config::MODS_BUTTON_SECONDARY_STYLE;
				$default_secondary = neve_get_button_appearance_default( 'secondary' );

				$values   = [
					'primary'   => get_theme_mod( $mod_key_primary, $default_primary ),
					'secondary' => get_theme_mod( $mod_key_secondary, $default_secondary ),
				];
				$paddings = [
					'primary'   => $value,
					'secondary' => $value,
				];
				foreach ( $values as $btn_type => $appearance_values ) {
					if ( ! isset( $appearance_values['type'] ) || $appearance_values['type'] !== 'outline' ) {
						continue;
					}
					$border_width = $appearance_values['borderWidth'];

					foreach ( $paddings[ $btn_type ] as $direction => $padding_value ) {
						if ( ! isset( $border_width[ $direction ] ) || absint( $border_width[ $direction ] ) === 0 ) {
							continue;
						}
						if(  ! is_numeric( $padding_value ) ){
							continue;
						}
						$paddings[ $btn_type ][ $direction ] = $padding_value - $border_width[ $direction ];
					}
				}
				$final_value_default   = Css_Prop::transform_directional_prop( $meta, $device, $value, '--btnPadding', Config::CSS_PROP_PADDING );
				$final_value_primary   = Css_Prop::transform_directional_prop( $meta, $device, $paddings['primary'], '--primaryBtnPadding', Config::CSS_PROP_PADDING );
				$final_value_secondary = Css_Prop::transform_directional_prop( $meta, $device, $paddings['secondary'], '--secondaryBtnPadding', Config::CSS_PROP_PADDING );

				return $final_value_default . $final_value_primary . $final_value_secondary;
			},
			'directional-prop'                   => Config::CSS_PROP_PADDING,
		];

		$mod_key_primary             = Config::MODS_BUTTON_TYPEFACE;
		$rules['--btnFs']            = [
			Dynamic_Selector::META_KEY           => $mod_key_primary . '.fontSize',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
		];
		$rules['--btnLineHeight']    = [
			Dynamic_Selector::META_KEY           => $mod_key_primary . '.lineHeight',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
		];
		$rules['--btnLetterSpacing'] = [
			Dynamic_Selector::META_KEY           => $mod_key_primary . '.letterSpacing',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
			Dynamic_Selector::META_SUFFIX        => 'px',
		];
		$rules['--btnTextTransform'] = [
			Dynamic_Selector::META_KEY           => $mod_key_primary . '.textTransform',
			Dynamic_Selector::META_IS_RESPONSIVE => false,
		];
		$rules['--btnFontWeight']    = [
			Dynamic_Selector::META_KEY => $mod_key_primary . '.fontWeight',
		];

		return $rules;
	}

	/**
	 * Get the common typography rules
	 *
	 * @retun array
	 */
	public function get_typography_rules() {
		$default = Mods::get_alternative_mod_default( Config::MODS_TYPEFACE_GENERAL );
		$mod_key = Config::MODS_TYPEFACE_GENERAL;

		$rules = [
			'--bodyFontFamily'     => [
				Dynamic_Selector::META_KEY     => Config::MODS_FONT_GENERAL,
				Dynamic_Selector::META_DEFAULT => Mods::get_alternative_mod_default( Config::MODS_FONT_GENERAL ),
			],
			'--bodyFontSize'       => [
				Dynamic_Selector::META_KEY           => $mod_key . '.fontSize',
				Dynamic_Selector::META_DEFAULT       => $default['fontSize'],
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
			'--bodyLineHeight'     => [
				Dynamic_Selector::META_KEY           => $mod_key . '.lineHeight',
				Dynamic_Selector::META_DEFAULT       => $default['lineHeight'],
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => '',
			],
			'--bodyLetterSpacing'  => [
				Dynamic_Selector::META_KEY           => $mod_key . '.letterSpacing',
				Dynamic_Selector::META_DEFAULT       => $default['letterSpacing'],
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
			'--bodyFontWeight'     => [
				Dynamic_Selector::META_KEY     => $mod_key . '.fontWeight',
				Dynamic_Selector::META_DEFAULT => $default['fontWeight'],
				'font'                         => 'mods_' . Config::MODS_FONT_HEADINGS,
			],
			'--bodyTextTransform'  => [
				Dynamic_Selector::META_KEY => $mod_key . '.textTransform',
			],
			'--headingsFontFamily' => [
				Dynamic_Selector::META_KEY => Config::MODS_FONT_HEADINGS,
			],
		];
		foreach ( neve_get_headings_selectors() as $id => $heading_selector ) {
			$composed_key = sprintf( 'neve_%s_typeface_general', $id );
			$mod_key      = $composed_key;
			$default      = Mods::get_alternative_mod_default( $composed_key );

			$rules[ '--' . $id . 'FontSize' ] = [
				Dynamic_Selector::META_KEY           => $mod_key . '.fontSize',
				Dynamic_Selector::META_DEFAULT       => $default['fontSize'],
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			];

			$rules[ '--' . $id . 'FontWeight' ] = [
				Dynamic_Selector::META_KEY     => $mod_key . '.fontWeight',
				Dynamic_Selector::META_DEFAULT => $default['fontWeight'],
				'font'                         => 'mods_' . Config::MODS_FONT_HEADINGS,
			];

			$rules[ '--' . $id . 'LineHeight' ] = [
				Dynamic_Selector::META_KEY           => $mod_key . '.lineHeight',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => $default['lineHeight'],
				Dynamic_Selector::META_SUFFIX        => '',
			];

			$rules[ '--' . $id . 'LetterSpacing' ] = [
				Dynamic_Selector::META_KEY           => $mod_key . '.letterSpacing',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => $default['letterSpacing'],
			];

			$rules[ '--' . $id . 'TextTransform' ] = [
				Dynamic_Selector::META_KEY     => $mod_key . '.textTransform',
				Dynamic_Selector::META_DEFAULT => $default['textTransform'],
			];
		}

		return $rules;
	}

}
