<?php
/**
 * Responsible to adding customizer controls and rendering for icon&button in search form/icon components.
 *
 * @package HFG\Core\Components\Utility
 */
namespace HFG\Core\Components\Utility;

use HFG\Core\Settings\Manager as SettingsManager;
use function HFG\component_setting;
use Neve\Core\Styles\Dynamic_Selector;

/**
 * Class SearchIconButton
 */
class SearchIconButton {
	// Setting key which stores type of the search form button (icon_button|text_button)
	const BUTTON_APPEARANCE = 'button_appearance';
	// Setting key which stores icon style type
	const ICON_TYPE = 'icon_type';
	// Setting key which stores Custom SVG content
	const CUSTOM_ICON_SVG = 'c_icon_svg';
	// Default value for the Icon Type setting
	const DEFAULT_ICON = 'hfgs-icon-style-1';
	// Represents the "Custom SVG" icon type in the Icon Type settings.
	const CUSTOM_ICON = 'hfgs-icon-custom';
	// Setting key which stores styles of the text based button
	const BUTTON_STYLE = 'button_style';
	// Setting key which stores the content of the text based button
	const BUTTON_TEXT = 'button_text';
	// Default value for the Button Appereance setting
	const DEFAULT_BUTTON_APPEARANCE = 'icon_button';
	// Default value for the Custom SVG content
	const DEFAULT_CUSTOM_ICON_SVG = '';

	/**
	 * Section name
	 *
	 * @var string
	 */
	private $section;

	/**
	 * Component ID which will be have customize icon&button support.
	 *
	 * @var string
	 */
	private $component_id;

	/**
	 * Has support for the text based button?
	 *
	 * @var bool
	 */
	private $has_textbutton_support;

	/**
	 * Search Button HTML Selector
	 *
	 * @var string
	 */
	private $button_selector = '';

	/**
	 * Constructor
	 *
	 * @param  string $section Section name.
	 * @param  string $component_id Component ID.
	 * @param  bool   $has_textbutton_support If the component has text button support.
	 * @return void
	 */
	public function __construct( $section, $component_id, $has_textbutton_support ) {
		$this->section                = $section;
		$this->component_id           = $component_id;
		$this->has_textbutton_support = $has_textbutton_support;
		$this->button_selector        = '.builder-item--' . $this->component_id . ' .nv-text-btn';
	}

	/**
	 * Adds customizer controls to customize icon and the button (if has support)
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->add_button_appearance_control();
		$this->add_customize_icon_controls();
	}

	/**
	 * Returns default content of the text based button
	 *
	 * @return string
	 */
	public static function get_default_button_text() {
		return __( 'Search', 'neve' ) . '!';
	}

	/**
	 * Get available icons
	 * The SVG contents are same with the ones in assets/apps/components/src/Common/svg.js
	 *
	 * @param string $id Icon ID (These are the same with choice IDs in RadioButtonsComponent.js).
	 * @return string
	 */
	public static function render_icon( $id, $size ) {
		$icons = [
			self::DEFAULT_ICON  => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"/></svg>', // SVG.searchIcon1,
			'hfgs-icon-style-2' => '<svg width="' . $size . '" height="' . $size . '" viewBox="64 64 385 385"><path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"/></svg>', // SVG.searchIcon2,
			'hfgs-icon-style-3' => '<svg width="' . $size . '" height="' . $size . '" viewBox="48 48 416 416"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"/></svg>', // SVG.searchIcon3
			'hfgs-icon-style-4' => '<svg width="' . $size . '" height="' . $size . '" viewBox="64 64 384 384"><path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192s192-86.13 192-192S361.87 64 256 64Zm91.31 283.31a16 16 0 0 1-22.62 0l-42.84-42.83a88.08 88.08 0 1 1 22.63-22.63l42.83 42.84a16 16 0 0 1 0 22.62Z"/><circle cx="232" cy="232" r="56" /></svg>', // SVG.searchIcon4
			'hfgs-icon-style-5' => '<svg width="' . $size . '" height="' . $size . '" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18"><path fill-rule="evenodd" d="M5 11a6 6 0 1 1 12 0a6 6 0 0 1-12 0zm6-8a8 8 0 1 0 4.906 14.32l3.387 3.387a1 1 0 0 0 1.414-1.414l-3.387-3.387A8 8 0 0 0 11 3zm0 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8z" clip-rule="evenodd"/></svg>', // SVG.searchIcon5
			self::CUSTOM_ICON   => '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 512 512"><path d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389Zm192 0a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389Zm-144 48a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437Z"/></svg>', // SVG.customSVG
		];

		return $icons[ $id ];
	}

