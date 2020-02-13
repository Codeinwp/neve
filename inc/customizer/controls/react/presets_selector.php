<?php
/**
 * Radio Buttons Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Spacing
 *
 * @package Neve\Customizer\Controls\React
 */
class Presets_Selector extends \WP_Customize_Control {

	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_presets_selector';

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $presets = [];

	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['presets'] = $this->presets;
	}
}
