<?php
/**
 * Custom Component class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Components;

use HFG\Core\Settings\Manager as SettingsManager;

/**
 * Class FooterWidgetTwo
 *
 * @package HFG\Core\Components
 */
class FooterWidgetTwo extends Abstract_FooterWidget {

	const COMPONENT_ID = 'footer-two-widgets';

	/**
	 * FooterWidgetTwo constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Footer Two', 'neve' ) );
		$this->set_property( 'id', self::COMPONENT_ID );
		$this->set_property( 'width', 3 );
		$this->set_property( 'section', 'sidebar-widgets-footer-two-widgets' );

		add_filter( 'customize_section_active', array( $this, 'footer_widgets_show' ), 15, 2 );
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {
		SettingsManager::get_instance()->add_controls_to_tabs(
			self::COMPONENT_ID,
			array(
				SettingsManager::TAB_GENERAL => array(
					'sidebars_widgets-footer-two-widgets' => array(),
				),
			)
		);
	}
}
