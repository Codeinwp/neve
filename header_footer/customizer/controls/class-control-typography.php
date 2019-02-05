<?php
class Hf_Customizer_Control_Typography extends Hf_Customizer_Control_Base {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-Hf-typography">';
		self::before_field();
		?>
		<?php echo self::field_header(); ?>
		<div class="Hf-actions">
			<a href="#" class="action--reset" data-control="{{ field.name }}" title="<?php esc_attr_e( 'Reset to default', 'Hf' ); ?>"><span class="dashicons dashicons-image-rotate"></span></a>
			<a href="#" class="action--edit" data-control="{{ field.name }}" title="<?php esc_attr_e( 'Toggle edit panel', 'Hf' ); ?>"><span class="dashicons dashicons-edit"></span></a>
		</div>
		<div class="Hf-field-settings-inner">
			<input type="hidden" class="Hf-typography-input Hf-only" data-name="{{ field.name }}" value="{{ JSON.stringify( field.value ) }}" data-default="{{ JSON.stringify( field.default ) }}">
		</div>
		<?php
		self::after_field();
		echo '</script>';
		?>
		<div id="Hf-typography-panel" class="Hf-typography-panel">
			<div class="Hf-typography-panel--inner">
				<input type="hidden" id="Hf--font-type">
				<div id="Hf-typography-panel--fields"></div>
			</div>
		</div>
		<?php
	}
}
