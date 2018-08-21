<?php
/**
 * Navigation layout section.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Header Options
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
		if ( class_exists( 'WooCommerce' ) ) {
			$choices['cart'] = __( 'Cart', 'neve' );
		}

		$this->add_control(
			new Control(
				'neve_last_menu_item',
				array(
					'sanitize_callback' => array( $this, 'sanitize_last_menu_item' ),
					'transport'         => $this->selective_refresh,
					'default'           => 'none'
				),
				array(
					'label'    => __( 'Last Item in Menu', 'neve' ),
					'section'  => 'neve_primary_navigation',
					'type'     => 'select',
					'priority' => 30,
					'choices'  => $choices
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
		$allowed_values = array( 'none', 'search', 'cart' );
		if ( ! in_array( $value, $allowed_values ) ) {
			return 'none';
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
				'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqBAMAAACsf7WzAAAAD1BMVEX////V1dXF7v8Ahbo+yP+vNfjRAAAAWUlEQVR42u3TsQ2AMAxFQRAswAaIFViB/WeKlI4KgUJMwl3j7lXfA3+xXVvfas3HmZaWVtw/1mrRjmnPnl6tDlsAEcblFq2PtuhLyS1oxbWgjpIL1dICgEYlsKfbvyzuWeMAAAAASUVORK5CYII=',
			),
		);
	}
}