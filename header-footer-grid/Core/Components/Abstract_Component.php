<?php
/**
 * Abstract Component class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Components;

use HFG\Core\Interfaces\Component;
use HFG\Core\Settings;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use HFG\Traits\Core;
use WP_Customize_Manager;

/**
 * Class Abstract_Component
 *
 * @package HFG\Core
 */
abstract class Abstract_Component implements Component {
	use Core;

	const ALIGNMENT_ID = 'component_align';
	const PADDING_ID   = 'component_padding';
	const MARGIN_ID    = 'component_margin';
	/**
	 * Current id of the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var null|string
	 */
	public static $current_component = null;
	/**
	 * Default alignament value for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var null|string
	 */
	public $default_align = 'left';
	/**
	 * Current X pos of the component if set.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var mixed|null $current_x
	 */
	public $current_x = null;
	/**
	 * Current Width of the component if set.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var mixed|null $current_width
	 */
	public $current_width = null;
	/**
	 * The ID of component.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $id
	 */
	protected $id;
	/**
	 * The section name for the component
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $section
	 */
	protected $section;
	/**
	 * The component default width.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var int $width
	 */
	protected $width = 1;
	/**
	 * The component label
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $label
	 */
	protected $label;
	/**
	 * The component description
	 *
	 * @since   1.0.1
	 * @access  protected
	 * @var string $description
	 */
	protected $description;
	/**
	 * The component priority in customizer
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var int $priority
	 */
	protected $priority = 30;
	/**
	 * The name of the component panel
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $panel
	 */
	protected $panel;
	/**
	 * Holds component builder id.
	 *
	 * @var string $builder_id Builder id.
	 */
	private $builder_id;
	/**
	 * Can override the default css selector.
	 * Allows child components to specify their own selector for inherited style rules.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var null|string $default_selector
	 */
	protected $default_selector = null;
	/**
	 * Default media selectors for device.
	 *
	 * @since   1.0.1
	 * @access  protected
	 * @var array $media_selectors The device and css media selector pairing.
	 */
	protected $media_selectors = array(
		'mobile'  => ' @media (max-width: 576px)',
		'tablet'  => ' @media (min-width: 576px)',
		'desktop' => ' @media (min-width: 961px)',
	);

	/**
	 * Padding settings default values.
	 *
	 * @var array
	 */
	protected $default_padding_value = array(
		'mobile'       => array(
			'top'    => 0,
			'right'  => 0,
			'bottom' => 0,
			'left'   => 0,
		),
		'tablet'       => array(
			'top'    => 0,
			'right'  => 0,
			'bottom' => 0,
			'left'   => 0,
		),
		'desktop'      => array(
			'top'    => 0,
			'right'  => 0,
			'bottom' => 0,
			'left'   => 0,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	);

	/**
	 * Margin settings default values.
	 *
	 * @var array
	 */
	protected $default_margin_value = array(
		'mobile'       => array(
			'top'    => 0,
			'right'  => 0,
			'bottom' => 0,
			'left'   => 0,
		),
		'tablet'       => array(
			'top'    => 0,
			'right'  => 0,
			'bottom' => 0,
			'left'   => 0,
		),
		'desktop'      => array(
			'top'    => 0,
			'right'  => 0,
			'bottom' => 0,
			'left'   => 0,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	);

	/**
	 * Abstract_Component constructor.
	 *
	 * @param string $panel Builder panel.
	 */
	public function __construct( $panel ) {
		$this->init();

		$this->set_property( 'panel', $panel );
		if ( $this->section === null ) {
			$this->set_property( 'section', $this->get_id() );
		}
		add_action( 'init', [ $this, 'define_settings' ] );
	}

	/**
	 * Allow for constant changes in pro.
	 *
	 * @since   1.0.0
	 * @access  protected
	 *
	 * @param string $const Name of the constant.
	 *
	 * @return mixed
	 */
	protected function get_class_const( $const ) {
		if ( defined( 'static::' . $const ) ) {
			return constant( 'static::' . $const );
		}

		return '';
	}

	/**
	 * Method to filter component loading if needed.
	 *
	 * @since   1.0.1
	 * @access  public
	 * @return bool
	 */
	public function is_active() {
		return true;
	}

	/**
	 * Method to set protected properties for class.
	 *
	 * @param string $key   The property key name.
	 * @param string $value The property value.
	 *
	 * @return bool
	 * @since   1.0.0
	 * @access  protected
	 */
	protected function set_property( $key = '', $value = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}
		$this->$key = $value;

		return true;
	}

	/**
	 * Utility method to return the component ID.
	 *
	 * @return string
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_id() {
		return $this->id;
	}

	/**
	 * Return the settings for the component.
	 *
	 * @since   1.0.0
	 * @updated 1.0.1
	 * @access  public
	 * @return array
	 */
	public function get_settings() {
		return array(
			'name'        => $this->label,
			'description' => $this->description,
			'id'          => $this->id,
			'width'       => $this->width,
			'section'     => $this->section, // Customizer section to focus when click settings.
		);
	}

	/**
	 * Get the section id.
	 *
	 * @return string
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_section_id() {
		return $this->section;
	}

	/**
	 * Method to get protected properties for class.
	 *
	 * @param string $key The property key name.
	 *
	 * @return bool
	 * @since   1.0.0
	 * @access  protected
	 */
	public function get_property( $key = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}

		return $this->$key;
	}

