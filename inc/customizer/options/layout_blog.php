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
use Neve\Customizer\Defaults\Layout;
use Neve\Customizer\Types\Control;
use Neve\Customizer\Types\Section;

/**
 * Class Layout_Blog
 *
 * @package Neve\Customizer\Options
 */
class Layout_Blog extends Base_Customizer {
	use Layout;

	/**
	 * Holds the section name.
	 *
	 * @var string $section
	 */
	private $section = 'neve_blog_archive_layout';

	/**
	 * Function that should be extended to add customizer controls.
	 *
	 * @return void
	 */
	public function add_controls() {
		$this->section_blog();
		$this->add_layout_controls();
		$this->add_featured_post();
		$this->add_content_ordering_controls();
		$this->add_post_meta_controls();
		$this->add_typography_shortcut();

		add_action( 'customize_register', [ $this, 'adapt_old_pro' ], PHP_INT_MAX );
	}

	/**
	 * Adapting old pro versions to make them still usable with the old theme version.
	 */
	public function adapt_old_pro() {
		if ( ! defined( 'NEVE_PRO_VERSION' ) ) {
			return;
		}

		if ( version_compare( NEVE_PRO_VERSION, '1.2.8', '>' ) ) {
			return;
		}

		$changes = [
			'neve_posts_order'                   => [ 'priority' => 51 ],
			'neve_post_content_ordering'         => [ 'active_callback' => '__return_true' ],
			'neve_blog_ordering_content_heading' => [ 'controls_to_wrap' => 6 ],
			'neve_blog_post_meta_heading'        => [ 'controls_to_wrap' => 3 ],
			'neve_read_more_options'             => [
				'accordion' => true,
				'expanded'  => false,
				'class'     => 'read-more-options-accordion',
			],
		];

		foreach ( $changes as $control_slug => $props ) {
			foreach ( $props as $prop => $new_value ) {
				$this->change_customizer_object( 'control', $control_slug, $prop, $new_value );
			}
		}

		$this->wpc->remove_control( 'neve_metadata_options' );
	}

	/**
	 * Add customize section
	 */
	private function section_blog() {
		$this->add_section(
			new Section(
				$this->section,
				array(
					'priority' => 35,
					'title'    => esc_html__( 'Blog / Archive', 'neve' ),
					'panel'    => 'neve_layout',
				)
			)
		);
	}

