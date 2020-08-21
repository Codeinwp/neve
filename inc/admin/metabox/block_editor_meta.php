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
					'default' => 'default',
				],
			],
			[
				'id'       => 'neve_meta_container',
				'type'     => 'button-group',
				'settings' => [
					'default' => 'default',
				],
			],
			[
				'id'       => 'neve_meta_enable_content_width',
				'type'     => 'checkbox',
				'settings' => [
					'default' => ( Main::is_new_page() || Main::is_checkout() ) ? 'on' : 'off',
				],
			],
			[
				'id'       => 'neve_meta_content_width',
				'type'     => 'range',
				'settings' => [
					'default' => ( Main::is_new_page() || Main::is_checkout() ) ? 100 : 70,
				],
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
					'default' => 'left',
				],
			],
			[
				'id'       => 'neve_meta_author_avatar',
				'type'     => 'checkbox',
				'settings' => [
					'default' => 'on',
				],
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
				'id'       => 'neve_post_elements_order',
				'type'     => 'sortable-list',
				'settings' => [
					'default' => $this->get_post_elements_default(),
				],
			],
			[
				'id'       => 'neve_meta_disable_header',
				'type'     => 'checkbox',
				'settings' => [
					'default' => 'off',
				],
			],
			[
				'id'       => 'neve_meta_disable_footer',
				'type'     => 'checkbox',
				'settings' => [
					'default' => 'off',
				],
			],
			[
				'id'       => 'neve_meta_disable_title',
				'type'     => 'checkbox',
				'settings' => [
					'default' => 'off',
				],
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

		$order         = [];
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
				$order[] = 'title';
				$order[] = 'meta';
			} else {
				$order[] = $element;
			}
		}

		return wp_json_encode( $order );
	}
}
