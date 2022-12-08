<?php
/**
 * Handles Google Fonts enqueueing.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      22/08/2018
 *
 * @package Neve\Views
 */

namespace Neve\Views;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;

/**
 * Class Typography
 *
 * @package Neve\Views
 */
class Font_Manager extends Base_View {
	/**
	 * The font families buffer.
	 *
	 * @var array
	 */
	public static $font_families = array();

	/**
	 * Body font family variants.
	 *
	 * @var array
	 */
	public static $body_variants = array();

	/**
	 * Add a google font.
	 *
	 * @param string $font_family font family.
	 * @param string $font_weight font weight.
	 */
	final public static function add_google_font( $font_family, $font_weight = '400' ) {
		if ( empty( $font_family ) ) {
			$body_font = self::get_body_font_family();
			if ( empty( $body_font ) ) {
				return;
			}
			$font_family = $body_font;
		}

		$allowed_variants = [
			'100',
			'200',
			'300',
			'400',
			'500',
			'600',
			'700',
			'800',
			'900',
			'100italic',
			'200italic',
			'300italic',
			'400italic',
			'500italic',
			'600italic',
			'700italic',
			'800italic',
			'900italic',
		];

		if ( ! in_array( $font_weight, $allowed_variants, true ) ) {
			$font_weight = '400';
		}

		if ( array_key_exists( $font_family, self::$font_families ) ) {
			self::$font_families[ $font_family ][] = $font_weight;
			self::$font_families[ $font_family ]   = array_unique( self::$font_families[ $font_family ] );

			return;
		}
		self::$font_families[ $font_family ] = [ $font_weight ];
	}

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		$this->add_body_variants();
		add_action( 'wp_enqueue_scripts', array( $this, 'register_google_fonts' ), 200 );
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_google_fonts' ), 200 );
		add_action( 'enqueue_block_editor_assets', array( $this, 'do_editor_styles_google_fonts' ), 210 );
		add_action( 'wp_print_styles', array( $this, 'load_external_fonts_locally' ), PHP_INT_MAX );
	}

	/**
	 * Add body font family variants.
	 */
	private function add_body_variants() {
		$body_font   = self::get_body_font_family();
		$gfonts_data = neve_get_google_fonts( true );

		// Variations are only available for Google fonts.
		if ( ! in_array( $body_font, array_keys( $gfonts_data ) ) ) {
			return;
		}

		// If there are no variations statically defined then don't do anything.
		if ( empty( $gfonts_data[ $body_font ] ) ) {
			return;
		}

		$variations = $this->get_body_variations();

		sort( $variations );

		foreach ( $variations as $variation ) {
			self::add_google_font( $body_font, $variation );
		}
	}

	/**
	 * Get body font family.
	 *
	 * @return string
	 */
	public static function get_body_font_family() {
		$body_mod     = Config::MODS_FONT_GENERAL;
		$body_default = Mods::get_alternative_mod_default( Config::MODS_FONT_GENERAL );

		return Mods::get( $body_mod, $body_default );
	}

	/**
	 * Get body variations.
	 *
	 * @return string[]
	 */
	private function get_body_variations() {
		return get_theme_mod( Config::MODS_FONT_GENERAL_VARIANTS, [] );
	}

	/**
	 * Register the fonts that are selected in customizer.
	 */
	public function register_google_fonts() {
		foreach ( self::$font_families as $font_family => $font_weights ) {
			$this->enqueue_google_font( $font_family, $font_weights );
		}
	}

	/**
	 * Will register fonts for the editor preview (mobile|tablet)
	 */
	public function do_editor_styles_google_fonts() {
		if ( empty( self::$font_families ) ) {
			return;
		}
		add_theme_support( 'editor-styles' );
		$style_array = array(
			'editor-styles.css',
		);
		foreach ( self::$font_families as $font_family => $font_weights ) {
			$url = $this->enqueue_google_font( $font_family, $font_weights, true );
			if ( ! empty( $url ) ) {
				array_push( $style_array, 'https:' . $url );
			}
		}
		add_editor_style(
			$style_array
		);
	}

	/**
	 * Enqueues a Google Font
	 *
	 * @param string  $font font string.
	 * @param array   $weights font weights.
	 * @param boolean $skip_enqueue flag to skip enqueue and return url.
	 *
	 * @since 1.1.38
	 */
	private function enqueue_google_font( $font, $weights = [], $skip_enqueue = false ) {
		// Get list of all Google Fonts.
		$google_fonts = neve_get_google_fonts( true );

		$font = str_replace( '"', '', $font );

		// Make sure font is in our list of fonts.
		if ( ! in_array( $font, array_keys( $google_fonts ), true ) ) {
			return;
		}

		// Make sure 400 font weight is always included.
		$weights = array_unique( array_merge( $weights, [ '400' ] ) );

		// In customizer, all font weights should be active for the preview.
		if ( is_customize_preview() ) {
			$weights = isset( $google_fonts[ $font ] ) ? $google_fonts[ $font ] : [
				'100',
				'200',
				'300',
				'400',
				'500',
				'600',
				'700',
				'800',
				'900',
			];
		}

		// Sanitize font name.
		$url_string = trim( $font );

		$base_url = '//fonts.googleapis.com/css';

		// Add weights to URL.
		if ( ! empty( $weights ) ) {
			$url_string .= ':' . implode( ',', $weights );
		}

		$query_args = array(
			'family'  => urlencode( $url_string ),
			'display' => 'swap',
		);

		$subsets = [
			'ru_RU' => 'cyrillic',
			'bg_BG' => 'cyrillic',
			'he_IL' => 'hebrew',
			'el'    => 'greek',
			'vi'    => 'vietnamese',
			'uk'    => 'cyrillic',
			'cs_CZ' => 'latin-ext',
			'ro_RO' => 'latin-ext',
			'pl_PL' => 'latin-ext',
		];
		$locale  = get_locale();

		if ( isset( $subsets[ $locale ] ) ) {
			$query_args['subset'] = urlencode( $subsets[ $locale ] );
		}
		$url = add_query_arg( $query_args, $base_url );

		if ( $skip_enqueue ) {
			return $url;
		}

		wp_enqueue_style( 'neve-google-font-' . str_replace( ' ', '-', strtolower( $font ) ), $url, array(), NEVE_VERSION );
	}

	/**
	 * Load Google Fonts locally.
	 *
	 * @return void
	 */
	public function load_external_fonts_locally() {

		$toggle = get_option( Config::OPTION_LOCAL_GOOGLE_FONTS_HOSTING, false );

		/**
		 * Filters whether the remote fonts should be hosted locally.
		 *
		 * This filter applies for both Google Fonts and Typekit Fonts if the Typekit module is used.
		 *
		 * @param bool $should_enqueue_locally Whether the Google Fonts should be hosted locally. Default value is false.
		 *
		 * @since 2.11
		 */
		$should_enqueue_locally = apply_filters( 'neve_load_remote_fonts_locally', $toggle );

		if ( ! (bool) $should_enqueue_locally ) {
			return;
		}

		$is_admin_context = is_admin() || is_customize_preview();
		$wptt_vendor_file = trailingslashit( get_template_directory() ) . 'vendor/wptt/webfont-loader/wptt-webfont-loader.php';

		if ( $is_admin_context || ! is_readable( $wptt_vendor_file ) ) {
			return;
		}

		/**
		 * Bail when in Elementor edit mode.
		 *
		 * We do this so that initial load of Elementor editor will not be slowed down by Neve Pro downloading Roboto fonts.
		 */
		if ( class_exists( '\Elementor\Plugin' ) ) {
			global $post;
			if ( \Elementor\Plugin::$instance->editor->is_edit_mode() ||
				\Elementor\Plugin::$instance->preview->is_preview_mode()
				) {
				return;
			}
		}

		/**
		 * Allow filtering for additional external font providers.
		 *
		 * The domains provided to this filter should be from services that link directly to a CSS file or else WPTT will not be able to download the fonts.
		 */
		$external_font_domains = apply_filters(
			'neve_font_providers',
			array(
				'fonts.googleapis.com/css',
				'use.typekit.net',
			)
		);

		global $wp_styles;
		$enqueued_styles = $wp_styles->queue ?? '';

		if ( ! is_array( $enqueued_styles ) ) {
			return;
		}

		$external_fonts = array();

		foreach ( $enqueued_styles as $style ) {

			$source = $wp_styles->registered[ $style ]->src;

			foreach ( $external_font_domains as $domain ) {

				if ( strpos( $source, $domain ) !== false ) {
					$parts = wp_parse_url( $source );
					/**
					 * Some plugins might set font url without protocol example //fonts.googleapis.com...
					 * Lets build the url ourselves to be sure the its whats expected.
					*/
					$normalized_source = 'https://' . $parts['host'] . $parts['path'] . ( isset( $parts['query'] ) ? '?' . $parts['query'] : '' );
					$external_fonts[]  = $normalized_source;
					// Dequeue this handle since we are going to load the font locally
					wp_dequeue_style( $style );
				}
			}
		}

		$external_fonts = array_unique( $external_fonts );

		require_once $wptt_vendor_file;

		foreach ( $external_fonts as $font_link ) {
			wp_add_inline_style( 'neve-style', wptt_get_webfont_styles( $font_link ) );
		}

	}

}
