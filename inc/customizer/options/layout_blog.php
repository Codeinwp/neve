<?php
/**
 * Blog layout section.
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
 * Class Layout_Blog
 *
 * @package Neve\Customizer\Options
 */
class Layout_Blog extends Base_Customizer {
	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_blog();
		$this->control_blog_layout();
		$this->control_excerpt();
		$this->control_pagination_type();
		$this->control_content_order();
		$this->control_meta_order();
		$this->control_author_avatar();
	}

	/**
	 * Add customize section
	 */
	private function section_blog() {
		$this->add_section(
			new Section(
				'neve_blog_archive_layout',
				array(
					'priority' => 35,
					'title'    => esc_html__( 'Blog / Archive', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);
	}

	/**
	 * Add blog layout controls
	 */
	private function control_blog_layout() {
		$this->add_control(
			new Control(
				'neve_blog_archive_layout',
				array(
					'default'           => 'grid',
					'sanitize_callback' => array( $this, 'sanitize_blog_layout' ),
				),
				array(
					'label'    => esc_html__( 'Blog', 'neve' ) . ' ' . esc_html__( 'Layout', 'neve' ),
					'section'  => 'neve_blog_archive_layout',
					'priority' => 25,
					'choices'  => array(
						'default'     => array(
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAPklEQVR42mNgGAXDE4RCQMDAKONahQ5WUKBs1AujXqDEC6NgtOAazTKjXhgtuEbBaME1mutHvTBacI0C4gEAenW95O4Ccg4AAAAASUVORK5CYII=',
						),
						'alternative' => array(
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqAgMAAAAjP0ATAAAACVBMVEX///8+yP/V1dXG9YqxAAAAS0lEQVRYw2NgGAXDE4RCQMDAKONahQ5WUKBs1AujXqDEC6NgiANRSDyH0EwZRvJZ1UCBslEvjHqBZl4YBYMUjNb1o14Y9cIoGH4AALJWvPSk+QsLAAAAAElFTkSuQmCC',
						),
						'grid'        => array(
							'url' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAMAAABpj1iyAAAACVBMVEUAyv/V1dX////o4eoDAAAAfUlEQVR42u3ZoQ0AMAgAQej+Q3cDCI6QQyNOvKGNt3KwsLCwsLB2sKKc4V6/iIWFhYWFhYWFhXWN5cQ4xcpyhos9K8tZytKW5CWvLclLXltYWFhYWFj+Ez0kYWFhYWFhYWFhYTkxrrGyHC/N2pK85LUleclrCwsLCwvrMOsDUDxdDThzw38AAAAASUVORK5CYII=',
						),
					),
				),
				'Neve\Customizer\Controls\Radio_Image'
			)
		);

		$this->add_control(
			new Control(
				'neve_grid_layout',
				array(
					'sanitize_callback' => 'absint',
					'default'           => '1',
				),
				array(
					'priority'        => 30,
					'section'         => 'neve_blog_archive_layout',
					'label'           => esc_html__( 'Grid Layout', 'neve' ),
					'choices'         => array(
						'1' => esc_html__( '1 Column', 'neve' ),
						'2' => esc_html__( '2 Columns', 'neve' ),
						'3' => esc_html__( '3 Columns', 'neve' ),
						'4' => esc_html__( '4 Columns', 'neve' ),
					),
					'type'            => 'select',
					'active_callback' => array( $this, 'should_show_grid_cols' ),
				)
			)
		);

		$this->add_control(
			new Control(
				'neve_enable_masonry',
				array(
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				),
				array(
					'type'            => 'checkbox',
					'priority'        => 35,
					'section'         => 'neve_blog_archive_layout',
					'label'           => esc_html__( 'Enable Masonry', 'neve' ),
					'active_callback' => array( $this, 'should_show_masonry' ),
				),
				'Neve\Customizer\Controls\Checkbox'
			)
		);
	}

	/**
	 * Add excerpt control
	 */
	private function control_excerpt() {
		$this->add_control(
			new Control(
				'neve_post_excerpt_length',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'default'           => 25,
				),
				array(
					'label'      => esc_html__( 'Excerpt Length', 'neve' ),
					'section'    => 'neve_blog_archive_layout',
					'type'       => 'range-value',
					'step'       => 5,
					'input_attr' => array(
						'min'     => 5,
						'max'     => 300,
						'default' => 40,
					),
					'priority'   => 35,
				),
				'Neve\Customizer\Controls\Range'
			)
		);
	}

	/**
	 * Add infinite scroll control
	 */
	private function control_pagination_type() {
		$this->add_control(
			new Control(
				'neve_pagination_type',
				array(
					'default'           => 'number',
					'sanitize_callback' => array( $this, 'sanitize_pagination_type' ),
				),
				array(
					'label'    => esc_html__( 'Post Pagination', 'neve' ),
					'section'  => 'neve_blog_archive_layout',
					'priority' => 40,
					'type'     => 'select',
					'choices'  => array(
						'number'   => esc_html__( 'Number', 'neve' ),
						'infinite' => esc_html__( 'Infinite Scroll', 'neve' ),
					),
				)
			)
		);
	}

	/**
	 * Sanitize the container layout value
	 *
	 * @param string $value value from the control.
	 *
	 * @return bool
	 */
	public function sanitize_blog_layout( $value ) {
		$allowed_values = array( 'default', 'alternative', 'grid' );
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'default';
		}

		return esc_html( $value );
	}

	/**
	 * Sanitize the pagination type
	 *
	 * @param string $value value from the control.
	 *
	 * @return bool
	 */
	public function sanitize_pagination_type( $value ) {
		$allowed_values = array( 'number', 'infinite' );
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'number';
		}

		return esc_html( $value );
	}

	/**
	 * Add content order control.
	 */
	private function control_content_order() {
		$order_default_components = array(
			'thumbnail',
			'title-meta',
			'excerpt',
		);

		$components = array(
			'thumbnail'  => __( 'Thumbnail', 'neve' ),
			'title-meta' => __( 'Title & Meta', 'neve' ),
			'excerpt'    => __( 'Excerpt', 'neve' ),
		);

		$this->add_control(
			new Control(
				'neve_post_content_ordering',
				array(
					'sanitize_callback' => array( $this, 'sanitize_post_content_ordering' ),
					'default'           => json_encode( $order_default_components ),
				),
				array(
					'label'           => esc_html__( 'Post Content Order', 'neve' ),
					'section'         => 'neve_blog_archive_layout',
					'type'            => 'ordering',
					'components'      => $components,
					'priority'        => 45,
					'active_callback' => array( $this, 'should_show_content_ordering' ),
				),
				'Neve\Customizer\Controls\Ordering'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_thumbnail_box_shadow',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'default'           => 0,
				),
				array(
					'label'      => esc_html__( 'Thumbnail Shadow', 'neve' ),
					'section'    => 'neve_blog_archive_layout',
					'type'       => 'range-value',
					'step'       => 1,
					'input_attr' => array(
						'min'     => 0,
						'max'     => 5,
						'default' => 0,
					),
					'priority'   => 50,
				),
				'Neve\Customizer\Controls\Range'
			)
		);
	}

	/**
	 * Add meta order control.
	 */
	private function control_meta_order() {
		$order_default_components = array(
			'author',
			'date',
			'comments',
		);

		$components = apply_filters(
			'neve_meta_filter',
			array(
				'author'   => __( 'Author', 'neve' ),
				'category' => __( 'Category', 'neve' ),
				'date'     => __( 'Date', 'neve' ),
				'comments' => __( 'Comments', 'neve' ),
			)
		);

		$this->add_control(
			new Control(
				'neve_post_meta_ordering',
				array(
					'sanitize_callback' => array( $this, 'sanitize_meta_ordering' ),
					'default'           => json_encode( $order_default_components ),
				),
				array(
					'label'           => esc_html__( 'Meta Order', 'neve' ),
					'section'         => 'neve_blog_archive_layout',
					'type'            => 'ordering',
					'components'      => $components,
					'priority'        => 60,
					'active_callback' => array( $this, 'should_show_meta_order' ),
				),
				'Neve\Customizer\Controls\Ordering'
			)
		);
	}

	/**
	 * Sanitize meta order control.
	 */
	public function sanitize_meta_ordering( $value ) {
		$allowed = array(
			'author',
			'category',
			'date',
			'comments',
			'reading',
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

	/**
	 * Sanitize content order control.
	 */
	public function sanitize_post_content_ordering( $value ) {
		$allowed = array(
			'thumbnail',
			'title-meta',
			'excerpt',
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

	/**
	 * Callback to show the meta order control.
	 *
	 * @return bool
	 */
	public function should_show_meta_order() {
		$layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		if ( $layout !== 'grid' ) {
			return true;
		}

		$default       = array(
			'thumbnail',
			'title-meta',
			'excerpt',
		);
		$content_order = get_theme_mod( 'neve_post_content_ordering', json_encode( $default ) );
		$content_order = json_decode( $content_order, true );
		if ( ! in_array( 'title-meta', $content_order, true ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Callback for post content ordering control.
	 *
	 * @return bool
	 */
	public function should_show_content_ordering() {
		$layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		if ( $layout !== 'grid' ) {
			return false;
		}

		return true;
	}

	/**
	 * Callback to show grid columns control.
	 *
	 * @return bool
	 */
	public function should_show_grid_cols() {
		$blog_layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		if ( $blog_layout !== 'grid' ) {
			return false;
		}

		return true;
	}

	/**
	 * Callback to show masonry control.
	 *
	 * @return bool
	 */
	public function should_show_masonry() {
		$blog_layout = get_theme_mod( 'neve_blog_archive_layout', 'grid' );
		$columns     = (int) get_theme_mod( 'neve_grid_layout', 1 );
		if ( $blog_layout !== 'grid' ) {
			return false;
		}
		if ( $columns === 1 ) {
			return false;
		}

		return true;
	}

	/**
	 * Author avatar options
	 */
	private function control_author_avatar() {
		$this->add_control(
			new Control(
				'neve_author_avatar_options',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Author Avatar', 'neve' ),
					'section'          => 'neve_blog_archive_layout',
					'priority'         => 70,
					'class'            => 'advanced-sidebar-accordion',
					'accordion'        => false,
					'controls_to_wrap' => 2,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_author_avatar',
				array(
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				),
				array(
					'label'    => esc_html__( 'Show Author Avatar', 'neve' ),
					'section'  => 'neve_blog_archive_layout',
					'type'     => 'checkbox',
					'priority' => 75,
				),
				'Neve\Customizer\Controls\Checkbox'
			)
		);
	}
}
