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
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param bool   $active Is active.
	 * @param object $section The section id.
	 *
	 * @return bool
	 */
	public function footer_widgets_show( $active, $section ) {
		if ( strpos( $section->id, 'widgets-footer-' ) ) {
			$active = true;
		}

		return $active;
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {

		$wp_customize->add_section(
			$this->section,
			array(
				'title' => $this->label,
			)
		);

		$wp_customize->get_section( $this->section )->panel = $this->panel;

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial',
			array(
				'selector'        => '.builder-item--' . $this->id,
				'settings'        => array(),
				'render_callback' => array( $this, 'render' ),
			)
		);

		return parent::customize_register( $wp_customize );
	}

	/**
	 * The render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'component-footer-sidebar' );
	}
}
