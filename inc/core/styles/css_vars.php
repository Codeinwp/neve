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
 * Class Generator for CSS Variables.
 *
 * @package Neve\Core\Styles
 */
class Css_Vars {

	private static $instance;

	private $root_vars = [
		'mobile'  => [],
		'tablet'  => [],
		'desktop' => []
	];

	private $selector_vars = [

	];

	static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new Css_Vars();
		}

		return self::$instance;
	}

	public function add_variable( $variable, $value ) {
		if ( is_array( $value ) ) {
			foreach ( $value as $device => $device_value ) {
				if ( ! in_array( $device, array_keys( $this->root_vars ), true ) ) {
					continue;
				}
				$this->root_vars[ $device ][ $variable ] = $device_value;
			}

			return;
		}

		$this->root_vars['mobile'] = $value;
	}

	public function add_variable_with_selector( $selector, $variable, $value ) {

	}

	/**
	 * Generator constructor.
	 */
	public function __construct() {
		add_filter( 'neve_dynamic_style_output', [ $this, 'add_css_vars' ] );
	}

	public function add_css_vars( $css ) {
		return $css . $this->get_vars_css();
	}

	private function get_vars_css() {
		$css        = '';
		$device_map = [
			'mobile'  => ':root{%s}',
			'tablet'  => '@media(min-width: 576px){:root{%s}}',
			'desktop' => '@media(min-width: 960px){:root{%s}}'
		];

		foreach ( $this->root_vars as $device => $variables ) {
			$inside_style = '';
			foreach ( $variables as $variable => $var_val ) {
				$inside_style .= sprintf( '%s:%s;', trim( $variable ), trim( $var_val ) );
			}
			if ( empty( $inside_style ) ) {
				continue;
			}

			$css .= sprintf( $device_map[ $device ], $inside_style );
		}

		return $css;
	}
}
