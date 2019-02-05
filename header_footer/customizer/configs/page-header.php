<?php

class Hf_Page_Header {
	public $name = null;
	public $description = null;
	static $is_transparent = null;
	static $_instance = null;
	static $_settings = null;

	function __construct() {
		add_filter( 'Hf/customizer/config', array( $this, 'config' ) );
		if ( ! is_admin() ) {
			add_action( 'Hf_is_post_title_display', array( $this, 'display_page_title' ), 35 );
			add_action( 'Hf/site-start', array( $this, 'render' ), 35 );
			add_action( 'wp', array( $this, 'wp' ), 85 );
		}
		self::$_instance = $this;
	}

	function wp() {
		$this->get_settings();
	}

	static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	function config( $configs = array() ) {
		$section      = 'page_header';
		$name         = 'page_header';
		$choices      = array(
			'default'  => __( 'Default', 'Hf' ),
			'cover'    => __( 'Cover', 'Hf' ),
			'titlebar' => __( 'Titlebar', 'Hf' ),
			'none'     => __( 'Hide', 'Hf' ),
		);
		$render_cb_el = array( $this, 'render' );

		$display_fields = array(
			array(
				'name'        => 'page',
				'type'        => 'select',
				'label'       => __( 'Display on single page', 'Hf' ),
				'description' => __( 'Apply when viewing single page', 'Hf' ),
				'default'     => 'titlebar',
				'choices'     => $choices,
			),
			array(
				'name'        => 'post',
				'type'        => 'select',
				'label'       => __( 'Display on single post', 'Hf' ),
				'description' => __( 'Apply when viewing single post', 'Hf' ),
				'default'     => '',
				'choices'     => $choices,
			),

			array(
				'name'        => 'category',
				'type'        => 'select',
				'label'       => __( 'Display on categories', 'Hf' ),
				'description' => __( 'Apply when viewing a category page', 'Hf' ),
				'default'     => '',
				'choices'     => $choices,
			),
			array(
				'name'        => 'index',
				'type'        => 'select',
				'label'       => __( 'Display on index', 'Hf' ),
				'description' => __( 'Apply when your homepage displays as latest posts', 'Hf' ),
				'default'     => '',
				'choices'     => $choices,
			),
			array(
				'name'        => 'search',
				'type'        => 'select',
				'label'       => __( 'Display on search', 'Hf' ),
				'description' => __( 'Apply when viewing search results page', 'Hf' ),
				'default'     => '',
				'choices'     => $choices,
			),
			array(
				'name'        => 'archive',
				'type'        => 'select',
				'label'       => __( 'Display on archive', 'Hf' ),
				'description' => __( 'Apply when viewing archive pages, e.g. Tag, Author, Date, Custom Post Type or Custom Taxonomy', 'Hf' ),
				'default'     => '',
				'choices'     => $choices,
			),
			array(
				'name'        => 'page_404',
				'type'        => 'select',
				'label'       => __( 'Display on 404 page', 'Hf' ),
				'description' => __( 'Apply when the page not found', 'Hf' ),
				'default'     => '',
				'choices'     => $choices,
			),

		);

		$title_fields = array(
			array(
				'name'        => 'index',
				'type'        => 'text',
				'label'       => __( 'Title for index page', 'Hf' ),
				'description' => __( 'Apply when your homepage displays as latest posts', 'Hf' ),
				'default'     => '',
			),
			array(
				'name'        => 'post',
				'type'        => 'text',
				'label'       => __( 'Title for single post', 'Hf' ),
				'description' => __( 'Apply when viewing single post', 'Hf' ),
				'default'     => '',
			),
			array(
				'name'        => 'page_404',
				'type'        => 'text',
				'label'       => __( 'Title for 404 page', 'Hf' ),
				'description' => __( 'Apply when the page not found', 'Hf' ),
				'default'     => '',
			),
		);

		$tagline_fields = array(
			array(
				'name'        => 'index',
				'type'        => 'textarea',
				'label'       => __( 'Tagline for index page', 'Hf' ),
				'description' => __( 'Apply when your homepage displays as latest posts', 'Hf' ),
				'default'     => '',
			),
			array(
				'name'        => 'post',
				'type'        => 'textarea',
				'label'       => __( 'Tagline for single post', 'Hf' ),
				'description' => __( 'Apply when viewing single post', 'Hf' ),
				'default'     => '',
			),
			array(
				'name'        => 'page_404',
				'type'        => 'textarea',
				'label'       => __( 'Tagline for 404 page', 'Hf' ),
				'description' => __( 'Apply when the page not found', 'Hf' ),
				'default'     => '',
			),
		);

		$post_types = Hf()->get_post_types( false );
		if ( count( $post_types ) > 0 ) {
			foreach ( $post_types as $pt => $label ) {
				$display_fields[] = array(
					'name'        => $pt,
					'type'        => 'select',
					'label'       => sprintf( __( 'Display on %s page', 'Hf' ), $label['singular_name'] ),
					'description' => sprintf( __( 'Apply when viewing single %s', 'Hf' ), $label['singular_name'] ),
					'default'     => '',
					'choices'     => $choices,
				);

				$taxonomy_filter_args = [
					'show_in_nav_menus' => true,
				];

				$taxonomy_filter_args['object_type'] = [ $pt ];
				$taxonomies                          = get_taxonomies( $taxonomy_filter_args, 'objects' );
				$options                             = array();

				foreach ( $taxonomies as $taxonomy => $object ) {
					$options[ $taxonomy ] = $object->label;
					$display_fields[]     = array(
						'name'        => $taxonomy,
						'type'        => 'select',
						'label'       => sprintf( __( 'Display on %1$s %2$s', 'Hf' ), $label['singular_name'], $object->labels->singular_name ),
						'description' => sprintf( __( 'Apply when viewing %1$s %2$s', 'Hf' ), $label['singular_name'], $object->labels->singular_name ),
						'default'     => '',
						'choices'     => $choices,
					);
				}

				$title_fields[] = array(
					'name'        => $pt,
					'type'        => 'text',
					'label'       => sprintf( __( 'Title for %s', 'Hf' ), $label['singular_name'] ),
					'description' => sprintf( __( 'Apply when viewing single %s', 'Hf' ), $label['singular_name'] ),
					'default'     => '',
				);

				$tagline_fields[] = array(
					'name'        => $pt,
					'type'        => 'textarea',
					'label'       => sprintf( __( 'Tagline for %s', 'Hf' ), $label['singular_name'] ),
					'description' => sprintf( __( 'Apply when viewing single %s', 'Hf' ), $label['singular_name'] ),
					'default'     => '',
				);
			}
		}

		$config = array(
			array(
				'name'  => $section,
				'type'  => 'section',
				'panel' => 'layout_panel',
				'title' => __( 'Page Header', 'Hf' ),
			),

			array(
				'name'       => $section . '_layout',
				'type'       => 'select',
				'section'    => $section,
				'title'      => __( 'Layout', 'Hf' ),
				'selector'   => '.page-header--item',
				'css_format' => 'html_class',
				'default'    => '',
				'choices'    => array(
					''                      => __( 'Default', 'Hf' ),
					'layout-full-contained' => __( 'Full width - Contained', 'Hf' ),
					'layout-fullwidth'      => __( 'Full Width', 'Hf' ),
					'layout-contained'      => __( 'Contained', 'Hf' ),
				),
			),

			array(
				'name'    => "{$name}_display_h",
				'type'    => 'heading',
				'section' => $section,
				'title'   => __( 'Display Settings', 'Hf' ),
			),

			array(
				'name'        => "{$name}_display",
				'type'        => 'modal',
				'section'     => $section,
				'label'       => __( 'Display', 'Hf' ),
				'description' => __( 'Settings display for special pages.', 'Hf' ),
				'default'     => array(
					'display' => array(
						'page'     => 'titlebar',
						'archive'  => 'titlebar',
						'category' => 'titlebar',
					),
				),
				'fields'      => array(
					'tabs'            => array(
						'display'  => __( 'Display', 'Hf' ),
						'advanced' => __( 'Advanced', 'Hf' ),
					),
					'display_fields'  => $display_fields,
					'advanced_fields' => array(
						array(
							'name'        => 'post_bg',
							'type'        => 'select',
							'label'       => __( 'Post Header Background Cover', 'Hf' ),
							'description' => __( 'Apply when viewing single post and page header setting displays as cover.', 'Hf' ),
							'default'     => '',
							'choices'     => array(
								'default'   => __( 'Default', 'Hf' ),
								'blog_page' => __( 'Use featured image from blog page', 'Hf' ),
								'featured'  => __( 'Use featured image of current post', 'Hf' ),
							),
						),
						array(
							'name'    => 'post_title_tagline',
							'type'    => 'select',
							'label'   => __( 'Single Post Title & Tagline', 'Hf' ),
							'default' => '',
							'choices' => array(
								'default'   => __( 'Default', 'Hf' ),
								'blog_page' => __( 'Use title & tagline from blog page', 'Hf' ),
								'current'   => __( 'Use title & tagline of current post', 'Hf' ),
							),
						),
					),
				),
			),

			array(
				'name'            => "{$name}_title_tagline",
				'type'            => 'modal',
				'section'         => $section,
				'label'           => __( 'Title & Tagline', 'Hf' ),
				'description'     => __( 'Title & tagline for special pages.', 'Hf' ),
				'default'         => array(),
				'fields'          => array(
					'tabs'            => array(
						'titles'   => __( 'Title', 'Hf' ),
						'taglines' => __( 'Tagline', 'Hf' ),
					),
					'titles_fields'   => $title_fields,
					'taglines_fields' => $tagline_fields,
				),
				'selector'        => '#page-titlebar, #page-cover',
				'render_callback' => $render_cb_el,
			),

			array(
				'name'            => $name . '_show_archive_prefix',
				'type'            => 'checkbox',
				'section'         => $section,
				'title'           => __( 'Archive Prefix', 'Hf' ),
				'description'     => __( 'Enable or disable archive prefix on category, date, tag page.', 'Hf' ),
				'checkbox_label'  => __( 'Enable', 'Hf' ),
				'default'         => 1,
				'selector'        => '#page-titlebar, #page-cover',
				'render_callback' => $render_cb_el,
			),

		);

		$configs = array_merge( $configs, $config );
		$configs = array_merge( $configs, $this->config_cover() );
		$configs = array_merge( $configs, $this->config_titlebar() );

		return $configs;
	}

