<?php
/**
 * Frontend Palette Switch Component class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Components;

use HFG\Core\Script_Register;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Dynamic_Selector;
use Neve\Core\Theme_Info;

/**
 * Class PaletteSwitch
 *
 * @package HFG\Core\Components
 */
class PaletteSwitch extends Abstract_Component {
	use Theme_Info;

	const COMPONENT_ID      = 'header_palette_switch';
	const DARK_PALETTE_ID   = 'dark_palette';
	const LIGHT_PALETTE_ID  = 'light_palette_description';
	const TOGGLE_ICON_ID    = 'toggle_icon';
	const TOGGLE_CUSTOM_ID  = 'toggle_icon_custom';
	const PLACEHOLDER_ID    = 'placeholder';
	const AUTO_ADJUST       = 'auto_adjust_color';
	const SIZE_ID           = 'icon_size';
	const DEFAULT_ICON_SIZE = 16;

	/**
	 * The section icon.
	 *
	 * @access protected
	 * @var string $icon
	 */
	protected $icon = 'buddicons-topics';
	/**
	 * The component default width.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var int $width
	 */
	protected $width = 1;
	/**
	 * The component slug.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @var string $section
	 */
	protected $component_slug = 'hfg-palette-icon';

	/**
	 * Return a svg icon for the provided string.
	 *
	 * @param string $icon The icon string.
	 *
	 * @return string
	 */
	public static function get_icon( $icon, $icon_custom = '' ) {
		if ( $icon === 'custom' ) {
			return $icon_custom;
		}

		$available_icons = [
			'contrast'      => '<svg aria-hidden="true" fill="currentColor" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256 C512,114.516,397.503,0,256,0z M276,471.079V40.921C385.28,50.889,472,142.704,472,256C472,369.28,385.294,461.11,276,471.079z" /></svg>',
			'night'         => '<svg aria-hidden="true" fill="currentColor" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>',
			'toggle'        => '<svg aria-hidden="true" fill="currentColor" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z" /></svg>',
			'accessibility' => '<svg aria-hidden="true" fill="currentColor" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48c114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 56C149.961 64 64 149.961 64 256s85.961 192 192 192 192-85.961 192-192S362.039 64 256 64zm0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807.851 101.023 12.306 123.052 25.037 155.621 3.617 9.26-.957 19.698-10.217 23.315-9.261 3.617-19.699-.957-23.316-10.217-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549-3.615 9.255-14.05 13.836-23.315 10.217-9.26-3.617-13.834-14.056-10.217-23.315 12.713-32.541 24.185-54.541 25.037-155.621-26.629-3.058-53.428-9.027-82.141-15.807-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0 8.599-2.03 17.218 3.294 19.249 11.895 2.029 8.601-3.297 17.219-11.897 19.249z" /></svg>',
		];

		if ( in_array( $icon, array_keys( $available_icons ), true ) ) {
			return $available_icons[ $icon ];
		}

		return $available_icons['contrast'];
	}

