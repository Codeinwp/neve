<?php
if ( ! function_exists( 'Hf_customizer_search_config' ) ) {
	function Hf_customizer_search_config( $configs = array() ) {

		$args = array(
			'name'     => __( 'Search Results', 'Hf' ),
			'id'       => 'search_results',
			'selector' => '',
			'cb'       => '',
		);

		$top_panel     = 'blog_panel';
		$level_2_panel = 'section_' . $args['id'];

		$config = array(

			array(
				'name'  => $level_2_panel,
				'type'  => 'section',
				'panel' => $top_panel,
				'title' => $args['name'],
			),

			array(
				'name'            => $args['id'] . '_excerpt_type',
				'type'            => 'select',
				'section'         => $level_2_panel,
				'default'         => 'excerpt',
				'choices'         => array(
					'custom'   => __( 'Custom', 'Hf' ),
					'excerpt'  => __( 'Use excerpt metabox', 'Hf' ),
					'more_tag' => __( 'Strip excerpt by more tag', 'Hf' ),
					'content'  => __( 'Full content', 'Hf' ),
				),
				'selector'        => $args['selector'],
				'render_callback' => $args['cb'],
				'label'           => __( 'Excerpt Type', 'Hf' ),
			),

			array(
				'name'            => $args['id'] . '_excerpt_length',
				'type'            => 'number',
				'section'         => $level_2_panel,
				'default'         => 150,
				'selector'        => $args['selector'],
				'render_callback' => $args['cb'],
				'label'           => __( 'Excerpt Length', 'Hf' ),
				'required'        => array( $args['id'] . '_excerpt_type', '=', 'custom' ),
			),
			array(
				'name'            => $args['id'] . '_excerpt_more',
				'type'            => 'text',
				'section'         => $level_2_panel,
				'default'         => '',
				'selector'        => $args['selector'],
				'render_callback' => $args['cb'],
				'label'           => __( 'Excerpt More', 'Hf' ),
			),

		);

		return array_merge( $configs, $config );

	}
}

add_filter( 'Hf/customizer/config', 'Hf_customizer_search_config' );
