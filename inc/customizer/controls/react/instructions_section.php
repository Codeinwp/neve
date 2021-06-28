<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      2019-10-16
 *
 * @package Neve
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
class Instructions_Section extends \WP_Customize_Section {
	/**
	 * Type of this section.
	 *
	 * @var string
	 */
	public $type = 'hfg_instructions';
	/**
	 * Default options schema.
	 *
	 * @var array
	 */
	public $default_options = [
		'description'     => '',
		'image'           => '',
		'quickLinks'      => [],
		'hadOldBuilder'   => false,
		'builderMigrated' => false,
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
	 * @return array The array to be exported to the client as JSON.
	 * @since 4.1.0
	 */
	public function json() {
		$json            = parent::json();
		$json['options'] = wp_parse_args( $this->options, $this->default_options );
		return $json;
	}
	/**
	 * Render template.
	 */
	protected function render_template() {
		?>
		<li id="accordion-section-{{ data.id }}"
			data-slug="{{data.id}}"
			class="control-section control-section-{{ data.type }} neve-quick-links">
		</li>
		<?php
	}
}
