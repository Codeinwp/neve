<?php
if ( ! function_exists( 'Hf_customizer_typography_config' ) ) {
	/**
	 * Add typograhy settings.
	 *
	 * @since 0.0.1
	 * @since 0.2.6
	 *
	 * @param array $configs
	 * @return array
	 */
	function Hf_customizer_typography_config( $configs ) {

		$section = 'global_typography';

		$config = array(
			array(
				'name'     => 'typography_panel',
				'type'     => 'panel',
				'priority' => 22,
				'title'    => __( 'Typography', 'Hf' ),
			),

			// Base.
			array(
				'name'  => "{$section}_base",
				'type'  => 'section',
				'panel' => 'typography_panel',
				'title' => __( 'Base', 'Hf' ),
			),

			array(
				'name'        => "{$section}_base_p",
				'type'        => 'typography',
				'section'     => "{$section}_base",
				'title'       => __( 'Body & Paragraph', 'Hf' ),
				'description' => __( 'Apply to body and paragraph text.', 'Hf' ),
				'css_format'  => 'typography',
				'selector'    => 'body',
			),

			array(
				'name'        => "{$section}_base_heading",
				'type'        => 'typography',
				'section'     => "{$section}_base",
				'title'       => __( 'Heading', 'Hf' ),
				'description' => __( 'Apply to all heading elements.', 'Hf' ),
				'css_format'  => 'typography',
				'selector'    => 'h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6',
				'fields'      => array(
					'font_size'      => false,
					'line_height'    => false,
					'letter_spacing' => false,
				),
			),

			// Site Title and Tagline.
			array(
				'name'  => "{$section}_site_tt",
				'type'  => 'section',
				'panel' => 'typography_panel',
				'title' => __( 'Site Title & Tagline', 'Hf' ),
			),

			array(
				'name'       => "{$section}_site_tt_title",
				'type'       => 'typography',
				'section'    => "{$section}_site_tt",
				'title'      => __( 'Site Title', 'Hf' ),
				'css_format' => 'typography',
				'selector'   => '.site-branding .site-title, .site-branding .site-title a',
			),

			array(
				'name'       => "{$section}_site_tt_desc",
				'type'       => 'typography',
				'section'    => "{$section}_site_tt",
				'title'      => __( 'Tagline', 'Hf' ),
				'css_format' => 'typography',
				'selector'   => '.site-branding .site-description',
			),

			// Content.
			array(
				'name'  => "{$section}_content",
				'type'  => 'section',
				'panel' => 'typography_panel',
				'title' => __( 'Content', 'Hf' ),
			),

			array(
				'name'       => "{$section}_heading_h1",
				'type'       => 'typography',
				'section'    => "{$section}_content",
				'title'      => __( 'Heading H1', 'Hf' ),
				'css_format' => 'typography',
				'selector'   => '.entry-content h1, .wp-block h1, .entry-single .entry-title',
			),

			array(
				'name'       => "{$section}_heading_h2",
				'type'       => 'typography',
				'section'    => "{$section}_content",
				'title'      => __( 'Heading H2', 'Hf' ),
				'css_format' => 'typography',
				'selector'   => '.entry-content h2, .wp-block h2',
			),

			array(
				'name'       => "{$section}_heading_h3",
				'type'       => 'typography',
				'section'    => "{$section}_content",
				'title'      => __( 'Heading H3', 'Hf' ),
				'css_format' => 'typography',
				'selector'   => '.entry-content h3, .wp-block h3',
			),

			array(
				'name'       => "{$section}_heading_h4",
				'type'       => 'typography',
				'section'    => "{$section}_content",
				'title'      => __( 'Heading H4', 'Hf' ),
				'css_format' => 'typography',
				'selector'   => '.entry-content h4, .wp-block h4',
			),

			array(
				'name'       => "{$section}_heading_h5",
				'type'       => 'typography',
				'section'    => "{$section}_content",
				'title'      => __( 'Heading H5', 'Hf' ),
				'css_format' => 'typography',
				'selector'   => '.entry-content h5, .wp-block h5',
			),

			array(
				'name'       => "{$section}_heading_h6",
				'type'       => 'typography',
				'section'    => "{$section}_content",
				'title'      => __( 'Heading H6', 'Hf' ),
				'css_format' => 'typography',
				'selector'   => '.entry-content h6, .wp-block h6',
			),

		);

		return array_merge( $configs, $config );
	}
}

add_filter( 'Hf/customizer/config', 'Hf_customizer_typography_config' );
