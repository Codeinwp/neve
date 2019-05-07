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

/**
 * Class Nav
 *
 * @package HFG\Core\Components
 */
class Nav extends Abstract_Component {
	const COMPONENT_ID    = 'primary-menu';
	const STYLE_ID        = 'style';
	const COLOR_ID        = 'color';
	const HOVER_COLOR_ID  = 'hover_color';
	const ACTIVE_COLOR_ID = 'active_color';
	const LAST_ITEM_ID    = 'neve_last_menu_item';

	/**
	 * Nav constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Primary Menu', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'header_menu_primary' );

		$this->default_align = 'right';

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
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_STYLE,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
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
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_STYLE,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => 'sanitize_hex_color',
				'default'           => '#404248',
				'label'             => __( 'Items Color', 'neve' ),
				'type'              => '\WP_Customize_Color_Control',
				'section'           => $this->section,
			]
		);
		SettingsManager::get_instance()->add(
			[
				'id'                => self::ACTIVE_COLOR_ID,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_STYLE,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => 'sanitize_hex_color',
				'default'           => '#0366d6',
				'label'             => __( 'Active Item Color', 'neve' ),
				'type'              => '\WP_Customize_Color_Control',
				'section'           => $this->section,
			]
		);
		SettingsManager::get_instance()->add(
			[
				'id'                => self::HOVER_COLOR_ID,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_STYLE,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => 'sanitize_hex_color',
				'default'           => '#0366d6',
				'label'             => __( 'Items Hover Color', 'neve' ),
				'type'              => '\WP_Customize_Color_Control',
				'section'           => $this->section,
			]
		);

		$default_last = 'search';
		if ( class_exists( 'WooCommerce' ) ) {
			$default_last = 'search-cart';
		}

		$choices = [
			'none'   => __( 'None', 'neve' ),
			'search' => __( 'Search', 'neve' ),
		];

		if ( class_exists( 'WooCommerce' ) ) {
			$choices['cart']        = __( 'Cart', 'neve' );
			$choices['search-cart'] = __( 'Search & Cart', 'neve' );
		}

		SettingsManager::get_instance()->add(
			[
				'id'                => self::LAST_ITEM_ID,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'noformat'          => true,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'default'           => $default_last,
				'label'             => __( 'Last Menu Item', 'neve' ),
				'type'              => 'select',
				'options'           => [
					'choices' => $choices,
				],
				'section'           => $this->section,
			]
		);
		SettingsManager::get_instance()->add(
			[
				'id'                => 'shortcut',
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'postMessage',
				'sanitize_callback' => 'esc_attr',
				'type'              => '\Neve\Customizer\Controls\Button',
				'options'           => [
					'button_text'  => __( 'Primary Menu', 'neve' ),
					'button_class' => 'nv-top-bar-menu-shortcut',
					'icon_class'   => 'menu',
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
		Main::get_instance()->load( 'components/component-nav' );
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
			$css_array['#nv-primary-navigation li a, #nv-primary-navigation li a .caret'] = array( 'color' => sanitize_hex_color( $color ) );
		}

		$hover_color = get_theme_mod( $this->id . '_hover_color' );
		if ( ! empty( $hover_color ) ) {
			$css_array['.nav-menu-primary:not(.style-full-height) #nv-primary-navigation li:hover > a,
			.nav-menu-primary:not(.style-full-height) #nv-primary-navigation li:hover > a .caret'] = array( 'color' => sanitize_hex_color( $hover_color ) );

			$css_array['#nv-primary-navigation a:after'] = array( 'background-color' => sanitize_hex_color( $hover_color ) );
		}

		$active_color = get_theme_mod( $this->id . '_active_color' );
		if ( ! empty( $active_color ) ) {
			$css_array['.nav-menu-primary #nv-primary-navigation li.current-menu-item > a,
			.nav-menu-primary:not(.style-full-height) #nv-primary-navigation li.current-menu-item > a .caret'] = array( 'color' => sanitize_hex_color( $active_color ) );
		}

		return parent::add_style( $css_array );
	}


}
