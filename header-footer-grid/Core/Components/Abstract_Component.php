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
use WP_Customize_Manager;

/**
 * Class Abstract_Component
 *
 * @package HFG\Core
 */
abstract class Abstract_Component implements Component {
	use Core;

	/**
	 * Current id of thecomponent.
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

		if ( is_customize_preview() ) {
			$style = $this->css_array_to_css( $this->add_style() );
			echo '<style type="text/css">' . $style . '</style>';
		}

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
