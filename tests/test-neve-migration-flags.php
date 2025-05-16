<?php
use Neve\Core\Migration_Flags;

/**
 * Class TestMigrationFlags
 */
class TestNeveMigrationFlags extends WP_UnitTestCase {

	/**
	 * Test the constructor.
	 */
	public function testConstructor() {
		update_option( Migration_Flags::NEVE_VERSION_OPTION, '3.0.0' );

		$migration_flags = new Migration_Flags( '4.0.0' );
		$reflection = new ReflectionClass($migration_flags);

		$last_version = $reflection->getProperty('last_version');
		$last_version->setAccessible(true);
		$this->assertEquals('3.0.0', $last_version->getValue($migration_flags));

		$current_version = $reflection->getProperty('current_version');
		$current_version->setAccessible(true);
		$this->assertEquals('4.0.0', $current_version->getValue($migration_flags));
	}

	/**
	 * Test the run method.
	 */
	public function testRun() {
		update_option( Migration_Flags::NEVE_VERSION_OPTION, '3.0.0' );

		$migration_flags = new Migration_Flags('4.0.0');
		$migration_flags->run();

		$this->assertEquals( '4.0.0', get_option( Migration_Flags::NEVE_VERSION_OPTION ) );
	}

	/**
	 * Test the is_new_user_on_v4 method.
	 */
	public function testIsNewUserOnV4() {
		// Simulate a new user by not setting any theme mods.
		remove_theme_mods();
		$migration_flags = new Migration_Flags('4.0.0' );
		$reflection = new ReflectionClass($migration_flags);
		$method = $reflection->getMethod('is_new_user');
		$method->setAccessible(true);
		$migration_flags->run();
		$this->assertTrue( $method->invoke($migration_flags) );


		// Simulate an existing user by setting a theme mod.
		set_theme_mod( 'hfg_header_layout', 'layout' );
		$migration_flags = new Migration_Flags('4.0.0' );
		$reflection = new ReflectionClass($migration_flags);
		$method = $reflection->getMethod('is_new_user');
		$method->setAccessible(true);
		$migration_flags->run();
		$this->assertFalse( $method->invoke($migration_flags) );
	}

	/**
	 * Test the is_new_user_after method.
	 */
	public function testIsNewUserAfter() {
		update_option( Migration_Flags::USER_SINCE_VERSION, '4.0.0' );

		$this->assertTrue( Migration_Flags::is_new_user_after( '3.8.16' ) );
		$this->assertFalse( Migration_Flags::is_new_user_after( '4.0.0' ) );
		$this->assertFalse( Migration_Flags::is_new_user_after( '4.1.0' ) );
	}

	/**
	 * Test the is_new_user_after_v4 method.
	 */
	public function testIsNewUserAfterV4() {
		update_option( Migration_Flags::USER_SINCE_VERSION, '4.0.0' );

		$this->assertTrue( Migration_Flags::is_new_user_after_v4() );

		update_option( Migration_Flags::USER_SINCE_VERSION, '3.8.16' );
		$this->assertFalse( Migration_Flags::is_new_user_after_v4() );
	}
}
