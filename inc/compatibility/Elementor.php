<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      05/09/2018
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Elementor
 *
 * @package Neve\Compatibility
 */
class Elementor extends Page_Builder_Base {

	/**
	 * Init function.
	 */
	public function init() {
		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			return;
		}

		add_action( 'elementor/theme/register_locations', array( $this, 'register_theme_locations' ), 100 );
		add_action( 'elementor/editor/before_enqueue_scripts', array( $this, 'maybe_set_page_template' ), 1 );
	}

	/**
	 * Check if it page was edited with page builder.
	 *
	 * @param string $pid post id.
	 *
	 * @return bool
	 */
	protected function is_edited_with_builder( $pid ) {
		$post_meta = get_post_meta( $pid, '_elementor_edit_mode', true );
		if ( $post_meta === 'builder' ) {
			return true;
		}

		return false;
	}

	/**
	 * Register theme locations for Elementor Pro
	 *
	 * @param \ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager $elementor_theme_manager location manager.
	 */
	public function register_theme_locations( $elementor_theme_manager ) {
		$elementor_theme_manager->register_location(
			'header',
			array(
				'hook'            => 'neve_do_header',
				'remove_hooks'    => array( array( 'Neve\Views\Header', 'render_navigation' ) ),
				'edit_in_content' => false,
			)
		);
		$elementor_theme_manager->register_location(
			'footer',
			array(
				'hook'            => 'neve_do_footer',
				'remove_hooks'    => array( array( 'Neve\Views\Footer', 'render_footer' ) ),
				'edit_in_content' => false,
			)
		);
	}
}
