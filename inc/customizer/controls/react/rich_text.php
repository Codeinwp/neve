<?php
/**
 * Rich_Text Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Rich_Text
 *
 * @package Neve\Customizer\Controls\React
 */
class Rich_Text extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_rich_text';
	/**
	 * Send to JS.
	 */
	public function json() {
		$json                         = parent::json();
		$json['toolbars']             = [];
		$json['allowedDynamicFields'] = [];
		if ( isset( $this->input_attrs['toolbars'] ) && ! empty( $this->input_attrs['toolbars'] ) ) {
			$json['toolbars'] = $this->input_attrs['toolbars'];
		}
		if ( isset( $this->input_attrs['allowedDynamicFields'] ) && ! empty( $this->input_attrs['allowedDynamicFields'] ) ) {
			$json['allowedDynamicFields'] = $this->input_attrs['allowedDynamicFields'];
		}
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