	/**
	 * PaletteSwitch constructor
	 *
	 * @return void
	 */
	public function init() {
		$this->set_property( 'label', __( 'Palette Switch', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'default_selector', '.builder-item--' . $this->get_id() );
		$this->set_property( 'is_auto_width', true );

		add_filter( 'neve_after_css_root', [ $this, 'toggle_css' ] );
		if ( defined( 'ELEMENTOR_VERSION' ) ) {
			add_filter( 'neve_elementor_colors', [ $this, 'toggle_elementor_css' ] );
		}
		add_action( 'wp_enqueue_scripts', [ $this, 'load_scripts' ] );
		add_filter( 'hfg_component_scripts', [ $this, 'register_script' ] );

		add_filter(
			'language_attributes',
			function ( $output ) {
				if ( neve_is_amp() ) {
					return $output . " [class]=\"isDark ? 'neve-dark-theme' : 'neve-light-theme'\" class=\"neve-dark-theme\" ";
				}

				return $output;
			}
		);
	}

	/**
	 * Register Inline Scripts for component.
	 *
	 * @return string
	 */
	public function register_script() {
		$script_register = Script_Register::get_instance();
		if ( ( $this->is_component_active() || is_customize_preview() ) && $script_register->is_queued( self::COMPONENT_ID ) === false ) {
			$script_register->register_script( self::COMPONENT_ID, $this->toggle_script() );
		}
		return $script_register->inline_scripts();
	}

	/**
	 * Load Component Scripts
	 *
	 * @return void
	 */
	public function load_scripts() {
		if ( $this->is_component_active() || is_customize_preview() ) {
			wp_add_inline_style( 'neve-style', $this->toggle_style() );
		}
	}

	/**
	 * Get CSS to use as inline script
	 *
	 * @return string
	 */
	public function toggle_style() {
		$css = '.toggle-palette a {
			display: flex;
			align-items: center;
		}
		.toggle-palette .icon {
			display: flex;
			width: var(--iconsize);
			height: var(--iconsize);
			fill: currentColor;
		}
		.toggle-palette .label {
			font-size: 0.85em;
			margin-left: 5px;
		}';

		return Dynamic_Css::minify_css( $css );
	}

	/**
	 * Get JS contents from file to use as inline script.
	 *
	 * @return string
	 */
	public function toggle_script() {
		$auto_adjust   = Mods::get( $this->get_id() . '_' . self::AUTO_ADJUST, 0 );
		$default_state = '"light"';
		if ( $auto_adjust ) {
			$default_state = 'window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"';
		}
		return '!function(){const e="neve_user_theme",t="data-neve-theme";let n=' . $default_state . ';"dark"===localStorage.getItem(e)&&(n="dark"),document.documentElement.setAttribute(t,n);document.addEventListener("click",(n=>{n.target.matches(".palette-icon-wrapper, .palette-icon-wrapper *")&&(n=>{n.preventDefault();const a="light"===document.documentElement.getAttribute(t)?"dark":"light";document.documentElement.setAttribute(t,a),localStorage.setItem(e,a)})(n)}))}();';
	}

	/**
	 * Utility method to return light and dark palette variants.
	 *
	 * @return array
	 */
	private function get_light_dark_palettes() {
		$default_light = 'base';
		$default_dark  = 'darkMode';

		$customizer       = Mods::get( 'neve_global_colors', neve_get_global_colors_default( true ) );
		$defined_palettes = $customizer['palettes'];
		$active_light     = $customizer['activePalette'];
		$active_dark      = Mods::get( $this->get_id() . '_' . self::DARK_PALETTE_ID, $default_dark );

		$palette_light = $defined_palettes[ $default_light ];
		if ( isset( $defined_palettes[ $active_light ] ) ) {
			$palette_light = $defined_palettes[ $active_light ];
		}

		$palette_dark = $defined_palettes[ $default_dark ];
		if ( isset( $defined_palettes[ $active_dark ] ) ) {
			$palette_dark = $defined_palettes[ $active_dark ];
		}

		return [ $palette_light, $palette_dark ];
	}

	/**
	 * Adds the palette variants to elementor
	 *
	 * @param string $css The global colors CSS from elementor.
	 *
	 * @return string
	 */
	public function toggle_elementor_css( $css ) {
		if ( ! $this->is_component_active() && ! is_customize_preview() ) {
			return $css;
		}

		$auto_adjust                          = Mods::get( $this->get_id() . '_' . self::AUTO_ADJUST, 0 );
		list( $palette_light, $palette_dark ) = $this->get_light_dark_palettes();

		$light_css = '';
		foreach ( $palette_light['colors'] as $slug => $color ) {
			$light_css .= '--e-global-color-' . str_replace( '-', '', $slug ) . ':' . $color . ';';
		}

		$dark_css = '';
		foreach ( $palette_dark['colors'] as $slug => $color ) {
			$dark_css .= '--e-global-color-' . str_replace( '-', '', $slug ) . ':' . $color . ';';
		}

		if ( $auto_adjust && ! is_customize_preview() ) {
			$css .= '
				/* Light mode */
				@media (prefers-color-scheme: light) {
				  :root{
				    ' . $light_css . '
				  }
				}

				/* Dark mode */
				@media (prefers-color-scheme: dark) {
				  :root{
				    ' . $dark_css . '
				  }
				}
			';
		}

		return $css . '
		[data-neve-theme="light"], html.neve-light-theme {
			' . $light_css . '
		}
		[data-neve-theme="dark"], html.neve-dark-theme ~ * {
			' . $dark_css . '
		}
		';
	}

