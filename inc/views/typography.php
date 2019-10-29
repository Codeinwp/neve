<?php
/**
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
class Typography extends Base_View {
	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_google_fonts' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_google_fonts_gutenberg' ) );
		add_filter( 'neve_filter_font_weights', array( $this, 'add_font_weights' ), 10, 2 );
	}

	/**
	 * Register the google fonts for gutenberg.
	 */
	public function register_google_fonts_gutenberg() {
		$this->register_google_fonts();
	}

	/**
	 * Register the fonts that are selected in customizer.
	 */
	public function register_google_fonts() {

		$typekit_fonts = apply_filters( 'neve_typekit_fonts', array() );

		/**
		 * Headings font family.
		 */
		$headings_font = get_theme_mod( 'neve_headings_font_family', apply_filters( 'neve_headings_default', false ) );

		if ( ! empty( $headings_font ) && ! in_array( $headings_font, $typekit_fonts, true ) ) {
			$this->enqueue_google_font( $headings_font, 'headings' );
		}


		/**
		 * Body font family.
		 */
		$body_font = get_theme_mod( 'neve_body_font_family', apply_filters( 'neve_body_font_default', false ) );
		if ( ! empty( $body_font ) && ! in_array( $body_font, $typekit_fonts, true ) ) {
			$this->enqueue_google_font( $body_font, 'body' );
		}
	}

	/**
	 * Enqueues a Google Font
	 *
	 * @param string $font   font string.
	 * @param string $handle body/headings.
	 *
	 * @since 1.1.38
	 */
	private function enqueue_google_font( $font, $handle ) {

		// Get list of all Google Fonts.
		$google_fonts = $this->get_google_fonts();

		// Make sure font is in our list of fonts.
		if ( ! $google_fonts || ! in_array( $font, $google_fonts, true ) ) {
			return;
		}

		// Sanitize font name.
		$font = trim( $font );

		$base_url = '//fonts.googleapis.com/css';

		// Weights.
		$weights = apply_filters( 'neve_filter_font_weights', array( '300', '400', '500', '700' ), $handle );
		// Add weights to URL.
		if ( ! empty( $weights ) ) {
			$font .= ':' . implode( ',', $weights );
		}

		$query_args = array(
			'family' => urlencode( $font ),
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
		wp_enqueue_style( 'neve-google-font-' . $handle, $url, array(), false );
	}

	/**
	 * List of All Google fonts
	 */
	private function get_google_fonts() {
		return neve_get_google_fonts();
	}

	/**
	 * Add headings font weights.
	 *
	 * @param array  $weights_array font weight array.
	 * @param string $context       the context ['headings', 'body'].
	 *
	 * @return array
	 */
	public function add_font_weights( $weights_array, $context ) {
		// Enqueue all the font weights in customizer preview.
		if ( is_customize_preview() ) {
			return array( '100', '200', '300', '400', '500', '600', '700', '800', '900' );
		}

		if ( $context !== 'headings' && $context !== 'body' ) {
			return $weights_array;
		}
		if ( $context === 'headings' ) {
			$added_weights           = [];
			$should_check_old_weight = false;
			foreach ( [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ] as $heading ) {
				$setup = get_theme_mod( 'neve_' . $heading . '_typeface_general' );
				if ( empty( $setup ) || ! isset( $setup['fontWeight'] ) ) {
					$should_check_old_weight = true;
					continue;
				}
				if ( in_array( $setup['fontWeight'], $weights_array, true ) ) {
					continue;
				}
				$added_weights[] = $setup['fontWeight'];
			}

			// Check for old setting if not all settings are set.
			if ( $should_check_old_weight ) {
				$weight = get_theme_mod( 'neve_headings_font_weight' );
				if ( ! empty( $weight ) ) {
					$added_weights[] = $weight;
				}
			}

			$weights_array = array_merge( $weights_array, $added_weights );

			return array_unique( $weights_array );
		}

		if ( $context === 'body' ) {
			$setup = get_theme_mod( 'neve_typeface_general' );
			if ( ! empty( $setup ) && isset( $setup['fontWeight'] ) ) {
				$weights_array[] = $setup['fontWeight'];

				return array_unique( $weights_array );
			}

			$old_font_weight = get_theme_mod( 'neve_body_font_weight' );
			if ( ! empty( $old_font_weight ) ) {
				$weights_array[] = $old_font_weight;

				return array_unique( $weights_array );
			}
		}

		return array_unique( $weights_array );
	}
}
