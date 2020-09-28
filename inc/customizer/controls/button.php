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
	 * Text before.
	 *
	 * @var mixed|string
	 */
	public $text_before = '';


	/**
	 * Text after.
	 *
	 * @var mixed|string
	 */
	public $text_after = '';


	/**
	 * Is Button.
	 *
	 * @var bool
	 */
	public $is_button = true;


	/**
	 * Control to focus.
	 *
	 * @var string
	 */
	public $control_to_focus = '';
	/**
	 * Shortcut.
	 *
	 * @var bool
	 */
	public $shortcut = false;

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
		if ( empty( $this->button_text ) ) {
			return;
		}
		$control = $this->is_button ? '' : '<p>';
		if ( ! empty( $this->text_before ) ) {
			$control .= wp_kses_post( $this->text_before ) . ' ';
		}
		$control .= $this->is_button ? '<button ' : '<a ';
		if ( $this->control_to_focus ) {
			$control .= 'data-control-to-focus="' . esc_attr( $this->control_to_focus ) . '"';
		}
		$control .= ' class="' . esc_attr( $this->get_button_classes() ) . '"';
		$control .= $this->is_button ? ' style="display: flex; align-items: center;"' : '';
		$control .= '>';
		$control .= $this->get_icon();
		$control .= esc_html( $this->button_text );
		$control .= $this->is_button ? '</button>' : '</a>';
		if ( ! empty( $this->text_after ) ) {
			$control .= wp_kses_post( $this->text_after );
		}
		if ( $this->is_button ) {
			$control .= '</p>';
		}

		echo $control;  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Get the icon.
	 *
	 * @return string
	 */
	private function get_icon() {
		if ( empty( $this->icon_class ) ) {
			return '';
		}

		return '<i class="dashicons dashicons-' . esc_attr( $this->icon_class ) . '" style="margin-right: 10px"></i>';
	}

	/**
	 * Get the button classes.
	 *
	 * @return string
	 */
	private function get_button_classes() {
		$classes = '';

		if ( $this->is_button ) {
			$classes .= 'button button-secondary';
		}
		if ( $this->shortcut ) {
			$classes .= ' menu-shortcut ';
		}
		if ( $this->button_class ) {
			$classes .= $this->button_class;
		}
		if ( $this->control_to_focus ) {
			$classes .= ' neve-control-focus';
		}

		return $classes;
	}
}
