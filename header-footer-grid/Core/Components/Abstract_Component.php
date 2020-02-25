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

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Interfaces\Component;
use HFG\Core\Settings;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use HFG\Traits\Core;
use Neve\Views\Font_Manager;
use WP_Customize_Manager;

/**
 * Class Abstract_Component
 *
 * @package HFG\Core
 */
abstract class Abstract_Component implements Component {
	use Core;

	const ALIGNMENT_ID   = 'component_align';
	const PADDING_ID     = 'component_padding';
	const MARGIN_ID      = 'component_margin';
	const FONT_FAMILY_ID = 'component_font_family';
	const TYPEFACE_ID    = 'component_typeface';
	/**
	 * Current id of the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var null|string
	 */
	public static $current_component = null;
	/**
	 * Check if current component should show CSS when rendered inside customizer.
	 *
	 * @var bool
	 */
	public static $should_show_css = true;
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
	 * The component slug.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $section
	 */
	protected $component_slug = 'hfg-generic-component';

	/**
	 * Should component merge?
	 *
	 * @since  2.5.2
	 * @access protected
	 * @var bool $is_auto_width
	 */
	protected $is_auto_width = false;
	/**
	 * The section icon.
	 *
	 * @access protected
	 * @var string $icon
	 */
	protected $icon = 'welcome-widgets-menus';
	/**
	 * The component preview image.
	 *
	 * @access protected
	 * @var string $preview_image
	 */
	protected $preview_image = null;

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
	 * The default typography selector on which to apply the settings.
	 *
	 * @var null
	 */
	protected $default_typography_selector = null;

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
	 * Typography control default values.
	 *
	 * @var array
	 */
	protected $typography_default = array(
		'fontSize'      => array(
			'suffix'  => array(
				'mobile'  => 'em',
				'tablet'  => 'em',
				'desktop' => 'em',
			),
			'mobile'  => 1,
			'tablet'  => 1,
			'desktop' => 1,
		),
		'lineHeight'    => array(
			'mobile'  => 1.6,
			'tablet'  => 1.6,
			'desktop' => 1.6,
		),
		'letterSpacing' => array(
			'mobile'  => 0,
			'tablet'  => 0,
			'desktop' => 0,
		),
		'fontWeight'    => '500',
		'textTransform' => 'none',
	);

	/**
	 * Should have font family control.
	 *
	 * @var bool
	 */
	public $has_font_family_control = false;

	/**
	 * Should have typeface control.
	 *
	 * @var bool
	 */
	public $has_typeface_control = false;

	/**
	 * Abstract_Component constructor.
	 *
	 * @param string $panel Builder panel.
	 */
	public function __construct( $panel ) {
		$this->init();
		$this->maybe_enqueue_fonts();
		$this->set_property( 'panel', $panel );
		$this->set_property( 'icon', $this->icon );
		if ( $this->preview_image === null ) {
			$this->set_property( 'preview_image', $this->preview_image );
		}
		if ( $this->section === null ) {
			$this->set_property( 'section', $this->get_id() );
		}
		add_action( 'init', [ $this, 'define_settings' ] );
	}

	/**
	 * Render CSS code for component.
	 */
	public function render_css() {
		if ( ! self::$should_show_css ) {
			return;
		}
		if ( ! is_customize_preview() ) {
			return;
		}
		$style = $this->css_array_to_css( $this->add_style() );
		echo '<style type="text/css" id="' . esc_attr( $this->get_id() ) . '-style">' . $style . '</style>';  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		self::$should_show_css = false;
	}

