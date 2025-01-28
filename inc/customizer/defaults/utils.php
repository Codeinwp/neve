<?php
/**
 * Default settings traits, shared with other classes.
 *
 * @package Neve\Customizer\Defaults
 */

namespace Neve\Customizer\Defaults;

/**
 * Trait Utils
 *
 * @package Neve\Customizer\Defaults
 */
trait Utils {
	/**
	 * Get the sidebar layout choices.
	 *
	 * @param string $control_id Name of the control.
	 *
	 * @return array
	 */
	final public function sidebar_layout_choices( $control_id ) {
		$options = apply_filters(
			'neve_sidebar_layout_choices',
			array(
				'full-width' => array(
					'name' => __( 'Full Width', 'neve' ),
					'url'  => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAQMAAABknzrDAAAABlBMVEX////V1dXUdjOkAAAAPUlEQVRIx2NgGAUkAcb////Y/+d/+P8AdcQoc8vhH/X/5P+j2kG+GA3CCgrwi43aMWrHqB2jdowEO4YpAACyKSE0IzIuBgAAAABJRU5ErkJggg==',
				),
				'left'       => array(
					'name' => __( 'Left', 'neve' ),
					'url'  => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWElEQVR42mNgGAXDE4RCQMDAKONaBQINWqtWrWBatQDIaxg8ygYqQIAOYwC6bwHUmYNH2eBPSMhgBQXKRr0w6oVRL4x6YdQLo14Y9cKoF0a9QCO3jYLhBADvmFlNY69qsQAAAABJRU5ErkJggg==',
				),
				'right'      => array(
					'name' => __( 'Right', 'neve' ),
					'url'  => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAWUlEQVR42mNgGAUjB4iGgkEIzZStAoEVTECiQWsVkLdiECkboAABOmwBF9BtUGcOImUDEiCkJCQU0ECBslEvjHph1AujXhj1wqgXRr0w6oVRLwyEF0bBUAUAz/FTNXm+R/MAAAAASUVORK5CYII=',
				),
			),
			$control_id
		);

		foreach ( $options as $slug => $args ) {
			if ( ! isset( $args['name'] ) ) {
				$options[ $slug ]['name'] = ucwords( str_replace( '-', ' ', $slug ) );
			}
		}

		return $options;
	}

	/**
	 * Get the description for sidebar position.
	 *
	 * @param string $control_id Control id.
	 *
	 * @return string
	 */
	final public function get_sidebar_control_description( $control_id ) {
		if ( $control_id !== 'neve_shop_archive_sidebar_layout' ) {
			return '';
		}

		$shop_id = get_option( 'woocommerce_shop_page_id' );
		if ( empty( $shop_id ) ) {
			return '';
		}

		$meta = get_post_meta( $shop_id, 'neve_meta_sidebar', true );
		if ( empty( $meta ) || $meta === 'default' ) {
			return '';
		}

		/* translators: %s is Notice text */
		$template = '<p class="notice notice-info">%s</p>';

		return sprintf(
			$template,
			sprintf(
			/* translators: %s is edit page link */
				esc_html__( 'Note: It seems that the shop page has an individual sidebar layout already set. To be able to control the layout from here, %s your page and set the sidebar to "Inherit".', 'neve' ),
				sprintf(
				/* translators: %s is edit label */
					'<a target="_blank" href="' . get_edit_post_link( $shop_id ) . '">%s</a>',
					__( 'edit', 'neve' )
				)
			)
		);
	}

	/**
	 * Sanitize the sidebar layout value
	 *
	 * @param string $value value from the control.
	 *
	 * @return string
	 */
	public function sanitize_sidebar_layout( $value ) {
		$allowed_values = array( 'left', 'right', 'full-width', 'off-canvas' );
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'right';
		}

		return esc_html( $value );
	}
}
