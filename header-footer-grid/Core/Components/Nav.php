<?php
namespace HFG\Core\Components;

use HFG\Core\Abstract_Component;
use HFG\Core\Customizer\Image_Radio_Control;
use HFG\Core\Customizer\Slider_Control;
use HFG\Core\Customizer\Text_Radio_Control;
use HFG\Core\Customizer\Toggle_Control;
use HFG\Core\Settings;
use Neve\Views\Nav_Walker;
use WP_Customize_Manager;

class Nav extends Abstract_Component {

	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Primary Menu', 'hfg-module' ) );
		$this->set_property( 'id', 'primary-menu' );
		$this->set_property( 'col', 0 );
		$this->set_property( 'row', 'top' );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'header_menu_primary' );
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
		$fn       = array( $this, 'render' );
		$selector     = '.builder-item--' . $this->id . ' .nav-menu-desktop .primary-menu-ul';

		$wp_customize->add_section( $this->section , array(
			'title'    => $this->label,
			'priority' => 30,
			'panel' => $this->panel,
		) );

		$wp_customize->add_setting( $this->id . '_style',
			array(
				'default' => 'style-plain',
				'theme_supports'  => 'hfg_support',
				'transport' => 'postMessage',
			)
		);
		$wp_customize->add_control( new Image_Radio_Control(
			$wp_customize,
			$this->id . '_style',
			[
				'label' => __( 'Skin Mode' ),
				'section' => $this->section,
				'choices' => array(
					'style-plain' => array(
						'image' => Settings::get_instance()->url . '/assets/images/customizer/menu_style_1.svg',
						'name' => __( 'Plain' ),
					),
					'style-full-height' => array(
						'image' => Settings::get_instance()->url . '/assets/images/customizer/menu_style_2.svg',
						'name' => __( 'Full Height' ),
					),
					'style-border-bottom' => array(
						'image' => Settings::get_instance()->url . '/assets/images/customizer/menu_style_3.svg',
						'name' => __( 'Bottom Border' ),
					),
					'style-border-top' => array(
						'image' => Settings::get_instance()->url . '/assets/images/customizer/menu_style_4.svg',
						'name' => __( 'Top Border' ),
					),
				),
			]
		) );

		$wp_customize->selective_refresh->add_partial( $this->id . '_partial', array(
			'selector' => $selector,
			'settings' => array(
				$this->id . '_style',
			),
			'render_callback' => $fn,
		) );

		parent::customize_register( $wp_customize );
	}

	private function safe_echo( $function, ...$args ) {
		ob_start();
		call_user_func( $function, ...$args );
		return  ob_get_clean();
	}

	public function render() {
		$html = '';
		$item_classes   = array();
		$item_classes[] = 'item--inner';
		$item_classes[] = 'builder-item--' . $this->id;
		if ( strpos( $this->id, '-menu' ) ) {
			$item_classes[] = 'has_menu';
		}
		if ( is_customize_preview() ) {
			$item_classes[] = ' builder-item-focus';
		}

		$style = sanitize_text_field( get_theme_mod( $this->id . '_style' ) );
		if ( $style ) {
			$style = sanitize_text_field( $style );
		}

		$hide_arrow = sanitize_text_field( get_theme_mod( $this->id . '_hide-arrow' ) );
		if ( $hide_arrow ) {
			$style .= ' hide-arrow-active';
		}

		$item_classes   = join( ' ', $item_classes );
		$container_classes = $this->id . ' ' . $this->id . '-__id__ nav-menu-__device__ ' . $this->id . '-__device__' . ( $style ? ' ' . $style : '' );

		$html .= '<div class="' . esc_attr( $item_classes ) . '" data-section="' . $this->section . '" data-item-id="' . esc_attr( $this->id ) . '" >';
		$html .= '<nav  id="site-navigation-__id__-__device__" class="site-navigation ' . $container_classes . '">';
		$html .= $this->safe_echo( 'wp_nav_menu',
			array(
				'theme_location' => 'primary',
				'menu_id'        => 'nv-primary-navigation',
				'container'      => 'ul',
				'walker'         => new Nav_Walker(),
				'fallback_cb'    => '\Neve\Views\Nav_Walker::fallback',
			)
		);
		$html .= '</nav>';
		if ( is_customize_preview() ) {
			$html .= '<span class="item--preview-name">' . esc_html( $this->label ) . '</span>';
		}
		$html .= '</div>';

		return $html;
	}
}
