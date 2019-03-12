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
	 * Slider_Control constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param WP_Customize_Manager $manager The Customize Manager.
	 * @param string               $id The control ID.
	 * @param array                $args The control args.
	 */
	public function __construct( WP_Customize_Manager $manager, string $id, array $args = array() ) {
		parent::__construct( $manager, $id, $args );

		$this->hfg_settings = Settings::get_instance();
	}

}
