<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views\Inline;

/**
 * Class Buttons
 *
 * @package Neve\Views\Inline
 */
class Buttons extends Base_Inline {
	/**
	 * Primary button setup.
	 *
	 * @var array
	 */
	private $primary_setup;

	/**
	 * Secondary button setup.
	 *
	 * @var array
	 */
	private $secondary_button;

	/**
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		$this->primary_setup    = get_theme_mod( 'neve_button_appearance', neve_get_button_appearance_default() );
		$this->secondary_button = get_theme_mod( 'neve_secondary_button_appearance', neve_get_button_appearance_default( 'secondary_button' ) );

		$this->add_primary_button_style();
		$this->add_secondary_button_style();
		$this->add_paddings();
	}


	/**
	 * Add buttons color.
	 */
	private function add_primary_button_style() {
		if ( array_key_exists( 'background', $this->primary_setup ) ) {
			$color_setup = array(
				'color'        => array(
					'css_prop'  => 'color',
					'selectors' => '.nv-tags-list a',
				),
				'border-color' => array(
					'css_prop'  => 'border-color',
					'selectors' => '.nv-tags-list a',
				),
				'background'   => array(
					'css_prop'  => 'background-color',
					'selectors' => '
				.button.button-primary, 
				button, input[type=button], 
				.btn, input[type="submit"], 
				/* Buttons in navigation */
				ul[id^="nv-primary-navigation"] li.button.button-primary > a, 
				.menu li.button.button-primary > a',
				),
			);
			$this->add_color( apply_filters( 'neve_button_color_filter', $color_setup ), $this->primary_setup['background'] ? sanitize_hex_color( $this->primary_setup['background'] ) : 'transparent' );
		}

		if ( ! empty( $this->primary_setup['text'] ) ) {
			$color_setup = array(
				'color' => array(
					'css_prop'  => 'color',
					'selectors' => '
				.button.button-primary, 
				button, input[type=button], 
				.btn, input[type="submit"], 
				/* Buttons in navigation */
				ul[id^="nv-primary-navigation"] li.button.button-primary > a, 
				.menu li.button.button-primary > a',
				),
			);
			$this->add_color( apply_filters( 'neve_button_text_color_filter', $color_setup ), sanitize_hex_color( $this->primary_setup['text'] ) );
		}

		if ( array_key_exists( 'backgroundHover', $this->primary_setup ) ) {
			$color_setup = array(
				'border-color' => array(
					'css_prop'  => 'border-color',
					'selectors' => '.nv-tags-list a:hover',
				),
				'background'   => array(
					'css_prop'  => 'background-color',
					'selectors' => '
				.button.button-primary:hover, 
				.nv-tags-list a:hover,
				ul[id^="nv-primary-navigation"] li.button.button-primary > a:hover, 
				.menu li.button.button-primary > a:hover',
				),
			);
			$this->add_color( apply_filters( 'neve_button_hover_color_filter', $color_setup ), ! empty( $this->primary_setup['backgroundHover'] ) ? sanitize_hex_color( $this->primary_setup['backgroundHover'] ) : 'transparent' );
		}

		if ( ! empty( $this->primary_setup['textHover'] ) ) {
			$color_setup = array(
				'color' => array(
					'css_prop'  => 'color',
					'selectors' => '
				.button.button-primary:hover, 
				.nv-tags-list a:hover,
				ul[id^="nv-primary-navigation"] li.button.button-primary > a:hover, 
				.menu li.button.button-primary > a:hover',
				),
			);
			$this->add_color( apply_filters( 'neve_button_hover_text_color_filter', $color_setup ), sanitize_hex_color( $this->primary_setup['textHover'] ) );
		}

		if ( isset( $this->primary_setup['borderRadius'] ) ) {
			$setup = array(
				array(
					'css_prop' => 'border-radius',
					'value'    => absint( $this->primary_setup['borderRadius'] ),
					'suffix'   => 'px',
				),
			);
			$this->add_style(
				$setup,
				apply_filters(
					'neve_button_border_radius_selectors_filter',
					'.button.button-primary, 
				button, input[type=button], 
				.btn, input[type="submit"]:not(.search-submit), 
				/* Buttons in navigation */
				ul[id^="nv-primary-navigation"] li.button.button-primary > a, 
				.menu li.button.button-primary > a'
				)
			);
		}

		if ( $this->primary_setup['type'] === 'outline' ) {
			$setup = [
				[
					'css_prop' => 'border',
					'value'    => '1px solid',
				],
			];

			if ( ! empty( $this->primary_setup['borderWidth'] ) ) {
				$setup[] = [
					'css_prop' => 'border-width',
					'value'    => $this->primary_setup['borderWidth'],
					'suffix'   => 'px',
				];
			}
			$this->add_style(
				$setup,
				apply_filters(
					'neve_button_border_radius_selectors_filter',
					'.button.button-primary, 
				button, input[type=button], 
				.btn, input[type="submit"]:not(.search-submit), 
				/* Buttons in navigation */
				ul[id^="nv-primary-navigation"] li.button.button-primary > a, 
				.menu li.button.button-primary > a'
				)
			);
		}
	}

