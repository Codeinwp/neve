<?php
/**
 * Custom navwalker for secondary menu.
 *
 * Author:          Soare Robert <robert.soare@themeisle.com>
 * Created on:      25/04/2024
 *
 * @package Neve\Views
 */

namespace Neve\Views;

/**
 * Class Secondary_Nav_Walker
 *
 * @package Neve\Views
 */
class Secondary_Nav_Walker extends Nav_Walker {

	/**
	 * Secondary_Nav_Walker constructor.
	 *
	 * Intentionally empty: it must NOT call the parent constructor, which
	 * would register the nav_menu_item_* filters a second time.
	 */
	public function __construct() {
	}
}
