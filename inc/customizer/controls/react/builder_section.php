<?php
/**
 * Header Footer Builder Section.
 *
 * @package Neve\Customizer\Controls\React
 */

namespace Neve\Customizer\Controls\React;

/**
 * Customizer section.
 *
 * @package    WordPress
 * @subpackage Customize
 * @since      4.1.0
 * @see        WP_Customize_Section
 */
class Builder_Section extends \WP_Customize_Section {

	/**
	 * Type of this section.
	 *
	 * @var string
	 */
	public $type = 'neve_header_footer_builder_section';
	/**
	 * Default options schema.
	 *
	 * @var array
	 */
	public $default_options = [
		'setting'      => '',
		'builder_type' => '',
	// 'quickLinks'  => [],
	];

	/**
	 * Options passed to section.
	 *
	 * @var array
	 */
	public $options = [];


	/**
	 * Gather the parameters passed to client JavaScript via JSON.
	 *
	 * @return array The array to be exported to the client as JSON.
	 */
	public function json() {
		$json            = parent::json();
		$json['options'] = wp_parse_args( $this->options, $this->default_options );

		return $json;
	}
}


