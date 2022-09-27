<?php
/**
 * Core traits, shared with other classes.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Traits;

use HFG\Core\Settings\Manager as SettingsManager;

/**
 * Trait Core
 *
 * @package HFG\Traits
 */
trait Core {

	/**
	 * Utility method to convert associative array to css rules.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @param array $rules The associative rules array.
	 * @param int   $indent The indent to be used per rule.
	 *
	 * @return string
	 */
	protected function css_array_to_css( $rules = [], $indent = 0 ) {
		$css    = '';
		$prefix = str_repeat( '  ', $indent );

		foreach ( $rules as $key => $value ) {
			if ( is_array( $value ) ) {
				$selector   = $key;
				$properties = $value;

				$css .= $prefix . "$selector {\n";
				$css .= $prefix . $this->css_array_to_css( $properties, $indent + 1 );
				$css .= $prefix . "}\n";
				continue;
			}
			$property = $key;
			$css     .= $prefix . "$property: $value;\n";
		}
		if ( preg_match( '#</?\w+#', $css ) ) {
			$css = '';
		}
		return $css;
	}


	/**
	 * Sanitize regular json.
	 *
	 * @param string $input Input.
	 *
	 * @return string
	 */
	public function sanitize_json( $input ) {
		$inputs = json_decode( $input, true );
		if ( is_array( $inputs ) && ! empty( $inputs ) ) {
			return $input;
		}

		return '';
	}

	/**
	 * Sanitize responsive control
	 *
	 * @param string $input Input.
	 * @return string
	 */
	public function sanitize_responsive_int_json( $input ) {
		$inputs   = json_decode( $input, true );
		$filtered = array(
			'mobile'  => 0,
			'tablet'  => 0,
			'desktop' => 0,
		);

		if ( ! is_array( $inputs ) || empty( $inputs ) ) {
			return wp_json_encode( $filtered );
		}

		foreach ( $inputs as $key => $value ) {
			if ( isset( $filtered[ $key ] ) && is_numeric( $value ) ) {
				$filtered[ $key ] = (int) $value;
			}
		}

		return wp_json_encode( $filtered );
	}

	/**
	 * Sanitize regular json.
	 *
	 * @param string $input Input.
	 *
	 * @return array
	 */
	public function sanitize_spacing_array( $input ) {
		if ( is_array( $input ) ) {
			return $input;
		}

		return array();
	}

	/**
	 * Checks that a focus point array is valid.
	 *
	 * @param array $input coordinates array [x=>number, y=>number].
	 *
	 * @return bool
	 */
	public function is_valid_focus_point( $input ) {
		if ( ! is_array( $input ) ) {
			return false;
		}

		if ( ! isset( $input['x'] ) || ! isset( $input['y'] ) ) {
			return false;
		}

		if ( ! is_numeric( $input['x'] ) || ! is_numeric( $input['y'] ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Fuction to flatten the array recursively.
	 *
	 * @param array $array Input array.
	 *
	 * @return array
	 */
	private function flatten_array( $array ) {
		static $flattened = [];
		if ( is_array( $array ) && count( $array ) > 0 ) {
			foreach ( $array as $member ) {
				if ( ! is_array( $member ) ) {
					$flattened[] = $member;
				} else {
					$this->flatten_array( $member );
				}
			}
		}

		return $flattened;
	}

	/**
	 * Determine if a component is used inside a builder
	 */
	public function component_is_used( $component_name, $builder ) {
		if ( ! in_array( $builder, [ 'header', 'footer', 'page_header' ] ) ) {
			return false;
		}

		$builder_name = 'hfg_' . $builder . '_layout';
		if ( neve_is_new_builder() ) {
			$builder_name .= '_v2';
		}

		$mod_value         = json_decode( SettingsManager::get_instance()->get( $builder_name ), true );
		$active_components = $this->flatten_array( $mod_value );

		return count(
			array_filter(
				$active_components,
				function ( $component ) use ( $component_name ) {
					return str_contains( $component, $component_name );
				} 
			) 
		) > 0;

	}
}
