<?php
/**
 * Button Component class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Components;

use HFG\Main;

/**
 * Class SearchResponsive
 *
 * @package HFG\Core\Components
 */
class CartIcon extends Abstract_Component {

	const COMPONENT_ID = 'header_cart_icon';

	/**
	 * Button constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Cart Icon', 'neve' ) );
		$this->set_property( 'id', self::COMPONENT_ID );
		$this->set_property( 'width', 1 );
	}

	/**
	 * Method to filter component loading if needed.
	 *
	 * @since   1.0.1
	 * @access public
	 * @return bool
	 */
	public function is_active() {
		return  class_exists( 'WooCommerce', false );
	}

	/**
	 * Define settings for this component.
	 */
	public function add_settings() {
		// TODO: Implement add_settings() method.
	}

	/**
	 * The render method for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-cart-icon' );
	}
}
