<?php
/**
 * Created on:      2020-08-12
 *
 * @package Neve
 */

namespace HFG\Core\Customizer;

use WP_Customize_Manager;

/**
 * Customizer section.
 *
 * @package    WordPress
 * @subpackage Customize
 * @since      4.1.0
 * @see        WP_Customize_Section
 */
class Instructions_Control extends \WP_Customize_Control {

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
		'description' => '',
		'image'       => '',
		'quickLinks'  => [],
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
		<li id="accordion-section-{{ data.id }}"
				class="hfg-instructions-section control-section control-section-{{ data.type }}">

			<# if( data.options.image ) { #>
			<p>{{data.options.description}}</p>
			<# } #>
			<hr>
			<# if( data.options.quickLinks ) { #>
			<div class="quick-links-wrap">
				<span class="customize-control-title"><?php esc_html_e( 'Quick Links', 'neve' ); ?></span>
				<ul class="quick-links">
					<# _.each(data.options.quickLinks, function( args, control ) { #>
					<li>
						<a href="#" data-control-focus="{{control}}">
							<span class="dashicons {{args.icon}}"></span>{{args.label}}
						</a>
					</li>
					<# }) #>
				</ul>
			</div>
			<# } #>

			<# if( data.options.image ) { #>
			<hr>
			<video style="width: 90%;margin: auto;display: block;" autoplay muted loop playsinline >
				<source src="{{data.options.image}}" type="video/mp4">
			</video>
			<hr>
			<# } #>
		</li>
		<?php
	}
}