	function config_titlebar() {

		$section      = 'page_header';
		$render_cb_el = array( $this, 'render' );
		$selector     = '#page-titlebar';
		$name         = 'titlebar';
		$config       = array(

			array(
				'name'    => "{$name}_styling_h_tb",
				'type'    => 'heading',
				'section' => 'page_header',
				'title'   => __( 'Titlebar Settings', 'Hf' ),
			),

			array(
				'name'           => $name . '_show_title',
				'type'           => 'checkbox',
				'section'        => $section,
				'label'          => __( 'Show Title', 'Hf' ),
				'description'    => __( 'Title is pull from post title, archive title.', 'Hf' ),
				'checkbox_label' => __( 'Enable', 'Hf' ),
				'default'        => 1,
			),

			array(
				'name'           => $name . '_show_tagline',
				'type'           => 'checkbox',
				'section'        => $section,
				'label'          => __( 'Show Tagline', 'Hf' ),
				'description'    => __( 'Tagline is pull from post excerpt, archive description.', 'Hf' ),
				'checkbox_label' => __( 'Enable', 'Hf' ),
				'default'        => 1,
			),
			array(
				'name'            => "{$name}_align",
				'type'            => 'text_align_no_justify',
				'section'         => $section,
				'device_settings' => true,
				'selector'        => "$selector",
				'css_format'      => 'text-align: {{value}};',
				'title'           => __( 'Text Align', 'Hf' ),
			),

		);

		$config = apply_filters( 'Hf/titlebar/config', $config, $this );

		return $config;
	}

