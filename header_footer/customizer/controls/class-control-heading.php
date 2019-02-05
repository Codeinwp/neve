<?php
class Hf_Customizer_Control_Heading extends Hf_Customizer_Control_Base {
	static function field_template() {
		?>
		<script type="text/html" id="tmpl-field-Hf-heading">
		<?php
		self::before_field();
		?>
		<h3 class="Hf-field--heading">{{ field.label }}</h3>
		<?php
		self::after_field();
		?>
		</script>
		<?php
	}
}
