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
	 * Additional CSS class.
	 *
	 * @since  3.8.0
	 * @var string
	 */
	public $class = '';

	/**
	 * Use primary button class.
	 *
	 * @since  3.8.0
	 * @var string
	 */
	public $use_primary = '';

	/**
	 * Render Method
	 *
	 * @return void
	 */
	public function render_content() {
		$base_class   = 'nv-simple-upsell';
		$class        = ( ! empty( $this->class ) ) ? $base_class . ' ' . $this->class : $base_class;
		$button_class = ( ! empty( $this->use_primary ) ) ? 'button-primary' : 'button-secondary';
		?>
		<div class="<?php echo esc_attr( $class ); ?>">
			<?php if ( ! empty( $this->text ) ) { ?>
				<p><?php echo esc_html( $this->text ); ?></p>
			<?php } ?>
			<?php if ( ! empty( $this->link ) && ! empty( $this->button_text ) ) { ?>
				<a target="_blank" rel="external noreferrer noopener" href="<?php echo esc_url( $this->link ); ?>" class='button <?php echo esc_attr( $button_class ); ?>'>
					<?php echo esc_html( $this->button_text ); ?>
					<span class="components-visually-hidden"><?php echo esc_html__( '(opens in a new tab)', 'neve' ); ?></span>
				</a>
			<?php } ?>
		</div>
		<?php
	}
}