	function config_cover() {

		$section      = 'page_header';
		$render_cb_el = array( $this, 'render' );
		$selector     = '#page-cover';
		$name         = 'header_cover';
		$config       = array(

			array(
				'name'    => "{$name}_settings_h",
				'type'    => 'heading',
				'section' => $section,
				'title'   => __( 'Cover Settings', 'Hf' ),
			),

			array(
				'name'           => $name . '_show_title',
				'type'           => 'checkbox',
				'section'        => $section,
				'label'          => __( 'Show Title', 'Hf' ),
				'description'    => __( 'Title is pull from post title, archive title.', 'Hf' ),
				'checkbox_label' => __( 'Enable', 'Hf' ),
				'default'        => 1,
			),

			array(
				'name'           => $name . '_show_tagline',
				'type'           => 'checkbox',
				'section'        => $section,
				'label'          => __( 'Show Tagline', 'Hf' ),
				'description'    => __( 'Tagline is pull from post excerpt, archive description.', 'Hf' ),
				'checkbox_label' => __( 'Enable', 'Hf' ),
				'default'        => 1,
			),

			array(
				'name'       => $name . '_bg',
				'type'       => 'modal',
				'section'    => $section,
				'title'      => __( 'Cover Background', 'Hf' ),
				'selector'   => $selector,
				'css_format' => 'styling', // Styling.
				'default'    => array(
					'normal' => array(
						'bg_image' => array(
							'id'  => '',
							'url' => esc_url( get_template_directory_uri() ) . '/assets/images/default-cover.jpg',
						),
					),
				),
				'fields'     => array(
					'tabs'          => array(
						'normal' => '_',
					),
					'normal_fields' => array(
						array(
							'name'       => 'bg_image',
							'type'       => 'image',
							'label'      => __( 'Background Image', 'Hf' ),
							'selector'   => "$selector",
							'css_format' => 'background-image: url("{{value}}");',
						),
						array(
							'name'       => 'bg_cover',
							'type'       => 'select',
							'choices'    => array(
								''        => __( 'Default', 'Hf' ),
								'auto'    => __( 'Auto', 'Hf' ),
								'cover'   => __( 'Cover', 'Hf' ),
								'contain' => __( 'Contain', 'Hf' ),
							),
							'required'   => array( 'bg_image', 'not_empty', '' ),
							'label'      => __( 'Size', 'Hf' ),
							'class'      => 'field-half-left',
							'selector'   => "$selector",
							'css_format' => '-webkit-background-size: {{value}}; -moz-background-size: {{value}}; -o-background-size: {{value}}; background-size: {{value}};',
						),
						array(
							'name'       => 'bg_position',
							'type'       => 'select',
							'label'      => __( 'Position', 'Hf' ),
							'required'   => array( 'bg_image', 'not_empty', '' ),
							'class'      => 'field-half-right',
							'choices'    => array(
								''              => __( 'Default', 'Hf' ),
								'center'        => __( 'Center', 'Hf' ),
								'top left'      => __( 'Top Left', 'Hf' ),
								'top right'     => __( 'Top Right', 'Hf' ),
								'top center'    => __( 'Top Center', 'Hf' ),
								'bottom left'   => __( 'Bottom Left', 'Hf' ),
								'bottom center' => __( 'Bottom Center', 'Hf' ),
								'bottom right'  => __( 'Bottom Right', 'Hf' ),
							),
							'selector'   => "$selector",
							'css_format' => 'background-position: {{value}};',
						),
						array(
							'name'       => 'bg_repeat',
							'type'       => 'select',
							'label'      => __( 'Repeat', 'Hf' ),
							'class'      => 'field-half-left',
							'required'   => array(
								array( 'bg_image', 'not_empty', '' ),
							),
							'choices'    => array(
								'repeat'    => __( 'Default', 'Hf' ),
								'no-repeat' => __( 'No repeat', 'Hf' ),
								'repeat-x'  => __( 'Repeat horizontal', 'Hf' ),
								'repeat-y'  => __( 'Repeat vertical', 'Hf' ),
							),
							'selector'   => "$selector",
							'css_format' => 'background-repeat: {{value}};',
						),

						array(
							'name'       => 'bg_attachment',
							'type'       => 'select',
							'label'      => __( 'Attachment', 'Hf' ),
							'class'      => 'field-half-right',
							'required'   => array(
								array( 'bg_image', 'not_empty', '' ),
							),
							'choices'    => array(
								''       => __( 'Default', 'Hf' ),
								'scroll' => __( 'Scroll', 'Hf' ),
								'fixed'  => __( 'Fixed', 'Hf' ),
							),
							'selector'   => "$selector",
							'css_format' => 'background-attachment: {{value}};',
						),

						array(
							'name'            => 'overlay',
							'type'            => 'color',
							'section'         => $section,
							'class'           => 'Hf--clear',
							'device_settings' => false,
							'selector'        => "$selector:before",
							'label'           => __( 'Cover Overlay', 'Hf' ),
							'css_format'      => 'background-color: {{value}};',
						),

					),
					'hover_fields'  => false,
				),
			),

			array(
				'name'            => "{$name}_align",
				'type'            => 'text_align_no_justify',
				'section'         => $section,
				'device_settings' => true,
				'selector'        => "$selector",
				'css_format'      => 'text-align: {{value}};',
				'title'           => __( 'Cover Text Align', 'Hf' ),
			),

			array(
				'name'            => "{$name}_height",
				'type'            => 'slider',
				'section'         => $section,
				'device_settings' => true,
				'max'             => 1000,
				'title'           => __( 'Cover Height', 'Hf' ),
				'selector'        => "{$selector} .page-cover-inner",
				'css_format'      => 'min-height: {{value}};',
				'default'         => array(
					'desktop' => array(
						'value' => '300',
					),
					'tablet'  => array(
						'value' => '250',
					),
					'mobile'  => array(
						'value' => '200',
					),
				),
			),

			array(
				'name'            => "{$name}_align",
				'type'            => 'text_align_no_justify',
				'section'         => $section,
				'device_settings' => true,
				'selector'        => "$selector",
				'css_format'      => 'text-align: {{value}};',
				'title'           => __( 'Cover Text Align', 'Hf' ),
			),

		);
		$config       = apply_filters( 'Hf/cover/config', $config, $this );

		return $config;
	}

