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

use HFG\Core\Customizer\Image_Radio_Control;
use HFG\Core\Settings;
use HFG\Main;
use WP_Customize_Manager;

/**
 * Class NavFooter
 *
 * @package HFG\Core\Components
 */
class NavFooter extends Abstract_Component {

	/**
	 * Nav constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param string $panel The panel name.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Footer Menu', 'hfg-module' ) );
		$this->set_property( 'id', 'footer-menu' );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'footer_menu_primary' );
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
		$fn       = array( $this, 'render' );
		$selector = '.builder-item--' . $this->id;

		$wp_customize->add_section(
			$this->section, array(
				'title'    => $this->label,
				'priority' => 30,
				'panel'    => $this->panel,
			)
		);

		$wp_customize->add_setting(
			$this->id . '_style',
			array(
				'default'        => 'style-plain',
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Image_Radio_Control(
				$wp_customize,
				$this->id . '_style',
				[
					'label'   => __( 'Skin Mode' ),
					'section' => $this->section,
					'choices' => array(
						'style-plain'         => array(
							'image' => Settings::get_instance()->url . '/assets/images/customizer/menu_style_1.svg',
							'name'  => __( 'Plain' ),
						),
						'style-full-height'   => array(
							'image' => Settings::get_instance()->url . '/assets/images/customizer/menu_style_2.svg',
							'name'  => __( 'Full Height' ),
						),
						'style-border-bottom' => array(
							'image' => Settings::get_instance()->url . '/assets/images/customizer/menu_style_3.svg',
							'name'  => __( 'Bottom Border' ),
						),
						'style-border-top'    => array(
							'image' => Settings::get_instance()->url . '/assets/images/customizer/menu_style_4.svg',
							'name'  => __( 'Top Border' ),
						),
					),
				]
			)
		);

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial', array(
				'selector'        => $selector,
				'settings'        => array(
					$this->id . '_style',
				),
				'render_callback' => $fn,
			)
		);

		return parent::customize_register( $wp_customize );
	}

	public function render_component() {
		Main::get_instance()->load( 'component-nav-footer' );
	}

}
