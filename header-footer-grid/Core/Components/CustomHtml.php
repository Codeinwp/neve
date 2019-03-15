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
 * Class Copyright
 *
 * @package HFG\Core\Components
 */
class CustomHtml extends Abstract_Component {

	/**
	 * CustomHtml constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param string $panel The panel ID.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'HTML', 'hfg-module' ) );
		$this->set_property( 'id', 'custom_html' );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'custom_html' );
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
		$fn       = array( $this, 'render' );
		$selector = '.builder-item--' . $this->id;

		$wp_customize->add_section(
			$this->section, array(
				'title'    => $this->label,
				'priority' => 30,
				'panel'    => $this->panel,
			)
		);

		$wp_customize->add_setting(
			$this->id . '_content',
			array(
				'default'        => '',
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			$this->id . '_content',
			[
				'label'   => esc_html__( 'Custom HTML', 'hfg-module' ),
				'type'    => 'textarea',
				'section' => $this->section,
			]
		);

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial', array(
				'selector'        => $selector,
				'settings'        => array(
					$this->id . '_content',
				),
				'render_callback' => $fn,
			)
		);

		return parent::customize_register( $wp_customize );
	}

	/**
	 * Render method for component.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return mixed|string
	 */
	public function render() {
		$html           = '';
		$item_classes   = array();
		$item_classes[] = 'item--inner';
		$item_classes[] = 'builder-item--' . $this->id;
		if ( is_customize_preview() ) {
			$item_classes[] = ' builder-item-focus';
		}

		$item_classes = join( ' ', $item_classes );

		$content = get_theme_mod( $this->id . '_content', '' );

		$html .= '<div class="' . esc_attr( $item_classes ) . '" data-section="' . $this->section . '" data-item-id="' . esc_attr( $this->id ) . '" >';
		$html .= wp_kses_post( balanceTags( $content, true ) );
		if ( is_customize_preview() ) {
			$html .= '<span class="item--preview-name">' . esc_html( $this->label ) . '</span>';
		}
		$html .= '</div>';

		return $html;
	}
}
