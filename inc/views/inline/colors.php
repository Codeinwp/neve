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
		$this->add_button_color();
		$this->add_text_color();
		$this->add_menu_items_color();
		$this->add_gutenberg_colors();
	}

	/**
	 * Add colors for navigation menu.
	 */
	private function add_menu_items_color() {
		$color = get_theme_mod( 'neve_menu_item_color', '' );
		if ( ! empty( $color ) ) {
			$color_setup = array(
				'color'            => array(
					'css_prop'  => 'color',
					'selectors' => '#nv-primary-navigation a,
					#nv-primary-navigation li > a > .caret-wrap .caret,
					#nv-primary-navigation .neve-mega-menu > a:after,
					.menu-item-nav-search.responsive-nav-search > a,
					.menu-item-nav-cart.responsive-nav-cart > a',
				),
				'background-color' => array(
					'css_prop'  => 'background-color',
					'selectors' => '.navbar-toggle .icon-bar',
				),
			);
			$this->add_color( apply_filters( 'neve_menu_items_color_filter', $color_setup ), sanitize_hex_color( $color ) );
		}
		$hover_color = get_theme_mod( 'neve_menu_item_hover_color', '' );
		if ( ! empty( $hover_color ) ) {
			$color_setup = array(
				'color'            => array(
					'css_prop'  => 'color',
					'selectors' => '#nv-primary-navigation a:hover, #nv-primary-navigation a:focus,
					#nv-primary-navigation li:hover > a, #nv-primary-navigation li:focus > a, 
					#nv-primary-navigation li:hover > a > .caret-wrap .caret, #nv-primary-navigation li:focus > a > .caret-wrap .caret, 
					#nv-primary-navigation .neve-mega-menu:hover > a:after,
					.menu-item-nav-search.responsive-nav-search > a:hover, .menu-item-nav-search.responsive-nav-search > a:focus,
					.menu-item-nav-cart.responsive-nav-cart > a:hover, .menu-item-nav-cart.responsive-nav-cart > a:focus,
					#nv-primary-navigation .current-menu-item > a',
				),
				'background-color' => array(
					'css_prop'  => 'background-color',
					'selectors' => '.navbar-toggle:hover .icon-bar',
				),
			);
			$this->add_color( apply_filters( 'neve_menu_items_hover_color_filter', $color_setup ), sanitize_hex_color( $hover_color ) );
		}
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
	 * Add buttons color.
	 */
	private function add_button_color() {
		$color = get_theme_mod( 'neve_button_color', false );
		if ( empty( $color ) ) {
			return;
		}

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
				.button.button-primary:hover, 
				button, input[type=button], 
				.btn, input[type="submit"], 
				.nv-tags-list a:hover,
				/* Buttons in navigation */
				#nv-primary-navigation li.button.button-primary > a, 
				.menu li.button.button-primary > a,
				#nv-primary-navigation li.button.button-primary > a:hover, 
				.menu li.button.button-primary > a:hover',
			),
		);

		$this->add_color( apply_filters( 'neve_button_color_filter', $color_setup ), sanitize_hex_color( $color ) );
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

			$this->add_color( $color_setup, sanitize_hex_color( $control_value ) );
		}
	}
}
