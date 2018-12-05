<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Neve\Views\Inline
 */

namespace Neve\Views\Inline;

/**
 * Class Gutenberg_Style_Manager
 *
 * @package Neve\Views\Inline
 */
class Gutenberg_Style_Manager extends Base_Style_Manager {

	/**
	 * Flag that signals the styles should be loaded admin-side.
	 *
	 * @var bool
	 */
	protected $admin = true;

	/**
	 * Style to hook into for inline enqueue.
	 *
	 * @var string
	 */
	protected $style_hook_handle = 'neve-gutenberg-style';

	/**
	 * Handle of the style that will be enqueued.
	 *
	 * @var string
	 */
	protected $style_handle = 'neve-gutenberg-generated-style';

	/**
	 * Inline style handlers
	 *
	 * @var array
	 */
	protected $style_classes = array(
		'\\Neve\\Views\\Inline\\Gutenberg_Editor',
	);

	/**
	 * Generated style file name.
	 *
	 * @var string
	 */
	protected $css_file_name = 'neve-gutenberg-editor.css';
}
