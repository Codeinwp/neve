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
	public function to_json() {
		parent::to_json();
		$this->json['toolbars']             = [];
		$this->json['allowedDynamicFields'] = [];
		if ( isset( $this->input_attrs['toolbars'] ) && ! empty( $this->input_attrs['toolbars'] ) ) {
			$this->json['toolbars'] = $this->input_attrs['toolbars'];
		}
		if ( isset( $this->input_attrs['allowedDynamicFields'] ) && ! empty( $this->input_attrs['allowedDynamicFields'] ) ) {
			$this->json['allowedDynamicFields'] = $this->input_attrs['allowedDynamicFields'];
		}
	}
}
