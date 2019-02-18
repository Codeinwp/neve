<?php
namespace HFG\Core\Customizer;

class Control_Typography extends Control_Base {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-hfg-typography">';
		self::before_field();
		?>
		<?php echo self::field_header(); ?>
		<div class="hfg-actions">
			<a href="#" class="action--reset" data-control="{{ field.name }}" title="<?php esc_attr_e( 'Reset to default', 'hfg-module' ); ?>"><span class="dashicons dashicons-image-rotate"></span></a>
			<a href="#" class="action--edit" data-control="{{ field.name }}" title="<?php esc_attr_e( 'Toggle edit panel', 'hfg-module' ); ?>"><span class="dashicons dashicons-edit"></span></a>
		</div>
		<div class="hfg-field-settings-inner">
			<input type="hidden" class="hfg-typography-input hfg-only" data-name="{{ field.name }}" value="{{ JSON.stringify( field.value ) }}" data-default="{{ JSON.stringify( field.default ) }}">
		</div>
		<?php
		self::after_field();
		echo '</script>';
		?>
		<div id="hfg-typography-panel" class="hfg-typography-panel">
			<div class="hfg-typography-panel--inner">
				<input type="hidden" id="hfg--font-type">
				<div id="hfg-typography-panel--fields"></div>
			</div>
		</div>
		<?php
	}
}
