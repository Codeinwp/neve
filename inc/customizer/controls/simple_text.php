<?php
/**
 * Simple text control.
 *
 * @package Neve
 */

namespace Neve\Customizer\Controls;

/**
 * Simple text Control.
 *
 * @since  2.8.3
 * @access public
 */
class Simple_Text extends \WP_Customize_Control {

	/**
	 * The type of customize control being rendered.
	 *
	 * @since  2.8.3
	 * @var   string
	 */
	public $type = 'nv_simple_text';

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
		<div class="nv-simple-text">
			<?php if ( ! empty( $this->text ) ) { ?>
				<p><?php echo esc_html( $this->text ); ?></p>
			<?php } ?>
		</div>
		<?php
	}
}
