<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      05/10/2018
 *
 * @package neve
 */

/**
 * Class NeveTestBase
 */
abstract class NeveTestBase extends WP_UnitTestCase {

	/**
	 * Call protected/private method of a class.
	 *
	 * @param object $object      Instantiated object that we will run method on.
	 * @param string $method_name Method name to call.
	 * @param array  $parameters  Array of parameters to pass into method.
	 *
	 * @return mixed Method return.
	 * @throw ReflectionException
	 */
	public function invokeMethod( &$object, $method_name, array $parameters = array() ) {
		try {
			$reflection = new \ReflectionClass( get_class( $object ) );
			$method     = $reflection->getMethod( $method_name );
			$method->setAccessible( true );

			return $method->invokeArgs( $object, $parameters );
		} catch ( ReflectionException $exception ) {
			throwException( $exception );
		}
	}


	/**
	 * Get protected/private property value of a class.
	 *
	 * @param object $object    Instantiated object that we will run method on.
	 * @param string $prop_name Method name to call.
	 *
	 * @return mixed Property value.
	 * @throw ReflectionException
	 */
	public function invokeProp( &$object, $prop_name ) {
		try {
			$reflection = new \ReflectionClass( get_class( $object ) );
			$property   = $reflection->getProperty( $prop_name );
			$property->setAccessible( true );

			return $property->getValue( $object );
		} catch ( ReflectionException $exception ) {
			throwException( $exception );
		}
	}
}
