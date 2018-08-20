<?php
/**
 * Customizer Heading.
 *
 * @since 1.0.0
 * @package Neve\Customizer\Controls
 */

namespace Neve\Customizer\Controls;

/**
 * Heading control
 */
class Heading extends \WP_Customize_Control {

	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'customizer-heading';

	/**
	 * An Underscore (JS) template for this control's content (but not its container).
	 *
	 * Class variables for this control class are available in the `data` JS object;
	 * export custom variables by overriding {@see WP_Customize_Control::to_json()}.
	 *
	 * @see WP_Customize_Control::print_template()
	 *
	 * @access protected
	 */
	protected function content_template() {
		?>
		<h4 class="neve-customizer-heading">{{{ data.label }}}</h4>
		<?php
	}
}