	/**
	 * Add blog layout controls.
	 */
	private function add_layout_controls() {
		$this->add_control(
			new Control(
				'neve_blog_layout_heading',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Blog Layout', 'neve' ),
					'section'          => $this->section,
					'priority'         => 10,
					'class'            => 'blog-layout-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 6,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				$this->section,
				[
					'default'           => 'grid',
					'sanitize_callback' => [ $this, 'sanitize_blog_layout' ],
				],
				[
					'section'  => $this->section,
					'priority' => 11,
					'choices'  => [
						'default' => [
							'name'  => __( 'List', 'neve' ),
							'image' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAB5CAYAAACwe5bgAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AkBDC0qBiacfQAABqdJREFUeNrtXU1T40YQfT2WLS/s4kqR5UAK36jiAKdQ+/8vnOKcIIeEG6RSKZZDcIqwXmA6B0nWSOZjbI00Gqn7YooCWXp601/zZoaYmSHWuCmBQIAX4MUEeAFeTIAX4MUEeAFerAngnde8Or90wwV109+nKoFN7m8nuzwRdZrxkc0ffX8Ebh+AhBS8BCZhSXWAfvwIxIOa3qUl25t+0ZHN8F88Kfw5Z4ApgYY4xZ8cPDTwaZwAvwIAN/MmfIyuyGb4L1mRosCaQIT0BVDFh84cDIGIcHd3B4IGQ7m4/GagRBG2t7f9u5oEfoJmgKAB5RYNbdD64uLCAFx7SbwmkwmOj4/9A68JYKQsT5nodqgXH9q3f9/a2qrd90fwbMxZ0E6sbqa1xfcr/w/XjfRw3TpAKldPo6MVrsa08/Nzb4x15VqGwyGOjo7aDXzZ5vO5N8a6ahvEcdx+xpetTcF105ESRVH7gS+P7qbTSV9mFVwVv1j1OLwJXg5znfaCOCDG11pAgThvFWSvzFFNr5Ff93HxvROMHo1GbwbryO6NUu4WTLAdNVKI89bAL7/OlpWxj65hlVQyY38cxzg9Pa3G+OSiGqxVAjzTMg10honKPd6H0RAcUHnxUjY0Ho9dBVcFUgbTKelUugLfvO+fT7/0o+CyEa0+a+DfRT7sFSd+P/usah9HwKBnNTRVUgvXMVHR0OSH7ypYrQXIymtzcZu6mJaR+XU6TDZb+F974OmNF1A1i08ZYg4+WvP2OllAFdhJrrHXS4Z0XVmwMfBZmkc13oLvBSpNfb96H2zHLv2dh/XN+nIx5A14aoANr4OtvbG+bgJYFVCLJ+D2fnUMJAGxevb42RA0hZKVNAL8tyfgrzmDHVareSEB7IwZ8YCqx/6AmB/ZMzPNPIzWgYvmZPL/+UXm/9yBSXnN4TNBU53MjzZEqvyjMzv/7cK7q2mNoKnph/btWjJBU6+A78Kcaw2Vq5irDEiA91Txts7V+BI0FWsTrvT/URSJoMnHCxBBk8c6wAnwg7RaSlbgGMWTciPvMHU7Imgy7LlUvYIYTABpNxWUrm2Spb2B1trVkCYwpbKOdAEau2gUE0Mt1QvAYrHoBPDvSTzsezWpWyETfGeRLJ/hns1mwQiZ3gqulQVNOfK0bIrRkqAOWM/GXCID4zgRNLmUTTdtDgVNyF0Lce524MrHp4wnETQV7OkZuH/M8ttc+eVC0KQY2BprKFLoz1R3VUGTG74XkqvQ9EyvxaP34hTJvpMtzuPFBHgBXkyAF+DFBHgBXiwQ4LOygj1+d2sq1/8egb/npYqMdLrulSo/7E8/EMaDfjHeqkn2+AzcPmSLT7MupTI2hasCPOHzJ8Z4QN5GWEs3g0O+vrW8J5aDab9kM7jcrq6u0p/87EcGJG3dvb09/8Ani7vzJfWu5lphQJzZ9fW1dzcwmUzaAXyB+TDYX4Nq9eDgwDvwNhMZjQGf4FwD2FRcQD+dTpfZRZcXo1kBrzihO7MGkAYjVy+AV5cR9mH1n/2+kwxQxk3H6a7u09TTJj6+CZvNZsGDGscxTk5OwgK+C7qaIBn/nh6lbfaSDMUmRrVu30kbpW0XTLqTNbQggnA15VF5c3OD0IUPURRhd3c3LB9/eXnZiazGCfCZfr3uEwwYqL1H0hTjnRVQBVk2cXp0hZsQkRxVwQAUDg8PC76yq1XsxkqyJqR2HdierEpWo1/oEOj69q5Jr48Og16J8RC2W6WWr7lKK8Z7YUQXWP1GfLIAvrSFCZc+a3M3UrkWmU+6dkr2oUvcan18z7Oa13oQ9fv+LjNfWdGuHCh4TS8VqH+v0xlYLz57eDZbuIkTcLWb9ocRMKR2+JamBE5WLYP7R+CPr+aaVrc3drQHDON2+JamWhT2Pj47x5UYrkegeThLX2wtXQ2MPQeYkpXdlc9zLcWQs7OzdMg/p7/r8bGiMDDPkCLkG0tU8qmUdH7K7p3Iv3y4Tn9vFVzvvgG/f63vAY/2gJ24V55G5lwF+Iby5+CCa1OW6+MDBjWKsL+/HxbwbdDHbxqAs8/RaNR+4MtepQ36+E0Lr8xFBnms6HQ6leAq1gbg08KJOV8TtbIYbUNXo9C/LXPWFjTBPFrUAfDmiZmA6ONXmakpb9s6Ps/VNNHHG6YJUMRgIxI62fowdTVmTz80fXytwI+HwP5OcQc+p0MzKg5T45UHG/+D3gwuhMnuTh1VwdkDBVI41ZpOZprGJoYHITyV8LqOQ/adlMpVgBcT4AV4MQFegBcT4AV4MUv7H5eyq+Oq1/5lAAAAAElFTkSuQmCC',
						],
						'covers'  => [
							'name'  => __( 'Covers', 'neve' ),
							'image' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAB5CAYAAACwe5bgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7d1PTxNBGMfxp1JTLH8ExXAg8eDNd+Xr9eaNg8FEQxSpgIVSKBTccdMEaElnO535PYfvJ9lLQ8j0y3ZKuzu7rfuKobgXBgnCixBehPAihBchvAjhRQgvQngRwosQXqQd80PXt2a9gbmws27WWXn82O2d2dG5ubDdNeu+nP9z0eEP++bC5up0+PGdn/F12nHhmWpECC9CeBHCixBehPAihBchvAjhRQgvQngRwosQXoTwIoQXIbwI4UWijkA9tLNWbV3LZv/Ykmx0zPY2LZtvp/URuVSNw4fDbuHwm1fexzfROPxxddD7/Nrc6ldj2/9t2Sxjbw8ahx+N680r7+ObaBx++1W9LSr3KybM8e/WbGGnw3rLrXH4cOrCTsIT619V4S2fMMenjC9MJS7DnwzT5rl+5veH8PsP/tjCBjdWROPww5t68yrM771Lc48PUCKt2HWuy/o3KtVKNYe3W9OPex/fUy0WGGsw1YgQXoTwItHnx3v5fmarO/3mFRYmnBX40BMjfHLuRFSNDn9wYi58bNdP7qGwMMHL+D68iQvPVCNCeBHCixBehPAihBchvAjhRQgvQngRwosQXoTwIoQXIbwI4UUIL0J4kcan8LWrP9VKxj9X6olJ3sc30Tj87rrZ3mvL5vMPS7K1Wh33fGvZfPkpWooTjuh7OV1ulvG97/FNNA5/dFFvXpVaWJCKN1eRxnt8WMqYMseHRQM5z18PS0FT5vjDv2UuHsoeL9J4jw97g5fLyc4SXk2sCMGzovb48IHk6fmKKs99OPIyvk7kHMKKEBGmGhHCixBehPAiUe/BlyOz72fmwvvt6VtBhC/uvvbMhd2NuItsRIUPT6zvZA1UWHYz6zEv44u9gAVTjQjhRQgvQngRwosQXoTwIoQXIbwI4UUIL0J4EcKLEF6E8CKEFyG8SPGTVudJXZiQetLqPMtamMAeL8JJqyLs8SLF7wP16yLvVVFT7wP1/xUzsOyK3wcq95NKHV+pS/kWvw/UYGRZpd4H6qrQikHuAyXCm6sICxNE2ONFCC9CeBHCixBehPAihBchvAjhRQgvQniR8O3kJ0Nx/wAXONq4kNEpFQAAAABJRU5ErkJggg==',
						],
						'grid'    => [
							'name'  => __( 'Grid', 'neve' ),
							'image' => 'data:image/jpeg;base64,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',
						],
					],
				],
				'\Neve\Customizer\Controls\React\Radio_Image'
			)
		);

		$grid_layout_default = '{"desktop":3,"tablet":2,"mobile":1}';

		$this->add_control(
			new Control(
				'neve_grid_layout',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'default'           => $grid_layout_default,
				),
				array(
					'label'           => esc_html__( 'Columns', 'neve' ),
					'section'         => $this->section,
					'units'           => array(
						'items',
					),
					'input_attrs'     => [
						'min'        => 1,
						'max'        => 4,
						'defaultVal' => json_decode( $grid_layout_default, true ),
					],
					'priority'        => 11,
					'active_callback' => array( $this, 'is_column_layout' ),
				),
				'Neve\Customizer\Controls\React\Responsive_Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_blog_covers_text_color',
				array(
					'sanitize_callback' => 'neve_sanitize_colors',
					'default'           => '#ffffff',
					'transport'         => 'postMessage',
				),
				array(
					'label'                 => esc_html__( 'Text Color', 'neve' ),
					'section'               => $this->section,
					'priority'              => 15,
					'default'               => '#ffffff',
					'active_callback'       => function () {
						return get_theme_mod( $this->section ) === 'covers';
					},
					'live_refresh_selector' => true,
					'live_refresh_css_prop' => [
						'cssVar' => [
							'vars'     => '--color',
							'selector' => '.neve-main',
						],
					],
				),
				'Neve\Customizer\Controls\React\Color'
			)
		);

