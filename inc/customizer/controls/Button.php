<?php
/**
 * Customizer functionality for the Blog settings panel.
 *
 * @package Neve\Customizer\Controls
 * @since   1.0.0
 */

namespace Neve\Customizer\Controls;

/**
 * A customizer control to display text in customizer.
 *
 * @since 1.0.0
 */
class Button extends \WP_Customize_Control {

	/**
	 * Control id
	 *
	 * @var string $id Control id.
	 */
	public $id = '';

	/**
	 * Button class.
	 *
	 * @var mixed|string
	 */
	public $button_class = '';

	/**
	 * Icon class.
	 *
	 * @var mixed|string
	 */
	public $icon_class = '';

	/**
	 * Button text.
	 *
	 * @var mixed|string
	 */
	public $button_text = '';

	/**
	 * Constructor.
	 *
	 * @param \WP_Customize_Manager $manager Customizer manager.
	 * @param string                $id      Control id.
	 * @param array                 $args    Argument.
	 */
	public function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );
		$this->id = $id;
	}

	/**
	 * Render content for the control.
	 *
	 * @since 1.0.0
	 */
	public function render_content() {
		if ( ! empty( $this->button_text ) ) {
			echo '<button type="button" class="button menu-shortcut ' . esc_attr( $this->button_class ) . '" tabindex="0">';
			if ( ! empty( $this->button_class ) ) {
				echo '<i class="fa ' . esc_attr( $this->icon_class ) . '" style="margin-right: 10px"></i>';
			}
			echo esc_html( $this->button_text );
			echo '</button>';
		}
	}
}
