<?php
/**
 * Single post layout section.
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      20/08/2018
 *
 * @package Neve\Customizer\Options
 */

namespace Neve\Customizer\Options;

use Neve\Customizer\Base_Customizer;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Layout_Single_Post
 *
 * @package Neve\Customizer\Options
 */
class Layout_Single_Post extends Base_Customizer {
	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_single_post();
		$this->control_content_order();
	}

	/**
	 * Add customize section
	 */
	private function section_single_post() {
		$this->add_section(
			new Section(
				'neve_single_post_layout',
				array(
					'priority' => 40,
					'title'    => esc_html__( 'Single Post', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);
	}

	/**
	 * Add content order control.
	 */
	private function control_content_order() {
		$order_default_components = apply_filters(
			'neve_single_post_elements_default_order',
			array(
				'title-meta',
				'thumbnail',
				'content',
				'tags',
				'comments',
			)
		);

		$components = apply_filters(
			'neve_single_post_elements',
			array(
				'title-meta'      => __( 'Title & Meta', 'neve' ),
				'thumbnail'       => __( 'Thumbnail', 'neve' ),
				'content'         => __( 'Content', 'neve' ),
				'tags'            => __( 'Tags', 'neve' ),
				'post-navigation' => __( 'Post navigation', 'neve' ),
				'comments'        => __( 'Comments', 'neve' ),
			)
		);

		$this->add_control(
			new Control(
				'neve_layout_single_post_elements_order',
				array(
					'sanitize_callback' => array( $this, 'sanitize_post_elements_ordering' ),
					'default'           => wp_json_encode( $order_default_components ),
				),
				array(
					'label'      => esc_html__( 'Elements Order', 'neve' ),
					'section'    => 'neve_single_post_layout',
					'type'       => 'ordering',
					'components' => $components,
					'priority'   => 10,
				),
				'Neve\Customizer\Controls\Ordering'
			)
		);
	}

	/**
	 * Sanitize content order control.
	 */
	public function sanitize_post_elements_ordering( $value ) {
		$allowed = array(
			'thumbnail',
			'title-meta',
			'content',
			'tags',
			'post-navigation',
			'comments',
			'author-biography',
			'related-posts',
			'sharing-icons',
		);

		if ( empty( $value ) ) {
			return $allowed;
		}

		$decoded = json_decode( $value, true );

		foreach ( $decoded as $val ) {
			if ( ! in_array( $val, $allowed, true ) ) {
				return $allowed;
			}
		}

		return $value;
	}
}
