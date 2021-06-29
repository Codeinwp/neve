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
use Neve\Core\Dynamic_Css;
use Neve\Core\Inline_Css;
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
	const MENU_ICON         = 'menu_icon';
	const QUICK_LINKS_ID    = 'quick-links';

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
		$this->set_property( 'base_css_template_path', NEVE_MAIN_DIR . '/header-footer-grid/assets/components/menu-icon/' );

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
	public function add_menu_icon_classes( $class = '', $icon = 'default' ) {
		if ( $icon !== 'default' ) {
			$add_class = 'hamburger--' . $icon;
			if ( strpos( $class, $add_class ) === false ) {
				$class .= $add_class;
			}
		}
		return $class;
	}

	/**
	 * Register component templates
	 *
	 * @inheritDoc
	 */
	public function register_component_template_style( $template = '' ) {
		$menu_icon = Mods::get( $this->get_id() . '_' . self::MENU_ICON, 'default' );
		if ( $menu_icon !== 'default' && ! empty( $menu_icon ) ) {
			$template = $menu_icon;
		}
		parent::register_component_template_style( $template );
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
				'label'                 => __( 'Menu Icon', 'neve' ),
				'description'           => __( 'Menu Icon', 'neve' ),
				'type'                  => 'Neve\Customizer\Controls\React\Inline_Select',
				'default'               => 'default',
				'options'               => [
					'options' => [
						'default' => 'Default',
						'arrow'   => 'Arrow',
						'donner'  => 'Donner',
						'dots'    => 'Dots',
						'minimal' => 'Minimal',
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

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::BUTTON_APPEARANCE,
				'group'                 => $this->get_id(),
				'transport'             => 'postMessage',
				'tab'                   => SettingsManager::TAB_STYLE,
				'sanitize_callback'     => 'neve_sanitize_button_appearance',
				'default'               => [ 'type' => 'outline' ],
				'label'                 => __( 'Appearance', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Button_Appearance',
				'section'               => $this->section,
				'options'               => [
					'no_hover' => true,
				],
				'live_refresh_selector' => $this->default_selector,
				'live_refresh_css_prop' => array(
					'additional_buttons' => $this->get_class_const( 'COMPONENT_ID' ) !== 'header_menu_icon' ? [] : [
						[
							'button' => $this->close_button,
							'text'   => '.icon-bar',
						],
					],
				),
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
	 * Render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-menu-icon' );
	}
}
