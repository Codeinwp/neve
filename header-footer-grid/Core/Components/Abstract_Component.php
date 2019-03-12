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

use HFG\Core\Customizer\Heading_Control;
use HFG\Core\Customizer\Select_Control;
use HFG\Core\Interfaces\Component;
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
	 * Method to set protected properties for class.
	 *
	 * @since   1.0.0
	 * @access  protected
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
	 * Method to get protected properties for class.
	 *
	 * @since   1.0.0
	 * @access  protected
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
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {

		$wp_customize->add_setting(
			$this->id . '_layout_heading', array(
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);

		$wp_customize->add_control(
			new Heading_Control(
				$wp_customize,
				$this->id . '_layout_heading',
				[
					'name'     => $this->id . '_layout_heading',
					'type'     => 'heading',
					'priority' => 800,
					'section'  => $this->section,
					'label'    => __( 'Item Layout', 'hfg-module' ),
				]
			)
		);

		$wp_customize->add_setting(
			$this->id . '_merge',
			array(
				'default'        => 'no',
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Select_Control(
				$wp_customize,
				$this->id . '_merge',
				[
					'label'       => __( 'Merge Component', 'hfg-module' ),
					'description' => esc_html__( 'If you choose to merge this item, the alignment setting will inherit from the item you are merging.', 'hfg-module' ),
					'priority'    => 801,
					'section'     => $this->section,
					'input_attrs' => array(
						'placeholder' => __( 'Select merge type ...', 'hfg-module' ),
						'multiselect' => false,
					),
					'choices'     => array(
						'no'    => __( 'No', 'hfg-module' ),
						'right' => __( 'Merge Right', 'hfg-module' ),
						'left'  => __( 'Merge Left', 'hfg-module' ),
					),
				]
			)
		);

		return $wp_customize;
	}

	/**
	 * The render method for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return mixed
	 */
	abstract public function render();
}
