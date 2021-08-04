<?php
/**
 * Header class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Builder;

use HFG\Core\Customizer\Header_Presets;
use HFG\Main;
use Neve\Customizer\Controls\React\Presets_Selector;
use WP_Customize_Manager;

/**
 * Class Header
 *
 * @package HFG\Core\Builder
 */
class Header extends Abstract_Builder {

	/**
	 * Builder name.
	 */
	const BUILDER_NAME = 'header';

	/**
	 * Header init.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'title', __( 'Header', 'neve' ) );
		$this->set_property(
			'description',
			apply_filters(
				'hfg_header_panel_description',
				sprintf(
				/* translators: %s link to documentation */
					esc_html__( 'Design your %1$s by dragging, dropping and resizing all the elements in real-time. %2$s.', 'neve' ),
					/* translators: %s builder type */
					$this->get_property( 'title' ),
					/* translators: %s link text */
					sprintf(
						'<br/><a target="_blank" rel="external noopener noreferrer" href="https://docs.themeisle.com/article/946-neve-doc#header"><span class="screen-reader-text">%s</span><svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" viewBox="0 0 512 512" width="12" height="12" style="margin-right: 5px;"><path fill="currentColor" d="M432 320H400a16 16 0 0 0-16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320ZM488 0h-128c-21.4 0-32 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0Z"/></svg>%s</a>',
						esc_html__( '(opens in a new tab)', 'neve' ),
						esc_html__( 'Read full documentation', 'neve' )
					)
				)
			)
		);
		$migrated_hfg = neve_is_new_builder();

		$this->set_property(
			'instructions_array',
			array(
				'description'     => __( 'Build your own header or choose from preset options.', 'neve' ),
				'quickLinks'      => array(
					'custom_logo'                       => array(
						'label' => esc_html__( 'Change Logo', 'neve' ),
						'icon'  => 'dashicons-editor-customchar',
					),
					'hfg_header_layout_main_background' => array(
						'label' => esc_html__( 'Change Header Color', 'neve' ),
						'icon'  => 'dashicons-admin-appearance',
					),
					'primary-menu_shortcut'             => array(
						'label' => esc_html__( 'Change Menu', 'neve' ),
						'icon'  => 'dashicons-menu',
					),
				),
				'builderMigrated' => $migrated_hfg,
				'hadOldBuilder'   => neve_had_old_hfb() && ! neve_is_new_skin(),
			)
		);
	}

	/**
	 * Called to register component controls.
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 * @since   1.0.0
	 * @access  public
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {
		if ( ! neve_is_new_builder() ) {
			return parent::customize_register( $wp_customize );
		}

		$section = $wp_customize->get_section( 'neve_pro_global_header_settings' );
		if ( ! empty( $section ) ) {
			$section->priority = 201;
		}

		$wp_customize->add_section(
			'neve_header_presets',
			[
				'title'    => __( 'Header Presets', 'neve' ),
				'priority' => 200,
				'panel'    => 'hfg_header',
			]
		);

		$wp_customize->add_setting(
			'hfg_neve_header_presets',
			[
				'sanitize_callback' => 'sanitize_text_field',
				'label'             => __( 'Header Presets', 'neve' ),
			]
		);

		$wp_customize->add_control(
			new Presets_Selector(
				$wp_customize,
				'hfg_neve_header_presets',
				[
					'section'   => 'neve_header_presets',
					'transport' => 'postMessage',
					'priority'  => 30,
					'presets'   => $this->get_header_presets(),
					'builder'   => $this->layout_control_id,
				]
			)
		);

		return parent::customize_register( $wp_customize );
	}


	/**
	 * Method called via hook.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function load_template() {
		Main::get_instance()->load( 'header-wrapper' );
	}

	/**
	 * Get builder id.
	 *
	 * @return string Builder id.
	 */
	public function get_id() {
		return self::BUILDER_NAME;
	}

	/**
	 * Render builder row.
	 *
	 * @param string $device_id The device id.
	 * @param string $row_id The row id.
	 * @param array  $row_details Row data.
	 */
	public function render_row( $device_id, $row_id, $row_details ) {

		$name = $row_id;

		if ( $row_id === 'sidebar' && $device_id === 'mobile' ) {
			$name = 'mobile';
		}

		Main::get_instance()->load( 'row-wrapper', $name );
	}


	/**
	 * Return  the builder rows.
	 *
	 * @return array
	 * @since   1.0.0
	 * @updated 1.0.1
	 * @access  protected
	 */
	protected function get_rows() {
		return [
			'top'     => array(
				'title'       => esc_html__( 'Header Top', 'neve' ),
				'description' => $this->get_property( 'description' ),
			),
			'main'    => array(
				'title'       => esc_html__( 'Header Main', 'neve' ),
				'description' => $this->get_property( 'description' ),
			),
			'bottom'  => array(
				'title'       => esc_html__( 'Header Bottom', 'neve' ),
				'description' => $this->get_property( 'description' ),
			),
			'sidebar' => array(
				'title'       => esc_html__( 'Mobile Sidebar', 'neve' ),
				'description' => $this->get_property( 'description' ),
			),
		];
	}


	/**
	 * Get the header presets.
	 *
	 * @return array
	 */
	private function get_header_presets() {
		$presets = [
			[
				'label' => 'Classic',
				'image' => NEVE_ASSETS_URL . 'img/header-presets/Classic.jpg',
				'setup' => '{"hfg_header_layout_v2":"{\"desktop\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"logo\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"primary-menu\"},{\"id\":\"header_search_responsive\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]}},\"mobile\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"logo\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"nav-icon\"},{\"id\":\"header_search_responsive\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"sidebar\":[{\"id\":\"primary-menu\"}]}}"}',
			],
			[
				'label' => 'Inverted',
				'image' => NEVE_ASSETS_URL . 'img/header-presets/Inverted.jpg',
				'setup' => '{"hfg_header_layout_v2":"{\"desktop\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"primary-menu\"},{\"id\":\"header_search_responsive\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"logo\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]}},\"mobile\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"nav-icon\"},{\"id\":\"header_search_responsive\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"logo\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"sidebar\":[{\"id\":\"primary-menu\"}]}}","logo_component_align":{"mobile":"right","tablet":"right","desktop":"right"}}',
			],
			[
				'label' => 'Centered',
				'image' => NEVE_ASSETS_URL . 'img/header-presets/Centered.jpg',
				'setup' => '{"hfg_header_layout_v2":"{\"desktop\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[],\"c-left\":[],\"center\":[{\"id\":\"logo\"}],\"c-right\":[],\"right\":[]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[{\"id\":\"primary-menu\"}],\"c-right\":[],\"right\":[]}},\"mobile\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[],\"c-left\":[],\"center\":[{\"id\":\"logo\"}],\"c-right\":[],\"right\":[]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[{\"id\":\"nav-icon\"}],\"c-right\":[],\"right\":[]},\"sidebar\":[{\"id\":\"primary-menu\"}]}}","logo_component_align":{"mobile":"center","tablet":"center","desktop":"center"}}',
			],
			[
				'label' => 'Spaced',
				'image' => NEVE_ASSETS_URL . 'img/header-presets/Spaced.jpg',
				'setup' => '{"hfg_header_layout_v2":"{\"desktop\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"header_search_responsive\"}],\"c-left\":[],\"center\":[{\"id\":\"logo\"}],\"c-right\":[],\"right\":[{\"id\":\"nav-icon\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]}},\"mobile\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"header_search_responsive\"}],\"c-left\":[],\"center\":[{\"id\":\"logo\"}],\"c-right\":[],\"right\":[{\"id\":\"nav-icon\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"sidebar\":[{\"id\":\"primary-menu\"}]}}","logo_component_align":{"mobile":"center","tablet":"center","desktop":"center"}}',
			],
			[
				'label' => 'Collapsed',
				'image' => NEVE_ASSETS_URL . 'img/header-presets/ClassicCollapsed.jpg',
				'setup' => '{"hfg_header_layout_v2":"{\"desktop\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"logo\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"header_search_responsive\"},{\"id\":\"nav-icon\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]}},\"mobile\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"logo\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"header_search_responsive\"},{\"id\":\"nav-icon\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"sidebar\":[{\"id\":\"primary-menu\"}]}}"}',
			],
			[
				'label' => 'Search Field',
				'image' => NEVE_ASSETS_URL . 'img/header-presets/SearchField.jpg',
				'setup' => '{"hfg_header_layout_v2":"{\"desktop\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"logo\"},{\"id\":\"primary-menu\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"header_search\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]}},\"mobile\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"logo\"},{\"id\":\"nav-icon\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"header_search_responsive\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"sidebar\":[{\"id\":\"primary-menu\"}]}}"}',
			],
			[
				'label' => 'Button Item',
				'image' => NEVE_ASSETS_URL . 'img/header-presets/ButtonItem.jpg',
				'setup' => '{"hfg_header_layout_v2":"{\"desktop\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"logo\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"primary-menu\"},{\"id\":\"button_base\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]}},\"mobile\":{\"top\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"main\":{\"left\":[{\"id\":\"logo\"}],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[{\"id\":\"nav-icon\"}]},\"bottom\":{\"left\":[],\"c-left\":[],\"center\":[],\"c-right\":[],\"right\":[]},\"sidebar\":[{\"id\":\"primary-menu\"},{\"id\":\"button_base\"}]}}"}',
			],
		];

		return apply_filters( 'neve_header_presets_v2', $presets );
	}
}
