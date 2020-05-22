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

use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use HFG\Traits\Core;
use Neve\Core\Settings\Config;
use Neve\Core\Styles\Dynamic_Selector;

/**
 * Class SearchResponsive
 *
 * @package HFG\Core\Components
 */
class SearchResponsive extends Abstract_Component {
	use Core;

	const COMPONENT_ID = 'header_search_responsive';
	const PLACEHOLDER_ID = 'placeholder';
	const SIZE_ID = 'icon_size';
	const COLOR_ID = 'color';
	const HOVER_COLOR_ID = 'hover_color';
	const OPEN_TYPE = 'open_type';
	const FIELD_HEIGHT = 'field_height';
	const FIELD_FONT_SIZE = 'field_text_size';
	const FIELD_BG = 'field_background';
	const FIELD_TEXT_COLOR = 'field_text_color';
	const FIELD_BORDER_WIDTH = 'field_border_width';
	const FIELD_BORDER_RADIUS = 'field_border_radius';

	/**
	 * Button constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Search Icon', 'neve' ) );
		$this->set_property( 'id', self::COMPONENT_ID );
		$this->set_property( 'width', 1 );
		$this->set_property( 'icon', 'search' );
		$this->set_property( 'is_auto_width', true );
		$this->set_property( 'default_selector', '.builder-item--' . $this->get_id() );
		$this->set_property(
			'default_padding_value',
			array(
				'mobile'       => array(
					'top'    => 0,
					'right'  => 10,
					'bottom' => 0,
					'left'   => 10,
				),
				'tablet'       => array(
					'top'    => 0,
					'right'  => 10,
					'bottom' => 0,
					'left'   => 10,
				),
				'desktop'      => array(
					'top'    => 0,
					'right'  => 10,
					'bottom' => 0,
					'left'   => 10,
				),
				'mobile-unit'  => 'px',
				'tablet-unit'  => 'px',
				'desktop-unit' => 'px',
			)
		);
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {

		SettingsManager::get_instance()->add(
			[
				'id'                => self::PLACEHOLDER_ID,
				'group'             => self::COMPONENT_ID,
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'post' . self::COMPONENT_ID,
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'default'           => __( 'Search for...', 'neve' ),
				'label'             => __( 'Placeholder', 'neve' ),
				'type'              => 'text',
				'section'           => $this->section,
			]
		);


		SettingsManager::get_instance()->add(
			[
				'id'                    => self::SIZE_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'absint',
				'default'               => 15,
				'label'                 => __( 'Icon Size', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Range',
				'options'               => [
					'input_attrs' => [
						'min'        => 10,
						'max'        => 100,
						'defaultVal' => 15,
					],
				],
				'live_refresh_selector' => $this->default_selector . ' .nv-search > svg',
				'live_refresh_css_prop' => array(
					'type' => 'svg-icon-size',
				),
				'section'               => $this->section,
				'conditional_header'    => true,
			]
		);


		SettingsManager::get_instance()->add(
			[
				'id'                    => self::COLOR_ID,
				'group'                 => self::COMPONENT_ID,
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'sanitize_hex_color',
				'label'                 => __( 'Color', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Color',
				'section'               => $this->section,
				'live_refresh_selector' => $this->default_selector . ' .nv-search svg',
				'live_refresh_css_prop' => array(
					'prop'     => 'fill',
					'fallback' => '',
				),
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::HOVER_COLOR_ID,
				'group'                 => self::COMPONENT_ID,
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'sanitize_hex_color',
				'label'                 => __( 'Hover Color', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Color',
				'section'               => $this->section,
				'live_refresh_selector' => $this->default_selector . ' .nv-search:hover svg',
				'live_refresh_css_prop' => array(
					'prop' => 'fill',
				),
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add( [
			'id'                 => self::OPEN_TYPE,
			'group'              => self::COMPONENT_ID,
			'tab'                => SettingsManager::TAB_GENERAL,
			'transport'          => 'post' . self::COMPONENT_ID,
			'sanitize_callback'  => 'wp_filter_nohtml_kses',
			'default'            => 'canvas',
			'label'              => __( 'Open Behaviour', 'neve' ),
			'type'               => '\Neve\Customizer\Controls\React\Radio_Buttons',
			'options'            => [
				'choices' => [
					'canvas'   => [
						'tooltip' => __( 'Canvas', 'neve' ),
						'icon'    => 'editor-alignleft',
					],
					'minimal'  => [
						'tooltip' => __( 'Minimal', 'neve' ),
						'icon'    => 'editor-aligncenter',
					],
					'floating' => [
						'tooltip' => __( 'Header Float', 'neve' ),
						'icon'    => 'editor-alignright',
					],
				]
			],
			'section'            => $this->section,
			'conditional_header' => true,
		] );

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::FIELD_HEIGHT,
				'group'                 => self::COMPONENT_ID,
				'tab'                   => SettingsManager::TAB_STYLE,
				'section'               => $this->section,
				'label'                 => __( 'Search Field Height', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Responsive_Range',
				'live_refresh_selector' => $this->default_selector . ' input[type=search]',
				'live_refresh_css_prop' => array(
					'prop' => 'height',
					'unit' => 'px',
				),
				'options'               => [
					'input_attrs' => [
						'step'       => 1,
						'min'        => 10,
						'max'        => 200,
						'defaultVal' => [
							'mobile'  => 40,
							'tablet'  => 40,
							'desktop' => 40,
						],
						'units'      => [ 'px' ],
					],
				],
				'transport'             => 'postMessage',
				'sanitize_callback'     => array( $this, 'sanitize_responsive_int_json' ),
				'default'               => [
					'mobile'  => 40,
					'tablet'  => 40,
					'desktop' => 40
				],
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::FIELD_FONT_SIZE,
				'group'                 => self::COMPONENT_ID,
				'tab'                   => SettingsManager::TAB_STYLE,
				'section'               => $this->section,
				'label'                 => __( 'Search Field Font Size', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Responsive_Range',
				'live_refresh_selector' => $this->default_selector . ' input[type=search]',
				'live_refresh_css_prop' => array(
					'prop' => 'font-size',
					'unit' => 'px',
				),
				'options'               => [
					'input_attrs' => [
						'step'       => 1,
						'min'        => 10,
						'max'        => 200,
						'defaultVal' => [
							'mobile'  => 14,
							'tablet'  => 14,
							'desktop' => 14,
						],
						'units'      => [ 'px' ],
					],
				],
				'transport'             => 'postMessage',
				'sanitize_callback'     => array( $this, 'sanitize_responsive_int_json' ),
				'default'               => [
					'mobile'  => 14,
					'tablet'  => 14,
					'desktop' => 14
				],
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::FIELD_BG,
				'group'                 => self::COMPONENT_ID,
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'sanitize_hex_color',
				'label'                 => __( 'Field Background Color', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Color',
				'section'               => $this->section,
				'live_refresh_selector' => $this->default_selector . ' input[type=search]',
				'live_refresh_css_prop' => array(
					'prop'     => 'background-color',
					'fallback' => '#ffffff',
				),
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::FIELD_TEXT_COLOR,
				'group'                 => self::COMPONENT_ID,
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'sanitize_hex_color',
				'label'                 => __( 'Field Text and Border Color', 'neve' ),
				'type'                  => 'neve_color_control',
				'section'               => $this->section,
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					[
						'selector' => $this->default_selector . ' input[type=search],' . $this->default_selector . ' input::placeholder',
						'prop'     => 'color',
						'fallback' => 'inherit',
					],
					[
						'selector' => $this->default_selector . ' input[type=search]',
						'prop'     => 'border-color',
						'fallback' => 'inherit',
					],
					[
						'selector' => $this->default_selector . ' .nv-search-icon-wrap .nv-icon svg',
						'prop'     => 'fill',
						'fallback' => 'inherit',
					],
				],
				'conditional_header'    => true,
			]
		);

		$default_border_width = [
			'desktop-unit' => 'px',
			'tablet-unit'  => 'px',
			'mobile-unit'  => 'px',
			'desktop'      => [ 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, ],
			'tablet'       => [ 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, ],
			'mobile'       => [ 'top' => 1, 'right' => 1, 'bottom' => 1, 'left' => 1, ],
		];

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::FIELD_BORDER_WIDTH,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => array( $this, 'sanitize_spacing_array' ),
				'default'               => $default_border_width,
				'label'                 => __( 'Border Width', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Spacing',
				'options'               => [
					'input_attrs' => array(
						'min'   => 0,
						'max'   => 20,
						'units' => [ 'px' ]
					),
					'default'     => $default_border_width,
				],
				'live_refresh_selector' => $this->default_selector . ' input[type=search]',
				'live_refresh_css_prop' => array(
					'prop' => 'border-width',
				),
				'section'               => $this->section,
				'conditional_header'    => true,
			]
		);
		$default_border_radius = [
			'desktop-unit' => 'px',
			'tablet-unit'  => 'px',
			'mobile-unit'  => 'px',
			'desktop'      => [ 'top' => 3, 'right' => 3, 'bottom' => 3, 'left' => 3, ],
			'tablet'       => [ 'top' => 3, 'right' => 3, 'bottom' => 3, 'left' => 3, ],
			'mobile'       => [ 'top' => 3, 'right' => 3, 'bottom' => 3, 'left' => 3, ],
		];
		SettingsManager::get_instance()->add(
			[
				'id'                    => self::FIELD_BORDER_RADIUS,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => array( $this, 'sanitize_spacing_array' ),
				'default'               => $default_border_width,
				'label'                 => __( 'Border Radius', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Spacing',
				'options'               => [
					'input_attrs' => array(
						'min'   => 0,
						'max'   => 100,
						'units' => [ 'px' ]
					),
					'default'     => $default_border_radius,
				],
				'live_refresh_selector' => $this->default_selector . ' input[type=search]',
				'live_refresh_css_prop' => array(
					'prop' => 'border-radius',
				),
				'section'               => $this->section,
				'conditional_header'    => true,
			]
		);
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
		$size = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::SIZE_ID );
		$color = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::COLOR_ID );
		$color_hover = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::HOVER_COLOR_ID );

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $this->default_selector . ' .nv-search > svg',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_WIDTH      => [
					Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::SIZE_ID,
					Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::SIZE_ID ),
				],
				Config::CSS_PROP_HEIGHT     => [
					Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::SIZE_ID,
					Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::SIZE_ID ),
				],
				Config::CSS_PROP_FILL_COLOR => [
					Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::COLOR_ID,
					Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::COLOR_ID ),
				],
			],
		];


		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $this->default_selector . ' .nv-search:hover > svg',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_FILL_COLOR => [
					Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::HOVER_COLOR_ID,
					Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::HOVER_COLOR_ID ),
				],
			],
		];


		return parent::add_style( $css_array );
	}

	/**
	 * The render method for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		add_filter( 'get_search_form', [ $this, 'change_placeholder' ] );
		Main::get_instance()->load( 'components/component-search-responsive' );
		remove_filter( 'get_search_form', [ $this, 'change_placeholder' ] );
	}

	/**
	 * Change the form placeholder.
	 *
	 * @param string $form form markup.
	 *
	 * @return string
	 */
	public function change_placeholder( $form ) {
		$form = '';
		$placeholder = get_theme_mod( $this->id . '_placeholder', __( 'Search for...', 'neve' ) );

		$form .= '<form role="search" method="get" class="search-form" action="' . esc_url( home_url( '/' ) ) . '">';
		$form .= '<label>';
		$form .= '<span class="screen-reader-text">' . __( 'Search for...', 'neve' ) . '</span>';
		$form .= '<input type="search" class="search-field" placeholder="' . esc_html( $placeholder ) . '" value="" name="s">';
		$form .= '</label>';
		$form .= '<input type="submit" class="search-submit" value="Search">';
		$form .= '</form>';

		return $form;
	}
}
