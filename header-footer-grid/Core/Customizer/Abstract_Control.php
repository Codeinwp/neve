<?php
/**
 * Abstract Custom Control class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Customizer;

use HFG\Core\Settings;
use HFG\Traits\Core;
use WP_Customize_Control;
use WP_Customize_Manager;

/**
 * Class Abstract_Control
 *
 * @package HFG\Core\Customizer
 */
abstract class Abstract_Control extends WP_Customize_Control {
	use Core;

	/**
	 * An instance of Settings
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var Settings $hfg_settings
	 */
	public $hfg_settings;

	/**
	 * An instance of Responsive_Setting or null
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var Responsive_Setting|null
	 */
	protected $responsive = null;

	/**
	 * Slider_Control constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param WP_Customize_Manager $manager The Customize Manager.
	 * @param string               $id The control ID.
	 * @param array                $args The control args.
	 */
	public function __construct( WP_Customize_Manager $manager, string $id, array $args = array() ) {
		if ( isset( $args['responsive'] ) && ! empty( $args['responsive'] ) && is_a( $args['responsive'], 'HFG\Core\Customizer\Responsive_Setting' ) ) {
			$this->responsive = $args['responsive'];
		}

		if ( $this->responsive !== null ) {
			$settings = $this->responsive->get_settings();
			foreach ( $settings as $setting ) {
				$manager->add_setting(
					$setting['id'],
					array(
						'default'        => $setting['default'],
						'theme_supports' => 'hfg_support',
						'transport'      => 'postMessage',
					)
				);
				$this->settings[ $setting['id'] ] = $setting['id'];
			}
		}
		parent::__construct( $manager, $id, $args );

		$this->hfg_settings = Settings::get_instance();
	}

}
