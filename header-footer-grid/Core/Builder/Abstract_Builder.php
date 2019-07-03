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
use HFG\Core\Interfaces\Builder;
use HFG\Core\Interfaces\Component;
use HFG\Core\Settings;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Traits\Core;
use WP_Customize_Manager;

/**
 * Class Abstract_Builder
 *
 * @package HFG\Core\Builder
 */
abstract class Abstract_Builder implements Builder {
	use Core;
	const LAYOUT_SETTING = 'layout';
	const HEIGHT_SETTING = 'height';
	const SKIN_SETTING   = 'skin';
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
	 * A list of builder components.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var array $builder_components
	 */
	protected $builder_components = array();

	/**
	 * Abstract_Builder constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function __construct() {

		$this->set_property( 'control_id', 'hfg_' . $this->get_id() . '_layout' );
		$this->set_property( 'panel', 'hfg_' . $this->get_id() );
		$this->set_property( 'section', $this->control_id . '_section' );
		$this->init();

		add_action( 'hfg_' . $this->get_id() . '_render', [ $this, 'load_template' ] );

		$this->define_builder_settings();

		foreach ( $this->get_rows() as $row_id => $row_name ) {
			$this->define_row_settings( $row_id );
		}
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
	 * Define builder settings.
	 */
	public function define_builder_settings() {

		SettingsManager::get_instance()->add(
			[
				'id'                => $this->control_id,
				'group'             => $this->control_id,
				'noformat'          => true,
				'transport'         => 'post' . $this->get_id(),
				'sanitize_callback' => [ $this, 'sanitize_json' ],
				'default'           => '',
				'label'             => '',
				'type'              => 'text',
				'section'           => $this->section,
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

		SettingsManager::get_instance()->add(
			[
				'id'                => $row_setting_id,
				'transport'         => 'postMessage',
				'sanitize_callback' => array( $this, 'sanitize_json' ),
				'default'           => '',
			]
		);

		if ( $row_id === 'sidebar' ) {
			SettingsManager::get_instance()->add(
				[
					'id'                => self::LAYOUT_SETTING,
					'group'             => $row_setting_id,
					'tab'               => SettingsManager::TAB_LAYOUT,
					'label'             => __( 'Layout', 'neve' ),
					'type'              => 'select',
					'section'           => $row_setting_id,
					'options'           => [
						'choices' => [
							'slide_left' => __( 'Slide from Left', 'neve' ),
							'dropdown'   => __( 'Toggle Dropdown', 'neve' ),
						],
					],
					'transport'         => 'refresh',
					'sanitize_callback' => 'wp_filter_nohtml_kses',
					'default'           => 'slide_left',
				]
			);
		}

		if ( $row_id !== 'sidebar' ) {
			SettingsManager::get_instance()->add(
				[
					'id'                => self::LAYOUT_SETTING,
					'group'             => $row_setting_id,
					'tab'               => SettingsManager::TAB_LAYOUT,
					'label'             => __( 'Layout', 'neve' ),
					'type'              => 'select',
					'section'           => $row_setting_id,
					'options'           => [
						'choices' => [
							'layout-full-contained' => __( 'Full Width', 'neve' ) . ' - ' . __( 'Contained', 'neve' ),
							'layout-fullwidth'      => __( 'Full Width', 'neve' ),
							'layout-contained'      => __( 'Contained', 'neve' ),
						],
					],
					'transport'         => 'post' . $row_setting_id,
					'sanitize_callback' => 'wp_filter_nohtml_kses',
					'default'           => 'layout-full-contained',
				]
			);
			SettingsManager::get_instance()->add(
				[
					'id'                => self::HEIGHT_SETTING,
					'group'             => $row_setting_id,
					'tab'               => SettingsManager::TAB_STYLE,
					'section'           => $row_setting_id,
					'label'             => __( 'Row height (px)', 'neve' ),
					'type'              => '\Neve\Customizer\Controls\Range',
					'options'           => [
						'type'        => 'range-value',
						'media_query' => true,
						'step'        => 1,
						'input_attr'  => [
							'mobile'  => [
								'min'     => 0,
								'max'     => 350,
								'default' => 0,
							],
							'tablet'  => [
								'min'     => 0,
								'max'     => 350,
								'default' => 0,
							],
							'desktop' => [
								'min'     => 0,
								'max'     => 350,
								'default' => 0,
							],
						],
					],
					'transport'         => 'post' . $row_setting_id,
					'sanitize_callback' => array( $this, 'sanitize_responsive_int_json' ),
					'default'           => '{ "mobile": "0", "tablet": "0", "desktop": "0" }',
				]
			);
		}
		do_action( 'hfg_add_settings_to_rows', SettingsManager::get_instance(), $row_setting_id, $row_id, $this->get_id() );

		SettingsManager::get_instance()->add(
			[
				'id'                => self::SKIN_SETTING,
				'group'             => $row_setting_id,
				'tab'               => SettingsManager::TAB_STYLE,
				'label'             => __( 'Skin Mode', 'neve' ),
				'section'           => $row_setting_id,
				'type'              => '\Neve\Customizer\Controls\Radio_Image',
				'options'           => [
					'choices' => [
						'light-mode' => array(
							'url'  => Settings\Config::get_url() . '/assets/images/customizer/text_mode_dark.svg',
							'name' => '',
						),
						'dark-mode'  => array(
							'url'  => Settings\Config::get_url() . '/assets/images/customizer/text_mode_light.svg',
							'name' => '',
						),
					],
				],
				'transport'         => 'post' . $row_setting_id,
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'default'           => 'light-mode',
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

		if ( null !== $wp_customize->get_panel( $this->panel ) ) {
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
	 * Render markup for builder.
	 */
	public function render() {
		$layout                = $this->get_layout_data();
		self::$current_builder = $this->get_id();
		if ( is_customize_preview() ) {
			$style = $this->css_array_to_css( $this->add_style() );
			echo '<style type="text/css">' . $style . '</style>';// WPCS: XSS OK.
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
		return wp_parse_args( json_decode( SettingsManager::get_instance()->get( 'hfg_' . $this->get_id() . '_layout' ), true ), array_fill_keys( array_keys( $this->devices ), array_fill_keys( array_keys( $this->get_rows() ), [] ) ) );
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
		$rows = $this->get_rows();
		if ( ! empty( $rows ) ) {
			foreach ( $rows as $row_index => $row_label ) {
				$css_array = $this->add_row_style( $row_index, $css_array );
			}
		}

		/**
		 * An instance of Component.
		 *
		 * @var Abstract_Component $component
		 */
		foreach ( $this->builder_components as $component ) {
			$component_css_array = $component->add_style( $css_array );
			$css_array           = $this->array_merge_recursive_distinct( $css_array, $component_css_array );
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
		$layout_height = json_decode( get_theme_mod( $this->control_id . '_' . $row_index . '_height', '{ desktop: 0, tablet: 0, mobile: 0 }' ), true );
		$selector      = '.' . $this->get_id() . '-' . $row_index . '-inner';
		if ( isset( $layout_height['mobile'] ) ) {
			$layout_height['mobile']                              = ( $layout_height['mobile'] > 0 ) ? $layout_height['mobile'] . 'px' : 'auto';
			$css_array[' @media (max-width: 576px)'][ $selector ] = array(
				'height' => $layout_height['mobile'],
			);
		}
		if ( isset( $layout_height['tablet'] ) ) {
			$layout_height['tablet']                              = ( $layout_height['tablet'] > 0 ) ? $layout_height['tablet'] . 'px' : 'auto';
			$css_array[' @media (min-width: 576px)'][ $selector ] = array(
				'height' => $layout_height['tablet'],
			);
		}
		if ( isset( $layout_height['desktop'] ) ) {
			$layout_height['desktop']                             = ( $layout_height['desktop'] > 0 ) ? $layout_height['desktop'] . 'px' : 'auto';
			$css_array[' @media (min-width: 961px)'][ $selector ] = array(
				'height' => $layout_height['desktop'],
			);
		}

		$css_array = apply_filters( 'neve_row_style', $css_array, $this->control_id, $this->get_id(), $row_index, $selector );

		return $css_array;
	}

	/**
	 * Render device markup.
	 *
	 * @param string $device_name    Device id.
	 * @param array  $device_details Device meta.
	 */
	public function render_device( $device_name, $device_details ) {
		foreach ( $device_details as $index => $row ) {
			if ( empty( $row ) ) {
				continue;
			}
			self::$current_row = $index;
			$this->render_row( $device_name, $index, $row );
		}
	}

	/**
	 * Render components in the row.
	 *
	 * @param null|string $device Device id.
	 * @param null|array  $row    Row details.
	 */
	public function render_components( $device = null, $row = null ) {

		$row_index = 0;
		if ( $device === null && $row === null ) {
			$device    = self::$current_device;
			$row_index = self::$current_row;
		}

		$data        = $this->get_layout_data()[ $device ][ $row_index ];
		$max_columns = 12;
		$last_item   = null;

		usort(
			$data,
			function ( $item1, $item2 ) {
				if ( $item1['x'] == $item2['x'] ) {
					return 0;
				}

				return $item1['x'] < $item2['x'] ? - 1 : 1;
			}
		);

		$collection = new \CachingIterator(
			new \ArrayIterator(
				$data
			),
			\CachingIterator::TOSTRING_USE_CURRENT
		);

		foreach ( $collection as $component_location ) {
			/**
			 * An instance of Abstract_Component
			 *
			 * @var Abstract_Component $component
			 */
			if ( ! isset( $this->builder_components[ $component_location['id'] ] ) ) {
				continue;
			}
			$component = $this->builder_components[ $component_location['id'] ];
			$x         = intval( $component_location['x'] );
			$width     = intval( $component_location['width'] );
			$align     = SettingsManager::get_instance()->get( $component_location['id'] . '_' . Abstract_Component::ALIGNMENT_ID, null );

			if ( ! $collection->hasNext() && ( $x + $width < $max_columns ) ) {
				$width += $max_columns - ( $x + $width );
			}

			if ( $row_index === 'sidebar' ) {
				$width = 12;
			}

			$classes   = [ 'builder-item' ];
			$classes[] = 'col-' . $width . ' col-md-' . $width . ' col-sm-' . $width;
			$classes[] = 'hfg-item-' . $align;
			if ( $last_item === null ) {
				$classes[] = 'hfg-item-first';
			}
			if ( ! $collection->hasNext() ) {
				$classes[] = 'hfg-item-last';
			}
			if ( $row_index !== 'sidebar' ) {
				if ( $x > 0 && $last_item !== null ) {
					$origin = intval( $last_item['width'] ) + intval( $last_item['x'] );
					if ( ( $x - $origin ) > 0 ) {
						$x         = $x - $origin;
						$classes[] = 'offset-' . $x;
					}
				} elseif ( $x > 0 ) {
					$classes[] = 'offset-' . $x;
				}
			}

			$component->current_x     = $x;
			$component->current_width = $width;
			self::$current_component  = $component_location['id'];
			echo sprintf( '<div class="%s">', esc_attr( join( ' ', $classes ) ) );
			$component->render();
			echo '</div>';
			$last_item = $component_location;
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

		if ( ! class_exists( $component_to_add ) || ! in_array( 'HFG\Core\Interfaces\Component', class_implements( $component_to_add ) ) ) {
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

		return $components_settings;
	}
}
