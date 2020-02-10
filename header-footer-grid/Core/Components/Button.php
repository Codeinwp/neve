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

/**
 * Class Button
 *
 * @package HFG\Core\Components
 */
class Button extends Abstract_Component {

	const COMPONENT_ID = 'button_base';
	const LINK_ID      = 'link_setting';
	const TEXT_ID      = 'text_setting';
	const STYLE_ID     = 'style_setting';

	/**
	 * Default spacing value
	 *
	 * @var array
	 */
	protected $default_padding_value = array(
		'mobile'       => array(
			'top'    => 8,
			'right'  => 12,
			'bottom' => 8,
			'left'   => 12,
		),
		'tablet'       => array(
			'top'    => 8,
			'right'  => 12,
			'bottom' => 8,
			'left'   => 12,
		),
		'desktop'      => array(
			'top'    => 8,
			'right'  => 12,
			'bottom' => 8,
			'left'   => 12,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	);

	/**
	 * Button constructor.
	 *
	 * @param string $panel Builder panel.
	 */
	public function __construct( $panel ) {
		parent::__construct( $panel );
		$this->default_selector = '.builder-item--' . $this->get_id() . ' > .component-wrap > .button';
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
		$this->set_property( 'component_slug', 'hfg-button' );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'header_button' );
		$this->set_property( 'icon', 'admin-links' );
		$this->set_property( 'is_auto_width', true );
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
				'id'                 => self::LINK_ID,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'wp_filter_nohtml_kses',
				'default'            => '#',
				'label'              => __( 'Link', 'neve' ),
				'type'               => 'text',
				'section'            => $this->section,
				'use_dynamic_fields' => array( 'url' ),
				'conditional_header' => true,
			]
		);
		SettingsManager::get_instance()->add(
			[
				'id'                 => self::TEXT_ID,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'wp_filter_nohtml_kses',
				'default'            => __( 'Button', 'neve' ),
				'label'              => __( 'Text', 'neve' ),
				'type'               => 'text',
				'section'            => $this->section,
				'use_dynamic_fields' => array( 'string' ),
				'conditional_header' => true,
			]
		);


		$defaults = [
			'type'            => 'fill',
			'background'      => '',
			'backgroundHover' => '',
			'text'            => '',
			'textHover'       => '',
			'borderRadius'    => 3,
			'borderWidth'     => 1,
		];
		SettingsManager::get_instance()->add(
			[
				'id'                 => self::STYLE_ID,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_STYLE,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'default'            => $defaults,
				'sanitize_callback'  => 'neve_sanitize_button_appearance',
				'label'              => __( 'Appearance', 'neve' ),
				'type'               => 'neve_button_appearance',
				'section'            => $this->section,
				'conditional_header' => true,
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
		$style = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::STYLE_ID );
		if ( ! empty( $style ) ) {
			if ( ! empty( $style['background'] ) ) {
				$css_array[ $this->default_selector ]['background-color'] = $style['background'];
			}
			if ( ! empty( $style['backgroundHover'] ) ) {
				$css_array[ $this->default_selector . ':hover' ]['background-color'] = $style['backgroundHover'];
			}
			if ( ! empty( $style['text'] ) ) {
				$css_array[ $this->default_selector ]['color'] = $style['text'];
			}
			if ( ! empty( $style['textHover'] ) ) {
				$css_array[ $this->default_selector . ':hover' ]['color'] = $style['textHover'];
			}
			if ( isset( $style['borderRadius'] ) ) {
				$css_array[ $this->default_selector ]['border-radius'] = $style['borderRadius'] . 'px';
			}

			if ( $style['type'] === 'outline' ) {
				if ( ! empty( $style['text'] ) ) {
					$css_array[ $this->default_selector ]['border-color'] = $style['text'];
				}
				if ( ! empty( $style['textHover'] ) ) {
					$css_array[ $this->default_selector . ':hover' ]['border-color'] = $style['textHover'];
				}
				if ( ! empty( $style['borderWidth'] ) ) {
					$css_array[ $this->default_selector ]['border'] = $style['borderWidth'] . 'px solid';
				}
			}
		}

		return parent::add_style( $css_array );
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
