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
		$sidebar_width = get_theme_mod( 'neve_sidebar_width' );
		$sidebar_width = json_decode( $sidebar_width, true );
		$settings      = array(
			array(
				'css_prop' => 'max-width',
				'value'    => $sidebar_width,
				'suffix'   => '%',
			),
		);
		$this->add_style( $settings, '.nv-sidebar-wrap', 'desktop' );
	}
}
