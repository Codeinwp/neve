<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Typography.php
 */

namespace Neve\Views\Inline;

/**
 * Class Container_Sidebar
 *
 * @package Neve\Views\Inline
 */
class Container_Sidebar extends Base_Inline {
	/**
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		$this->container_style();
		$this->sidebar_style();
	}

	/**
	 * Container styles.
	 */
	private function container_style() {
		$container_width = get_theme_mod( 'neve_container_width' );
		$container_width = json_decode( $container_width, true );
		$settings        = array(
			array(
				'css_prop' => 'max-width',
				'value'    => $container_width,
				'suffix'   => 'px',
			),
		);
		$this->add_responsive_style( $settings, '.container' );
	}

	/**
	 * Sidebar style.
	 */
	private function sidebar_style() {
		$advanced_options = get_theme_mod( 'neve_advanced_layout_options', false );

		if( $advanced_options === false ){
			$content_width = get_theme_mod( 'neve_sitewide_content_width', 70 );
		} else {
			$content_width = get_theme_mod( 'neve_other_pages_content_width', 70 );

			if( is_home() || is_archive() ){
				$content_width = get_theme_mod( 'neve_blog_archive_content_width', 70 );
			}

			if( is_single() ){
				$content_width = get_theme_mod( 'neve_single_post_content_width', 70 );
			}
		}

		if( empty( $content_width ) ){
			return;
		}

		$sidebar_width = 100 - $content_width;
		$settings      = array(
			'content' => array(
				array(
					'css_prop' => 'max-width',
					'value'    => $content_width,
					'suffix'   => '%',
				),
			),
			'sidebar' => array(
				array(
					'css_prop' => 'max-width',
					'value'    => $sidebar_width,
					'suffix'   => '%',
				),
			),
		);

		$this->add_style( $settings['content'], '#content .container .col:not(:only-child)', 'desktop' );
		$this->add_style( $settings['sidebar'], '.nv-sidebar-wrap, .nv-sidebar-wrap.shop-sidebar', 'desktop' );
	}
}
