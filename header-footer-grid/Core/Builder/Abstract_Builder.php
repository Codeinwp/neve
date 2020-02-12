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
use HFG\Core\Customizer\Instructions_Section;
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
	const LAYOUT_SETTING     = 'layout';
	const HEIGHT_SETTING     = 'height';
	const SKIN_SETTING       = 'skin';
	const BACKGROUND_SETTING = 'background';
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
							'slide_left' => __( 'Slide from Left', 'neve' ),
							'dropdown'   => __( 'Toggle Dropdown', 'neve' ),
						],
					],
					'conditional_header' => $this->get_id() === 'header',
					'transport'          => 'refresh',
					'sanitize_callback'  => 'wp_filter_nohtml_kses',
					'default'            => 'slide_left',
				]
			);
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
					'label'                 => __( 'Row height (px)', 'neve' ),
					'type'                  => '\Neve\Customizer\Controls\React\Responsive_Range',
					'live_refresh_selector' => $row_class,
					'live_refresh_css_prop' => array(
						'prop' => 'height',
						'unit' => 'px',
					),
					'options'               => [
						'input_attrs' => [
							'step'           => 1,
							'min'            => 0,
							'max'            => 700,
							'hideResponsive' => true,
						],
					],
					'transport'             => 'postMessage',
					'sanitize_callback'     => array( $this, 'sanitize_responsive_int_json' ),
					'default'               => '{ "mobile": "0", "tablet": "0", "desktop": "0" }',
					'conditional_header'    => $this->get_id() === 'header',
				]
			);
		}

		$default_color = '#ffffff';
		if ( isset( $this->default_colors[ $this->get_id() ][ $row_id ] ) && ! empty( $this->default_colors[ $this->get_id() ][ $row_id ] ) ) {
			$default_color = $this->default_colors[ $this->get_id() ][ $row_id ];
		}
		$old_skin = get_theme_mod( $row_setting_id . '_' . self::SKIN_SETTING );
		if ( ! empty( $old_skin ) ) {
			$default_color = $old_skin === 'dark-mode' ? '#24292e' : '#ffffff';
		}
		$previous      = get_theme_mod( $row_setting_id . '_color' );
		$default_color = ! empty( $previous ) ? $previous : $default_color;

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::BACKGROUND_SETTING,
				'group'                 => $row_setting_id,
				'tab'                   => SettingsManager::TAB_STYLE,
				'section'               => $row_setting_id,
				'label'                 => __( 'Row Background', 'neve' ),
				'type'                  => 'neve_background_control',
				'live_refresh_selector' => $row_id === 'sidebar' ? $row_class . ' .header-menu-sidebar-bg' : $row_class,
				'options'               => [
					'priority' => 100,
				],
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'neve_sanitize_background',
				'default'               => [
					'type'       => 'color',
					'colorValue' => $default_color,
				],
				'conditional_header'    => $this->get_id() === 'header',
			]
		);

		do_action( 'hfg_add_settings_to_rows', SettingsManager::get_instance(), $row_setting_id, $row_id, $this->get_id() );

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::SKIN_SETTING,
				'group'                 => $row_setting_id,
				'tab'                   => SettingsManager::TAB_STYLE,
				'label'                 => __( 'Skin Mode', 'neve' ),
				'section'               => $row_setting_id,
				'conditional_header'    => $this->get_id() === 'header',
				'type'                  => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'options'               => [
					'is_for'        => 'row_skin',
					'large_buttons' => true,
				],
				'transport'             => 'postMessage',
				'live_refresh_selector' => $row_class,
				'live_refresh_css_prop' => [ 'is_for' => 'row_skin' ],
				'sanitize_callback'     => 'wp_filter_nohtml_kses',
				'default'               => 'light-mode',
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

		if ( ! empty( $this->instructions_array ) ) {
			if ( get_theme_mod( $this->panel . '_layout', false ) !== false ) {
				$this->instructions_array['image']       = false;
				$this->instructions_array['description'] = false;
			}

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
	 * Render markup for builder.
	 */
	public function render() {
		$layout                = $this->get_layout_data();
		self::$current_builder = $this->get_id();
		if ( is_customize_preview() ) {
			$style = $this->css_array_to_css( $this->add_style() );
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

		if ( $row_index === 'sidebar' ) {
			$selector = '.header-menu-sidebar .header-menu-sidebar-bg';
		}

		if ( $this->get_id() === 'header' ) {
			$selector = '.hfg_header ' . $selector;
		}

		$default_color = '#ffffff';
		if ( isset( $this->default_colors[ $this->get_id() ][ $row_index ] ) && ! empty( $this->default_colors[ $this->get_id() ][ $row_index ] ) ) {
			$default_color = $this->default_colors[ $this->get_id() ][ $row_index ];
		}
		$previous   = get_theme_mod( $this->control_id . '_' . $row_index . '_color', $default_color );
		$background = get_theme_mod(
			$this->control_id . '_' . $row_index . '_background',
			[
				'type'       => 'color',
				'colorValue' => ! empty( $previous ) ? $previous : $default_color,
			]
		);

		$css_setup = [];

		if ( $background['type'] === 'color' && ! empty( $background['colorValue'] ) && $background['colorValue'] !== $default_color ) {
			$css_setup['background-color'] = $background['colorValue'];
		}

		if ( $background['type'] === 'image' ) {
			if ( $background['useFeatured'] === true && is_singular() ) {
				$featured_image = get_the_post_thumbnail_url();
				if ( ! empty( $featured_image ) ) {
					$css_setup['background-image'] = 'url("' . esc_url( $featured_image ) . '")';
				} else {
					$css_setup['background-image'] = 'url("' . esc_url( $background['imageUrl'] ) . '")';
				}
			} elseif ( ! empty( $background['imageUrl'] ) ) {
				$css_setup['background-image'] = 'url("' . esc_url( $background['imageUrl'] ) . '")';
			}
			$css_setup['background-size'] = 'cover';

			if ( ! empty( $background['focusPoint'] ) && ! empty( $background['focusPoint']['x'] ) && ! empty( $background['focusPoint']['y'] ) ) {
				$css_setup['background-position'] = round( $background['focusPoint']['x'] * 100 ) . '% ' . round( $background['focusPoint']['y'] * 100 ) . '%';
			}

			if ( $background['fixed'] === true ) {
				$css_setup['background-attachment'] = 'fixed';
			}

			if ( ! empty( $background['overlayColorValue'] ) && ! empty( $background['overlayOpacity'] ) ) {
				$css_array[ $selector . ':before' ] = array(
					'background-color' => $background['overlayColorValue'],
					'opacity'          => $background['overlayOpacity'] / 100,
					'content'          => '""',
					'position'         => 'absolute',
					'top'              => '0',
					'bottom'           => '0',
					'width'            => '100%',
				);
			}
			$css_array[ $selector . ',' . $selector . '.dark-mode,' . $selector . '.light-mode' ] = array(
				'background-color' => 'transparent',
			);
		}

		$css_array[ $selector . ',' . $selector . '.dark-mode,' . $selector . '.light-mode' ] = $css_setup;
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
			$component = $this->builder_components[ $component_location['id'] ];
			$x         = intval( $component_location['x'] );
			$width     = intval( $component_location['width'] );
			$align     = SettingsManager::get_instance()->get( $component_location['id'] . '_' . Abstract_Component::ALIGNMENT_ID, null );


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
				$render_buffer[ $render_index ]['align'] = $align;
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
					'components' => [],
					'align'      => $align,
					'is_first'   => $is_first,
					'is_last'    => false,
				];
			}
			$render_buffer[ $render_index ]['is_last']      = $is_last;
			$render_buffer[ $render_index ]['components'][] = [
				'component' => $component,
				'offset'    => $x,
				'width'     => $width,
			];
			$component_location['is_auto_width']            = $is_auto_width;
			$component_location['align']                    = $align;
			$last_item                                      = $component_location;
		}
		foreach ( $render_buffer as $render_groups ) {
			$width   = array_sum( array_column( $render_groups['components'], 'width' ) );
			$x       = max( array_column( $render_groups['components'], 'offset' ) );
			$align   = $render_groups['align'];
			$classes = [ 'builder-item' ];
			if ( $render_groups['is_last'] ) {
				$classes[] = 'hfg-item-last';
			}
			if ( $render_groups['is_first'] ) {
				$classes[] = 'hfg-item-first';
			}
			$classes[] = 'col-' . $width . ' col-md-' . $width . ' col-sm-' . $width;
			$classes[] = 'hfg-item-' . $align;

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
				return $a['name'] > $b['name'];
			}
		);

		return $components_settings;
	}
}
