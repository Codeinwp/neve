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
 * Class Gutenberg_Editor
 *
 * @package Neve\Views\Inline
 */
class Gutenberg_Editor extends Base_Inline {
	/**
	 * Body font weight
	 *
	 * @var array
	 */
	private $body_weight = [ 400 ];
	/**
	 * Body font family
	 *
	 * @var string
	 */
	private $body_family = '';
	/**
	 * Headings font weights
	 *
	 * @var array
	 */
	private $heading_weights = [ 600 ];
	/**
	 * Headings font family
	 *
	 * @var string
	 */
	private $headings_family = '';

	/**
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		$this->add_font_families();
		$this->add_typeface_values();
		$this->add_container_style();
		$this->add_colors();
		$this->add_google_fonts();
	}

	/**
	 * Add heading styles.
	 */
	private function add_font_families() {
		$headings_font = get_theme_mod( 'neve_headings_font_family', false );
		$body_font     = get_theme_mod( 'neve_body_font_family', false );

		$style_setup = array();
		if ( ! empty( $headings_font ) && $headings_font !== 'default' ) {
			$style_setup[]         = array(
				'css_prop' => 'font-family',
				'value'    => $headings_font,
			);
			$this->headings_family = $headings_font;
		}
		$this->add_style(
			$style_setup,
			'#editor .editor-styles-wrapper .editor-post-title__block .editor-post-title__input, 
			#editor .editor-styles-wrapper h1, 
			#editor .editor-styles-wrapper h2, 
			#editor .editor-styles-wrapper h3, 
			#editor .editor-styles-wrapper h4, 
			#editor .editor-styles-wrapper h5, 
			#editor .editor-styles-wrapper h6'
		);

		$body_style_setup = array();
		if ( ! empty( $body_font ) && $body_font !== 'default' ) {
			$body_style_setup[] = array(
				'css_prop' => 'font-family',
				'value'    => $body_font,
			);
			$this->body_family  = $body_font;
		}
		$this->add_style( $body_style_setup, '#editor .editor-styles-wrapper .editor-writing-flow' );
	}

	/**
	 * Container styles applied to the .editor-styles-wrapper class.
	 */
	private function add_container_style() {
		$container_width = get_theme_mod(
			'neve_container_width',
			json_encode(
				[
					'mobile'  => 748,
					'tablet'  => 992,
					'desktop' => 1170,
				]
			)
		);
		$container_width = json_decode( $container_width, true );
		$settings        = array(
			array(
				'css_prop' => 'max-width',
				'value'    => $container_width,
				'suffix'   => 'px',
			),
		);
		$this->add_responsive_style(
			$settings,
			'.editor-styles-wrapper'
		);
	}

	/**
	 * Add style for each color.
	 *
	 * @param array  $setup     args for the option setup.
	 * @param string $theme_mod theme mod id.
	 */
	private function run_colors( $setup, $theme_mod ) {
		$color = get_theme_mod( $theme_mod );
		if ( empty( $color ) ) {
			return;
		}
		if ( $theme_mod === 'background_color' ) {
			$color = '#' . $color;
		}

		$color_setup = array(
			$setup,
		);
		$this->add_color( $color_setup, sanitize_hex_color( $color ) );
	}

	/**
	 * Add colors.
	 */
	private function add_colors() {
		$color_settings = array(
			'background_color'      => array(
				'css_prop'  => 'background-color',
				'selectors' => '#editor .editor-styles-wrapper .editor-writing-flow',
			),
			'neve_link_color'       => array(
				'css_prop'  => 'color',
				'selectors' => '#editor .editor-styles-wrapper .editor-writing-flow a',
			),
			'neve_link_hover_color' => array(
				'css_prop'  => 'color',
				'selectors' => '#editor .editor-styles-wrapper .editor-writing-flow a:hover',
			),
			'neve_text_color'       => array(
				'css_prop'  => 'color',
				'selectors' => '
				#editor .editor-styles-wrapper .editor-writing-flow,
				#editor .editor-styles-wrapper .editor-post-title__block .editor-post-title__input,
				#editor .editor-styles-wrapper h1,
				#editor .editor-styles-wrapper h2,
				#editor .editor-styles-wrapper h3,
				#editor .editor-styles-wrapper h4,
				#editor .editor-styles-wrapper h5,
				#editor .editor-styles-wrapper h6',
			),
		);

		array_walk( $color_settings, array( $this, 'run_colors' ) );

		return;
	}

	/**
	 * Add font sizes.
	 */
	private function add_typeface_values() {
		$controls = array(
			'neve_typeface_general'    => '
			#editor .editor-styles-wrapper .editor-writing-flow .wp-block,
			.block-editor-block-list__block[data-type="core/paragraph"] p',
			'neve_h1_typeface_general' => '
			#editor .editor-styles-wrapper .editor-writing-flow h1, 
			#editor .editor-styles-wrapper .editor-post-title__block .editor-post-title__input',
			'neve_h2_typeface_general' => '#editor .editor-styles-wrapper .editor-writing-flow h2',
			'neve_h3_typeface_general' => '#editor .editor-styles-wrapper .editor-writing-flow h3',
			'neve_h4_typeface_general' => '#editor .editor-styles-wrapper .editor-writing-flow h4',
			'neve_h5_typeface_general' => '#editor .editor-styles-wrapper .editor-writing-flow h5',
			'neve_h6_typeface_general' => '#editor .editor-styles-wrapper .editor-writing-flow h6',
		);

		array_walk( $controls, array( $this, 'run_font_settings' ) );
	}

	/**
	 * Add each font size / line-height style.
	 *
	 * @param string $selector the css selector.
	 * @param string $control  the control id.
	 */
	private function run_font_settings( $selector, $control ) {
		$value = get_theme_mod( $control );
		if ( ! is_array( $value ) ) {
			return;
		}

		$this->add_responsive_style(
			[
				[
					'css_prop' => 'font-size',
					'value'    => $value['fontSize'],
					'suffix'   => $value['fontSize']['suffix'],
				],
				[
					'css_prop' => 'line-height',
					'value'    => $value['lineHeight'],
				],
				[
					'css_prop' => 'letter-spacing',
					'value'    => $value['letterSpacing'],
					'suffix'   => 'px',
				],
			],
			$selector
		);

		$this->add_style(
			[
				[
					'css_prop' => 'text-transform',
					'value'    => $value['textTransform'],
				],
				[
					'css_prop' => 'font-weight',
					'value'    => $value['fontWeight'],
				],
			],
			$selector
		);

		if ( ! empty( $value['fontWeight'] ) ) {
			if ( $control === 'neve_typeface_general' ) {
				array_push( $this->body_weight, $value['fontWeight'] );
			} else {
				array_push( $this->heading_weights, $value['fontWeight'] );
			}
		}
	}

	/**
	 * Enqueue google fonts in the editor.
	 */
	private function add_google_fonts() {
		if ( ! empty( $this->headings_family ) ) {
			Font_Manager::add_google_font( $this->headings_family, $this->heading_weights );
		}
		if ( ! empty( $this->body_family ) ) {
			Font_Manager::add_google_font( $this->body_family, $this->body_weight );
		}
	}
}
