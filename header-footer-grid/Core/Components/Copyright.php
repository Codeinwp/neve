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

use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use WP_Customize_Manager;

/**
 * Class Copyright
 *
 * @package HFG\Core\Components
 */
class Copyright extends Abstract_Component {
	const COMPONENT_ID = 'footer_copyright';
	const CONTENT_ID   = 'content';

	/**
	 * Copyright constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Copyright', 'neve' ) );
		$this->set_property( 'id', self::COMPONENT_ID );
		$this->set_property( 'width', 2 );
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {
		SettingsManager::get_instance()->add(
			[
				'id'                => self::CONTENT_ID,
				'group'             => self::COMPONENT_ID,
				'transport'         => 'post' . self::COMPONENT_ID,
				'sanitize_callback' => 'wp_kses_post',
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
				'label'             => __( 'Copyright', 'neve' ),
				'type'              => 'textarea',
				'section'           => $this->section,
			]
		);

	}

	/**
	 * Render method for component.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-copyright' );
	}
}
