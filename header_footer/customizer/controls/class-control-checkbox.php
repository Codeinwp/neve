<?php
class Hf_Customizer_Control_Checkbox extends Hf_Customizer_Control_Base {

	static function before_field() {
		?>
		<#
		var required = '';
		if ( ! _.isUndefined( field.required ) ) {
			required = JSON.stringify( field.required  );
		}
		#>
		<div class="Hf--field dadsa Hf--field-{{ field.type }} {{ field.class }} Hf--field-name-{{ field.original_name }}" data-required="{{ required }}" data-field-name="{{ field.name }}">
		<?php
	}


	static function field_template() {
		?>
		<script type="text/html" id="tmpl-field-Hf-checkbox">
		<?php
		self::before_field();
		?>
		<?php echo self::field_header(); ?>
		<div class="Hf-field-settings-inner">
			<label>

				<span class="onoffswitch">
					<input type="checkbox" class="onoffswitch-checkbox Hf-input" <# if ( field.value == 1 ){ #> checked="checked" <# } #> data-name="{{ field.name }}" value="1">
					<span class="onoffswitch-label">
						<span class="onoffswitch-inner"></span>
						<span class="onoffswitch-switch"></span>
					</span>
				</span>

				<span class="checkbox-field-text">
					{{{ field.checkbox_label }}}
				</span>
			</label>
		</div>
		<?php
		self::after_field();
		?>
		</script>
		<?php
	}
}
