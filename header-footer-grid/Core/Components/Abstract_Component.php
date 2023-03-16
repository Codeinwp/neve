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
use HFG\Core\Css_Generator;
use HFG\Core\Interfaces\Component;
use HFG\Core\Settings;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use HFG\Traits\Core;
use Neve\Core\Settings\Config;
use Neve\Core\Styles\Dynamic_Selector;
use Neve\Views\Font_Manager;
use WP_Customize_Manager;

/**
 * Class Abstract_Component
 *
 * @package HFG\Core
 */
abstract class Abstract_Component implements Component {
	use Core;

	const ALIGNMENT_ID      = 'component_align';
	const VERTICAL_ALIGN_ID = 'component_vertical_align';
	const PADDING_ID        = 'component_padding';
	const MARGIN_ID         = 'component_margin';
	const FONT_FAMILY_ID    = 'component_font_family';
	const TYPEFACE_ID       = 'component_typeface';
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
	 * @var string|null $description
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
	 * Should have horizontal alignment.
	 *
	 * @var bool
	 */
	public $has_horizontal_alignment = false;

	/**
	 * Component arguments.
	 *
	 * @var array
	 */
	protected $args = [];

	/**
	 * Abstract_Component constructor.
	 *
	 * @param string $panel Builder panel.
	 */
	public function __construct( $panel ) {
		if ( ! $this->is_active() ) {
			return;
		}

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
	 * Set component arguments.
	 *
	 * @param array $args Component arguments.
	 */
	public function set_args( $args ) {
		$this->args = $args;
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
		$css_array = [];

		$css_array = $this->add_style( $css_array );
		$generator = new Css_Generator();
		$generator->set( $css_array );
		$style = $generator->generate();

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
	 * Method to check that the component is active.
	 *
	 * @return bool
	 */
	protected function is_component_active() {
		$builders = Main::get_instance()->get_builders();
		foreach ( $builders as $builder ) {
			if ( $builder->is_component_active( $this->get_id() ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Method to set protected properties for class.
	 *
	 * @param string $key The property key name.
	 * @param mixed  $value The property value.
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
			'fromTheme'     => $this->is_from_theme(),
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

		$padding_selector = '.builder-item--' . $this->get_id();

		if ( $this->default_selector !== null ) {
			$padding_selector = $this->default_selector;
		}

		$this->add_horizontal_alignment_control();

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
						'min' => 0,
					),
					'default'     => $this->default_padding_value,
				],
				'live_refresh_selector' => $padding_selector,
				'live_refresh_css_prop' => [
					'cssVar' => [
						'vars'       => '--padding',
						'responsive' => true,
						'selector'   => '.builder-item--' . $this->get_id(),
					],
					'prop'   => 'padding',
				],
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
				'live_refresh_selector' => '.builder-item--' . $this->get_id(),
				'live_refresh_css_prop' => array(
					'cssVar' => [
						'vars'       => '--margin',
						'responsive' => true,
						'selector'   => '.builder-item--' . $this->get_id(),
					],
					'prop'   => 'margin',
				),
				'section'               => $this->section,
				'conditional_header'    => $this->get_builder_id() === 'header',
			]
		);

		$this->add_typography_controls();

		do_action( 'hfg_component_settings', $this->get_id(), $this->section );
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
	 *
	 * @param string $device Current device.
	 */
	public function render( $device = '' ) {
		$args = [];
		if ( ! empty( $device ) && in_array( $device, [ 'desktop', 'tablet', 'mobile' ] ) ) {
			$args['device'] = $device;
		}
		self::$current_component           = $this->get_id();
		Abstract_Builder::$current_builder = $this->get_builder_id();
		Main::get_instance()->load( 'component-wrapper', '', $args );
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

		$rules = [
			'--padding' => [
				Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::PADDING_ID,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::PADDING_ID ),
				Dynamic_Selector::META_SUFFIX        => 'responsive_unit',
				'directional-prop'                   => Config::CSS_PROP_PADDING,
			],
			'--margin'  => [
				Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::MARGIN_ID,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::MARGIN_ID ),
				Dynamic_Selector::META_SUFFIX        => 'responsive_unit',
				'directional-prop'                   => Config::CSS_PROP_MARGIN,
			],
		];

		if ( $this->has_font_family_control || $this->has_typeface_control ) {
			$rules = array_merge(
				$rules,
				[
					'--fontfamily'    => [
						Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::FONT_FAMILY_ID,
						Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::FONT_FAMILY_ID ),
					],
					'--fontsize'      => [
						Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::TYPEFACE_ID . '.fontSize',
						Dynamic_Selector::META_IS_RESPONSIVE => true,
						Dynamic_Selector::META_SUFFIX  => 'em',
						Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::TYPEFACE_ID, 'fontSize' ),
					],
					'--lineheight'    => [
						Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::TYPEFACE_ID . '.lineHeight',
						Dynamic_Selector::META_IS_RESPONSIVE => true,
						Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::TYPEFACE_ID, 'lineHeight' ),
					],
					'--letterspacing' => [
						Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::TYPEFACE_ID . '.letterSpacing',
						Dynamic_Selector::META_IS_RESPONSIVE => true,
						Dynamic_Selector::META_SUFFIX  => 'px',
						Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::TYPEFACE_ID, 'letterSpacing' ),
					],
					'--fontweight'    => [
						Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::TYPEFACE_ID . '.fontWeight',
						Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::TYPEFACE_ID, 'fontWeight' ),
						'font'                         => 'mods_' . $this->get_id() . '_' . self::FONT_FAMILY_ID,
					],
					'--texttransform' => [
						Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::TYPEFACE_ID . '.textTransform',
						Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::TYPEFACE_ID, 'textTransform' ),
					],
					'--iconsize'      => [
						Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::TYPEFACE_ID . '.fontSize',
						Dynamic_Selector::META_IS_RESPONSIVE => true,
						Dynamic_Selector::META_SUFFIX  => 'responsive_suffix',
						Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::TYPEFACE_ID, 'fontSize' ),
					],
				]
			);

			if ( strpos( $this->get_id(), Nav::COMPONENT_ID ) !== false || strpos( $this->get_id(), SecondNav::COMPONENT_ID ) !== false ) {
				$css_array[] = [
					Dynamic_Selector::KEY_SELECTOR => '.hfg-is-group.has-' . $this->get_id() . ' .inherit-ff',
					Dynamic_Selector::KEY_RULES    => [
						'--inheritedff' => [
							Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::FONT_FAMILY_ID,
							Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::FONT_FAMILY_ID ),
						],
						'--inheritedfw' => [
							Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::TYPEFACE_ID . '.fontWeight',
							Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::TYPEFACE_ID, 'fontWeight' ),
						],
					],
				];
			}
		}

		if ( $this->has_horizontal_alignment ) {
			$rules['--textalign'] = [
				Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::ALIGNMENT_ID,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_DEFAULT       => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::ALIGNMENT_ID ),
			];

			$justify_map = [
				'left'   => 'flex-start',
				'center' => 'center',
				'right'  => 'flex-end',
			];

			$rules['--justify'] = [
				Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::ALIGNMENT_ID,
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) use ( $justify_map ) {
					return sprintf( '%s: %s;', $css_prop, $justify_map[ $value ] );
				},
				Dynamic_Selector::META_DEFAULT       => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::ALIGNMENT_ID ),
			];
		}

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => '.builder-item--' . $this->get_id(),
			Dynamic_Selector::KEY_RULES    => $rules,
		];

		return $css_array;
	}

	/**
	 * Assign component to builder.
	 *
	 * @param string $builder_id Builder unique id.
	 */
	public function assign_builder( $builder_id ) {
		$this->builder_id = $builder_id;
		if ( $this->builder_id === 'footer' ) {
			$this->has_horizontal_alignment = true;
		}
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
			$accordion_wrap ++;
		}
		if ( $this->has_font_family_control ) {
			$accordion_wrap ++;
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
					'sanitize_callback'     => 'sanitize_text_field',
					'live_refresh_selector' => $this->default_typography_selector,
					'live_refresh_css_prop' => array(
						'cssVar' => [
							'vars'     => '--fontfamily',
							'selector' => '.builder-item--' . $this->get_id(),
						],
					),
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
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => [
								'--texttransform' => 'textTransform',
								'--fontweight'    => 'fontWeight',
								'--fontsize'      => [
									'key'        => 'fontSize',
									'responsive' => true,
								],
								'--lineheight'    => [
									'key'        => 'lineHeight',
									'responsive' => true,
								],
								'--letterspacing' => [
									'key'        => 'letterSpacing',
									'suffix'     => 'px',
									'responsive' => true,
								],
							],
							'selector' => '.builder-item--' . $this->get_id(),
						],
					],
					'section'               => $this->section,
					'default'               => $this->typography_default,
					'sanitize_callback'     => 'neve_sanitize_typography_control',
					'options'               => [
						'input_attrs'         => array(
							'size_units'             => [ 'em', 'px' ],
							'weight_default'         => $this->typography_default['fontWeight'],
							'size_default'           => $this->typography_default['fontSize'],
							'line_height_default'    => $this->typography_default['lineHeight'],
							'letter_spacing_default' => $this->typography_default['letterSpacing'],
						),
						'font_family_control' => $this->get_id() . '_' . self::FONT_FAMILY_ID,
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

	/**
	 * Get the item height default.
	 *
	 * @return array
	 */
	protected function get_default_for_responsive_from_intval( $old_val_const, $default_int_val ) {
		$old = get_theme_mod( $this->get_id() . '_' . $old_val_const );
		if ( $old === false ) {
			return [
				'mobile'  => $default_int_val,
				'tablet'  => $default_int_val,
				'desktop' => $default_int_val,
			];
		}

		return [
			'mobile'  => $old,
			'tablet'  => $old,
			'desktop' => $old,
		];
	}

	/**
	 * Add horizontal alignment to component.
	 */
	private function add_horizontal_alignment_control() {
		if ( strpos( $this->get_id(), Search::COMPONENT_ID ) !== false ) {
			return;
		}

		if ( ! $this->has_horizontal_alignment ) {
			return;
		}

		$align_choices = [
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
		if ( strpos( $this->get_id(), Button::COMPONENT_ID ) !== false ) {
			$align_choices['justify'] = [
				'tooltip' => __( 'Justify', 'neve' ),
				'icon'    => 'editor-justify',
			];
		}

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::ALIGNMENT_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_LAYOUT,
				'transport'             => $this->is_auto_width ? 'post' . $this->get_builder_id() : 'postMessage',
				'sanitize_callback'     => 'neve_sanitize_alignment',
				'default'               => [
					'desktop' => $this->default_align,
					'tablet'  => $this->default_align,
					'mobile'  => $this->default_align,
				],
				'label'                 => __( 'Alignment', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Responsive_Radio_Buttons',
				'live_refresh_selector' => $this->is_auto_width ? null : '.builder-item--' . $this->get_id(),
				'live_refresh_css_prop' => [
					'cssVar'         => [
						'vars'       => [
							'--textalign',
							'--justify',
						],
						'valueRemap' => [
							'--justify' => [
								'left'   => 'flex-start',
								'center' => 'center',
								'right'  => 'flex-end',
							],
						],
						'responsive' => true,
						'selector'   => '.builder-item--' . $this->get_id(),
					],
					'remove_classes' => [
						'mobile-left',
						'mobile-right',
						'mobile-center',
						'tablet-left',
						'tablet-right',
						'tablet-center',
						'desktop-left',
						'desktop-right',
						'desktop-center',
					],
					'is_for'         => 'horizontal',
				],
				'options'               => [
					'choices' => $align_choices,
				],
				'section'               => $this->section,
				'conditional_header'    => $this->get_builder_id() === 'header',
			]
		);
	}

	/**
	 * Is from theme
	 *
	 * @return boolean
	 */
	private function is_from_theme() {
		$reflection = new \ReflectionClass( $this );

		return strpos( $reflection->name, 'HFG\\Core\\Components\\' ) !== false;
	}
}
