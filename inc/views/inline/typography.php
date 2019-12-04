<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Typography.php
 */

namespace Neve\Views\Inline;

use Neve\Views\Font_Manager;

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

		$old_font_size   = get_theme_mod( 'neve_body_font_size' );
		$old_line_height = get_theme_mod( 'neve_body_line_height' );
		$old_font_size   = json_decode( $old_font_size, true );
		$old_line_height = json_decode( $old_line_height, true );

		$typeface_setup     = get_theme_mod( 'neve_typeface_general' );
		$old_letter_spacing = get_theme_mod( 'neve_body_letter_spacing' );

		$font_size   = isset( $typeface_setup['fontSize'] ) ? $typeface_setup['fontSize'] : $old_font_size;
		$line_height = isset( $typeface_setup['lineHeight'] ) ? $typeface_setup['lineHeight'] : $old_line_height;

		// Letter spacing wasn't previously a responsive setting.
		$letter_spacing = isset( $typeface_setup['letterSpacing'] ) ? $typeface_setup['letterSpacing'] : $old_letter_spacing;

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

		if ( ! empty( $letter_spacing ) && is_array( $letter_spacing ) ) {
			$style_setup[] = array(
				'css_prop' => 'letter-spacing',
				'value'    => $letter_spacing,
				'suffix'   => 'px',
			);
		}

		$this->add_responsive_style( $style_setup, 'body, .site-title' );

		$old_font_weight    = get_theme_mod( 'neve_body_font_weight' );
		$old_text_transform = get_theme_mod( 'neve_body_text_transform' );

		$font_weight    = isset( $typeface_setup['fontWeight'] ) ? $typeface_setup['fontWeight'] : $old_font_weight;
		$text_transform = isset( $typeface_setup['textTransform'] ) ? $typeface_setup['textTransform'] : $old_text_transform;
		$body_font      = get_theme_mod( 'neve_body_font_family', false );

		Font_Manager::add_google_font( $body_font, $font_weight );

		$style_setup = array();
		// Letter spacing was not previously responsive - this accounts for that.
		if ( ! empty( $letter_spacing ) && ! is_array( $letter_spacing ) ) {
			$style_setup[] = array(
				'css_prop' => 'letter-spacing',
				'value'    => $letter_spacing,
				'suffix'   => 'px',
			);
		}
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

		$this->add_style(
			$style_setup,
			apply_filters( 'neve_body_font_family_selectors', 'body, .site-title' )
		);
	}

	/**
	 * Headings font style.
	 */
	private function add_headings_styles() {
		$controls      = neve_get_headings_selectors();
		$headings_font = get_theme_mod( 'neve_headings_font_family', false );

		foreach ( $controls as $control => $selector ) {
			$old_font_size      = json_decode( get_theme_mod( 'neve_' . $control . '_font_size' ), true );
			$old_font_weight    = get_theme_mod( 'neve_headings_font_weight' );
			$old_letter_spacing = get_theme_mod( 'neve_headings_letter_spacing' );
			$old_text_transform = get_theme_mod( 'neve_headings_text_transform' );

			$typeface_setup = get_theme_mod( 'neve_' . $control . '_typeface_general' );

			// Check if previous settings version was set and use that.
			$old_line_height = get_theme_mod( 'neve_' . $control . '_line_height' );
			// Check if even older version was set and use that if latest doesn't exist.
			$old_line_height = empty( $old_line_height ) ? get_theme_mod( 'neve_headings_line_height' ) : $old_line_height;
			$old_line_height = json_decode( $old_line_height, true );
			// If there's no new value, use the old options.
			$line_height = isset( $typeface_setup['lineHeight'] ) ? $typeface_setup['lineHeight'] : $old_line_height;

			$font_size      = isset( $typeface_setup['fontSize'] ) ? $typeface_setup['fontSize'] : $old_font_size;
			$font_weight    = isset( $typeface_setup['fontWeight'] ) ? $typeface_setup['fontWeight'] : $old_font_weight;
			$text_transform = isset( $typeface_setup['textTransform'] ) ? $typeface_setup['textTransform'] : $old_text_transform;
			// Letter spacing wasn't previously a responsive setting.
			$letter_spacing = isset( $typeface_setup['letterSpacing'] ) ? $typeface_setup['letterSpacing'] : $old_letter_spacing;

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

			if ( ! empty( $font_weight ) ) {
				$this->add_style(
					array(
						array(
							'css_prop' => 'font-weight',
							'value'    => $font_weight,
						),
					),
					$selector
				);
			}
			if ( ! empty( $text_transform ) ) {
				$this->add_style(
					array(
						array(
							'css_prop' => 'text-transform',
							'value'    => $text_transform,
						),
					),
					$selector
				);
			}
			// Letter spacing was not previously responsive - this accounts for that.
			if ( ! empty( $letter_spacing ) && ! is_array( $letter_spacing ) ) {
				$this->add_style(
					array(
						array(
							'css_prop' => 'letter-spacing',
							'value'    => $letter_spacing,
							'suffix'   => 'px',
						),
					),
					$selector
				);
			}

			if ( ! empty( $letter_spacing ) && is_array( $letter_spacing ) ) {
				$this->add_responsive_style(
					array(
						array(
							'css_prop' => 'letter-spacing',
							'value'    => $letter_spacing,
							'suffix'   => 'px',
						),
					),
					$selector
				);
			}

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
			Font_Manager::add_google_font( $headings_font, $font_weight );
		}


		$style_setup = array();
		if ( ! empty( $headings_font ) && $headings_font !== 'default' ) {
			$style_setup[] = array(
				'css_prop' => 'font-family',
				'value'    => esc_html( $headings_font ),
			);
		}
		$this->add_style(
			$style_setup,
			apply_filters( 'neve_headings_font_family_selectors', 'h1, .single h1.entry-title, h2, h3, h4, h5, h6' )
		);
	}
}
