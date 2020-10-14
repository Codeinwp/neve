<?php
/**
 * Simple upsell control.
 *
 * @package Neve
 */

namespace Neve\Customizer\Controls;

/**
 * Simple Upsell Control.
 *
 * @since  2.8.3
 * @access public
 */
class Simple_Upsell extends \WP_Customize_Control {

	/**
	 * The type of customize control being rendered.
	 *
	 * @since  2.8.3
	 * @var   string
	 */
	public $type = 'nv_simple_upsell';

	/**
	 * Button text.
	 *
	 * @since  2.8.3
	 * @var   string
	 */
	public $button_text = '';

	/**
	 * Button link.
	 *
	 * @since  2.8.3
	 * @var   string
	 */
	public $link = '';

	/**
	 * List of features.
	 *
	 * @since  2.8.3
	 * @var   string
	 */
	public $text = '';

	/**
	 * Render Method
	 *
	 * @return void
	 */
	public function render_content() {
		?>
		<div class="nv-simple-upsell">
			<?php if ( ! empty( $this->text ) ) { ?>
				<p><?php echo esc_html( $this->text ); ?></p>
			<?php } ?>
			<?php if ( ! empty( $this->link ) && ! empty( $this->button_text ) ) { ?>
				<a href="<?php echo esc_url( $this->link ); ?>" class='button button-secondary'>
					<?php echo esc_html( $this->button_text ); ?>
				</a>
			<?php } ?>
		</div>
		<?php
	}
}
