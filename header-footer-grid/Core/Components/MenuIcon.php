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
use Neve\Customizer\Controls\Checkbox;
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
	 * @return array
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {
		$prefix           = $this->section;
		$fn               = array( $this, 'render' );
		$selector         = '.builder-item--' . $this->id;
		$partial_settings = array();

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
				'default'           => __( 'Menu', 'neve' ),
				'transport'         => 'refresh',
				'sanitize_callback' => 'wp_filter_nohtml_kses',
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
				'settings'        => $this->id . '_text' . '_setting',
			)
		);

		$wp_customize->add_setting(
			$prefix . '_sidebar',
			array(
				'theme_supports'    => 'hfg_support',
				'default'           => 0,
				'transport'         => 'postMessage',
				'sanitize_callback' => 'absint',
			)
		);
		array_push( $partial_settings, $prefix . '_sidebar' );
		$wp_customize->add_control(
			new Checkbox(
				$wp_customize,
				$prefix . '_sidebar',
				[
					'label'   => esc_html__( 'Show Sidebar', 'neve' ),
					'type'    => 'checkbox-toggle',
					'section' => $this->section,
				]
			)
		);

		$wp_customize->selective_refresh->add_partial(
			$prefix . '_partial',
			array(
				'selector'        => $selector,
				'settings'        => $partial_settings,
				'render_callback' => $fn,
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
