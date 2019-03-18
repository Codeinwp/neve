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
use HFG\Core\Customizer\Image_Radio_Control;
use HFG\Core\Customizer\Responsive_Setting;
use HFG\Core\Customizer\Responsive_Slider_Control;
use HFG\Core\Customizer\Select_Control;
use HFG\Core\Interfaces\Builder;
use HFG\Core\Interfaces\Component;
use HFG\Core\Settings;
use HFG\Traits\Core;
use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use WP_Customize_Manager;

/**
 * Class Abstract_Builder
 *
 * @package HFG\Core\Builder
 */
abstract class Abstract_Builder extends Base_Customizer implements Builder {
	use Core;
	public static $current_device = null;
	public static $current_row = null;
	public static $current_component = null;
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

	public static function get_device() {
		return self::$current_device;
	}

	public static function get_row() {
		return self::$current_row;
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

	protected function inline_builder_styles() {
		$style = '';

		$style_array = [];
		$rows        = $this->get_rows();
		if ( ! empty( $rows ) ) {
			foreach ( $rows as $row_id => $row_label ) {
				$style_array[ '#accordion-section-' . $this->control_id . '_' . $row_id ] = array(
					'display' => 'none !important'
				);
			}
		}
		$style .= $this->css_array_to_css( $style_array );

		return $style;
	}

	/**
	 * Used to define the rows in the builder sections.
	 *
	 * @return array Rows array.
	 */
	abstract protected function get_rows();

	/**
	 * Register hooks for builder.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function register_builder_hooks() {
	}

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
		$this->register_controls_callback( $wp_customize );
		return $wp_customize;
	}

	public function add_controls() {
		if ( ! empty( $this->remove_panels ) ) {
			foreach ( $this->remove_panels as $panel_to_remove ) {
				$this->wpc->remove_panel( $panel_to_remove );
			}
		}

		if ( ! empty( $this->remove_sections ) ) {
			foreach ( $this->remove_sections as $section_to_remove ) {
				$this->wpc->remove_section( $section_to_remove );
			}
		}

		if ( empty( $this->wpc->get_panel( $this->panel ) ) ) {
			$this->set_property( 'section', $this->control_id . '_section' );
			$builder_title = ( isset( $this->title ) && ! empty( $this->title ) ) ? $this->title : __( 'HFG Panel', 'hfg-module' );

			$this->wpc->add_panel(
				$this->panel, array(
					'priority'       => 25,
					'capability'     => 'edit_theme_options',
					'theme_supports' => 'hfg_support',
					'title'          => $builder_title,
					'description'    => '',
				)
			);

			$this->wpc->add_section(
				$this->section, array(
					'title'    => __( 'Header', 'hfg-module' ),
					'priority' => 299,
					'panel'    => $this->panel,
				)
			);

			$this->wpc->add_setting(
				$this->control_id, array(
					'default'   => '',
					'transport' => 'postMessage',
				)
			);

			$this->wpc->selective_refresh->add_partial(
				$this->control_id . '_partial', array(
					'selector'        => '.' . $this->panel,
					'settings'        => array( $this->control_id ),
					'render_callback' => array( $this, 'render' ),
				)
			);

			$this->wpc->add_control(
				$this->control_id, array(
					'section'        => $this->control_id . '_section',
					'settings'       => $this->control_id,
					'theme_supports' => 'hfg_support',
					'type'           => 'text',
				)
			);

			$this->add_rows_controls();
		}

		/**
		 * An instance of Component.
		 *
		 * @var Component $component
		 */
		foreach ( $this->builder_components as $component ) {
			$component->customize_register( $this->wpc );
		}
	}

