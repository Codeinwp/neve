<?php
/**
 * Social Icons Component class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Components;

use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use Neve\Core\Dynamic_Css;
use Neve\Core\Styles\Dynamic_Selector;
use Neve\Core\Theme_Info;

/**
 * Class SocialIcons
 *
 * @package HFG\Core\Components
 */
class SocialIcons extends Abstract_Component {
	use Theme_Info;

	const COMPONENT_ID      = 'social_icons_free';
	const LINKS_ID          = 'links';
	const NEW_TAB_ID        = 'new_tab';
	const SIZE_ID           = 'icon_size';
	const SPACING_ID        = 'spacing';
	const COLOR_ID          = 'color';
	const HOVER_COLOR_ID    = 'hover_color';
	const DEFAULT_ICON_SIZE = 18;
	const DEFAULT_SPACING   = 10;

	/**
	 * Whether the shared component CSS was already added to the page.
	 *
	 * @var bool
	 */
	private static $style_added = false;

	/**
	 * SocialIcons constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Social Icons', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'width', 3 );
		$this->set_property( 'icon', 'share' );
		$this->set_property( 'has_horizontal_alignment', true );

		add_action( 'wp_enqueue_scripts', [ $this, 'load_style' ] );
	}

	/**
	 * Pro ships its own Social Icons component, so this one is only offered without a valid Pro license.
	 *
	 * @return bool
	 */
	public function is_active() {
		return ! $this->has_valid_addons();
	}

	/**
	 * Get the social networks that can be picked, keyed by slug.
	 *
	 * The list and the icons come from the core Social Icons block.
	 *
	 * @return array<string, string>
	 */
	public static function get_networks() {
		if ( ! function_exists( 'block_core_social_link_services' ) ) {
			return [];
		}

		$networks = [];
		foreach ( block_core_social_link_services() as $slug => $service ) {
			$networks[ $slug ] = $service['name'];
		}
		asort( $networks );

		return $networks;
	}

	/**
	 * Get the default links.
	 *
	 * @return string
	 */
	public static function get_default_links() {
		$networks = self::get_networks();
		$defaults = [
			[
				'title'      => 'Facebook',
				'network'    => 'facebook',
				'url'        => '#',
				'visibility' => 'yes',
			],
			[
				'title'      => 'X',
				'network'    => 'x',
				'url'        => '#',
				'visibility' => 'yes',
			],
			[
				'title'      => 'Instagram',
				'network'    => 'instagram',
				'url'        => '#',
				'visibility' => 'yes',
			],
		];

		// Older WP versions don't know every network (X was added in 6.4), so keep only the ones core can render.
		return wp_json_encode(
			array_values(
				array_filter(
					$defaults,
					function ( $item ) use ( $networks ) {
						return isset( $networks[ $item['network'] ] );
					}
				)
			)
		);
	}

	/**
	 * Add the component CSS when the component is used.
	 *
	 * @return void
	 */
	public function load_style() {
		if ( self::$style_added || ( ! $this->is_component_active() && ! is_customize_preview() ) ) {
			return;
		}

		$css = '.nv-social-icons {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: var(--justify, flex-start);
			gap: var(--spacing, 10px);
			margin: 0;
			padding: 0;
			list-style: none;
		}
		.nv-social-icons a {
			display: flex;
			align-items: center;
			justify-content: center;
			/* WCAG 2.5.8: 24x24 minimum target regardless of icon size. */
			min-width: 24px;
			min-height: 24px;
			color: var(--color, currentColor);
		}
		.nv-social-icons a:hover,
		.nv-social-icons a:focus {
			color: var(--hovercolor, var(--color, currentColor));
		}
		.nv-social-icons svg {
			width: var(--iconsize, 18px);
			height: var(--iconsize, 18px);
			fill: currentColor;
		}';

