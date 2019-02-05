<?php
class Hf_Customizer_Control_Slider extends Hf_Customizer_Control_Base {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-Hf-slider">';
		self::before_field();
		?>
		<#
		if ( ! _.isObject( field.value ) ) {
			field.value = { unit: 'px' };
		}
		var uniqueID = field.name + ( new Date().getTime() );

		if ( ! field.device_settings ) {
			if ( ! _.isObject( field.default  ) ) {
				field.default = {
					unit: 'px',
					value: field.default
				}
			}
			if ( _.isUndefined( field.value.value ) || ! field.value.value ) {
				field.value.value = field.default.value;
			}

		} else {
			_.each( field.default, function( value, device ){
				if ( ! _.isObject( value  ) ) {
					value = {
						unit: 'px',
						value: value
					}
				}
				field.default[device] = value;
			} );

			try {
				if ( ! _.isUndefined( field.default[field._current_device] ) ) {
					if ( field._current_device ) {
						field.default = field.default[field._current_device];
					}
				}
			} catch ( e ) {

			}
		}
		#>
		<?php echo self::field_header(); ?>
		<div class="Hf-field-settings-inner">
			<div class="Hf-input-slider-wrapper">
				<div class="Hf--css-unit">
					<label class="<# if ( field.value.unit == 'px' || ! field.value.unit ){ #> Hf--label-active <# } #>">
						<# if ( field.unit ) { #>
							{{ field.unit }}
						<#  } else {  #>
						<?php _e( 'px', 'Hf' ); ?>
						<#  } #>
						<input type="radio" class="Hf-input Hf--label-parent change-by-js" <# if ( field.value.unit == 'px' || ! field.value.unit ){ #> checked="checked" <# } #> data-name="{{ field.name }}-unit" name="r{{ uniqueID }}" value="px">
					</label>
					<a href="#" class="reset" title="<?php esc_attr_e( 'Reset', 'Hf' ); ?>"></a>
				</div>
				<div data-min="{{ field.min }}" data-default="{{ JSON.stringify( field.default ) }}" data-step="{{ field.step }}" data-max="{{ field.max }}" class="Hf-input-slider"></div>
				<input type="number" min="{{ field.min }}" step="{{ field.step }}" max="{{ field.max }}" class="Hf--slider-input Hf-input" data-name="{{ field.name }}-value" value="{{ field.value.value }}" size="4">
			</div>
		</div>
		<?php
		self::after_field();
		echo '</script>';
	}
}
