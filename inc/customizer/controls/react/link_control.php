<?php
/**
 * Author:          Bogdan Preda <bogdan.preda@themeisle.com>
 * Created on:      2022-02-10
 *
 * @package Neve
 */

namespace Neve\Customizer\Controls\React;

/**
 * Customizer link control React.
 *
 * @package    WordPress
 * @subpackage Customize
 * @since      4.1.0
 * @see        WP_Customize_Control
 */
class Link_Control extends \WP_Customize_Control {
	/**
	 * Type of this control.
	 *
	 * @var string
	 */
	public $type = 'neve_link';

	/**
	 * Control URL for link.
	 *
	 * @var string
	 */
	public $url = '#';

	/**
	 * Control text for link.
	 *
	 * @var string
	 */
	public $label = 'Link';

	/**
	 * Control description for link.
	 *
	 * @var string
	 */
	public $description = '';

	/**
	 * Gather the parameters passed to client JavaScript via JSON.
	 *
	 * @since 4.1.0
	 *
	 * @return array The array to be exported to the client as JSON.
	 */
	public function json() {
		$json                = parent::json();
		$json['url']         = $this->url;
		$json['label']       = $this->label;
		$json['description'] = $this->description;

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
