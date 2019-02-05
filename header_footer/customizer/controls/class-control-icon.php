<?php
class Hf_Customizer_Control_Icon extends Hf_Customizer_Control_Base {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-Hf-icon">';
		self::before_field();
		?>
		<#
		if ( ! _.isObject( field.value ) ) {
			field.value = { };
		}
		#>
		<?php echo self::field_header(); ?>
		<div class="Hf-field-settings-inner">
			<div class="Hf--icon-picker">
				<div class="Hf--icon-preview">
					<input type="hidden" class="Hf-input Hf--input-icon-type" data-name="{{ field.name }}-type" value="{{ field.value.type }}">
					<div class="Hf--icon-preview-icon Hf--pick-icon">
						<# if ( field.value.icon ) {  #>
							<i class="{{ field.value.icon }}"></i>
						<# }  #>
					</div>
				</div>
				<input type="text" readonly class="Hf-input Hf--pick-icon Hf--input-icon-name" placeholder="<?php esc_attr_e( 'Pick an icon', 'Hf' ); ?>" data-name="{{ field.name }}" value="{{ field.value.icon }}">
				<span class="Hf--icon-remove" title="<?php esc_attr_e( 'Remove', 'Hf' ); ?>">
					<span class="dashicons dashicons-no-alt"></span>
					<span class="screen-reader-text">
					<?php _e( 'Remove', 'Hf' ); ?></span>
				</span>
			</div>
		</div>
		<?php
		self::after_field();
		echo '</script>';
		?>
		<div id="Hf--sidebar-icons">
			<div class="Hf--sidebar-header">
				<a class="customize-controls-icon-close" href="#">
					<span class="screen-reader-text"><?php _e( 'Cancel', 'Hf' ); ?></span>
				</a>
				<div class="Hf--icon-type-inner">
					<select id="Hf--sidebar-icon-type">
						<option value="all"><?php _e( 'All Icon Types', 'Hf' ); ?></option>
					</select>
				</div>
			</div>
			<div class="Hf--sidebar-search">
				<input type="text" id="Hf--icon-search" placeholder="<?php esc_attr_e( 'Type icon name', 'Hf' ); ?>">
			</div>
			<div id="Hf--icon-browser"></div>
		</div>
		<?php
	}
}
