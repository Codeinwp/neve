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
	 * Default alignament value for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var null|string
	 */
	public $default_align = 'left';
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
	 * @return array
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {
		$partial_settings = array();

		$wp_customize->add_setting(
			$this->id . '_component_align',
			array(
				'default'           => $this->get_align_default(),
				'theme_supports'    => 'hfg_support',
				'transport'         => 'postMessage',
				'sanitize_callback' => 'wp_filter_nohtml_kses',
			)
		);
		array_push( $partial_settings, $this->id . '_component_align' );
		$wp_customize->add_control(
			new Radio_Image(
				$wp_customize,
				$this->id . '_component_align',
				[
					'label'       => __( 'Component Alignment', 'neve' ),
					'description' => '',
					'settings'    => $this->id . '_component_align',
					'priority'    => 800,
					'section'     => $this->section,
					'choices'     => array(
						'left'   => array(
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYBAMAAABIEHj+AAAAHlBMVEU/xPuk3/2w4/3P7f7V7/7a8f72/P/6/f/7/f////+OFjDPAAAA2ElEQVR42u3boQ2AMBCG0WLwBIElBMEarMBkWLZFV1RcQmibvG+CZy+XPz1tdicwMDAwMDAwMDAwMDAwMDAwMDCwfmHXFur4DbamUCMYGBgYGBgYGBgYWF+wcwq1ON/AwMDAwMDAwMDAwD6BBT8j5fa651u5AQwMDAwMDAwMDAysRVjwM1JudleCgYGBgYGBgYGBgdmMgIGBgYGBgYGBgYG1DrMZAQMDAwMDAwMDAwOrArMZAQMDAwMDAwMDAwOzGXFXgoGBgYGBgYGBgYGBgYGBgYGBgeWwF756V4XSI6GKAAAAAElFTkSuQmCC',
						),
						'center' => array(
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYBAMAAABIEHj+AAAAHlBMVEU/xPuk3/2w4/3P7f7V7/7a8f72/P/6/f/7/f////+OFjDPAAAA1UlEQVR42u3bMQ2AMBRF0SKhwQBpMIIFXCABCWysuGVma8hPU8i5Cs76hpeuPjsTGBgYGBgYGBgYGBgYGBgYGBgY2H9gpbqjLSxVt4GBgYGBgYGBgYGBfRCWq9vNNzAwMDAwMDAwMDCw97C1BDUHw6YU1AAGBgYGBgYGBgYG1iNsyUGNdiUYGBgYGBgYGBgYmM8IGBgYGBgYGBgYGNjXYD4jYGBgYGBgYGBgYGBNYD4jYGBgYGBgYGBgYGA+I3YlGBgYGBgYGBgYGBgYGBgYGBgY2BN2A1O85EFHf1n6AAAAAElFTkSuQmCC',
						),
						'right'  => array(
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAADYBAMAAABIEHj+AAAAElBMVEU/xPuk3/2w4/3V7/7a8f7///90D081AAAA1ElEQVR42u3bsQ2AIBCGURoGsKA3JA7gCk5g4/6rWFtechow75vgtRf4yzVmZwEDAwMDAwMDAwMDAwMDAwMDAwP7I+zoobbPYGsJVcHAwMDAwMDAwMDA5oLtS6jmfAMDAwMDAwMDAwMDC8B6VtkvIyWrCgYGBgYGBgYGBgY2ImzJqrkrwcDAwMDAwMDAwMBsRvy4AwMDAwMDAwMDA5sXZjMCBgYGBgYGBgYGBvYizGYEDAwMDAwMDAwMDMxmxF0JBgYGBgYGBgYGBgYGBgYGBgYG9oTdBpDUhkRAaPoAAAAASUVORK5CYII=',
						),
					),
				]
			)
		);

		return $partial_settings;
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
	 * Get default align.
	 *
	 * @return mixed|string|null Default align.
	 */
	public function get_align_default() {
		$setting_default = Settings::get_instance()->get_default_component_align( $this->get_id() );
		if ( null !== $setting_default ) {
			return $setting_default;
		}

		return $this->default_align;
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
