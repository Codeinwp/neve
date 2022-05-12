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

use HFG\Core\Script_Register;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Dynamic_Selector;

/**
 * Class MenuIcon
 *
 * @package HFG\Core\Components
 */
class MenuIcon extends Abstract_Component {

	const COMPONENT_ID      = 'header_menu_icon';
	const SIDEBAR_TOGGLE    = 'sidebar';
	const TEXT_ID           = 'menu_label';
	const BUTTON_APPEARANCE = 'button_appearance';
	const COMPONENT_SLUG    = 'nav-icon';
	const QUICK_LINKS_ID    = 'quick-links';
	const MENU_ICON         = 'menu_icon';

	/**
	 * Padding settings default values.
	 *
	 * @var array
	 */
	protected $default_padding_value = array(

		'mobile'       => array(
			'top'    => 10,
			'right'  => 15,
			'bottom' => 10,
			'left'   => 15,
		),
		'tablet'       => array(
			'top'    => 10,
			'right'  => 15,
			'bottom' => 10,
			'left'   => 15,
		),
		'desktop'      => array(
			'top'    => 10,
			'right'  => 15,
			'bottom' => 10,
			'left'   => 15,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	);

	/**
	 * Close button target CSS selector.
	 *
	 * @var string
	 */
	private $close_button = '.header-menu-sidebar .close-sidebar-panel .navbar-toggle';

	/**
	 * MenuIcon constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Menu Icon', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_SLUG' ) );
		$this->set_property( 'component_slug', self::COMPONENT_SLUG );
		$this->set_property( 'width', 1 );
		$this->set_property( 'icon', 'menu' );
		$this->set_property( 'section', self::COMPONENT_ID );
		$this->set_property( 'default_selector', '.builder-item--' . $this->get_id() . ' .navbar-toggle' );

		add_action( 'wp_enqueue_scripts', [ $this, 'load_scripts' ] );

		add_filter( 'neve_menu_icon_classes', array( $this, 'add_menu_icon_classes' ), 10, 2 );
	}

	/**
	 * Filter classes for menu icon.
	 *
	 * @param string $class The classes.
	 * @param string $icon The icon used.
	 *
	 * @return mixed|string
	 */
	public function add_menu_icon_classes( $class = '', $icon = '' ) {
		if ( empty( $icon ) ) {
			$icon = Mods::get( $this->get_id() . '_' . self::MENU_ICON, 'default' );
		}
		if ( $icon !== 'default' ) {
			$add_class = 'hamburger--' . $icon;
			if ( strpos( $class, $add_class ) === false ) {
				$class .= $add_class;
			}
		}
		return $class;
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
		$menu_icon = Mods::get( $this->get_id() . '_' . self::MENU_ICON, 'default' );
		$css       = $this->get_menu_style( $menu_icon );
		return Dynamic_Css::minify_css( $css );
	}

	/**
	 * Generate style specific to menu icon selected.
	 *
	 * @param string $menu_icon The menu icon option.
	 *
	 * @return string
	 */
	private function get_menu_style( $menu_icon ) {
		// We don't add any css for the default option.
		if ( ! in_array( $menu_icon, [ 'arrow', 'donner', 'dots', 'minus', 'vortex', 'squeeze' ] ) ) {
			return '';
		}

		// Basic styles for custom animations
		$css = <<<CSS
			.hamburger {
				 transition-property: opacity, filter;
				 transition-duration: 0.5s;
				 transition-timing-function: linear;
			}
			.hamburger .hamburger-inner, .hamburger .hamburger-inner::before, .hamburger .hamburger-inner::after {
				 background-color: currentColor;
			}
			.hamburger-box {
				 width: 15px;
				 height: 12px;
				 display: inline-block;
				 position: relative;
			}
			.hamburger-inner {
				 display: block;
				 top: 50%;
				 margin-top: -1px;
			}
			.hamburger-inner, .hamburger-inner:before, .hamburger-inner:after {
				 width: 15px;
				 height: 2px;
				 background-color: currentColor;
				 border-radius: 2px;
				 position: absolute;
				 transition-property: transform;
				 transition-duration: 0.5s;
				 transition-timing-function: ease;
			}
			.hamburger-inner:before, .hamburger-inner:after {
				 content: "";
				 display: block;
			}
			.hamburger-inner:before {
				 top: -5px;
			}
			.hamburger-inner:after {
				 bottom: -5px;
			}
CSS;

		// Arrow style
		if ( $menu_icon === 'arrow' ) {
			$css .= <<<CSS
				.is-active .hamburger--arrow .hamburger-inner:before, .hamburger--arrow.is-active .hamburger-inner:before {
					 transform: translate3d(-3px, 1px, 0) rotate(-45deg) scale(0.7, 1);
				}
				.is-active .hamburger--arrow .hamburger-inner:after, .hamburger--arrow.is-active .hamburger-inner:after {
					 transform: translate3d(-3px, -1px, 0) rotate(45deg) scale(0.7, 1);
				}
CSS;
		}

		// Donner style
		if ( $menu_icon === 'donner' ) {
			$css .= <<<CSS
				.hamburger--donner .hamburger-inner {
					 transition-duration: 0.075s;
					 transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
				}
				.hamburger--donner .hamburger-inner:before {
					 width: 16px;
					 left: -3px;
				}
				.hamburger--donner .hamburger-inner {
					 width: 10px;
					 left: 3px;
				}
				.hamburger--donner .hamburger-inner:after {
					 width: 4px;
					 left: 3px;
				}
				.hamburger--donner .hamburger-inner::before {
					 transition: top 0.075s 0.12s ease, opacity 0.075s ease;
				}
				.hamburger--donner .hamburger-inner::after {
					 transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
				}
				.is-active .hamburger--donner .hamburger-inner, .hamburger--donner.is-active .hamburger-inner {
					 transform: rotate(45deg);
					 transition-delay: 0.12s;
					 transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
				}
				.is-active .hamburger--donner .hamburger-inner, .hamburger--donner.is-active .hamburger-inner,
				.is-active .hamburger--donner .hamburger-inner:before, .hamburger--donner.is-active .hamburger-inner:before,
				.is-active .hamburger--donner .hamburger-inner:after, .hamburger--donner.is-active .hamburger-inner:after {
					 width: 15px;
					 left: auto;
				}
				.is-active .hamburger--donner .hamburger-inner::before, .hamburger--donner.is-active .hamburger-inner::before {
					 top: 0;
					 opacity: 0;
					 transition: top 0.075s ease, opacity 0.075s 0.12s ease;
				}
				.is-active .hamburger--donner .hamburger-inner::after, .hamburger--donner.is-active .hamburger-inner::after {
					 bottom: 0;
					 transform: rotate(-90deg);
					 transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
				}
CSS;
		}

		// Dots style
		if ( $menu_icon === 'dots' ) {
			$css .= <<<CSS
				.hamburger--dots .hamburger-inner {
					 left: 5px;
				}
				.hamburger--dots .hamburger-inner, .hamburger--dots .hamburger-inner:before, .hamburger--dots .hamburger-inner:after {
					 width: 4px;
					 border-radius: 2px;
				}
				.hamburger--dots .hamburger-inner:before, .hamburger--dots .hamburger-inner:after {
					 transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
				}
				.is-active .hamburger--dots .hamburger-inner, .hamburger--dots.is-active .hamburger-inner {
					 left: inherit;
				}
				.is-active .hamburger--dots .hamburger-inner, .hamburger--dots.is-active .hamburger-inner,
				.is-active .hamburger--dots .hamburger-inner:before, .hamburger--dots.is-active .hamburger-inner:before,
				.is-active .hamburger--dots .hamburger-inner:after, .hamburger--dots.is-active .hamburger-inner:after {
					 width: 15px;
				}
				.is-active .hamburger--dots .hamburger-inner:before, .hamburger--dots.is-active .hamburger-inner:before,
				.is-active .hamburger--dots .hamburger-inner:after, .hamburger--dots.is-active .hamburger-inner:after {
					 opacity: 0;
					 transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
				}
				.is-active .hamburger--dots .hamburger-inner:before, .hamburger--dots.is-active .hamburger-inner:before {
					 top: 0;
				}
				.is-active .hamburger--dots .hamburger-inner:after, .hamburger--dots.is-active .hamburger-inner:after {
					 bottom: 0;
				}
CSS;
		}

		// Minus style
		if ( $menu_icon === 'minus' ) {
			$css .= <<<CSS
				.hamburger--minus .hamburger-inner:before, .hamburger--minus .hamburger-inner:after {
					 transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
				}
				.is-active .hamburger--minus .hamburger-inner:before,
				.hamburger--minus.is-active .hamburger-inner:before,
				.is-active .hamburger--minus .hamburger-inner:after,
				.hamburger--minus.is-active .hamburger-inner:after {
					 opacity: 0;
					 transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;
				}
				.is-active .hamburger--minus .hamburger-inner:before, .hamburger--minus.is-active .hamburger-inner:before {
					 top: 0;
				}
				.is-active .hamburger--minus .hamburger-inner:after, .hamburger--minus.is-active .hamburger-inner:after {
					 bottom: 0;
				}
CSS;
		}

		// Vortex style
		if ( $menu_icon === 'vortex' ) {
			$css .= <<<CSS
				.hamburger--vortex .hamburger-inner {
					 transition-duration: 0.2s;
					 transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
				}
				.hamburger--vortex .hamburger-inner:before, .hamburger--vortex .hamburger-inner:after {
					 transition-duration: 0s;
					 transition-delay: 0.1s;
					 transition-timing-function: linear;
				}
				.hamburger--vortex .hamburger-inner:before {
					 transition-property: top, opacity;
				}
				.hamburger--vortex .hamburger-inner::after {
					 transition-property: bottom, transform;
				}
				.is-active .hamburger--vortex .hamburger-inner, .hamburger--vortex.is-active .hamburger-inner {
					 transform: rotate(765deg);
					 transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
				}
				.is-active .hamburger--vortex .hamburger-inner:before, .hamburger--vortex.is-active .hamburger-inner:before,
				.is-active .hamburger--vortex .hamburger-inner:after, .hamburger--vortex.is-active .hamburger-inner:after {
					 transition-delay: 0s;
				}
				.is-active .hamburger--vortex .hamburger-inner:before, .hamburger--vortex.is-active .hamburger-inner:before {
					 top: 0;
					 opacity: 0;
				}
				.is-active .hamburger--vortex .hamburger-inner:after, .hamburger--vortex.is-active .hamburger-inner:after {
					 bottom: 0;
					 transform: rotate(90deg);
				}
CSS;
		}

		// Squeeze style
		if ( $menu_icon === 'squeeze' ) {
			$css .= <<<CSS
				.hamburger--squeeze .hamburger-inner {
					 transition-duration: 0.075s;
					 transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
				}
				.hamburger--squeeze .hamburger-inner::before {
					 transition: top 0.075s 0.12s ease, opacity 0.075s ease;
				}
				.hamburger--squeeze .hamburger-inner::after {
					 transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
				}
				.is-active .hamburger--squeeze .hamburger-inner, .hamburger--squeeze.is-active .hamburger-inner {
					 transform: rotate(45deg);
					 transition-delay: 0.12s;
					 transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
				}
				.is-active .hamburger--squeeze .hamburger-inner::before, .hamburger--squeeze.is-active .hamburger-inner::before {
					 top: 0;
					 opacity: 0;
					 transition: top 0.075s ease, opacity 0.075s 0.12s ease;
				}
				.is-active .hamburger--squeeze .hamburger-inner::after, .hamburger--squeeze.is-active .hamburger-inner::after {
					 bottom: 0;
					 transform: rotate(-90deg);
					 transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
				}
CSS;
		}
		return $css;
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
				'id'                    => self::TEXT_ID,
				'group'                 => $this->get_id(),
				'transport'             => 'postMessage',
				'tab'                   => SettingsManager::TAB_GENERAL,
				'sanitize_callback'     => 'wp_filter_nohtml_kses',
				'default'               => '',
				'label'                 => __( 'Menu label', 'neve' ),
				'type'                  => 'text',
				'section'               => $this->section,
				'live_refresh_selector' => $this->default_selector . ' .nav-toggle-label',
				'live_refresh_css_prop' => array(
					'parent'     => $this->default_selector,
					'wrap_class' => 'nav-toggle-label',
					'html_tag'   => 'span',
				),
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::QUICK_LINKS_ID,
				'group'             => $this->get_id(),
				'transport'         => 'postMessage',
				'tab'               => SettingsManager::TAB_GENERAL,
				'sanitize_callback' => 'wp_filter_nohtml_kses',
				'type'              => '\Neve\Customizer\Controls\React\Instructions_Control',
				'section'           => $this->section,
				'options'           => [
					'options' => array(
						'quickLinks' => array(
							'toggle_sidebar' => array(
								'label' => esc_html__( 'Show Mobile Menu', 'neve' ),
								'icon'  => 'dashicons-nametag',
							),
							'hfg_header_layout_sidebar_layout' => array(
								'label' => esc_html__( 'Mobile Menu Options', 'neve' ),
								'icon'  => 'dashicons-admin-appearance',
							),
						),
					),
				],
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::MENU_ICON,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'refresh',
				'sanitize_callback'     => 'wp_filter_nohtml_kses',
				'label'                 => __( 'Icon', 'neve' ),
				'description'           => __( 'Icon', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Inline_Select',
				'default'               => 'default',
				'options'               => [
					'options' => [
						'default' => 'Default',
						'arrow'   => 'Arrow',
						'donner'  => 'Donner',
						'dots'    => 'Dots',
						'minus'   => 'Minus',
						'vortex'  => 'Vortex',
						'squeeze' => 'Squeeze',
					],
					'default' => 'default',
				],
				'section'               => $this->section,
				'live_refresh_selector' => $this->default_selector,
				'conditional_header'    => true,
			]
		);

		$new_skin = neve_is_new_skin();
		$mod_key  = self::BUTTON_APPEARANCE;
		$default  = $new_skin ? [
			'type'         => 'outline',
			'borderRadius' => [
				'top'    => 0,
				'left'   => 0,
				'bottom' => 0,
				'right'  => 0,
			],
		] : [ 'type' => 'outline' ];

		SettingsManager::get_instance()->add(
			[
				'id'                    => $mod_key,
				'group'                 => $this->get_id(),
				'transport'             => 'postMessage',
				'tab'                   => SettingsManager::TAB_STYLE,
				'sanitize_callback'     => 'neve_sanitize_button_appearance',
				'default'               => $default,
				'label'                 => __( 'Appearance', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Button_Appearance',
				'section'               => $this->section,
				'options'               => [
					'no_hover'     => true,
					'default_vals' => $default,
				],
				'live_refresh_selector' => $this->default_selector,
				'live_refresh_css_prop' => [
					'cssVar'             => [
						'vars'     => [
							'--bgcolor'      => 'background',
							'--color'        => 'text',
							'--borderradius' => [
								'key'    => 'borderRadius',
								'suffix' => 'px',
							],
							'--borderwidth'  => [
								'key'    => 'borderWidth',
								'suffix' => 'px',
							],
						],
						'selector' => '.builder-item--' . $this->get_id(),
					],
					'additional_buttons' => $this->get_class_const( 'COMPONENT_ID' ) !== 'header_menu_icon' ? [] : [
						[
							'button' => $this->close_button,
							'text'   => '.icon-bar',
						],
					],
				],
				'conditional_header'    => true,
			]
		);
	}


	/**
	 * Add legacy style.
	 *
	 * @param array $css_array css array.
	 *
	 * @return array
	 */
	private function add_legacy_style( $css_array ) {
		$id          = $this->get_id() . '_' . self::BUTTON_APPEARANCE;
		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $this->default_selector . ', ' . $this->close_button,
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_BACKGROUND_COLOR => $id . '.background',
				Config::CSS_PROP_COLOR            => $id . '.text',
				Config::CSS_PROP_BORDER_RADIUS    => $id . '.borderRadius',
				Config::CSS_PROP_CUSTOM_BTN_TYPE  => $id . '.type',
				Config::CSS_PROP_BORDER_WIDTH     => $id . '.borderWidth',
			],
		];

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $this->default_selector . ' .icon-bar, ' . $this->close_button . ' .icon-bar',
			Dynamic_Selector::KEY_RULES    => [
				Config::CSS_PROP_BACKGROUND_COLOR => $id . '.text',
			],
		];

		return parent::add_style( $css_array );
	}

	/**
	 * Add CSS style for the component.
	 *
	 * @param array $css_array the css style array.
	 *
	 * @return array
	 */
	public function add_style( array $css_array = array() ) {
		if ( ! neve_is_new_skin() ) {
			return $this->add_legacy_style( $css_array );
		}

		$id = $this->get_id() . '_' . self::BUTTON_APPEARANCE;

		$rules = [
			'--bgcolor'      => $id . '.background',
			'--color'        => $id . '.text',
			'--borderradius' => [
				Dynamic_Selector::META_KEY => $id . '.borderRadius',
				'directional-prop'         => Config::CSS_PROP_BORDER_RADIUS,
			],
			'--borderwidth'  => [
				Dynamic_Selector::META_KEY => $id . '.borderWidth',
				'directional-prop'         => Config::CSS_PROP_BORDER_WIDTH,
			],
		];

		$value = SettingsManager::get_instance()->get( $id );


		if ( isset( $value['type'] ) && $value['type'] !== 'outline' ) {
			$rules ['--borderwidth']['override'] = 0;
		}

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => '.builder-item--' . $this->get_id() . ',' . $this->close_button,
			Dynamic_Selector::KEY_RULES    => $rules,
		];

		return parent::add_style( $css_array );
	}

	/**
	 * Render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-menu-icon' );
	}
}
