<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Neve\Views\Inline
 */

namespace Neve\Views\Inline;

/**
 * Class Front_End_Style_Manager
 *
 * @package Neve\Views\Inline
 */
class Front_End_Style_Manager extends Base_Style_Manager {

	/**
	 * Style to hook into for inline enqueue.
	 *
	 * @var string
	 */
	protected $style_hook_handle = 'neve-style';

	/**
	 * Handle of the style that will be enqueued.
	 *
	 * @var string
	 */
	protected $style_handle = 'neve-generated-style';

	/**
	 * Inline style handlers
	 *
	 * @var array
	 */
	protected $style_classes = array(
		'\\Neve\\Views\\Inline\\Typography',
		'\\Neve\\Views\\Inline\\Container_Sidebar',
		'\\Neve\\Views\\Inline\\Colors',
		'\\Neve\\Views\\Inline\\Buttons',
	);
}
