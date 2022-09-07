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
use HFG\Core\Settings\Config;
use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;
use Neve\Core\Dynamic_Css;
use Neve\Core\Settings\Mods;
use Neve\Core\Styles\Dynamic_Selector;
use WP_Post;

/**
 * Class Logo.
 *
 * @package HFG\Core\Components
 */
class Logo extends Abstract_Component {


	const COMPONENT_ID = 'logo';
	const LOGO         = 'logo';
	const CUSTOM_LOGO  = 'custom_logo';
	const USE_SAME     = 'same_logo';
	const DISPLAY      = 'display';
	const MAX_WIDTH    = 'max_width';
	const SHOW_TITLE   = 'show_title';
	const SHOW_TAGLINE = 'show_tagline';
	const DISABLE_LINK = 'disable_link';
	const COLOR_ID     = 'color';

	/**
	 * Default spacing value
	 *
	 * @var array
	 */
	protected $default_padding_value = array(
		'mobile'       => array(
			'top'    => 10,
			'right'  => 0,
			'bottom' => 10,
			'left'   => 0,
		),
		'tablet'       => array(
			'top'    => 10,
			'right'  => 0,
			'bottom' => 10,
			'left'   => 0,
		),
		'desktop'      => array(
			'top'    => 10,
			'right'  => 0,
			'bottom' => 10,
			'left'   => 0,
		),
		'mobile-unit'  => 'px',
		'tablet-unit'  => 'px',
		'desktop-unit' => 'px',
	);

	/**
	 * Logo constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'Logo & Site Identity', 'neve' ) );
		$this->set_property( 'description', __( 'Display your company logo here or simply use words to describe your business.', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'component_slug', 'hfg-logo' );
		$this->set_property( 'width', 3 );
		$this->set_property( 'icon', 'admin-appearance' );
		$this->set_property( 'section', 'title_tagline' );
		$this->set_property( 'preview_image', esc_url( get_template_directory_uri() . '/header-footer-grid/assets/images/customizer/component-site-logo.jpg' ) );
		$this->set_property( 'default_selector', '.builder-item--' . $this->get_id() . ' .site-logo' );
		$this->set_property( 'has_horizontal_alignment', true );

		add_filter( 'hfg_component_scripts', [ $this, 'register_script' ] );

		add_filter( 'hfg_logo_variants', [ $this, 'filter_logo_variants' ] );

		// We use this filter to port changes to the logo from the templates on the new component.
		add_filter( 'pre_set_theme_mod_custom_logo', [ $this, 'update_logo_theme_mod' ], 10, 2 );

		// we remove the sizes for SVG
		add_filter( 'wp_calculate_image_sizes', [ $this, 'filter_svg_logo_size' ], 10, 5 );
		add_filter( 'wp_get_attachment_image_attributes', [ $this, 'clear_svg_size_attr' ], 10, 3 );
	}

	/**
	 * Clear width and height attributes for SVG.
	 *
	 * @param array   $attr Attributes.
	 * @param WP_Post $attachment The attachment.
	 * @param string  $size The size.
	 *
	 * @return array
	 */
	final public function clear_svg_size_attr( $attr, $attachment, $size = 'thumbnail' ) {
		if ( ! $attachment instanceof WP_Post ) {
			return $attr;
		}

		$mime = get_post_mime_type( $attachment->ID );
		if ( 'image/svg+xml' === $mime ) {
			unset( $attr['width'] );
			unset( $attr['height'] );
		}

		return $attr;
	}

	/**
	 * Set the sizes for SVG.
	 *
	 * @param string $sizes The style sizes.
	 * @param string $size The specified size.
	 * @param string $image_src The source of the image.
	 * @param array  $image_meta The meta for the image.
	 * @param int    $attachment_id The attachment ID.
	 *
	 * @return string
	 */
	final public function filter_svg_logo_size( $sizes, $size, $image_src, $image_meta, $attachment_id ) {
		$mime = get_post_mime_type( $attachment_id );
		if ( 'image/svg+xml' === $mime ) {
			return '';
		}

		return $sizes;
	}

