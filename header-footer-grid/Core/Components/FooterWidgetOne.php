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

	/**
	 * FooterWidgetOne constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param string $panel The panel ID.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Footer One', 'neve' ) );
		$this->set_property( 'id', 'footer-one-widgets' );
		$this->set_property( 'width', 3 );
		$this->set_property( 'section', 'sidebar-widgets-footer-one-widgets' );
		$this->set_property( 'panel', $panel );

		add_filter( 'customize_section_active', array( $this, 'footer_widgets_show' ), 15, 2 );
	}
}
