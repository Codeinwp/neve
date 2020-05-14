<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      05/10/2018
 *
 * @package neve
 */


/**
 * Class TestNeveModsManager
 */
class TestNeveModsManager extends WP_UnitTestCase {


	/**
	 * Test default value.
	 */
	public function test_default_value() {
		$mod_value = \Neve\Core\Settings\Mods::get( 'test_mod', 0 );
		$this->assertEquals( $mod_value, 0 );
		\Neve\Core\Settings\Mods::set( 'test_mod', 2 );
		$this->assertEquals( \Neve\Core\Settings\Mods::get( 'test_mod', 0 ), 2 );
	}

	/**
	 * Test theme mod retrieval value.
	 */
	public function test_simple_mod_value() {
		set_theme_mod( 'test_mod', 2 );
		$mod_value = \Neve\Core\Settings\Mods::get( 'test_mod', 0 );
		$this->assertEquals( $mod_value, 2 );
	}

	/**
	 * Test theme mod cached access value.
	 */
	public function test_cached_mod_value() {
		set_theme_mod( 'test_mod', 2 );
		$mod_value = \Neve\Core\Settings\Mods::get( 'test_mod', 0 );
		set_theme_mod( 'test_mod', 5 );
		$mod_value = \Neve\Core\Settings\Mods::get( 'test_mod', 0 );
		$this->assertEquals( $mod_value, 2 );
	}

	/**
	 * Test subkey access.
	 */
	public function test_subkey_mod_value() {
		set_theme_mod( 'test_mod2', [ 'subkey' => 1 ] );
		$mod_value = \Neve\Core\Settings\Mods::get( 'test_mod2' );
		$this->assertEquals( $mod_value, [ 'subkey' => 1 ] );
		$mod_value = \Neve\Core\Settings\Mods::get( 'test_mod2.subkey' );
		$this->assertEquals( $mod_value, 1 );
	}

	/**
	 * Test subkey access with json encoded master value.
	 */
	public function test_subkey_mod_value_decoded() {
		$key   = 'test_mod3';
		$value = json_encode( [ 'subkey' => 3 ] );
		set_theme_mod( $key, $value );

		$mod_value = \Neve\Core\Settings\Mods::get( $key );
		$this->assertEquals( $mod_value, $value );

		$mod_value = \Neve\Core\Settings\Mods::get( 'test_mod3.subkey' );
		$this->assertEquals( $mod_value, 3 );
	}

	/**
	 * Test legacy default.
	 */
	public function test_key_with_forced_default() {
		$mod_value = \Neve\Core\Settings\Mods::get( \Neve\Core\Settings\Config::MODS_BUTTON_PRIMARY_STYLE );
		$this->assertEquals( $mod_value['type'], 'fill' );
		$mod_value = \Neve\Core\Settings\Mods::get( \Neve\Core\Settings\Config::MODS_BUTTON_PRIMARY_STYLE . '.type' );
		$this->assertEquals( $mod_value, 'fill' );
	}

	/**
	 * Test json encoded value to array.
	 */
	public function test_to_json_value() {
		$key   = 'test_mod4';
		$value = json_encode( [ 'subkey' => 3 ] );
		set_theme_mod( $key, $value );

		$mod_value = \Neve\Core\Settings\Mods::to_json( 'test_mod4' );
		$this->assertEquals( $mod_value, [ 'subkey' => 3 ] );
	}
}
