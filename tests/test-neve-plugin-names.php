<?php
/**
 * Tests for the `all_plugins` callback that relabels Orbit Fox and Otter Pro.
 *
 * The callback runs at the end of a filter chain, so any other `all_plugins`
 * callback that returns nothing hands it a null instead of the plugin list.
 *
 * @package neve
 */

/**
 * Class TestNevePluginNames
 */
class TestNevePluginNames extends WP_UnitTestCase {

	const ORBIT_FOX = 'themeisle-companion/themeisle-companion.php';
	const OTTER_PRO = 'otter-pro/otter-pro.php';

	/**
	 * Run the callback without booting the whole Admin class.
	 *
	 * @param mixed $plugins the value passed down the `all_plugins` chain.
	 *
	 * @return mixed
	 */
	private function change_plugin_names( $plugins ) {
		$reflection = new ReflectionClass( \Neve\Core\Admin::class );
		$admin      = $reflection->newInstanceWithoutConstructor();

		return $admin->change_plugin_names( $plugins );
	}

	/**
	 * Any other non-array value is passed through untouched.
	 */
	public function test_non_array_plugin_list_is_passed_through() {
		$this->assertSame( array(), $this->change_plugin_names( '' ) );
		$this->assertSame( array(), $this->change_plugin_names( false ) );
		$this->assertSame( array(), $this->change_plugin_names( null ) );
	}

	/**
	 * Plugins the theme does not care about are left alone.
	 */
	public function test_unrelated_plugins_are_unchanged() {
		$plugins = array(
			'hello-dolly/hello.php' => array(
				'Name'        => 'Hello Dolly',
				'Description' => 'Lyrics.',
			),
		);

		$this->assertSame( $plugins, $this->change_plugin_names( $plugins ) );
	}

	/**
	 * Orbit Fox is renamed and Otter Pro gets the extra description.
	 */
	public function test_orbit_fox_and_otter_pro_are_relabelled() {
		$plugins = $this->change_plugin_names(
			array(
				self::ORBIT_FOX => array(
					'Name'        => 'Orbit Fox Companion',
					'Description' => 'Companion description.',
				),
				self::OTTER_PRO => array(
					'Name'        => 'Otter Pro',
					'Description' => 'Otter Pro description.',
				),
			)
		);

		$this->assertSame( 'Orbit Fox Companion by Neve theme', $plugins[ self::ORBIT_FOX ]['Name'] );
		$this->assertSame( 'Companion description.', $plugins[ self::ORBIT_FOX ]['Description'] );
		$this->assertSame(
			'Otter Pro description. It is part of Block Editor Booster from Neve.',
			$plugins[ self::OTTER_PRO ]['Description']
		);
		$this->assertSame( 'Otter Pro', $plugins[ self::OTTER_PRO ]['Name'] );
	}
}
