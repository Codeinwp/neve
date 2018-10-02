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
		$this->add_theme_color();
		$this->add_text_color();
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
			'color'            => array(
				'css_prop'  => 'color',
				'selectors' => 'a, .caret',
			),
			'border-color'     => array(
				'css_prop'  => 'border-color',
				'selectors' => '.caret-wrap',
			),
			'background-color' => array(
				'css_prop'  => 'background-color',
				'selectors' => '.dropdown-open > .caret-wrap',
			),
		);

		$this->add_color( apply_filters( 'neve_link_color_filter', $color_setup ), $color );
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

		$this->add_style(
			array(
				array(
					'css_prop' => 'background-color',
					'value'    => 'transparent',
				),
			),
			'.dropdown-open > .caret-wrap',
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
			'color'         => array(
				'css_prop'  => 'color',
				'selectors' => 'a:hover, #nv-primary-navigation li:hover > a ',
			),
			'color-desktop' => array(
				'css_prop'    => 'color',
				'selectors'   => '#nv-primary-navigation li:hover > .caret-wrap .caret',
				'media_query' => 'desktop',
			),
		);
		$this->add_color( apply_filters( 'neve_link_hover_color_filter', $color_setup ), $color );
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
					'value'    => $color,
				),
			),
			'body'
		);
	}

	/**
	 * Add theme color.
	 */
	private function add_theme_color() {
		$color = get_theme_mod( 'neve_theme_color', false );
		if ( empty( $color ) ) {
			return;
		}

		$color_setup = array(
			'color'                    => array(
				'css_prop'  => 'color',
				'selectors' => '.button.button-secondary, .nv-tags-list a',
			),
			'border-color'             => array(
				'css_prop'  => 'border-color',
				'selectors' => '.button.button-secondary, .nv-loader, .nv-tags-list a',
			),
			'border-top-color-desktop' => array(
				'css_prop'    => 'border-top-color',
				'selectors'   => '#nv-primary-navigation .sub-menu, .nv-nav-search',
				'media-query' => 'desktop',
			),
			'background'               => array(
				'css_prop'  => 'background-color',
				'selectors' => '.button.button-primary, .button.button-secondary:hover, .icon-bar, blockquote:before, button, input[type=button], .btn, input[type="submit"], .nv-tags-list a:hover',
			),
		);

		$this->add_color( apply_filters( 'neve_theme_color_filter', $color_setup ), $color );
	}
}
