<?php
/**
 * Frontend Palette Switch Component class for Header Footer Grid.
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
use Neve\Core\Settings\Config;

/**
 * Class PaletteSwitch
 *
 * @package HFG\Core\Components
 */
class PaletteSwitch extends Abstract_Component {

	const COMPONENT_ID      = 'header_palette_switch';
	const LIGHT_PALETTE_ID  = 'light_palette';
	const DARK_PALETTE_ID   = 'dark_palette';
	const TOGGLE_ICON_ID    = 'toggle_icon';
	const PLACEHOLDER_ID    = 'placeholder';
	const AUTO_ADJUST       = 'auto_adjust_color';
	const DESCRIPTION_ID    = 'description_info';
	const SIZE_ID           = 'icon_size';
	const DEFAULT_ICON_SIZE = 16;

	/**
	 * The section icon.
	 *
	 * @access protected
	 * @var string $icon
	 */
	protected $icon = 'buddicons-topics';
	/**
	 * The component default width.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var int $width
	 */
	protected $width = 1;
	/**
	 * The component slug.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $section
	 */
	protected $component_slug = 'hfg-palette-icon';

	/**
	 * PaletteSwitch constructor
	 *
	 * @return void
	 */
	public function init() {
		$this->set_property( 'label', __( 'Palette Switch', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'default_selector', '.builder-item--' . $this->get_id() );
	}

	/**
	 * PaletteSwitch register settings controls
	 *
	 * @return void
	 */
	public function add_settings() {

		$customizer            = get_theme_mod( 'neve_global_colors', neve_get_global_colors_default( true ) );
		$defined_palettes      = $customizer['palettes'];
		$light_palette_default = $customizer['activePalette'];
		$dark_palette_default  = isset( $customizer['palettes']['darkMode'] ) ? 'darkMode' : array_keys( $customizer['palettes'] )[1];

		$available_palettes = [];
		foreach ( $defined_palettes as $key => $palette_data ) {
			$available_palettes[ $key ] = $palette_data['name'];
		}

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::LIGHT_PALETTE_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_GENERAL,
				'transport'             => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'     => 'wp_filter_nohtml_kses',
				'label'                 => __( 'Light Palette', 'neve' ),
				'description'           => __( 'Light Palette', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Inline_Select',
				'default'               => $light_palette_default,
				'options'               => [
					'options' => $available_palettes,
					'default' => $light_palette_default,
				],
				'live_refresh_selector' => true,
				'section'               => $this->section,
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::DARK_PALETTE_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_GENERAL,
				'transport'             => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'     => 'wp_filter_nohtml_kses',
				'label'                 => __( 'Dark Palette', 'neve' ),
				'description'           => __( 'Dark Palette', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Inline_Select',
				'default'               => $dark_palette_default,
				'live_refresh_selector' => true,
				'options'               => [
					'options' => $available_palettes,
					'default' => $dark_palette_default,
				],
				'section'               => $this->section,
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::TOGGLE_ICON_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_GENERAL,
				'transport'             => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'     => 'wp_filter_nohtml_kses',
				'label'                 => __( 'Select icon', 'neve' ),
				'description'           => __( 'Select icon', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Radio_Buttons',
				'default'               => 'contrast',
				'options'               => [
					'is_for' => 'palette_switch',
				],
				'live_refresh_selector' => true,
				'section'               => $this->section,
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::SIZE_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_GENERAL,
				'transport'             => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'     => 'absint',
				'default'               => self::DEFAULT_ICON_SIZE,
				'label'                 => __( 'Icon Size', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Responsive_Range',
				'options'               => [
					'input_attrs' => [
						'step'           => 4,
						'min'            => 8,
						'max'            => 120,
						'defaultVal'     => [
							'mobile'  => self::DEFAULT_ICON_SIZE,
							'tablet'  => self::DEFAULT_ICON_SIZE,
							'desktop' => self::DEFAULT_ICON_SIZE,
						],
						'units'          => [ 'px' ],
						'hideResponsive' => false,
					],
				],
				'live_refresh_selector' => $this->default_selector . ' div.component-wrap .palette-icon-wrapper svg',
				'live_refresh_css_prop' => array(
					'type'    => 'svg-icon-size',
					'default' => self::DEFAULT_ICON_SIZE,
				),
				'section'               => $this->section,
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::PLACEHOLDER_ID,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'wp_filter_nohtml_kses',
				'default'            => '',
				'label'              => __( 'Label', 'neve' ),
				'options'            => [
					'input_attrs' => array(
						'placeholder' => __( 'Leave blank for no label ...', 'neve' ),
					),
				],
				'type'               => 'text',
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::AUTO_ADJUST,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => 1,
				'label'              => __( 'Automatically adjust color scheme', 'neve' ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::DESCRIPTION_ID,
				'group'             => $this->get_id(),
				'transport'         => 'postMessage',
				'tab'               => SettingsManager::TAB_GENERAL,
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'type'              => '\HFG\Core\Customizer\Description_Control',
				'section'           => $this->section,
				'options'           => [
					'options' => array(
						/* translators: %s: Link to Learn More page. */
						'html_description' => sprintf( __( 'Adjust default color scheme based on the user device preferences. %1$sLearn More%2$s.', 'neve' ), '<a href="">', '</a>' ),
					),
				],
			]
		);
	}

	/**
	 * Render the component
	 *
	 * @return mixed
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-palette-switch' );
	}


}