		$this->add_control(
			new Control(
				'neve_archive_hide_title',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				],
				[
					'label'           => esc_html__( 'Disable Title', 'neve' ),
					'section'         => $this->section,
					'type'            => 'neve_toggle_control',
					'priority'        => 16,
					'active_callback' => function() {
						return get_option( 'show_on_front' ) !== 'posts';
					},
				],
				'Neve\Customizer\Controls\Checkbox'
			)
		);

		$this->add_control(
			new Control(
				'neve_blog_list_alternative_layout',
				array(
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				),
				array(
					'type'            => 'neve_toggle_control',
					'priority'        => 17,
					'section'         => $this->section,
					'label'           => esc_html__( 'Alternating layout', 'neve' ),
					'active_callback' => function () {
						$is_list_layout = get_theme_mod( $this->section ) === 'default';
						$has_image      = true;
						if ( $is_list_layout && defined( 'NEVE_PRO_VERSION' ) ) {
							$has_image = get_theme_mod( 'neve_blog_list_image_position', 'left' ) !== 'no';
						}
						return $is_list_layout && $has_image;
					},
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
					'type'            => 'neve_toggle_control',
					'priority'        => 35,
					'section'         => $this->section,
					'label'           => esc_html__( 'Enable Masonry', 'neve' ),
					'active_callback' => array( $this, 'should_show_masonry' ),
				)
			)
		);
	}

	/**
	 * Add featured post controls.
	 */
	private function add_featured_post() {
		$this->add_control(
			new Control(
				'neve_featured_post_heading',
				[
					'sanitize_callback' => 'sanitize_text_field',
				],
				[
					'label'            => esc_html__( 'Featured Post', 'neve' ),
					'section'          => $this->section,
					'priority'         => 40,
					'class'            => 'featured-post-accordion',
					'accordion'        => true,
					'expanded'         => false,
					'controls_to_wrap' => 2,
				],
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_enable_featured_post',
				[
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				],
				[
					'label'    => esc_html__( 'Enable featured post section', 'neve' ),
					'section'  => $this->section,
					'type'     => 'neve_toggle_control',
					'priority' => 41,
				],
				'Neve\Customizer\Controls\Checkbox'
			)
		);

		$this->add_control(
			new Control(
				'neve_featured_post_target',
				array(
					'default'           => 'latest',
					'sanitize_callback' => array( $this, 'sanitize_featured_post_target' ),
				),
				array(
					'label'           => esc_html__( 'Featured Post', 'neve' ),
					'section'         => $this->section,
					'priority'        => 42,
					'type'            => 'select',
					'choices'         => [
						'latest' => esc_html__( 'Latest Post', 'neve' ),
						'sticky' => esc_html__( 'Sticky Post', 'neve' ),
					],
					'active_callback' => function() {
						return get_theme_mod( 'neve_enable_featured_post', false );
					},
				)
			)
		);
	}

	/**
	 * Add content ordering and controls.
	 */
	private function add_content_ordering_controls() {
		$this->add_control(
			new Control(
				'neve_blog_ordering_content_heading',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Ordering and Content', 'neve' ),
					'section'          => $this->section,
					'priority'         => 50,
					'class'            => 'blog-layout-ordering-content-accordion',
					'accordion'        => true,
					'expanded'         => false,
					'controls_to_wrap' => 4,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);

		$this->add_control(
			new Control(
				'neve_pagination_type',
				array(
					'default'           => 'number',
					'sanitize_callback' => array( $this, 'sanitize_pagination_type' ),
				),
				array(
					'label'    => esc_html__( 'Post Pagination', 'neve' ),
					'section'  => $this->section,
					'priority' => 53,
					'type'     => 'select',
					'choices'  => array(
						'number'   => esc_html__( 'Number', 'neve' ),
						'infinite' => esc_html__( 'Infinite Scroll', 'neve' ),
						'jump-to'  => esc_html__( 'Number', 'neve' ) . ' & ' . esc_html__( 'Search Field', 'neve' ),
					),
				)
			)
		);

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
					'default'           => wp_json_encode( $order_default_components ),
				),
				array(
					'label'      => esc_html__( 'Post Content Order', 'neve' ),
					'section'    => $this->section,
					'components' => $components,
					'priority'   => 55,
				),
				'Neve\Customizer\Controls\React\Ordering'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_excerpt_length',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'default'           => 25,
				),
				array(
					'label'       => esc_html__( 'Excerpt Length', 'neve' ),
					'section'     => $this->section,
					'type'        => 'neve_range_control',
					'input_attrs' => [
						'min'        => 5,
						'max'        => 300,
						'defaultVal' => 25,
						'step'       => 5,
					],
					'priority'    => 58,
				),
				'Neve\Customizer\Controls\React\Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_post_thumbnail_box_shadow',
				array(
					'sanitize_callback' => 'absint',
					'default'           => 0,
				),
				array(
					'label'       => esc_html__( 'Thumbnail Shadow', 'neve' ),
					'section'     => $this->section,
					'type'        => 'neve_range_control',
					'step'        => 1,
					'input_attrs' => [
						'min'        => 0,
						'max'        => 5,
						'defaultVal' => 0,
					],
					'priority'    => 59,
				),
				'Neve\Customizer\Controls\React\Range'
			)
		);
	}

	/**
	 * Add controls for post meta.
	 */
	private function add_post_meta_controls() {
		$this->add_control(
			new Control(
				'neve_blog_post_meta_heading',
				array(
					'sanitize_callback' => 'sanitize_text_field',
				),
				array(
					'label'            => esc_html__( 'Post Meta', 'neve' ),
					'section'          => $this->section,
					'priority'         => 70,
					'class'            => 'blog-layout-post-meta-accordion',
					'accordion'        => true,
					'controls_to_wrap' => 5,
					'expanded'         => false,
				),
				'Neve\Customizer\Controls\Heading'
			)
		);


		$default       = wp_json_encode( [ 'author', 'date', 'comments' ] );
		$default_value = neve_get_default_meta_value( 'neve_post_meta_ordering', $default );
		$this->add_control(
			new Control(
				'neve_blog_post_meta_fields',
				[
					'sanitize_callback' => 'neve_sanitize_meta_repeater',
					'default'           => wp_json_encode( $default_value ),
				],
				[
					'label'            => esc_html__( 'Meta Order', 'neve' ),
					'section'          => $this->section,
					'fields'           => [
						'hide_on_mobile' => [
							'type'  => 'checkbox',
							'label' => __( 'Hide on mobile', 'neve' ),
						],
					],
					'components'       => apply_filters(
						'neve_meta_filter',
						array(
							'author'   => __( 'Author', 'neve' ),
							'category' => __( 'Category', 'neve' ),
							'date'     => __( 'Date', 'neve' ),
							'comments' => __( 'Comments', 'neve' ),
						)
					),
					'allow_new_fields' => 'no',
					'priority'         => 71,
					'active_callback'  => [ $this, 'should_show_meta_order' ],
				],
				'\Neve\Customizer\Controls\React\Repeater'
			)
		);

		$this->add_control(
			new Control(
				'neve_metadata_separator',
				array(
					'sanitize_callback' => 'sanitize_text_field',
					'default'           => esc_html( '/' ),
				),
				array(
					'priority'    => 72,
					'section'     => $this->section,
					'label'       => esc_html__( 'Separator', 'neve' ),
					'description' => esc_html__( 'For special characters make sure to use Unicode. For example > can be displayed using \003E.', 'neve' ),
					'type'        => 'text',
				)
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
					'section'  => $this->section,
					'type'     => 'neve_toggle_control',
					'priority' => 73,
				)
			)
		);

		$this->add_control(
			new Control(
				'neve_author_avatar_size',
				array(
					'sanitize_callback' => 'neve_sanitize_range_value',
					'default'           => '{ "mobile": 20, "tablet": 20, "desktop": 20 }',
				),
				array(
					'label'           => esc_html__( 'Avatar Size', 'neve' ),
					'section'         => $this->section,
					'units'           => array(
						'px',
					),
					'input_attr'      => array(
						'mobile'  => array(
							'min'          => 20,
							'max'          => 50,
							'default'      => 20,
							'default_unit' => 'px',
						),
						'tablet'  => array(
							'min'          => 20,
							'max'          => 50,
							'default'      => 20,
							'default_unit' => 'px',
						),
						'desktop' => array(
							'min'          => 20,
							'max'          => 50,
							'default'      => 20,
							'default_unit' => 'px',
						),
					),
					'input_attrs'     => [
						'min'        => self::RELATIVE_CSS_UNIT_SUPPORTED_MIN_VALUE,
						'max'        => 50,
						'defaultVal' => [
							'mobile'  => 20,
							'tablet'  => 20,
							'desktop' => 20,
							'suffix'  => [
								'mobile'  => 'px',
								'tablet'  => 'px',
								'desktop' => 'px',
							],
						],
						'units'      => [ 'px', 'em', 'rem' ],
					],
					'priority'        => 74,
					'active_callback' => function () {
						return get_theme_mod( 'neve_author_avatar', false );
					},
					'responsive'      => true,
				),
				'Neve\Customizer\Controls\React\Responsive_Range'
			)
		);

		$this->add_control(
			new Control(
				'neve_show_last_updated_date',
				array(
					'sanitize_callback' => 'neve_sanitize_checkbox',
					'default'           => false,
				),
				array(
					'label'    => esc_html__( 'Use last updated date instead of the published one', 'neve' ),
					'section'  => $this->section,
					'type'     => 'neve_toggle_control',
					'priority' => 85,
				)
			)
		);
	}

	/**
	 * Sanitize the container layout value
	 *
	 * @param string $value value from the control.
	 *
	 * @return string
	 */
	public function sanitize_blog_layout( $value ) {
		$allowed_values = array( 'default', 'covers', 'grid' );
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'grid';
		}

		return sanitize_text_field( $value );
	}

	/**
	 * Sanitize the pagination type
	 *
	 * @param string $value value from the control.
	 *
	 * @return string
	 */
	public function sanitize_pagination_type( $value ) {
		$allowed_values = array( 'number', 'infinite', 'jump-to' );
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'number';
		}

		return esc_html( $value );
	}

	/**
	 * Sanitize featured post target
	 *
	 * @param string $value value from the control.
	 *
	 * @return string
	 */
	public function sanitize_featured_post_target( $value ) {
		$allowed_values = [ 'sticky', 'latest' ];
		if ( ! in_array( $value, $allowed_values, true ) ) {
			return 'latest';
		}

		return esc_html( $value );
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
			return wp_json_encode( $allowed );
		}

		$decoded = json_decode( $value, true );

		foreach ( $decoded as $val ) {
			if ( ! in_array( $val, $allowed, true ) ) {
				return wp_json_encode( $allowed );
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
		$default       = array(
			'thumbnail',
			'title-meta',
			'excerpt',
		);
		$content_order = get_theme_mod( 'neve_post_content_ordering', wp_json_encode( $default ) );
		$content_order = json_decode( $content_order, true );
		if ( ! in_array( 'title-meta', $content_order, true ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Callback to show grid columns control.
	 *
	 * @return bool
	 */
	public function is_column_layout() {
		$blog_layout = get_theme_mod( $this->section, 'grid' );

		return in_array( $blog_layout, [ 'grid', 'covers' ], true );
	}

	/**
	 * Callback to show masonry control.
	 *
	 * @return bool
	 */
	public function should_show_masonry() {
		if ( ! $this->is_column_layout() ) {
			return false;
		}

		$columns = json_decode( get_theme_mod( 'neve_grid_layout', $this->grid_columns_default() ), true );
		$columns = array_filter(
			array_values( $columns ),
			function ( $value ) {
				return $value > 1;
			}
		);

		if ( empty( $columns ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Add typography shortcut.
	 */
	private function add_typography_shortcut() {
		$this->add_control(
			new Control(
				'neve_blog_typography_shortcut',
				array(
					'sanitize_callback' => 'neve_sanitize_text_field',
				),
				array(
					'button_class'     => 'nv-top-bar-menu-shortcut',
					'text_before'      => __( 'Customize Typography for the Archive page', 'neve' ),
					'text_after'       => '.',
					'button_text'      => __( 'here', 'neve' ),
					'is_button'        => false,
					'control_to_focus' => 'neve_archive_typography_post_title_accordion_wrap',
					'shortcut'         => true,
					'section'          => $this->section,
					'priority'         => 1000,
				),
				'\Neve\Customizer\Controls\Button'
			)
		);
	}
}
