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
			'caret-borders'    => array(
				'css_prop'  => 'border-color',
				'selectors' => '.caret-wrap',
			),
			'caret-background' => array(
				'css_prop'  => 'background-color',
				'selectors' => '.dropdown-open > .caret-wrap',
			),
		);
		$this->add_color( $color_setup, $color );
		$this->add_style(
			array(
				array(
					'css_prop' => 'border-color',
					'value'    => 'transparent',
				),
			), '.caret-wrap', 'desktop'
		);

		$this->add_style(
			array(
				array(
					'css_prop' => 'background-color',
					'value'    => 'transparent',
				),
			), '.dropdown-open > .caret-wrap', 'desktop'
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
			'link-hover-colors' => array(
				'css_prop'  => 'color',
				'selectors' => 'a:hover, #nv-primary-navigation li:hover > a ',
			),
			'nav-caret'         => array(
				'css_prop'    => 'color',
				'selectors'   => '#nv-primary-navigation li:hover > .caret-wrap .caret',
				'media_query' => 'desktop',
			),
		);
		$this->add_color( $color_setup, $color );
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
			), 'body'
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
				'selectors' => '.button.button-secondary',
			),
			'border-color'             => array(
				'css_prop'  => 'border-color',
				'selectors' => '.button.button-secondary, .nv-loader',
			),
			'border-top-color-desktop' => array(
				'css_prop'    => 'border-top-color',
				'selectors'   => '#nv-primary-navigation .sub-menu',
				'media-query' => 'desktop',
			),
			'background'               => array(
				'css_prop'  => 'background-color',
				'selectors' => '.button.button-primary, .button.button-secondary:hover, .icon-bar',
			),
		);

		/*
		 Commented for now
		 if ( class_exists( 'WooCommerce' ) ) {
			$color_setup['background']['selectors']               .= ', .nv-nav-cart .woocommerce-mini-cart__buttons a.button:last-child';
			$color_setup['background']['selectors']               .= ', .nv-nav-cart .woocommerce-mini-cart__buttons a.button:first-child:hover';
			$color_setup['border-top-color-desktop']['selectors'] .= ', .nv-nav-cart';
			$color_setup['border-color']['selectors']             .= ', .nv-nav-cart .woocommerce-mini-cart__buttons a.button:first-child';
			$color_setup['color']['selectors']                    .= ', .nv-nav-cart .woocommerce-mini-cart__buttons a.button:first-child';
		}
		*/
		$this->add_color( $color_setup, $color );
	}
}
