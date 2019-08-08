<?php
/**
 * Generic compatibility class.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      2019-06-05
 *
 * @package generic.php
 */

namespace Neve\Compatibility;

/**
 * Class Generic
 *
 * @package Neve\Compatibility
 */
class Generic {
	/**
	 * Init function.
	 */
	public function init() {
		if ( class_exists( 'Mega_Menu', false ) ) {
			add_filter( 'megamenu_themes', array( $this, 'max_megamenu_theme' ) );
		}
	}

	/**
	 * Max Mega Menu Hestia Compatibility
	 *
	 * @param array $themes the themes.
	 *
	 * @return array
	 **/
	public function max_megamenu_theme( $themes ) {
		$themes['neve_max_mega_menu'] = array(
			'title'                           => 'Neve',
			'menu_item_link_height'           => '50px',
			'menu_item_align'                 => 'right',
			'container_background_from'       => 'rgba(255, 255, 255, 0)',
			'container_background_to'         => 'rgba(255, 255, 255, 0)',
			'menu_item_background_hover_from' => 'rgba(255, 255, 255, 0.1)',
			'menu_item_background_hover_to'   => 'rgba(255, 255, 255, 0.1)',
			'menu_item_link_color'            => '#555',
			'menu_item_link_color_hover'      => '#0366d6',
			'menu_item_highlight_current'     => 'off',
			'panel_background_from'           => 'rgb(255, 255, 255)',
			'panel_background_to'             => 'rgb(255, 255, 255)',
			'responsive_breakpoint'           => '959px',
			'resets'                          => 'on',
			'toggle_background_from'          => 'rgba(255, 255, 255, 0.1)',
			'toggle_background_to'            => 'rgba(255, 255, 255, 0.1)',
			'toggle_font_color'               => 'rgb(102, 102, 102)',
			'mobile_background_from'          => 'rgb(255, 255, 255)',
			'mobile_background_to'            => 'rgb(255, 255, 255)',
			'mobile_menu_item_link_color'     => 'rgb(102, 102, 102)',
			'responsive_text'                 => '',
		);

		return $themes;
	}

}
