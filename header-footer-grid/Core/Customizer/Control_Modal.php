<?php
namespace HFG\Core\Customizer;

class Control_Modal extends Control_Base {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-hfg-modal">';
		self::before_field();
		?>
		<?php echo self::field_header(); ?>
		<div class="hfg-actions">
			<a href="#" title="<?php esc_attr_e( 'Reset to default', 'hfg-module' ); ?>" class="action--reset" data-control="{{ field.name }}"><span class="dashicons dashicons-image-rotate"></span></a>
			<a href="#" title="<?php esc_attr_e( 'Toggle edit panel', 'hfg-module' ); ?>" class="action--edit" data-control="{{ field.name }}"><span class="dashicons dashicons-edit"></span></a>
		</div>
		<div class="hfg-field-settings-inner">
			<input type="hidden" class="hfg-hidden-modal-input hfg-only" data-name="{{ field.name }}" value="{{ JSON.stringify( field.value ) }}" data-default="{{ JSON.stringify( field.default ) }}">
		</div>
		<?php
		self::after_field();
		echo '</script>';
		?>
		<script type="text/html" id="tmpl-hfg-modal-settings">
			<div class="hfg-modal-settings">
				<div class="hfg-modal-settings--inner">
					<div class="hfg-modal-settings--fields"></div>
				</div>
			</div>
		</script>
		<?php
	}
}
