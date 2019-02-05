<?php
class Hf_Customizer_Control_Textarea extends Hf_Customizer_Control_Base {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-Hf-textarea">';
		self::before_field();
		?>
		<?php echo self::field_header(); ?>
		<div class="Hf-field-settings-inner">
			<textarea rows="10" class="Hf-input" data-name="{{ field.name }}">{{ field.value }}</textarea>
		</div>
		<?php
		self::after_field();
		echo '</script>';
	}
}
