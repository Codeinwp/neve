<?php
/**
 * Builders Control. Handles data passing from args to JS.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Customizer section.
 *
 * @package Neve\Customizer\Controls\React
 */
class Builder extends \WP_Customize_Control {
	/**
	 * Type of this section.
	 *
	 * @var string
	 */
	public $type = 'neve_hfg_builder_control';

	/**
	 * Builder Type
	 *
	 * @var string
	 */
	public $builder_type = null;

	/**
	 * Gather the parameters passed to client JavaScript via JSON.
	 *
	 * @return array The array to be exported to the client as JSON.
	 */
	public function json() {
		$json                = parent::json();
		$json['builderType'] = $this->builder_type;

		return $json;
	}
}
