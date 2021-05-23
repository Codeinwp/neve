<?php
/**
 * Inline Select Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Inline_Select
 *
 * @package Neve\Customizer\Controls\React
 */
class Inline_Select extends \WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_inline_select';

	/**
	 * Options.
	 *
	 * @var array
	 */
	public $options = [];

	/**
	 * Default.
	 *
	 * @var string|int
	 */
	public $default;

	/**
	 * Link.
	 *
	 * @var array
	 */
	public $link;

	/**
	 * Allows listening to other components.
	 *
	 * @var string
	 */
	public $changes_on;
	/**
	 * Send to JS.
	 */
	public function to_json() {
		parent::to_json();
		$this->json['options']    = $this->options;
		$this->json['defaultVal'] = $this->default;
		$this->json['link']       = $this->link;
		$this->json['changesOn']  = $this->changes_on;
	}
}
