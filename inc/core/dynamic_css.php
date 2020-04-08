<?php


namespace Neve\Core;


use Neve\Core\Styles\Generator;

class Dynamic_Css {
	const HANDLE = 'neve-style';
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
		$this->generator = new Generator();
	}

	/**
	 * Load frontend style.
	 */
	public function enqueue() {
		$is_for_gutenberg = ( current_action() === self::EDITOR_ACTION );


		$style            = apply_filters( 'neve_dynamic_style_output', $this->generator->generate( false, $is_for_gutenberg ) );

		$style            = preg_replace( '/\s+/', ' ', $style );

		wp_add_inline_style( self::HANDLE, $style );
	}

}