		wp_add_inline_style( 'neve-style', Dynamic_Css::minify_css( $css ) );
		self::$style_added = true;
	}

	/**
	 * Called to register component controls.
	 *
	 * @return void
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {
		SettingsManager::get_instance()->add(
			[
				'id'                 => self::LINKS_ID,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'neve_sanitize_social_icons',
				'default'            => self::get_default_links(),
				'label'              => __( 'Social Links', 'neve' ),
				'type'               => '\Neve\Customizer\Controls\React\Repeater',
				'section'            => $this->section,
				'options'            => [
					'fields' => [
						'title'   => [
							'type'  => 'text',
							'label' => __( 'Label', 'neve' ),
						],
						'network' => [
							'type'    => 'select',
							'label'   => __( 'Network', 'neve' ),
							'choices' => self::get_networks(),
						],
						'url'     => [
							'type'  => 'text',
							'label' => __( 'Link', 'neve' ),
						],
					],
				],
				'conditional_header' => $this->get_builder_id() === 'header',
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::NEW_TAB_ID,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => 1,
				'label'              => ucfirst( str_replace( [ '(', ')' ], '', __( '(opens in a new tab)', 'neve' ) ) ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => $this->get_builder_id() === 'header',
			]
		);

		$default_size_values = [
			'mobile'  => self::DEFAULT_ICON_SIZE,
			'tablet'  => self::DEFAULT_ICON_SIZE,
			'desktop' => self::DEFAULT_ICON_SIZE,
			'suffix'  => [
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			],
		];

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::SIZE_ID,
				'group'                 => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => [ $this, 'sanitize_responsive_int_json' ],
				'label'                 => __( 'Icon Size', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Responsive_Range',
				'default'               => $default_size_values,
				'options'               => [
					'input_attrs' => [
						'min'        => 8,
						'max'        => 120,
						'defaultVal' => $default_size_values,
						'units'      => [ 'px' ],
					],
				],
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					'cssVar' => [
						'vars'       => '--iconsize',
						'responsive' => true,
						'suffix'     => 'px',
						'selector'   => '.builder-item--' . $this->get_id(),
					],
				],
				'section'               => $this->section,
				'conditional_header'    => $this->get_builder_id() === 'header',
			]
		);

		$default_spacing_values = [
			'mobile'  => self::DEFAULT_SPACING,
			'tablet'  => self::DEFAULT_SPACING,
			'desktop' => self::DEFAULT_SPACING,
			'suffix'  => [
				'mobile'  => 'px',
				'tablet'  => 'px',
				'desktop' => 'px',
			],
		];

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::SPACING_ID,
				'group'                 => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => [ $this, 'sanitize_responsive_int_json' ],
				'label'                 => __( 'Items Spacing (px)', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Responsive_Range',
				'default'               => $default_spacing_values,
				'options'               => [
					'input_attrs' => [
						'min'        => 0,
						'max'        => 100,
						'defaultVal' => $default_spacing_values,
						'units'      => [ 'px' ],
					],
				],
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					'cssVar' => [
						'vars'       => '--spacing',
						'responsive' => true,
						'suffix'     => 'px',
						'selector'   => '.builder-item--' . $this->get_id(),
					],
				],
				'section'               => $this->section,
				'conditional_header'    => $this->get_builder_id() === 'header',
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::COLOR_ID,
				'group'                 => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'neve_sanitize_colors',
				'default'               => '',
				'label'                 => __( 'Icons Color', 'neve' ),
				'type'                  => 'neve_color_control',
				'section'               => $this->section,
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					'cssVar' => [
						'vars'     => '--color',
						'selector' => '.builder-item--' . $this->get_id(),
					],
				],
				'conditional_header'    => $this->get_builder_id() === 'header',
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::HOVER_COLOR_ID,
				'group'                 => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'neve_sanitize_colors',
				'default'               => 'var(--nv-primary-accent)',
				'label'                 => __( 'Icons Hover Color', 'neve' ),
				'type'                  => 'neve_color_control',
				'section'               => $this->section,
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					'cssVar' => [
						'vars'     => '--hovercolor',
						'selector' => '.builder-item--' . $this->get_id(),
					],
				],
				'conditional_header'    => $this->get_builder_id() === 'header',
			]
		);
	}

	/**
	 * Method to add Component css styles.
	 *
	 * @param array<int, array<string, mixed>> $css_array An array containing css rules.
	 *
	 * @return array<int, array<string, mixed>>
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_style( array $css_array = array() ) {
		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => '.builder-item--' . $this->get_id(),
			Dynamic_Selector::KEY_RULES    => [
				'--iconsize'   => [
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::SIZE_ID,
					Dynamic_Selector::META_DEFAULT       => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::SIZE_ID ),
					Dynamic_Selector::META_SUFFIX        => 'px',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				'--spacing'    => [
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::SPACING_ID,
					Dynamic_Selector::META_DEFAULT       => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::SPACING_ID ),
					Dynamic_Selector::META_SUFFIX        => 'px',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
				'--color'      => [
					Dynamic_Selector::META_KEY => $this->get_id() . '_' . self::COLOR_ID,
				],
				'--hovercolor' => [
					Dynamic_Selector::META_KEY     => $this->get_id() . '_' . self::HOVER_COLOR_ID,
					Dynamic_Selector::META_DEFAULT => SettingsManager::get_instance()->get_default( $this->get_id() . '_' . self::HOVER_COLOR_ID ),
				],
			],
		];

		return parent::add_style( $css_array );
	}

	/**
	 * The render method for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-social-icons' );
	}
}