	/**
	 * Allow for constant changes in pro.
	 *
	 * @param string $const Name of the constant.
	 *
	 * @return mixed
	 * @since   1.0.0
	 * @access  protected
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
	 * @return bool
	 * @since   1.0.1
	 * @access  public
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
	 * @return array
	 * @since   1.0.0
	 * @updated 1.0.1
	 * @access  public
	 */
	public function get_settings() {
		return array(
			'name'          => $this->label,
			'description'   => $this->description,
			'id'            => $this->id,
			'width'         => $this->width,
			'section'       => $this->section, // Customizer section to focus when click settings.
			'icon'          => $this->icon,
			'previewImage'  => $this->preview_image,
			'componentSlug' => $this->component_slug,
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
		$align_choices   = [
			'left'   => [
				'tooltip' => __( 'Left', 'neve' ),
				'icon'    => 'editor-alignleft',
			],
			'center' => [
				'tooltip' => __( 'Center', 'neve' ),
				'icon'    => 'editor-aligncenter',
			],
			'right'  => [
				'tooltip' => __( 'Right', 'neve' ),
				'icon'    => 'editor-alignright',
			],
		];

		if ( $this->get_id() === Button::COMPONENT_ID ) {
			$align_choices['justify'] = [
				'tooltip' => __( 'Justify', 'neve' ),
				'icon'    => 'editor-justify',
			];
		}

		if ( $this->get_id() !== Search::COMPONENT_ID ) {
			SettingsManager::get_instance()->add(
				[
					'id'                    => self::ALIGNMENT_ID,
					'group'                 => $this->get_id(),
					'tab'                   => SettingsManager::TAB_LAYOUT,
					'transport'             => $this->is_auto_width ? 'post' . $this->get_builder_id() : 'postMessage',
					'sanitize_callback'     => 'wp_filter_nohtml_kses',
					'default'               => $this->default_align,
					'label'                 => __( 'Alignment', 'neve' ),
					'type'                  => '\Neve\Customizer\Controls\React\Radio_Buttons',
					'live_refresh_selector' => $this->is_auto_width ? null : $margin_selector,
					'options'               => [
						'choices' => $align_choices,
					],
					'section'               => $this->section,
					'conditional_header'    => $this->get_builder_id() === 'header',
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
				'conditional_header'    => $this->get_builder_id() === 'header',
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
				'conditional_header'    => $this->get_builder_id() === 'header',
			]
		);

		$this->add_typography_controls();

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
		$wp_customize->register_section_type( '\HFG\Core\Customizer\Instructions_Section' );

		Settings\Manager::get_instance()->load( $this->get_id(), $wp_customize );

		$wp_customize->selective_refresh->add_partial(
			$this->get_id() . '_partial',
			array(
				'selector'            => '.builder-item--' . $this->get_id() . ':parent',
				'settings'            => Settings\Manager::get_instance()->get_transport_group( $this->get_id() ),
				'render_callback'     => [ $this, 'render' ],
				'container_inclusive' => true,
			)
		);

		return $wp_customize;
	}

	/**
	 * Render component markup.
	 */
	public function render() {
		self::$current_component           = $this->get_id();
		Abstract_Builder::$current_builder = $this->get_builder_id();
		Main::get_instance()->load( 'component-wrapper' );
	}

	/**
	 * Write position styles and filter values.
	 *
	 * @param string $target CSS target property ( margin | padding ).
	 * @param string $top    Top value.
	 * @param string $right  Right value.
	 * @param string $bottom Bottom value.
	 * @param string $left   Left value.
	 * @param string $unit   Unit to use ( px | em | % ).
	 *
	 * @return array
	 * @since   1.0.1
	 * @access  protected
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
	 * @param array  $css_array       The css array.
	 * @param array  $position_values The position values array.
	 * @param string $selector        The item selector.
	 * @param string $type            The type to generate ( margin | padding ).
	 *
	 * @return mixed
	 * @since   1.0.1
	 * @access  protected
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
		$font_family    = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::FONT_FAMILY_ID );
		$typeface       = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::TYPEFACE_ID );
		if ( $font_family ) {
			$css_array[ $this->default_typography_selector ]['font-family'] = $font_family;
		}
		if ( $typeface ) {
			foreach ( $this->media_selectors as $media => $media_query ) {
				$css_array[ $media_query ][ $this->default_typography_selector ]['font-size']       = $typeface['fontSize'][ $media ] . $typeface['fontSize']['suffix'][ $media ];
				$css_array[ $media_query ][ $this->default_typography_selector . ' svg' ]['height'] = $typeface['fontSize'][ $media ] . $typeface['fontSize']['suffix'][ $media ];
				$css_array[ $media_query ][ $this->default_typography_selector . ' svg' ]['width']  = $typeface['fontSize'][ $media ] . $typeface['fontSize']['suffix'][ $media ];
				$css_array[ $media_query ][ $this->default_typography_selector ]['line-height']     = $typeface['lineHeight'][ $media ];
				$css_array[ $media_query ][ $this->default_typography_selector ]['letter-spacing']  = $typeface['letterSpacing'][ $media ] . 'px';
			}
			$css_array[ $this->default_typography_selector ]['font-weight']    = $typeface['fontWeight'];
			$css_array[ $this->default_typography_selector ]['text-transform'] = $typeface['textTransform'];
		}

		if ( $this->default_selector !== null ) {
			$selector = $this->default_selector;
		} else {
			$selector = '.builder-item--' . $this->get_id();
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

	/**
	 * Add typography controls.
	 */
	private function add_typography_controls() {
		if ( ! $this->has_font_family_control && ! $this->has_typeface_control ) {
			return;
		}
		$accordion_wrap = 0;
		$priority       = 2000;

		if ( $this->has_typeface_control ) {
			$accordion_wrap += 1;
		}
		if ( $this->has_font_family_control ) {
			$accordion_wrap += 1;
		}

		SettingsManager::get_instance()->add(
			[
				'id'                => $this->get_id() . '_typography_wrap',
				'group'             => $this->get_id(),
				'tab'               => SettingsManager::TAB_STYLE,
				'transport'         => 'postMessage',
				'priority'          => $priority,
				'type'              => 'Neve\Customizer\Controls\Heading',
				'sanitize_callback' => 'sanitize_text_field',
				'label'             => __( 'Typography', 'neve' ),
				'section'           => $this->section,
				'options'           => [
					'accordion'        => true,
					'controls_to_wrap' => $accordion_wrap,
					'expanded'         => false,
					'class'            => esc_attr( 'typography-accordion-' . $this->get_id() ),
				],
			]
		);
		if ( $this->has_font_family_control ) {
			SettingsManager::get_instance()->add(
				[
					'id'                    => self::FONT_FAMILY_ID,
					'group'                 => $this->get_id(),
					'tab'                   => SettingsManager::TAB_STYLE,
					'transport'             => 'postMessage',
					'priority'              => $priority + 1,
					'type'                  => '\Neve\Customizer\Controls\React\Font_Family',
					'live_refresh_selector' => $this->default_typography_selector,
					'section'               => $this->section,
					'options'               => [
						'input_attrs' => [
							'default_is_inherit' => true,
						],
					],
				]
			);
		}
		if ( $this->has_typeface_control ) {
			SettingsManager::get_instance()->add(
				[
					'id'                    => self::TYPEFACE_ID,
					'group'                 => $this->get_id(),
					'tab'                   => SettingsManager::TAB_STYLE,
					'transport'             => 'postMessage',
					'priority'              => $priority + 2,
					'type'                  => '\Neve\Customizer\Controls\React\Typography',
					'live_refresh_selector' => $this->default_typography_selector,
					'section'               => $this->section,
					'default'               => $this->typography_default,
					'sanitize_callback'     => 'neve_sanitize_typography_control',
					'options'               => [
						'input_attrs' => array(
							'size_units'             => [ 'em', 'px' ],
							'weight_default'         => $this->typography_default['fontWeight'],
							'size_default'           => $this->typography_default['fontSize'],
							'line_height_default'    => $this->typography_default['lineHeight'],
							'letter_spacing_default' => $this->typography_default['letterSpacing'],
						),
					],
				]
			);
		}
	}

	/**
	 * Maybe enqueue google fonts.
	 */
	private function maybe_enqueue_fonts() {
		if ( ! $this->has_font_family_control ) {
			return;
		}
		$font = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::FONT_FAMILY_ID );
		if ( empty( $font ) ) {
			return;
		}
		$typography = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::TYPEFACE_ID );
		$weight     = ! isset( $typography['fontWeight'] ) ? [ '300' ] : $typography['fontWeight'];
		Font_Manager::add_google_font( $font, $weight );
	}
}
