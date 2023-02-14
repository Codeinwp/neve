<?php
/**
 * Style generator based on settings.
 *
 * @package Neve\Core\Styles
 */

namespace Neve\Core\Styles;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;

/**
 * Class Generator for Gutenberg editor.
 *
 * @package Neve\Core\Styles
 */
class Gutenberg extends Generator {
	use Css_Vars;

	/**
	 * Generator constructor.
	 */
	public function __construct() {
		$this->context = Dynamic_Selector::CONTEXT_GUTENBERG;
		$this->setup_buttons();
		$this->setup_typography();
		$this->add_editor_color_palette_styles();
	}

	/**
	 * Setup typography subscribers.
	 */
	public function setup_typography() {

		$rules                = $this->get_typography_rules();
		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => ':root',
			Dynamic_Selector::KEY_RULES    => $rules,
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_GUTENBERG => true,
			],
		];
	}

	/**
	 * Setup button subscribers.
	 */
	public function setup_buttons() {

		$rules                = $this->get_button_rules();
		$this->_subscribers[] = [
			Dynamic_Selector::KEY_SELECTOR => ':root',
			Dynamic_Selector::KEY_RULES    => $rules,
			Dynamic_Selector::KEY_CONTEXT  => [
				Dynamic_Selector::CONTEXT_GUTENBERG => true,
			],
		];
	}

	/**
	 * Adds colors from the editor-color-palette theme support.
	 */
	private function add_editor_color_palette_styles() {
		$is_new_user           = get_option( 'neve_new_user' );
		$imported_starter_site = get_option( 'neve_imported_demo' );
		if ( $is_new_user === 'yes' && $imported_starter_site !== 'yes' ) {
			return;
		}

		$this->_subscribers['.has-neve-button-color-color']            = [
			Config::CSS_PROP_COLOR => [
				Dynamic_Selector::META_KEY       => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
				Dynamic_Selector::META_IMPORTANT => true,
				Dynamic_Selector::META_DEFAULT   => 'var(--nv-primary-accent)',
				Dynamic_Selector::KEY_CONTEXT    => [
					Dynamic_Selector::CONTEXT_GUTENBERG => true,
				],
			],
		];
		$this->_subscribers['.has-neve-button-color-background-color'] = [
			Config::CSS_PROP_BACKGROUND_COLOR => [
				Dynamic_Selector::META_KEY       => Config::MODS_BUTTON_PRIMARY_STYLE . '.background',
				Dynamic_Selector::META_IMPORTANT => true,
				Dynamic_Selector::META_DEFAULT   => 'var(--nv-primary-accent)',
				Dynamic_Selector::KEY_CONTEXT    => [
					Dynamic_Selector::CONTEXT_GUTENBERG => true,
				],
			],
		];
	}
}
