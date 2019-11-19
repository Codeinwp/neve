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

	/**
	 * The <button> inside the component selector.
	 *
	 * @var string
	 */
	public $button_selector;


	/**
	 * MenuIcon constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Menu Icon', 'neve' ) );
		$this->set_property( 'id', 'nav-icon' );
		$this->set_property( 'width', 1 );
		$this->set_property( 'icon', 'menu' );
		$this->set_property( 'section', self::COMPONENT_ID );
		$this->set_property( 'button_selector', '.builder-item--' . $this->get_id() . ' .navbar-toggle' );
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
				// 'transport'         => 'post' . $this->get_id(),
				'transport'             => 'postMessage',
				'tab'                   => SettingsManager::TAB_GENERAL,
				'sanitize_callback'     => 'wp_filter_nohtml_kses',
				'default'               => '',
				'label'                 => __( 'Menu label', 'neve' ),
				'type'                  => 'text',
				'section'               => $this->section,
				'live_refresh_selector' => $this->button_selector . ' .nav-toggle-label',
				'live_refresh_css_prop' => array(
					'parent'     => $this->button_selector,
					'wrap_class' => 'nav-toggle-label',
					'html_tag'   => 'span',
				),
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
				'live_refresh_selector' => $this->button_selector,
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
			$css_array[ $this->button_selector ]['border-radius'] = $appearance['borderRadius'] . 'px';
		}

		if ( ! empty( $appearance['background'] ) ) {
			$css_array[ $this->button_selector ]['background-color'] = $appearance['background'];
		}

		if ( ! empty( $appearance['text'] ) ) {
			$css_array[ $this->button_selector ]['color']                           = $appearance['text'];
			$css_array[ $this->button_selector . ' .icon-bar' ]['background-color'] = $appearance['text'];
			if ( $appearance['type'] === 'outline' ) {
				$css_array[ $this->button_selector ]['border-color'] = $appearance['text'];
			}
		}

		if ( ! empty( $appearance['borderWidth'] ) && $appearance['type'] === 'outline' ) {
			$css_array[ $this->button_selector ]['border'] = $appearance['borderWidth'] . 'px solid';
		}

		if ( $appearance['type'] !== 'outline' ) {
			$css_array[ $this->button_selector ]['border'] = 'none';
		}

		return parent::add_style( $css_array );
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
