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
use HFG\Main;
use HFG\Traits\Core;
use Neve\Customizer\Controls\Radio_Image;
use WP_Customize_Manager;

/**
 * Class Abstract_Component
 *
 * @package HFG\Core
 */
abstract class Abstract_Component implements Component {
	use Core;

	/**
	 * Current id of the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var null|string
	 */
	public static $current_component = null;
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
	protected $width;
	/**
	 * The component label
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $label
	 */
	protected $label;
	/**
	 * The component priority in customizer
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var int $priority
	 */
	protected $priority;
	/**
	 * The name of the component panel
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $panel
	 */
	protected $panel;

	/**
	 * A list of partials passed from parent.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var array[WP_Customize_Partial]
	 */
	protected $row_partials;

	/**
	 * Return the settings for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_settings() {
		return array(
			'name'    => $this->label,
			'id'      => $this->id,
			'width'   => $this->width,
			'section' => $this->section, // Customizer section to focus when click settings.
		);
	}

	/**
	 * Shares the row partials list.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param array[WP_Customize_Partial] $partials_list A list of partials.
	 *
	 * @return mixed
	 */
	public function set_row_partials( array $partials_list = array() ) {
		$this->row_partials = $partials_list;
	}

	/**
	 * Get the section id.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @return string
	 */
	public function get_section_id() {
		return $this->section;
	}

	/**
	 * Method to get protected properties for class.
	 *
	 * @since   1.0.0
	 * @access  protected
	 *
	 * @param string $key The property key name.
	 *
	 * @return bool
	 */
	public function get_property( $key = '' ) {
		if ( ! property_exists( $this, $key ) ) {
			return false;
		}

		return $this->$key;
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
		$partial_settings = array();

		$wp_customize->add_setting(
			$this->id . '_component_align',
			array(
				'default'        => 'left',
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		array_push( $partial_settings, $this->id . '_align' );
		$wp_customize->add_control(
			$this->id . '_component_align',
			[
				'label'       => __( 'Component Alignment', 'neve' ),
				'description' => __( 'Set the alignment for this component inside the active row.', 'neve' ),
				'type'        => 'select',
				'settings'    => $this->id . '_component_align',
				'priority'    => 800,
				'section'     => $this->section,
				'choices'     => array(
					'left'   => __( 'Left', 'neve' ),
					'center' => __( 'Center', 'neve' ),
					'right'  => __( 'Right', 'neve' ),
				),
			]
		);

		foreach ( $this->row_partials as $row_partial ) {
			$row_partial->settings = array_merge( $row_partial->settings, $partial_settings );
			$wp_customize->selective_refresh->remove_partial( $row_partial->id );
			$wp_customize->selective_refresh->add_partial( $row_partial );
		}
		return $wp_customize;
	}

	/**
	 * Method to add Component css styles.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
	 */
	public function add_style( array $css_array = array() ) {
		return $css_array;
	}

	/**
	 * Render component markup.
	 */
	public function render() {
		self::$current_component = $this->get_id();

		Main::get_instance()->load( 'component-wrapper' );
	}

	/**
	 * Utility method to return the component ID.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return string
	 */
	public function get_id() {
		return $this->id;
	}

	/**
	 * The render method for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return mixed
	 */
	abstract public function render_component();

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
}
