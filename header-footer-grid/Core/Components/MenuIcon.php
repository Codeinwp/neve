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

	const COMPONENT_ID      = 'header_menu_icon';
	const SIDEBAR_TOGGLE    = 'sidebar';
	const TEXT_ID           = 'menu_label';
	const BUTTON_APPEARANCE = 'button_appearance';
	const COMPONENT_SLUG    = 'nav-icon';

	/**
	 * Padding settings default values.
	 *
	 * @var array
	 */
	protected $default_padding_value = array(

		'mobile'       => array(
			'top'    => 10,
			'right'  => 15,
			'bottom' => 10,
			'left'   => 15,
		),
		'tablet'       => array(
			'top'    => 10,
			'right'  => 15,
			'bottom' => 10,
			'left'   => 15,
		),
		'desktop'      => array(
			'top'    => 10,
			'right'  => 15,
			'bottom' => 10,
			'left'   => 15,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	);

	/**
	 * Close button target CSS selector.
	 *
	 * @var string
	 */
	private $close_button = '.header-menu-sidebar .close-sidebar-panel .navbar-toggle';

	/**
	 * MenuIcon constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Menu Icon', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_SLUG' ) );
		$this->set_property( 'component_slug', self::COMPONENT_SLUG );
		$this->set_property( 'width', 1 );
		$this->set_property( 'icon', 'menu' );
		$this->set_property( 'section', self::COMPONENT_ID );
		$this->set_property( 'default_selector', '.builder-item--' . $this->get_id() . ' .navbar-toggle' );
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
				'id'                    => self::TEXT_ID,
				'group'                 => $this->get_id(),
				'transport'             => 'postMessage',
				'tab'                   => SettingsManager::TAB_GENERAL,
				'sanitize_callback'     => 'wp_filter_nohtml_kses',
				'default'               => '',
				'label'                 => __( 'Menu label', 'neve' ),
				'type'                  => 'text',
				'section'               => $this->section,
				'live_refresh_selector' => $this->default_selector . ' .nav-toggle-label',
				'live_refresh_css_prop' => array(
					'parent'     => $this->default_selector,
					'wrap_class' => 'nav-toggle-label',
					'html_tag'   => 'span',
				),
				'conditional_header'    => true,
			]
		);
		SettingsManager::get_instance()->add(
			[
				'id'                    => self::BUTTON_APPEARANCE,
				'group'                 => $this->get_id(),
				'transport'             => 'postMessage',
				'tab'                   => SettingsManager::TAB_STYLE,
				'sanitize_callback'     => 'neve_sanitize_button_appearance',
				'default'               => [ 'type' => 'outline' ],
				'label'                 => __( 'Appearance', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Button_Appearance',
				'section'               => $this->section,
				'options'               => [
					'no_hover' => true,
				],
				'live_refresh_selector' => $this->default_selector,
				'live_refresh_css_prop' => array(
					'additional_buttons' => $this->get_class_const( 'COMPONENT_ID' ) !== 'header_menu_icon' ? [] : [
						[
							'button' => $this->close_button,
							'text'   => '.icon-bar',
						],
					],
				),
				'conditional_header'    => true,
			]
		);
	}

	/**
	 * Add CSS style for the component.
	 *
	 * @param array $css_array the css style array.
	 *
	 * @return array
	 */
	public function add_style( array $css_array = array() ) {
		$appearance = \HFG\component_setting( self::BUTTON_APPEARANCE, null, $this->id );

		if ( isset( $appearance['borderRadius'] ) ) {
			$css_array[ $this->default_selector ]['border-radius'] = $appearance['borderRadius'] . 'px';
		}

		if ( ! empty( $appearance['background'] ) ) {
			$css_array[ $this->default_selector ]['background-color'] = $appearance['background'];
		}

		if ( ! empty( $appearance['text'] ) ) {
			$css_array[ $this->default_selector ]['color']                           = $appearance['text'];
			$css_array[ $this->default_selector . ' .icon-bar' ]['background-color'] = $appearance['text'];
			if ( $appearance['type'] === 'outline' ) {
				$css_array[ $this->default_selector ]['border-color'] = $appearance['text'];
			}
		}

		if ( ! empty( $appearance['borderWidth'] ) && $appearance['type'] === 'outline' ) {
			$css_array[ $this->default_selector ]['border'] = $appearance['borderWidth'] . 'px solid';
		}

		if ( $appearance['type'] !== 'outline' ) {
			$css_array[ $this->default_selector ]['border'] = 'none';
		}

		$css_array = array_merge( $css_array, $this->get_close_button_style( $appearance ) );

		return parent::add_style( $css_array );
	}

	/**
	 * Add sidebar close button style.
	 *
	 * @param array $appearance_array the button appearance control value.
	 *
	 * @return array
	 */
	protected function get_close_button_style( $appearance_array ) {
		$additional_style = [];
		if ( isset( $appearance_array['borderRadius'] ) ) {
			$additional_style[ $this->close_button ]['border-radius'] = $appearance_array['borderRadius'] . 'px';
		}
		if ( ! empty( $appearance_array['background'] ) ) {
			$additional_style[ $this->close_button ]['background-color'] = $appearance_array['background'];
		}
		if ( ! empty( $appearance_array['text'] ) ) {
			$additional_style[ $this->close_button ]['color']                           = $appearance_array['text'];
			$additional_style[ $this->close_button . ' .icon-bar' ]['background-color'] = $appearance_array['text'];
			if ( $appearance_array['type'] === 'outline' ) {
				$additional_style[ $this->close_button ]['border-color'] = $appearance_array['text'];
			}
		}
		if ( ! empty( $appearance_array['borderWidth'] ) && $appearance_array['type'] === 'outline' ) {
			$additional_style[ $this->close_button ]['border'] = $appearance_array['borderWidth'] . 'px solid';
		}
		if ( $appearance_array['type'] !== 'outline' ) {
			$additional_style[ $this->close_button ]['border'] = 'none';
		}

		return $additional_style;
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
