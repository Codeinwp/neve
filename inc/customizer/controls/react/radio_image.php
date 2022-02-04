<?php
/**
 * Radio Image Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Radio_Image
 *
 * @package Neve\Customizer\Controls\React
 */
class Radio_Image extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_radio_image_control';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $choices = [];
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $documentation = [];
	/**
	 * Send to JS.
	 */
	public function json() {
		$json                  = parent::json();
		$json['choices']       = $this->choices;
		$json['documentation'] = $this->documentation;
		return $json;
	}
}
