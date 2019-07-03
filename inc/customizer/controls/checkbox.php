<?php
/**
 * Customizer Heading.
 *
 * @since   1.0.0
 * @package Neve\Customizer\Controls
 */

namespace Neve\Customizer\Controls;

/**
 * Checkbox control
 */
class Checkbox extends \WP_Customize_Control {

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'checkbox-toggle';

	/**
	 * Send to _js json.
	 *
	 * @return array
	 */
	public function json() {
		$json         = parent::json();
		$json['id']   = $this->id;
		$json['link'] = $this->get_link();

		return $json;
	}

	/**
	 * Render control.
	 */
	protected function content_template() {
		?>
		<div class="checkbox-toggle-wrap">
			<span>{{{data.label}}}</span>
			<input {{{data.link}}} type="checkbox" id="{{{data.id}}}"/><label for="{{{data.id}}}"></label>
		</div>
		<?php
	}
}
