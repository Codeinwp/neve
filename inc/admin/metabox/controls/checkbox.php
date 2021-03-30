<?php
/**
 * Metabox radio button control.
 *
 * @package Neve\Admin\Metabox\Controls
 */

namespace Neve\Admin\Metabox\Controls;

/**
 * Class Checkbox
 *
 * @package Neve\Admin\Metabox\Controls
 */
class Checkbox extends Control_Base {
	/**
	 * Control type.
	 *
	 * @var string
	 */
	public $type = 'checkbox';

	/**
	 * Render control.
	 *
	 * @return void
	 */
	public function render_content( $post_id ) {
		$value  = $this->get_value( $post_id );
		$markup = '';

		$markup .= '<p>';
		$markup .= '<div class="checkbox-toggle-wrap">';
		$markup .= '<label for="' . esc_attr( $this->id ) . '">';
		$markup .= '<input type="checkbox" id="' . esc_attr( $this->id ) . '" name="' . esc_attr( $this->id ) . '" ';
		if ( $value === 'on' ) {
			$markup .= ' checked="checked" ';
		}
		$markup .= '/>';
		$markup .= esc_html( $this->settings['input_label'] ) . '</label>';
		$markup .= '</div>';
		$markup .= '</p>';

		echo $markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}
