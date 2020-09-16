<?php


namespace Neve\Core;


use Neve\Core\Styles\Frontend;
use Neve\Core\Styles\Generator;
use Neve\Core\Styles\Gutenberg;

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
	}

	public function legacy_style() {
		$classes     = apply_filters( 'neve_filter_inline_style_classes', [], 'neve-generated-style' );
		$mobile_css  = '';
		$desktop_css = '';
		$tablet_css  = '';
		foreach ( $classes as $class ) {
			$object = new $class();
			$object->init();
			$mobile_css  .= $object->get_style( 'mobile' );
			$desktop_css .= $object->get_style( 'desktop' );
			$tablet_css  .= $object->get_style( 'tablet' );
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
		$is_for_gutenberg = ( current_action() === self::EDITOR_ACTION );
		if ( ! class_exists( ' Neve_Pro\Core\Generic_Style', true ) ) {
			$this->legacy_style();
		}

		$this->generator = $is_for_gutenberg ? new Gutenberg() : new Frontend();
		$_subscribers = $this->generator->get();

		$_subscribers = array_merge( $_subscribers, apply_filters( 'neve_style_subscribers', [] ) );

		$this->generator->set( $_subscribers );

		$style = apply_filters( 'neve_dynamic_style_output', $this->generator->generate(), $is_for_gutenberg ? 'gutenberg' : 'frontend' );

		$style = self::minify_css( $style );

		wp_add_inline_style( $is_for_gutenberg ? self::GUTENBERG_HANDLE : self::FRONTEND_HANDLE, $style );
	}

	/**
	 * Basic CSS minification.
	 *
	 * @param $css
	 *
	 * @return string
	 */
	public static function minify_css( $css ) {
		return preg_replace( '/\s+/', ' ', $css );
	}
}
