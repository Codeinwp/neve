<?php
/**
 * Page settings metabox.
 *
 * @package Neve
 */

namespace Neve\Admin\Metabox;

/**
 * Class Block_Editor_Meta
 *
 * @package Neve\Admin\Metabox
 */
class Block_Editor_Meta extends Controls_Base {
	/**
	 * Add controls.
	 */
	public function add_controls() {
		$this->add_layout_controls();
		$this->add_page_title_controls();
		$this->add_elements_controls();
	}

	/**
	 * Add layout controls.
	 */
	private function add_layout_controls() {
		$controls = [
			[
				'id'       => 'neve_meta_sidebar',
				'type'     => 'radio',
				'settings' => [
					'choices'         => [
						'default'    => __( 'Inherit', 'neve' ),
						'full-width' => __( 'None', 'neve' ),
						'left'       => __( 'Left', 'neve' ),
						'right'      => __( 'Right', 'neve' ),
					],
					'icons'           => [
						'default'    => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABXCAYAAAC9UeOHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN6SURBVHgB7ZrfThpREMZn1SgUWiwkFi6gtol3mnjhi/QJmj5C36SP1gsvTGir0Rb/Baop20UL3fJtugaH3QXKzlLj90s2G5Rlc37MmTNnFqfreW/9weCDiLMujxjHkSPx/TdO13UPfV82hUDKxyXKuMf6kpB7UIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgpRUIiCQhQrsgAGg4F0Om3peZ54wwOvwerqqiwvL8uzUkmKxafB66zJVEi325Xzs9PgHMXt7W1wvr6+Ds7lclleVGuZinF+dF1fjEEEQMTl5aX8C9VqNRBjDX4jYi4E3/rR4ZdgasxDsViUzVevgyllBYSYJlVExudPzbllAEwzfFaYb6wwFdL69vUuL6QBxGLqWWImBKtIp9OZ6Zq1tTVZWUnO88hDcUk5DcyEnJ+dyazs7OzI9vb2xPdZRonJsovoSJoqiIJCoTD2dyy3GxsbsrW1Jc1mM/Z6RAgOJNq0MRHyPWGq1Ot1aTQakgSkXFxc3NUjUUD6gxESt6ogR0BGu92W09PxsK/ValKpVOTk5CRRBnCN8kjqQkZLcU34jUJG1IARGZBxfHwsk8CUxH3SrktSF5JUJ4QluOu6kf8fzRvIMyjdIe7m5ib2XmkLyXS3iwFggP1+f+J7MVAk19JwoxdHmjVOSKabOyRKHCHhShMVMblcLjjHRQewKONTj5Bpd6aQgZoDURAFkivo9Xoy771mIfUICXsaSbkklBFWpXt7e2PvwYqEaIqLkHw+bxIhJlMGDZ6kWmQ0hyCnRMmDiKTVJjcUYoGJkHK5kigEg93f35fd3d0gSg4ODmRWqkb9ERMhqDdwJG3CkEixzE7azEXxfLgcW3XRzJbdaTpcyBGtVktmpWrYPTMTggixaPtZ91hNCzP0QlFtpgVk4DMtMa9U642XqURKFjJAJpUqBoIwR2Nn1nIb10GqxVY/ikweQ4yCtuI0YgpDAaXSejDlLDvto2TyGCIO7+9TO8/7eVeYYeD5/JMgGhbx1G6hQv5HzJ/LPEQoREEhCgpRUIiCQhQUoqAQBYUoKERBIQoKUVCIgkIUFKKgEAWFKChEQSEKClFQiIJCFBSioBAFhSgoREEhCgi5EhLg+3K15P/23/viHMkjBzL6v/x3fwDAqWHdPm8hRQAAAABJRU5ErkJggg==',
						'full-width' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABYCAYAAACjxTpsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFISURBVHgB7dWxSsNgGEbht6UEgnGpg3HrUGf1DrxTL0yFutXBToFAsK3WoYtnMIVgW84zZwiHl/8btW07i/bKslxMPtfrp2T0GP1ot9vZOPrFKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKGCSnpqmyevLc07JRVVlPr/98/cuBfReSvVd/e7+IefMpQCjAKMAowBPMnApwJMMXAowCjAKMArwJAOXAjzJwKUAowCjAKMATzJwKcCTDFwKMAowCuj9pnRdl9XqI0OYTq9SFEX+20FR3pfLDKGqLk8zyu6nr+s6QziGIDsHRanrm5wzH1pgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBRgFGAUYBQw2WzyNhpnEe19AbO4NutQ2DJ9AAAAAElFTkSuQmCC',
						'left'       => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABXCAYAAABSk4i5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFDSURBVHgB7dUtT8NQFIfxM0ouYkWwUBLMMEMAiu/v+A6AQLH5+jVr9qL3iCZNTrPl+emrnuSe/+zrb7uPET6fd3FN7uv57CZ0xijAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjgNhL8/nzH1B6bJprmadDblChd18XU+r4f/DYlytv7R0ytqqrBb1OilFLiknhogVGAUYCTDJxk4CQDJxl4aIFRgFGAkwycZOAkAycZeGiBUYBRgJMMnGTgJAMnGXhogVFAyvdp2zbGOH2/uq4jS0qUzfo/xpgfg6xWr5ElJcrDYhFjlHIXmVKiLJcvcUk8tMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAowCjAKMAo4ABQ0jKnFSWXOgAAAABJRU5ErkJggg==',
						'right'      => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABXCAYAAAC5pDO6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgB7dlBSsNQFEbhWyORSCDYFajYgboH9z9zDerAOrMYCQSCmo498MqjCW3PB9nAIbn/IIv489V+/8QReX4/jxxPq4vFWehfhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgHJ/zLbto2315eY2/XNbVRVFfu200/evu9jbsMwxBSSw9R1HfcPjzG3oihiCju9MWVZxqnw+ALDAMMA5xo418C5Bs418PgCwwDDAOcaONfAuQbONfD4AsMAwwDnGjjXwLkGzjXw+ALDgORPqeu67ZOjaZrJbkSu5DCbzWd8rNeRo7xbbY/4IUgOU1WXcbVcRo5DeVtGyWHGz2B8ToXHFxgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgG/AIdeUYQlOqQ4AAAAABJRU5ErkJggg==',
					],
					'default'         => 'default',
					'label'           => __( 'Sidebar', 'neve' ),
					'not_in_template' => 'elementor_header_footer',
				],
				'priority' => 10,
			],
			[
				'id'       => 'neve_meta_container',
				'type'     => 'button-group',
				'settings' => [
					'choices'         => [
						'default'    => __( 'Default', 'neve' ),
						'contained'  => __( 'Contained', 'neve' ),
						'full-width' => __( 'Full Width', 'neve' ),
					],
					'default'         => 'default',
					'label'           => __( 'Container', 'neve' ),
					'not_in_template' => 'elementor_header_footer',
				],
				'priority' => 15,
			],
			[
				'id'       => 'neve_meta_enable_content_width',
				'type'     => 'checkbox',
				'settings' => [
					'default'         => ( Main::is_new_page() || Main::is_checkout() ) ? 'on' : 'off',
					'input_label'     => __( 'Custom Content Width (%)', 'neve' ),
					'not_in_template' => 'elementor_header_footer',
				],
				'priority' => 20,
			],
			[
				'id'       => 'neve_meta_content_width',
				'type'     => 'range',
				'settings' => [
					'default'         => ( Main::is_new_page() || Main::is_checkout() ) ? 100 : 70,
					'min'             => 0,
					'max'             => 100,
					'hidden'          => Main::hide_content_width(),
					'depends_on'      => 'neve_meta_enable_content_width',
					'not_in_template' => 'elementor_header_footer',
				],
				'priority' => 25,
			],
		];
		$controls = json_decode( wp_json_encode( $controls ) );
		foreach ( $controls as $control ) {
			$this->add_control( $control );
		}
	}

