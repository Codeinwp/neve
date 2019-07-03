<?php
/**
 * Select control which allows to show/hide another control.
 *
 * @package    Neve\Customizer\Controls
 */

namespace Neve\Customizer\Controls;

/**
 * Class Reactive Select
 */
class Reactive_Control extends \WP_Customize_Control {
	/**
	 * The type of customize control being rendered.
	 *
	 * @access public
	 * @var    string
	 */
	public $type = 'select-hiding';

	/**
	 * Subcontrols of each option
	 *
	 * @access public
	 * @var string
	 */
	public $subcontrols = array();

	/**
	 * Parent of control
	 *
	 * @access public
	 * @var string
	 */
	public $parent = '';

	/**
	 * Add custom parameters to pass to the JS via JSON.
	 *
	 * @since  1.1.40
	 * @access public
	 * @return array
	 */
	public function json() {
		$json                = parent::json();
		$json['choices']     = $this->choices;
		$json['link']        = $this->get_link();
		$json['value']       = (array) $this->value();
		$json['id']          = $this->id;
		$json['subcontrols'] = $this->subcontrols;
		$json['parent']      = $this->parent;

		return $json;
	}


	/**
	 * Underscore JS template to handle the control's output.
	 *
	 * @since  1.1.40
	 * @access public
	 * @return void
	 */
	public function content_template() {
		?>
		<# if ( ! data.choices ) {
		return;
		} #>

		<label>
			<# if ( data.label ) { #>
				<span class="customize-control-title">{{ data.label }}</span>
				<# } #>

					<# if ( data.description ) { #>
						<span class="description customize-control-description">{{{ data.description }}}</span>
						<# } #>

							<select {{{ data.link }}}>
								<# _.each( data.choices, function( label, choice ) {

										var selected = '';
										if ( choice === data.value ) {
											selected = 'selected="selected"';
										}
										#>

									<option value="{{ choice }}" {{selected}}>{{ label }}</option>

											<# } ) #>
							</select>
		</label>
		<?php
	}
}
