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
	}

	/**
	 * Render content of control.
	 */
	public function render_content() {
		echo $this->render_control_label();
		echo $this->render_sortable_list();
		echo $this->render_collector_input();
	}

	/**
	 * Render sortable list.
	 */
	private function render_sortable_list() {
		$markup = '<ul class="ti-order-sortable">';
		foreach ( $this->components as $component => $name ) {
			$markup .= '<li class="ui-state-default order-component' . esc_attr( $this->get_component_status_class( $component ) ) . '" data-id="' . esc_attr( $component ) . '">';
			$markup .= '<span class="toggle-display"></span>';
			$markup .= '<p>' . esc_html( $name ) . '</p>';
			$markup .= '<span class="dashicons dashicons-menu drag"></span>';
			$markup .= '</li>';
		}
		$markup .= '</ul>';

		return $markup;
	}

	/**
	 * Render the collector input.
	 *
	 * @return string
	 */
	private function render_collector_input() {
		return '<input type="hidden" class="ti-order-collector"' . $this->get_link() . '>';
	}

	/**
	 * Render title and description.
	 *
	 * @return string
	 */
	private function render_control_label() {
		if ( empty( $this->label ) && empty( $this->description ) ) {
			return '';
		}
		$markup = '<label>';
		if ( ! empty( $this->label ) ) {
			$markup .= '<span class="customize-control-title">' . esc_html( $this->label ) . '</span>';
		}
		if ( ! empty( $this->description ) ) {
			$markup .= '<span class="description customize-control-description">' . wp_kses_post( $this->description ) . '</span>';
		}
		$markup .= '</label>';

		return $markup;
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

		if ( ! in_array( $component, $value ) ) {
			return '';
		}

		return ' enabled';
	}

}
