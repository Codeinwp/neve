<?php
/**
 * Abstract Builder class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Builder;

use HFG\Core\Components\Abstract_Component;
use HFG\Core\Components\Nav;
use HFG\Core\Css_Generator;
use HFG\Core\Interfaces\Builder;
use HFG\Core\Interfaces\Component;
use HFG\Core\Settings;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Traits\Core;
use Neve\Core\Settings\Config;
use Neve\Core\Styles\Dynamic_Selector;
use Neve\Customizer\Controls\React\Instructions_Section;
use WP_Customize_Manager;

/**
 * Class Abstract_Builder
 *
 * @package HFG\Core\Builder
 */
abstract class Abstract_Builder implements Builder {
	use Core;

	const LAYOUT_SETTING     = 'layout';
	const COLUMNS_NUMBER     = 'columns_number';
	const COLUMNS_LAYOUT     = 'columns_layout';
	const HEIGHT_SETTING     = 'height';
	const SKIN_SETTING       = 'skin';
	const TEXT_COLOR         = 'new_text_color';
	const BACKGROUND_SETTING = 'background';
	const WIDTH              = 'width';
	/**
	 * Layout config data.
	 *
	 * @var array Layout data.
	 */
	private $layout_data = [];
	/**
	 * Active components ids.
	 *
	 * @var array Layout data.
	 */
	private $active_components = [];
	/**
	 * Internal pointer for current device id.
	 *
	 * @var null|string Device id.
	 */
	public static $current_device = null;

	/**
	 * Internal pointer for current row id.
	 *
	 * @var null|string Row id.
	 */
	public static $current_row = null;

	/**
	 * Internal pointer for current slot id.
	 *
	 * @var null|string Slot id.
	 */
	public static $current_slot = null;

	/**
	 * Internal pointer for current component id.
	 *
	 * @var null|string Component id.
	 */
	public static $current_component = null;

	/**
	 * Internal pointer for current builder id.
	 *
	 * @var null|string Builder id.
	 */
	public static $current_builder = null;
	/**
	 * Holds the control id.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $control_id
	 */
	protected $control_id;
	/**
	 * Holds the layout control id.
	 *
	 * @since   3.0.0
	 * @access  protected
	 * @var string $layout_control_id
	 */
	protected $layout_control_id;
	/**
	 * Holds the panel id.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $panel
	 */
	protected $panel;
	/**
	 * Holds the section id.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $section
	 */
	protected $section;
	/**
	 * Holds the title.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var string $title
	 */
	public $title;
	/**
	 * Holds the description.
	 *
	 * @since   1.0.1
	 * @access  public
	 * @var string $description
	 */
	public $description;

	/**
	 * A list of panel keys to be removed.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var array $remove_panels
	 */
	protected $remove_panels = [];

	/**
	 * A list of sections keys to be removed.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var array $remove_sections
	 */
	protected $remove_sections = [];

	/**
	 * A list of supported devices and labels.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var array $devices
	 */
	protected $devices = [
		'desktop' => 'Desktop',
		'mobile'  => 'Mobile',
	];

	/**
	 * Default colors for rows.
	 *
	 * Holds the default values for row colors.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var array
	 */
	protected $default_colors = array(
		'header'      => array(
			'top'     => '#f0f0f0',
			'main'    => '#ffffff',
			'bottom'  => '#ffffff',
			'sidebar' => '#ffffff',
		),
		'footer'      => array(
			'top'    => '#ffffff',
			'bottom' => '#24292e',
		),
		'page_header' => array(
			'top'    => '#ffffff',
			'bottom' => '#ffffff',
		),
	);

	/**
	 * A list of builder components.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var array $builder_components
	 */
	protected $builder_components = array();

	/**
	 * The quick links setup array.
	 *
	 * @var array
	 */
	protected $instructions_array = array();

	/**
	 * Does this layout have columns?
	 *
	 * @var boolean
	 */
	protected $columns_layout = false;

	/**
	 * Abstract_Builder constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function __construct() {
		$this->set_property( 'control_id', 'hfg_' . $this->get_id() . '_layout' );
		$this->set_property( 'layout_control_id', $this->control_id . ( neve_is_new_builder() ? '_v2' : '' ) );
		$this->set_property( 'panel', 'hfg_' . $this->get_id() );
		$this->set_property( 'section', $this->control_id . '_section' );
		$this->init();

		add_action( 'hfg_' . $this->get_id() . '_render', [ $this, 'load_template' ] );
		$this->define_builder_settings();

		foreach ( $this->get_rows() as $row_id => $row_name ) {
			$this->define_row_settings( $row_id );
		}

		add_filter( 'hfg_header_row_classes', [ $this, 'add_header_row_utility_classes' ], 10, 2 );
		add_filter( 'hfg_page_header_row_classes', [ $this, 'add_header_row_utility_classes' ], 10, 2 );
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
	 * Define builder settings.
	 */
	public function define_builder_settings() {
		$is_new_builder = neve_is_new_builder();

		SettingsManager::get_instance()->add(
			[
				'id'                 => $this->layout_control_id,
				'group'              => $this->control_id,
				'tab'                => false,
				'noformat'           => true,
				'transport'          => 'post' . $this->get_id(),
				'sanitize_callback'  => [ $this, 'sanitize_json' ],
				'default'            => '',
				'label'              => '',
				'type'               => $is_new_builder ? '\Neve\Customizer\Controls\React\Builder' : 'text',
				'options'            => [
					'builder_type'   => $this->get_id(),
					'columns_layout' => $this->columns_layout,
				],
				'conditional_header' => $this->get_id() === 'header',
				'section'            => $this->section,
			]
		);

		do_action( 'hfg_row_settings', $this->get_id(), $this->control_id );

	}

	/**
	 * Used to define the rows in the builder sections.
	 *
	 * @return array Rows array.
	 */
	abstract protected function get_rows();

