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

/**
 * Trait Core
 *
 * @package HFG\Traits
 */
trait Core {

	/**
	 * Return if assets should use `.min` suffix or not.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return string
	 */
	public function get_assets_suffix() {
		$suffix = '.min';
		if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
			$suffix = '';
		}

		return $suffix;
	}


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
	 * Utility method to merge two arrays while keeping overlapping keys.
	 *
	 * Order of passed arrays should not matter.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @param array $array1 First array.
	 * @param array $array2 Second array.
	 *
	 * @return array
	 */
	protected function array_merge_recursive_distinct( array &$array1, array &$array2 ) {
		$merged = $array1;

		foreach ( $array2 as $key => &$value ) {
			if ( is_array( $value ) && isset( $merged[ $key ] ) && is_array( $merged[ $key ] ) ) {
				$merged[ $key ] = $this->array_merge_recursive_distinct( $merged[ $key ], $value );
				continue;
			}
			$merged[ $key ] = $value;
		}

		return $merged;
	}
}