	/**
	 * Methods used to filter CSS global colors
	 *
	 * @param string $css The CSS string.
	 *
	 * @return string
	 */
	public function toggle_css( $css ) {
		if ( ! $this->is_component_active() && ! is_customize_preview() ) {
			return '';
		}

		$style                                = ' ';
		$auto_adjust                          = Mods::get( $this->get_id() . '_' . self::AUTO_ADJUST, 0 );
		list( $palette_light, $palette_dark ) = $this->get_light_dark_palettes();

		$light_css = '';
		foreach ( $palette_light['colors'] as $slug => $color ) {
			$light_css .= '--' . $slug . ':' . $color . ';';
		}

		$dark_css = '';
		foreach ( $palette_dark['colors'] as $slug => $color ) {
			$dark_css .= '--' . $slug . ':' . $color . ';';
		}

		if ( $auto_adjust && ! is_customize_preview() ) {
			$style .= '
				/* Light mode */
				@media (prefers-color-scheme: light) {
				  :root{
				    ' . $light_css . '
				  }
				}

				/* Dark mode */
				@media (prefers-color-scheme: dark) {
				  :root{
				    ' . $dark_css . '
				  }
				}
			';
		}

		$style .= '
		[data-neve-theme="light"], html.neve-light-theme {
			' . $light_css . '
		}
		[data-neve-theme="dark"], html.neve-dark-theme ~ * {
			' . $dark_css . '
		}
		';

		return $style;
	}

