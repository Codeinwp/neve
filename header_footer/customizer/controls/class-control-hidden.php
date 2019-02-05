<?php
class Hf_Customizer_Control_Hidden extends Hf_Customizer_Control_Base {
	static function field_template() {
		?>
		<script type="text/html" id="tmpl-field-Hf-hidden">
		<?php
		self::before_field();
		?>
		<input type="hidden" class="Hf-input Hf-only" data-name="{{ field.name }}" value="{{ field.value }}">
		<?php
		self::after_field();
		?>
		</script>
		<?php
	}
}
