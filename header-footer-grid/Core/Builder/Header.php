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
use Neve\Core\Styles\Dynamic_Selector;
use Neve\Customizer\Controls\React\Presets_Selector;
use HFG\Core\Settings\Manager as SettingsManager;
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

		add_filter( 'hfg_header_wrapper_class', [ $this, 'add_class_to_header_wrapper' ] );
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

		$wp_customize->add_section(
			'neve_pro_global_header_settings',
			[
				'title'    => __( 'General', 'neve' ),
				'priority' => 200,
				'panel'    => 'hfg_header',
			]
		);

		$this->customize_header_background();

		SettingsManager::get_instance()->load( 'neve_pro_global_header_settings', $wp_customize );

		return parent::customize_register( $wp_customize );
	}

	/**
	 * Registers controls for global header background
	 */
	private function customize_header_background() {
		SettingsManager::get_instance()->add(
			[
				'id'        => 'background_heading',
				'group'     => 'neve_pro_global_header_settings',
				'label'     => esc_html__( 'Background', 'neve' ),
				'section'   => 'neve_pro_global_header_settings',
				'priority'  => 15,
				'transport' => 'postMessage',
				'type'      => 'Neve\Customizer\Controls\Heading',
				'options'   => [
					'accordion'        => true,
					'controls_to_wrap' => 5,
					'expanded'         => true,
					'class'            => 'background-accordion',
				],
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => 'advanced_style',
				'group'              => 'neve_pro_global_header_settings',
				'label'              => esc_html__( 'Enable Individual Row Background', 'neve' ),
				'section'            => 'neve_pro_global_header_settings',
				'type'               => 'neve_toggle_control',
				'priority'           => 15,
				'transport'          => 'refresh',
				'sanitize_callback'  => 'neve_sanitize_checkbox',
				'default'            => true,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => 'background',
				'group'                 => 'neve_pro_global_header_settings',
				'section'               => 'neve_pro_global_header_settings',
				'label'                 => esc_html__( 'Global Background', 'neve' ),
				'description'           => esc_html__( 'A background color or image that spans across all header rows.', 'neve' ),
				'type'                  => 'neve_background_control',
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					'cssVar' => [
						'vars'     => 'backgroundControl',
						'selector' => '.global-styled',
					],
				],
				'options'               => [
					'priority'        => 15,
					'active_callback' => [ $this, 'background_options_active_callback' ],
				],
				'default'               => [
					'type'       => 'color',
					'colorValue' => 'var(--nv-site-bg)',
				],
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'neve_sanitize_background',
				'conditional_header'    => true,
			]
		);

		$rows = [ 'top', 'main', 'bottom' ];
		foreach ( $rows as $row ) {
			SettingsManager::get_instance()->add(
				[
					'id'                => $row . '_shortcut',
					'group'             => 'neve_pro_global_header_settings',
					'section'           => 'neve_pro_global_header_settings',
					'transport'         => 'postMessage',
					'sanitize_callback' => 'esc_attr',
					'type'              => '\Neve\Customizer\Controls\Button',
					'priority'          => 15,
					'options'           => [
						// translators: %s row name
						'text_before'      => sprintf( __( 'Set Background for the %s Row', 'neve' ), ucfirst( $row ) ),
						'text_after'       => '.',
						'button_text'      => __( 'here', 'neve' ),
						'button_class'     => 'button_background',
						'shortcut'         => true,
						'is_button'        => false,
						'control_to_focus' => 'hfg_header_layout_' . $row . '_background',
						'active_callback'  => function () {
							return get_theme_mod( 'neve_pro_global_header_settings_advanced_style', true );
						},
					],
				]
			);
		}
	}

	/**
	 * Adds a class to the header wrapper.
	 *
	 * @param string $classes Existing classes.
	 * @return string Updated classes.
	 */
	public function add_class_to_header_wrapper( $classes ) {
		return $classes . $this->background_options_active_callback() ? ' global-styled' : '';
	}

	/**
	 * Returns true if individual options from header background are disabled
	 *
	 * @return bool
	 */
	public function background_options_active_callback() {
		return ! get_theme_mod( 'neve_pro_global_header_settings_advanced_style', true );
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
	 * Method to add global header css styles.
	 *
	 * @param array $css_array An array containing css rules.
	 * @return array
	 */
	public function add_style( array $css_array = array() ) {
		$background = get_theme_mod(
			'neve_pro_global_header_settings_background',
			[
				'type'       => 'color',
				'colorValue' => 'var(--nv-site-bg)',
			]
		);

		$rules         = [];
		$control_id    = 'neve_pro_global_header_settings_background';
		$selector      = '.global-styled';
		$default_color = 'var(--nv-site-bg)';

		if ( $background['type'] === 'color' && ! empty( $background['colorValue'] ) ) {
			$rules = array_merge(
				$rules,
				[
					'--bgColor' => [
						Dynamic_Selector::META_KEY     => $control_id . '.colorValue',
						Dynamic_Selector::META_DEFAULT => $default_color,
					],
				]
			);
		}

		if ( $background['type'] === 'image' ) {
			$rules = array_merge(
				$rules,
				[
					'--overlayColor'     => [
						Dynamic_Selector::META_KEY => $control_id . '.overlayColorValue',
					],
					'--bgImage'          => [
						Dynamic_Selector::META_KEY    => $control_id,
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							$image = $this->get_row_featured_image( $value['imageUrl'], $value['useFeatured'], $meta );
							return sprintf( '%s:%s;', $css_prop, $image );
						},
					],
					'--bgPosition'       => [
						Dynamic_Selector::META_KEY    => $control_id,
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							if ( empty( $value['focusPoint'] ) || empty( $value['focusPoint']['x'] ) || empty( $value['focusPoint']['y'] ) ) {
								return '';
							}

							$parsed_position = round( $value['focusPoint']['x'] * 100 ) . '% ' . round( $value['focusPoint']['y'] * 100 ) . '%;';

							return sprintf( '%s:%s;', $css_prop, $parsed_position );
						},
					],
					'--bgAttachment'     => [
						Dynamic_Selector::META_KEY    => $control_id,
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							if ( ! isset( $value['fixed'] ) || $value['fixed'] !== true ) {
								return '';
							}

							return sprintf( '%s:fixed;', $css_prop );
						},
					],
					'--bgOverlayOpacity' => [
						Dynamic_Selector::META_KEY    => $control_id,
						Dynamic_Selector::META_FILTER => function ( $css_prop, $value, $meta, $device ) {
							if ( ! isset( $value['overlayOpacity'] ) ) {
								return '';
							}

							return sprintf( '%s:%s;', $css_prop, $value['overlayOpacity'] / 100 );
						},
					],
				]
			);
		}

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $selector,
			Dynamic_Selector::KEY_RULES    => $rules,
		];

		return parent::add_style( $css_array );
	}


	/**
	 * Returns the featured image for the header row.
	 *
	 * @param string  $image_url The image URL.
	 * @param boolean $use_featured Flag if featured image should be used.
	 * @param array   $meta Additional meta for the image.
	 *
	 * @return string
	 */
	private function get_row_featured_image( $image_url, $use_featured, $meta ) {
		$image = 'none';
		if ( ! empty( $use_featured ) && $use_featured === true && is_singular() ) {
			$featured_image = get_the_post_thumbnail_url();
			if ( ! empty( $featured_image ) ) {
				$image = sprintf( 'url("%s")', esc_url( $featured_image ) );
			} else {
				$image = sprintf( 'url("%s")', esc_url( $image_url ) );
			}
		} elseif ( ! empty( $image_url ) ) {
			$image = sprintf( 'url("%s")', esc_url( $image_url ) );
		}
		/**
		 * Filters the background featured image output url.
		 *
		 * @param string $image         The background image value: `none` or `url(<url>)`.
		 * @param boolean $use_featured Flag to specify if featured image should be used or fallback.
		 * @param array $meta           Additional meta for the image.
		 *
		 * @since 3.0.5
		 */
		return apply_filters( 'nv_builder_row_image_url', $image, $use_featured, $meta );
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
