<?php
/**
 * Button Component class for Header Footer Grid.
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
use WP_Customize_Manager;

/**
 * Class Button
 *
 * @package HFG\Core\Components
 */
class Button extends Abstract_Component {

	const COMPONENT_ID = 'button_base';
	const LINK_ID      = 'link_setting';
	const TEXT_ID      = 'text_setting';

	/**
	 * Button constructor.
	 *
	 * @param string $panel Builder panel.
	 */
	public function __construct( $panel ) {
		parent::__construct( $panel );
		$this->default_selector = '.builder-item--' . $this->get_id() . ' > .component-wrap > :first-child';
	}

	/**
	 * Button constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Button', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'header_button' );
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
				'id'                => self::LINK_ID,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'default'           => '#',
				'label'             => __( 'Link', 'neve' ),
				'type'              => 'text',
				'section'           => $this->section,
			]
		);
		SettingsManager::get_instance()->add(
			[
				'id'                => self::TEXT_ID,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'default'           => __( 'Button', 'neve' ),
				'label'             => __( 'Text', 'neve' ),
				'type'              => 'text',
				'section'           => $this->section,
			]
		);

	}

	/**
	 * The render method for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-button' );
	}
}
