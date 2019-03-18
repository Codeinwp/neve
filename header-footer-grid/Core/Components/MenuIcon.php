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

use WP_Customize_Manager;

/**
 * Class MenuIcon
 *
 * @package HFG\Core\Components
 */
class MenuIcon extends Abstract_Component {

	/**
	 * MenuIcon constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param string $panel The panel name.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Menu Icon', 'hfg-module' ) );
		$this->set_property( 'id', 'nav-icon' );
		$this->set_property( 'width', 3 );
		$this->set_property( 'section', 'header_menu_icon' );
		$this->set_property( 'panel', $panel );
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {
		$prefix   = $this->section;
		$fn       = array( $this, 'render' );
		$selector = 'a.item--' . $this->id;

		$wp_customize->add_section(
			$this->section, array(
				'title'    => $this->label,
				'priority' => 30,
				'panel'    => $this->panel,
			)
		);

		$wp_customize->add_setting(
			$prefix . '_text' . '_setting', array(
				'theme_supports' => 'hfg_support',
				'default'        => __( 'Menu', 'hfg-module' ),
				'transport'      => 'refresh',
			)
		);

		$wp_customize->add_control(
			$prefix . '_text', array(
				'name'            => $prefix . '_text',
				'label'           => __( 'Text', 'hfg-module' ),
				'type'            => 'text',
				'section'         => $this->section,
				'selector'        => $selector,
				'render_callback' => $fn,
				'settings'        => $prefix . '_text' . '_setting',
			)
		);

		return parent::customize_register( $wp_customize );
	}

	/**
	 * Render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return mixed|string
	 */
	public function render_component() {
		$label      = get_theme_mod( $this->section . '_text' . '_setting' );
		$show_label = true;

		$item_classes   = array();
		$item_classes[] = 'item--inner';
		$item_classes[] = 'builder-item--' . $this->id;
		if ( strpos( $this->id, '-menu' ) ) {
			$item_classes[] = 'has_menu';
		}
		if ( is_customize_preview() ) {
			$item_classes[] = ' builder-item-focus';
		}

		$item_classes[] = 'menu-mobile-toggle item-button';
		$item_classes[] = 'is-size-desktop-medium';
		$item_classes[] = 'is-size-tablet-medium';
		$item_classes[] = 'is-size-mobile-medium';
		$label_classes  = array( 'nav-icon--label' );

		$html  = '<a class="' . esc_attr( join( ' ', $item_classes ) ) . '">';
		$html .= '<span class="hamburger hamburger--squeeze">';
		$html .= '<span class="hamburger-box">';
		$html .= '<span class="hamburger-inner"></span>';
		$html .= '</span>';
		$html .= '</span>';
		if ( $show_label ) {
			$html .= '</span>';
		}
		$html .= '<span class="' . esc_attr( join( ' ', $label_classes ) ) . '">' . $label . '</span>';

		if ( is_customize_preview() ) {
			$html .= '<span class="item--preview-name">' . esc_html( $this->label ) . '</span>';
		}
		$html .= '</a>';

		return $html;
	}
}