	/**
	 * Define global settings.
	 */
	public function define_settings() {

		$this->add_settings();
		$padding_selector = '.builder-item--' . $this->get_id() . ' > :not(.customize-partial-edit-shortcut):not(.item--preview-name):first-of-type';
		if ( $this->default_selector !== null ) {
			$padding_selector = $this->default_selector;
		}
		$margin_selector = '.builder-item--' . $this->get_id();
		if ( strpos( $this->get_id(), 'header_search' ) === false || strpos( $this->get_id(), 'header_search_responsive' ) !== false ) {
			SettingsManager::get_instance()->add(
				[
					'id'                    => self::ALIGNMENT_ID,
					'group'                 => $this->get_id(),
					'tab'                   => SettingsManager::TAB_LAYOUT,
					'transport'             => 'postMessage',
					'sanitize_callback'     => 'wp_filter_nohtml_kses',
					'default'               => $this->default_align,
					'label'                 => __( 'Component Alignment', 'neve' ),
					'type'                  => '\Neve\Customizer\Controls\Button_Group',
					'live_refresh_selector' => $margin_selector,
					'options'               => [
						'choices' => [
							'left'   => 'dashicons-editor-alignleft',
							'center' => 'dashicons-editor-aligncenter',
							'right'  => 'dashicons-editor-alignright',
						],
					],
					'section'               => $this->section,
				]
			);
		}

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::PADDING_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_LAYOUT,
				'transport'             => 'postMessage',
				'sanitize_callback'     => array( $this, 'sanitize_spacing_array' ),
				'default'               => $this->default_padding_value,
				'label'                 => __( 'Padding', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Spacing',
				'options'               => [
					'input_attrs' => array(
						'min'                   => 0,
						'hideResponsiveButtons' => true,
					),
					'default'     => $this->default_padding_value,
				],
				'live_refresh_selector' => $padding_selector,
				'live_refresh_css_prop' => array(
					'prop' => 'padding',
				),
				'section'               => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::MARGIN_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_LAYOUT,
				'transport'             => 'postMessage',
				'sanitize_callback'     => array( $this, 'sanitize_spacing_array' ),
				'default'               => $this->default_margin_value,
				'label'                 => __( 'Margin', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Spacing',
				'options'               => [
					'input_attrs' => array(
						'hideResponsiveButtons' => true,
					),
				],
				'live_refresh_selector' => $margin_selector,
				'live_refresh_css_prop' => array(
					'prop' => 'margin',
				),
				'section'               => $this->section,
			]
		);

		do_action( 'hfg_component_settings', $this->get_id() );
	}

	/**
	 * Get builder where component can be used.
	 *
	 * @return string Assigned builder.
	 */
	public function get_builder_id() {
		return $this->builder_id;
	}

