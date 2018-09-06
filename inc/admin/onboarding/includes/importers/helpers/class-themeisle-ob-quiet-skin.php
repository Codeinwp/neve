<?php
/**
 * The plugin upgrader quiet skin.
 *
 * Used to silence installation progress for plugins installs.
 *
 * Author:  Andrei Baicus <andrei@themeisle.com>
 * On:      21/06/2018
 *
 * @package    themeisle-onboarding
 * @soundtrack Accordion - Madvillain, Madlib & MF DOOM
 */

/**
 * Class Themeisle_OB_Quiet_Skin
 *
 * Silences plugin install and activate.
 */
class Themeisle_OB_Quiet_Skin extends WP_Upgrader_Skin {
	/**
	 * Done Header.
	 *
	 * @var bool
	 */
	public $done_header = true;

	/**
	 * Done Footer.
	 *
	 * @var bool
	 */
	public $done_footer = true;

	/**
	 * Feedback function overwrite.
	 *
	 * @param string $string feedback string.
	 */
	public function feedback( $string ) {
		// Keep install quiet.
	}
}
