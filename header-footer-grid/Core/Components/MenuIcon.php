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

use HFG\Main;
use WP_Customize_Manager;

/**
 * Class MenuIcon
 *
 * @package HFG\Core\Components
 */
class MenuIcon extends Abstract_Component {

	/**
	 * MenuIcon constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param string $panel The panel name.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Menu Icon', 'neve' ) );
		$this->set_property( 'id', 'nav-icon' );
		$this->set_property( 'width', 3 );
		$this->set_property( 'section', 'header_menu_icon' );
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
		$prefix   = $this->section;
		$fn       = array( $this, 'render' );
		$selector = 'a.item--' . $this->id;

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
				'theme_supports' => 'hfg_support',
				'default'        => __( 'Menu', 'neve' ),
				'transport'      => 'refresh',
			)
		);

		$wp_customize->add_control(
			$prefix . '_text',
			array(
				'name'            => $prefix . '_text',
				'label'           => __( 'Text', 'neve' ),
				'type'            => 'text',
				'section'         => $this->section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'settings'        => $prefix . '_text' . '_setting',
			)
		);

		return parent::customize_register( $wp_customize );
	}

	/**
	 * Render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'component-menu-icon' );
	}
}
