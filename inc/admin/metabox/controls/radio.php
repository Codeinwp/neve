<?php
/**
 * Metabox radio button control.
 *
 * @package Neve\Admin\Metabox\Controls
 */

namespace Neve\Admin\Metabox\Controls;

/**
 * Class Radio
 *
 * @package Neve\Admin\Metabox\Controls
 */
class Radio extends Control_Base {
	/**
	 * Render control.
	 *
	 * @return void
	 */
	public function render_content( $post_id ) {
		$selected = $this->get_value( $post_id );
		$markup   = '<style>#neve-page-settings label{ display: block; margin-bottom: 5px;}</style>';
		$markup  .= '<p>';
		foreach ( $this->settings['choices'] as $value => $choice ) {
			$markup .= '<label for="' . $this->id . '_' . $value . '">';
			$markup .= '<input type="radio" value="' . $value . '" id="' . $this->id . '_' . $value . '" name="' . $this->id . '"';
			$markup .= checked( $selected ? $selected : $this->settings['default'], $value, false );
			$markup .= '/>';
			$markup .= $choice . '</label>';
		}
		$markup .= '</p>';

		echo $markup;
	}
}
