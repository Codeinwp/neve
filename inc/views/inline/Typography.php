<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 * @package Typography.php
 */

namespace Neve\Views\Inline;


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
	}

	private function fonts_family() {
		$headings_font = get_theme_mod( 'neve_headings_font_family', 'Open Sans' );
		$body_font     = get_theme_mod( 'neve_body_font_family', 'Open Sans' );
		$this->add_style( array(
			array(
				'css_prop' => 'font-family',
				'value'    => $headings_font,
			)
		),
			'h1, h2, h3, h4, h5, h6' );
		$this->add_style(
			array(
				array(
					'css_prop' => 'font-family',
					'value'    => $body_font,
				),

			),
			'body' );
	}

	private function add_body_style() {
		$font_size     = get_theme_mod( 'neve_body_font_size' );
		$line_height   = get_theme_mod( 'neve_body_line_height' );
		$font_size     = json_decode( $font_size, true );
		$line_height   = json_decode( $line_height, true );
		$media_queries = array( 'mobile', 'tablet', 'desktop' );
		foreach ( $media_queries as $media_query ) {
			$settings = array(
				array(
					'css_prop' => 'font-size',
					'value'    => $font_size[$media_query],
					'suffix'   => 'px',
				),
				array(
					'css_prop' => 'line-height',
					'value'    => $line_height[$media_query],
				),
			);
			$this->add_style( $settings, 'body, .nv-meta-list i', $media_query );
		}
	}

	private function add_headings_styles() {
		$font_size     = get_theme_mod( 'neve_headings_font_size' );
		$line_height   = get_theme_mod( 'neve_headings_line_height' );
		$font_size     = json_decode( $font_size, true );
		$line_height   = json_decode( $line_height, true );
		$media_queries = array( 'mobile', 'tablet', 'desktop' );
		foreach ( $media_queries as $media_query ) {
			$settings = array(
				array(
					'css_prop' => 'font-size',
					'value'    => $font_size[$media_query],
					'suffix'   => 'px',
				),
				array(
					'css_prop' => 'line-height',
					'value'    => $line_height[$media_query],
				),
			);
			$this->add_style( $settings, 'h1, h2, h3, h4, h5, h6', $media_query );
		}
	}
}