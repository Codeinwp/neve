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
	const CUSTOM_LOGO  = 'custom_logo';
	const DISPLAY      = 'display';
	const MAX_WIDTH    = 'max_width';
	const SHOW_TITLE   = 'show_title';
	const SHOW_TAGLINE = 'show_tagline';
	const DISABLE_LINK = 'disable_link';
	const COLOR_ID     = 'color';

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
		$this->set_property( 'description', __( 'Display your company logo here or simply use words to describe your business.', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'component_slug', 'hfg-logo' );
		$this->set_property( 'width', 3 );
		$this->set_property( 'icon', 'admin-appearance' );
		$this->set_property( 'section', 'title_tagline' );
		$this->set_property( 'preview_image', esc_url( get_template_directory_uri() . '/header-footer-grid/assets/images/customizer/component-site-logo.jpg' ) );
		$this->set_property( 'default_selector', '.builder-item--' . $this->get_id() . ' .site-logo' );
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {
		if ( $this->get_class_const( 'COMPONENT_ID' ) === 'logo' ) {
			SettingsManager::get_instance()->add_controls_to_tabs(
				$this->get_class_const( 'COMPONENT_ID' ),
				array(
					SettingsManager::TAB_GENERAL => array(
						self::CUSTOM_LOGO => array(),
						'blogname'        => array(),
						'blogdescription' => array(),
						'site_icon'       => array(),
					),
				)
			);
		}

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::DISPLAY,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_builder_id(),
				'sanitize_callback'  => 'wp_filter_nohtml_kses',
				'default'            => 'default',
				'label'              => __( 'Display', 'neve' ),
				'type'               => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'options'            => [
					'priority'      => - 1,
					'is_for'        => 'logo',
					'large_buttons' => true,
				],
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::SHOW_TAGLINE,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => 1,
				'label'              => __( 'Show Site Tagline', 'neve' ),
				'type'               => 'neve_toggle_control',
				'options'            => [
					'type' => 'checkbox-toggle',
				],
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::SHOW_TITLE,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => 1,
				'label'              => __( 'Show Site Title', 'neve' ),
				'type'               => 'neve_toggle_control',
				'options'            => [
					'type' => 'checkbox-toggle',
				],
				'section'            => $this->section,
				'conditional_header' => true,
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
					'priority'                 => 12,
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

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::DISABLE_LINK,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => false,
				'label'              => __( 'Disable Homepage Link', 'neve' ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);
		SettingsManager::get_instance()->add(
			[
				'id'                    => self::COLOR_ID,
				'group'                 => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'sanitize_hex_color',
				'label'                 => __( 'Text Color', 'neve' ),
				'type'                  => 'neve_color_control',
				'section'               => $this->section,
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					[
						'selector' => $this->default_selector . ' .brand .nv-title-tagline-wrap',
						'prop'     => 'color',
						'fallback' => 'inherit',
					],
				],
				'conditional_header'    => true,
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
		$logo_max_width = json_decode( SettingsManager::get_instance()->get( $this->get_id() . '_' . self::MAX_WIDTH, '{ "mobile": "120", "tablet": "120", "desktop": "120" }' ), true );
		$selector       = '.builder-item--' . $this->get_id() . ' .site-logo img';
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

		$color = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::COLOR_ID );
		if ( ! empty( $color ) ) {
			$css_array[ $this->default_selector . ' .brand .nv-title-tagline-wrap' ] = [ 'color' => sanitize_hex_color( $color ) ];
		}

		return parent::add_style( $css_array );
	}
}
