<?php
/**
 * Patterns Compatibility.
 *
 * @package Patterns.php
 */

namespace Neve\Compatibility;

/**
 * Class Patterns
 *
 * @package Neve\Compatibility
 */
class Patterns {
	/**
	 * Define list of the patterns to load.
	 *
	 * @var string[] Patterns list.
	 */
	private $patterns = [
		'dark-header-centered-content',
		'two-columns-image-text',
		'three-columns-images-text',
		'three-columns-images-texts-content',
		'four-columns-team-members',
		'two-columns-centered-content',
		'two-columns-with-text',
		'testimonials-columns',
		'gallery-grid-buttons',
		'gallery-title-buttons',
		'light-header-left-aligned-content',
		'homepage-business',
		'homepage-simple',
	];

	/**
	 * Register patterns bootstrap hook.
	 */
	public function init() {
		add_action( 'init', [ $this, 'define_patterns' ] );
	}

	/**
	 * Load patterns.
	 */
	public function define_patterns() {
		if ( ! function_exists( 'register_block_pattern' ) ) {
			return;
		}

		// phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_pattern_category
		register_block_pattern_category( 'neve', [ 'label' => __( 'Neve', 'neve' ) ] );

		foreach ( $this->patterns as $pattern ) {
			$pattern_args = neve_require_array( __DIR__ . '/block-patterns/' . $pattern . '.php' );

			// a pattern file that is missing or malformed skips that pattern
			// rather than taking down the whole init hook
			if ( empty( $pattern_args ) ) {
				continue;
			}

			// group every bundled pattern under one Neve category in the inserter
			$pattern_args['categories'][] = 'neve';

			register_block_pattern( 'neve/' . $pattern, $pattern_args );
		}
	}

}
