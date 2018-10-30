<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Typography.php
 */

namespace Neve\Views\Inline;

/**
 * Class Typography
 *
 * @package Neve\Views\Inline
 */
class Typography extends Base_Inline {
	/**
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		$this->fonts_family();
		$this->add_body_style();
		$this->add_headings_styles();
		$this->add_gutenberg_font_size();
	}

	/**
	 * Add inline style for font families.
	 */
	private function fonts_family() {
		$headings_font = get_theme_mod( 'neve_headings_font_family', false );
		$body_font     = get_theme_mod( 'neve_body_font_family', false );
		$this->add_style(
			array(
				array(
					'css_prop' => 'font-family',
					'value'    => $headings_font,
				),
			),
			'h1, h2, h3, h4, h5, h6'
		);
		$this->add_style(
			array(
				array(
					'css_prop' => 'font-family',
					'value'    => $body_font,
				),

			),
			'body'
		);
	}

	/**
	 * Body styles.
	 */
	private function add_body_style() {
		$font_size   = get_theme_mod( 'neve_body_font_size' );
		$line_height = get_theme_mod( 'neve_body_line_height' );
		$font_size   = json_decode( $font_size, true );
		$line_height = json_decode( $line_height, true );
		$settings    = array(
			array(
				'css_prop' => 'font-size',
				'value'    => $font_size,
				'suffix'   => 'px',
			),
			array(
				'css_prop' => 'line-height',
				'value'    => $line_height,
			),
		);
		$this->add_responsive_style( $settings, 'body' );
	}

	/**
	 * Headings font style.
	 */
	private function add_headings_styles() {
		$controls = array(
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
		);

		foreach ( $controls as $control ) {
			$font_size   = get_theme_mod( 'neve_' . $control . '_font_size' );
			$line_height = get_theme_mod( 'neve_' . $control . '_line_height' );
			$font_size   = json_decode( $font_size, true );
			$line_height = json_decode( $line_height, true );
			$settings    = array(
				array(
					'css_prop' => 'font-size',
					'value'    => $font_size,
					'suffix'   => 'rem',
				),
				array(
					'css_prop' => 'line-height',
					'value'    => $line_height,
				),
			);
			$this->add_responsive_style( $settings, $control );
		}
	}

	/**
	 * Add font sizes from gutenberg/
	 */
	private function add_gutenberg_font_size() {
		$font_size_controls = array(
			'neve-body-font-size' => get_theme_mod( 'neve_body_font_size', 15 ),
			'neve-h-1-font-size'  => get_theme_mod( 'neve_h1_font_size', 2 ),
			'neve-h-2-font-size'  => get_theme_mod( 'neve_h2_font_size', 1.75 ),
			'neve-h-3-font-size'  => get_theme_mod( 'neve_h3_font_size', 1.5 ),
			'neve-h-4-font-size'  => get_theme_mod( 'neve_h4_font_size', 1.25 ),
			'neve-h-5-font-size'  => get_theme_mod( 'neve_h5_font_size', 1 ),
			'neve-h-6-font-size'  => get_theme_mod( 'neve_h6_font_size', 1 ),
		);
		foreach ( $font_size_controls as $class_name => $control_value ) {

			$suffix = 'rem';
			if ( $class_name === 'neve-body-font-size' ) {
				$suffix = 'px';
			}
			$this->add_style(
				array(
					array(
						'css_prop' => 'font-size',
						'value'    => $control_value,
						'suffix'   => $suffix,
					),
				),
				'.has-' . $class_name
			);

		}
	}
}
