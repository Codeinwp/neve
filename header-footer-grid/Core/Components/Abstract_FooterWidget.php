<?php
/**
 * Abstract Footer Widget class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Components;

use HFG\Main;
use WP_Customize_Manager;

/**
 * Class Abstract_FooterWidget
 *
 * @package HFG\Core\Components
 */
abstract class Abstract_FooterWidget extends Abstract_Component {

	/**
	 * Method to show footer widget
	 *
	 * @param bool   $active Is active.
	 * @param object $section The section id.
	 *
	 * @return bool
	 * @since   1.0.0
	 * @access  public
	 */
	public function footer_widgets_show( $active, $section ) {
		if ( isset( $section->id ) && strpos( $section->id, 'widgets-footer-' ) ) {
			$active = true;
		}

		return $active;
	}

	/**
	 * Change section name based on the child section.
	 *
	 * @param WP_Customize_Manager $wp_customize Customizer object.
	 *
	 * @return WP_Customize_Manager Customizer object.
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {
		parent::customize_register( $wp_customize );
		$wp_customize->get_section( $this->section )->panel = $this->panel;

		return $wp_customize;
	}

	/**
	 * Generic settings, if any.
	 */
	public function add_settings() {

	}

	/**
	 * The render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-footer-sidebar' );
	}
}
