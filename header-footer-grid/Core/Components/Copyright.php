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

use HFG\Main;
use WP_Customize_Manager;

/**
 * Class Copyright
 *
 * @package HFG\Core\Components
 */
class Copyright extends Abstract_Component {

	/**
	 * Copyright constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param string $panel The panel ID.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Copyright', 'neve' ) );
		$this->set_property( 'id', 'footer_copyright' );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'footer_copyright' );
		$this->set_property( 'panel', $panel );
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return array
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {
		$fn       = array( $this, 'render' );
		$selector = '.builder-item--' . $this->id;

		$wp_customize->add_section(
			$this->section,
			array(
				'title'    => $this->label,
				'priority' => 30,
				'panel'    => $this->panel,
			)
		);

		$wp_customize->add_setting(
			$this->id . '_content',
			array(
				'default'           => get_theme_mod(
					'neve_footer_text',
					apply_filters(
						'ti_wl_copyright',
						sprintf(
							/* translators: %1$s is Theme Name ( Neve ), %2$s is WordPress */
							esc_html__( '%1$s | Powered by %2$s', 'neve' ),
							wp_kses_post( '<p><a href="https://themeisle.com/themes/neve/" rel="nofollow">Neve</a>' ),
							wp_kses_post( '<a href="http://wordpress.org" rel="nofollow">WordPress</a></p>' )
						)
					)
				),
				'theme_supports'    => 'hfg_support',
				'transport'         => 'postMessage',
				'sanitize_callback' => 'wp_kses_post',
			)
		);
		$wp_customize->add_control(
			$this->id . '_content',
			[
				'label'   => esc_html__( 'Copyright', 'neve' ),
				'type'    => 'textarea',
				'section' => $this->section,
			]
		);

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial',
			array(
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
	 */
	public function render_component() {
		Main::get_instance()->load( 'component-copyright' );
	}
}
