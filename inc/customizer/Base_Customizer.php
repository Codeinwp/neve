<?php
/**
 * Abstract base class for customizer module.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Customizer\Abstracts
 */

namespace Neve\Customizer;

use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Panel;
use Neve\Customizer\Types\Partial;
use Neve\Customizer\Types\Section;

/**
 * Customizer module base.
 *
 * @package Neve\Customizer\Abstracts
 */
abstract class Base_Customizer {
	/**
	 * WP_Customize object
	 *
	 * @var $wp_customize object
	 */
	private $wpc;

	/**
	 * Selective refresh.
	 *
	 * @var string transport or postMessage
	 */
	protected $selective_refresh;

	/**
	 * Controls to register.
	 *
	 * @var array  Controls that will be registered.
	 */
	private $controls_to_register = array();

	/**
	 * Sections to register
	 *
	 * @var array  Controls that will be registered.
	 */
	private $sections_to_register = array();

	/**
	 * Panels to register
	 *
	 * @var array  Panels that will be registered.
	 */
	private $panels_to_register = array();

	/**
	 * Partials to register.
	 *
	 * @var array Partials that will be registered.
	 */
	private $partials_to_register = array();

	/**
	 * Control types to register.
	 *
	 * @var array  Control types that will be registered for use with the content_template Underscores template.
	 */
	private $types_to_register = array();

	/**
	 * Base initialization.
	 */
	public function init() {
		add_action( 'customize_register', array( $this, 'register_controls_callback' ) );
	}

	/**
	 * The function tied to customize_register.
	 *
	 * @param object $wp_customize the customizer manager.
	 */
	public function register_controls_callback( $wp_customize ) {
		$this->wpc = $wp_customize;
		$this->set_selective_refresh();
		$this->add_controls();
		$this->after_add_controls();
		$this->register_controls();
		$this->register_panels();
		$this->register_sections();
		$this->register_types();
		$this->change_controls();
		$this->register_partials();
	}

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	abstract public function add_controls();

	/**
	 * Hook after controls are defined.
	 *
	 * @return void
	 */
	protected function after_add_controls() {
	}

	/**
	 * Change controls function.
	 *
	 * @return void
	 */
	protected function change_controls() {
		return;
	}

	/**
	 * Check selective refresh.
	 */
	private function set_selective_refresh() {
		$this->selective_refresh = isset( $this->wpc->selective_refresh ) ? 'postMessage' : 'refresh';
	}

	/**
	 * Register all the defined sections.
	 */
	private function register_panels() {
		$panels = $this->panels_to_register;
		foreach ( $panels as $index => $panel ) {
			$this->wpc->add_panel( $panel->id, $panel->args );
		}
	}

	/**
	 * Register all the defined sections.
	 */
	private function register_sections() {
		$sections = $this->sections_to_register;
		foreach ( $sections as $index => $section ) {
			if ( $section->custom_section !== null && class_exists( $section->custom_section ) ) {
				$this->wpc->add_section( new $section->custom_section( $this->wpc, $section->id, $section->args ) );
			} else {
				$this->wpc->add_section( $section->id, $section->args );
			}
		}
	}

	/**
	 * Register all the defined controls.
	 */
	private function register_controls() {
		$controls = $this->controls_to_register;
		foreach ( $controls as $index => $control ) {
			$this->wpc->add_setting( $control->id, $control->setting_args );
			if ( $control->custom_control !== null && class_exists( $control->custom_control ) ) {
				$this->wpc->add_control( new $control->custom_control( $this->wpc, $control->id, $control->control_args ) );
			} else {
				$this->wpc->add_control( $control->id, $control->control_args );
			}
			if ( isset( $control->partial ) ) {
				$this->add_partial( new Partial( $control->id, $control->partial ) );
			}
		}
	}

	/**
	 * Register control types defined to work with Underscores template.
	 */
	private function register_types() {
		$types = $this->types_to_register;
		foreach ( $types as $object => $type ) {
			call_user_func_array( array( $this->wpc, 'register_' . $type . '_type' ), array( $object ) );
		}
	}

	/**
	 * Register all the defined controls.
	 */
	private function register_partials() {
		$partials = $this->partials_to_register;
		foreach ( $partials as $index => $partial ) {
			if ( empty( $partial ) ) {
				continue;
			}
			$this->wpc->selective_refresh->add_partial( $partial->id, $partial->args );
		}
	}

	/**
	 * Add the controls to load.
	 *
	 * @param Control $control control to add.
	 */
	public function add_control( Control $control ) {
		array_push( $this->controls_to_register, $control );
	}

	/**
	 * Add the sections to load.
	 *
	 * @param Section $section section to add.
	 */
	public function add_section( Section $section ) {
		array_push( $this->sections_to_register, $section );
	}

	/**
	 * Add the panels to load.
	 *
	 * @param Panel $panel panel to add.
	 */
	public function add_panel( Panel $panel ) {
		array_push( $this->panels_to_register, $panel );

	}

	/**
	 * Add types that will be registered for .
	 *
	 * @param string $object_name the object name that will be registered.
	 * @param string $type        the type of object to register [panel, section, control].
	 */
	public function register_type( $object_name, $type ) {
		$accepted_types = array( 'panel', 'section', 'control' );
		if ( ! in_array( $type, $accepted_types ) ) {
			return;
		}
		$this->types_to_register[ $object_name ] = $type;
	}

	/**
	 * Add the partials to load.
	 *
	 * @param Partial $partial partial to add.
	 */
	public function add_partial( Partial $partial ) {
		if ( empty( $partial->args ) ) {
			return;
		}
		array_push( $this->partials_to_register, $partial );
	}

	/**
	 * Get customizer object.
	 *
	 * @param string $type object type [ section, control, setting, panel ].
	 * @param string $id   the id of the customizer object.
	 *
	 * @return mixed|null
	 */
	public function get_customizer_object( $type, $id ) {
		$accepted_types = array( 'setting', 'control', 'section', 'panel' );
		if ( ! in_array( $type, $accepted_types ) ) {
			return null;
		}
		$object = call_user_func_array( array( $this->wpc, 'get_' . $type ), array( $id ) );
		if ( empty( $object ) ) {
			return null;
		}

		return $object;
	}

	/**
	 * Change a customizer object.
	 *
	 * @param string               $type     object type [ section, control, setting, panel ].
	 * @param string               $id       id of object.
	 * @param string               $property property to change.
	 * @param string|integer|array $value    the value.
	 */
	public function change_customizer_object( $type, $id, $property, $value ) {
		$accepted_types = array( 'setting', 'control', 'section', 'panel' );
		if ( ! in_array( $type, $accepted_types ) ) {
			return;
		}
		$object = call_user_func_array( array( $this->wpc, 'get_' . $type ), array( $id ) );

		if ( empty( $object ) ) {
			return;
		}

		$object->$property = $value;
	}
}
