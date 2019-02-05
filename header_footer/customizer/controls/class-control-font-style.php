<?php
class Hf_Customizer_Control_Font_Style extends Hf_Customizer_Control_Base {
	static function field_template() {
		?>
		<script type="text/html" id="tmpl-field-Hf-font-style">
		<?php
		self::before_field();
		?>
		<?php echo self::field_header(); ?>
		<#
		if ( ! _.isObject( field.value ) ) {
			field.value = { };
		}
		#>
		<div class="Hf-field-settings-inner Hf--font-style">
			<label title="<?php esc_attr_e( 'Bold', 'Hf' ); ?>" class="button <# if ( field.value.b == 1 ){ #> Hf--checked <# } #>"><input type="checkbox" <# if ( field.value.b == 1 ){ #> checked="checked" <# } #> data-name="{{ field.name }}-b" value="1"><span class="dashicons dashicons-editor-bold"></span></label>
			<label title="<?php esc_attr_e( 'Italic', 'Hf' ); ?>" class="button <# if ( field.value.i == 1 ){ #> Hf--checked <# } #>"><input type="checkbox" <# if ( field.value.i == 1 ){ #> checked="checked" <# } #> data-name="{{ field.name }}-i" value="1"><span class="dashicons dashicons-editor-italic"></span></label>
			<label title="<?php esc_attr_e( 'Underline', 'Hf' ); ?>" class="button <# if ( field.value.u == 1 ){ #> Hf--checked <# } #>"><input type="checkbox" <# if ( field.value.u == 1 ){ #> checked="checked" <# } #> data-name="{{ field.name }}-u" value="1"><span class="dashicons dashicons-editor-underline"></span></label>
			<label title="<?php esc_attr_e( 'Strikethrough', 'Hf' ); ?>" class="button <# if ( field.value.s == 1 ){ #> Hf--checked <# } #>"><input type="checkbox" <# if ( field.value.s == 1 ){ #> checked="checked" <# } #> data-name="{{ field.name }}-s" value="1"><span class="dashicons dashicons-editor-strikethrough"></span></label>
			<label title="<?php esc_attr_e( 'Uppercase', 'Hf' ); ?>" class="button <# if ( field.value.t == 1 ){ #> Hf--checked <# } #>"><input type="checkbox" <# if ( field.value.t == 1 ){ #> checked="checked" <# } #> data-name="{{ field.name }}-t" value="1"><span class="dashicons dashicons-editor-textcolor"></span></label>
		</div>
		<?php
		self::after_field();
		?>
		</script>
		<?php
	}
}
