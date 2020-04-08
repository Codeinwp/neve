<?php


namespace Neve\Core\Styles;


abstract class Responsive_Subscriber extends Mod_Subscriber {
	protected $device = null;
	const MOBILE = 'mobile';
	const TABLET = 'tablet';
	const DESKTOP = 'desktop';
	protected $is_responsive = true;

	/**
	 * Mark the subscriber for Mobile.
	 *
	 * @return $this
	 */
	public function for_mobile() {
		$this->device = self::MOBILE;

		return $this;
	}

	/**
	 * Mark the subscriber for tablet.
	 *
	 * @return $this
	 */
	public function for_tablet() {
		$this->device = self::TABLET;

		return $this;
	}

	/**
	 * Mark the subscriber for desktop.
	 *
	 * @return $this
	 */
	public function for_desktop() {
		$this->device = self::DESKTOP;

		return $this;
	}

	/**
	 * Get current device.
	 *
	 * @return string Current device.
	 */
	public function get_device() {
		return ! empty( $this->device ) ? $this->device : self::DESKTOP;
	}

	/**
	 * Get setting for device.
	 *
	 * @return bool|mixed Setting for device.
	 */
	public function get_value() {
		$value  = parent::get_value();
		$value  = is_string( $value ) ? json_decode( $value, true ) : $value;
		$device = $this->get_device();

		return isset( $value[ $device ] ) ? $value[ $device ] : false;
	}
}