	/**
	 * Adds action type control for icon/button selection
	 *
	 * @return void
	 */
	private function add_button_appearance_control() {
		if ( ! $this->has_textbutton_support ) {
			return;
		}

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::BUTTON_APPEARANCE,
				'group'              => $this->component_id,
				'tab'                => SettingsManager::TAB_STYLE,
				'transport'          => 'refresh',
				'label'              => __( 'Button Appearance', 'neve' ),
				'sanitize_callback'  => 'sanitize_key',
				'default'            => self::DEFAULT_BUTTON_APPEARANCE,
				'type'               => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'section'            => $this->section,
				'conditional_header' => true,
				'options'            => [
					'choices'     => [
						self::DEFAULT_BUTTON_APPEARANCE => [
							'tooltip' => sprintf( '%s %s', __( 'Icon', 'neve' ), __( 'Button', 'neve' ) ),
							'icon'    => 'text',
						],
						'text_button'                   => [
							'tooltip' => sprintf( '%s %s', __( 'Text', 'neve' ), __( 'Button', 'neve' ) ),
							'icon'    => 'text',
						],
					],
					'show_labels' => true,
				],
			]
		);
	}

	/**
	 * Adds a control to allow choose icon style.
	 *
	 * @return void
	 */
	private function add_customize_icon_controls() {
		$sm = SettingsManager::get_instance();
		$sm::get_instance()->add(
			[
				'id'                 => self::ICON_TYPE,
				'group'              => $this->component_id,
				'tab'                => SettingsManager::TAB_STYLE,
				'transport'          => 'refresh',
				'label'              => __( 'Icon', 'neve' ),
				'default'            => self::DEFAULT_ICON,
				'sanitize_callback'  => 'sanitize_text_field',
				'type'               => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'section'            => $this->section,
				'conditional_header' => true,
				'options'            => [
					'is_for'          => 'search_icon',
					'show_labels'     => false,
					'active_callback' => [ $this, 'is_icon_mode_enabled' ],
				],
			]
		);

		$sm::get_instance()->add(
			[
				'id'                 => self::CUSTOM_ICON_SVG,
				'group'              => $this->component_id,
				'tab'                => SettingsManager::TAB_STYLE,
				'transport'          => 'refresh',
				'label'              => __( 'Custom SVG', 'neve' ),
				'default'            => self::DEFAULT_CUSTOM_ICON_SVG,
				'type'               => '\Neve\Customizer\Controls\React\Textarea',
				'sanitize_callback'  => 'neve_kses_svg',
				'section'            => $this->section,
				'conditional_header' => true,
				'options'            => [
					'active_callback' => function() {
						$icon_type = component_setting( self::ICON_TYPE, self::DEFAULT_ICON, $this->component_id );

						return $this->is_icon_mode_enabled() && self::CUSTOM_ICON === $icon_type;
					},
					'input_attrs'     => [
						'rows' => 8,
					],
				],
			]
		);

		$new_skin = neve_is_new_skin();
		$mod_key  = self::BUTTON_STYLE;
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
				'id'                 => self::BUTTON_TEXT,
				'group'              => $this->component_id,
				'transport'          => 'post' . $this->component_id,
				'tab'                => SettingsManager::TAB_STYLE,
				'sanitize_callback'  => 'sanitize_text_field',
				'default'            => self::get_default_button_text(),
				'label'              => __( 'Text', 'neve' ),
				'type'               => 'text',
				'section'            => $this->section,
				'options'            => [
					'active_callback' => [ $this, 'is_button_mode_enabled' ],
				],
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => $mod_key,
				'group'                 => $this->component_id,
				'transport'             => 'postMessage',
				'tab'                   => SettingsManager::TAB_STYLE,
				'sanitize_callback'     => 'neve_sanitize_button_appearance',
				'default'               => $default,
				'label'                 => __( 'Button Appearance', 'neve' ),
				'type'                  => '\Neve\Customizer\Controls\React\Button_Appearance',
				'section'               => $this->section,
				'options'               => [
					'no_hover'        => true,
					'no_shadow'       => true,
					'no_border'       => true,
					'default_vals'    => $default,
					'active_callback' => [ $this, 'is_button_mode_enabled' ],
				],
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					'cssVar' => [
						'vars'     => [
							'--primarybtnbg'         => 'background',
							'--primarybtnhoverbg'    => 'background',
							'--primarybtncolor'      => 'text',
							'--primarybtnhovercolor' => 'text',
						],
						'selector' => $this->button_selector,
					],
				],
				'conditional_header'    => true,
			]
		);
	}

	/**
	 * Get search form button appereance (text button / icon button)
	 *
	 * @return string icon_button|text_button
	 */
	private function get_form_button_appearance() {
		return component_setting( self::BUTTON_APPEARANCE, self::DEFAULT_BUTTON_APPEARANCE, $this->component_id );
	}

	/**
	 * Check if the "text_button" style mode (a text based button is shown as search action) is enabled for the search component.
	 *
	 * @return bool
	 */
	public function is_button_mode_enabled() {
		// if the component doesn't support text buttons, only icons are supported.
		if ( ! $this->has_textbutton_support ) {
			return false;
		}

		return 'text_button' === $this->get_form_button_appearance();
	}

	/**
	 * Check if the "icon_button" style mode (an icon is shown as search action) is enabled for the search component.
	 *
	 * @return bool
	 */
	public function is_icon_mode_enabled() {
		// if the component doesn't support text buttons, only icons are supported.
		if ( ! $this->has_textbutton_support ) {
			return true;
		}

		return 'icon_button' === $this->get_form_button_appearance();
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
	public function get_style( array $css_array = array() ) {
		if ( ! neve_is_new_skin() ) {
			return $css_array; // sub classes returns legacy style already.
		}

		if ( ! $this->is_button_mode_enabled() ) {
			return $css_array;
		}

		$button_style_id = $this->component_id . '_' . self::BUTTON_STYLE;

		$rules = [
			'--primarybtnbg'         => $button_style_id . '.background',
			'--primarybtnhoverbg'    => $button_style_id . '.background',
			'--primarybtncolor'      => $button_style_id . '.text',
			'--primarybtnhovercolor' => $button_style_id . '.text',
		];

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $this->button_selector,
			Dynamic_Selector::KEY_RULES    => $rules,
		];

		return $css_array;
	}
}
