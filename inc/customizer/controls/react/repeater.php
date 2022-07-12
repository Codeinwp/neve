<?php
/**
 * Repeater Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Class Repeater
 *
 * @package Neve\Customizer\Controls\React
 */
class Repeater extends \WP_Customize_Control {

	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'neve_repeater_control';

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $fields = [];

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var object
	 */
	public $new_item_fields;

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var array
	 */
	public $components = [];

	/**
	 * Additional arguments passed to JS.
	 *
	 * @var string
	 */
	public $allow_new_fields = 'yes';

	/**
	 * @param \WP_Customize_Manager $manager customize manager object.
	 * @param String                $id control ID.
	 * @param array                 $args control args.
	 */
	public function __construct( $manager, $id, $args = array() ) {
		$this->new_item_fields = new \stdClass();

		parent::__construct( $manager, $id, $args );
	}


	/**
	 * Send to JS.
	 */
	public function json() {
		$json                     = parent::json();
		$json['fields']           = $this->fields;
		$json['new_item_fields']  = $this->new_item_fields;
		$json['allow_new_fields'] = $this->allow_new_fields;
		$json['components']       = $this->components;
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
