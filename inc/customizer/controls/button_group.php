<?php
/**
 * Button group control.
 *
 * @package Neve\Customizer\Controls
 */

namespace Neve\Customizer\Controls;

/**
 * Class Button_Group
 *
 * @package Neve\Customizer\Controls
 */
class Button_Group extends \WP_Customize_Control {
	/**
	 * Render content for the control.
	 */
	public function render_content() {
		$this->render_control_header();
		$name     = 'nv_radio_' . $this->id;
		$input_id = 'nv_customize-input-' . $this->id;
		?>
		<div class="nv-button-group">
			<?php
			foreach ( $this->choices as $value => $icon_class ) {
				?>
				<input
						id="<?php echo esc_attr( $input_id . '-radio-' . $value ); ?>"
						type="radio"
						value="<?php echo esc_attr( $value ); ?>"
						name="<?php echo esc_attr( $name ); ?>"
					<?php $this->link(); ?>
					<?php checked( $this->value(), $value ); ?>
				/>
				<label for="<?php echo esc_attr( $input_id . '-radio-' . $value ); ?>" class="button">
					<i class="dashicons <?php echo esc_attr( $icon_class ); ?>"></i>
				</label>
			<?php } ?>
		</div>
		<?php
	}

	/**
	 * Render control header.
	 */
	private function render_control_header() {
		if ( empty( $this->label ) && empty( $this->description ) ) {
			return;
		} 
		?>
		<div class="nv-button-group-header">
			<?php if ( ! empty( $this->label ) ) { ?>
				<span class="customize-control-title">
				<span><?php echo esc_html( $this->label ); ?></span>
			</span>
				<?php 
			}
			if ( ! empty( $this->description ) ) { 
				?>
				<label class="nv-radio-description-info"
						for="<?php echo esc_attr( $this->id . '-description-toggle' ); ?>">
					<i class="dashicons dashicons-info"></i>
				</label>
				<input id="<?php echo esc_attr( $this->id . '-description-toggle' ); ?>" type="checkbox"
						class="expand-description">
				<span class="nv-radio-hidden-info"><?php echo esc_html( $this->description ); ?></span>
			<?php } ?>
		</div>
		<?php
	}
}