	function get_settings() {

		if ( ! is_null( self::$_settings ) ) {
			return self::$_settings;
		}

		$args = array(
			'_page'                      => 'index',
			'display'                    => 'default',
			'title'                      => '',
			'tagline'                    => '',
			'image'                      => '',
			'title_tag'                  => 'h1',
			'force_display_single_title' => '', // Show || or hide.
			'show_title'                 => false, // force show post title.
			'shortcode'                  => false, // force show post title.
			'cover_tagline'              => 1, // Display tagline in cover.
			'titlebar_tagline'           => 1, // Display tagline in titlbar.
		);
		$name = 'page_header';

		$display  = Hf()->get_setting_tab( $name . '_display', 'display' );
		$advanced = Hf()->get_setting_tab( $name . '_display', 'advanced' );

		$titles   = Hf()->get_setting_tab( $name . '_title_tagline', 'titles' );
		$taglines = Hf()->get_setting_tab( $name . '_title_tagline', 'taglines' );

		$args['cover_tagline']    = Hf()->get_setting( 'header_cover_show_tagline' );
		$args['titlebar_tagline'] = Hf()->get_setting( 'titlebar_show_tagline' );

		$display = wp_parse_args(
			$display,
			array(
				'index'       => '',
				'category'    => '',
				'search'      => '',
				'archive'     => '',
				'page'        => '',
				'post'        => '',
				'singular'    => '',
				'product'     => '',
				'product_cat' => '',
				'product_tag' => '',
				'page_404'    => '',
			)
		);

		$advanced = wp_parse_args(
			$advanced,
			array(
				'post_bg'            => '',
				'post_title_tagline' => '',
			)
		);

		$titles = wp_parse_args(
			$titles,
			array(
				'index'    => '',
				'post'     => '',
				'product'  => '',
				'page_404' => '',
			)
		);

		$taglines = wp_parse_args(
			$taglines,
			array(
				'index'    => '',
				'post'     => '',
				'product'  => '',
				'page_404' => '',
			)
		);

		$post_thumbnail_id = false;

		$post_id = 0;
		if ( is_front_page() && is_home() ) { // index page.
			// Default homepage.
			$args['display'] = $display['index'];
			$args['title']   = $titles['index'];
			$args['tagline'] = $taglines['index'];
			$args['_page']   = 'index';
		} elseif ( is_front_page() ) {
			// static homepage.
			$args['display'] = $display['page'];
			$post_id         = get_the_ID();
			$args['_page']   = 'page';
		} elseif ( is_home() ) {
			// blog page.
			$args['display'] = $display['page'];
			$post_id         = get_option( 'page_for_posts' );
			$args['_page']   = 'page';
		} elseif ( is_category() ) {
			// category.
			$args['display'] = $display['category'];
			$args['title']   = get_the_archive_title();
			$args['tagline'] = get_the_archive_description();
			$args['_page']   = 'category';
			$post_id         = 0;
		} elseif ( is_page() ) {
			// single page.
			$args['display'] = $display['page'];
			$post_id         = get_the_ID();
			$args['_page']   = 'page';
		} elseif ( is_singular( 'post' ) ) {
			// single post.
			$args['display']   = $display['post'];
			$args['title_tag'] = 'h2';

			// Setup single post bg for cover.
			if ( 'blog_page' == $advanced['post_bg'] ) {
				$post_id           = get_option( 'page_for_posts' );
				$post_thumbnail_id = get_post_thumbnail_id( $post_id );
			} elseif ( 'featured' == $advanced['post_bg'] ) {
				$post_thumbnail_id = get_post_thumbnail_id( get_the_ID() );
			} else {
				$post_id = get_option( 'page_for_posts' );
				if ( $post_id ) {
					$post_thumbnail_id = get_post_thumbnail_id( get_the_ID() );
				}
			}

			if ( 'none' != $args['display'] ) {
				if ( 'blog_page' == $advanced['post_title_tagline'] ) {
					$post_id                            = get_option( 'page_for_posts' );
					$args['force_display_single_title'] = 'show';
				} elseif ( 'current' == $advanced['post_title_tagline'] ) {
					$post_id = get_the_ID();
					if ( 'default' != $args['display'] ) {
						$args['force_display_single_title'] = 'hide';
					} else {
						$args['force_display_single_title'] = 'show';
					}
					$args['title_tag'] = 'h1';
				} else {
					$post_id                            = get_option( 'page_for_posts' );
					$args['force_display_single_title'] = 'show';
					if ( ! $post_id ) {
						$args['force_display_single_title'] = 'show';
						if ( $titles['post'] || $taglines['post'] ) {
							$args['title']   = $titles['post'];
							$args['tagline'] = $taglines['post'];
						}
					}
				}
			}

			$args['_page'] = 'post';
		} elseif ( is_singular() ) {
			// single custom post type.
			$post_id   = get_the_ID();
			$post_type = get_post_type();
			if ( isset( $display[ $post_type ] ) ) {
				$args['display'] = $display[ $post_type ];
				$args['_page']   = 'singular_' . $post_type;
			} elseif ( isset( $display['singular'] ) ) {
				$args['display'] = $display['singular'];
				$args['_page']   = 'singular';
			}
		} elseif ( is_404() ) {
			// page not found.
			$args['display'] = $display['page_404'];
			$args['_page']   = '404';
			$args['title']   = $titles['page_404'];
			$args['tagline'] = $taglines['page_404'];
			if ( ! $args['title'] ) {
				$args['title'] = __( "Oops! That page can't be found.", 'Hf' );
			}
		} elseif ( is_search() ) {
			// Search result.
			$args['display'] = $display['search'];
			$args['title']   = sprintf( // WPCS: XSS ok.
				/* translators: 1: Search query name */
				__( 'Search Results for: %s', 'Hf' ),
				'<span>' . get_search_query() . '</span>'
			);
			$args['tagline'] = '';
			$args['_page']   = 'search';
			$post_id         = 0;
		} elseif ( is_archive() ) {
			$args['display'] = $display['archive'];
			$args['title']   = get_the_archive_title();
			$args['tagline'] = get_the_archive_description();
			$args['_page']   = 'archive';
			$post_id         = 0;
		}

		if ( is_tax() ) {
			$queried_object = get_queried_object();
			if ( isset( $display[ $queried_object->taxonomy ] ) ) {
				$args['display'] = $display['product_tag'];
			}
			if ( isset( $titles[ $queried_object->taxonomy ] ) ) {
				$args['display'] = $titles[ $queried_object->taxonomy ];
			}
			if ( isset( $taglines[ $queried_object->taxonomy ] ) ) {
				$args['tagline'] = $taglines[ $queried_object->taxonomy ];
			}
			$args['_page'] = 'tax_' . $queried_object->taxonomy;
		}

		// WooCommerce Settings.
		if ( Hf()->is_woocommerce_active() ) {
			if ( is_product() ) {
				$post_id         = wc_get_page_id( 'shop' );
				$args['display'] = $display['product'];
				$args['title']   = $titles['product'];
				$args['tagline'] = $taglines['product'];
				$args['_page']   = 'product';
				if ( $args['title'] || $args['tagline'] ) {
					$post_id = 0;
				}
			} elseif ( is_product_category() ) {
				$post_id         = 0;
				$args['display'] = $display['product_cat'];
				$args['title']   = get_the_archive_title();
				$args['tagline'] = get_the_archive_description();
				$args['_page']   = 'product_cat';
			} elseif ( is_product_tag() ) {
				$post_id         = 0;
				$args['display'] = $display['product_tag'];
				$args['title']   = get_the_archive_title();
				$args['tagline'] = get_the_archive_description();
				$args['_page']   = 'product_tag';
			} elseif ( is_shop() && ! is_search() ) {
				$args['display'] = $display['page'];
				$post_id         = wc_get_page_id( 'shop' );
				$args['_page']   = 'shop';
				$args['tagline'] = '';
			}
		}

		if ( $post_id > 0 ) {
			$post = get_post( $post_id );
			if ( $post ) {
				$args['title'] = get_the_title( $post_id );
				if ( $post->post_excerpt ) {
					$args['tagline'] = get_the_excerpt( $post );
				}
				if ( ! $post_thumbnail_id ) {
					$post_thumbnail_id = get_post_thumbnail_id( $post_id );
				}
			}
		}

		if ( ! $args['image'] && $post_thumbnail_id ) {
			$_i = Hf()->get_media( $post_thumbnail_id );
			if ( $_i ) {
				$args['image'] = $_i;
			}
		}

		if ( Hf()->is_using_post() ) {
			$post_id = Hf()->get_current_post_id();

			// If Disable page title.
			$disable = get_post_meta( $post_id, '_Hf_disable_page_title', true );
			if ( $disable ) {
				$args['force_display_single_title'] = 'hide';
			}

			// If has custom field custom title.
			$post_display = get_post_meta( $post_id, '_Hf_page_header_display', true );
			if ( $post_display && 'default' != $post_display ) {
				if ( 'normal' == $post_display ) {
					$args['display'] = 'default';
				} else {
					$args['display'] = $post_display;
				}
			}

			// If has custom field custom title.
			$title = get_post_meta( $post_id, '_Hf_page_header_title', true );
			if ( $title ) {
				$args['title'] = $title;
			}

			// If has custom field custom tagline.
			$tagline = trim( get_post_meta( $post_id, '_Hf_page_header_tagline', true ) );
			if ( $tagline ) {
				$args['tagline'] = $tagline;
			}

			// If has custom field header media.
			$media = get_post_meta( $post_id, '_Hf_page_header_image', true );
			if ( ! empty( $media ) ) {
				$image = Hf()->get_media( $media );
				if ( $image ) {
					$args['image'] = $image;
				}
			}

			// Has custom shortcode.
			$args['shortcode'] = trim( get_post_meta( $post_id, '_Hf_page_header_shortcode', true ) );
			if ( $args['shortcode'] ) {
				$args['display'] = 'shortcode';
			}
		}

		if ( ! $args['display'] ) {
			$args['display'] = 'default';
		}

		self::$_settings = apply_filters( 'Hf/page-header/get-settings', $args );

		return $args;
	}

