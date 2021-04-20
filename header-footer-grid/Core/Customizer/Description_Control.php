<?php
/**
 * Name:    Header Footer Grid - Description Control
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 * Created on:      2021-04-19
 *
 * @package Neve
 */

namespace HFG\Core\Customizer;

/**
 * Customizer section.
 *
 * @package    WordPress
 * @subpackage Customize
 * @since      4.1.0
 * @see        WP_Customize_Section
 */
class Description_Control extends \WP_Customize_Control {

	/**
	 * Type of this section.
	 *
	 * @var string
	 */
	public $type = 'hfg_description';

	/**
	 *  Default options schema.
	 *
	 * @var array
	 */
	public $default_options = [
		'title'            => '',
		'html_description' => '',
	];

	/**
	 * Options passed to control.
	 *
	 * @var array
	 */
	public $options = [];

	/**
	 * Gather the parameters passed to client JavaScript via JSON.
	 *
	 * @since 4.1.0
	 *
	 * @return array The array to be exported to the client as JSON.
	 */
	public function json() {
		$json            = parent::json();
		$json['options'] = wp_parse_args( $this->options, $this->default_options );

		return $json;
	}

	/**
	 * Render template.
	 */
	protected function content_template() {
		?>
		<li id="accordion-section-{{ data.id }}" class="hfg-description-section control-section control-section-{{ data.type }}">
			<div class="description-control-wrap">
				<# if( data.options.title ) { #>
				<span class="customize-control-title">{{data.options.title}}</span>
				<# } #>
				<p>{{{data.options.html_description}}}</p>
			</div>
		</li>
		<?php
	}
}
