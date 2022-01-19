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
}
