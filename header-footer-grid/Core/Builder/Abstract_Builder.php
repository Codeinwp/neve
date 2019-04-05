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
use HFG\Traits\Core;
use Neve\Customizer\Controls\Radio_Image;
use Neve\Customizer\Controls\Range;
use WP_Customize_Manager;

/**
 * Class Abstract_Builder
 *
 * @package HFG\Core\Builder
 */
abstract class Abstract_Builder implements Builder {
	use Core;

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
	 * @access  protected
	 * @var string $title
	 */
	protected $title;

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
		$this->init();

		add_action( 'hfg_' . $this->get_id() . '_render', array( $this, 'load_template' ) );
		add_filter( 'theme_mod_' . $this->control_id, array( $this, 'filter_defaults' ) );
	}

	/**
	 *  Define templates used to loading the builder.
	 */
	public abstract function load_template();
	/**
	 * Returns current builder id.
	 *
	 * @return string|null Builder id.
	 */
	public static function get_current_builder() {
		return self::$current_builder;
	}

	/**
	 * Method to get protected properties for class.
	 *
	 * @since   1.0.0
	 * @access  protected
	 *
	 * @param string $key The property key name.
	 *
	 * @return mixed
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
	 * @since   1.0.0
	 * @access  protected
	 *
	 * @return string
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
	 * Used to define the rows in the builder sections.
	 *
	 * @return array Rows array.
	 */
	protected abstract function get_rows();

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
		if ( ! empty( $this->remove_panels ) ) {
			foreach ( $this->remove_panels as $panel_to_remove ) {
				$wp_customize->remove_panel( $panel_to_remove );
			}
		}

		if ( ! empty( $this->remove_sections ) ) {
			foreach ( $this->remove_sections as $section_to_remove ) {
				$wp_customize->remove_section( $section_to_remove );
			}
		}

		$settings_for_parent = array();
		/**
		 * An instance of Component.
		 *
		 * @var Component $component
		 */
		foreach ( $this->builder_components as $component ) {
			$settings_for_parent = array_merge( $settings_for_parent, $component->customize_register( $wp_customize ) );
		}

		if ( null === $wp_customize->get_panel( $this->panel ) ) {
			$this->set_property( 'section', $this->control_id . '_section' );
			$builder_title = ( isset( $this->title ) && ! empty( $this->title ) ) ? $this->title : __( 'Header', 'neve' );

			$wp_customize->add_panel(
				$this->panel,
				array(
					'priority'       => 25,
					'capability'     => 'edit_theme_options',
					'theme_supports' => 'hfg_support',
					'title'          => $builder_title,
					'description'    => '',
				)
			);

			$wp_customize->add_section(
				$this->section,
				array(
					'title'    => __( 'Header', 'neve' ),
					'priority' => 299,
					'panel'    => $this->panel,
				)
			);

			$wp_customize->add_setting(
				$this->control_id,
				array(
					'default'           => '',
					'transport'         => 'postMessage',
					'sanitize_callback' => array( $this, 'sanitize_json' ),
				)
			);

			$wp_customize->selective_refresh->add_partial(
				$this->control_id . '_partial',
				array(
					'selector'        => '.' . $this->panel,
					'settings'        => array_merge( $settings_for_parent, array( $this->control_id ) ),
					'render_callback' => array( $this, 'render' ),
				)
			);

			$wp_customize->add_control(
				$this->control_id,
				array(
					'section'        => $this->control_id . '_section',
					'settings'       => $this->control_id,
					'theme_supports' => 'hfg_support',
					'type'           => 'text',
				)
			);

			$this->add_rows_controls( $wp_customize );
		}

		return $wp_customize;
	}

	/**
	 * Method to set protected properties for class.
	 *
	 * @since   1.0.0
	 * @access  protected
	 *
	 * @param string $key The property key name.
	 * @param string $value The property value.
	 *
	 * @return bool
	 */
	protected function set_property( $key = '', $value = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}
		$this->$key = $value;

		return true;
	}

	/**
	 * Adds row controls.
	 *
	 * @since   1.0.0
	 * @access  protected
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager|null
	 */
	protected function add_rows_controls( $wp_customize ) {
		$rows = $this->get_rows();
		if ( empty( $rows ) ) {
			return null;
		}
		foreach ( $rows as $row_id => $row_label ) {
			$partial_settings = array();
			$wp_customize->add_section(
				$this->control_id . '_' . $row_id,
				array(
					'title'    => $row_label,
					'priority' => 100,
					'panel'    => $this->panel,
				)
			);

			$wp_customize->add_setting(
				$this->control_id . '_' . $row_id,
				array(
					'transport'         => 'postMessage',
					'theme_supports'    => 'hfg_support',
					'default'           => '',
					'sanitize_callback' => array( $this, 'sanitize_json' ),
				)
			);

			if ( $row_id !== 'sidebar' ) {
				$wp_customize->add_setting(
					$this->control_id . '_' . $row_id . '_layout',
					array(
						'theme_supports'    => 'hfg_support',
						'transport'         => 'postMessage',
						'default'           => 'layout-full-contained',
						'sanitize_callback' => 'wp_filter_nohtml_kses',
					)
				);
				array_push( $partial_settings, $this->control_id . '_' . $row_id . '_layout' );
				$wp_customize->add_control(
					$this->control_id . '_' . $row_id . '_layout',
					[
						'label'   => __( 'Layout', 'neve' ),
						'type'    => 'select',
						'section' => $this->control_id . '_' . $row_id,
						'choices' => array(
							'layout-full-contained' => __( 'Full Width', 'neve' ) . ' - ' . __( 'Contained', 'neve' ),
							'layout-fullwidth'      => __( 'Full Width', 'neve' ),
							'layout-contained'      => __( 'Contained', 'neve' ),
						),
					]
				);

				$wp_customize->add_setting(
					$this->control_id . '_' . $row_id . '_height',
					array(
						'theme_supports'    => 'hfg_support',
						'transport'         => 'postMessage',
						'default'           => '{ "mobile": "0", "tablet": "0", "desktop": "0" }',
						'sanitize_callback' => array( $this, 'sanitize_responsive_int_json' ),
					)
				);
				array_push( $partial_settings, $this->control_id . '_' . $row_id . '_height' );
				$wp_customize->add_control(
					new Range(
						$wp_customize,
						$this->control_id . '_' . $row_id . '_height',
						array(
							'label'       => esc_html__( 'Row height (px)', 'neve' ),
							'section'     => $this->control_id . '_' . $row_id,
							'type'        => 'range-value',
							'media_query' => true,
							'step'        => 1,
							'input_attr'  => array(
								'mobile'  => array(
									'min'     => 0,
									'max'     => 350,
									'default' => 0,
								),
								'tablet'  => array(
									'min'     => 0,
									'max'     => 350,
									'default' => 0,
								),
								'desktop' => array(
									'min'     => 0,
									'max'     => 350,
									'default' => 0,
								),
							),
							'priority'    => 25,
						)
					)
				);
			}

			$wp_customize->add_setting(
				$this->control_id . '_' . $row_id . '_skin',
				array(
					'theme_supports'    => 'hfg_support',
					'transport'         => 'postMessage',
					'default'           => 'light-mode',
					'sanitize_callback' => 'wp_filter_nohtml_kses',
				)
			);
			array_push( $partial_settings, $this->control_id . '_' . $row_id . '_skin' );
			$wp_customize->add_control(
				new Radio_Image(
					$wp_customize,
					$this->control_id . '_' . $row_id . '_skin',
					[
						'label'    => __( 'Skin Mode', 'neve' ),
						'section'  => $this->control_id . '_' . $row_id,
						'priority' => 10,
						'choices'  => array(
							'light-mode' => array(
								'url'  => Settings::get_instance()->url . '/assets/images/customizer/text_mode_dark.svg',
								'name' => '',
							),
							'dark-mode'  => array(
								'url'  => Settings::get_instance()->url . '/assets/images/customizer/text_mode_light.svg',
								'name' => '',
							),
						),
					]
				)
			);

			$wp_customize->selective_refresh->add_partial(
				$this->control_id . '_' . $row_id . '_partial',
				array(
					'selector'        => '.' . $this->panel,
					'settings'        => $partial_settings,
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
			echo '<style type="text/css">' . $style . '</style>';
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
		// TODO move default as filterable data and move default neve definition in theme integration.
		$data = json_decode( get_theme_mod( $this->control_id, $this->define_defaults() ), true );

		return wp_parse_args( $data, array_fill_keys( array_keys( $this->devices ), array_fill_keys( array_keys( $this->get_rows() ), [] ) ) );
	}

	/**
	 * Define defaults for the builder, if any.
	 *
	 * @return mixed Default data.
	 */
	public abstract function define_defaults();

	/**
	 * Method to add Builder css styles.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
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
	 * @since   1.0.0
	 * @access  private
	 *
	 * @param string $row_index The row index.
	 * @param array  $css_array The css array.
	 *
	 * @return array
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

		return $css_array;
	}

	/**
	 * Render device markup.
	 *
	 * @param string $device_name Device id.
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
	 * Utility method to generate defaults for JS and regular PHP calls.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param string $theme_mod The name of the mod.
	 *
	 * @return false|mixed|string
	 */
	public function filter_defaults( $theme_mod ) {
		if ( empty( $theme_mod ) || ! $theme_mod || is_object( $theme_mod ) && count( (array) $theme_mod ) === 0 ) {
			return $this->define_defaults();
		}

		return $theme_mod;
	}

	/**
	 * Render components in the row.
	 *
	 * @param null|string $device Device id.
	 * @param null|array  $row Row details.
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
				return $item1['x'] < $item2['x'] ? -1 : 1;
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
			$component = $this->builder_components[ $component_location['id'] ];
			$x         = intval( $component_location['x'] );
			$width     = intval( $component_location['width'] );
			$align     = get_theme_mod( $component_location['id'] . '_component_align', $component->get_align_default() );

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
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param mixed $component_to_add A component.
	 *
	 * @return bool
	 */
	public function register_component( $component_to_add ) {

		if ( ! class_exists( $component_to_add ) || ! in_array( 'HFG\Core\Interfaces\Component', class_implements( $component_to_add ) ) ) {
			return false;
		}

		/**
		 * An instance of Component.
		 *
		 * @var Component $component
		 */
		$component                                        = new $component_to_add( $this->panel );
		$this->builder_components[ $component->get_id() ] = $component;

		return true;
	}

	/**
	 * Get a component from builder.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param   string|null $id The id of the component.
	 *
	 * @return Abstract_Component
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
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_components() {
		return $this->builder_components;
	}

	/**
	 * A representation of the builder as array.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public final function get_builder() {
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
	 * @since   1.0.0
	 * @access  public
	 * @return array
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