	private function add_builder_controls() {

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
<<<<<<< HEAD
=======
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
>>>>>>> origin/hfg_templating
	 */
	protected function add_rows_controls() {
		$rows = $this->get_rows();
		if ( empty( $rows ) ) {
			return;
		}

		$settings = Settings::get_instance();
		foreach ( $rows as $row_id => $row_label ) {
			$partial_settings = array();
			$this->wpc->add_section(
				$this->control_id . '_' . $row_id, array(
					'title'    => $row_label,
					'priority' => 100,
					'panel'    => $this->panel,
				)
			);

			$this->wpc->add_setting(
				$this->control_id . '_' . $row_id, array(
					'default'   => '',
					'transport' => 'postMessage',
				)
			);

			$responsive_setting = new Responsive_Setting( $this->control_id . '_' . $row_id . '_layout', 'layout-full-contained', false );
			$partial_settings   = array_merge( $partial_settings, $responsive_setting->get_settings_id_array() );
			$this->wpc->add_control(
				new Select_Control(
					$this->wpc,
					$this->control_id . '_' . $row_id . '_layout',
					[
						'responsive'  => $responsive_setting,
						'label'       => __( 'Layout', 'hfg-module' ),
						'section'     => $this->control_id . '_' . $row_id,
						'input_attrs' => array(
							'placeholder' => __( 'Select layout type ...', 'hfg-module' ),
							'multiselect' => false,
						),
						'choices'     => array(
							'layout-full-contained' => __( 'Full Width - Contained', 'hfg-module' ),
							'layout-fullwidth'      => __( 'Full Width', 'hfg-module' ),
							'layout-contained'      => __( 'Contained', 'hfg-module' ),
						),
					]
				)
			);

			$this->add_control(
				new Control(
					$this->control_id . '_' . $row_id . '_height',
					array(
						'sanitize_callback' => 'neve_sanitize_range_value',
						'transport'         => 'postMessage',
					),
					array(
						'label'       => esc_html__( 'Container width (px)', 'neve' ),
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
					),
					'Neve\Customizer\Controls\Range',
					$this->control_id . '_' . $row_id . '_partial'
				)
			);

//			$responsive_setting = new Responsive_Setting( $this->control_id . '_' . $row_id . '_height', 0, array( 'desktop', 'mobile' ) );
//			$partial_settings   = array_merge( $partial_settings, $responsive_setting->get_settings_id_array() );
//			$wp_customize->add_control(
//				new Responsive_Slider_Control(
//					$wp_customize,
//					$this->control_id . '_' . $row_id . '_height',
//					[
//						'responsive'  => $responsive_setting,
//						'label'       => esc_html__( 'Row Height' ),
//						'section'     => $this->control_id . '_' . $row_id,
//						'input_attrs' => array(
//							'min'  => 0,
//							'max'  => 300,
//							'step' => 1,
//						),
//					]
//				)
//			);

			$this->add_control(
				new Control(
					$this->control_id . '_' . $row_id . '_skin',
					array(
						'sanitize_callback' => array( $this, 'sanitize_sidebar_layout' ),
						'transport'         => 'postMessage',
						'default'           => 'light-mode',
					),
					array(
						'label'           => __( 'Skin Mode', 'neve' ),
						'section'         => $this->control_id . '_' . $row_id,
						'priority'        => 10,
						'choices'         => array(
							'light-mode' => array(
								'url' => $settings->url . '/assets/images/customizer/text_mode_dark.svg',
								'name'  => __( 'Light Mode' ),
							),
							'dark-mode'  => array(
								'url' => $settings->url . '/assets/images/customizer/text_mode_light.svg',
								'name'  => __( 'Dark Mode' ),
							),
						),
					),
					'Neve\Customizer\Controls\Radio_Image',
					array(
						'selector'        => '.' . $this->panel,
						'setting'        => $this->control_id . '_' . $row_id . '_skin',
						'render_callback' => array( $this, 'render' ),
					)
				)
			);

//			$responsive_setting = new Responsive_Setting( $this->control_id . '_' . $row_id . '_skin', 'light-mode', false );
//			$partial_settings   = array_merge( $partial_settings, $responsive_setting->get_settings_id_array() );
//			$this->wpc->add_control(
//				new Image_Radio_Control(
//					$this->wpc,
//					$this->control_id . '_' . $row_id . '_skin',
//					[
//						'responsive' => $responsive_setting,
//						'label'      => __( 'Skin Mode' ),
//						'section'    => $this->control_id . '_' . $row_id,
//						'choices'    => array(
//							'light-mode' => array(
//								'image' => $settings->url . '/assets/images/customizer/text_mode_dark.svg',
//								'name'  => __( 'Light Mode' ),
//							),
//							'dark-mode'  => array(
//								'image' => $settings->url . '/assets/images/customizer/text_mode_light.svg',
//								'name'  => __( 'Dark Mode' ),
//							),
//						),
//					]
//				)
//			);

			$this->wpc->selective_refresh->add_partial(
				$this->control_id . '_' . $row_id . '_partial',
				array(
					'selector'        => '.' . $this->panel,
					'settings'        => $partial_settings,
					'render_callback' => array( $this, 'render' ),
				)
			);
		}
	}

	public function get_current_device() {
		return self::$current_device;
	}

	public function get_current_row_index() {
		return self::$current_row;
	}

	public function render() {
		$layout = $this->get_layout_data();
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
		//TODO move default as filterable data and move default neve definition in theme integration.
		$data = json_decode( get_theme_mod( $this->control_id, Settings::get_instance()->get_header_defaults_neve() ), true );

		return wp_parse_args( $data, array_fill_keys( array_keys( $this->devices ), array_fill_keys( array_keys( $this->get_rows() ), [] ) ) );
	}

	public function render_device( $device_name, $device_details ) {
		foreach ( $device_details as $index => $row ) {
			if ( empty( $row ) ) {
				continue;
			}
			self::$current_row = $index;

			$this->render_row( $device_name, $index, $row );
		}
	}

	public abstract function render_row( $device_id, $row_id, $row_details );

	public function render_components( $device = null, $row = null ) {

		if ( $device === null && $row === null ) {
			$device    = self::$current_device;
			$row_index = self::$current_row;
		}

		$data        = $this->get_layout_data()[ $device ][ $row_index ];
		$max_columns = 12;
		$last_item   = null;

		$collection = new \CachingIterator(
			new \ArrayIterator(
				$data
			), \CachingIterator::TOSTRING_USE_CURRENT
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
			if ( ! $collection->hasNext() && ( $x + $width < $max_columns ) ) {
				$width += $max_columns - ( $x + $width );
			}

			$push_left = '';
			if ( $x > 0 && $last_item !== null ) {
				$o = intval( $last_item['width'] ) + intval( $last_item['x'] );
				if ( $x - $o > 0 ) {
					$x         = $x - $o;
					$push_left = 'off-' . $x;
				}
			} elseif ( $x > 0 ) {
				$push_left = 'off-' . $x;
			}

			$component->current_x     = $x;
			$component->current_width = $width;
			$classes                  = [ 'hfg-col-' . $width, '_md-' . $width . '_sm-' . $width, 'builder-item' ];
			self::$current_component  = $component_location['id'];
			echo sprintf( '<div class="%s" data-push-left="%s">', esc_attr( join( ' ', $classes ) ), esc_attr( $push_left ) );
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
	 * @param null $id
	 *
	 * @return Abstract_Component
	 */
	public function get_component( $id = null ) {
		if ( $id === null ) {
			$id = self::$current_component;
		}

		return $this->builder_components[ $id ];
	}

	public abstract function get_id();

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
