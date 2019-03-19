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

use HFG\Core\Customizer\Customize_Setting;
use HFG\Main;
use Neve\Customizer\Controls\Checkbox;
use Neve\Customizer\Controls\Range;
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

		$fn = array( $this, 'render_component' );

		$selector = '.builder-item--' . $this->id;

		$wp_customize->add_section(
			$this->section, array(
				'title'    => $this->label,
				'priority' => 30,
				'panel'    => $this->panel,
			)
		);
		$partial_settings = array();

		$setting = new Customize_Setting(
			array(
				'id'        => $this->id . '_max_width',
				'transport' => 'postMessage',
				'default'   => '{ "mobile": "120", "tablet": "120", "desktop": "120" }',
			)
		);
		$wp_customize->add_setting( $setting->id, $setting->setting_args() );
		array_push( $partial_settings, $setting->id );
		$wp_customize->add_control(
			new Range(
				$wp_customize,
				$this->id . '_max_width',
				array(
					'label'       => esc_html__( 'Logo max width (px)', 'neve' ),
					'section'     => $this->section,
					'type'        => 'range-value',
					'media_query' => true,
					'step'        => 1,
					'input_attr'  => array(
						'mobile'  => array(
							'min'     => 0,
							'max'     => 350,
							'default' => 120,
						),
						'tablet'  => array(
							'min'     => 0,
							'max'     => 350,
							'default' => 120,
						),
						'desktop' => array(
							'min'     => 0,
							'max'     => 350,
							'default' => 120,
						),
					),
				)
			)
		);

		$setting = new Customize_Setting(
			array(
				'id'        => $this->id . '_show_title',
				'transport' => 'postMessage',
				'default'   => 1,
			)
		);
		$wp_customize->add_setting( $setting->id, $setting->setting_args() );
		array_push( $partial_settings, $setting->id );
		$wp_customize->add_control(
			new Checkbox(
				$wp_customize,
				$this->id . '_show_title',
				[
					'label'   => esc_html__( 'Show Site Title', 'hfg-module' ),
					'type'    => 'checkbox-toggle',
					'section' => $this->section,
				]
			)
		);

		$setting = new Customize_Setting(
			array(
				'id'        => $this->id . '_show_tagline',
				'transport' => 'postMessage',
				'default'   => 1,
			)
		);
		$wp_customize->add_setting( $setting->id, $setting->setting_args() );
		array_push( $partial_settings, $setting->id );
		$wp_customize->add_control(
			new Checkbox(
				$wp_customize,
				$this->id . '_show_tagline',
				[
					'label'   => esc_html__( 'Show Site Tagline', 'hfg-module' ),
					'type'    => 'checkbox-toggle',
					'section' => $this->section,
				]
			)
		);

		$setting = new Customize_Setting(
			array(
				'id'        => $this->id . '_logo_pos',
				'transport' => 'postMessage',
				'default'   => 'top',
			)
		);
		$wp_customize->add_setting( $setting->id, $setting->setting_args() );
		array_push( $partial_settings, $setting->id );
		$wp_customize->add_control(
			$this->id . '_logo_pos',
			[
				'label'   => __( 'Logo Position', 'hfg-module' ),
				'type'    => 'select',
				'section' => $this->section,
				'choices' => array(
					'top'    => __( 'Top', 'hfg-module' ),
					'left'   => __( 'Left', 'hfg-module' ),
					'right'  => __( 'Right', 'hfg-module' ),
					'bottom' => __( 'Bottom', 'hfg-module' ),
				),
			]
		);

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial', array(
				'selector'        => $selector,
				'settings'        => $partial_settings,
				'render_callback' => $fn,
			)
		);

		return parent::customize_register( $wp_customize );
	}


	/**
	 * Render logo section.
	 */
	public function render_component() {
		Main::get_instance()->load( 'component-logo' );
	}
}
