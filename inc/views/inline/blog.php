<?php
/**
 * Neve Blog inline style.
 *
 * @package Neve\Views
 */

namespace Neve\Views\Inline;

/**
 * Class Blog
 * @package Neve\Views\Inline
 */
class Blog extends Base_Inline {

	/**
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		$this->add_post_thumbnail_box_shadow();
	}

	/**
	 * Add inline style for posts thumbnail box shadow.
	 *
	 */
	private function add_post_thumbnail_box_shadow(){
		$box_shadow = get_theme_mod( 'neve_post_thumbnail_box_shadow', 0 );
		if ( $box_shadow === 0 ) {
			return;
		}
		$shadow_value = '0px 1px 20px ' . ( $box_shadow - 20 ) . 'px rgba(0, 0, 0, 0.12)';

		$this->add_style(
			array(
				array(
					'css_prop' => 'box-shadow',
					'value'    => $shadow_value,
				),
			),
			'.nv-post-thumbnail-wrap'
		);
	}
}
