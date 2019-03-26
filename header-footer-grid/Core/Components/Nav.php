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
use HFG\Main;
use Neve\Customizer\Controls\Radio_Image;
use Neve\Customizer\Controls\Button;
use WP_Customize_Manager;

/**
 * Class Nav
 *
 * @package HFG\Core\Components
 */
class Nav extends Abstract_Component {

	/**
	 * Nav constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param string $panel The panel name.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Primary Menu', 'neve' ) );
		$this->set_property( 'id', 'primary-menu' );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'header_menu_primary' );
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
			$this->section,
			array(
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
			new Radio_Image(
				$wp_customize,
				$this->id . '_style',
				[
					'label'   => __( 'Skin Mode', 'neve' ),
					'section' => $this->section,
					'choices' => array(
						'style-plain'         => array(
							'url'  => Settings::get_instance()->url . '/assets/images/customizer/menu_style_1.svg',
							'name' => __( 'Plain', 'neve' ),
						),
						'style-full-height'   => array(
							'url'  => Settings::get_instance()->url . '/assets/images/customizer/menu_style_2.svg',
							'name' => __( 'Full Height', 'neve' ),
						),
						'style-border-bottom' => array(
							'url'  => Settings::get_instance()->url . '/assets/images/customizer/menu_style_3.svg',
							'name' => __( 'Bottom Border', 'neve' ),
						),
						'style-border-top'    => array(
							'url'  => Settings::get_instance()->url . '/assets/images/customizer/menu_style_4.svg',
							'name' => __( 'Top Border', 'neve' ),
						),
					),
				]
			)
		);


		$wp_customize->add_setting(
			$this->id . '_color',
			array(
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
				'default'        => '#404248'
			)
		);
		$wp_customize->add_control(
			new \WP_Customize_Color_Control(
				$wp_customize,
				$this->id . '_color',
				array(
					'label' => __( 'Primary Menu Items Color', 'neve' ),
					'section'     => $this->section,
				)
			)
		);


		$wp_customize->add_setting(
			$this->id . '_hover_color',
			array(
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
				'default'        => '#0366d6'
			)
		);
		$wp_customize->add_control(
			new \WP_Customize_Color_Control(
				$wp_customize,
				$this->id . '_hover_color',
				array(
					'label' => __( 'Primary Menu Items Hover Color', 'neve' ),
					'section'     => $this->section,
				)
			)
		);

		$wp_customize->add_setting(
			$this->id . '_shortcut',
			array(
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Button(
				$wp_customize,
				$this->id . '_shortcut',
				array(
					'button_class' => 'nv-top-bar-menu-shortcut',
					'icon_class'   => 'menu',
					'button_text'  => __( 'Select Primary Menu', 'neve' ),
					'shortcut'     => true,
					'section'      => $this->section,
				)
			)
		);

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial',
			array(
				'selector'        => $selector,
				'settings'        => array(
					$this->id . '_style',
					$this->id . '_shortcut',
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
	 * @return mixed
	 */
	public function render_component() {
		Main::get_instance()->load( 'component-nav' );
	}

}