	/**
	 * Add page title controls.
	 */
	private function add_page_title_controls() {
		$controls = [
			[
				'id'       => 'neve_meta_title_alignment',
				'type'     => 'button-group',
				'settings' => [
					'choices'         => [
						'left'   => __( 'Left', 'neve' ),
						'center' => __( 'Center', 'neve' ),
						'right'  => __( 'Right', 'neve' ),
					],
					'has_icons'       => true,
					'default'         => 'left',
					'label'           => __( 'Title Alignment', 'neve' ),
					'not_in_template' => 'elementor_header_footer',
				],
				'priority' => 15,
			],
			[
				'id'        => 'neve_meta_author_avatar',
				'post_type' => 'post',
				'type'      => 'checkbox',
				'settings'  => [
					'default'         => 'on',
					'input_label'     => __( 'Author Avatar', 'neve' ),
					'depends_on'      => 'neve_post_elements_order',
					'not_in_template' => 'elementor_header_footer',
				],
				'priority'  => 20,
			],
		];
		$controls = apply_filters( 'neve_filter_meta_title_controls', $controls );
		$controls = json_decode( wp_json_encode( $controls ) );
		foreach ( $controls as $control ) {
			$this->add_control( $control );
		}
	}

	/**
	 * Add elements controls
	 */
	private function add_elements_controls() {
		$controls = [
			[
				'id'        => 'neve_post_elements_order',
				'type'      => 'sortable-list',
				'post_type' => 'post',
				'settings'  => [
					'default'         => $this->get_post_elements_default(),
					'elements'        => apply_filters(
						'neve_post_elements_meta_control',
						[
							'title'           => __( 'Post Title', 'neve' ),
							'meta'            => __( 'Post Meta', 'neve' ),
							'thumbnail'       => __( 'Featured Image', 'neve' ),
							'content'         => __( 'Content', 'neve' ),
							'tags'            => __( 'Tags', 'neve' ),
							'comments'        => __( 'Comments', 'neve' ),
							'post-navigation' => __( 'Post Navigation', 'neve' ),
						]
					),
					'not_in_template' => 'elementor_header_footer',
				],
				'priority'  => 10,
			],
			[
				'id'       => 'neve_meta_disable_header',
				'type'     => 'checkbox',
				'settings' => [
					'default'     => 'off',
					'input_label' => __( 'Disable Header', 'neve' ),
				],
				'priority' => 10,
			],
			[
				'id'       => 'neve_meta_disable_footer',
				'type'     => 'checkbox',
				'settings' => [
					'default'     => 'off',
					'input_label' => __( 'Disable Footer', 'neve' ),
				],
				'priority' => 20,
			],
			[
				'id'        => 'neve_meta_disable_title',
				'type'      => 'checkbox',
				'post_type' => 'page',
				'settings'  => [
					'default'         => 'off',
					'input_label'     => __( 'Disable Title', 'neve' ),
					'not_in_template' => 'elementor_header_footer',
				],
				'priority'  => 30,
			],
		];
		$controls = apply_filters( 'neve_filter_meta_elements_controls', $controls );
		$controls = json_decode( wp_json_encode( $controls ) );
		foreach ( $controls as $control ) {
			$this->add_control( $control );
		}
	}

	/**
	 * Get post elements default value from customizer
	 *
	 * @return string
	 */
	private function get_post_elements_default() {

		$order          = [];
		$all_components = apply_filters(
			'neve_post_all_elements_filter',
			[
				'title',
				'meta',
				'thumbnail',
				'content',
				'tags',
				'comments',
				'post-navigation',
			]
		);

		$default_order = apply_filters(
			'neve_single_post_elements_default_order',
			array(
				'title-meta',
				'thumbnail',
				'content',
				'tags',
				'comments',
			)
		);
		$content_order = get_theme_mod( 'neve_layout_single_post_elements_order', wp_json_encode( $default_order ) );
		if ( ! is_string( $content_order ) ) {
			$content_order = wp_json_encode( $default_order );
		}
		$content_order = json_decode( $content_order, true );
		foreach ( $content_order as $element ) {
			if ( $element === 'title-meta' ) {
				$order['title'] = true;
				$order['meta']  = true;
			} else {
				$order[ $element ] = true;
			}
		}

		foreach ( $all_components as $component ) {
			if ( ! array_key_exists( $component, $order ) ) {
				$order[ $component ] = false;
			}
		}

		return wp_json_encode( $order );
	}
}