	function display_page_title( $show ) {
		$args = $this->get_settings();
		if ( ! $args['display'] || 'default' == $args['display'] ) {
			$show = true;
		} elseif ( 'cover' == $args['display'] || 'titlebar' == $args['display'] || 'none' == $args['display'] ) {
			$show = false;
		}
		if ( 'hide' == $args['force_display_single_title'] ) {
			$show = false;
		} elseif ( 'show' == $args['force_display_single_title'] ) {
			$show = true;
		}

		return $show;
	}

	function render_cover( $args = array() ) {
		$args = $this->get_settings();
		extract( $args, EXTR_SKIP ); // phpcs:ignore

		$style = '';
		if ( $args['image'] ) {
			$style = ' style="background-image: url(\'' . esc_url( $args['image'] ) . '\')" ';
		}

		if ( ! $args['title_tag'] ) {
			$args['title_tag'] = 'h2';
		}

		$layout    = Hf()->get_setting_tab( 'page_header_layout' );
		$classes   = array( 'page-header--item page-cover' );
		$classes[] = $layout;

		?>
		<div id="page-cover" class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"<?php echo $style; ?>>
			<div class="page-cover-inner Hf-container">
				<?php
				do_action( 'Hf/page-cover/before' );

				if ( Hf()->get_setting( 'header_cover_show_title' ) ) {
					if ( $args['title'] ) {
						// WPCS: XSS ok.
						echo '<' . $args['title_tag'] . ' class="page-cover-title">' . apply_filters( 'Hf_the_title', wp_kses_post( $args['title'] ) ) . '</' . $args['title_tag'] . '>';
					}
				}
				if ( $args['cover_tagline'] ) {
					if ( $args['tagline'] ) {
						// WPCS: XSS ok.
						echo '<div class="page-cover-tagline-wrapper"><div class="page-cover-tagline">' . apply_filters( 'Hf_the_title', wp_kses_post( $args['tagline'] ) ) . '</div></div>';
					}
				}

				do_action( 'Hf/page-cover/after' );
				?>
			</div>
		</div>
		<?php
	}

