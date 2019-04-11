<?php
/**
 * Custom Component class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Components;

/**
 * Class FooterWidgetOne
 *
 * @package HFG\Core\Components
 */
class FooterWidgetOne extends Abstract_FooterWidget {
	const COMPONENT_ID = 'footer-one-widgets';

	/**
	 * FooterWidgetFour constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Footer One', 'neve' ) );

		$this->set_property( 'id', self::COMPONENT_ID );
		$this->set_property( 'width', 3 );

		$this->set_property( 'section', 'sidebar-widgets-footer-one-widgets' );

		add_filter( 'customize_section_active', array( $this, 'footer_widgets_show' ), 15, 2 );
	}
}
