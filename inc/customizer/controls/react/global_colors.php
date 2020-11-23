<?php
/**
 * Global_Colors Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Global_Colors
 *
 * @package Neve\Customizer\Controls\React
 */
class Global_Colors extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_global_colors';
	/**
	 * Additional arguments passed to JS.
	 *
	 * @var string
	 */
	public $default_values = '';

	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['defaultValues'] = $this->default_values;
	}
}
