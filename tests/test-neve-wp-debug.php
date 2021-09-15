<?php
/**
 * Author:          Bogdan Preda <bogdan.preda@themeisle.com>
 * Created on:      02/06/2021
 *
 * @package neve
 */

/**
 * Class TestNeveWpDebug
 */
class TestNeveWpDebug extends WP_UnitTestCase {

	private $neve_debug;

	public function setUp(): void {
		parent::setUp();
		$this->neve_debug = new \Neve\Admin\Troubleshoot\Main();
	}

	public function test_connectivity() {
		$this->assertEquals( 'Neve\Admin\Troubleshoot\Main', get_class( $this->neve_debug ), 'Incorrect class type' );

		set_transient( 'neve_troubleshoot_api_reason', '', 10 * MINUTE_IN_SECONDS );
		set_transient( 'neve_troubleshoot_api_response', 'yes', 10 * MINUTE_IN_SECONDS );
		$response = $this->neve_debug->test_api_connectivity();
		$this->assertTrue( $response, 'Response is not correct. Expected `true`' );

		set_transient( 'neve_troubleshoot_api_reason', 'Server is unreachable.', 10 * MINUTE_IN_SECONDS );
		set_transient( 'neve_troubleshoot_api_response', 'no', 10 * MINUTE_IN_SECONDS );
		$response = $this->neve_debug->test_api_connectivity();
		$this->assertFalse( $response, 'Response is not correct. Expected `false`'  );
	}

	public function test_registered_debug_info() {
		set_transient( 'neve_troubleshoot_api_reason', 'Server is unreachable.', 10 * MINUTE_IN_SECONDS );
		set_transient( 'neve_troubleshoot_api_response', 'no', 10 * MINUTE_IN_SECONDS );

		$debug_info = apply_filters( 'debug_information', [] );
		$this->assertTrue( isset( $debug_info['neve'] ), 'There is no `neve` key registered for debug info.' );

		$this->assertEquals( 'No Server is unreachable.', $debug_info['neve']['fields']['api']['value'] );
	}
}
