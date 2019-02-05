<?php
class Hf_Customizer_Control_Styling extends Hf_Customizer_Control_Modal {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-Hf-styling">';
		self::before_field();
		?>
		<?php echo self::field_header(); ?>
		<div class="Hf-actions">
			<a href="#" title="<?php esc_attr_e( 'Reset to default', 'Hf' ); ?>" class="action--reset" data-control="{{ field.name }}"><span class="dashicons dashicons-image-rotate"></span></a>
			<a href="#" title="<?php esc_attr_e( 'Toggle edit panel', 'Hf' ); ?>" class="action--edit" data-control="{{ field.name }}"><span class="dashicons dashicons-edit"></span></a>
		</div>
		<div class="Hf-field-settings-inner">
			<input type="hidden" class="Hf-hidden-modal-input Hf-only" data-name="{{ field.name }}" value="{{ JSON.stringify( field.value ) }}" data-default="{{ JSON.stringify( field.default ) }}">
		</div>
		<?php
		self::after_field();
		echo '</script>';
		?>
		<script type="text/html" id="tmpl-Hf-modal-settings">
			<div class="Hf-modal-settings">
				<div class="Hf-modal-settings--inner">
					<div class="Hf-modal-settings--fields"></div>
				</div>
			</div>
		</script>
		<?php
	}
}
