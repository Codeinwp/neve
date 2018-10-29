<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/10/2018
 *
 * @package utilities.php
 */

/**
 * Check if we're delivering AMP
 *
 * @return bool
 */
function neve_is_amp() {
	return function_exists( 'is_amp_endpoint' ) && is_amp_endpoint();
}
