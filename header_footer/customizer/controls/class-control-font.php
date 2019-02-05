<?php
class Hf_Customizer_Control_Font extends Hf_Customizer_Control_Base {
	static function field_template() {
		?>
		<script type="text/html" id="tmpl-field-Hf-css-ruler">
		<?php
		self::before_field();
		?>
		<?php echo self::field_header(); ?>
		<div class="Hf-field-settings-inner">
			<input type="hidden" class="Hf--font-type" data-name="{{ field.name }}-type" >
			<div class="Hf--font-families-wrapper">
				<select class="Hf--font-families" data-value="{{ JSON.stringify( field.value ) }}" data-name="{{ field.name }}-font"></select>
			</div>
			<div class="Hf--font-variants-wrapper">
				<label><?php _e( 'Variants', 'Hf' ); ?></label>
				<select class="Hf--font-variants" data-name="{{ field.name }}-variant"></select>
			</div>
			<div class="Hf--font-subsets-wrapper">
				<label><?php _e( 'Languages', 'Hf' ); ?></label>
				<div data-name="{{ field.name }}-subsets" class="list-subsets">
				</div>
			</div>
		</div>
		<?php
		self::after_field();
		?>
		</script>
		<?php
	}
}
