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
	 * Enqueues a Google Font
	 *
	 * @param string $font font string.
	 * @param array  $weights font weights.
	 *
	 * @since 1.1.38
	 */
	private function enqueue_google_font( $font, $weights = [] ) {
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

		// Enqueue style

		/**
		 * Filters whether the remote fonts should be hosted locally.
		 *
		 * This filter applies for both Google Fonts and Typekit Fonts if the Typekit module is used.
		 *
		 * @param bool $load_locally Whether the Google Fonts should be hosted locally. Default value is false.
		 *
		 * @since 2.11
		 */
		$should_enqueue_locally = apply_filters( 'neve_load_remote_fonts_locally', false );
		$is_admin_context       = is_admin() || is_customize_preview();
		$vendor_file            = trailingslashit( get_template_directory() ) . 'vendor/wptt/webfont-loader/wptt-webfont-loader.php';
		if ( (bool) $should_enqueue_locally && ! $is_admin_context && is_readable( $vendor_file ) ) {
			require_once $vendor_file;
			wp_add_inline_style(
				'neve-style',
				wptt_get_webfont_styles( 'https:' . $url )
			);
		} else {
			wp_enqueue_style( 'neve-google-font-' . str_replace( ' ', '-', strtolower( $font ) ), $url, array(), NEVE_VERSION );
		}
	}
}
