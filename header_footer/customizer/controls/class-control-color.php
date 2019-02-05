<?php
class Hf_Customizer_Control_Color extends Hf_Customizer_Control_Base {
	static function field_template() {
		?>
		<script type="text/html" id="tmpl-field-Hf-color">
		<?php
		self::before_field();
		?>
		<?php echo self::field_header(); ?>
		<div class="Hf-field-settings-inner">
			<div class="Hf-input-color" data-default="{{ field.default }}">
				<input type="hidden" class="Hf-input Hf-input--color" data-name="{{ field.name }}" value="{{ field.value }}">
				<input type="text" class="Hf--color-panel" placeholder="{{ field.placeholder }}" data-alpha="true" value="{{ field.value }}">
			</div>
		</div>
		<?php
		self::after_field();
		?>
		</script>
		<?php
	}
}
