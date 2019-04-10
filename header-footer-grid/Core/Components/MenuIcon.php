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
use HFG\Main;
use Neve\Customizer\Controls\Checkbox;
use WP_Customize_Manager;

/**
 * Class MenuIcon
 *
 * @package HFG\Core\Components
 */
class MenuIcon extends Abstract_Component {

	const COMPONENT_ID   = 'header_menu_icon';
	const MENU_TEXT      = 'text_setting';
	const SIDEBAR_TOGGLE = 'sidebar';

	/**
	 * MenuIcon constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Menu Icon', 'neve' ) );

		$this->set_property( 'id', 'nav-icon' );

		$this->set_property( 'width', 3 );

		$this->set_property( 'section', self::COMPONENT_ID );
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {

		SettingsManager::get_instance()->add(
			[
				'id'                => self::MENU_TEXT,
				'group'             => self::COMPONENT_ID,
				'transport'         => 'post' . self::COMPONENT_ID,
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'default'           => __( 'Menu', 'neve' ),
				'label'             => __( 'Text', 'neve' ),
				'type'              => 'text',
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::SIDEBAR_TOGGLE,
				'group'             => self::COMPONENT_ID,
				'transport'         => 'post' . self::COMPONENT_ID,
				'sanitize_callback' => 'absint',
				'default'           => 0,
				'label'             => __( 'Show Sidebar', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\Checkbox',
				'options'           => [
					'type' => 'checkbox-toggle',
				],
				'section'           => $this->section,
			]
		);


	}

	/**
	 * Render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-menu-icon' );
	}
}
