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
						'<br/><a target="_blank" href="https://docs.themeisle.com/article/946-neve-doc#header">%s</a>',
						esc_html__( 'Read full documentation', 'neve' )
					)
				)
			)
		);
		$this->set_property(
			'instructions_array',
			array(
				'description' => sprintf(
				/* translators: %s builder type */
					esc_html__( 'Welcome to the %1$s builder! Click the “+” button to add a new component or follow the Quick Links.', 'neve' ),
					$this->get_property( 'title' )
				),
				'image'       => esc_url( get_template_directory_uri() . '/header-footer-grid/assets/images/customizer/hfg.mp4' ),
				'quickLinks'  => array(
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
	 * @param string $device_id   The device id.
	 * @param string $row_id      The row id.
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
				'title'       => esc_html__( 'Mobile menu content', 'neve' ),
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
		return apply_filters(
			'neve_header_presets',
			[
				[
					'label' => 'Classic',
					'image' => NEVE_ASSETS_URL . 'img/header-presets/Classic.jpg',
					'setup' => '{"hfg_header_layout":"{\"desktop\":{\"top\":[],\"main\":[{\"x\":0,\"y\":1,\"width\":4,\"height\":1,\"id\":\"logo\"},{\"x\":4,\"y\":1,\"width\":7,\"height\":1,\"id\":\"primary-menu\"},{\"x\":11,\"y\":1,\"width\":1,\"height\":1,\"id\":\"header_search_responsive\"}],\"bottom\":[]},\"mobile\":{\"top\":[],\"main\":[{\"x\":0,\"y\":1,\"width\":8,\"height\":1,\"id\":\"logo\"},{\"x\":8,\"y\":1,\"width\":4,\"height\":1,\"id\":\"nav-icon\"}],\"bottom\":[],\"sidebar\":[{\"x\":0,\"y\":1,\"width\":8,\"height\":1,\"id\":\"primary-menu\"}]}}", "primary-menu_component_align":"right","logo_component_align":"left","header_search_responsive_icon_size":"15"}',
				],
				[
					'label' => 'Inverted',
					'image' => NEVE_ASSETS_URL . 'img/header-presets/Inverted.jpg',
					'setup' => '{"hfg_header_layout":"{\"desktop\":{\"top\":[],\"main\":[{\"x\":6,\"y\":1,\"width\":1,\"height\":1,\"id\":\"header_search_responsive\"},{\"x\":0,\"y\":1,\"width\":6,\"height\":1,\"id\":\"primary-menu\"},{\"x\":8,\"y\":1,\"width\":4,\"height\":1,\"id\":\"logo\"}],\"bottom\":[]},\"mobile\":{\"top\":[],\"main\":[{\"x\":0,\"y\":1,\"width\":8,\"height\":1,\"id\":\"logo\"},{\"x\":8,\"y\":1,\"width\":4,\"height\":1,\"id\":\"nav-icon\"}],\"bottom\":[],\"sidebar\":[{\"x\":0,\"y\":1,\"width\":8,\"height\":1,\"id\":\"primary-menu\"}]}}","primary-menu_component_align":"left","logo_component_align":"right","header_search_responsive_icon_size":"15"}',
				],
				[
					'label' => 'Centered',
					'image' => NEVE_ASSETS_URL . 'img/header-presets/Centered.jpg',
					'setup' => '{"hfg_header_layout": "{\"desktop\":{\"top\":[],\"main\":[{\"x\":0,\"y\":1,\"width\":12,\"height\":1,\"id\":\"logo\"}],\"bottom\":[{\"x\":0,\"y\":1,\"width\":12,\"height\":1,\"id\":\"primary-menu\"}]},\"mobile\":{\"top\":[],\"main\":[{\"x\":0,\"y\":1,\"width\":8,\"height\":1,\"id\":\"logo\"},{\"x\":8,\"y\":1,\"width\":4,\"height\":1,\"id\":\"nav-icon\"}],\"bottom\":[],\"sidebar\":[{\"x\":0,\"y\":1,\"width\":8,\"height\":1,\"id\":\"primary-menu\"}]}}","primary-menu_component_align":"center","logo_component_align":"center","header_search_responsive_icon_size":"15"}',
				],
				[
					'label' => 'Spaced',
					'image' => NEVE_ASSETS_URL . 'img/header-presets/Spaced.jpg',
					'setup' => '{"hfg_header_layout": "{\"desktop\":{\"top\":[],\"main\":[{\"x\":0,\"y\":1,\"width\":1,\"height\":1,\"id\":\"header_search_responsive\"},{\"x\":4,\"y\":1,\"width\":4,\"height\":1,\"id\":\"logo\"},{\"x\":11,\"y\":1,\"width\":1,\"height\":1,\"id\":\"nav-icon\"}],\"bottom\":[]},\"mobile\":{\"top\":[],\"main\":[{\"x\":0,\"y\":1,\"width\":8,\"height\":1,\"id\":\"logo\"},{\"x\":8,\"y\":1,\"width\":4,\"height\":1,\"id\":\"nav-icon\"}],\"bottom\":[],\"sidebar\":[{\"x\":0,\"y\":1,\"width\":8,\"height\":1,\"id\":\"primary-menu\"}]}}","nav-icon_component_align": "right","logo_component_align": "center","header_search_responsive_icon_size":"25"}',
				],
			] 
		);
	}
}
