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
 * Class FooterWidgetTwo
 *
 * @package HFG\Core\Components
 */
class FooterWidgetTwo extends Abstract_FooterWidget {

	/**
	 * FooterWidgetTwo constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param string $panel The panel ID.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Footer Two', 'neve' ) );
		$this->set_property( 'id', 'footer-two-widgets' );
		$this->set_property( 'width', 3 );
		$this->set_property( 'section', 'sidebar-widgets-footer-two-widgets' );
		$this->set_property( 'panel', $panel );

		add_filter( 'customize_section_active', array( $this, 'footer_widgets_show' ), 15, 2 );
	}
}
