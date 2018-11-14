<?php
/**
 * Navigation layout section.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Partial;
use Neve\Customizer\Types\Section;
use Neve\Views\Header;

/**
 * Header Options
 *
 * @package Neve\Customizer\Options
 */
class Layout_Navigation extends Base_Customizer {
	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_navigation();
		$this->control_navigation_layout();
		$this->control_last_menu_item();
		$this->partial_refresh();
	}

	/**
	 * Add customize section
	 */
	private function section_navigation() {
		$this->add_section(
			new Section(
				'neve_primary_navigation',
				array(
					'priority' => 25,
					'title'    => esc_html__( 'Primary Navigation', 'neve' ),
					'panel'    => 'neve_header',
				)
			)
		);
	}

	/**
	 * Add navigation layout controls
	 */
	private function control_navigation_layout() {
		$this->add_control(
			new Control(
				'neve_navigation_layout',
				array(
					'sanitize_callback' => array( $this, 'sanitize_navigation_layout' ),
					'transport'         => $this->selective_refresh,
					'default'           => 'left',
				),
				array(
					'label'    => __( 'Navigation Layout', 'neve' ),
					'section'  => 'neve_primary_navigation',
					'priority' => 25,
					'choices'  => $this->navigation_layout_choices(),
				),
				'Neve\Customizer\Controls\Radio_Image'
			)
		);
	}

	/**
	 * Last menu item select
	 */
	private function control_last_menu_item() {
		$choices = array(
			'none'   => __( 'None', 'neve' ),
			'search' => __( 'Search', 'neve' ),
		);
		$default = 'search';
		if ( class_exists( 'WooCommerce' ) ) {
			$choices['cart']        = __( 'Cart', 'neve' );
			$choices['search-cart'] = __( 'Search & Cart', 'neve' );
			$default                = 'search-cart';
		}

		$this->add_control(
			new Control(
				'neve_last_menu_item',
				array(
					'sanitize_callback' => array( $this, 'sanitize_last_menu_item' ),
					'transport'         => $this->selective_refresh,
					'default'           => $default,
				),
				array(
					'label'    => __( 'Last Item in Menu', 'neve' ),
					'section'  => 'neve_primary_navigation',
					'type'     => 'select',
					'priority' => 30,
					'choices'  => $choices,
				)
			)
		);
	}

	/**
	 * Sanitize the navigation layout value
	 *
	 * @param string $value value from the control.
	 *
	 * @return bool
	 */
	public function sanitize_navigation_layout( $value ) {
		$allowed_values = array( 'left', 'right', 'center' );
		if ( ! in_array( $value, $allowed_values ) ) {
			return 'left';
		}

		return esc_html( $value );
	}

	/**
	 * Sanitize the last menu item value
	 *
	 * @param string $value value from the control.
	 *
	 * @return bool
	 */
	public function sanitize_last_menu_item( $value ) {
		$allowed_values = array( 'none', 'search', 'cart', 'search-cart' );
		if ( ! in_array( $value, $allowed_values ) ) {
			return 'search';
		}

		return esc_html( $value );
	}

	/**
	 * Get the sidebar layout choices.
	 *
	 * @return array
	 */
	private function navigation_layout_choices() {
		return array(
			'left'   => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAADFBMVEX////V1dUAhbo+yP8aB7nsAAAARklEQVRYhWNgGEGA/z8EHKC+MqZVq1ah4xGtjOLgHQWjYBSMgmENREOxgoDhp2xkASIDYxgoGwUUACJDdlTZKBgFo2DAAAAZAflVkm2NtwAAAABJRU5ErkJggg==',
			),
			'center' => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAADFBMVEX////V1dUAhbo+yP8aB7nsAAAARElEQVRYR2NgGKngPwT8GVU2BJQNb6C1atUCfHjEKRsFo2BEANFQrCBg+CkbWYDIwBgGykYBBYDIkB1VNgpGwSgYMAAAzIYr4wYj4sEAAAAASUVORK5CYII=',
			),
			'right'  => array(
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAMAAABpj1iyAAAADFBMVEUAhbo+yP/V1dX///9l36pFAAAAdUlEQVR4Ae3VMQrAMAwEQSX5/5/TujIYJPDBbKduqlN9V4aFhTXYsy+JVWsNdz4LCwtrJiyvGgsLCwsLCwsrioWFhYWFhYWFhfVOhoWFFTwQWFhYPYuAhYVlt7CwsLAOpxMLCwsrdE6xsLCwsLCwsLCwsLCwfkRXrgTYLelPAAAAAElFTkSuQmCC',
			),
		);
	}

	/**
	 * Add partial refresh
	 */
	private function partial_refresh() {
		$this->add_partial(
			new Partial(
				'neve_header_layout_partial',
				array(
					'selector'            => '.nv-navbar',
					'settings'            => array( 'neve_navigation_layout', 'neve_last_menu_item' ),
					'render_callback'     => array( $this, 'nav_content_callback' ),
					'container_inclusive' => true,
				)
			)
		);
	}

	/**
	 * Nav content callback.
	 */
	public function nav_content_callback() {
		$nav_view = new Header();
		$nav_view->render_navigation();
	}
}
