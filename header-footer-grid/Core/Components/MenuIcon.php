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
	const LABEL_MARGIN_ID   = 'label_margin';
	const MENU_ICON         = 'menu_icon';
	const SIZE_ID           = 'icon_size';
	const MENU_SVG          = 'svg_menu_icon';

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
	 * Label margin settings default values.
	 *
	 * @var array
	 */
	protected $default_label_margin_value = array(
		'mobile'       => array(
			'top'    => 0,
			'right'  => 5,
			'bottom' => 0,
			'left'   => 0,
		),
		'tablet'       => array(
			'top'    => 0,
			'right'  => 5,
			'bottom' => 0,
			'left'   => 0,
		),
		'desktop'      => array(
			'top'    => 0,
			'right'  => 5,
			'bottom' => 0,
			'left'   => 0,
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
		$values = [ 'donner', 'dots', 'wave', 'svg' ]; 

		if ( empty( $icon ) ) {
			$icon = Mods::get( $this->get_id() . '_' . self::MENU_ICON, 'default' );
		}

		if ( ! in_array( $icon, $values, true ) ) {
			$icon = 'default';
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
			wp_add_inline_script( 'neve-script', $this->toggle_script() );
		}
	}

	/**
	 * Get JS to use as inline script
	 *
	 * @return string
	 */
	public function toggle_script() {
		// Add aria-expanded to toggle function to be used when the menu icon is used,
		$script = <<<JS
function toggleAriaClick() {
    function toggleAriaExpanded(toggle = 'true') {
        document.querySelectorAll('button.navbar-toggle').forEach(function(el) {
            if ( el.classList.contains('caret-wrap') ) {
                return;
            }
            el.setAttribute('aria-expanded', 'true' === el.getAttribute('aria-expanded') ? 'false' : toggle);
        });
    }
	toggleAriaExpanded();
	if ( document.body.hasAttribute('data-ftrap-listener') ) {
		return;
	}
	document.body.setAttribute('data-ftrap-listener', 'true');
    document.addEventListener('ftrap-end', function() {
        toggleAriaExpanded('false');
    });
}
JS;
		// use Dynamic_Css class to minify the script, by removing the whitespace.
		return Dynamic_Css::minify_css( $script );
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
		if ( ! in_array( $menu_icon, [ 'donner', 'dots', 'wave', 'svg' ] ) ) {
			return '';
		}

		// Basic styles for custom animations
		$css = <<<CSS
			.hamburger {
				transition-property: opacity, filter;
				transition-duration: 0.5s;
				transition-timing-function: linear;
			}

			.hamburger .hamburger-inner, 
			.hamburger .hamburger-inner::before, 
			.hamburger .hamburger-inner::after {
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

			.hamburger-inner, 
			.hamburger-inner:before, 
			.hamburger-inner:after {
					width: 15px;
					height: 2px;
					background-color: currentColor;
					border-radius: 2px;
					position: absolute;
					transition-property: transform;
					transition-duration: 0.5s;
					transition-timing-function: ease;
			}

			.hamburger-inner:before, 
			.hamburger-inner:after {
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
						width: 3px;
						height: 3px;
						border-radius: 100%;
				}

				.hamburger--dots .hamburger-inner:before, .hamburger--dots .hamburger-inner:after {
						transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;
				}

				.is-active .hamburger--dots .hamburger-inner, 
				.hamburger--dots.is-active .hamburger-inner {
						left: inherit;
				}

				.is-active .hamburger--dots .hamburger-inner, .hamburger--dots.is-active .hamburger-inner,
				.is-active .hamburger--dots .hamburger-inner:before, .hamburger--dots.is-active .hamburger-inner:before,
				.is-active .hamburger--dots .hamburger-inner:after, .hamburger--dots.is-active .hamburger-inner:after {
						width: 15px;
						border-radius: 0;
						height: 2px;
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

		// Wave style
		if ( $menu_icon === 'wave' ) {
			$css .= <<<CSS
			.hamburger--wave .hamburger-inner {
				transition-duration: 0.3s;
				transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
				}

			.hamburger--wave .hamburger-inner:before {
				width: 8px;
				left: 0;
				transition: top 0.1s 0.34s ease-in, opacity 0.1s ease-in, width 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			}

			.hamburger--wave .hamburger-inner:after {
				width: 8px;
				left: auto;
				right: 0;
				transition: bottom 0.1s 0.34s ease-in, transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55), width 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			}
			.is-active .hamburger--wave .hamburger-inner, 
			.hamburger--wave.is-active .hamburger-inner {
				transform: rotate(225deg);
				transition-delay: 0.12s;
				transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
			}

			.is-active .hamburger--wave .hamburger-inner, 
			.hamburger--wave.is-active .hamburger-inner,
			.is-active .hamburger--wave .hamburger-inner:before, 
			.hamburger--wave.is-active .hamburger-inner:before,
			.is-active .hamburger--wave .hamburger-inner:after, 
			.hamburger--wave.is-active .hamburger-inner:after {
				width: 15px;
				left: 0;
				right: auto;
			}

			.is-active .hamburger--wave .hamburger-inner::before, 
			.hamburger--wave.is-active .hamburger-inner::before {
				top: 0;
				opacity: 0;
				transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out, width 0.2s ease-out;
			}

			.is-active .hamburger--wave .hamburger-inner::after, 
			.hamburger--wave.is-active .hamburger-inner::after {
				bottom: 0;
				transform: rotate(-90deg);
				transition: bottom 0.1s ease-out, transform 0.3s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.2s ease-out;
			}
CSS;
		}

		// SVG style
		if ( $menu_icon === 'svg' ) {
			$menu_icon_size = Mods::get( $this->get_id() . '_' . self::SIZE_ID, '15' ) . 'px';
			$css           .= <<<CSS
				.hamburger-box.icon-svg {
					width: 100%;
					height: var(--menuiconsize, $menu_icon_size);
					display:flex;
					justify-content:center;
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
				'id'                    => self::LABEL_MARGIN_ID,
				'group'                 => $this->get_id(),
				'transport'             => 'postMessage',
				'tab'                   => SettingsManager::TAB_LAYOUT,
				'sanitize_callback'     => array( $this, 'sanitize_spacing_array' ),
				'label'                 => __( 'Margin', 'neve' ) . ' (' . __( 'Label', 'neve' ) . ')',
				'type'                  => '\Neve\Customizer\Controls\React\Spacing',
				'default'               => $this->default_label_margin_value,
				'live_refresh_selector' => '.builder-item--' . $this->get_id(),
				'live_refresh_css_prop' => array(
					'cssVar' => [
						'vars'       => '--label-margin',
						'responsive' => true,
						'selector'   => '.builder-item--' . $this->get_id(),
					],
					'prop'   => 'margin',
				),
				'section'               => $this->section,
				'conditional_header'    => $this->get_builder_id() === 'header',
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
					'priority' => 10,
					'options'  => [
						'default' => __( 'Default', 'neve' ),
						'donner'  => __( 'Donner', 'neve' ),
						'dots'    => __( 'Dots', 'neve' ),
						'wave'    => __( 'Wave', 'neve' ),
					],
					'default'  => 'default',
				],
				'section'               => $this->section,
				'live_refresh_selector' => $this->default_selector,
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::SIZE_ID,
				'group'                 => $this->get_id(),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'absint',
				'default'               => 15,
				'label'                 => __( 'Icon Size', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Range',
				'options'               => [
					'active_callback' => function () {
						return Mods::get( $this->get_id() . '_' . self::MENU_ICON, 'default' ) === 'svg';

					},
					'priority'        => 20,
					'input_attrs'     => [
						'min'        => 10,
						'max'        => 100,
						'defaultVal' => 15,
					],
				],
				'live_refresh_selector' => $this->default_selector . ' span.icon-svg',
				'live_refresh_css_prop' => [
					'cssVar'  => [
						'vars'     => '--menuiconsize',
						'selector' => '.builder-item--' . $this->get_id(),
						'suffix'   => 'px',
					],
					'type'    => 'svg-icon-size',
					'default' => 15,
				],
				'section'               => $this->section,
				'conditional_header'    => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => $this->get_id() . '_open_behavior_shortcut',
				'group'             => $this->get_id(),
				'section'           => $this->section,
				'tab'               => SettingsManager::TAB_STYLE,
				'transport'         => 'postMessage',
				'sanitize_callback' => 'esc_attr',
				'type'              => '\Neve\Customizer\Controls\Button',
				'options'           => [
					'priority'         => 25,
					'button_text'      => __( 'Open Behavior', 'neve' ),
					'button_class'     => 'button_background',
					'icon_class'       => 'edit',
					'shortcut'         => true,
					'is_button'        => false,
					'control_to_focus' => 'hfg_header_layout_sidebar_layout',
				],
			]
		);

		$mod_key = self::BUTTON_APPEARANCE;
		$default = [
			'type'         => 'outline',
			'borderRadius' => [
				'top'    => 0,
				'left'   => 0,
				'bottom' => 0,
				'right'  => 0,
			],
		];

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
					'priority'     => 30,
					'no_hover'     => true,
					'no_shadow'    => true,
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
	 * Add CSS style for the component.
	 *
	 * @param array $css_array the css style array.
	 *
	 * @return array
	 */
	public function add_style( array $css_array = array() ) {

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

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => '.builder-item--' . $this->get_id(),
			Dynamic_Selector::KEY_RULES    => [
				'--label-margin' => [
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::LABEL_MARGIN_ID,
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_DEFAULT       => $this->default_label_margin_value,
					Dynamic_Selector::META_SUFFIX        => 'responsive_unit',
					'directional-prop'                   => Config::CSS_PROP_MARGIN,
				],
			],
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

	/**
	 * Static method to return the aria expanded behaviour for the menu buttons.
	 * This will add the necessary attributes to the button to toggle the aria-expanded attribute and the onclick event.
	 * It is added inline to not increase the JS file size. Will only be added when the menu item is rendered.
	 *
	 * @param boolean $only_click_attribute Flag to return only the click attribute.
	 *
	 * @return string
	 */
	public static function aria_expanded_behaviour( $only_click_attribute = false ) {
		if ( neve_is_amp() ) {
			return $only_click_attribute ? '' : 'aria-expanded="false"';
		}
		return ( $only_click_attribute ? '' : 'aria-expanded="false" ' ) . 'onclick="if(\'undefined\' !== typeof toggleAriaClick ) { toggleAriaClick() }"';
	}

}
