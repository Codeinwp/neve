<?php
/**
 * Theme Mods trait.
 *
 * @package Neve\Core
 */

namespace Neve\Core\Traits;

/**
 * Theme_Mods trait
 */
trait Theme_Mods {
	/**
	 * Returns the mod key for the granular font family control.
	 *
	 * @param  string $heading_id like h1 or h2 or etc.
	 * @return string   theme mod key which stores font family of the heading.
	 */
	private function get_mod_key_heading_fontfamily( $heading_id ) {
		return 'neve_headings_' . $heading_id . '_font_family';
	}
}
