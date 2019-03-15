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

use HFG\Core\Customizer\Slider_Control;
use HFG\Core\Customizer\Text_Radio_Control;
use HFG\Core\Customizer\Toggle_Control;
use HFG\Core\Settings;
use HFG\Main;
use WP_Customize_Manager;

/**
 * Class Logo
 *
 * @package HFG\Core\Components
 */
class Logo extends Abstract_Component {

	/**
	 * Logo constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param string $panel The panel name.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Logo & Site Identity', 'hfg-module' ) );
		$this->set_property( 'id', 'logo' );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'title_tagline' );
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

		$fn = array( $this, 'render' );

		$selector = '.builder-item--' . $this->id;

		$wp_customize->add_section(
			$this->section, array(
				'title'    => $this->label,
				'priority' => 30,
				'panel'    => $this->panel,
			)
		);

		$wp_customize->add_setting(
			$this->id . '_max_width',
			array(
				'default'        => 120,
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Slider_Control(
				$wp_customize,
				$this->id . '_max_width',
				[
					'label'       => esc_html__( 'Logo Max Width', 'hfg-module' ),
					'section'     => $this->section,
					'input_attrs' => array(
						'min'  => 50,
						'max'  => 400,
						'step' => 1,
					),
				]
			)
		);

		$wp_customize->add_setting(
			$this->id . '_show_title',
			array(
				'default'        => 1,
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Toggle_Control(
				$wp_customize,
				$this->id . '_show_title',
				[
					'label'   => esc_html__( 'Show Site Title', 'hfg-module' ),
					'section' => $this->section,
				]
			)
		);

		$wp_customize->add_setting(
			$this->id . '_show_tagline',
			array(
				'default'        => 1,
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Toggle_Control(
				$wp_customize,
				$this->id . '_show_tagline',
				[
					'label'   => esc_html__( 'Show Site Tagline', 'hfg-module' ),
					'section' => $this->section,
				]
			)
		);

		$wp_customize->add_setting(
			$this->id . '_logo_pos',
			array(
				'default'        => 'top',
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Text_Radio_Control(
				$wp_customize,
				$this->id . '_logo_pos',
				[
					'label'   => __( 'Logo Position' ),
					'section' => $this->section,
					'choices' => array(
						'top'    => __( 'Top', 'hfg-module' ),
						'left'   => __( 'Left', 'hfg-module' ),
						'right'  => __( 'Right', 'hfg-module' ),
						'bottom' => __( 'Bottom', 'hfg-module' ),
					),
				]
			)
		);

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial', array(
				'selector'        => $selector,
				'settings'        => array(
					$this->id . '_max_width',
					$this->id . '_show_title',
					$this->id . '_show_tagline',
					$this->id . '_logo_pos',
				),
				'render_callback' => $fn,
			)
		);

		return parent::customize_register( $wp_customize );
	}


	/**
	 * Render logo section.
	 *
	 */
	public function render_component() {
		Main::get_instance()->load('component-logo');
	}
}
