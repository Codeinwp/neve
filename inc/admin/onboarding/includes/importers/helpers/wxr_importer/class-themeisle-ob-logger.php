<?php
/**
 * The WXR Importer logger.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      12/07/2018
 *
 * @package         themeisle-onboarding
 * @soundtrack      Point Me At the Sky (2016 Remastered Version) - Pink Floyd
 */

/**
 * Class Themeisle_OB_Logger
 */
class Themeisle_OB_Logger {

	/**
	 * Messages to be logged
	 *
	 * @var array $messages Messages array.
	 */
	public $messages = array();

	/**
	 * System is unusable.
	 *
	 * @param string $message message.
	 * @param array  $context context.
	 *
	 * @return null
	 */
	public function emergency( $message, array $context = array() ) {
		return $this->log( 'emergency', $message, $context );
	}

	/**
	 * Action must be taken immediately.
	 *
	 * Example: Entire website down, database unavailable, etc. This should
	 * trigger the SMS alerts and wake you up.
	 *
	 * @param string $message message.
	 * @param array  $context context.
	 *
	 * @return null
	 */
	public function alert( $message, array $context = array() ) {
		return $this->log( 'alert', $message, $context );
	}

	/**
	 * Critical conditions.
	 *
	 * Example: Application component unavailable, unexpected exception.
	 *
	 * @param string $message message.
	 * @param array  $context context.
	 *
	 * @return null
	 */
	public function critical( $message, array $context = array() ) {
		return $this->log( 'critical', $message, $context );
	}

	/**
	 * Runtime errors that do not require immediate action but should typically
	 * be logged and monitored.
	 *
	 * @param string $message message.
	 * @param array  $context context.
	 *
	 * @return null
	 */
	public function error( $message, array $context = array() ) {
		return $this->log( 'error', $message, $context );
	}

	/**
	 * Exceptional occurrences that are not errors.
	 *
	 * Example: Use of deprecated APIs, poor use of an API, undesirable things
	 * that are not necessarily wrong.
	 *
	 * @param string $message message.
	 * @param array  $context context.
	 *
	 * @return null
	 */
	public function warning( $message, array $context = array() ) {
		return $this->log( 'warning', $message, $context );
	}

	/**
	 * Normal but significant events.
	 *
	 * @param string $message message.
	 * @param array  $context context.
	 *
	 * @return null
	 */
	public function notice( $message, array $context = array() ) {
		return $this->log( 'notice', $message, $context );
	}

	/**
	 * Interesting events.
	 *
	 * Example: User logs in, SQL logs.
	 *
	 * @param string $message message.
	 * @param array  $context context.
	 *
	 * @return null
	 */
	public function info( $message, array $context = array() ) {
		return $this->log( 'info', $message, $context );
	}

	/**
	 * Detailed debug information.
	 *
	 * @param string $message message.
	 * @param array  $context context.
	 *
	 * @return null
	 */
	public function debug( $message, array $context = array() ) {
		return $this->log( 'debug', $message, $context );
	}

	/**
	 * Logs with an arbitrary level.
	 *
	 * @param mixed  $level   severity.
	 * @param string $message message.
	 * @param array  $context context.
	 */
	public function log( $level, $message, array $context = array() ) {
		$this->messages[] = array(
			'timestamp' => time(),
			'level'     => $level,
			'message'   => $message,
			'context'   => $context,
		);
	}
}
