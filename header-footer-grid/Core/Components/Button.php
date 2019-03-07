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

use WP_Customize_Manager;

/**
 * Class Button
 *
 * @package HFG\Core\Components
 */
class Button extends Abstract_Component {

	/**
	 * Button constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param string $panel The panel name.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Button', 'hfg-module' ) );
		$this->set_property( 'id', 'button_base' );
		$this->set_property( 'width', 1 );
		$this->set_property( 'section', 'header_button' );
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
				'default'        => __( 'Button', 'hfg-module' ),
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
	 * The render method for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return mixed
	 */
	public function render() {
		$item_classes   = array();
		$item_classes[] = 'item--inner';
		$item_classes[] = 'builder-item--' . $this->id;
		if ( strpos( $this->id, '-menu' ) ) {
			$item_classes[] = 'has_menu';
		}
		if ( is_customize_preview() ) {
			$item_classes[] = ' builder-item-focus';
		}

		$item_classes = join( ' ', $item_classes );

		$html  = '';
		$html .= '<div class="' . esc_attr( $item_classes ) . '" data-section="' . $this->section . '" data-item-id="' . esc_attr( $this->id ) . '" >';
		$html .= '<button>' . get_theme_mod( $this->section . '_text' . '_setting' ) . '</button>';
		if ( is_customize_preview() ) {
			$html .= '<span class="item--preview-name">' . esc_html( $this->label ) . '</span>';
		}
		$html .= '</div>';

		return $html;
	}
}