	/**
	 * Updates the theme mode JSON based on the custom logo value.
	 * Used for backwards compatibility with previous component.
	 *
	 * @param string $value The new value for the theme mod.
	 * @param string $old_value The previous value.
	 *
	 * @return string
	 */
	public function update_logo_theme_mod( $value, $old_value ) {
		$conditional_main          = json_decode( Mods::get( self::COMPONENT_ID . '_' . self::LOGO, self::sanitize_logo_json( $old_value ) ), true );
		$conditional_main['light'] = $value;
		if ( $conditional_main['same'] ) {
			$conditional_main['dark'] = $value;
		}
		$update_palette_logo = wp_json_encode( $conditional_main );
		set_theme_mod( self::COMPONENT_ID . '_' . self::LOGO, $update_palette_logo );
		return $value;
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
	 * Method to check that the component is active.
	 *
	 * @return bool
	 */
	protected function is_component_active() {
		$builders = Main::get_instance()->get_builders();
		foreach ( $builders as $builder ) {
			if ( $builder->is_component_active( $this->get_id() ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Load Component Scripts
	 *
	 * @return void
	 */
	public function load_scripts() {
		if ( $this->is_component_active() || is_customize_preview() ) {
			wp_add_inline_script( 'neve-script', $this->toggle_script() );
		}
	}

	/**
	 * Generate the variants for the Logo
	 *
	 * @param array $variants Contains other variants from similar components.
	 *
	 * @return array
	 */
	public function filter_logo_variants( $variants ) {
		$main_logo          = get_theme_mod( 'custom_logo' );
		$conditional_main   = json_decode( Mods::get( self::COMPONENT_ID . '_' . self::LOGO, self::sanitize_logo_json( $main_logo ) ), true );
		$logo_main_light_id = $main_logo;
		$logo_main_dark_id  = $logo_main_light_id;
		$logo_main_same     = true;
		if ( ! empty( $conditional_main ) ) {
			$logo_main_light_id = isset( $conditional_main['light'] ) ? $conditional_main['light'] : $main_logo;
			$logo_main_dark_id  = isset( $conditional_main['dark'] ) ? $conditional_main['dark'] : $logo_main_light_id;
			$logo_main_same     = isset( $conditional_main['same'] ) ? $conditional_main['same'] : $logo_main_same;
		}

		$variants[ $this->get_id() ] = array(
			'light' => array(
				'src'    => wp_get_attachment_image_url( $logo_main_light_id, apply_filters( 'hfg_logo_image_size', 'full' ), false ),
				'srcset' => wp_get_attachment_image_srcset( $logo_main_light_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
				'sizes'  => wp_get_attachment_image_sizes( $logo_main_light_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
			),
			'dark'  => array(
				'src'    => wp_get_attachment_image_url( $logo_main_dark_id, apply_filters( 'hfg_logo_image_size', 'full' ), false ),
				'srcset' => wp_get_attachment_image_srcset( $logo_main_dark_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
				'sizes'  => wp_get_attachment_image_sizes( $logo_main_dark_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
			),
			'same'  => $logo_main_same,
		);
		return $variants;
	}

	/**
	 * Get JS contents from file to use as inline script.
	 *
	 * @return string
	 */
	public function toggle_script() {
		$variants      = apply_filters( 'hfg_logo_variants', array() );
		$variants_json = wp_json_encode( $variants );

		$script = <<<JS
	var html = document.documentElement;
	var theme = html.getAttribute('data-neve-theme') || 'light';
	var variants = {$variants_json};

	function setCurrentTheme( theme ) {
		var pictures = document.getElementsByClassName( 'neve-site-logo' );
		for(var i = 0; i<pictures.length; i++) {
			var picture = pictures.item(i);
			if( ! picture ) {
				continue;
			};
			var fileExt = picture.src.slice((Math.max(0, picture.src.lastIndexOf(".")) || Infinity) + 1);
			if ( fileExt === 'svg' ) {
				picture.removeAttribute('width');
				picture.removeAttribute('height');
				picture.style = 'width: var(--maxwidth)';
			}
			var compId = picture.getAttribute('data-variant');
			if ( compId && variants[compId] ) {
				var isConditional = variants[compId]['same'];
				if ( theme === 'light' || isConditional || variants[compId]['dark']['src'] === false ) {
					picture.src = variants[compId]['light']['src'];
					picture.srcset = variants[compId]['light']['srcset'] || '';
					picture.sizes = variants[compId]['light']['sizes'];
					continue;
				};
				picture.src = variants[compId]['dark']['src'];
				picture.srcset = variants[compId]['dark']['srcset'] || '';
				picture.sizes = variants[compId]['dark']['sizes'];
			};
		};
	};

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type == 'attributes') {
				theme = html.getAttribute('data-neve-theme');
				setCurrentTheme(theme);
			};
		});
	});

	observer.observe(html, {
		attributes: true
	});
JS;
		return $script;
	}

	/**
	 * Sanitize the logo json
	 *
	 * @param string $input A json data for the logo component.
	 *
	 * @return string
	 */
	public static function sanitize_logo_json( $input ) {
		$inputs = json_decode( $input, true );
		if ( is_array( $inputs ) && ! empty( $inputs ) && ! empty( $input ) ) {
			return $input;
		}

		return wp_json_encode(
			array(
				'light' => get_theme_mod( 'custom_logo' ),
				'dark'  => get_theme_mod( 'custom_logo' ),
				'same'  => true,
			)
		);
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {

		if ( $this->get_class_const( 'COMPONENT_ID' ) === 'logo' ) {
			SettingsManager::get_instance()->add_controls_to_tabs(
				$this->get_class_const( 'COMPONENT_ID' ),
				array(
					SettingsManager::TAB_GENERAL => array(
						self::LOGO        => array(),
						'blogname'        => array(),
						'blogdescription' => array(),
						'site_icon'       => array(),
					),
				)
			);
		}

		$custom_logo_args = get_theme_support( 'custom-logo' );
		$default          = array(
			'light' => get_theme_mod( 'custom_logo' ),
			'dark'  => get_theme_mod( 'custom_logo' ),
			'same'  => true,
		);
		SettingsManager::get_instance()->add(
			[
				'id'                => self::LOGO,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'refresh',
				'sanitize_callback' => array( $this, 'sanitize_logo_json' ),
				'default'           => wp_json_encode( $default ),
				'type'              => '\Neve\Customizer\Controls\React\Logo_Palette',
				'options'           => [
					'priority'    => 0,
					'input_attrs' => [
						'builderListen' => 'hfg_header_layout' . ( neve_is_new_builder() ? '_v2' : '' ),
						'compChange'    => PaletteSwitch::COMPONENT_ID,
						'sameLabel'     => __( 'Use one logo for both modes', 'neve' ),
						'height'        => isset( $custom_logo_args[0]['height'] ) ? $custom_logo_args[0]['height'] : null,
						'width'         => isset( $custom_logo_args[0]['width'] ) ? $custom_logo_args[0]['width'] : null,
						'flexHeight'    => isset( $custom_logo_args[0]['flex-height'] ) ? $custom_logo_args[0]['flex-height'] : true,
						'flexWidth'     => false, // this can not flex as to allow correct cropping
					],
				],
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::DISPLAY,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_builder_id(),
				'sanitize_callback'  => 'wp_filter_nohtml_kses',
				'default'            => 'default',
				'label'              => __( 'Display', 'neve' ),
				'type'               => '\Neve\Customizer\Controls\React\Radio_Buttons',
				'options'            => [
					'priority'      => - 1,
					'is_for'        => 'logo',
					'large_buttons' => true,
				],
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::SHOW_TAGLINE,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => 1,
				'label'              => __( 'Show Site Tagline', 'neve' ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::SHOW_TITLE,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => 1,
				'label'              => __( 'Show Site Title', 'neve' ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                => self::MAX_WIDTH,
				'group'             => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'               => SettingsManager::TAB_GENERAL,
				'transport'         => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback' => 'neve_sanitize_range_value',
				'default'           => '{ "mobile": "120", "tablet": "120", "desktop": "120" }',
				'label'             => __( 'Logo max width', 'neve' ),
				'type'              => '\Neve\Customizer\Controls\React\Responsive_Range',
				'options'           => [
					'priority'                 => 12,
					'hide_responsive_switches' => true,
					'media_query'              => true,
					'step'                     => 1,
					'input_attrs'              => [
						'min'        => 0,
						'max'        => 350,
						'units'      => [ 'px', 'em', 'rem' ],
						'defaultVal' => [
							'mobile'  => 120,
							'tablet'  => 120,
							'desktop' => 120,
							'suffix'  => [
								'mobile'  => 'px',
								'tablet'  => 'px',
								'desktop' => 'px',
							],
						],
					],
				],
				'section'           => $this->section,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                 => self::DISABLE_LINK,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'absint',
				'default'            => false,
				'label'              => __( 'Disable Homepage Link', 'neve' ),
				'type'               => 'neve_toggle_control',
				'section'            => $this->section,
				'conditional_header' => true,
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
					'cssVar' => [
						'vars'     => '--color',
						'selector' => '.builder-item--' . $this->get_id(),
					],
					[
						'selector' => $this->default_selector . ' .brand .nv-title-tagline-wrap',
						'prop'     => 'color',
						'fallback' => 'inherit',
					],
				],
				'conditional_header'    => true,
			]
		);
	}

	/**
	 * Render logo section.
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-logo' );
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
		if ( ! neve_is_new_skin() ) {
			return $this->add_legacy_style( $css_array );
		}

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => '.builder-item--' . $this->get_id(),
			Dynamic_Selector::KEY_RULES    => [
				'--maxwidth' => [
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::MAX_WIDTH,
					Dynamic_Selector::META_SUFFIX        => 'responsive_suffix',
					Dynamic_Selector::META_DEFAULT       => '{ "mobile": "120", "tablet": "120", "desktop": "120" }',
				],
				'--color'    => [
					Dynamic_Selector::META_KEY => $this->get_id() . '_' . self::COLOR_ID,
				],
			],
		];

		return parent::add_style( $css_array );
	}

	/**
	 * Add legacy style.
	 *
	 * @param array $css_array css array.
	 *
	 * @return array
	 */
	private function add_legacy_style( $css_array ) {
		$selector = '.builder-item--' . $this->get_id() . ' .site-logo img';

		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $selector,
			Dynamic_Selector::KEY_RULES    => [
				\Neve\Core\Settings\Config::CSS_PROP_MAX_WIDTH => [
					Dynamic_Selector::META_IS_RESPONSIVE => true,
					Dynamic_Selector::META_KEY           => $this->get_id() . '_' . self::MAX_WIDTH,
					Dynamic_Selector::META_DEFAULT       => '{ "mobile": "120", "tablet": "120", "desktop": "120" }',
				],
			],
		];
		$css_array[] = [
			Dynamic_Selector::KEY_SELECTOR => $this->default_selector . ' .brand .nv-title-tagline-wrap',
			Dynamic_Selector::KEY_RULES    => [
				\Neve\Core\Settings\Config::CSS_PROP_COLOR => $this->get_id() . '_' . self::COLOR_ID,
			],
		];

		return parent::add_style( $css_array );
	}
}
