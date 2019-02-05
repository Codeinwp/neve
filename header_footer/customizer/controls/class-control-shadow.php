<?php
class Hf_Customizer_Control_Shadow extends Hf_Customizer_Control_Base {
	static function field_template() {
		echo '<script type="text/html" id="tmpl-field-Hf-shadow">';
		self::before_field();
		?>
		<#
			if ( ! _.isObject( field.value ) ) {
			field.value = { };
			}

			var uniqueID = field.name + ( new Date().getTime() );
		#>
			<?php echo self::field_header(); ?>
			<div class="Hf-field-settings-inner">

				<div class="Hf-input-color" data-default="{{ field.default }}">
					<input type="hidden" class="Hf-input Hf-input--color" data-name="{{ field.name }}-color" value="{{ field.value.color }}">
					<input type="text" class="Hf--color-panel" data-alpha="true" value="{{ field.value.color }}">
				</div>

				<div class="Hf--gr-inputs">
					<span>
						<input type="number" class="Hf-input Hf-input-css change-by-js"  data-name="{{ field.name }}-x" value="{{ field.value.x }}">
						<span class="Hf--small-label"><?php _e( 'X', 'Hf' ); ?></span>
					</span>
					<span>
						<input type="number" class="Hf-input Hf-input-css change-by-js"  data-name="{{ field.name }}-y" value="{{ field.value.y }}">
						<span class="Hf--small-label"><?php _e( 'Y', 'Hf' ); ?></span>
					</span>
					<span>
						<input type="number" class="Hf-input Hf-input-css change-by-js" data-name="{{ field.name }}-blur" value="{{ field.value.blur }}">
						<span class="Hf--small-label"><?php _e( 'Blur', 'Hf' ); ?></span>
					</span>
					<span>
						<input type="number" class="Hf-input Hf-input-css change-by-js" data-name="{{ field.name }}-spread" value="{{ field.value.spread }}">
						<span class="Hf--small-label"><?php _e( 'Spread', 'Hf' ); ?></span>
					</span>
					<span>
						<span class="input">
							<input type="checkbox" class="Hf-input Hf-input-css change-by-js" <# if ( field.value.inset == 1 ){ #> checked="checked" <# } #> data-name="{{ field.name }}-inset" value="{{ field.value.inset }}">
						</span>
						<span class="Hf--small-label"><?php _e( 'inset', 'Hf' ); ?></span>
					</span>
				</div>
			</div>
			<?php
			self::after_field();
			echo '</script>';
	}
}
