<?php
namespace HFG\Core\Components;

use HFG\Core\Abstract_Component;
use WP_Customize_Color_Control;
use WP_Customize_Manager;

class Button extends Abstract_Component {

	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Button', 'hfg-module' ) );
		$this->set_property( 'id', 'button_base' );
		$this->set_property( 'col', 0 );
		$this->set_property( 'row', 'top' );
		$this->set_property( 'width', 1 );
		$this->set_property( 'section', 'header_button' );
		$this->set_property( 'panel', $panel );
	}

	public function get_settings() {
		$default = parent::get_settings();
		return wp_parse_args(
			array(
				'col' => 2,
			),
			$default
		);
	}

	public function customize_register( WP_Customize_Manager $wp_customize ) {
		$prefix   = $this->section;
		$fn       = array( $this, 'render' );
		$selector = 'a.item--' . $this->id;

		$wp_customize->add_section( $this->section , array(
			'title'    => $this->label,
			'priority' => 30,
			'panel' => $this->panel,
		) );

		$wp_customize->add_setting( $prefix . '_text' . '_setting' , array(
			'theme_supports'  => 'hfg_support',
			'default'   => __( 'Button', 'hfg-module' ),
			'transport' => 'refresh',
		) );

		$wp_customize->add_control( $prefix . '_text', array(
			'name'            => $prefix . '_text',
			'label'           => __( 'Text', 'hfg-module' ),
			'type'            => 'text',
			'section'         => $this->section,
			'selector'        => $selector,
			'render_callback' => $fn,
			'settings'        => $prefix . '_text' . '_setting',
		) );

		parent::customize_register( $wp_customize );
	}

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

		$item_classes   = join( ' ', $item_classes );

		$html = '';
		$html .= '<div class="' . esc_attr( $item_classes ) . '" data-section="' . $this->section . '" data-item-id="' . esc_attr( $this->id ) . '" >';
		$html .= '<button>' . get_theme_mod( $this->section . '_text' . '_setting' ) . '</button>';
		if ( is_customize_preview() ) {
			$html .= '<span class="item--preview-name">' . esc_html( $this->label ) . '</span>';
		}
		$html .= '</div>';

		return $html;
	}
}
