<?php
namespace HFG\Core\Components;

use HFG\Core\Abstract_Component;
use WP_Customize_Manager;

class Abstract_FooterWidget extends Abstract_Component {

	public function footer_widgets_show( $active, $section ) {
		if ( strpos( $section->id, 'widgets-footer-' ) ) {
			$active = true;
		}

		return $active;
	}

	public function get_settings() {
		$default =  parent::get_settings();
		return wp_parse_args(
			array(
				'col' => 2
			),
			$default
		);
	}

	public function customize_register( WP_Customize_Manager $wp_customize ) {

		$wp_customize->add_section(
			$this->section,
			array(
				'title' => $this->label,
			)
		);

		$wp_customize->get_section( $this->section )->panel = $this->panel;

		$wp_customize->selective_refresh->add_partial( $this->id . '_partial', array(
			'selector' => '.builder-item--' . $this->id,
			'settings' => array(),
			'render_callback' => array( $this, 'render' )
		) );

		parent::customize_register( $wp_customize );
	}

	private function safe_echo( $function, ...$args ) {
		ob_start();
		call_user_func( $function, ...$args );
		return  ob_get_clean();
	}

	protected function render_widget( &$html ) {
		if ( is_active_sidebar( $this->id ) ) {
			$html .= '<div class="widget-area">';
			$html .= $this->safe_echo( 'dynamic_sidebar', $this->id );
			$html .= '</div>';
			return $html;
		}


		if ( current_user_can( 'edit_theme_options' ) ) {
			$html .= '<div class="widget-area">';

			$html .= '<section id="placeholder-widget-text" class="widget widget_text">';
			$html .= '<h4 class="widget-title">' . $this->label . '</h4>';
			$html .= '<div class="textwidget">';
			$html .= sprintf(
						__( '<p>Replace this widget content by going to <a href="%1$s"><strong>Appearance &rarr; Customize &rarr; HFG Footer &rarr; Footer %2$s</strong></a> and adding widgets into this widget area.</p>', 'hfg-module' ),
						esc_url( admin_url( 'customize.php?autofocus[section]=sidebar-widgets-footer-' . $this->id ) ),
						$this->id
					);
			$html .= '</div>';
			$html .= '</section>';

			$html .= '</div>';
		}
		return $html;
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
		$item_classes   = join( ' ', $item_classes );

		$html .= '<div class="' . esc_attr( $item_classes ) . '" data-section="' . $this->section . '" data-item-id="' . esc_attr( $this->id ) . '" >';
		$this->render_widget( $html );
		if ( is_customize_preview() ) {
			$html .= '<span class="item--preview-name">' . esc_html( $this->label ) . '</span>';
		}
		$html .= '</div>';

		return $html;
	}
}