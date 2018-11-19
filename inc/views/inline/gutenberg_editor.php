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
		$this->add_container_style();
		$this->add_content_width();
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
					'value'    => $headings_font,
				),
			),
			'.gutenberg-editor-page #wpwrap .editor-post-title__block .editor-post-title__input, 
			.gutenberg-editor-page #wpwrap .editor-styles-wrapper h1, 
			.gutenberg-editor-page #wpwrap .editor-styles-wrapper h2, 
			.gutenberg-editor-page #wpwrap .editor-styles-wrapper h3, 
			.gutenberg-editor-page #wpwrap .editor-styles-wrapper h4, 
			.gutenberg-editor-page #wpwrap .editor-styles-wrapper h5, 
			.gutenberg-editor-page #wpwrap .editor-styles-wrapper h6'
		);
		$this->add_style(
			array(
				array(
					'css_prop' => 'font-family',
					'value'    => $body_font,
				),
			),
			'.gutenberg-editor-page #wpwrap .editor-styles-wrapper'
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
			'
.neve-gtb.container.has-sidebar-full-width .wp-block:not([data-align=full]):not([data-align=wide]),
.neve-gtb.container.has-sidebar-left .neve-content-wrap,
.neve-gtb.container.has-sidebar-right .neve-content-wrap'
		);
	}

	/**
	 * Add content width.
	 */
	private function add_content_width() {
		$advanced_options = get_theme_mod( 'neve_advanced_layout_options', false );
		if ( $advanced_options === false ) {
			$content_width = get_theme_mod( 'neve_sitewide_content_width' );

			$this->add_style( array(
				array(
					'css_prop' => 'max-width',
					'value'    => $content_width,
					'suffix'   => '%',
				),
			),
				'.neve-gtb.container.has-sidebar-full-width .wp-block:not([data-align=full]):not([data-align=wide]),.neve-gtb.container.has-sidebar-left .neve-blocks-wrap, .neve-gtb.container.has-sidebar-right .neve-blocks-wrap' );

			return;
		}

		$post_content_width = get_theme_mod( 'neve_single_post_content_width' );
		$page_content_width = get_theme_mod( 'neve_other_pages_content_width' );

		$this->add_style( array(
			array(
				'css_prop' => 'max-width',
				'value'    => $post_content_width,
				'suffix'   => '%',
			),
		),
			'
			.gutenberg-editor-page.post-type-post .neve-gtb.container.has-sidebar-full-width .wp-block:not([data-align=full]):not([data-align=wide]),
			.gutenberg-editor-page.post-type-post .neve-gtb.container.has-sidebar-left .neve-blocks-wrap, 
			.gutenberg-editor-page.post-type-post .neve-gtb.container.has-sidebar-right .neve-blocks-wrap' );

		$this->add_style( array(
			array(
				'css_prop' => 'max-width',
				'value'    => $page_content_width,
				'suffix'   => '%',
			),
		),
			'
			.gutenberg-editor-page.post-type-page .neve-gtb.container.has-sidebar-full-width .wp-block:not([data-align=full]):not([data-align=wide]),
			.gutenberg-editor-page.post-type-page .neve-gtb.container.has-sidebar-left .neve-blocks-wrap,
			.gutenberg-editor-page.post-type-page .neve-gtb.container.has-sidebar-right .neve-blocks-wrap' );
	}
}
