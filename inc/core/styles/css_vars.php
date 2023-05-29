<?php
/**
 * CSS Variables trait
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Core\Traits\Theme_Mods;

/**
 * Trait Css_Vars
 *
 * @since 3.0.0
 */
trait Css_Vars {
	use Theme_Mods;

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
			'--primarybtnbg'             => [
				Dynamic_Selector::META_KEY => $mod_key_primary . '.background',
			],
			'--secondarybtnbg'           => [
				Dynamic_Selector::META_KEY => $mod_key_secondary . '.background',
			],
			'--primarybtnhoverbg'        => [
				Dynamic_Selector::META_KEY => $mod_key_primary . '.backgroundHover',
			],
			'--secondarybtnhoverbg'      => [
				Dynamic_Selector::META_KEY => $mod_key_secondary . '.backgroundHover',
			],
			'--primarybtncolor'          => [
				Dynamic_Selector::META_KEY => $mod_key_primary . '.text',
			],
			'--secondarybtncolor'        => [
				Dynamic_Selector::META_KEY => $mod_key_secondary . '.text',
			],
			'--primarybtnhovercolor'     => [
				Dynamic_Selector::META_KEY => $mod_key_primary . '.textHover',
			],
			'--secondarybtnhovercolor'   => [
				Dynamic_Selector::META_KEY => $mod_key_secondary . '.textHover',
			],
			'--primarybtnborderradius'   => [
				Dynamic_Selector::META_KEY    => $mod_key_primary . '.borderRadius',
				Dynamic_Selector::META_SUFFIX => 'px',
				'directional-prop'            => Config::CSS_PROP_BORDER_RADIUS,
			],
			'--secondarybtnborderradius' => [
				Dynamic_Selector::META_KEY    => $mod_key_secondary . '.borderRadius',
				Dynamic_Selector::META_SUFFIX => 'px',
				'directional-prop'            => Config::CSS_PROP_BORDER_RADIUS,
			],
		];


		$primary_values   = get_theme_mod( $mod_key_primary, $default_primary );
		$secondary_values = get_theme_mod( $mod_key_secondary, $default_secondary );

		// Button Shadow Primary
		if ( isset( $primary_values['useShadow'] ) && ! empty( $primary_values['useShadow'] ) ) {
			$rules['--primarybtnshadow'] = [
				Dynamic_Selector::META_KEY    => $mod_key_primary . '.shadowColor',
				Dynamic_Selector::META_DEFAULT       => 'none',
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) use ($primary_values) {
					$blur   = intval($primary_values['shadowProperties']['blur']);
					$width  = intval($primary_values['shadowProperties']['width']);
					$height = intval($primary_values['shadowProperties']['height']);

					return sprintf( '%s:%s;', $css_prop, sprintf('%spx %spx %spx %s;', $width, $height, $blur, $value ) );
				}
			];
		}

		// Button Shadow Primary Hover
		if ( isset( $primary_values['useShadowHover'] ) && ! empty( $primary_values['useShadowHover'] ) ) {
			$rules['--primarybtnhovershadow'] = [
				Dynamic_Selector::META_KEY    => $mod_key_primary . '.shadowColorHover',
				Dynamic_Selector::META_DEFAULT       => 'none',
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) use ($primary_values) {
					$blur   = intval($primary_values['shadowPropertiesHover']['blur']);
					$width  = intval($primary_values['shadowPropertiesHover']['width']);
					$height = intval($primary_values['shadowPropertiesHover']['height']);

					return sprintf( '%s:%s;', $css_prop, sprintf('%spx %spx %spx %s;', $width, $height, $blur, $value ) );
				}
			];
		}

		// Button Shadow Secondary
		if ( isset( $secondary_values['useShadow'] ) && ! empty( $secondary_values['useShadow'] ) ) {
			$rules['--secondarybtnshadow'] = [
				Dynamic_Selector::META_KEY    => $mod_key_secondary . '.shadowColor',
				Dynamic_Selector::META_DEFAULT       => 'none',
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) use ($secondary_values) {
					$blur   = intval($secondary_values['shadowProperties']['blur']);
					$width  = intval($secondary_values['shadowProperties']['width']);
					$height = intval($secondary_values['shadowProperties']['height']);

					return sprintf( '%s:%s;', $css_prop, sprintf('%spx %spx %spx %s;', $width, $height, $blur, $value ) );
				}
			];
		}

		// Button Shadow Secondary Hover
		if ( isset( $secondary_values['useShadowHover'] ) && ! empty( $secondary_values['useShadowHover'] ) ) {
			$rules['--secondarybtnhovershadow'] = [
				Dynamic_Selector::META_KEY    => $mod_key_secondary . '.shadowColorHover',
				Dynamic_Selector::META_DEFAULT       => 'none',
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) use ($secondary_values) {
					$blur   = intval($secondary_values['shadowPropertiesHover']['blur']);
					$width  = intval($secondary_values['shadowPropertiesHover']['width']);
					$height = intval($secondary_values['shadowPropertiesHover']['height']);

					return sprintf( '%s:%s;', $css_prop, sprintf('%spx %spx %spx %s;', $width, $height, $blur, $value ) );
				}
			];
		}

		// Border Width
		if ( isset( $primary_values['type'] ) && $primary_values['type'] === 'outline' ) {
			$rules['--primarybtnborderwidth'] = [
				Dynamic_Selector::META_KEY    => $mod_key_primary . '.borderWidth',
				Dynamic_Selector::META_SUFFIX => 'px',
				'directional-prop'            => Config::CSS_PROP_BORDER_WIDTH,
			];
		}
		if ( isset( $secondary_values['type'] ) && $secondary_values['type'] === 'outline' ) {
			$rules['--secondarybtnborderwidth'] = [
				Dynamic_Selector::META_KEY    => $mod_key_secondary . '.borderWidth',
				Dynamic_Selector::META_SUFFIX => 'px',
				'directional-prop'            => Config::CSS_PROP_BORDER_WIDTH,
			];
		}

		$mod_key_primary       = Config::MODS_BUTTON_PRIMARY_PADDING;
		$default_primary       = Mods::get_alternative_mod_default( Config::MODS_BUTTON_PRIMARY_PADDING );

		$rules['--btnpadding'] = [
			Dynamic_Selector::META_KEY           => $mod_key_primary,
			Dynamic_Selector::META_DEFAULT       => $default_primary,
			Dynamic_Selector::META_IS_RESPONSIVE => true,
			Dynamic_Selector::META_SUFFIX => 'responsive_unit',
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

						$suffix_css_prop = $btn_type === 'primary' ? '--primarybtnpadding' : '--secondarybtnpadding';
						$suffix =  Css_Prop::get_suffix( $meta, $device, $value, $suffix_css_prop );
						$paddings[ $btn_type ][ 'is_outline_button_padding' ] = true;
						$paddings[ $btn_type ][ $direction ]                  = 'calc(' . $padding_value . $suffix . ' - ' . $border_width[ $direction ] . 'px)';
					}
				}
				$final_value_default   = Css_Prop::transform_directional_prop( $meta, $device, $value, '--btnpadding', Config::CSS_PROP_PADDING );
				$final_value_primary   = Css_Prop::transform_directional_prop( $meta, $device, $paddings['primary'], '--primarybtnpadding', Config::CSS_PROP_PADDING );
				$final_value_secondary = Css_Prop::transform_directional_prop( $meta, $device, $paddings['secondary'], '--secondarybtnpadding', Config::CSS_PROP_PADDING );

				return $final_value_default . $final_value_primary . $final_value_secondary;
			},
			'directional-prop'                   => Config::CSS_PROP_PADDING,
		];

		$mod_key_primary             = Config::MODS_BUTTON_TYPEFACE;
		$rules['--btnfs']            = [
			Dynamic_Selector::META_KEY           => $mod_key_primary . '.fontSize',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
		];
		$rules['--btnlineheight']    = [
			Dynamic_Selector::META_KEY           => $mod_key_primary . '.lineHeight',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
		];
		$rules['--btnletterspacing'] = [
			Dynamic_Selector::META_KEY           => $mod_key_primary . '.letterSpacing',
			Dynamic_Selector::META_IS_RESPONSIVE => true,
			Dynamic_Selector::META_SUFFIX        => 'px',
		];
		$rules['--btntexttransform'] = [
			Dynamic_Selector::META_KEY           => $mod_key_primary . '.textTransform',
			Dynamic_Selector::META_IS_RESPONSIVE => false,
		];
		$rules['--btnfontweight']    = [
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
			'--bodyfontfamily'     => [
				Dynamic_Selector::META_KEY     => Config::MODS_FONT_GENERAL,
				Dynamic_Selector::META_DEFAULT => Mods::get_alternative_mod_default( Config::MODS_FONT_GENERAL ),
			],
			'--bodyfontsize'       => [
				Dynamic_Selector::META_KEY           => $mod_key . '.fontSize',
				Dynamic_Selector::META_DEFAULT       => $default['fontSize'],
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
			'--bodylineheight'     => [
				Dynamic_Selector::META_KEY           => $mod_key . '.lineHeight',
				Dynamic_Selector::META_DEFAULT       => $default['lineHeight'],
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => '',
			],
			'--bodyletterspacing'  => [
				Dynamic_Selector::META_KEY           => $mod_key . '.letterSpacing',
				Dynamic_Selector::META_DEFAULT       => $default['letterSpacing'],
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			],
			'--bodyfontweight'     => [
				Dynamic_Selector::META_KEY     => $mod_key . '.fontWeight',
				Dynamic_Selector::META_DEFAULT => $default['fontWeight'],
				'font'                         => 'mods_' . Config::MODS_FONT_HEADINGS,
			],
			'--bodytexttransform'  => [
				Dynamic_Selector::META_KEY => $mod_key . '.textTransform',
			],
			'--headingsfontfamily' => [
				Dynamic_Selector::META_KEY => Config::MODS_FONT_HEADINGS,
			],
		];
		foreach ( neve_get_headings_selectors() as $id => $heading_selector ) {

			$composed_key = sprintf( 'neve_%s_typeface_general', $id );
			$mod_key      = $composed_key;
			$default      = Mods::get_alternative_mod_default( $composed_key );

			$rules[ '--' . $id . 'fontfamily' ] = [
				Dynamic_Selector::META_KEY           => $this->get_mod_key_heading_fontfamily( $id )
			];

			$rules[ '--' . $id . 'fontsize' ] = [
				Dynamic_Selector::META_KEY           => $mod_key . '.fontSize',
				Dynamic_Selector::META_DEFAULT       => $default['fontSize'],
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_SUFFIX        => 'px',
			];

			$rules[ '--' . $id . 'fontweight' ] = [
				Dynamic_Selector::META_KEY     => $mod_key . '.fontWeight',
				Dynamic_Selector::META_DEFAULT => $default['fontWeight'],
				'font'                         => 'mods_' . Config::MODS_FONT_HEADINGS,
			];

			$rules[ '--' . $id . 'lineheight' ] = [
				Dynamic_Selector::META_KEY           => $mod_key . '.lineHeight',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => $default['lineHeight'],
				Dynamic_Selector::META_SUFFIX        => '',
			];

			$rules[ '--' . $id . 'letterspacing' ] = [
				Dynamic_Selector::META_KEY           => $mod_key . '.letterSpacing',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => $default['letterSpacing'],
				Dynamic_Selector::META_SUFFIX        => 'px',
			];

			$rules[ '--' . $id . 'texttransform' ] = [
				Dynamic_Selector::META_KEY     => $mod_key . '.textTransform',
				Dynamic_Selector::META_DEFAULT => $default['textTransform'],
			];
		}

		return $rules;
	}

}
