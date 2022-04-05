<?php
/**
 * Radio Image Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Ordering
 *
 * @package Neve\Customizer\Controls\React
 */
class Ordering extends \WP_Customize_Control {

	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_ordering_control';

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $components = [];

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $default_order = [];

	/**
	 * Send to JS.
	 */
	public function json() {
		$json                 = parent::json();
		$json['components']   = $this->components;
		$json['defaultOrder'] = $this->default_order;
		return $json;
	}

	/**
	 * This method overrides the default render
	 * so that nothing is rendered.
	 * Previously it would try to put an input element where the value was `esc_attr()`
	 * This would trigger notices in PHP
	 * It is not required to have a render as it is being handled by React.
	 */
	final public function render_content() {
		// this is rendered from React
	}
}