	/**
	 * Add secondary buttons color.
	 */
	private function add_secondary_button_style() {
		if ( ! empty( $this->secondary_button['background'] ) ) {
			$color_setup = array(
				'background-color' => array(
					'css_prop'  => 'background-color',
					'selectors' => '.button.button-secondary, #comments input[type="submit"], .cart-off-canvas .button.nv-close-cart-sidebar',
				),
			);
			$this->add_color( apply_filters( 'neve_secondary_button_color_filter', $color_setup ), sanitize_hex_color( $this->secondary_button['background'] ) );
		}

		if ( ! empty( $this->secondary_button['backgroundHover'] ) ) {
			$color_setup = array(
				'color' => array(
					'css_prop'  => 'background-color',
					'selectors' => '.button.button-secondary:hover, #comments input[type="submit"]:hover, .cart-off-canvas .button.nv-close-cart-sidebar:hover',
				),
			);
			$this->add_color( apply_filters( 'neve_secondary_button_hover_color_filter', $color_setup ), sanitize_hex_color( $this->secondary_button['backgroundHover'] ) );
		}

		if ( ! empty( $this->secondary_button['text'] ) ) {
			$color_setup = array(
				'color'        => array(
					'css_prop'  => 'color',
					'selectors' => '
				.button.button-secondary, #comments input[type="submit"], .cart-off-canvas .button.nv-close-cart-sidebar',
				),
				'border-color' => array(
					'css_prop'  => 'border-color',
					'selectors' => '.button.button-secondary, #comments input[type="submit"], .cart-off-canvas .button.nv-close-cart-sidebar',
				),
			);
			$this->add_color( apply_filters( 'neve_secondary_button_color_filter', $color_setup ), sanitize_hex_color( $this->secondary_button['text'] ) );
		}

		if ( ! empty( $this->secondary_button['textHover'] ) ) {
			$color_setup = array(
				'color'        => array(
					'css_prop'  => 'color',
					'selectors' => '
				.button.button-secondary:hover,  #comments input[type="submit"]:hover',
				),
				'border-color' => array(
					'css_prop'  => 'border-color',
					'selectors' => '.button.button-secondary:hover,  #comments input[type="submit"]:hover',
				),
			);
			$this->add_color( apply_filters( 'neve_secondary_button_hover_color_filter', $color_setup ), sanitize_hex_color( $this->secondary_button['textHover'] ) );
		}

		if ( isset( $this->secondary_button['borderRadius'] ) ) {
			$setup = array(
				array(
					'css_prop' => 'border-radius',
					'value'    => absint( $this->secondary_button['borderRadius'] ),
					'suffix'   => 'px',
				),
			);
			$this->add_style(
				$setup,
				apply_filters(
					'neve_secondary_button_border_radius_selectors_filter',
					'.button.button-secondary, #comments input[type="submit"]'
				)
			);
		}

		if ( $this->secondary_button['type'] === 'fill' ) {
			$this->add_style(
				[
					[
						'css_prop' => 'border',
						'value'    => 'none',
					],
				],
				apply_filters( 'neve_secondary_button_border_radius_selector_filter', '.button.button-secondary, #comments input[type="submit"]' )
			);
		}
		if ( $this->secondary_button['type'] === 'outline' ) {
			$setup = [
				[
					'css_prop' => 'border',
					'value'    => '1px solid',
				],
			];

			if ( ! empty( $this->secondary_button['borderWidth'] ) ) {
				$setup[] = [
					'css_prop' => 'border-width',
					'value'    => $this->secondary_button['borderWidth'],
					'suffix'   => 'px',
				];
			}
			$this->add_style(
				$setup,
				apply_filters(
					'neve_secondary_button_border_radius_selectors_filter',
					'.button.button-secondary, #comments input[type="submit"]'
				)
			);
		}
	}

	/**
	 * Add button paddings.
	 */
	private function add_paddings() {
		$paddings = array(
			'neve_button_padding'           => '.button.button-primary',
			'neve_secondary_button_padding' => '.button.button-secondary, #comments input[type="submit"]',
		);
		foreach ( $paddings as $theme_mod => $css_selectors ) {
			$padding = get_theme_mod( $theme_mod );
			if ( $padding !== false ) {
				$paddings = array(
					'top'    => array(
						'mobile'  => $padding['mobile']['top'],
						'tablet'  => $padding['tablet']['top'],
						'desktop' => $padding['desktop']['top'],
					),
					'right'  => array(
						'mobile'  => $padding['mobile']['right'],
						'tablet'  => $padding['tablet']['right'],
						'desktop' => $padding['desktop']['right'],
					),
					'bottom' => array(
						'mobile'  => $padding['mobile']['bottom'],
						'tablet'  => $padding['tablet']['bottom'],
						'desktop' => $padding['desktop']['bottom'],
					),
					'left'   => array(
						'mobile'  => $padding['mobile']['left'],
						'tablet'  => $padding['tablet']['left'],
						'desktop' => $padding['desktop']['left'],
					),
				);
				$settings = array();
				foreach ( $paddings as $padding_direction => $values ) {
					$settings[] =
						array(
							'css_prop' => 'padding-' . $padding_direction,
							'value'    => $values,
							'suffix'   => 'px',
						);
				}
				$this->add_responsive_style( $settings, apply_filters( 'neve_button_padding_selectors', $css_selectors, $theme_mod ) );
			}
		}
	}
}
