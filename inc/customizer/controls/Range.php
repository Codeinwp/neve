<?php
/**
 * The range value customize control.
 *
 * @package    Neve/Customizer/Controls
 * @since      1.0.0
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
	 * Add/remove from fixed value flag
	 *
	 * @var bool
	 */
	public $sum_type = false;

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
	 * Renders the control wrapper and calls $this->render_content() for the internals.
	 *
	 * @see WP_Customize_Control::render()
	 */
	protected function render() {
		$id    = 'customize-control-' . str_replace( array( '[', ']' ), array( '-', '' ), $this->id );
		$class = 'customize-control has-switchers customize-control-' . $this->type;

		?>
		<li id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $class ); ?>">
			<?php $this->render_content(); ?>
		</li>
		<?php
	}

	/**
	 * Handles input value.
	 *
	 * @since 1.1.38
	 * @return array
	 */
	public function json() {
		$json = parent::json();

		$json['value'] = $this->value();

		$json['default_value'] = ! empty( $this->setting->default ) ? $this->setting->default : '0';

		$json['desktop_value'] = ! $this->is_json( $json['value'] ) ? $json['value'] : $json['default_value'];
		$json['tablet_value']  = $json['default_value'];
		$json['mobile_value']  = $json['default_value'];

		if ( $this->is_json( $json['value'] ) ) {
			$decoded_value         = json_decode( $json['value'], true );
			$json['desktop_value'] = $decoded_value['desktop'];
			$json['tablet_value']  = $decoded_value['tablet'];
			$json['mobile_value']  = $decoded_value['mobile'];
		} else {
			$json['desktop_value'] = $json['value'];
		}
		$json['sum_type']    = $this->sum_type;
		$json['media_query'] = $this->media_query;
		$json['link']        = $this->get_link();
		if ( ! $this->contains_array( $this->input_attr ) ) {
			$json['min']  = ! empty( $this->input_attr['min'] ) ? $this->input_attr['min'] : 0;
			$json['max']  = ! empty( $this->input_attr['max'] ) ? $this->input_attr['max'] : 1;
			$json['step'] = ! empty( $this->input_attr['step'] ) ? $this->input_attr['step'] : 1;
		} else {
			foreach ( $this->input_attr as $device => $value ) {
				$json[ $device ] = $value;
			}
		}

		return $json;
	}

	/**
	 * Check if an array contains another array.
	 *
	 * @since 1.1.53
	 *
	 * @param array $array Array to check.
	 *
	 * @return bool
	 */
	private function contains_array( $array ) {
		foreach ( $array as $value ) {
			if ( is_array( $value ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Check if a string is in json format
	 *
	 * @param  string $string Input.
	 *
	 * @since  1.1.31
	 * @access public
	 * @return bool
	 */
	public function is_json( $string ) {
		return is_string( $string ) && is_array( json_decode( $string, true ) ) ? true : false;
	}

	/**
	 * Render the control's content.
	 */
	protected function content_template() {
		?>
		<# if ( data.label ) { #>
		<span class="customize-control-title">
				<span>{{{ data.label }}}</span>
				<# if ( data.description ) { #>
					<i class="dashicons dashicons-editor-help" style="vertical-align: text-bottom;"
							title="{{{ data.description }}}"></i>
				<# } #>
			</span>
		<# if ( data.media_query ) { #>
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
		<# } #>
		<# }
		var min, max, step, default_value;
		if( data.min ){
		min = data.min;
		}
		if( data.max ){
		max = data.max;
		}
		if( data.step ){
		step = data.step;
		}
		if( data.default_value ){
		default_value = data.default_value;
		}

		if( data.desktop ){
		if ( data.desktop.min ){
		min = data.desktop.min;
		}
		if ( data.desktop.max ){
		max = data.desktop.max;
		}
		if ( data.desktop.step ){
		step = data.desktop.step;
		}
		if ( data.desktop.default_value ){
		default_value = data.desktop.default_value;
		}
		}
		if( data.desktop_value ){
		value = data.desktop_value;
		} else {
		if( default_value ) {
		value = default_value;
		}
		}
		if( data.sum_type === true ){
		input_type = 'text';
		} else {
		input_type = 'number';
		}
		#>
		<div class="range-slider <# if ( data.media_query ) { #>has-media-queries<# }#>">
			<div class="desktop control-wrap active">
				<input type="range" class="range-slider__range" title="{{{data.label}}}" min="{{min}}" max="{{max}}"
						step="{{step}}" data-query="desktop" data-default="{{default_value}}" value="{{ value }}">
				<input type="{{input_type}}" class="range-slider-value" title="{{{data.label}}}" min="{{min}}"
						max="{{max}}" step="{{step}}" readonly
						value="<# if( data.sum_type === true && value >= 0 ){ #> +<# } #>{{ value }}">
				<span class="range-reset-slider"><span class="dashicons dashicons-image-rotate"></span></span>
			</div>
			<# if ( data.media_query ) {

			if( data.tablet ){
			if ( data.tablet.min ){
			min = data.tablet.min;
			}
			if ( data.tablet.max ){
			max = data.tablet.max;
			}
			if ( data.tablet.step ){
			step = data.tablet.step;
			}
			if ( data.tablet.default_value ){
			default_value = data.tablet.default_value;
			}
			}
			if( data.tablet_value ){
			value = data.tablet_value;
			} else {
			if( default_value ) {
			value = default_value;
			}
			}
			#>
			<div class="tablet control-wrap">
				<input type="range" class="range-slider__range" title="{{{data.label}}}" min="{{min}}" max="{{max}}"
						step="{{step}}" data-query="tablet" data-default="{{default_value}}" value="{{ value }}">
				<input type="{{input_type}}" class="range-slider-value" title="{{{data.label}}}" min="{{min}}"
						max="{{max}}" step="{{step}}" readonly
						value="<# if( data.sum_type === true && value >= 0 ){ #> +<# } #>{{ value }}">
				<span class="range-reset-slider"><span class="dashicons dashicons-image-rotate"></span></span>
			</div>
			<# if( data.mobile ){
			if ( data.mobile.min ){
			min = data.mobile.min;
			}
			if ( data.mobile.max ){
			max = data.mobile.max;
			}
			if ( data.mobile.step ){
			step = data.mobile.step;
			}
			if ( data.mobile.default_value ){
			default_value = data.mobile.default_value;
			}
			}
			if( data.mobile_value ){
			value = data.mobile_value;
			} else {
			if( default_value ) {
			value = default_value;
			}
			}#>
			<div class="mobile control-wrap">
				<input type="range" class="range-slider__range" title="{{{data.label}}}" min="{{min}}" max="{{max}}"
						step="{{step}}" data-query="mobile" data-default="{{default_value}}" value="{{ value }}">
				<input type="{{input_type}}" class="range-slider-value" title="{{{data.label}}}" min="{{min}}"
						max="{{max}}" step="{{step}}" readonly
						value="<# if( data.sum_type === true && value >= 0 ){ #> +<# } #>{{ value }}">
				<span class="range-reset-slider"><span class="dashicons dashicons-image-rotate"></span></span>
			</div>
			<# } #>
			<input type="hidden" class="range-collector" title="{{{data.label}}}" value="{{ data.value }}" {{{ data.link
					}}}>
		</div>
		<?php
	}

	/**
	 * Utility function.
	 *
	 * Save args to class properties
	 */
	private function args_to_props( $args ) {
		if ( ! empty( $args['media_query'] ) ) {
			$this->media_query = (bool) $args['media_query'];
		}

		if ( ! empty( $args['input_attr'] ) ) {
			$this->input_attr = $args['input_attr'];
		}

		if ( ! empty( $args['sum_type'] ) ) {
			$this->sum_type = $args['sum_type'];
		}
	}
}
