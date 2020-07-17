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
	static $font_families = array();

	/**
	 * Add a google font.
	 *
	 * @param string $font_family font family.
	 * @param string $font_weight font weight.
	 */
	final static function add_google_font( $font_family, $font_weight = '400' ) {
		if ( empty( $font_family ) ) {
			return;
		}
		if ( ! in_array( $font_weight, [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ], true ) ) {
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
		add_action( 'wp_enqueue_scripts', array( $this, 'register_google_fonts' ), 200 );
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_google_fonts' ), 200 );
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
	 * @param string $font    font string.
	 * @param array  $weights font weights.
	 *
	 * @since 1.1.38
	 */
	private function enqueue_google_font( $font, $weights = [] ) {
		// Get list of all Google Fonts.
		$google_fonts = neve_get_google_fonts();

		// Make sure font is in our list of fonts.
		if ( ! $google_fonts || ! in_array( $font, $google_fonts, true ) ) {
			return;
		}

		// Make sure 400 font weight is always included.
		$weights = array_unique( array_merge( $weights, [ '400' ] ) );

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
		wp_enqueue_style( 'neve-google-font-' . str_replace( ' ', '-', strtolower( $font ) ), $url, array(), false );
	}
}
