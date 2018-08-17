<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 * @package neve\views
 */

namespace Neve\Views;

/**
 * The base view class.
 * @package Neve\Views
 */
abstract class Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	abstract protected function init();
}