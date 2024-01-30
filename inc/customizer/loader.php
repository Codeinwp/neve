<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Customizer
 */

namespace Neve\Customizer;

use HFG\Core\Components\Utility\SearchIconButton;
use Neve\Core\Factory;
use Neve\Core\Limited_Offers;
use Neve\Core\Settings\Config;
use Neve\Customizer\Options\Colors_Background;

/**
 * Main customizer handler.
 *
 * @package Neve\Customizer
 */
class Loader {
	const CUSTOMIZER_STYLE_HANDLE = 'neve-customizer-style';
	/**
	 * Customizer modules.
	 *
	 * @var array
	 */
	private $customizer_modules = array();

	/**
	 * Loader constructor.
	 */
	public function __construct() {
		add_action( 'customize_preview_init', array( $this, 'enqueue_customizer_preview' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'set_featured_image' ) );
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'enqueue_customizer_controls' ) );
	}

	/**
	 * Initialize the customizer functionality
	 */
	public function init() {
		global $wp_customize;

		if ( ! isset( $wp_customize ) ) {
			return;
		}
		$this->define_modules();
		$this->load_modules();
		add_action( 'customize_register', array( $this, 'change_pro_controls' ), PHP_INT_MAX );
		add_action( 'customize_register', array( $this, 'register_setting_local_gf' ) );
	}

	/**
	 * Method to modify already defined controls.
	 *
	 * @param \WP_Customize_Manager $wp_customize The WP_Customize_Manager object.
	 */
	public function change_pro_controls( \WP_Customize_Manager $wp_customize ) {
		if ( neve_can_use_conditional_header() ) {
			return;
		}

		$controls_to_disable = [ 'neve_global_header', 'neve_header_conditional_selector' ];
		foreach ( $controls_to_disable as $control_slug ) {
			$wp_customize->remove_control( $control_slug );
		}
	}

	/**
	 * Define the modules that will be loaded.
	 */
	private function define_modules() {
		$this->customizer_modules = apply_filters(
			'neve_filter_customizer_modules',
			array(
				'Customizer\Options\Main',
				'Customizer\Options\Layout_Container',
				'Customizer\Options\Layout_Blog',
				'Customizer\Options\Layout_Single_Post',
				'Customizer\Options\Layout_Single_Page',
				'Customizer\Options\Layout_Single_Product',
				'Customizer\Options\Layout_Sidebar',
				'Customizer\Options\Typography',
				'Customizer\Options\Colors_Background',
				'Customizer\Options\Checkout',
				'Customizer\Options\Buttons',
				'Customizer\Options\Form_Fields',
				'Customizer\Options\Rtl',
				'Customizer\Options\Upsells',
			)
		);
	}

	/**
	 * Enqueue customizer controls script.
	 */
	public function enqueue_customizer_controls() {
		wp_register_style( self::CUSTOMIZER_STYLE_HANDLE, NEVE_ASSETS_URL . 'css/customizer-style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), NEVE_VERSION );
		wp_style_add_data( self::CUSTOMIZER_STYLE_HANDLE, 'rtl', 'replace' );
		wp_style_add_data( self::CUSTOMIZER_STYLE_HANDLE, 'suffix', '.min' );
		wp_enqueue_style( self::CUSTOMIZER_STYLE_HANDLE );

		wp_enqueue_script(
			'neve-customizer-controls',
			NEVE_ASSETS_URL . 'js/build/all/customizer-controls.js',
			array(
				'jquery',
				'wp-color-picker',
			),
			NEVE_VERSION,
			true
		);

		$offer        = new Limited_Offers();
		$bundle_path  = get_template_directory_uri() . '/assets/apps/customizer-controls/build/';
		$dependencies = ( include get_template_directory() . '/assets/apps/customizer-controls/build/controls.asset.php' );
		wp_register_script( 'react-controls', $bundle_path . 'controls.js', $dependencies['dependencies'], $dependencies['version'], true );
		wp_localize_script(
			'react-controls',
			'NeveReactCustomize',
			apply_filters(
				'neve_react_controls_localization',
				array(
					'nonce'                         => wp_create_nonce( 'wp_rest' ),
					'headerControls'                => [],
					'instructionalVid'              => esc_url( get_template_directory_uri() . '/header-footer-grid/assets/images/customizer/hfg.mp4' ),
					'dynamicTags'                   => array(
						'controls' => array(),
						'options'  => array(),
					),
					'upsellComponentsLink'          => tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'hfgcomponents' ),
					'fonts'                         => array(
						'System' => neve_get_standard_fonts(),
						'Google' => neve_get_google_fonts(),
					),
					'fontVariants'                  => neve_get_google_fonts( true ),
					'systemFontVariants'            => neve_get_standard_fonts( true ),
					'hideConditionalHeaderSelector' => ! neve_can_use_conditional_header(),
					'dashUpdatesMessage'            => sprintf( 'Please %s to the latest version of Neve Pro to manage the conditional headers.', '<a href="' . esc_url( admin_url( 'update-core.php' ) ) . '">' . __( 'update', 'neve' ) . '</a>' ),
					'bundlePath'                    => get_template_directory_uri() . '/assets/apps/customizer-controls/build/',
					'localGoogleFonts'              => array(
						'learnMore' => apply_filters( 'neve_external_link', 'https://docs.themeisle.com/article/1349-how-to-load-neve-fonts-locally', esc_html__( 'Learn more', 'neve' ) ),
						'key'       => Config::OPTION_LOCAL_GOOGLE_FONTS_HOSTING,
					),
					'fontPairs'                     => get_theme_mod( Config::MODS_TPOGRAPHY_FONT_PAIRS, Config::$typography_default_pairs ),
					'allowedGlobalCustomColor'      => Colors_Background::CUSTOM_COLOR_LIMIT,
					'constants'                     => [
						'HFGSearch' => [
							'defaultIconKey' => SearchIconButton::DEFAULT_ICON,
							'customIconKey'  => SearchIconButton::CUSTOM_ICON,
						],
					],
					'deal'                          => ! defined( 'NEVE_PRO_VERSION' ) ? $offer->get_localized_data() : array(),
				)
			)
		);
		wp_enqueue_script( 'react-controls' );

		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'react-controls', 'neve' );
		}

		wp_register_style( 'react-controls', $bundle_path . 'style-controls.css', [ 'neve-components' ], $dependencies['version'] );
		wp_style_add_data( 'react-controls', 'rtl', 'replace' );
		wp_enqueue_style( 'react-controls' );

		if ( isset( $dependencies['chunks'] ) ) {
			foreach ( $dependencies['chunks'] as $chunk_file ) {
		
				$chunk_handle = 'neve-customizer-chunk-' . $chunk_file;
				wp_register_script( $chunk_handle, $bundle_path . $chunk_file, [], $dependencies['version'], true );
				wp_enqueue_script( $chunk_handle );
				
				if ( function_exists( 'wp_set_script_translations' ) ) {
					wp_set_script_translations( $chunk_handle, 'neve' );
				}
			}
		}

		$fonts  = neve_get_google_fonts();
		$chunks = array_chunk( $fonts, absint( count( $fonts ) / 5 ) );

		foreach ( $chunks as $index => $fonts_chunk ) {
			wp_enqueue_style(
				'neve-fonts-control-google-fonts-' . $index,
				'https://fonts.googleapis.com/css?family=' . join( '|', $fonts_chunk ) . '&text=AbcTtheigrownfoxJumpsvlazydg"',
				[],
				NEVE_VERSION
			);
		}
	}

	/**
	 * Enqueue customizer preview script.
	 */
	public function enqueue_customizer_preview() {
		wp_enqueue_style(
			'neve-customizer-preview-style',
			NEVE_ASSETS_URL . 'css/customizer-preview' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css',
			array(),
			NEVE_VERSION
		);
		wp_register_script(
			'neve-customizer-preview',
			NEVE_ASSETS_URL . 'js/build/all/customizer-preview.js',
			array(),
			NEVE_VERSION,
			true
		);

		$shop_has_meta = 'no';
		$shop_id       = get_option( 'woocommerce_shop_page_id' );
		if ( ! empty( $shop_id ) ) {
			$meta = get_post_meta( $shop_id, 'neve_meta_sidebar', true );

			if ( ! empty( $meta ) && $meta !== 'default' ) {
				$shop_has_meta = 'yes';
			}
		}

		wp_localize_script(
			'neve-customizer-preview',
			'neveCustomizePreview',
			apply_filters(
				'neve_customize_preview_localization',
				array(
					'currentFeaturedImage' => '',
					'newBuilder'           => neve_is_new_builder(),
					'newSkin'              => neve_is_new_skin(),
					'shopHasMetaSidebar'   => $shop_has_meta,
				)
			)
		);
		wp_enqueue_script( 'neve-customizer-preview' );
	}

	/**
	 * Save featured image in previously localized object.
	 */
	public function set_featured_image() {
		if ( ! is_customize_preview() ) {
			return;
		}
		if ( ! is_singular() ) {
			return;
		}
		$thumbnail = get_the_post_thumbnail_url();
		if ( $thumbnail === false ) {
			return;
		}
		wp_add_inline_script( 'neve-customizer-preview', 'neveCustomizePreview.currentFeaturedImage = "' . esc_url( get_the_post_thumbnail_url() ) . '";' );
	}

	/**
	 * Load the customizer modules.
	 *
	 * @return void
	 */
	private function load_modules() {
		$factory = new Factory( $this->customizer_modules );
		$factory->load_modules();
	}

	/**
	 * Register setting for "Toggle that enables local host of Google fonts"
	 *
	 * @param \WP_Customize_Manager $wp_customize \WP_Customize_Manager instance.
	 * @return void
	 */
	public function register_setting_local_gf( $wp_customize ) {
		$wp_customize->add_setting(
			Config::OPTION_LOCAL_GOOGLE_FONTS_HOSTING,
			[
				'type'              => 'option',
				'sanitize_callback' => 'rest_sanitize_boolean',
				'default'           => false,
			]
		);
	}
}
