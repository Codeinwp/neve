<?php
/**
 * Metabox separator.
 *
 * @package Neve\Admin\Metabox\Controls
 */

namespace Neve\Admin\Metabox\Controls;

/**
 * Class Separator
 *
 * @package Neve\Admin\Metabox\Controls
 */
class Separator extends Control_Base {
	/**
	 * Render control.
	 *
	 * @return void
	 */
	public function render_content( $post_id ) {
		echo '<hr/>';
	}
}
