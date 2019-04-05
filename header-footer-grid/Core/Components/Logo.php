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
		$this->set_property( 'label', __( 'Logo & Site Identity', 'neve' ) );
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
	 * @return array
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {

		$fn = array( $this, 'render' );

		$selector = '.builder-item--' . $this->id;

		$wp_customize->add_section(
			$this->section,
			array(
				'title'    => $this->label,
				'priority' => 30,
				'panel'    => $this->panel,
			)
		);
		$partial_settings = array();

		$wp_customize->add_setting(
			$this->id . '_max_width',
			array(
				'transport'         => 'postMessage',
				'theme_supports'    => 'hfg_support',
				'default'           => '{ "mobile": "120", "tablet": "120", "desktop": "120" }',
				'sanitize_callback' => array( $this, 'sanitize_responsive_int_json' ),
			)
		);
		array_push( $partial_settings, $this->id . '_max_width' );
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

		$wp_customize->add_setting(
			$this->id . '_show_title',
			array(
				'transport'         => 'postMessage',
				'theme_supports'    => 'hfg_support',
				'default'           => 1,
				'sanitize_callback' => 'absint',
			)
		);
		array_push( $partial_settings, $this->id . '_show_title' );
		$wp_customize->add_control(
			new Checkbox(
				$wp_customize,
				$this->id . '_show_title',
				[
					'label'   => esc_html__( 'Show Site Title', 'neve' ),
					'type'    => 'checkbox-toggle',
					'section' => $this->section,
				]
			)
		);

		$wp_customize->add_setting(
			$this->id . '_show_tagline',
			array(
				'transport'         => 'postMessage',
				'theme_supports'    => 'hfg_support',
				'default'           => 1,
				'sanitize_callback' => 'absint',
			)
		);
		array_push( $partial_settings, $this->id . '_show_tagline' );
		$wp_customize->add_control(
			new Checkbox(
				$wp_customize,
				$this->id . '_show_tagline',
				[
					'label'   => esc_html__( 'Show Site Tagline', 'neve' ),
					'type'    => 'checkbox-toggle',
					'section' => $this->section,
				]
			)
		);

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial',
			array(
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

	/**
	 * Method to add Component css styles.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
	 */
	public function add_style( array $css_array = array() ) {
		$logo_max_width = json_decode( get_theme_mod( $this->id . '_max_width', '{ "mobile": "120", "tablet": "120", "desktop": "120" }' ), true );
		$selector       = '.site-logo img';
		if ( isset( $logo_max_width['mobile'] ) ) {
			$logo_max_width['mobile']                             = ( $logo_max_width['mobile'] > 0 ) ? $logo_max_width['mobile'] . 'px' : 'auto';
			$css_array[' @media (max-width: 576px)'][ $selector ] = array(
				'max-width' => $logo_max_width['mobile'],
			);
		}
		if ( isset( $logo_max_width['tablet'] ) ) {
			$logo_max_width['tablet']                             = ( $logo_max_width['tablet'] > 0 ) ? $logo_max_width['tablet'] . 'px' : 'auto';
			$css_array[' @media (min-width: 576px)'][ $selector ] = array(
				'max-width' => $logo_max_width['tablet'],
			);
		}
		if ( isset( $logo_max_width['desktop'] ) ) {
			$logo_max_width['desktop']                            = ( $logo_max_width['desktop'] > 0 ) ? $logo_max_width['desktop'] . 'px' : 'auto';
			$css_array[' @media (min-width: 961px)'][ $selector ] = array(
				'max-width' => $logo_max_width['desktop'],
			);
		}

		return $css_array;
	}


}
