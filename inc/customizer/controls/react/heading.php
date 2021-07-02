<?php
/**
 * Heading Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Heading control for react
 */
class Heading extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_customizer_heading';
	/**
	 * Control class.
	 *
	 * @var string
	 */
	public $class = '';

	/**
	 * Should be accordion?
	 *
	 * @var bool
	 */
	public $accordion = false;

	/**
	 * Initial state.
	 *
	 * @var bool
	 */
	public $expanded = true;

	/**
	 * How many controls to wrap.
	 *
	 * @var int
	 */
	public $controls_to_wrap = 1;

	/**
	 * Label before the accordion.
	 *
	 * @var string
	 */
	public $category_label = '';

	/**
	 * Send data to _s
	 *
	 * @return array
	 */
	public function json() {
		$json                  = parent::json();
		$json['classes']       = $this->class;
		$json['accordion']     = $this->accordion;
		$json['categoryLabel'] = $this->category_label;

		if ( $this->accordion === true ) {
			$json['classes'] .= ' accordion';
		}

		$json['style'] = $this->print_style();

		return $json;
	}

	/**
	 * Render the control.
	 */
	protected function render() {
		$id     = 'customize-control-' . str_replace( array( '[', ']' ), array( '-', '' ), $this->id );
		$class  = 'customize-control customize-control-' . $this->type;
		$class .= ' ' . $this->class;
		if ( $this->accordion ) {
			$class .= ' accordion';
		}

		if ( $this->expanded ) {
			$class .= ' expanded';
		}

		echo '<li id="' . esc_attr( $id ) . '" class="' . esc_attr( $class ) . '">';
		echo '</li>';
	}

	/**
	 * Print the style for the accordion.
	 */
	protected function print_style() {
		$style = '';
		for ( $i = 1; $i <= $this->controls_to_wrap; $i ++ ) {
			$style .= '.accordion.' . $this->class . ':not(.expanded)';
			for ( $j = 1; $j <= $i; $j ++ ) {
				$style .= ' + li';
			}
			if ( $i !== $this->controls_to_wrap ) {
				$style .= ',';
			}
		}
		$style .= '{max-height: 0;opacity: 0;margin: 0; overflow: hidden; padding:0 !important;}';

		return $style;
	}
}