	/**
	 * Define Row settings.
	 *
	 * @param string $row_id Row id.
	 */
	public function define_row_settings( $row_id ) {

		$row_setting_id = $this->control_id . '_' . $row_id;
		$row_class      = '.' . join(
			'-',
			array(
				$this->get_id(),
				$row_id,
				'inner',
			)
		);
		if ( $row_id === 'sidebar' ) {
			$row_class = '.header-menu-sidebar';
		}

		SettingsManager::get_instance()->add(
			[
				'id'                => $row_setting_id,
				'transport'         => 'postMessage',
				'sanitize_callback' => array( $this, 'sanitize_json' ),
				'default'           => '',
			]
		);

		if ( $row_id === 'sidebar' ) {
			$this->add_sidebar_controls( $row_setting_id );
		}

		if ( $row_id !== 'sidebar' ) {
			SettingsManager::get_instance()->add(
				[
					'id'                 => self::LAYOUT_SETTING,
					'group'              => $row_setting_id,
					'tab'                => SettingsManager::TAB_LAYOUT,
					'label'              => __( 'Layout', 'neve' ),
					'type'               => 'select',
					'section'            => $row_setting_id,
					'options'            => [
						'choices' => [
							'layout-full-contained' => __( 'Full Width', 'neve' ) . ' - ' . __( 'Contained', 'neve' ),
							'layout-fullwidth'      => __( 'Full Width', 'neve' ),
							'layout-contained'      => __( 'Contained', 'neve' ),
						],
					],
					'conditional_header' => $this->get_id() === 'header',
					'transport'          => 'post' . $row_setting_id,
					'sanitize_callback'  => 'wp_filter_nohtml_kses',
					'default'            => 'layout-full-contained',
				]
			);

			SettingsManager::get_instance()->add(
				[
					'id'                    => self::HEIGHT_SETTING,
					'group'                 => $row_setting_id,
					'tab'                   => SettingsManager::TAB_STYLE,
					'section'               => $row_setting_id,
					'label'                 => __( 'Row height', 'neve' ),
					'type'                  => '\Neve\Customizer\Controls\React\Responsive_Range',
					'live_refresh_selector' => $row_class,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'responsive' => true,
							'vars'       => '--height',
							'suffix'     => 'px',
							'fallback'   => 'auto',
							'selector'   => $row_class,
						],
						'prop'   => 'height',
						'unit'   => 'px',
					],
					'options'               => [
						'input_attrs' => [
							'step'       => 1,
							'min'        => 0,
							'max'        => 700,
							'defaultVal' => [
								'mobile'  => 0,
								'tablet'  => 0,
								'desktop' => 0,
							],
							'units'      => [ 'px' ],
						],
					],
					'transport'             => 'postMessage',
					'sanitize_callback'     => array( $this, 'sanitize_responsive_int_json' ),
					'default'               => '{ "mobile": "0", "tablet": "0", "desktop": "0" }',
					'conditional_header'    => $this->get_id() === 'header',
				]
			);
		}

		if ( $this->columns_layout && neve_is_new_builder() ) {
			$this->add_columns_layout_controls( $row_setting_id );
		}

		$default_colors = $this->get_default_row_colors( $row_id );
		SettingsManager::get_instance()->add(
			[
				'id'                    => self::BACKGROUND_SETTING,
				'group'                 => $row_setting_id,
				'tab'                   => SettingsManager::TAB_STYLE,
				'section'               => $row_setting_id,
				'label'                 => __( 'Row Background', 'neve' ),
				'type'                  => 'neve_background_control',
				'live_refresh_selector' => $row_id === 'sidebar' ? $row_class . ' .header-menu-sidebar-bg' : $row_class,
				'live_refresh_css_prop' => [
					'cssVar'  => [
						'vars'     => 'backgroundControl',
						'selector' => $row_id === 'sidebar' ? '.header-menu-sidebar-bg' : '.' . $this->get_id() . '-' . $row_id,
					],
					'partial' => $row_id === 'sidebar' ? 'hfg_header_layout_partial' : $row_setting_id . '_partial',
				],
				'options'               => [
					'priority' => 100,
				],
				'default'               => [
					'type'       => 'color',
					'colorValue' => $default_colors['background'],
				],
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'neve_sanitize_background',
				'conditional_header'    => $this->get_id() === 'header',
			]
		);

		do_action( 'hfg_add_settings_to_rows', SettingsManager::get_instance(), $row_setting_id, $row_id, $this->get_id() );

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::TEXT_COLOR,
				'group'                 => $row_setting_id,
				'tab'                   => SettingsManager::TAB_STYLE,
				'label'                 => __( 'Text Color', 'neve' ),
				'section'               => $row_setting_id,
				'conditional_header'    => $this->get_id() === 'header',
				'type'                  => 'neve_color_control',
				'transport'             => 'postMessage',
				'live_refresh_selector' => $row_class,
				'live_refresh_css_prop' => [
					'cssVar'  => [
						'vars'     => '--color',
						'selector' => $row_id === 'sidebar' ? '.header-menu-sidebar-bg' : '.' . $this->get_id() . '-' . $row_id,
					],
					'partial' => $row_id === 'sidebar' ? 'hfg_header_layout_partial' : $row_setting_id . '_partial',
				],
				'sanitize_callback'     => 'wp_filter_nohtml_kses',
				'default'               => $default_colors['text'],
			]
		);
		do_action( 'hfg_row_settings', $this->get_id(), $row_id, $row_setting_id );
	}

	/**
	 * Returns current builder id.
	 *
	 * @return string|null Builder id.
	 */
	public static function get_current_builder() {
		return self::$current_builder;
	}

	/**
	 *  Define templates used to loading the builder.
	 */
	abstract public function load_template();

	/**
	 * Method to get protected properties for class.
	 *
	 * @param string $key The property key name.
	 *
	 * @return mixed
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
	 * Register builder scripts
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function scripts() {
		wp_add_inline_style( 'hfg-customizer-control', $this->inline_builder_styles() );
	}

	/**
	 * Returns a string of css rules.
	 *
	 * @return string
	 * @since   1.0.0
	 * @access  protected
	 */
	protected function inline_builder_styles() {
		$style = '';

		$style_array = [];
		$rows        = $this->get_rows();
		if ( ! empty( $rows ) ) {
			foreach ( $rows as $row_id => $row_label ) {
				$style_array[ '#accordion-section-' . $this->control_id . '_' . $row_id ] = array(
					'display' => 'none !important',
				);
			}
		}

		return $style . $this->css_array_to_css( $style_array );
	}

	/**
	 * Called to register component controls.
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 * @since   1.0.0
	 * @access  public
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {

		/**
		 * An instance of Component.
		 *
		 * @var Component $component
		 */
		foreach ( $this->builder_components as $component ) {
			$component->customize_register( $wp_customize );
		}

		/** @var \WP_Customize_Panel|null $panel */
		$panel = $wp_customize->get_panel( $this->panel );

		if ( null !== $panel ) {
			return $wp_customize;
		}

		$title = ( isset( $this->title ) && ! empty( $this->title ) )
			? $this->title
			: __( 'Header', 'neve' );

		$description = ( isset( $this->description ) && ! empty( $this->description ) )
			? $this->description
			: '';

		$wp_customize->add_panel(
			$this->panel,
			array(
				'priority'       => 25,
				'capability'     => 'edit_theme_options',
				'theme_supports' => Settings\Config::get_support(),
				'title'          => $title,
				'description'    => $description,
			)
		);

		$wp_customize->add_section(
			$this->section,
			array(
				'title'    => $title,
				'priority' => 299,
				'panel'    => $this->panel,
			)
		);

		if ( ! empty( $this->instructions_array ) ) {
			$wp_customize->add_section(
				new Instructions_Section(
					$wp_customize,
					$this->section . '_quick_links',
					array(
						'priority' => - 100,
						'panel'    => $this->panel,
						'type'     => 'hfg_instructions',
						'options'  => $this->instructions_array,
					)
				)
			);
		}


		Settings\Manager::get_instance()->load( $this->control_id, $wp_customize );

		$this->add_rows_controls( $wp_customize );

		$wp_customize->selective_refresh->add_partial(
			$this->control_id . '_partial',
			array(
				'selector'        => '.' . $this->panel,
				'settings'        => Settings\Manager::get_instance()->get_transport_group( $this->get_id() ),
				'render_callback' => array( $this, 'render' ),
			)
		);

		$wp_customize = apply_filters( 'hfg_after_builder_' . $this->get_id() . '_registered', $wp_customize, $this );

		return $wp_customize;
	}

	/**
	 * Adds row controls.
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager|null
	 * @since   1.0.0
	 * @access  protected
	 */
	protected function add_rows_controls( $wp_customize ) {
		$rows = $this->get_rows();
		if ( empty( $rows ) ) {
			return null;
		}
		foreach ( $rows as $row_id => $row ) {

			$row_setting_id = $this->control_id . '_' . $row_id;

			$title       = $row;
			$description = '';
			if ( is_array( $row ) ) {
				$title = ( isset( $row['title'] ) && ! empty( $row['title'] ) )
					? $row['title']
					: __( 'Section Content', 'neve' );

				$description = ( isset( $row['description'] ) && ! empty( $row['description'] ) )
					? $row['description']
					: $description;
			}

			$wp_customize->add_section(
				$row_setting_id,
				array(
					'title'              => $title,
					'description'        => $description,
					'description_hidden' => ( $description !== '' ),
					'priority'           => 100,
					'panel'              => $this->panel,
				)
			);

			Settings\Manager::get_instance()->load( $row_setting_id, $wp_customize );

			$wp_customize->selective_refresh->add_partial(
				$row_setting_id . '_partial',
				array(
					'selector'        => '.' . $this->panel,
					'settings'        => Settings\Manager::get_instance()->get_transport_group( $row_setting_id ),
					'render_callback' => array( $this, 'render' ),
				)
			);
		}

		return $wp_customize;
	}

	/**
	 * Return current device in the loop.
	 *
	 * @return null|string Current device.
	 */
	public function get_current_device() {
		return self::$current_device;
	}

	/**
	 * Return current row in the loop.
	 *
	 * @return null|string Current row.
	 */
	public function get_current_row_index() {
		return self::$current_row;
	}

	/**
	 * Return current slot in the loop.
	 *
	 * @return null|string Current slot.
	 */
	public function get_current_slot_index() {
		return self::$current_slot;
	}

	/**
	 * Render markup for builder.
	 */
	public function render() {
		$layout                = $this->get_layout_data();
		self::$current_builder = $this->get_id();
		if ( is_customize_preview() ) {
			$style     = $this->add_style( [] );
			$generator = new Css_Generator();
			$generator->set( $style );
			$style = $generator->generate();
			echo '<style type="text/css" id="' . esc_attr( $this->get_id() ) . '-style">' . $style . '</style>';// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		foreach ( $layout as $device_name => $device ) {
			if ( empty( $device ) ) {
				continue;
			}
			self::$current_device = $device_name;

			$this->render_device( $device_name, $device );
		}
	}

	/**
	 * Return builder data.
	 *
	 * @return array Builder data.
	 */
	public function get_layout_data() {
		if ( ! empty( $this->layout_data ) ) {
			return $this->layout_data;
		}
		$mod_value = json_decode( SettingsManager::get_instance()->get( $this->layout_control_id ), true );

		$this->layout_data = wp_parse_args( $mod_value, array_fill_keys( array_keys( $this->devices ), array_fill_keys( array_keys( $this->get_rows() ), [] ) ) );

		return $this->layout_data;
	}

	/**
	 * See if row is populated.
	 *
	 * @param string $row_id Row id.
	 *
	 * @return bool Is row used?
	 */
	public function is_row_used( $row_id ) {
		foreach ( $this->get_layout_data() as $devices ) {
			if ( isset( $devices[ $row_id ] ) && ! empty( $devices[ $row_id ] ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Check if component is used in builder.
	 *
	 * @param string $component_id Component id.
	 *
	 * @return bool Is used?
	 */
	public function is_component_active( $component_id ) {
		if ( empty( $this->active_components ) ) {
			$components = [];

			foreach ( $this->get_layout_data() as $devices ) {
				foreach ( $devices as $row_index => $row ) {
					if ( neve_is_new_builder() && $row_index !== 'sidebar' ) {
						foreach ( $row as $slot ) {
							if ( empty( $slot ) || ! is_array( $slot ) ) {
								continue;
							}

							$components = array_merge( $components, array_combine( wp_list_pluck( $slot, 'id' ), array_fill( 0, count( $slot ), true ) ) );
						}
						continue;
					}
					// Legacy
					$row_components = [];
					foreach ( $row as $component ) {
						if ( isset( $component['id'] ) ) {
							$row_components[ $component['id'] ] = true;
						}
					}

					$components = array_merge( $components, $row_components );
				}
			}
			$this->active_components = $components;
		}

		return isset( $this->active_components[ $component_id ] );
	}

	/**
	 * Method to add Builder css styles.
	 *
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_style( array $css_array = array() ) {

		foreach ( $this->get_rows() as $row_index => $row_label ) {
			if ( ! $this->is_row_used( $row_index ) ) {
				continue;
			}
			$css_array = $this->add_row_style( $row_index, $css_array );
		}

		/**
		 * An instance of Component.
		 *
		 * @var Abstract_Component $component
		 */
		foreach ( $this->builder_components as $component ) {
			if ( ! $this->is_component_active( $component->get_id() ) ) {
				continue;
			}
			$css_array = $component->add_style( $css_array );
		}

		return $css_array;
	}

	/**
	 * Add legacy row styles.
	 *
	 * @param array  $css_array css array.
	 * @param string $row_index row index.
	 *
	 * @return array
	 */
	private function add_legacy_row_styles( $css_array, $row_index ) {
		$selector = $row_index === 'sidebar' ? '.header-menu-sidebar .header-menu-sidebar-bg' : '.' . $this->get_id() . '-' . $row_index . '-inner';

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $selector,
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_HEIGHT => [
					Dynamic_Selector::META_KEY           => $this->control_id . '_' . $row_index . '_height',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) {
						$value = (int) $value;
						if ( $value > 0 ) {
							return sprintf( '%s:%s;', $css_prop, $value . 'px' );
						}

						return '';
					},
					Dynamic_Selector::META_DEFAULT       => '{ desktop: 0, tablet: 0, mobile: 0 }',
				],
			],
		];

		$default_colors = $this->get_default_row_colors( $row_index );
		$css_array[]    = [
			Dynamic_Selector::KEY_SELECTOR => $selector . ',' . $selector . ' a:not(.button),' . $selector . ' .navbar-toggle',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_COLOR => [
					Dynamic_Selector::META_KEY     => $this->control_id . '_' . $row_index . '_' . self::TEXT_COLOR,
					Dynamic_Selector::META_DEFAULT => $default_colors['text'],
				],
			],
		];

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $selector . ' .nv-icon svg,' . $selector . ' .nv-contact-list svg',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_FILL_COLOR => [
					Dynamic_Selector::META_KEY     => $this->control_id . '_' . $row_index . '_' . self::TEXT_COLOR,
					Dynamic_Selector::META_DEFAULT => $default_colors['text'],
				],
			],
		];

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $selector . ' .icon-bar',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_BACKGROUND_COLOR => [
					Dynamic_Selector::META_KEY     => $this->control_id . '_' . $row_index . '_' . self::TEXT_COLOR,
					Dynamic_Selector::META_DEFAULT => $default_colors['text'],
				],
			],
		];

		if ( $this->get_id() === 'header' ) {
			$selector = '.hfg_header ' . $selector;
		}

		$default_color = '#ffffff';
		if ( isset( $this->default_colors[ $this->get_id() ][ $row_index ] ) && ! empty( $this->default_colors[ $this->get_id() ][ $row_index ] ) ) {
			$default_color = $this->default_colors[ $this->get_id() ][ $row_index ];
		}
		$defaults      = $this->get_default_row_colors( $row_index );
		$default_color = isset( $defaults['background'] ) ? $defaults['background'] : $default_color;

		$background = get_theme_mod(
			$this->control_id . '_' . $row_index . '_background',
			[
				'type'       => 'color',
				'colorValue' => $default_color,
			]
		);

		if ( $background['type'] === 'color' && ! empty( $background['colorValue'] ) ) {
			$css_array[] = [
				Dynamic_Selector::KEY_SELECTOR => $selector . ' .nav-ul .sub-menu',
				Dynamic_Selector::KEY_RULES    => [
					Config::CSS_PROP_BACKGROUND_COLOR => [
						Dynamic_Selector::META_KEY     => $this->control_id . '_' . $row_index . '_background.colorValue',
						Dynamic_Selector::META_DEFAULT => $default_color,
					],
				],
			];
			$css_array[] = [
				Dynamic_Selector::KEY_SELECTOR => $selector,
				Dynamic_Selector::KEY_RULES    => [
					Config::CSS_PROP_BACKGROUND_COLOR => [
						Dynamic_Selector::META_KEY     => $this->control_id . '_' . $row_index . '_background.colorValue',
						Dynamic_Selector::META_DEFAULT => $default_color,
					],
				],
			];
		}

		if ( $background['type'] === 'image' ) {
			if ( $row_index !== 'sidebar' ) {
				$css_array[] = [
					Dynamic_Selector::KEY_SELECTOR => $selector . ' .nav-ul .sub-menu li,' . $selector . ' .nav-ul .sub-menu',
					Dynamic_Selector::KEY_RULES    => [
						Config::CSS_PROP_BACKGROUND_COLOR => [
							Dynamic_Selector::META_KEY => $this->control_id . '_' . $row_index . '_background.overlayColorValue',
						],
						Config::CSS_PROP_BORDER_COLOR     => [
							Dynamic_Selector::META_KEY => $this->control_id . '_' . $row_index . '_background.overlayColorValue',
						],
					],
				];
			}

			$css_array[] = [
				Dynamic_Selector::KEY_SELECTOR => $selector,
				Dynamic_Selector::KEY_RULES    => [
					Config::CSS_PROP_BACKGROUND_COLOR => [
						Dynamic_Selector::META_KEY    => $this->control_id . '_' . $row_index . '_background',
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							$background = $value;
							$style      = '';
							if ( isset( $background['useFeatured'] ) && $background['useFeatured'] === true && is_singular() ) {
								$featured_image = get_the_post_thumbnail_url();
								if ( ! empty( $featured_image ) ) {
									$style .= sprintf( 'background-image: url("%s");', esc_url( $featured_image ) );
								} else {
									$style .= sprintf( 'background-image: url("%s");', esc_url( $background['imageUrl'] ) );
								}
							} elseif ( ! empty( $background['imageUrl'] ) ) {
								$style .= sprintf( 'background-image: url("%s");', esc_url( $background['imageUrl'] ) );
							}
							$style .= 'background-size:cover;';

							if ( ! empty( $background['focusPoint'] ) && ! empty( $background['focusPoint']['x'] ) && ! empty( $background['focusPoint']['y'] ) ) {
								$style .= 'background-position:' . round( $background['focusPoint']['x'] * 100 ) . '% ' . round( $background['focusPoint']['y'] * 100 ) . '%;';
							}

							if ( isset( $background['fixed'] ) && $background['fixed'] === true ) {
								$style .= 'background-attachment: fixed;';
							}
							$style .= 'background-color:transparent;';

							return $style;
						},
					],
				],
			];

			$css_array[] = [
				Dynamic_Selector::KEY_SELECTOR => $selector . ':before',
				Dynamic_Selector::KEY_RULES    => [
					Config::CSS_PROP_BACKGROUND_COLOR => [
						Dynamic_Selector::META_KEY    => $this->control_id . '_' . $row_index . '_background',
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							$background = $value;
							$style      = '';
							$opacity    = isset( $background['overlayOpacity'] ) ? $background['overlayOpacity'] : 50;
							if ( ! empty( $background['overlayColorValue'] ) && ! empty( $opacity ) ) {
								$style = sprintf( 'background-color:%s; opacity: %s; content: ""; position:absolute; top: 0; bottom:0; width:100%%;', $background['overlayColorValue'], ( $opacity / 100 ) );
							}

							return $style;
						},
					],
				],
			];
		}

		if ( $row_index === 'sidebar' ) {
			$css_array = $this->add_sidebar_styles( $css_array );
		}

		return $css_array;
	}

	/**
	 * Method to generate css array for each row.
	 *
	 * @param string $row_index The row index.
	 * @param array  $css_array The css array.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  private
	 */
	private function add_row_style( $row_index, $css_array = array() ) {
		if ( neve_is_new_builder() ) {
			$css_array = $this->add_new_builder_styles( $css_array, $row_index );
		}

		if ( ! neve_is_new_skin() ) {
			return $this->add_legacy_row_styles( $css_array, $row_index );
		}

		$rules          = [];
		$selector       = $row_index === 'sidebar' ? '.header-menu-sidebar-bg' : '.' . $this->get_id() . '-' . $row_index;
		$default_colors = $this->get_default_row_colors( $row_index );

		if ( $row_index !== 'sidebar' ) {
			$rules['--height'] = [
				Dynamic_Selector::META_KEY           => $this->control_id . '_' . $row_index . '_height',
				Dynamic_Selector::META_IS_RESPONSIVE => true,
				Dynamic_Selector::META_FILTER        => function ( $css_prop, $value, $meta, $device ) {
					$value = (int) $value;
					if ( $value > 0 ) {
						return sprintf( '%s:%s;', $css_prop, $value . 'px' );
					}

					return '';
				},
				Dynamic_Selector::META_DEFAULT       => '{ desktop: 0, tablet: 0, mobile: 0 }',
			];
		}

		$rules['--color'] = [
			Dynamic_Selector::META_KEY     => $this->control_id . '_' . $row_index . '_' . self::TEXT_COLOR,
			Dynamic_Selector::META_DEFAULT => $default_colors['text'],
		];

		// If there is no default, use site background.
		$default_color = isset( $default_colors['background'] ) ? $default_colors['background'] : 'var(--nv-site-bg)';

		$background = get_theme_mod(
			$this->control_id . '_' . $row_index . '_background',
			[
				'type'       => 'color',
				'colorValue' => $default_color,
			]
		);

		if ( $background['type'] === 'color' && ! empty( $background['colorValue'] ) ) {
			$rules = array_merge(
				$rules,
				[
					'--bgColor' => [
						Dynamic_Selector::META_KEY     => $this->control_id . '_' . $row_index . '_background.colorValue',
						Dynamic_Selector::META_DEFAULT => $default_color,
					],
				]
			);
		}

		if ( $background['type'] === 'image' ) {
			$rules = array_merge(
				$rules,
				[
					'--overlayColor'     => [
						Dynamic_Selector::META_KEY => $this->control_id . '_' . $row_index . '_background.overlayColorValue',
					],
					'--bgImage'          => [
						Dynamic_Selector::META_KEY    => $this->control_id . '_' . $row_index . '_background',
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							$image = 'none';
							if ( isset( $value['useFeatured'] ) && $value['useFeatured'] === true && is_singular() ) {
								$featured_image = get_the_post_thumbnail_url();
								if ( ! empty( $featured_image ) ) {
									$image = sprintf( 'url("%s")', esc_url( $featured_image ) );
								} else {
									$image = sprintf( 'url("%s")', esc_url( $value['imageUrl'] ) );
								}
							} elseif ( ! empty( $value['imageUrl'] ) ) {
								$image = sprintf( 'url("%s")', esc_url( $value['imageUrl'] ) );
							}

							return sprintf( '%s:%s;', $css_prop, $image );
						},
					],
					'--bgPosition'       => [
						Dynamic_Selector::META_KEY    => $this->control_id . '_' . $row_index . '_background',
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							if ( empty( $value['focusPoint'] ) || empty( $value['focusPoint']['x'] ) || empty( $value['focusPoint']['y'] ) ) {
								return '';
							}

							$parsed_position = round( $value['focusPoint']['x'] * 100 ) . '% ' . round( $value['focusPoint']['y'] * 100 ) . '%;';

							return sprintf( '%s:%s;', $css_prop, $parsed_position );
						},
					],
					'--bgAttachment'     => [
						Dynamic_Selector::META_KEY    => $this->control_id . '_' . $row_index . '_background',
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							if ( ! isset( $value['fixed'] ) || $value['fixed'] !== true ) {
								return '';
							}

							return sprintf( '%s:fixed;', $css_prop );
						},
					],
					'--bgOverlayOpacity' => [
						Dynamic_Selector::META_KEY    => $this->control_id . '_' . $row_index . '_background',
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							if ( ! isset( $value['overlayOpacity'] ) ) {
								return '';
							}

							return sprintf( '%s:%s;', $css_prop, $value['overlayOpacity'] / 100 );
						},
					],
				]
			);
		}

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $selector,
			Dynamic_Selector::KEY_RULES    => $rules,
		];


		if ( $row_index === 'sidebar' ) {
			$css_array = $this->add_sidebar_styles( $css_array );
		}


		return $css_array;
	}

	/**
	 * Render device markup.
	 *
	 * @param string $device_name Device id.
	 * @param array  $device_details Device meta.
	 */
	public function render_device( $device_name, $device_details ) {
		// Make sure we hold the defined order.
		$default_order = array_keys( $this->get_rows() );
		foreach ( $default_order as $row_index ) {
			if ( ! isset( $device_details[ $row_index ] ) ) {
				continue;
			}
			$row = $device_details[ $row_index ];
			if ( neve_is_new_builder() ) {
				$used = [];
				foreach ( $row as $components ) {
					$used = array_merge( $used, $components );
				}

				if ( empty( $used ) ) {
					continue;
				}
			} elseif ( empty( $row ) ) {
				continue;
			}
			self::$current_row = $row_index;
			$this->render_row( $device_name, $row_index, $row );
		}
	}

	/**
	 * Get the component alignment.
	 *
	 * @param string $id component id.
	 * @param bool   $vertical should get vertical alignment.
	 *
	 * @return array|string|false
	 */
	private function get_component_alignment( $id, $vertical = false ) {
		if ( $vertical ) {
			return SettingsManager::get_instance()->get( $id . '_' . Abstract_Component::VERTICAL_ALIGN_ID, null );
		}

		$alignment = SettingsManager::get_instance()->get( $id . '_' . Abstract_Component::ALIGNMENT_ID, null );

		// Make sure we migrate old alignment values.
		if ( is_array( $alignment ) ) {
			return $alignment;
		}

		$is_menu_component = strpos( $id, 'primary-menu' ) > - 1 || strpos( $id, 'secondary-menu' );
		$tmp_align         = ( is_string( $alignment ) && in_array(
			$alignment,
			[
				'left',
				'right',
				'center',
				'justify',
			]
		) ) ? $alignment : 'left';

		return [
			'desktop' => $tmp_align,
			'tablet'  => $is_menu_component ? 'left' : $tmp_align,
			'mobile'  => $is_menu_component ? 'left' : $tmp_align,
		];
	}

	/**
	 * Checks if a row has items inside a slot.
	 *
	 * @param string $slot slot to check in row.
	 *
	 * @return bool
	 */
	private function row_has_slot( $slot ) {
		$current_row = $this->get_current_row_index();
		$layout_data = $this->get_layout_data();
		$device      = $this->get_current_device();

		if ( ! isset( $layout_data[ $device ] ) ) {
			return false;
		}

		if ( ! isset( $layout_data[ $device ][ $current_row ] ) ) {
			return false;
		}

		$row_data = $layout_data[ $device ][ $current_row ];

		if ( ! isset( $row_data[ $slot ] ) || empty( $row_data[ $slot ] ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Add row utility classes.
	 *
	 * @param array  $classes footer classes.
	 * @param string $row_index row index.
	 *
	 * @return mixed
	 */
	public function add_header_row_utility_classes( $classes, $row_index ) {
		if ( $this->get_id() !== self::$current_builder ) {
			return $classes;
		}

		if ( $this->row_has_slot( 'center' ) ) {
			$classes[] = 'has-center';
		}

		return $classes;
	}

	/**
	 * Render the builder components.
	 *
	 * @param string|null $device the device [desktop|mobile].
	 */
	public function new_render_components( $device ) {
		$row_index = 0;
		if ( $device === null ) {
			$device    = self::$current_device;
			$row_index = self::$current_row;
		}

		$builder_id = $this->get_id();
		$data       = $this->get_layout_data()[ $device ][ $row_index ];

		// Remap sidebar data so we can use it as a slot.
		if ( $row_index === 'sidebar' ) {
			$data = [ 'sidebar' => $data ];
		}

		$render_buffer = [
			'left'    => [],
			'c-left'  => [],
			'center'  => [],
			'c-right' => [],
			'right'   => [],
		];

		$slot            = null;
		$component_index = null;
		$slot_data       = null;

		foreach ( $data as $slot => $slot_data ) {
			$is_side_slot = in_array( $slot, [ 'right', 'left' ], true );
			if ( ! ( $this->row_has_slot( 'center' ) && $is_side_slot ) && empty( $slot_data ) && $builder_id !== 'footer' ) {
				continue;
			}

			$render_index           = 0;
			$was_previous_mergeable = false;

			foreach ( $slot_data as $component_index => $component ) {
				if ( ! isset( $component['id'] ) ) {
					continue;
				}

				if ( ! isset( $this->builder_components[ $component['id'] ] ) ) {
					continue;
				}

				/**
				 * An instance of Abstract_Component
				 *
				 * @var Abstract_Component $component_instance
				 */
				$component_instance = $this->builder_components[ $component['id'] ];
				$is_mergeable       = $component_instance->get_property( 'is_auto_width' );

				if ( ! $is_mergeable && ! $was_previous_mergeable ) {
					$render_index ++;
				}

				if ( $row_index === 'sidebar' ) {
					$render_index ++;
				}

				$align = $this->get_component_alignment( $component['id'] );

				$vertical_align = $this->get_component_alignment( $component['id'], true );
				$classes        = [ 'builder-item' ];

				if ( strpos( $component['id'], 'primary-menu' ) > - 1 ) {
					$classes[] = 'has-nav';
				}

				$new_skin = neve_is_new_skin();

				// We don't add align classes to primary menus as there's no align control in new skin.
				if ( ! $new_skin || strpos( $component['id'], Nav::COMPONENT_ID ) === false ) {
					foreach ( $align as $device_slug => $align_slug ) {
						$alignment_is_mobile = in_array( $device_slug, [ 'tablet', 'mobile' ], true );
						$is_header_sidebar   = $builder_id === 'header' && $row_index === 'sidebar';
						// Make sure we don't apply device-specific classes if the rows aren't visible on respective device.
						// Footer has same rows on all devices.
						if ( $builder_id === 'footer' || $is_header_sidebar || ( $device === $device_slug || ( $alignment_is_mobile && $device === 'mobile' ) ) ) {
							$classes[] = $device_slug . '-' . $align_slug;
						}
					}
				}

				// If we don't have anything at render index, make sure we do.
				if ( ! isset( $render_buffer[ $slot ][ $render_index ] ) ) {
					$render_buffer[ $slot ][ $render_index ] = [
						'classes'    => $classes,
						'components' => [],
					];
					if ( $builder_id === 'footer' && ! empty( $vertical_align ) ) {
						$render_buffer[ $slot ][ $render_index ]['vertical-align'] = 'hfg-item-v-' . $vertical_align;
					}
				}
				$render_buffer[ $slot ][ $render_index ]['components'][] = $component['id'];

				if ( $is_mergeable ) {
					$was_previous_mergeable = true;
					continue;
				}
				$was_previous_mergeable = false;
			}

			if ( isset( $render_buffer[ $slot ] ) && is_array( $render_buffer[ $slot ] ) ) {
				$render_buffer[ $slot ] = array_values( $render_buffer[ $slot ] );
			}
		}

		if ( ! $this->columns_layout ) {
			if ( $slot === 'c-left' && $component_index === 0 ) {
				$classes[] = 'hfg-end';
			}
			if ( $slot === 'c-right' && $component_index === count( $slot_data ) - 1 ) {
				$classes[] = 'hfg-start';
			}
		}

		if ( ! $this->columns_layout ) {
			// Move center-side-slot components inside the side slots.
			if ( isset( $render_buffer['c-right'] ) ) {
				$length = count( $render_buffer['c-right'] ) - 1;
				if ( $length >= 0 ) {
					$render_buffer['c-right'][ $length ]['classes'][] = 'hfg-start';
				}
				$render_buffer['right'] = array_merge( $render_buffer['c-right'], $render_buffer['right'] );
			}
			if ( isset( $render_buffer['c-left'] ) ) {
				$render_buffer['c-left'][0]['classes'][] = 'hfg-end';
				$render_buffer['left']                   = array_merge( $render_buffer['left'], $render_buffer['c-left'] );
			}
			unset( $render_buffer['c-left'] );
			unset( $render_buffer['c-right'] );
		} else {
			// Drop the unused columns for columned layout.
			$columns = SettingsManager::get_instance()->get( 'hfg_footer_layout_' . $row_index . '_' . self::COLUMNS_NUMBER, 3 );
			array_splice( $render_buffer, absint( $columns ) );
		}

		foreach ( $render_buffer as $slot => $slot_data ) {
			if ( $slot === 'center' && empty( $slot_data ) && ! $this->columns_layout ) {
				continue;
			}

			$slot_classes = [ 'hfg-slot', $slot ];

			if ( count( $slot_data ) === 1 ) {
				$slot_classes[] = 'single';
				if ( isset( $slot_data[0]['vertical-align'] ) ) {
					$slot_classes[] = $slot_data[0]['vertical-align'];
				}
			}

			if ( $row_index !== 'sidebar' ) {
				echo sprintf( '<div class="%s">', esc_attr( join( ' ', $slot_classes ) ) );
			}

			self::$current_slot = $slot;

			foreach ( $slot_data as $group_index => $component_group ) {
				if ( ! isset( $component_group['components'] ) ) {
					continue;
				}
				if ( count( $component_group['components'] ) > 1 ) {
					$component_group['classes'][] = 'hfg-is-group';
				}
				echo sprintf( '<div class="%s">', esc_attr( join( ' ', $component_group['classes'] ) ) );
				foreach ( $component_group['components'] as $component ) {
					self::$current_component = $component;
					$instance                = $this->builder_components[ $component ];
					$instance->render();
				}
				echo '</div>';
			}

			if ( $row_index !== 'sidebar' ) {
				echo '</div>';
			}
		}
	}

	/**
	 * Render components in the row.
	 *
	 * @param null|string $device Device id.
	 */
	public function render_components( $device = null ) {
		if ( neve_is_new_builder() ) {
			$this->new_render_components( $device );

			return;
		}

		$row_index = 0;
		if ( $device === null ) {
			$device    = self::$current_device;
			$row_index = self::$current_row;
		}

		$data        = $this->get_layout_data()[ $device ][ $row_index ];
		$max_columns = 12;
		$last_item   = null;

		usort(
			$data,
			function ( $item1, $item2 ) {
				if ( $item1['x'] === $item2['x'] ) {
					return 0;
				}

				return $item1['x'] < $item2['x'] ? - 1 : 1;
			}
		);

		$collection    = new \CachingIterator(
			new \ArrayIterator(
				$data
			),
			\CachingIterator::TOSTRING_USE_CURRENT
		);
		$render_buffer = [];
		$render_index  = 1;
		foreach ( $collection as $component_location ) {

			if ( ! isset( $this->builder_components[ $component_location['id'] ] ) ) {
				continue;
			}
			/**
			 * An instance of Abstract_Component
			 *
			 * @var Abstract_Component $component
			 */
			$component      = $this->builder_components[ $component_location['id'] ];
			$x              = intval( $component_location['x'] );
			$width          = intval( $component_location['width'] );
			$align          = $this->get_component_alignment( $component_location['id'] );
			$vertical_align = $this->get_component_alignment( $component_location['id'], true );

			if ( ! $collection->hasNext() && ( $x + $width < $max_columns ) ) {
				$width += $max_columns - ( $x + $width );
			}

			$is_auto_width = $component->get_property( 'is_auto_width' );
			if ( $row_index === 'sidebar' ) {
				$width         = 12;
				$is_auto_width = false;
			}

			// Let's check if the component is nearby another.
			$is_near_next = $collection->hasNext();
			$is_near_prev = $last_item !== null;

			// Check if component is nearby the next component.
			if ( $collection->hasNext() ) {
				$next_component_object = $collection->getInnerIterator()->current();
				if ( $next_component_object['x'] - ( $x + $width ) !== 0 ) {
					$is_near_next = false;
				}
			}

			// Check if component is nearby the prev component.
			if ( $last_item !== null ) {
				if ( ( (int) $last_item['x'] + (int) $last_item['width'] ) - $x !== 0 ) {
					$is_near_prev = false;
				}
			}

			// If there is a gap between components, build new group.
			if ( $last_item !== null && ! $is_near_prev ) {
				$render_index ++;
			}
			// If there are two neighbours and none of them have auto_width, build new group.
			if ( $is_near_prev && ! $last_item['is_auto_width'] && ! $is_auto_width ) {
				$render_index ++;
			}
			// If there are neighbours prev and next, always group with the next on.
			if ( $is_near_prev && $is_near_next && ! $last_item['is_auto_width'] && $is_auto_width && ! isset( $render_buffer[ $render_index ] ) ) {
				$render_index ++;
			}

			// Use alignment only of non-auto width element.
			if ( ! $is_auto_width && isset( $render_buffer[ $render_index ] ) ) {
				$render_buffer[ $render_index ]['align']          = $align;
				$render_buffer[ $render_index ]['vertical-align'] = $vertical_align;
			}


			$is_first = false;
			$is_last  = false;
			if ( $last_item === null ) {
				$is_first     = true;
				$render_index = 0;
			}
			if ( ! $collection->hasNext() ) {
				$is_last = true;
			}


			if ( $row_index !== 'sidebar' ) {
				if ( $x > 0 && $last_item !== null ) {
					$origin = intval( $last_item['width'] ) + intval( $last_item['x'] );
					if ( ( $x - $origin ) > 0 ) {
						$x = $x - $origin;
					} else {
						$x = 0;
					}
				}
			}
			if ( ! isset( $render_buffer[ $render_index ] ) ) {
				$render_buffer[ $render_index ] = [
					'components'     => [],
					'align'          => $align,
					'vertical-align' => $vertical_align,
					'is_first'       => $is_first,
					'is_last'        => false,
				];
			}
			if ( strpos( $component_location['id'], 'primary-menu' ) > - 1 ) {
				$render_buffer[ $render_index ]['has_primary_nav'] = true;
			}
			$render_buffer[ $render_index ]['is_last']      = $is_last;
			$render_buffer[ $render_index ]['components'][] = [
				'component' => $component,
				'offset'    => $x,
				'width'     => $width,
			];
			$component_location['is_auto_width']            = $is_auto_width;
			$component_location['align']                    = $align;
			$component_location['vertical-align']           = $vertical_align;
			$last_item                                      = $component_location;
		}
		foreach ( $render_buffer as $render_groups ) {
			$width          = array_sum( array_column( $render_groups['components'], 'width' ) );
			$x              = max( array_column( $render_groups['components'], 'offset' ) );
			$align          = $render_groups['align'];
			$vertical_align = $render_groups['vertical-align'];
			$classes        = [ 'builder-item' ];
			if ( isset( $render_groups['has_primary_nav'] ) ) {
				$classes[] = 'has-nav';
			}
			if ( $render_groups['is_last'] ) {
				$classes[] = 'hfg-item-last';
			}
			if ( $render_groups['is_first'] ) {
				$classes[] = 'hfg-item-first';
			}
			$classes[] = 'col-' . $width;

			foreach ( $align as $device_slug => $align_slug ) {
				$builder_id          = $this->get_id();
				$alignment_is_mobile = in_array( $device_slug, [ 'tablet', 'mobile' ], true );
				$is_header_sidebar   = $builder_id === 'header' && $row_index === 'sidebar';
				// Make sure we don't apply device-specific classes if the rows aren't visible on respective device.
				// Footer has same rows on all devices.
				if ( $builder_id === 'footer' || $is_header_sidebar || ( $device === $device_slug || ( $alignment_is_mobile && $device === 'mobile' ) ) ) {
					$classes[] = $device_slug . '-' . $align_slug;
				}
			}

			if ( $vertical_align ) {
				$classes[] = 'hfg-item-v-' . $vertical_align;
			}

			if ( $row_index !== 'sidebar' && $x > 0 ) {
				$classes[] = 'offset-' . $x;
			}
			if ( count( $render_groups['components'] ) > 1 ) {
				$classes[] = 'hfg-is-group';
			}
			echo sprintf( '<div class="%s">', esc_attr( join( ' ', $classes ) ) );
			foreach ( $render_groups['components'] as $component_data ) {
				$component_data['component']->current_x     = $x;
				$component_data['component']->current_width = $width;
				self::$current_component                    = $component_data['component']->get_id();
				$component_data['component']->render();
			}
			echo '</div>';
		}
	}

	/**
	 * Register a new component for builder.
	 *
	 * @param mixed $component_to_add A component.
	 *
	 * @return bool
	 * @since   1.0.0
	 * @access  public
	 */
	public function register_component( $component_to_add ) {

		if ( ! class_exists( $component_to_add ) || ! in_array( 'HFG\Core\Interfaces\Component', class_implements( $component_to_add ), true ) ) {
			return false;
		}

		/**
		 * An instance of Component.
		 *
		 * @var Abstract_Component $component
		 */
		$component = new $component_to_add( $this->panel );
		if ( $component->is_active() ) {
			$this->builder_components[ $component->get_id() ] = $component;
			$component->assign_builder( $this->get_id() );
		}

		return true;
	}

	/**
	 * Get a component from builder.
	 *
	 * @param string|null $id The id of the component.
	 *
	 * @return Abstract_Component
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_component( $id = null ) {
		if ( $id === null ) {
			$id = ( self::$current_component === null ) ? Abstract_Component::$current_component : self::$current_component;
		}

		return $this->builder_components[ $id ];
	}

	/**
	 * Returns the builder components.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_components() {
		return $this->builder_components;
	}

	/**
	 * A representation of the builder as array.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	final public function get_builder() {
		return array(
			'id'         => $this->control_id,
			'control_id' => $this->control_id,
			'panel'      => $this->panel,
			'section'    => $this->section,
			'title'      => $this->title,
			'devices'    => $this->devices,
			'items'      => $this->get_components_settings(),
			'rows'       => $this->get_rows(),
		);
	}

	/**
	 * Returns the components settings.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_components_settings() {
		$components_settings = array();
		/**
		 * An instance of Component.
		 *
		 * @var Component $component
		 */
		foreach ( $this->builder_components as $component ) {
			$components_settings[ $component->get_id() ] = $component->get_settings();
		}
		uasort(
			$components_settings,
			function ( $a, $b ) {
				if ( $a['name'] === $b['name'] ) {
					return 0;
				}

				return $a['name'] > $b['name'] ? 1 : - 1;
			}
		);

		return $components_settings;
	}

	/**
	 * Get the default row colors based on the old settings.
	 *
	 * @param string $row_id the row id.
	 *
	 * @return array
	 */
	private function get_default_row_colors( $row_id ) {
		$bg_color_map = [
			'background' => [
				'dark-mode'  => 'var(--nv-dark-bg)',
				'light-mode' => 'var(--nv-site-bg)',
			],
			'text'       => [
				'dark-mode'  => 'var(--nv-text-dark-bg)',
				'light-mode' => 'var(--nv-text-color)',
			],
		];

		$is_footer_bottom = $this->get_id() === 'footer' && $row_id === 'bottom';

		// On the new skin, the bottom footer row should be dark by default.
		if ( neve_is_new_skin() && $is_footer_bottom ) {
			$bg_color_map = [
				'background' => [
					'dark-mode'  => 'var(--nv-site-bg)',
					'light-mode' => 'var(--nv-dark-bg)',
				],
				'text'       => [
					'dark-mode'  => 'var(--nv-text-color)',
					'light-mode' => 'var(--nv-text-dark-bg)',
				],
			];
		}

		$row_setting_id = $this->control_id . '_' . $row_id;
		$background     = $bg_color_map['background']['light-mode'];
		$text           = $bg_color_map['text']['light-mode'];

		$old_skin = get_theme_mod( $row_setting_id . '_' . self::SKIN_SETTING );
		if ( ! empty( $old_skin ) ) {
			$background = $bg_color_map['background'][ $old_skin ];
			$text       = $bg_color_map['text'][ $old_skin ];
		}

		return [
			'background' => $background,
			'text'       => $text,
		];
	}

	/**
	 * Adds Sidebar Controls.
	 *
	 * @param string $row_setting_id row id.
	 */
	private function add_sidebar_controls( $row_setting_id ) {
		SettingsManager::get_instance()->add(
			[
				'id'                 => self::LAYOUT_SETTING,
				'group'              => $row_setting_id,
				'tab'                => SettingsManager::TAB_LAYOUT,
				'label'              => __( 'Open Behaviour', 'neve' ),
				'type'               => 'select',
				'section'            => $row_setting_id,
				'options'            => [
					'choices' => [
						'slide_left'  => __( 'Slide from Left', 'neve' ),
						'slide_right' => __( 'Slide from Right', 'neve' ),
						'pull_left'   => __( 'Pull from Left', 'neve' ),
						'pull_right'  => __( 'Pull from Right', 'neve' ),
						'full_canvas' => __( 'Full Canvas', 'neve' ),
						'dropdown'    => __( 'Slide Down', 'neve' ),
					],
				],
				'conditional_header' => $this->get_id() === 'header',
				'transport'          => 'refresh',
				'sanitize_callback'  => 'wp_filter_nohtml_kses',
				'default'            => 'slide_left',
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::WIDTH,
				'group'                 => $row_setting_id,
				'tab'                   => SettingsManager::TAB_LAYOUT,
				'label'                 => __( 'Sidebar Width', 'neve' ),
				'transport'             => 'postMessage',
				'section'               => $row_setting_id,
				'conditional_header'    => $this->get_id() === 'header',
				'type'                  => '\Neve\Customizer\Controls\React\Responsive_Range',
				'default'               => '{ "mobile": "350", "tablet": "350", "desktop": "350" }',
				'options'               => [
					'active_callback' => function () {
						return in_array(
							get_theme_mod( $this->control_id . '_sidebar_' . self::LAYOUT_SETTING, 'slide_left' ),
							[
								'slide_left',
								'slide_right',
								'pull_left',
								'pull_right',
							],
							true
						);
					},
					'input_attrs'     => [
						'min'        => 1,
						'max'        => 1000,
						'units'      => [ 'px' ],
						'defaultVal' => [
							'mobile'  => 360,
							'tablet'  => 360,
							'desktop' => 360,
						],
					],
				],
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					'responsive' => true,
					'template'   =>
						'.hfg_header .header-menu-sidebar {
							width: {{value}}px;
						}',
				],
				'sanitize_callback'     => array( $this, 'sanitize_responsive_int_json' ),
			]
		);
	}

	/**
	 * Adds Column Layout Controls.
	 *
	 * @param string $row_setting_id row id.
	 */
	private function add_columns_layout_controls( $row_setting_id ) {
		$choices = [];

		for ( $i = 1; $i <= 5; $i ++ ) {
			$choices[ $i ] = [
				'tooltip' => $i,
				'icon'    => 'text',
			];
		}

		SettingsManager::get_instance()->add(
			[
				'id'                => self::COLUMNS_NUMBER,
				'group'             => $row_setting_id,
				'tab'               => SettingsManager::TAB_LAYOUT,
				'label'             => __( 'Number of Columns', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'section'           => $row_setting_id,
				'options'           => [
					'choices' => $choices,
				],
				'transport'         => 'post' . $row_setting_id,
				'sanitize_callback' => 'absint',
				'default'           => '3',
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::COLUMNS_LAYOUT,
				'group'             => $row_setting_id,
				'tab'               => SettingsManager::TAB_LAYOUT,
				'label'             => __( 'Columns Layout', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\React\Builder_Columns',
				'section'           => $row_setting_id,
				'options'           => [
					'columns_control' => $row_setting_id . '_' . self::COLUMNS_NUMBER,
				],
				'transport'         => 'post' . $row_setting_id,
				'sanitize_callback' => [ $this, 'sanitize_columns' ],
				'default'           => 'equal',
			]
		);
	}

	/**
	 * Sanitize builder columns
	 *
	 * @param string $value control value.
	 *
	 * @return string
	 */
	public function sanitize_columns( $value ) {
		$allowed = [
			'equal',
			'right-third',
			'left-third',
			'left-half',
			'right-half',
			'center-half',
			'center-two-thirds',
		];
		if ( ! in_array( $value, $allowed ) ) {
			return 'equal';
		}

		return $value;
	}

	/**
	 * Adds sidebar styles.
	 *
	 * @param array $css_array array of styles.
	 *
	 * @return array
	 */
	private function add_sidebar_styles( $css_array ) {
		$type                  = get_theme_mod( $this->control_id . '_sidebar_' . self::LAYOUT_SETTING, 'slide_left' );
		$default_sidebar_width = '{ "mobile": "360", "tablet": "360", "desktop": "360" }';

		if ( ! in_array( $type, [ 'full_canvas', 'dropdown' ], true ) ) {
			$css_array[] = [
				Dynamic_Selector::KEY_SELECTOR => '.header-menu-sidebar',
				Dynamic_Selector::KEY_RULES    => [
					Config::CSS_PROP_WIDTH => [
						Dynamic_Selector::META_KEY     => $this->control_id . '_sidebar_' . self::WIDTH,
						Dynamic_Selector::META_DEFAULT => $default_sidebar_width,
						Dynamic_Selector::META_IS_RESPONSIVE => true,
					],
				],
			];
		}
		if ( $type === 'pull_left' ) {
			$css_array[] = [
				Dynamic_Selector::KEY_SELECTOR => '.is-menu-sidebar > .wrapper',
				Dynamic_Selector::KEY_RULES    => [
					Config::CSS_PROP_LEFT => [
						Dynamic_Selector::META_KEY     => $this->control_id . '_sidebar_' . self::WIDTH,
						Dynamic_Selector::META_DEFAULT => $default_sidebar_width,
						Dynamic_Selector::META_IS_RESPONSIVE => true,
					],
				],
			];
		}
		if ( $type === 'pull_right' ) {
			$css_array[] = [
				Dynamic_Selector::KEY_SELECTOR => '.menu_sidebar_pull_right.is-menu-sidebar > .wrapper',
				Dynamic_Selector::KEY_RULES    => [
					Config::CSS_PROP_RIGHT => [
						Dynamic_Selector::META_KEY     => $this->control_id . '_sidebar_' . self::WIDTH,
						Dynamic_Selector::META_DEFAULT => $default_sidebar_width,
						Dynamic_Selector::META_IS_RESPONSIVE => true,
					],
				],
			];
		}

		return $css_array;
	}

	/**
	 * Adds the new builder row styles.
	 *
	 * @param array $css_array array of styles.
	 *
	 * @return array
	 */
	private function add_new_builder_styles( $css_array, $row ) {
		if ( ! $this->columns_layout ) {
			return $css_array;
		}

		$builder = $this->get_id();

		$mods_prefix = 'hfg_' . $builder . '_layout_' . $row . '_';
		$columns     = SettingsManager::get_instance()->get( $mods_prefix . self::COLUMNS_NUMBER, 3 );
		$layout      = SettingsManager::get_instance()->get( $mods_prefix . self::COLUMNS_LAYOUT, 'equal' );

		$styles_map = [
			1 => [
				'equal' => '1fr',
			],
			2 => [
				'equal'       => '1fr 1fr',
				'right-third' => '2fr 1fr',
				'left-third'  => '1fr 2fr',
			],
			3 => [
				'equal'             => '1fr 1fr 1fr',
				'left-half'         => '2fr 1fr 1fr',
				'right-half'        => '1fr 1fr 2fr',
				'center-half'       => '1fr 2fr 1fr',
				'center-two-thirds' => '1fr 3fr 1fr',
			],
			4 => [
				'equal'      => 'repeat(4, 1fr)',
				'left-half'  => '3fr 1fr 1fr 1fr',
				'right-half' => '1fr 1fr 1fr 3fr',
			],
			5 => [
				'equal' => 'repeat(5, 1fr)',
			],
		];

		$layout      = $styles_map[ $columns ][ $layout ];
		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => '.' . $builder . '-' . $row . '-inner .row',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_GRID_TEMPLATE_COLS => [
					Dynamic_Selector::META_KEY     => $mods_prefix . self::COLUMNS_LAYOUT,
					Dynamic_Selector::META_DEFAULT => 'auto',
					Dynamic_Selector::META_FILTER  => function ( $css_prop, $value, $meta, $device ) use ( $layout ) {
						return sprintf( '%s:%s;', $css_prop, $layout );
					},
				],
			],
		];

		return $css_array;
	}
}
