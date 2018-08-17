<?php
/**
 * Customizer partial type enforcing.
 *
 * @package Neve\Customizer\Types
 */

namespace Neve\Customizer\Types;

/**
 * Class Hestia_Customizer_Partial
 *
 * @package Neve\Customizer\Types
 */
class Partial {
	/**
	 * ID of control that will be attached to. Also ID of the partial itself.
	 *
	 * @var string the control ID.
	 */
	public $control_id;

	/**
	 * Args for the partial.
	 *
	 * @var array args passed into partial.
	 */
	public $args = array();

	/**
	 * Constructor.
	 *
	 * @param string $control_id the control id.
	 * @param array  $args       the partial args.
	 */
	public function __construct( $control_id, $args ) {
		$this->control_id   = $control_id;
		$this->args = $args;
	}
}
