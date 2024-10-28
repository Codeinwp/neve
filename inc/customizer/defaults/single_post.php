<?php
/**
 * Default settings traits, shared with other classes.
 *
 * @package Neve\Customizer\Defaults
 */

namespace Neve\Customizer\Defaults;

use Neve\Core\Settings\Config;
use Neve\Customizer\Options\Layout_Single_Post;

/**
 * Trait Single_Post_Defaults
 *
 * @package Neve\Customizer\Defaults
 */
trait Single_Post {

	/**
	 * Get default values for padding controls.
	 *
	 * @return array
	 */
	public function padding_default( $param = '' ) {
		$map = [
			'mobile'       => [
				'top'    => 20,
				'right'  => 20,
				'bottom' => 20,
				'left'   => 20,
			],
			'tablet'       => [
				'top'    => 30,
				'right'  => 30,
				'bottom' => 30,
				'left'   => 30,
			],
			'desktop'      => [
				'top'    => 40,
				'right'  => 40,
				'bottom' => 40,
				'left'   => 40,
			],
			'mobile-unit'  => 'px',
			'tablet-unit'  => 'px',
			'desktop-unit' => 'px',
		];

		if ( $param === 'cover' ) {
			$map['mobile']['top']    = 40;
			$map['mobile']['right']  = 15;
			$map['mobile']['bottom'] = 40;
			$map['mobile']['left']   = 15;

			$map['tablet']['top']    = 60;
			$map['tablet']['right']  = 30;
			$map['tablet']['bottom'] = 60;
			$map['tablet']['left']   = 30;


			$map['desktop']['top']    = 60;
			$map['desktop']['right']  = 40;
			$map['desktop']['bottom'] = 60;
			$map['desktop']['left']   = 40;
		}

		return $map;
	}

	/**
	 * Get the default value for title alignment.
	 *
	 * @return array
	 */
	public static function post_title_alignment() {
		$default_position = is_rtl() ? 'right' : 'left';
		return [
			'mobile'  => $default_position,
			'tablet'  => $default_position,
			'desktop' => $default_position,
		];
	}

	/**
	 * Get default values for ordering control
	 *
	 * @return array
	 */
	public function post_ordering() {
		$default_components = [
			'title-meta',
			'thumbnail',
			'content',
			'tags',
			'comments',
		];

		if ( Layout_Single_Post::is_cover_layout() ) {
			$default_components = [
				'content',
				'tags',
				'comments',
			];
		}

		return apply_filters( 'neve_single_post_elements_default_order', $default_components );
	}

	/**
	 * Return the custom post type context.
	 *
	 * @since 3.1.0
	 *
	 * @param string[] $allowed The default context to be allowed.
	 *
	 * @return array
	 */
	public function get_cpt_context( $allowed = [ 'post', 'page' ] ) {
		/**
		 * Filters the list of available post types to use as context for custom post type meta settings.
		 *
		 * @param string[] $allowed_context An array of allowed post types for context. E.g. [ 'post', 'page' ].
		 * @param int $priority The priority of the filter. Default 10.
		 * @param int $accepted_args The number of arguments the filter accepts. Default 1.
		 *
		 * @since 3.1.0
		 */
		$allowed_context = apply_filters( 'neve_allowed_custom_post_types', $allowed, 10, 1 );
		$context         = get_post_type();
		$context         = apply_filters( 'neve_context_filter', $context, 10, 1 );

		return [ $context, $allowed_context ];
	}


	/**
	 * Check the context for the single post is valid.
	 *
	 * @since 3.1.0
	 *
	 * @param string $context The post type context.
	 *
	 * @return boolean
	 */
	public function is_valid_context( $context ) {
		return is_singular( $context ) || is_single();
	}

	/**
	 * Checks that a dynamic meta is allowed in the provided context.
	 *
	 * @since 3.1.0
	 *
	 * @param string   $context The context to get the meta for.
	 * @param string[] $allowed_context The allowed contexts to check against.
	 *
	 * @return bool
	 */
	private function is_meta_context_allowed( $context, $allowed_context ) {
		if ( empty( $context ) ) {
			return false;
		}

		if ( ! in_array( $context, $allowed_context, true ) || ! $this->is_valid_context( $context ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Return the sidebar content width meta based on context.
	 *
	 * @since 3.1.0
	 *
	 * @param string   $context            The context to get the meta for.
	 * @param string[] $allowed_context    The allowed contexts to check against.
	 *
	 * @return string
	 */
	public function get_sidebar_content_width_meta( $context, $allowed_context = [ 'post' ] ) {
		if ( ! $this->is_meta_context_allowed( $context, $allowed_context ) ) {
			return '';
		}

		return 'neve_single_' . $context . '_' . Config::MODS_CONTENT_WIDTH;
	}

	/**
	 * Return the meta to use as context.
	 *
	 * @since 3.1.0
	 *
	 * @param string $context            The context to get the meta for.
	 * @param string $meta               The meta key to get the final meta for.
	 * @param array  $allowed_context    The allowed contexts to check against.
	 *
	 * @return string
	 */
	public function get_cover_meta( $context, $meta, $allowed_context = [ 'post', 'page' ] ) {
		if ( ! $this->is_meta_context_allowed( $context, $allowed_context ) ) {
			return '';
		}

		$allowed_meta = [
			Config::MODS_COVER_HEIGHT,
			Config::MODS_COVER_PADDING,
			Config::MODS_COVER_BACKGROUND_COLOR,
			Config::MODS_COVER_OVERLAY_OPACITY,
			Config::MODS_COVER_TEXT_COLOR,
			Config::MODS_COVER_BLEND_MODE,
			Config::MODS_COVER_TITLE_ALIGNMENT,
			Config::MODS_COVER_TITLE_POSITION,
			Config::MODS_COVER_BOXED_TITLE_PADDING,
			Config::MODS_COVER_BOXED_TITLE_BACKGROUND,
		];
		if ( ! in_array( $meta, $allowed_meta, true ) ) {
			return '';
		}

		return 'neve_' . $context . '_' . $meta;
	}

	/**
	 * Returns default values for "neve_single_post_meta_fields" theme mod.
	 *
	 * @return string
	 */
	public static function get_default_single_post_meta_fields() {
		/**
		 * We replaced the old ordering control neve_post_meta_ordering with a repeater control named neve_single_post_meta_fields.
		 * Because of that, we need to add some transformations:
		 */

		$default = wp_json_encode( [ 'author', 'date', 'comments' ] );

		// Take the old control value and bring it to a form that can be used in a repeater.
		$default_value = neve_get_default_meta_value( 'neve_post_meta_ordering', $default );

		// We need to get the value of the meta on blogs.
		return get_theme_mod( 'neve_blog_post_meta_fields', wp_json_encode( $default_value ) );
	}
}
