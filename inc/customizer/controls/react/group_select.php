<?php
/**
 * Group_Select Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Group_Select
 *
 * @package Neve\Customizer\Controls\React
 */
class Group_Select extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_group_select';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $options = [];
	/**
	 * Mark controls as disabled.
	 *
	 * @var bool
	 */
	public $disabled = false;

	/**
	 * Send to JS.
	 */
	public function json() {
		$json             = parent::json();
		$json['options']  = $this->options;
		$json['disabled'] = $this->disabled;
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
