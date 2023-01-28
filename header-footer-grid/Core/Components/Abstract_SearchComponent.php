<?php
/**
 * Abstract Abstract_SearchComponent class for Header Footer Grid.
 *
 * @package HFG\Core\Components
 */

namespace HFG\Core\Components;

use HFG\Core\Components\Abstract_Component;
use HFG\Core\Settings\Manager as SettingsManager;

/**
 * Class Abstract_SearchComponent
 *
 * @package HFG\Core
 */
abstract class Abstract_SearchComponent extends Abstract_Component {
	const ACTION_TYPE = 'action_type';
	const ICON_TYPE   = 'icon_type';

	/**
	 * Has support for the search button instead of icon?
	 *
	 * @var bool
	 */
	protected $has_button_support = false;

	/**
	 * Adds action type control for icon/button selection
	 *
	 * @return void
	 */
	private function add_action_type_control() {
		if ( ! $this->has_button_support ) {
			return;
		}

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::ACTION_TYPE,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_STYLE,
				'transport'          => 'postMessage',
				'label'              => __( 'Action Type', 'neve' ),
				'default'            => 'icon',
				'type'               => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'section'            => $this->section,
				'conditional_header' => true,
				'options'            => [
					'choices'     => [
						'icon'   => [
							'tooltip' => __( 'Icon', 'neve' ),
							'icon'    => 'text',
						],
						'button' => [
							'tooltip' => __( 'Button', 'neve' ),
							'icon'    => 'text',
						],
					],
					'show_labels' => true,
				],
			]
		);
	}

	/**
	 * Adds a control to allow choose icon style.
	 *
	 * @return void
	 */
	private function add_customize_icon_control() {
		SettingsManager::get_instance()->add(
			[
				'id'                 => self::ICON_TYPE,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_STYLE,
				'transport'          => 'postMessage',
				'label'              => __( 'Icon Type', 'neve' ),
				'default'            => 'icon',
				'type'               => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'section'            => $this->section,
				'conditional_header' => true,
				'options'            => [
					'is_for'      => 'search_icon',
					'show_labels' => false,
				],
			]
		);
	}

	/**
	 * Override parent::define_settings to add additional controls
	 *
	 * @return void
	 */
	public function define_settings() {
		parent::define_settings();
		$this->add_action_type_control();
		$this->add_customize_icon_control();
	}
}
