<?php
/**
 * The range value customize control.
 *
 * @package    Neve/Customizer/Controls
 * @soundtrack I Still Haven't Found What I'm Looking For - U2 ( manily the sense of _js )
 */

namespace Neve\Customizer\Controls;

/**
 * Class Customizer_Range_Value_Control
 *
 * @package  Neve\Customizer\Controls
 */
class Range extends \WP_Customize_Control {

	/**
	 * Control type
	 *
	 * @var string
	 */
	public $type = 'range-value';

	/**
	 * Enable media queries
	 *
	 * @var bool
	 */
	public $media_query = false;

	/**
	 * Settings for range inputs.
	 *
	 * @var array
	 */
	public $input_attr = array();

	/**
	 * Step size.
	 *
	 * @var string
	 */
	public $step = '';

	/**
	 * Add/remove from fixed value flag
	 *
	 * @var bool
	 */
	public $sum_type = false;

	/**
	 * Hide the responsive switches
	 *
	 * @var bool
	 */
	public $hide_responsive_switches = false;

	/**
	 * Range constructor.
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
	 * Handles input value.
	 *
	 * @return array
	 */
	public function json() {
		$json = parent::json();

		$json['value']                    = json_decode( $this->value(), true );
		$json['link']                     = $this->get_link();
		$json['media_query']              = $this->media_query;
		$json['step']                     = $this->step;
		$json['sum_type']                 = $this->sum_type;
		$json['inputAttr']                = $this->input_attr;
		$json['hide_responsive_switches'] = $this->hide_responsive_switches;

		return $json;
	}

	/**
	 * Render the title for the control.
	 */
	private function render_title() {
		?>
		<# if ( data.label ) { #>
		<span class="customize-control-title">
				<span>{{{ data.label }}}</span>
				<# if ( data.description ) { #>
					<i class="dashicons dashicons-editor-help" style="vertical-align: text-bottom;"
							title="{{{ data.description }}}"></i>
				<# } #>
		</span>
		<# if( data.media_query === true && data.hide_responsive_switches === false ) { #>
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
	 * Render the input.
	 */
	private function render_input() {
		?>
		<#
		var type = data.sum_type ? 'text' : 'number';
		var value = data.value ? data.value[mediaQuery] : attr.default;
		if( ! data.media_query ) {
		value = data.value? data.value : attr.default
		}
		var active = mediaQuery === 'desktop' ? 'active' : '';

		if( data.sum_type ) { value = '+' + value; }
		#>
		<div class="{{mediaQuery}} control-wrap {{active}}">
			<input
					class="range-slider__range"
					type="range"
					min="{{attr.min}}"
					max="{{attr.max}}"
					step="{{data.step}}"
					data-query="{{mediaQuery}}"
					data-default="{{attr.default}}"
					value="{{ value }}"
			>
			<input
			<# if( data.sum_type ) { #>
			readonly
			<# } #>
			class="range-slider-value"
			type="{{type}}"
			title="{{{data.label}}}"
			min="{{attr.min}}"
			max="{{attr.max}}"
			step="{{data.step}}"
			value="{{ value }}"
			>
			<span class="range-reset-slider"><span class="dashicons dashicons-image-rotate"></span></span>
		</div>
		<?php
	}

	/**
	 * Render the control's content.
	 */
	protected function content_template() {
		$this->render_title();
		?>
		<# var wrapClass = data.media_query ? 'has-media-queries' : ''; #>
		<div class="range-slider {{wrapClass}}">
		<# if( data.media_query === true ) { #>
		<# _.each( data.inputAttr, function( attr, mediaQuery ) { #>
		<?php $this->render_input(); ?>
		<# } ) #>
		<# } else {
		var mediaQuery = 'desktop';
		var attr = data.inputAttr; #>
		<?php $this->render_input(); ?>
		<# } #>
		<input
				type="hidden"
				class="range-collector"
				title="{{{data.label}}}"
				value="{{data.value}}"
				{{{data.link}}}
		>
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
			$this->media_query = (bool) $args['media_query'];
		}

		if ( ! isset( $this->input_attr['mobile'] ) || ! isset( $this->input_attr['tablet'] ) || ! isset( $this->input_attr['desktop'] ) ) {
			$this->media_query = false;
		}

		if ( ! empty( $args['sum_type'] ) ) {
			$this->sum_type = $args['sum_type'];
		}

		if ( ! empty( $args['step'] ) ) {
			$this->step = $args['step'];
		}
	}
}
