<?php
/**
 * Description test-neve-sanitization.php
 *
 * Author:      Bogdan Preda <bogdan.preda@themeisle.com>
 * Created on:  30-03-{2023}
 *
 * @package neve
 */

use HFG\Traits\Core;

/**
 * Class SanitizationWrapperTraitClass
 */
class SanitizationWrapperTraitClass {
	use Core;
}

/**
 * Class TestSanitization
 */
class TestSanitization extends WP_UnitTestCase {

	/**
	 * Sanitization wrapper trait class.
	 *
	 * @var SanitizationWrapperTraitClass
	 */
	private $sanitization;

	/**
	 * Setup.
	 */
	public function setUp(): void {
		parent::setUp();

		$this->sanitization = new SanitizationWrapperTraitClass();
	}

	/**
	 * Test sanitize responsive int json.
	 */
	public function test_sanitize_responsive_int_json() {
		// Test value responsive int json. w/o. suffix.
		$input_value  = [
			'mobile'  => 1,
			'tablet'  => 2,
			'desktop' => 3,
		];

		$this->do_assertion_for_sanitize_responsive_int_json( $input_value );

		// Test value responsive int json. w. suffix.
		$input_value['suffix'] = [
			'mobile'  => 'px',
			'tablet'  => 'em',
			'desktop' => 'rem',
		];

		$this->do_assertion_for_sanitize_responsive_int_json( $input_value );

		// Test sanitization with string values.
		$input_value  = [
			'mobile'  => '1',
			'tablet'  => '2',
			'desktop' => '3',
		];
		$expected_value = [
			'mobile'  => 1,
			'tablet'  => 2,
			'desktop' => 3,
		];

		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, wp_json_encode( $expected_value ) );

		// Test sanitization with string values and suffix.
		$input_value  = [
			'mobile'  => '1',
			'tablet'  => '2',
			'desktop' => '3',
			'suffix'  => [
				'mobile'  => 'px',
				'tablet'  => 'em',
				'desktop' => 'rem',
			],
		];
		$expected_value = [
			'mobile'  => 1,
			'tablet'  => 2,
			'desktop' => 3,
			'suffix'  => [
				'mobile'  => 'px',
				'tablet'  => 'em',
				'desktop' => 'rem',
			],
		];

		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, wp_json_encode( $expected_value ) );

		// Test that for invalid input or failed sanitization the default value is returned.
		$expected_default = '{"mobile":0,"tablet":0,"desktop":0}';
		$input_value = 'invalid';
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_default );

		$input_value = [];
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_default );

		// Test partial valid input.
		$expected_value = '{"mobile":1,"tablet":0,"desktop":0}';
		$input_value = [
			'mobile'  => 1,
		];
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_value );

		// Test partial valid input with suffix.
		$expected_value = '{"mobile":1,"tablet":0,"desktop":0,"suffix":{"mobile":"rem","tablet":"px","desktop":"px"}}';
		$input_value = [
			'mobile'  => 1,
			'suffix'  => [
				'mobile'  => 'rem',
			],
		];
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_value );

		// Test Invalid devices input with suffix.
		$input_value = [
			'mobile'  => 1,
			'suffix'  => [
				'mobile'  => 'rem',
				'car'     => 'rem',
			],
		];
		$this->do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_value );
	}

	/**
	 * Private reusable function for the assertion of sanitize responsive int json.
	 *
	 * @param array  $input_value Input value.
	 * @param string $expected_value Expected value.
	 */
	private function do_assertion_for_sanitize_responsive_int_json( $input_value, $expected_value = null ) {
		$inout_json = wp_json_encode( $input_value );
		$sanitized_value = $this->sanitization->sanitize_responsive_int_json( $inout_json );

		if ( $expected_value === null ) {
			$expected_value = $inout_json;
		}

		$this->assertEquals( $expected_value, $sanitized_value );
	}
}
