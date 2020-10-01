<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Ordering.php
 */

namespace Neve\Customizer\Controls;

/**
 * Class Ordering
 *
 * @package Neve\Customizer\Controls
 */
class Ordering extends \WP_Customize_Control {

	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'ordering';

	/**
	 * Orderable components.
	 *
	 * @var array
	 */
	private $components = array();

	/**
	 * Ordering constructor.
	 *
	 * @param \WP_Customize_Manager $manager Wp customize.
	 * @param string                $id      control id.
	 * @param array                 $args    control args.
	 */
	public function __construct( \WP_Customize_Manager $manager, $id, array $args = array() ) {
		parent::__construct( $manager, $id, $args );
		$this->components = $args['components'] ? $args['components'] : array();

		$this->setup_components();
	}

	/**
	 * Get disabled components
	 * Add them at the end of all components in the customizer
	 */
	private function setup_components() {
		$val = $this->value();
		if ( ! is_string( $val ) ) {
			$val = '[]';
		}
		$val = json_decode( $val, true );

		if ( ! is_array( $val ) ) {
			$val = array();
		}

		$enabled          = array_combine( $val, $val );
		$disabled         = array_diff_assoc( $this->components, $enabled );
		$this->components = array_merge( $enabled, $disabled );
	}

	/**
	 * Render content of control.
	 */
	public function render_content() {
		$this->render_control_label();
		$this->render_sortable_list();
		$this->render_collector_input();
	}

	/**
	 * Render title and description.
	 *
	 * @return void
	 */
	private function render_control_label() {
		if ( empty( $this->label ) && empty( $this->description ) ) {
			return;
		}
		echo '<label>';
		if ( ! empty( $this->label ) ) {
			echo '<span class="customize-control-title">' . esc_html( $this->label ) . '</span>';
		}
		if ( ! empty( $this->description ) ) {
			echo '<span class="description customize-control-description">' . wp_kses_post( $this->description ) . '</span>';
		}
		echo '</label>';
	}

	/**
	 * Render sortable list.
	 *
	 * @return void
	 */
	private function render_sortable_list() {
		if ( empty( $this->components ) ) {
			return;
		}

		echo '<ul class="ti-order-sortable">';
		foreach ( $this->components as $component => $name ) {
			if ( $component === $name ) {
				continue;
			}
			echo '<li class="ui-state-default order-component' . esc_attr( $this->get_component_status_class( $component ) ) . '" data-id="' . esc_attr( $component ) . '">';
			echo '<span class="toggle-display"></span>';
			echo '<p>' . esc_html( $name ) . '</p>';
			echo '<span class="dashicons dashicons-menu drag"></span>';
			echo '</li>';
		}
		echo '</ul>';
	}

	/**
	 * Get the class for the component. (enabled/disabled)
	 *
	 * @param string $component the component to check.
	 *
	 * @return string
	 */
	private function get_component_status_class( $component ) {
		$value = $this->value();
		if ( empty( $value ) ) {
			return ' enabled';
		}
		$value = json_decode( $value, true );

		if ( ! is_array( $value ) ) {
			$value = array();
		}

		if ( ! in_array( $component, $value, true ) ) {
			return '';
		}

		return ' enabled';
	}

	/**
	 * Render the collector input.
	 *
	 * @return void
	 */
	private function render_collector_input() {
		echo '<input type="hidden" class="ti-order-collector"' . wp_kses_post( $this->get_link() ) . '>';
	}
}
