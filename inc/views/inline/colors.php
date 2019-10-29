<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views\Inline;

/**
 * Class Colors
 *
 * @package Neve\Views\Inline
 */
class Colors extends Base_Inline {
	/**
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		$this->links_colors();
		$this->links_hover_colors();
		$this->add_text_color();
		$this->add_gutenberg_colors();
	}

	/**
	 * Add inline style for font families.
	 */
	private function links_colors() {
		$color = get_theme_mod( 'neve_link_color', false );
		if ( empty( $color ) ) {
			return;
		}
		$color_setup = array(
			'color'        => array(
				'css_prop'  => 'color',
				'selectors' => 'a',
			),
			'border-color' => array(
				'css_prop'  => 'border-color',
				'selectors' => '.nv-loader',
			),
		);

		$this->add_color( apply_filters( 'neve_link_color_filter', $color_setup ), sanitize_hex_color( $color ) );
		$this->add_style(
			array(
				array(
					'css_prop' => 'border-color',
					'value'    => 'transparent',
				),
			),
			'.caret-wrap',
			'desktop'
		);
	}

	/**
	 * Add links hover color.
	 */
	private function links_hover_colors() {
		$color = get_theme_mod( 'neve_link_hover_color', false );
		if ( empty( $color ) ) {
			return;
		}

		$color_setup = array(
			'color' => array(
				'css_prop'  => 'color',
				'selectors' => 'a:hover, a:focus',
			),
		);
		$this->add_color( apply_filters( 'neve_link_hover_color_filter', $color_setup ), sanitize_hex_color( $color ) );
	}

	/**
	 * Add text color.
	 */
	private function add_text_color() {
		$color = get_theme_mod( 'neve_text_color', false );
		if ( empty( $color ) ) {
			return;
		}
		$this->add_style(
			array(
				array(
					'css_prop' => 'color',
					'value'    => sanitize_hex_color( $color ),
				),
			),
			'body, 
			.entry-title a, .entry-title a:hover, .entry-title a:focus'
		);
	}

	/**
	 * Add colors from gutenberg palette.
	 */
	private function add_gutenberg_colors() {
		$color_controls = array(
			'white'                 => '#ffffff',
			'black'                 => '#000000',
			'neve-button-color'     => get_theme_mod( 'neve_button_color', '#0366d6' ),
			'neve-link-color'       => get_theme_mod( 'neve_link_color', '#0366d6' ),
			'neve-link-hover-color' => get_theme_mod( 'neve_link_hover_color', '#0366d6' ),
			'neve-text-color'       => get_theme_mod( 'neve_text_color', '#404248' ),
		);
		foreach ( $color_controls as $class_name => $control_value ) {
			$color_setup = array();

			$selectors                = '.has-' . $class_name . '-background-color';
			$css_prop                 = 'background-color';
			$color_setup[ $css_prop ] = array(
				'css_prop'  => $css_prop,
				'selectors' => $selectors,
			);

			$selectors                = '.has-' . $class_name . '-color';
			$css_prop                 = 'color';
			$color_setup[ $css_prop ] = array(
				'css_prop'  => $css_prop,
				'selectors' => $selectors,
			);

			$this->add_color( $color_setup, sanitize_hex_color( $control_value ) . '!important' );
		}
	}
}
