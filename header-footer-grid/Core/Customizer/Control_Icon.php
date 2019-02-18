<?php
namespace HFG\Core\Customizer;

class Control_Icon extends Control_Base {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-hfg-icon">';
		self::before_field();
		?>
		<#
		if ( ! _.isObject( field.value ) ) {
			field.value = { };
		}
		#>
		<?php echo self::field_header(); ?>
		<div class="hfg-field-settings-inner">
			<div class="hfg--icon-picker">
				<div class="hfg--icon-preview">
					<input type="hidden" class="hfg-input hfg--input-icon-type" data-name="{{ field.name }}-type" value="{{ field.value.type }}">
					<div class="hfg--icon-preview-icon hfg--pick-icon">
						<# if ( field.value.icon ) {  #>
							<i class="{{ field.value.icon }}"></i>
						<# }  #>
					</div>
				</div>
				<input type="text" readonly class="hfg-input hfg--pick-icon hfg--input-icon-name" placeholder="<?php esc_attr_e( 'Pick an icon', 'hfg-module' ); ?>" data-name="{{ field.name }}" value="{{ field.value.icon }}">
				<span class="hfg--icon-remove" title="<?php esc_attr_e( 'Remove', 'hfg-module' ); ?>">
					<span class="dashicons dashicons-no-alt"></span>
					<span class="screen-reader-text">
					<?php _e( 'Remove', 'hfg-module' ); ?></span>
				</span>
			</div>
		</div>
		<?php
		self::after_field();
		echo '</script>';
		?>
		<div id="hfg--sidebar-icons">
			<div class="hfg--sidebar-header">
				<a class="customize-controls-icon-close" href="#">
					<span class="screen-reader-text"><?php _e( 'Cancel', 'hfg-module' ); ?></span>
				</a>
				<div class="hfg--icon-type-inner">
					<select id="hfg--sidebar-icon-type">
						<option value="all"><?php _e( 'All Icon Types', 'hfg-module' ); ?></option>
					</select>
				</div>
			</div>
			<div class="hfg--sidebar-search">
				<input type="text" id="hfg--icon-search" placeholder="<?php esc_attr_e( 'Type icon name', 'hfg-module' ); ?>">
			</div>
			<div id="hfg--icon-browser"></div>
		</div>
		<?php
	}
}
