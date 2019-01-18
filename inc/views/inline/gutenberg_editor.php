<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Typography.php
 */

namespace Neve\Views\Inline;

/**
 * Class Gutenberg_Editor
 *
 * @package Neve\Views\Inline
 */
class Gutenberg_Editor extends Base_Inline {
	/**
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		$this->add_font_families();
		$this->add_font_sizes();
		$this->add_container_style();
		$this->add_content_width();
		$this->add_colors();
	}

	/**
	 * Add font families.
	 */
	private function add_font_families() {
		$headings_font = get_theme_mod( 'neve_headings_font_family', false );
		$body_font     = get_theme_mod( 'neve_body_font_family', false );
		$this->add_style(
			array(
				array(
					'css_prop' => 'font-family',
					'value'    => esc_html( $headings_font ),
				),
			),
			'.block-editor-page #wpwrap .editor-post-title__block .editor-post-title__input, 
			.block-editor-page #wpwrap .editor-styles-wrapper h1, 
			.block-editor-page #wpwrap .editor-styles-wrapper h2, 
			.block-editor-page #wpwrap .editor-styles-wrapper h3, 
			.block-editor-page #wpwrap .editor-styles-wrapper h4, 
			.block-editor-page #wpwrap .editor-styles-wrapper h5, 
			.block-editor-page #wpwrap .editor-styles-wrapper h6'
		);
		$this->add_style(
			array(
				array(
					'css_prop' => 'font-family',
					'value'    => esc_html( $body_font ),
				),
			),
			'.block-editor-page #wpwrap .editor-styles-wrapper .editor-writing-flow'
		);
	}

