<?php
class Hf_Customizer_Control_Text_Align extends Hf_Customizer_Control_Base {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-Hf-text_align">';
		self::before_field();
		?>
		<#
		var uniqueID = field.name + ( new Date().getTime() );
		#>
		<?php echo self::field_header(); ?>
		<div class="Hf-field-settings-inner">
			<div class="Hf-text-align">
				<label><input type="radio" data-name="{{ field.name }}" value="left" <# if ( field.value == 'left' ){ #> checked="checked" <# } #> name="{{ uniqueID }}"> <span class="button"><span class="dashicons dashicons-editor-alignleft"></span></span></label>
				<label><input type="radio" data-name="{{ field.name }}" value="center" <# if ( field.value == 'center' ){ #> checked="checked" <# } #> name="{{ uniqueID }}"> <span class="button"><span class="dashicons dashicons-editor-aligncenter"></span></span></label>
				<label><input type="radio" data-name="{{ field.name }}" value="right" <# if ( field.value == 'right' ){ #> checked="checked" <# } #> name="{{ uniqueID }}"> <span class="button"><span class="dashicons dashicons-editor-alignright"></span></span></label>
				<# if ( ! field.no_justify ) {  #>
				<label><input type="radio" data-name="{{ field.name }}" value="justify" <# if ( field.value == 'justify' ){ #> checked="checked" <# } #> name="{{ uniqueID }}"> <span class="button"><span class="dashicons dashicons-editor-justify"></span></span></label>
				<# } #>
			</div>
		</div>
		<?php
		self::after_field();
		echo '</script>';
	}
}
