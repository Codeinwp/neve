<?php
/**
 * Customizer Heading.
 *
 * @since   1.0.0
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
	 * Control class.
	 *
	 * @var string
	 */
	public $class = '';

	/**
	 * Should be accordion?
	 *
	 * @var bool
	 */
	public $accordion = false;

	/**
	 * Initial state.
	 *
	 * @var bool
	 */
	public $expanded = true;

	/**
	 * How many controls to wrap.
	 *
	 * @var int
	 */
	public $controls_to_wrap = 1;

	/**
	 * Label before the accordion.
	 *
	 * @var string
	 */
	public $category_label = '';

	/**
	 * Send data to _s
	 *
	 * @return array
	 */
	public function json() {
		$json                   = parent::json();
		$json['classes']        = $this->class;
		$json['accordion']      = $this->accordion;
		$json['category_label'] = $this->category_label;

		if ( $this->accordion === true ) {
			$json['classes'] .= ' accordion';
		}

		$json['style'] = $this->print_style();

		return $json;
	}

	/**
	 * Render the control.
	 */
	protected function render() {
		$id     = 'customize-control-' . str_replace( array( '[', ']' ), array( '-', '' ), $this->id );
		$class  = 'customize-control customize-control-' . $this->type;
		$class .= ' ' . $this->class;
		if ( $this->accordion ) {
			$class .= ' accordion';
		}

		if ( $this->expanded ) {
			$class .= ' expanded';
		}

		echo '<li id="' . esc_attr( $id ) . '" class="' . esc_attr( $class ) . '">';
		echo '</li>';
	}

	/**
	 * An Underscore (JS) template for this control's content (but not its container).
	 *
	 * Class variables for this control class are available in the `data` JS object;
	 * export custom variables by overriding {@see WP_Customize_Control::to_json()}.
	 *
	 * @see    WP_Customize_Control::print_template()
	 *
	 * @access protected
	 */
	protected function content_template() {
		?>
		<# if(data.category_label) {#>
		<span class="customize-control-title">{{data.category_label}}</span>
		<# }#>
		<h4 class="neve-customizer-heading">{{ data.label }}
			<# if(data.accordion) { #>
			<span class="accordion-expand-button"></span>
			<# } #>
		</h4>
		{{{data.style}}} <?php // phpcs:ignore WordPressVIPMinimum.Security.Mustache.OutputNotation ?>
		<?php
	}

	/**
	 * Print the style for the accordion.
	 */
	protected function print_style() {
		$style  = '';
		$style .= '<style>';
		for ( $i = 1; $i <= $this->controls_to_wrap; $i ++ ) {
			$style .= '.accordion.' . $this->class . ':not(.expanded)';
			for ( $j = 1; $j <= $i; $j ++ ) {
				$style .= ' + li';
			}
			if ( $i !== $this->controls_to_wrap ) {
				$style .= ',';
			}
		}
		$style .= '{max-height: 0;opacity: 0;margin: 0; overflow: hidden; padding:0 !important;}';
		$style .= '</style>';

		return $style;
	}
}
