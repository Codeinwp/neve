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

use HFG\Main;
use WP_Customize_Manager;

/**
 * Class Button
 *
 * @package HFG\Core\Components
 */
class Button extends Abstract_Component {

	/**
	 * Button constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param string $panel The panel name.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Button', 'neve' ) );
		$this->set_property( 'id', 'button_base' );
		$this->set_property( 'width', 1 );
		$this->set_property( 'section', 'header_button' );
		$this->set_property( 'panel', $panel );
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {
		$prefix   = $this->id;
		$fn       = array( $this, 'render' );
		$selector = '.builder-item--' . $this->id;

		$wp_customize->add_section(
			$this->section,
			array(
				'title'    => $this->label,
				'priority' => 30,
				'panel'    => $this->panel,
			)
		);

		$wp_customize->add_setting(
			$prefix . '_text' . '_setting',
			array(
				'theme_supports'    => 'hfg_support',
				'default'           => __( 'Button', 'neve' ),
				'transport'         => 'postMessage',
				'sanitize_callback' => 'wp_filter_nohtml_kses',
			)
		);
		$wp_customize->add_setting(
			$prefix . '_link' . '_setting',
			array(
				'theme_supports'    => 'hfg_support',
				'default'           => '#',
				'transport'         => 'postMessage',
				'sanitize_callback' => 'wp_filter_nohtml_kses',
			)
		);

		$wp_customize->add_control(
			$prefix . '_text' . '_setting',
			array(
				'label'    => __( 'Text', 'neve' ),
				'type'     => 'text',
				'settings' => $prefix . '_text' . '_setting',
				'section'  => $this->section,
			)
		);
		$wp_customize->add_control(
			$prefix . '_link' . '_setting',
			array(
				'label'    => __( 'Link', 'neve' ),
				'type'     => 'text',
				'settings' => $prefix . '_link' . '_setting',
				'section'  => $this->section,
			)
		);
		$wp_customize->selective_refresh->add_partial(
			$this->panel,
			array(
				'selector'        => $selector,
				'settings'        => array(
					$prefix . '_link' . '_setting',
					$prefix . '_text' . '_setting',
				),
				'render_callback' => $fn,
			)
		);
		return parent::customize_register( $wp_customize );
	}

	/**
	 * The render method for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'component-button' );
	}
}
