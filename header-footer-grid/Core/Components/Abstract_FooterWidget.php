<?php
/**
 * Abstract Footer Widget class for Header Footer Grid.
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
 * Class Abstract_FooterWidget
 *
 * @package HFG\Core\Components
 */
abstract class Abstract_FooterWidget extends Abstract_Component {

	/**
	 * Method to show footer widget
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param bool   $active Is active.
	 * @param object $section The section id.
	 *
	 * @return bool
	 */
	public function footer_widgets_show( $active, $section ) {
		if ( strpos( $section->id, 'widgets-footer-' ) ) {
			$active = true;
		}

		return $active;
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

		$wp_customize->add_section(
			$this->section,
			array(
				'title' => $this->label,
			)
		);

		$wp_customize->get_section( $this->section )->panel = $this->panel;

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial', array(
				'selector'        => '.builder-item--' . $this->id,
				'settings'        => array(),
				'render_callback' => array( $this, 'render' ),
			)
		);

		return parent::customize_register( $wp_customize );
	}

	/**
	 * Render widget.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @param string $html The HTML.
	 *
	 * @return string
	 */
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
				/* translators: %s1 - url, %s2 - widget id */
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

	/**
	 * The render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @return mixed|string
	 */
	public function render_component() {
		$html           = '';
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

		$html .= '<div class="' . esc_attr( $item_classes ) . '" data-section="' . $this->section . '" data-item-id="' . esc_attr( $this->id ) . '" >';
		$this->render_widget( $html );
		if ( is_customize_preview() ) {
			$html .= '<span class="item--preview-name">' . esc_html( $this->label ) . '</span>';
		}
		$html .= '</div>';

		return $html;
	}
}