	/**
	 * Called to register component controls.
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 * @since   1.0.0
	 * @updated 1.0.1
	 * @access  public
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {

		$description = ( isset( $this->description ) && ! empty( $this->description ) )
			? $this->description
			: '';

		$wp_customize->add_section(
			$this->section,
			array(
				'title'              => $this->label,
				'description'        => $description,
				'description_hidden' => ( $description !== '' ),
				'priority'           => $this->priority,
				'panel'              => $this->panel,
			)
		);

		$wp_customize->register_control_type( '\HFG\Core\Customizer\SpacingControl' );

		Settings\Manager::get_instance()->load( $this->get_id(), $wp_customize );

		$wp_customize->selective_refresh->add_partial(
			$this->get_id() . '_partial',
			array(
				'selector'        => '.builder-item--' . $this->get_id(),
				'settings'        => Settings\Manager::get_instance()->get_transport_group( $this->get_id() ),
				'render_callback' => [ $this, 'render' ],
			)
		);

		return $wp_customize;
	}

	/**
	 * Render component markup.
	 */
	public function render() {
		self::$current_component = $this->get_id();

		if ( is_customize_preview() ) {
			$style = $this->css_array_to_css( $this->add_style() );
			echo '<style type="text/css">' . $style . '</style>';  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		Main::get_instance()->load( 'component-wrapper' );
	}

	/**
	 * Write position styles and filter values.
	 *
	 * @since   1.0.1
	 * @access  protected
	 *
	 * @param string $target CSS target property ( margin | padding ).
	 * @param string $top    Top value.
	 * @param string $right  Right value.
	 * @param string $bottom Bottom value.
	 * @param string $left   Left value.
	 * @param string $unit   Unit to use ( px | em | % ).
	 *
	 * @return array
	 */
	protected function css_position_filter( $target, $top = '', $right = '', $bottom = '', $left = '', $unit = 'px' ) {
		if ( empty( $target ) && ! in_array( $target, array( 'margin', 'padding' ), true ) ) {
			return array();
		}

		$result = array();
		$params = compact( 'top', 'right', 'bottom', 'left' );
		foreach ( $params as $pos => $value ) {
			if ( $value !== '' ) {
				$result[ $target . '-' . $pos ] = $value . $unit;
			}
		}

		return $result;
	}

	/**
	 * Method to reuse loop for generating position css.
	 *
	 * @since   1.0.1
	 * @access  protected
	 *
	 * @param array  $css_array       The css array.
	 * @param array  $position_values The position values array.
	 * @param string $selector        The item selector.
	 * @param string $type            The type to generate ( margin | padding ).
	 *
	 * @return mixed
	 */
	protected function generate_position_css( $css_array, $position_values, $selector, $type = 'margin' ) {
		foreach ( $this->media_selectors as $device => $media_selector ) {
			if ( isset( $position_values[ $device ] ) ) {
				$position_filter = $this->css_position_filter( $type, $position_values[ $device ]['top'], $position_values[ $device ]['right'], $position_values[ $device ]['bottom'], $position_values[ $device ]['left'], $position_values[ $device . '-unit' ] );
				if ( empty( $position_filter ) ) {
					continue;
				}
				if ( ! isset( $css_array[ $media_selector ][ $selector ] ) || empty( $css_array[ $media_selector ][ $selector ] ) ) {
					$css_array[ $media_selector ][ $selector ] = $position_filter;
					continue;
				}
				$css_array[ $media_selector ][ $selector ] = array_merge( $css_array[ $media_selector ][ $selector ], $position_filter );
			}
		}

		return $css_array;
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
		$layout_padding = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::PADDING_ID, null );
		$selector       = '.builder-item--' . $this->get_id() . ' > :not(.customize-partial-edit-shortcut):first-of-type';

		if ( $this->default_selector !== null ) {
			$selector = $this->default_selector;
		}
		$css_array = $this->generate_position_css( $css_array, $layout_padding, $selector, 'padding' );

		$layout_margin = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::MARGIN_ID, null );
		$selector      = '.builder-item--' . $this->get_id();
		$css_array     = $this->generate_position_css( $css_array, $layout_margin, $selector, 'margin' );

		return $css_array;
	}

	/**
	 * Assign component to builder.
	 *
	 * @param string $builder_id Builder unique id.
	 */
	public function assign_builder( $builder_id ) {
		$this->builder_id = $builder_id;
	}
}
