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
use Neve\Core\Styles\Dynamic_Selector;
use WP_Customize_Manager;

/**
 * Class Copyright
 *
 * @package HFG\Core\Components
 */
class Copyright extends Abstract_Component {
	const COMPONENT_ID = 'footer_copyright';
	const CONTENT_ID   = 'content';
	const COLOR_ID     = 'color';

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
		$this->set_property( 'icon', 'nametag' );
		$this->set_property( 'has_typeface_control', true );
		$this->set_property( 'default_typography_selector', $this->default_typography_selector . '.builder-item--' . $this->get_id() );
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
				'id'                 => self::CONTENT_ID,
				'group'              => self::COMPONENT_ID,
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . self::COMPONENT_ID,
				'sanitize_callback'  => 'wp_kses_post',
				'default'            => get_theme_mod(
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
				'label'              => __( 'Copyright', 'neve' ),
				'type'               => 'textarea',
				'section'            => $this->section,
				'use_dynamic_fields' => array( 'url', 'string' ),
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::COLOR_ID,
				'group'                 => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'neve_sanitize_colors',
				'label'                 => __( 'Text Color', 'neve' ),
				'type'                  => 'neve_color_control',
				'section'               => $this->section,
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					[
						'selector' => $this->default_typography_selector . ', ' . $this->default_typography_selector . ' *:not(a)',
						'prop'     => 'color',
						'fallback' => 'inherit',
					],
				],
			]
		);
	}


	/**
	 * Method to add Component css styles.
	 *
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_style( array $css_array = array() ) {
		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $this->default_typography_selector . ', ' . $this->default_typography_selector . ' *',
			Dynamic_Selector::KEY_RULES    => [
				\Neve\Core\Settings\Config::CSS_PROP_COLOR => [
					Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::COLOR_ID,
					Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::COLOR_ID ),
				],
			],
		];

		return parent::add_style( $css_array );
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
