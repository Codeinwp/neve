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
 * Class FooterWidgetSix
 *
 * @package HFG\Core\Components
 */
class FooterWidgetSix extends Abstract_FooterWidget {

	/**
	 * FooterWidgetSix constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param string $panel The panel ID.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Footer Sidebar 6', 'hfg-module' ) );
		$this->set_property( 'id', 'footer-6' );
		$this->set_property( 'width', 3 );
		$this->set_property( 'section', 'sidebar-widgets-footer-6' );
		$this->set_property( 'panel', $panel );

		add_filter( 'customize_section_active', array( $this, 'footer_widgets_show' ), 15, 2 );
	}
}
