<?php
/**
 * Default settings traits, shared with other classes.
 *
 * @package Neve\Customizer\Defaults
 */

namespace Neve\Customizer\Defaults;

use Neve\Core\Migration_Flags;

/**
 * Trait Layout
 *
 * @package Neve\Customizer\Defaults
 */
trait Layout {
	/**
	 * Get the sidebar layout alignment
	 *
	 * @param string $control_id the control id.
	 *
	 * @return string
	 */
	private function sidebar_layout_alignment_default( $control_id ) {
		$full_width = [
			'neve_blog_archive_sidebar_layout',
			'neve_other_pages_sidebar_layout',
			'neve_single_product_sidebar_layout',
		];
		$full_width = apply_filters( 'neve_sidebar_layout_alignment_defaults', $full_width );
		if ( in_array( $control_id, $full_width, true ) ) {
			return 'full-width';
		}

		return $this->get_v4_defaults( $control_id, 'right' );
	}

	/**
	 * Get the sidebar layout width.
	 *
	 * @param string $control_id the control id.
	 *
	 * @return int
	 */
	private function sidebar_layout_width_default( $control_id ) {
		$full_width = [
			'neve_blog_archive_content_width',
			'neve_other_pages_content_width',
			'neve_single_product_content_width',
		];
		$full_width = apply_filters( 'neve_sidebar_full_width_defaults', $full_width );
		if ( in_array( $control_id, $full_width, true ) ) {
			return 100;
		}

		// 70 is default on both new & old.
		return 70;
	}

	/**
	 * Get grid colum default.
	 *
	 * @return string
	 */
	private function grid_columns_default() {
		return '{"desktop":3,"tablet":2,"mobile":1}';
	}

	/**
	 * Check if the shop sidebar is off-canvas.
	 *
	 * @return bool
	 */
	private function shop_sidebar_is_off_canvas() {
		if ( ! is_active_sidebar( 'shop-sidebar' ) ) {
			return false;
		}

		$body_classes = apply_filters( 'body_class', [], [] ); // @see https://developer.wordpress.org/reference/hooks/body_class/
		return is_array( $body_classes ) && in_array( 'neve-off-canvas', $body_classes );
	}

	/**
	 * Get meta default data
	 *
	 * @deprecated 3.4.5 Use neve_get_default_meta_value( $field, $default ) instead.
	 *
	 * @return array
	 */
	public static function get_meta_default_data( $field, $default ) {
		return neve_get_default_meta_value( $field, $default );
	}

	/**
	 * Get default values for content vertical spacing.
	 *
	 * @return array
	 */
	public function content_vspacing_default() {
		return [
			'mobile'       => [
				'top'    => 0,
				'bottom' => 0,
			],
			'tablet'       => [
				'top'    => 0,
				'bottom' => 0,
			],
			'desktop'      => [
				'top'    => 0,
				'bottom' => 0,
			],
			'mobile-unit'  => 'px',
			'tablet-unit'  => 'px',
			'desktop-unit' => 'px',
		];
	}

	/**
	 * Get defaults for users after v4.0.0
	 *
	 * @param string $id the control id.
	 * @param mixed  $old_default the old default value.
	 *
	 * @since 4.0.0
	 * @return mixed
	 */
	public function get_v4_defaults( $id, $old_default = false ) {
		if ( ! Migration_Flags::is_new_user_after_v4() ) {
			return $old_default;
		}

		$new_defaults = [
			'neve_blog_items_border_radius'          => 8,
			'neve_blog_content_padding'              => [
				'mobile'       => [
					'top'    => 25,
					'right'  => 25,
					'bottom' => 25,
					'left'   => 25,
				],
				'tablet'       => [
					'top'    => 25,
					'right'  => 25,
					'bottom' => 25,
					'left'   => 25,
				],
				'desktop'      => [
					'top'    => 25,
					'right'  => 25,
					'bottom' => 25,
					'left'   => 25,
				],
				'mobile-unit'  => 'px',
				'tablet-unit'  => 'px',
				'desktop-unit' => 'px',
			],
			'neve_enable_card_style'                 => true,
			'neve_blog_grid_card_bg_color'           => 'var(--nv-site-bg)',
			'neve_blog_grid_text_color'              => 'var(--nv-text-color)',
			'neve_blog_card_shadow'                  => 0.5,
			'neve_blog_archive_aspect_ratio'         => '4-3',
			'neve_post_excerpt_length'               => 35,
			'neve_layout_single_post_elements_order' => [
				'title-meta',
				'content',
				'tags',
				'comments',
			],
			'neve_single_post_sidebar_layout'        => 'full-width',
			'neve_archive_hide_title'                => true,
		];

		if ( ! isset( $new_defaults[ $id ] ) ) {
			return $old_default;
		}

		return $new_defaults[ $id ];
	}

	/**
	 * Get the blog content padding default.
	 *
	 * @return array
	 */
	public function blog_archive_card_padding_default() {
		return [
			'mobile'       => [
				'top'    => '',
				'right'  => '',
				'bottom' => '',
				'left'   => '',
			],
			'tablet'       => [
				'top'    => '',
				'right'  => '',
				'bottom' => '',
				'left'   => '',
			],
			'desktop'      => [
				'top'    => '',
				'right'  => '',
				'bottom' => '',
				'left'   => '',
			],
			'mobile-unit'  => 'px',
			'tablet-unit'  => 'px',
			'desktop-unit' => 'px',
		];
	}
}
