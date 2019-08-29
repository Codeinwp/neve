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

use HFG\Core\Settings;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use WP_Customize_Manager;

/**
 * Class NavFooter
 *
 * @package HFG\Core\Components
 */
class NavFooter extends Abstract_Component {
	const COMPONENT_ID   = 'footer-menu';
	const STYLE_ID       = 'style';
	const COLOR_ID       = 'color';
	const HOVER_COLOR_ID = 'hover_color';

	/**
	 * Nav constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Footer Menu', 'neve' ) );
		$this->set_property( 'id', self::COMPONENT_ID );
		$this->set_property( 'width', 6 );
		$this->set_property( 'section', 'footer_menu_primary' );
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
				'id'                => self::STYLE_ID,
				'group'             => self::COMPONENT_ID,
				'tab'               => SettingsManager::TAB_STYLE,
				'transport'         => 'post' . self::COMPONENT_ID,
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'default'           => 'style-plain',
				'label'             => __( 'Skin Mode', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\Radio_Image',
				'options'           => [
					'choices' => array(
						'style-plain'         => array(
							'url'  => Settings\Config::get_url() . '/assets/images/customizer/menu_style_1.svg',
							'name' => '',
						),
						'style-full-height'   => array(
							'url'  => Settings\Config::get_url() . '/assets/images/customizer/menu_style_2.svg',
							'name' => '',
						),
						'style-border-bottom' => array(
							'url'  => Settings\Config::get_url() . '/assets/images/customizer/menu_style_3.svg',
							'name' => '',
						),
						'style-border-top'    => array(
							'url'  => Settings\Config::get_url() . '/assets/images/customizer/menu_style_4.svg',
							'name' => '',
						),
					),

				],
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::COLOR_ID,
				'group'             => self::COMPONENT_ID,
				'tab'               => SettingsManager::TAB_STYLE,
				'transport'         => 'post' . self::COMPONENT_ID,
				'sanitize_callback' => 'sanitize_hex_color',
				'default'           => '#404248',
				'label'             => __( 'Items Color', 'neve' ),
				'type'              => '\WP_Customize_Color_Control',
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::HOVER_COLOR_ID,
				'group'             => self::COMPONENT_ID,
				'tab'               => SettingsManager::TAB_STYLE,
				'transport'         => 'post' . self::COMPONENT_ID,
				'sanitize_callback' => 'sanitize_hex_color',
				'default'           => '#0366d6',
				'label'             => __( 'Items Hover Color', 'neve' ),
				'type'              => '\WP_Customize_Color_Control',
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => 'shortcut',
				'group'             => self::COMPONENT_ID,
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'postMessage',
				'sanitize_callback' => 'esc_attr',
				'type'              => '\Neve\Customizer\Controls\Button',
				'options'           => [
					'button_class' => 'nv-top-bar-menu-shortcut',
					'icon_class'   => 'menu',
					'button_text'  => __( 'Footer Menu', 'neve' ),
					'shortcut'     => true,
				],
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
		Main::get_instance()->load( 'components/component-nav-footer' );
	}

	/**
	 * Add styles to the component.
	 *
	 * @param array $css_array rules array.
	 *
	 * @return array
	 */
	public function add_style( array $css_array = array() ) {
		$color = get_theme_mod( $this->id . '_color' );
		if ( ! empty( $color ) ) {
			$css_array['.nav-menu-footer #footer-menu > li > a'] = array( 'color' => sanitize_hex_color( $color ) );
		}

		$hover_color = get_theme_mod( $this->id . '_hover_color' );
		if ( ! empty( $hover_color ) ) {
			$css_array['.nav-menu-footer:not(.style-full-height) #footer-menu > li:hover > a'] = array( 'color' => sanitize_hex_color( $hover_color ) );

			$css_array['#footer-menu > li > a:after'] = array( 'background-color' => sanitize_hex_color( $hover_color ) );
		}

		return parent::add_style( $css_array );
	}

}
