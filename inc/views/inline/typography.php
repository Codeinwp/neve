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
		$this->add_body_style();
		$this->add_headings_styles();
	}

	/**
	 * Body styles.
	 */
	private function add_body_style() {
		$font_size   = get_theme_mod( 'neve_body_font_size' );
		$line_height = get_theme_mod( 'neve_body_line_height' );
		$font_size   = json_decode( $font_size, true );
		$line_height = json_decode( $line_height, true );

		$style_setup = array();

		if ( ! empty( $font_size ) ) {
			$style_setup[] = array(
				'css_prop' => 'font-size',
				'value'    => $font_size,
				'suffix'   => 'px',
			);
		}

		if ( ! empty( $line_height ) ) {
			$style_setup[] = array(
				'css_prop' => 'line-height',
				'value'    => $line_height,
			);
		}

		$this->add_responsive_style( $style_setup, 'body' );

		$body_font      = get_theme_mod( 'neve_body_font_family', false );
		$font_weight    = get_theme_mod( 'neve_body_font_weight' );
		$text_transform = get_theme_mod( 'neve_body_text_transform' );
		$spacing        = get_theme_mod( 'neve_body_letter_spacing' );
		$style_setup    = array();
		if ( ! empty( $body_font ) && $body_font !== 'default' ) {
			$style_setup[] = array(
				'css_prop' => 'font-family',
				'value'    => $body_font,
			);
		}
		if ( ! empty( $font_weight ) ) {
			$style_setup[] = array(
				'css_prop' => 'font-weight',
				'value'    => $font_weight,
			);
		}
		if ( ! empty( $text_transform ) ) {
			$style_setup[] = array(
				'css_prop' => 'text-transform',
				'value'    => $text_transform,
			);
		}
		if ( ! empty( $spacing ) ) {
			$style_setup[] =
				array(
					'css_prop' => 'letter-spacing',
					'value'    => $spacing,
					'suffix'   => 'px',
				);
		}
		$this->add_style(
			$style_setup,
			apply_filters( 'neve_body_font_family_selectors', 'body' )
		);
	}

	/**
	 * Headings font style.
	 */
	private function add_headings_styles() {
		$controls = array(
			'h1' => 'h1:not(.site-title), .single .entry-title',
			'h2' => 'h2',
			'h3' => 'h3',
			'h4' => 'h4',
			'h5' => 'h5',
			'h6' => 'h6',
		);

		foreach ( $controls as $control => $selector ) {
			$font_size = get_theme_mod( 'neve_' . $control . '_font_size' );
			$font_size = json_decode( $font_size, true );

			if ( ! empty( $font_size ) ) {
				$this->add_responsive_style(
					array(
						array(
							'css_prop' => 'font-size',
							'value'    => $font_size,
							'suffix'   => isset( $font_size['suffix'] ) ? $font_size['suffix'] : 'em',
						),
					),
					$selector
				);
			}

			$line_height_default = get_theme_mod( 'neve_headings_line_height' );
			$line_height         = get_theme_mod( 'neve_' . $control . '_line_height', $line_height_default );
			$line_height         = json_decode( $line_height, true );

			if ( ! empty( $line_height ) ) {
				$this->add_responsive_style(
					array(
						array(
							'css_prop' => 'line-height',
							'value'    => $line_height,
						),
					),
					$selector
				);
			}
		}

		$headings_font  = get_theme_mod( 'neve_headings_font_family', false );
		$font_weight    = get_theme_mod( 'neve_headings_font_weight' );
		$text_transform = get_theme_mod( 'neve_headings_text_transform' );
		$spacing        = get_theme_mod( 'neve_headings_letter_spacing' );
		$style_setup    = array();
		if ( ! empty( $headings_font ) && $headings_font !== 'default' ) {
			$style_setup[] = array(
				'css_prop' => 'font-family',
				'value'    => esc_html( $headings_font ),
			);
		}
		if ( ! empty( $font_weight ) ) {
			$style_setup[] = array(
				'css_prop' => 'font-weight',
				'value'    => $font_weight,
			);
		}
		if ( ! empty( $text_transform ) ) {
			$style_setup[] = array(
				'css_prop' => 'text-transform',
				'value'    => $text_transform,
			);
		}
		if ( ! empty( $spacing ) ) {
			$style_setup[] = array(
				'css_prop' => 'letter-spacing',
				'value'    => $spacing,
				'suffix'   => 'px',
			);
		}
		$this->add_style(
			$style_setup,
			apply_filters( 'neve_headings_font_family_selectors', 'h1, .single .entry-title, h2, h3, h4, h5, h6' )
		);
	}
}
