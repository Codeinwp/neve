<?php


namespace Neve\Core;


use Neve\Core\Styles\Frontend;
use Neve\Core\Styles\Generator;
use Neve\Core\Styles\Gutenberg;
use Neve\Core\Settings\Mods;
use Neve\Core\Settings\Config;

class Dynamic_Css {
	const FRONTEND_HANDLE = 'neve-style';
	const GUTENBERG_HANDLE = 'neve-gutenberg-style';
	/**
	 * Generator object.
	 *
	 * @var Generator CSS generator object.
	 */
	private $generator = null;
	const EDITOR_ACTION = 'enqueue_block_editor_assets';
	const FRONTEND_ACTION = 'wp_enqueue_scripts';

	/**
	 * Register actions.
	 */
	public function init() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue' ), 100 );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ), 100 );
		add_action( 'customize_controls_enqueue_scripts', [ $this, 'add_customize_vars_tag' ] );

		if ( is_customize_preview() ) {
			add_action( 'wp_head', [ $this, 'add_customize_vars_tag' ] );
		}
	}

	public function legacy_style() {
		$classes = apply_filters( 'neve_filter_inline_style_classes', [], 'neve-generated-style' );
		$mobile_css = '';
		$desktop_css = '';
		$tablet_css = '';
		foreach ( $classes as $class ) {
			$object = new $class();
			$object->init();
			$mobile_css .= $object->get_style( 'mobile' );
			$desktop_css .= $object->get_style( 'desktop' );
			$tablet_css .= $object->get_style( 'tablet' );
		}
		$all_css = $mobile_css;
		if ( ! empty( $tablet_css ) ) {
			$all_css .= sprintf( '@media(min-width: 576px){ %s }', $tablet_css );
		}
		if ( ! empty( $desktop_css ) ) {
			$all_css .= sprintf( '@media(min-width: 960px){ %s }', $desktop_css );
		}
		add_filter( 'neve_dynamic_style_output', function ( $css ) use ( $all_css ) {
			return $all_css . $css;
		} );
	}

	/**
	 * Load frontend style.
	 */
	public function enqueue() {
		$is_for_gutenberg = (current_action() === self::EDITOR_ACTION);
		if ( ! class_exists( ' Neve_Pro\Core\Generic_Style', true ) ) {
			$this->legacy_style();
		}

		$this->generator = $is_for_gutenberg ? new Gutenberg() : new Frontend();
		$_subscribers = $this->generator->get();

		$_subscribers = array_merge( $_subscribers, apply_filters( 'neve_style_subscribers', [] ) );

		$this->generator->set( $_subscribers );

		$style = apply_filters( 'neve_dynamic_style_output', $this->generator->generate(), $is_for_gutenberg ? 'gutenberg' : 'frontend' );

		$style .= self::get_root_css();

		$style = self::minify_css( $style );

		wp_add_inline_style( $is_for_gutenberg ? self::GUTENBERG_HANDLE : self::FRONTEND_HANDLE, $style );
	}

	/**
	 * Basic CSS minification.
	 *
	 * @param string $css
	 *
	 * @return string
	 */
	public static function minify_css( $css ) {
		return preg_replace( '/\s+/', ' ', $css );
	}

	/**
	 * Adds customizer CSS tag for CSS vars.
	 */
	public function add_customize_vars_tag() {
		wp_register_style( 'nv-css-vars', false );
		wp_enqueue_style( 'nv-css-vars' );

		$css = ':root{' . $this->get_css_vars() . '}';
		$css .= apply_filters( 'neve_after_css_root', $css );
		wp_add_inline_style( 'nv-css-vars', self::minify_css($css ) );

		/**
		 * Custom colors needs a separate style to prevent overwriting the main color for the pallets.
		 */
		wp_register_style( 'nv-custom-color-vars', false );
		wp_enqueue_style( 'nv-custom-color-vars' );
		$custom_colors = self::get_global_custom_colors();
		$colors_css = '';
		foreach ( $custom_colors as $slug => $color ) {
			$colors_css .= '--' . $slug . ':' . $color . ';';
		}
		$css = ':root{' . esc_html( $colors_css ) . '}';
		wp_add_inline_style( 'nv-custom-color-vars', self::minify_css($css ) );
	}

	/**
	 * Get root style (css variables)
	 *
	 * @return string
	 */
	public static function get_root_css() {
		$css = ':root{';

		$css .= self::get_css_vars();
		$css .= self::get_fallback_font();

		/**
		 * We already have the style in customizer from add_customize_vars_tag method, no need to add it again.
		 * We do need it on frontend.
		 */
		if ( ! is_customize_preview() ) {
			$custom_colors = self::get_global_custom_colors();
			foreach ($custom_colors as $slug => $color) {
				$css .= '--' . $slug . ':' . $color . ';';
			}
		}

		$css .= '}';

		$css .= apply_filters( 'neve_after_css_root', $css );

		return self::minify_css( $css );
	}

	/**
	 * Get the fallback font.
	 *
	 * @return string
	 */
	public static function get_fallback_font() {
		$fallback = get_theme_mod( 'neve_fallback_font_family', 'Arial, Helvetica, sans-serif' );

		return '--nv-fallback-ff:' . $fallback . ';';
	}

	/**
	 * Get color values of the custom global colors
	 *
	 * @return string[] colors values HEX, RGB etc.
	 */
	private static function get_global_custom_colors() {
		$colors = [];

		foreach( Mods::get( Config::MODS_GLOBAL_CUSTOM_COLORS, [] ) as $slug=>$args ) {
			$colors[$slug] = $args['val'];
		}

		return $colors;
	}

	/**
	 * Returns CSS vars style.
	 *
	 * @return string
	 */
	private static function get_css_vars() {
		$global_colors = get_theme_mod( 'neve_global_colors', neve_get_global_colors_default( true ) );

		if ( empty( $global_colors ) ) {
			return '';
		}

		if ( ! isset( $global_colors[ 'activePalette' ] ) ) {
			return '';
		}

		$active = $global_colors[ 'activePalette' ];

		if ( ! isset( $global_colors[ 'palettes' ][ $active ] ) ) {
			return '';
		}

		$palette = $global_colors[ 'palettes' ][ $active ];

		if ( ! isset( $palette[ 'colors' ] ) ) {
			return '';
		}

		$css = '';

		foreach ( $palette[ 'colors' ] as $slug => $color ) {
			$css .= '--' . $slug . ':' . $color . ';';
		}

		return $css;
	}
}
