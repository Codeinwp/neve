<?php
/**
 * Description Upsell Section
 *
 * Author:      Bogdan Preda <bogdan.preda@themeisle.com>
 * Created on:  20-12-{2021}
 *
 * @package neve/neve-pro
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
class Upsell_Section extends \WP_Customize_Section {
	/**
	 * Type of this section.
	 *
	 * @var string
	 */
	public $type = 'neve_upsell';

	/**
	 * Upgrade URL.
	 *
	 * @var string
	 */
	public $url = '';

	/**
	 * Gather the parameters passed to client JavaScript via JSON.
	 *
	 * @return array The array to be exported to the client as JSON.
	 * @since 4.1.0
	 */
	public function json() {
		$json        = parent::json();
		$json['url'] = $this->url;
		return $json;
	}

	/**
	 * Render template.
	 */
	protected function render_template() {
		?>
		<li id="accordion-section-{{ data.id }}"
			data-slug="{{data.id}}"
			class="control-section control-section-{{ data.type }} neve-upsell">
		</li>
		<?php
	}
}
