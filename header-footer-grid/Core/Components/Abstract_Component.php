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

	const ALIGNAMENT_ID = 'component_align';
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
	 * Method to set protected properties for class.
	 *
	 * @param string $key The property key name.
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

		SettingsManager::get_instance()->add(
			[
				'id'                => self::ALIGNAMENT_ID,
				'group'             => $this->get_id(),
				'transport'         => 'post' . $this->get_builder_id(),
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'default'           => $this->default_align,
				'label'             => __( 'Component Alignment', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\Radio_Image',
				'options'           => [
					'choices' => [
						'left'   => [
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYBAMAAABIEHj+AAAAHlBMVEU/xPuk3/2w4/3P7f7V7/7a8f72/P/6/f/7/f////+OFjDPAAAA2ElEQVR42u3boQ2AMBCG0WLwBIElBMEarMBkWLZFV1RcQmibvG+CZy+XPz1tdicwMDAwMDAwMDAwMDAwMDAwMDCwfmHXFur4DbamUCMYGBgYGBgYGBgYWF+wcwq1ON/AwMDAwMDAwMDAwD6BBT8j5fa651u5AQwMDAwMDAwMDAysRVjwM1JudleCgYGBgYGBgYGBgdmMgIGBgYGBgYGBgYG1DrMZAQMDAwMDAwMDAwOrArMZAQMDAwMDAwMDAwOzGXFXgoGBgYGBgYGBgYGBgYGBgYGBgeWwF756V4XSI6GKAAAAAElFTkSuQmCC',
						],
						'center' => [
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYBAMAAABIEHj+AAAAHlBMVEU/xPuk3/2w4/3P7f7V7/7a8f72/P/6/f/7/f////+OFjDPAAAA1UlEQVR42u3bMQ2AMBRF0SKhwQBpMIIFXCABCWysuGVma8hPU8i5Cs76hpeuPjsTGBgYGBgYGBgYGBgYGBgYGBgY2H9gpbqjLSxVt4GBgYGBgYGBgYGBfRCWq9vNNzAwMDAwMDAwMDCw97C1BDUHw6YU1AAGBgYGBgYGBgYG1iNsyUGNdiUYGBgYGBgYGBgYmM8IGBgYGBgYGBgYGNjXYD4jYGBgYGBgYGBgYGBNYD4jYGBgYGBgYGBgYGA+I3YlGBgYGBgYGBgYGBgYGBgYGBgY2BN2A1O85EFHf1n6AAAAAElFTkSuQmCC',
						],
						'right'  => [
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYBAMAAABIEHj+AAAAElBMVEU/xPuk3/2w4/3V7/7a8f7///90D081AAAA1ElEQVR42u3bsQ2AIBCGURoGsKA3JA7gCk5g4/6rWFtechow75vgtRf4yzVmZwEDAwMDAwMDAwMDAwMDAwMDAwP7I+zoobbPYGsJVcHAwMDAwMDAwMDA5oLtS6jmfAMDAwMDAwMDAwMDC8B6VtkvIyWrCgYGBgYGBgYGBgY2ImzJqrkrwcDAwMDAwMDAwMBsRvy4AwMDAwMDAwMDA5sXZjMCBgYGBgYGBgYGBvYizGYEDAwMDAwMDAwMDMxmxF0JBgYGBgYGBgYGBgYGBgYGBgYG9oTdBpDUhkRAaPoAAAAASUVORK5CYII=',
						],
					],

				],
				'section'           => $this->section,
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
			echo '<style type="text/css">' . $style . '</style>';  // WPCS: XSS OK.
		}

		Main::get_instance()->load( 'component-wrapper' );
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
