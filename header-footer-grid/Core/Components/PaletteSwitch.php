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
use Neve\Core\Styles\Dynamic_Selector;

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

		$default_size_values = [
			'mobile'  => self::DEFAULT_ICON_SIZE,
			'tablet'  => self::DEFAULT_ICON_SIZE,
			'desktop' => self::DEFAULT_ICON_SIZE,
		];

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::SIZE_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_GENERAL,
				'transport'             => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'     => array( $this, 'sanitize_responsive_int_json' ),
				'label'                 => __( 'Icon Size', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Responsive_Range',
				'default'               => $default_size_values,
				'options'               => [
					'input_attrs' => [
						'step'           => 4,
						'min'            => 8,
						'max'            => 120,
						'defaultVal'     => $default_size_values,
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
	 * Method to add Component css styles.
	 *
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_style( array $css_array = array() ) {

		$selector = '.builder-item--' . $this->get_id() . ' .toggle-palette a.toggle span.icon';

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $selector,
			Dynamic_Selector::KEY_RULES    => [
				\Neve\Core\Settings\Config::CSS_PROP_WIDTH => [
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::SIZE_ID,
					Dynamic_Selector::META_DEFAULT       => '{ "mobile": "' . self::DEFAULT_ICON_SIZE . '", "tablet": "' . self::DEFAULT_ICON_SIZE . '", "desktop": "' . self::DEFAULT_ICON_SIZE . '" }',
				],
				\Neve\Core\Settings\Config::CSS_PROP_HEIGHT => [
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::SIZE_ID,
					Dynamic_Selector::META_DEFAULT       => '{ "mobile": "' . self::DEFAULT_ICON_SIZE . '", "tablet": "' . self::DEFAULT_ICON_SIZE . '", "desktop": "' . self::DEFAULT_ICON_SIZE . '" }',
				],
			],
		];

		return parent::add_style( $css_array );
	}

	/**
	 * Create an allow rule for kses function to allow SVG
	 *
	 * @return array
	 */
	public static function get_kses_extended_ruleset() {
		$kses_defaults = wp_kses_allowed_html( 'post' );

		$svg_args = array(
			'svg'   => array(
				'class'           => true,
				'aria-hidden'     => true,
				'aria-labelledby' => true,
				'role'            => true,
				'xmlns'           => true,
				'width'           => true,
				'height'          => true,
				'viewbox'         => true, // <= Must be lower case!
			),
			'g'     => array( 'fill' => true ),
			'title' => array( 'title' => true ),
			'path'  => array(
				'd'    => true,
				'fill' => true,
			),
		);
		return array_merge( $kses_defaults, $svg_args );
	}

	/**
	 * Return a svg icon for the provided string.
	 *
	 * @param string $icon The icon string.
	 *
	 * @return string
	 */
	public static function get_icon( $icon ) {
		$available_icons = [
			'contrast'      => '<svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256 C512,114.516,397.503,0,256,0z M276,471.079V40.921C385.28,50.889,472,142.704,472,256C472,369.28,385.294,461.11,276,471.079z" /></svg>',
			'night'         => '<svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>',
			'toggle'        => '<svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z" /></svg>',
			'accessibility' => '<svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48c114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 56C149.961 64 64 149.961 64 256s85.961 192 192 192 192-85.961 192-192S362.039 64 256 64zm0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807.851 101.023 12.306 123.052 25.037 155.621 3.617 9.26-.957 19.698-10.217 23.315-9.261 3.617-19.699-.957-23.316-10.217-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549-3.615 9.255-14.05 13.836-23.315 10.217-9.26-3.617-13.834-14.056-10.217-23.315 12.713-32.541 24.185-54.541 25.037-155.621-26.629-3.058-53.428-9.027-82.141-15.807-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0 8.599-2.03 17.218 3.294 19.249 11.895 2.029 8.601-3.297 17.219-11.897 19.249z" /></svg>',
		];

		if ( in_array( $icon, array_keys( $available_icons ), true ) ) {
			return $available_icons[ $icon ];
		}
		return $available_icons['contrast'];
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
