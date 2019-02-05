<?php

class Hf_Customizer_Control_Repeater extends Hf_Customizer_Control_Base {
	static function field_template() {
		?>
		<script type="text/html" id="tmpl-field-Hf-repeater">
			<?php
			self::before_field();
			?>
			<?php echo self::field_header(); ?>
			<div class="Hf-field-settings-inner">
			</div>
			<?php
			self::after_field();
			?>
		</script>
		<script type="text/html" id="tmpl-customize-control-repeater-item">
			<div class="Hf--repeater-item">
				<div class="Hf--repeater-item-heading">
					<label class="Hf--repeater-visible" title="<?php esc_attr_e( 'Toggle item visible', 'Hf' ); ?>">
						<input type="checkbox" class="r-visible-input">
						<span class="r-visible-icon"></span>
						<span class="screen-reader-text"><?php _e( 'Show', 'Hf' ); ?></label>
					<span class="Hf--repeater-live-title"></span>
					<div class="Hf-nav-reorder">
						<span class="Hf--down" tabindex="-1">
							<span class="screen-reader-text"><?php _e( 'Move Down', 'Hf' ); ?></span></span>
						<span class="Hf--up" tabindex="0">
							<span class="screen-reader-text"><?php _e( 'Move Up', 'Hf' ); ?></span>
						</span>
					</div>
					<a href="#" class="Hf--repeater-item-toggle">
						<span class="screen-reader-text"><?php _e( 'Close', 'Hf' ); ?></span></a>
				</div>
				<div class="Hf--repeater-item-settings">
					<div class="Hf--repeater-item-inside">
						<div class="Hf--repeater-item-inner"></div>
						<# if ( data.addable ){ #>
						<a href="#" class="Hf--remove"><?php _e( 'Remove', 'Hf' ); ?></a>
						<# } #>
					</div>
				</div>
			</div>
		</script>
		<script type="text/html" id="tmpl-customize-control-repeater-inner">
			<div class="Hf--repeater-inner">
				<div class="Hf--settings-fields Hf--repeater-items"></div>
				<div class="Hf--repeater-actions">
				<a href="#" class="Hf--repeater-reorder"
				data-text="<?php esc_attr_e( 'Reorder', 'Hf' ); ?>"
				data-done="<?php _e( 'Done', 'Hf' ); ?>"><?php _e( 'Reorder', 'Hf' ); ?></a>
					<# if ( data.addable ){ #>
					<button type="button"
							class="button Hf--repeater-add-new"><?php _e( 'Add an item', 'Hf' ); ?></button>
					<# } #>
				</div>
			</div>
		</script>
		<?php
	}
}