	/**
	 * PaletteSwitch register settings controls
	 *
	 * @return void
	 */
	public function add_settings() {

		$customizer           = Mods::get( 'neve_global_colors', neve_get_global_colors_default( true ) );
		$defined_palettes     = $customizer['palettes'];
		$dark_palette_default = isset( $customizer['palettes']['darkMode'] ) ? 'darkMode' : array_keys( $customizer['palettes'] )[1];

		$available_palettes = [];
		foreach ( $defined_palettes as $key => $palette_data ) {
			$available_palettes[ $key ] = $palette_data['name'];
		}

		SettingsManager::get_instance()->add(
			[
				'id'          => self::LIGHT_PALETTE_ID,
				'group'       => $this->get_id(),
				'tab'         => SettingsManager::TAB_GENERAL,
				'transport'   => 'postMessage',
				'section'     => $this->section,
				'label'       => __( 'Light Palette', 'neve' ),
				/* translators: %s: Link to Edit global color customizer. */
				'description' => sprintf( __( 'The base palette is used for light mode. %1$sEdit color palettes%2$s.', 'neve' ), '<br/><a onclick="wp.customize.control(\'neve_global_colors\').focus()" href="javascript:void(0);">', '</a>' ),
				'type'        => 'hidden',
				'default'     => '',
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::DARK_PALETTE_ID,
				'group'             => $this->get_id(),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'refresh',
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'label'             => __( 'Dark Palette', 'neve' ),
				'description'       => __( 'Dark Palette', 'neve' ),
				'type'              => 'Neve\Customizer\Controls\React\Inline_Select',
				'default'           => $dark_palette_default,
				'options'           => [
					'options'    => $available_palettes,
					'default'    => $dark_palette_default,
					'changes_on' => 'neve_global_colors',
				],
				'section'           => $this->section,
			]
		);

		$custom_icon_args = $this->should_load_pro_features() ? [
			'settings'       => [
				'default' => self::COMPONENT_ID . '_' . self::TOGGLE_ICON_ID,
				'custom'  => self::COMPONENT_ID . '_' . self::TOGGLE_CUSTOM_ID,
			],
			'setting_custom' => [
				'transport'         => 'post' . self::COMPONENT_ID,
				'sanitize_callback' => 'neve_kses_svg',
				'default'           => '',
			],
		] : [];

		SettingsManager::get_instance()->add(
			array_merge(
				[
					'id'                => self::TOGGLE_ICON_ID,
					'group'             => $this->get_id(),
					'tab'               => SettingsManager::TAB_GENERAL,
					'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
					'sanitize_callback' => 'wp_filter_nohtml_kses',
					'label'             => __( 'Select icon', 'neve' ),
					'description'       => __( 'Select icon', 'neve' ),
					'type'              => 'Neve\Customizer\Controls\React\Radio_Buttons',
					'default'           => 'contrast',
					'options'           => [
						'is_for' => 'palette_switch',
					],
					'section'           => $this->section,
				],
				$custom_icon_args
			)
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
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_GENERAL,
				'transport'             => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'     => array( $this, 'sanitize_responsive_int_json' ),
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
				'live_refresh_selector' => $this->default_selector . ' div.component-wrap .palette-icon-wrapper svg',
				'live_refresh_css_prop' => array(
					'cssVar'  => [
						'vars'       => '--iconsize',
						'responsive' => true,
						'suffix'     => 'px',
						'selector'   => '.builder-item--' . $this->get_id(),
					],
					'type'    => 'svg-icon-size',
					'default' => self::DEFAULT_ICON_SIZE,
				),
				'section'               => $this->section,
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::PLACEHOLDER_ID,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'wp_filter_nohtml_kses',
				'default'            => '',
				'label'              => __( 'Label', 'neve' ),
				'options'            => [
					'input_attrs' => array(
						'placeholder' => __( 'Leave blank for no label ...', 'neve' ),
					),
				],
				'type'               => 'text',
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::AUTO_ADJUST,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'refresh',
				'sanitize_callback'  => 'absint',
				'default'            => 0,
				'label'              => __( 'Automatically adjust color scheme', 'neve' ),
				/* translators: %s: Link to Learn More page. */
				'description'        => sprintf( __( 'Adjust default color scheme based on the user device preferences. %1$sLearn More%2$s.', 'neve' ), '<a target="_blank" rel="external noreferrer noopener" href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme">', '<span class="components-visually-hidden">(opens in a new tab)</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="components-external-link__icon css-6wogo1-StyledIcon etxm6pv0" role="img" aria-hidden="true" focusable="false"><path d="M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"></path></svg></a>' ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => true,
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
			Dynamic_Selector::KEY_SELECTOR => '.builder-item--' . $this->get_id(),
			Dynamic_Selector::KEY_RULES    => [
				'--iconsize' => [
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::SIZE_ID,
					Dynamic_Selector::META_DEFAULT       => '{ "mobile": "' . self::DEFAULT_ICON_SIZE . '", "tablet": "' . self::DEFAULT_ICON_SIZE . '", "desktop": "' . self::DEFAULT_ICON_SIZE . '" }',
					Dynamic_Selector::META_SUFFIX        => 'px',
					Dynamic_Selector::META_IS_RESPONSIVE => true,
				],
			],
		];

		return parent::add_style( $css_array );
	}

	/**
	 * Render the component
	 *
	 * @return void
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-palette-switch' );
	}

	/**
	 * Check if pro features should load.
	 *
	 * @return bool
	 */
	public function should_load_pro_features() {
		return $this->has_valid_addons();
	}
}
