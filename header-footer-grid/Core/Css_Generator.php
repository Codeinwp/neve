<?php


namespace HFG\Core;


use Neve\Core\Styles\Generator;

class Css_Generator extends Generator {
	/**
	 * Css_Generator constructor.
	 */
	public function __construct() {
		$this->_subscribers = [];
	}
	public function set( $subscribers ) {
		$this->_subscribers = $subscribers;
	}
}