	/**
	 * Container styles applied to the .wp-block class.
	 */
	private function add_container_style() {
		$container_width = get_theme_mod( 'neve_container_width' );
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
			'.neve-gtb.container.has-sidebar-full-width .neve-blocks-wrap > .editor-block-list__layout > .wp-block:not([data-align=full]):not([data-align=wide]), .neve-gtb.container.has-sidebar-full-width .neve-blocks-wrap .wp-block.editor-post-title__block, .neve-gtb.container.has-sidebar-left .neve-content-wrap, .neve-gtb.container.has-sidebar-right .neve-content-wrap'
		);
	}

	/**
	 * Add content width.
	 */
	private function add_content_width() {
		$advanced_options = get_theme_mod( 'neve_advanced_layout_options', false );
		if ( $advanced_options === false ) {
			$content_width = get_theme_mod( 'neve_sitewide_content_width' );

			if ( $content_width !== false ) {
				$this->add_style(
					array(
						array(
							'css_prop' => 'max-width',
							'value'    => absint( $content_width ),
							'suffix'   => '%',
						),
					),
					'
				.neve-gtb.has-sidebar-full-width .neve-blocks-wrap > .editor-block-list__layout >  .wp-block:not([data-align=full]):not([data-align=wide])  > *,
				.neve-gtb.has-sidebar-full-width .neve-blocks-wrap .wp-block.editor-post-title__block > div,
				.neve-gtb.has-sidebar-left .neve-blocks-wrap, 
				.neve-gtb.has-sidebar-right .neve-blocks-wrap',
					'desktop'
				);
			}

			return;
		}

		$post_content_width = get_theme_mod( 'neve_single_post_content_width' );
		$page_content_width = get_theme_mod( 'neve_other_pages_content_width' );

		if ( $post_content_width !== false ) {
			$this->add_style(
				array(
					array(
						'css_prop' => 'max-width',
						'value'    => absint( $post_content_width ),
						'suffix'   => '%',
					),
				),
				'
			.block-editor-page.post-type-post .neve-gtb.has-sidebar-full-width .neve-blocks-wrap > .editor-block-list__layout > .wp-block:not([data-align=full]):not([data-align=wide]) > *,
			.block-editor-page.post-type-post .neve-gtb.has-sidebar-full-width .neve-blocks-wrap .wp-block.editor-post-title__block > div,
			.block-editor-page.post-type-post .neve-gtb.has-sidebar-left .neve-blocks-wrap, 
			.block-editor-page.post-type-post .neve-gtb.has-sidebar-right .neve-blocks-wrap',
				'desktop'
			);
		}

		if ( $page_content_width !== false ) {
			$this->add_style(
				array(
					array(
						'css_prop' => 'max-width',
						'value'    => absint( $page_content_width ),
						'suffix'   => '%',
					),
				),
				'
			.block-editor-page.post-type-page .neve-gtb.has-sidebar-full-width .neve-blocks-wrap > .editor-block-list__layout > .wp-block:not([data-align=full]):not([data-align=wide])  > *,
			.block-editor-page.post-type-page .neve-gtb.has-sidebar-full-width .neve-blocks-wrap .wp-block.editor-post-title__block > div,
			.block-editor-page.post-type-page .neve-gtb.has-sidebar-left .neve-blocks-wrap,
			.block-editor-page.post-type-page .neve-gtb.has-sidebar-right .neve-blocks-wrap',
				'desktop'
			);
		}
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
				'selectors' => '.block-editor-page .editor-styles-wrapper .editor-writing-flow',
			),
			'neve_link_color'       => array(
				'css_prop'  => 'color',
				'selectors' => '.block-editor-page .editor-styles-wrapper .editor-writing-flow a',
			),
			'neve_link_hover_color' => array(
				'css_prop'  => 'color',
				'selectors' => '.block-editor-page .editor-styles-wrapper .editor-writing-flow a:hover',
			),
			'neve_text_color'       => array(
				'css_prop'  => 'color',
				'selectors' => '
				.block-editor-page .editor-styles-wrapper .editor-writing-flow,
				.block-editor-page .editor-styles-wrapper .editor-post-title__block .editor-post-title__input,
				.block-editor-page .editor-styles-wrapper h1,
				.block-editor-page .editor-styles-wrapper h2,
				.block-editor-page .editor-styles-wrapper h3,
				.block-editor-page .editor-styles-wrapper h4,
				.block-editor-page .editor-styles-wrapper h5,
				.block-editor-page .editor-styles-wrapper h6',
			),
		);

		array_walk( $color_settings, array( $this, 'run_colors' ) );

		return;
	}

	/**
	 * Add font sizes.
	 */
	private function add_font_sizes() {
		$controls = array(
			'body' => '
			.block-editor-page .editor-styles-wrapper .editor-writing-flow, 
			.block-editor-page .editor-styles-wrapper .editor-writing-flow p:not(.wp-block-cover-text),
			.editor-post-title__block',
			'h1'   => '
			.block-editor-page .editor-styles-wrapper .editor-writing-flow h1, 
			.block-editor-page .editor-styles-wrapper .editor-writing-flow .editor-post-title__block .editor-post-title__input',
			'h2'   => '.block-editor-page .editor-styles-wrapper .editor-writing-flow h2',
			'h3'   => '.block-editor-page .editor-styles-wrapper .editor-writing-flow h3',
			'h4'   => '.block-editor-page .editor-styles-wrapper .editor-writing-flow h4',
			'h5'   => '.block-editor-page .editor-styles-wrapper .editor-writing-flow h5',
			'h6'   => '.block-editor-page .editor-styles-wrapper .editor-writing-flow h6',
		);

		array_walk( $controls, array( $this, 'run_font_settings' ) );

		return;
	}

	/**
	 * Add each font size / line-height style.
	 *
	 * @param string $selector the css selector.
	 * @param string $control  the control id.
	 */
	private function run_font_settings( $selector, $control ) {
		$font_size = get_theme_mod( 'neve_' . $control . '_font_size' );
		$font_size = json_decode( $font_size, true );

		$line_height = get_theme_mod( 'neve_' . $control . '_line_height' );
		$line_height = json_decode( $line_height, true );

		$suffix = $control === 'body' ? 'px' : ( isset( $font_size['suffix'] ) ? $font_size['suffix'] : 'em' );

		$settings = array(
			array(
				'css_prop' => 'font-size',
				'value'    => $font_size,
				'suffix'   => $suffix,
			),
			array(
				'css_prop' => 'line-height',
				'value'    => $line_height,
			),
		);

		$this->add_responsive_style( $settings, $selector );
	}
}
