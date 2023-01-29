<?php
/**
 * Abstract Abstract_SearchComponent class for Header Footer Grid.
 *
 * @package HFG\Core\Components
 */

namespace HFG\Core\Components;

use HFG\Core\Components\Abstract_Component;
use HFG\Core\Settings\Manager as SettingsManager;
use function HFG\component_setting;

/**
 * Class Abstract_SearchComponent
 *
 * @package HFG\Core
 */
abstract class Abstract_SearchComponent extends Abstract_Component {
	const ACTION_TYPE = 'action_type';
	const ICON_TYPE   = 'icon_type';
	const CUSTOM_SVG  = 'icon_c_svg';

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
				'transport'          => 'refresh',
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
	private function add_customize_icon_controls() {
		$sm = SettingsManager::get_instance();
		$sm::get_instance()->add(
			[
				'id'                 => self::ICON_TYPE,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_STYLE,
				'transport'          => 'refresh',
				'label'              => __( 'Icon Type', 'neve' ),
				'default'            => 'hfgs-icon-style-1',
				'type'               => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'section'            => $this->section,
				'conditional_header' => true,
				'options'            => [
					'is_for'          => 'search_icon',
					'show_labels'     => false,
					'active_callback' => function() {
						// if the component doesn't support buttons, only icons are supported.
						if ( ! $this->has_button_support ) {
							return true;
						}

						// button or icon
						$action_type = component_setting( self::ACTION_TYPE, 'icon', $this->get_class_const( 'COMPONENT_ID' ) );

						return 'icon' === $action_type;
					},
				],
			]
		);

		$sm::get_instance()->add(
			[
				'id'                 => self::CUSTOM_SVG,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_STYLE,
				'transport'          => 'postMessage',
				'label'              => __( 'Custom SVG Content', 'neve' ),
				'default'            => 'icon',
				'type'               => '\Neve\Customizer\Controls\React\Textarea',
				'section'            => $this->section,
				'conditional_header' => true,
				'options'            => [
					'active_callback' => function() {
						$icon_type = component_setting( self::ICON_TYPE, 'hfgs-icon-style-1', $this->get_class_const( 'COMPONENT_ID' ) );

						return 'hfgs-icon-custom' === $icon_type;
					},
					'input_attrs'     => [
						'rows' => 8,
					],
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
		$this->add_customize_icon_controls();
	}
}
