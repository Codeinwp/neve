<?php
/**
 * Page settings metabox.
 *
 * @package Neve
 */

namespace Neve\Admin\Metabox;

use Neve\Admin\Metabox\Controls\Control_Base;

/**
 * Class Metabox_Controls_Base
 *
 * @package Neve\Admin\Metabox
 */
abstract class Controls_Base {

	/**
	 * Controls.
	 *
	 * @var array
	 */
	private $controls = array();

	/**
	 * Init function
	 */
	public function init() {
		$this->add_controls();
	}

	/**
	 * Add controls.
	 */
	abstract protected function add_controls();

	/**
	 * Add the control.
	 *
	 * @param Controls\Control_Base $control the control object.
	 */
	public function add_control( Control_Base $control ) {
		array_push( $this->controls, $control );
	}

	/**
	 * Get the controls.
	 *
	 * @return array
	 */
	public function get_controls() {
		return $this->controls;
	}
}