	function render_titlebar( $args = array() ) {

		$classes   = array( 'page-header--item page-titlebar' );
		$layout    = Hf()->get_setting_tab( 'page_header_layout' );
		$classes[] = $layout;
		?>
		<div id="page-titlebar" class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
			<div class="page-titlebar-inner Hf-container">
				<?php
				/**
				 * Hook titlebar before
				 */
				do_action( 'Hf/titlebar/before' );

				// WPCS: XSS ok.
				if ( Hf()->get_setting( 'titlebar_show_title' ) ) {
					if ( $args['title'] ) {
						echo '<' . $args['title_tag'] . ' class="titlebar-title h4">' . apply_filters( 'Hf_the_title', wp_kses_post( $args['title'] ) ) . '</' . $args['title_tag'] . '>';
					}
				}
				if ( $args['titlebar_tagline'] ) {
					if ( $args['tagline'] ) {
						// WPCS: XSS ok.
						echo '<div class="titlebar-tagline">' . apply_filters( 'Hf_the_title', wp_kses_post( $args['tagline'] ) ) . '</div>';
					}
				}
				/**
				 * Hook titlebar after
				 */
				do_action( 'Hf/titlebar/after' );
				?>
			</div>
		</div>
		<?php
	}

	function render() {
		$args = $this->get_settings();
		if ( 'none' == $args['display'] ) {
			return '';
		}

		switch ( $args['display'] ) {
			case 'cover':
				$this->render_cover( $args );
				break;
			case 'titlebar':
				$this->render_titlebar( $args );
				break;
			case 'shortcode':
				echo '<div class="page-header-shortcode">' . apply_filters( 'Hf_the_content', $args['shortcode'] ) . '</div>';
				break;
		}

	}

}

Hf_Page_Header::get_instance();
