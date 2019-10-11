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

/**
 * Class Logo.
 *
 * @package HFG\Core\Components
 */
class Logo extends Abstract_Component {


	const COMPONENT_ID = 'logo';
	const MAX_WIDTH    = 'max_width';
	const SHOW_TITLE   = 'show_title';
	const SHOW_TAGLINE = 'show_tagline';

	/**
	 * Default spacing value
	 *
	 * @var array
	 */
	protected $default_padding_value = array(
		'mobile'       => array(
			'top'    => 10,
			'right'  => 0,
			'bottom' => 10,
			'left'   => 0,
		),
		'tablet'       => array(
			'top'    => 10,
			'right'  => 0,
			'bottom' => 10,
			'left'   => 0,
		),
		'desktop'      => array(
			'top'    => 10,
			'right'  => 0,
			'bottom' => 10,
			'left'   => 0,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	);

	/**
	 * Logo constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Logo & Site Identity', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'width', 3 );
		$this->set_property( 'section', 'title_tagline' );
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {

		SettingsManager::get_instance()->add_controls_to_tabs(
			$this->get_class_const( 'COMPONENT_ID' ),
			array(
				SettingsManager::TAB_GENERAL => array(
					'custom_logo'     => array(),
					'blogname'        => array(),
					'blogdescription' => array(),
					'blogdescription' => array(),
					'site_icon'       => array(),
				),
			)
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::SHOW_TAGLINE,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => 'absint',
				'default'           => 1,
				'label'             => __( 'Show Site Tagline', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\Checkbox',
				'options'           => [
					'type' => 'checkbox-toggle',
				],
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::SHOW_TITLE,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => 'absint',
				'default'           => 1,
				'label'             => __( 'Show Site Title', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\Checkbox',
				'options'           => [
					'type' => 'checkbox-toggle',
				],
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::MAX_WIDTH,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => array( $this, 'sanitize_responsive_int_json' ),
				'default'           => '{ "mobile": "120", "tablet": "120", "desktop": "120" }',
				'label'             => __( 'Logo max width (px)', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\Range',
				'options'           => [
					'type'                     => 'range-value',
					'hide_responsive_switches' => true,
					'media_query'              => true,
					'step'                     => 1,
					'input_attr'               => [
						'mobile'  => [
							'min'     => 0,
							'max'     => 350,
							'default' => 120,
						],
						'tablet'  => [
							'min'     => 0,
							'max'     => 350,
							'default' => 120,
						],
						'desktop' => [
							'min'     => 0,
							'max'     => 350,
							'default' => 120,
						],
					],
				],
				'section'           => $this->section,
			]
		);

	}

	/**
	 * Render logo section.
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-logo' );
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

		return parent::add_style( $css_array );
	}


}
