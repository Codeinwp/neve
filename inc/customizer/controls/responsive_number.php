<?php
/**
 * Responsive number input control.
 *
 * @package    Neve\Customizer\Controls
 */

namespace Neve\Customizer\Controls;

/**
 * A text control with validation for CSS units.
 */
class Responsive_Number extends \WP_Customize_Control {

	/**
	 * Control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'responsive-number';

	/**
	 * Responsive flag.
	 *
	 * @access public
	 * @var string
	 */
	public $responsive = true;

	/**
	 * Allowed Units.
	 *
	 * @access public
	 * @var array
	 */
	public $units = array();

	/**
	 * Settings for input.
	 *
	 * @var array
	 */
	public $input_attr = array();

	/**
	 * Responsive_Number constructor.
	 *
	 * @param \WP_Customize_Manager $manager Customize manager.
	 * @param string                $id      Control id.
	 * @param array                 $args    Control arguments.
	 */
	public function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );
		$this->args_to_props( $args );
	}

	/**
	 * Send the parameters via JSON.
	 */
	public function json() {
		$json = parent::json();

		$json['default'] = $this->setting->default;
		if ( isset( $this->default ) ) {
			$json['default'] = $this->default;
		}

		$json['value']      = json_decode( $this->value(), true );
		$json['link']       = $this->get_link();
		$json['id']         = $this->id;
		$json['label']      = esc_html( $this->label );
		$json['units']      = $this->units;
		$json['responsive'] = $this->responsive;
		$json['inputAttr']  = $this->input_attr;

		return $json;
	}

	/**
	 * Render the control
	 *
	 * @access protected
	 */
	protected function content_template() {
		$this->render_title();
		?>

		<# var wrapClass = data.responsive ? 'has-media-queries' : ''; #>
		<# wrapClass += data.units.length ? '' : 'no-units'; #>
		<div class="responsive-number {{wrapClass}}">
			<div class="controls--wrap">
				<# if( data.responsive === true ) { #>
				<# _.each( data.inputAttr, function( attr, mediaQuery ) { #>
				<?php $this->render_input(); ?>
				<# } ) #>
				<# } else {
				var mediaQuery = 'desktop';
				var attr = data.inputAttr; #>
				<?php $this->render_input(); ?>
				<# } #>
				<span class="reset-number-input"><span class="dashicons dashicons-image-rotate"></span></span>
			</div>
			<input
					type="hidden"
					class="responsive-number-collector"
					title="{{data.label}}"
					value="{{data.value}}"
					{{{data.link}}}  <?php // phpcs:ignore WordPressVIPMinimum.Security.Mustache.OutputNotation ?>
			>
		</div>
		<?php
	}

	/**
	 * Render the input.
	 */
	private function render_input() {
		?>
		<#
		var value = data.value ? data.value[mediaQuery] : attr.default;
		var suffix = '';
		if( data.value ) {
		suffix = data.value.suffix ? data.value.suffix[mediaQuery] : attr.default_unit;
		}

		if( ! data.responsive ) {
		value = data.value? data.value : attr.default
		}
		var active = mediaQuery === 'desktop' ? 'active' : '';
		#>

		<div class="{{mediaQuery}} control-wrap {{active}}">
			<input
					class="responsive-number--input <# if( ! data.units ){ #>no-units<# } #>"
					type="number"
			<# if( attr.min ) {	#>
			min="{{attr.min}}"
			<# }
			if ( attr.max ) { #>
			max="{{attr.max}}"
			<# } #>
			data-query="{{mediaQuery}}"
			data-default="{{attr.default}}"
			value="{{ value }}"
			/>
			<# if( data.units.length ) {
			var disabled = data.units.length === 1 ? 'disabled' : '';
			#>
			<select class="responsive-number--select" {{disabled}} data-default="{{attr.default_unit}}">
				<# _.each( data.units, function( val ) {
				var defaultUnit = val === suffix ? 'selected="selected"' : '';
				#>
				<option value="{{val}}" {{defaultUnit}}>{{val}}</option>
				<# } ) #>
			</select>
			<# } #>
		</div>
		<?php
	}

	/**
	 * Render the title for the control.
	 */
	private function render_title() {
		?>
		<# if ( data.label ) { #>
		<span class="customize-control-title" style="display: inline-block;">
				<span>{{ data.label }}</span>
				<# if ( data.description ) { #>
					<i class="dashicons dashicons-editor-help" style="vertical-align: text-bottom;"
							title="{{ data.description }}"></i>
				<# } #>
		</span>
		<# if( data.responsive === true ) { #>
		<?php $this->render_responsive_switches(); ?>
		<# } #>
		<# } #>
		<?php
	}

	/**
	 * Render the responsive switches.
	 */
	private function render_responsive_switches() {
		?>
		<ul class="responsive-switchers">
			<li class="desktop">
				<button type="button" class="preview-desktop active" data-device="desktop">
					<i class="dashicons dashicons-desktop"></i>
				</button>
			</li>
			<li class="tablet">
				<button type="button" class="preview-tablet" data-device="tablet">
					<i class="dashicons dashicons-tablet"></i>
				</button>
			</li>
			<li class="mobile">
				<button type="button" class="preview-mobile" data-device="mobile">
					<i class="dashicons dashicons-smartphone"></i>
				</button>
			</li>
		</ul>
		<?php
	}

	/**
	 * Transform arguments to object properties
	 */
	private function args_to_props( $args ) {
		if ( ! empty( $args['input_attr'] ) ) {
			$this->input_attr = $args['input_attr'];
		}

		if ( ! empty( $args['media_query'] ) ) {
			$this->responsive = (bool) $args['responsive'];
		}

		if ( ! isset( $this->input_attr['mobile'] ) || ! isset( $this->input_attr['tablet'] ) || ! isset( $this->input_attr['desktop'] ) ) {
			$this->responsive = false;
		}
	}
}
