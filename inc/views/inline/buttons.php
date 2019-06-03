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
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'init', array( $this, 'migrate_colors' ) );
		$this->add_button_colors();
		$this->add_secondary_button_colors();
		$this->add_border_radius();
		$this->add_paddings();
	}

	/**
	 * Migrate old settings.
	 */
	public function migrate_colors() {
		if ( get_theme_mod( 'migrated_button_color', 'no' ) === 'yes' ) {
			return;
		}
		set_theme_mod( 'migrated_button_color', 'yes' );
		$old_color = get_theme_mod( 'neve_button_color' );
		if ( empty( $old_color ) ) {
			return;
		}
		set_theme_mod( 'neve_button_hover_color', $old_color );
	}

	/**
	 * Add buttons color.
	 */
	private function add_button_colors() {
		$color = get_theme_mod( 'neve_button_color' );
		if ( ! empty( $color ) ) {
			$color_setup = array(
				'color'        => array(
					'css_prop'  => 'color',
					'selectors' => '
				.nv-tags-list a',
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
			$this->add_color( apply_filters( 'neve_button_color_filter', $color_setup ), sanitize_hex_color( $color ) );
		}

		$text_color = get_theme_mod( 'neve_button_text_color' );
		if ( ! empty( $text_color ) ) {
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
			$this->add_color( apply_filters( 'neve_button_text_color_filter', $color_setup ), sanitize_hex_color( $text_color ) );
		}

		$hover_color = get_theme_mod( 'neve_button_hover_color' );
		if ( ! empty( $hover_color ) ) {
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
			$this->add_color( apply_filters( 'neve_button_hover_color_filter', $color_setup ), sanitize_hex_color( $hover_color ) );
		}

		$hover_text_color = get_theme_mod( 'neve_button_hover_text_color' );
		if ( ! empty( $hover_text_color ) ) {
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
			$this->add_color( apply_filters( 'neve_button_hover_text_color_filter', $color_setup ), sanitize_hex_color( $hover_text_color ) );
		}
	}

	/**
	 * Add secondary buttons color.
	 */
	private function add_secondary_button_colors() {
		$color = get_theme_mod( 'neve_secondary_button_color' );
		if ( ! empty( $color ) ) {
			$color_setup = array(
				'color'        => array(
					'css_prop'  => 'color',
					'selectors' => '
				.button.button-secondary, #comments input[type="submit"]',
				),
				'border-color' => array(
					'css_prop'  => 'border-color',
					'selectors' => '.button.button-secondary, #comments input[type="submit"]',
				),
			);
			$this->add_color( apply_filters( 'neve_secondary_button_color_filter', $color_setup ), sanitize_hex_color( $color ) );
		}

		$hover_color = get_theme_mod( 'neve_secondary_button_hover_color' );
		if ( ! empty( $hover_color ) ) {
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
			$this->add_color( apply_filters( 'neve_secondary_button_hover_color_filter', $color_setup ), sanitize_hex_color( $hover_color ) );
		}
	}

	/**
	 * Add buttons border radius.
	 */
	private function add_border_radius() {
		$primary_border_radius = get_theme_mod( 'neve_button_border_radius' );
		if ( $primary_border_radius !== false ) {
			$setup = array(
				array(
					'css_prop' => 'border-radius',
					'value'    => absint( $primary_border_radius ),
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

		$secondary_border_radius = get_theme_mod( 'neve_secondary_button_border_radius' );
		if ( $secondary_border_radius !== false ) {
			$setup = array(
				array(
					'css_prop' => 'border-radius',
					'value'    => absint( $secondary_border_radius ),
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
