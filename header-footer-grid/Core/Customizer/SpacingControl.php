<?php
/**
 * Spacing Control for Customizer class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Customizer;

use HFG\Core\Settings\Config;
use WP_Customize_Control;

/**
 * Class SpacingControl
 *
 * @package HFG\Core\Customizer
 */
class SpacingControl extends WP_Customize_Control {
	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'hfg-responsive-spacing';
	/**
	 * The control type.
	 *
	 * @access public
	 * @var string
	 */
	public $linked_choices = '';
	/**
	 * The unit type.
	 *
	 * @access public
	 * @var array
	 */
	public $unit_choices = array( 'px' => 'px' );

	/**
	 * Hide the responsive switches.
	 *
	 * @var bool
	 */
	public $hide_responsive_switches = false;

	/**
	 * Enqueue control related scripts/styles.
	 *
	 * @access public
	 */
	public function enqueue() {
		$base = Config::get_url() . '/Core/Customizer/';
		wp_enqueue_script(
			'hfg-responsive-spacing',
			$base . 'responsive-spacing.js',
			array(
				'jquery',
				'customize-base',
			),
			NEVE_VERSION,
			true 
		);
		wp_enqueue_style( 'hfg-responsive-spacing', $base . 'responsive-spacing.css', null, NEVE_VERSION );
	}

	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @see WP_Customize_Control::to_json()
	 */
	public function json() {
		$json            = parent::json();
		$json['default'] = $this->setting->default;
		if ( isset( $this->default ) ) {
			$json['default'] = $this->default;
		}
		$val = maybe_unserialize( $this->value() );
		if ( ! is_array( $val ) || is_numeric( $val ) ) {
			$val = array(
				'desktop'      => array(
					'top'    => $val,
					'right'  => '',
					'bottom' => $val,
					'left'   => '',
				),
				'tablet'       => array(
					'top'    => $val,
					'right'  => '',
					'bottom' => $val,
					'left'   => '',
				),
				'mobile'       => array(
					'top'    => $val,
					'right'  => '',
					'bottom' => $val,
					'left'   => '',
				),
				'desktop-unit' => 'px',
				'tablet-unit'  => 'px',
				'mobile-unit'  => 'px',
			);
		}
		/* Control Units */
		$units = array(
			'desktop-unit' => 'px',
			'tablet-unit'  => 'px',
			'mobile-unit'  => 'px',
		);
		foreach ( $units as $unit_key => $unit_value ) {
			if ( ! isset( $val[ $unit_key ] ) ) {
				$val[ $unit_key ] = $unit_value;
			}
		}
		$json['value']                    = $val;
		$json['choices']                  = $this->choices;
		$json['link']                     = $this->get_link();
		$json['id']                       = $this->id;
		$json['label']                    = esc_html( $this->label );
		$json['linked_choices']           = $this->linked_choices;
		$json['unit_choices']             = $this->unit_choices;
		$json['inputAttrs']               = '';
		$json['hide_responsive_switches'] = $this->hide_responsive_switches;
		foreach ( $this->input_attrs as $attr => $value ) {
			$json['inputAttrs'] .= $attr . '="' . esc_attr( $value ) . '" ';
		}
		$json['inputAttrs'] = maybe_serialize( $this->input_attrs() );

		return $json;
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
		<#
		desktop_unit_val = 'px';
		tablet_unit_val  = 'px';
		mobile_unit_val  = 'px';

		if ( data.value['desktop-unit'] ) {
		desktop_unit_val = data.value['desktop-unit'];
		}

		if ( data.value['tablet-unit'] ) {
		tablet_unit_val = data.value['tablet-unit'];
		}

		if ( data.value['mobile-unit'] ) {
		mobile_unit_val = data.value['mobile-unit'];
		}
		#>
		<label class='hfg-spacing-responsive' for="">
			<div class="hfg-spacing-header">
				<# if ( data.label ) { #>
				<span class="customize-control-title">{{{ data.label }}}</span>
				<# } #>
				<# if( data.hide_responsive_switches === false ) { #>
				<ul class="hfg-spacing-responsive-btns">
					<li class="desktop active">
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
				<div class="hfg-spacing-responsive-units-screen-wrap">
					<div class="unit-input-wrapper hfg-spacing-unit-wrapper">
						<input type='hidden' class='hfg-spacing-unit-input hfg-spacing-desktop-unit'
								data-device='desktop' value='{{desktop_unit_val}}'>
						<input type='hidden' class='hfg-spacing-unit-input hfg-spacing-tablet-unit' data-device='tablet'
								value='{{tablet_unit_val}}'>
						<input type='hidden' class='hfg-spacing-unit-input hfg-spacing-mobile-unit' data-device='mobile'
								value='{{mobile_unit_val}}'>
					</div>
				</div>

				<div class="hfg-units-wrap">
					<ul class="hfg-spacing-responsive-units hfg-spacing-desktop-responsive-units active">
						<#_.each( data.unit_choices, function( unit_key ) {
						unit_class = '';
						if ( desktop_unit_val === unit_key ) {
						unit_class = 'active';
						}
						#>
						<li class='single-unit {{ unit_class }}' data-unit='{{ unit_key }}'>
							<span class="unit-text">{{{ unit_key }}}</span>
						</li>
						<#
						});#>
					</ul>
					<ul class="hfg-spacing-responsive-units hfg-spacing-tablet-responsive-units">
						<#_.each( data.unit_choices, function( unit_key ) {
						unit_class = '';
						if ( tablet_unit_val === unit_key ) {
						unit_class = 'active';
						}
						#>
						<li class='single-unit {{ unit_class }}' data-unit='{{ unit_key }}'>
							<span class="unit-text">{{{ unit_key }}}</span>
						</li>
						<#
						});#>
					</ul>
					<ul class="hfg-spacing-responsive-units hfg-spacing-mobile-responsive-units">
						<#_.each( data.unit_choices, function( unit_key ) {
						unit_class = '';
						if ( mobile_unit_val === unit_key ) {
						unit_class = 'active';
						}
						#>
						<li class='single-unit {{ unit_class }}' data-unit='{{ unit_key }}'>
							<span class="unit-text">{{{ unit_key }}}</span>
						</li>
						<#
						});#>
					</ul>
				</div>
			</div>
			<# if ( data.description ) { #>
			<span class="description customize-control-description">{{{ data.description }}}</span>
			<# } #>

			<div class="hfg-spacing-responsive-outer-wrapper">
				<#
				value_desktop = '';
				value_tablet = '';
				value_mobile = '';

				if ( data.value['desktop'] ) {
				value_desktop = data.value['desktop'];
				}

				if ( data.value['tablet'] ) {
				value_tablet = data.value['tablet'];
				}

				if ( data.value['mobile'] ) {
				value_mobile = data.value['mobile'];
				} #>
				<div class="input-wrapper hfg-spacing-responsive-wrapper">

					<ul class="hfg-spacing-wrapper desktop active"><#
						if ( data.linked_choices ) { #>
						<li class="hfg-spacing-input-item-link">
							<span class="dashicons dashicons-admin-links hfg-spacing-connected wp-ui-highlight"
									data-element-connect="{{ data.id }}" title="{{ data.title }}"></span>
							<span class="dashicons dashicons-editor-unlink hfg-spacing-disconnected"
									data-element-connect="{{ data.id }}" title="{{ data.title }}"></span>
						</li>
						<#
						}
						_.each( data.choices, function( choiceLabel, choiceID ) {
						#>
						<li {{{ data.inputAttrs }}} class='hfg-spacing-input-item'>
							<input type='number' class='hfg-spacing-input hfg-spacing-desktop' data-id='{{ choiceID }}'
									value='{{ value_desktop[ choiceID ] }}'>
							<span class="hfg-spacing-title">{{{ data.choices[ choiceID ] }}}</span>
						</li>
						<#
						}); #>
						<li class="hfg-spacing-input-item-reset">
							<span class="dashicons dashicons-image-rotate" data-device='desktop'></span>
						</li>

					</ul>

					<ul class="hfg-spacing-wrapper tablet"><#

						if ( data.linked_choices ) { #>
						<li class="hfg-spacing-input-item-link">
							<span class="dashicons dashicons-admin-links hfg-spacing-connected wp-ui-highlight"
									data-element-connect="{{ data.id }}" title="{{ data.title }}"></span>
							<span class="dashicons dashicons-editor-unlink hfg-spacing-disconnected"
									data-element-connect="{{ data.id }}" title="{{ data.title }}"></span>
						</li>
						<#
						}
						_.each( data.choices, function( choiceLabel, choiceID ) {
						#>
						<li {{{ data.inputAttrs }}} class='hfg-spacing-input-item'>
							<input type='number' class='hfg-spacing-input hfg-spacing-tablet' data-id='{{ choiceID }}'
									value='{{ value_tablet[ choiceID ] }}'>
							<span class="hfg-spacing-title">{{{ data.choices[ choiceID ] }}}</span>
						</li>
						<#
						}); #>
						<li class="hfg-spacing-input-item-reset">
							<span class="dashicons dashicons-image-rotate" data-device='tablet'></span>
						</li>

					</ul>

					<ul class="hfg-spacing-wrapper mobile"><#
						if ( data.linked_choices ) { #>
						<li class="hfg-spacing-input-item-link">
							<span class="dashicons dashicons-admin-links hfg-spacing-connected wp-ui-highlight"
									data-element-connect="{{ data.id }}" title="{{ data.title }}"></span>
							<span class="dashicons dashicons-editor-unlink hfg-spacing-disconnected"
									data-element-connect="{{ data.id }}" title="{{ data.title }}"></span>
						</li>
						<#
						}
						_.each( data.choices, function( choiceLabel, choiceID ) {
						#>
						<li {{{ data.inputAttrs }}} class='hfg-spacing-input-item'>
							<input type='number' class='hfg-spacing-input hfg-spacing-mobile' data-id='{{ choiceID }}'
									value='{{ value_mobile[ choiceID ] }}'>
							<span class="hfg-spacing-title">{{{ data.choices[ choiceID ] }}}</span>
						</li>
						<#
						}); #>
						<li class="hfg-spacing-input-item-reset">
							<span class="dashicons dashicons-image-rotate" data-device='mobile'></span>
						</li>

					</ul>
				</div>
			</div>
		</label>

		<?php
	}

	/**
	 * Render the control's content.
	 *
	 * @see WP_Customize_Control::render_content()
	 */
	protected function render_content() {
	}
}
