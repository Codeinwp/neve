<?php

class Hf_Builder_Item_Primary_Menu {
	public $id;
	public $label;
	public $prefix;
	public $selector;
	public $section;
	public $theme_location;

	/**
	 * Optional construct
	 *
	 * Hf_Builder_Item_HTML constructor.
	 */
	function __construct() {
		$this->id             = 'primary-menu';
		$this->label          = __( 'Primary Menu', 'Hf' );
		$this->prefix         = 'primary_menu';
		$this->selector       = '.builder-item--' . $this->id . ' .nav-menu-desktop .primary-menu-ul';
		$this->section        = 'header_menu_primary';
		$this->theme_location = 'menu-1';
	}

	function item() {
		return array(
			'name'    => $this->label,
			'id'      => $this->id,
			'width'   => '6',
			'section' => $this->section, // Customizer section to focus when click settings.
		);
	}

	function customize() {
		$section = $this->section;
		$fn      = array( $this, 'render' );
		$config  = array(
			array(
				'name'           => $section,
				'type'           => 'section',
				'panel'          => 'header_settings',
				'theme_supports' => '',
				'title'          => $this->label,
				'description'    => sprintf( __( 'Assign <a href="#menu_locations"  class="focus-section">Menu Location</a> for %1$s', 'Hf' ), $this->label ),
			),

			array(
				'name'            => $this->prefix . '_style',
				'type'            => 'image_select',
				'section'         => $section,
				'selector'        => '.builder-item--' . $this->id . " .{$this->id}",
				'render_callback' => $fn,
				'title'           => __( 'Menu Preset', 'Hf' ),
				'default'         => 'style-plain',
				'css_format'      => 'html_class',
				'choices'         => array(
					'style-plain'         => array(
						'img' => esc_url( get_template_directory_uri() ) . '/assets/images/customizer/menu_style_1.svg',
					),
					'style-full-height'   => array(
						'img' => esc_url( get_template_directory_uri() ) . '/assets/images/customizer/menu_style_2.svg',
					),
					'style-border-bottom' => array(
						'img' => esc_url( get_template_directory_uri() ) . '/assets/images/customizer/menu_style_3.svg',
					),
					'style-border-top'    => array(
						'img' => esc_url( get_template_directory_uri() ) . '/assets/images/customizer/menu_style_4.svg',
					),
				),
			),

			array(
				'name'       => $this->prefix . '_style_border_h',
				'type'       => 'slider',
				'section'    => $section,
				'selector'   => 'format',
				'max'        => 20,
				'title'      => __( 'Border Height', 'Hf' ),
				'css_format' => ".nav-menu-desktop.style-border-bottom .{$this->id}-ul > li > a .link-before:before, .nav-menu-desktop.style-border-top .{$this->id}-ul > li > a .link-before:before  { height: {{value}}; }",
				'required'   => array(
					$this->prefix . '_style',
					'in',
					array( 'style-border-bottom', 'style-border-top' ),
				),
			),

			array(
				'name'       => $this->prefix . '_style_border_pos',
				'type'       => 'slider',
				'section'    => $section,
				'selector'   => 'format',
				'min'        => - 50,
				'max'        => 50,
				'title'      => __( 'Border Position', 'Hf' ),
				'css_format' => ".nav-menu-desktop.style-border-bottom .{$this->id}-ul > li > a .link-before:before { bottom: {{value}}; } .nav-menu-desktop.style-border-top .{$this->id}-ul > li > a .link-before:before { top: {{value}}; }",
				'required'   => array(
					$this->prefix . '_style',
					'in',
					array( 'style-border-bottom', 'style-border-top' ),
				),
			),

			array(
				'name'       => $this->prefix . '_style_border_color',
				'type'       => 'color',
				'section'    => $section,
				'selector'   => 'format',
				'title'      => __( 'Border Color', 'Hf' ),
				'css_format' => ".nav-menu-desktop.style-border-bottom .{$this->id}-ul > li:hover > a .link-before:before, 
                .nav-menu-desktop.style-border-bottom .{$this->id}-ul > li.current-menu-item > a .link-before:before, 
                .nav-menu-desktop.style-border-bottom .{$this->id}-ul > li.current-menu-ancestor > a .link-before:before,
                .nav-menu-desktop.style-border-top .{$this->id}-ul > li:hover > a .link-before:before,
                .nav-menu-desktop.style-border-top .{$this->id}-ul > li.current-menu-item > a .link-before:before, 
                .nav-menu-desktop.style-border-top .{$this->id}-ul > li.current-menu-ancestor > a .link-before:before
                { background-color: {{value}}; }",
				'required'   => array(
					$this->prefix . '_style',
					'in',
					array( 'style-border-bottom', 'style-border-top' ),
				),
			),

			array(
				'name'           => $this->prefix . '__hide-arrow',
				'type'           => 'checkbox',
				'section'        => $section,
				'selector'       => '.builder-item--' . $this->id . " .{$this->id}",
				'checkbox_label' => __( 'Hide menu dropdown arrow', 'Hf' ),
				'css_format'     => 'html_class',
			),

			array(
				'name'            => $this->prefix . '_arrow_size',
				'type'            => 'slider',
				'devices_setting' => true,
				'section'         => $section,
				'selector'        => 'format',
				'max'             => 20,
				'title'           => __( 'Arrow icon size', 'Hf' ),
				'css_format'      => ".builder-item--{$this->id} .nav-icon-angle { width: {{value}}; height: {{value}}; }",
				'required'        => array( $this->prefix . '__hide-arrow', '!=', 1 ),
			),

			array(
				'name'    => $this->prefix . '_top_heading',
				'type'    => 'heading',
				'section' => $section,
				'title'   => __( 'Top Menu', 'Hf' ),
			),

			array(
				'name'        => $this->prefix . '_item_styling',
				'type'        => 'styling',
				'section'     => $section,
				'title'       => __( 'Top Menu Items Styling', 'Hf' ),
				'description' => __( 'Styling for top level menu items', 'Hf' ),
				'selector'    => array(
					'normal'        => "{$this->selector} > li > a",
					'normal_margin' => "{$this->selector} > li",
					'hover'         => ".header--row:not(.header--transparent) {$this->selector} > li > a:hover, .header--row:not(.header--transparent) {$this->selector} > li.current-menu-item > a, .header--row:not(.header--transparent) {$this->selector} > li.current-menu-ancestor > a, .header--row:not(.header--transparent) {$this->selector} > li.current-menu-parent > a",
				),
				'css_format'  => 'styling',
				'fields'      => array(
					'tabs'          => array(
						'normal' => __( 'Normal', 'Hf' ),
						'hover'  => __( 'Hover/Active', 'Hf' ),
					),
					'normal_fields' => array(
						'link_color'    => false,
						'bg_cover'      => false,
						'bg_image'      => false,
						'bg_repeat'     => false,
						'bg_attachment' => false,
						'bg_position'   => false,
					),
					'hover_fields'  => array(
						'link_color'    => false,
						'bg_cover'      => false,
						'bg_image'      => false,
						'bg_repeat'     => false,
						'bg_attachment' => false,
						'bg_position'   => false,
					),
				),
			),

			array(
				'name'        => $this->prefix . '_typography',
				'type'        => 'typography',
				'section'     => $section,
				'title'       => __( 'Top Menu Items Typography', 'Hf' ),
				'description' => __( 'Typography for menu', 'Hf' ),
				'selector'    => "{$this->selector} > li > a",
				'css_format'  => 'typography',
			),

		);

		if ( ! class_exists( 'Hf_Pro' ) ) {
			$config[] = array(
				'name'    => $this->prefix . '_submenu_heading',
				'type'    => 'heading',
				'section' => $section,
				'title'   => __( 'Submenu', 'Hf' ),
			);
			$config[] = array(
				'name'        => $this->prefix . '_typography_submenu',
				'type'        => 'custom_html',
				'section'     => $section,
				'description' => sprintf( __( 'Submenu settings is a part of Advanced Header & Footer builder modules which only available in Hf Pro. <a target="_blank" href="https://wpHf.com/help/documentation/Hf-pro-modules/advanced-header-footer-builder/">Learn more about it here</a>.', 'Hf' ) ),
				'selector'    => "{$this->selector} .sub-menu li a",
			);
		}

		$config = apply_filters( 'Hf/customize-menu-config-more', $config, $section, $this );

		// Item Layout.
		return array_merge( $config, Hf_header_layout_settings( $this->id, $section ) );
	}

	function menu_fallback_cb() {
		$pages = get_pages(
			array(
				'child_of'     => 0,
				'sort_order'   => 'ASC',
				'sort_column'  => 'menu_order, post_title',
				'hierarchical' => 0,
				'parent'       => 0,
				'exclude_tree' => array(),
				'number'       => 10,
			)
		);

		echo '<ul class="' . $this->id . '-ul menu nav-menu menu--pages">';
		foreach ( (array) $pages as $p ) {
			$class = '';
			if ( is_page( $p ) ) {
				$class = 'current-menu-item';
			}

			echo '<li id="menu-item--__id__-__device__-' . esc_attr( $p->ID ) . '" class="menu-item menu-item-type--page  menu-item-' . esc_attr( $p->ID . ' ' . $class ) . '"><a href="' . esc_url( get_the_permalink( $p ) ) . '"><span class="link-before">' . apply_filters( '', $p->post_title ) . '</span></a></li>';
		}
		echo '</ul>';
	}

	/**
	 * @see Walker_Nav_Menu
	 */
	function render() {
		$style = sanitize_text_field( Hf()->get_setting( $this->prefix . '_style' ) );
		if ( $style ) {
			$style = sanitize_text_field( $style );
		}

		$hide_arrow = sanitize_text_field( Hf()->get_setting( $this->prefix . '__hide-arrow' ) );
		if ( $hide_arrow ) {
			$style .= ' hide-arrow-active';
		}

		$container_classes = $this->id . ' ' . $this->id . '-__id__ nav-menu-__device__ ' . $this->id . '-__device__' . ( $style ? ' ' . $style : '' );
		echo '<nav  id="site-navigation-__id__-__device__" class="site-navigation ' . $container_classes . '">';
		wp_nav_menu(
			array(
				'theme_location'  => $this->theme_location,
				'container'       => false,
				'container_id'    => false,
				'container_class' => false,
				'menu_id'         => false,
				'menu_class'      => $this->id . '-ul menu nav-menu',
				'fallback_cb'     => '',
				'link_before'     => '<span class="link-before">',
				'link_after'      => '</span>',
			)
		);

		echo '</nav>';

	}
}

/**
 * Change menu item ID
 *
 * @see Walker_Nav_Menu::start_el();
 *
 * @param string $string_id
 * @param object $item
 * @param object $args An object of wp_nav_menu() arguments.
 *
 * @return mixed
 */
function Hf_change_nav_menu_item_id( $string_id, $item, $args ) {
	if ( 'menu-1' == $args->theme_location || 'menu-2' == $args->theme_location ) {
		$string_id = 'menu-item--__id__-__device__-' . $item->ID;
	}

	return $string_id;
}

add_filter( 'nav_menu_item_id', 'Hf_change_nav_menu_item_id', 55, 3 );


/**
 * Add Nav icon to menu
 *
 * @param string $title
 * @param object $item
 * @param array  $args
 * @param int    $depth
 *
 * @return string
 */
function Hf_add_icon_to_menu( $title, $item, $args, $depth ) {
	if ( in_array( 'menu-item-has-children', $item->classes ) ) { // phpcs:ignore
		$title .= '<span class="nav-icon-angle">&nbsp;</span>';

	}

	return $title;
}

add_filter( 'nav_menu_item_title', 'Hf_add_icon_to_menu', 25, 4 );

/**
 * Add more sub menu classes
 *
 * @since 0.1.1
 * @see   Walker_Nav_Menu::start_lvl
 *
 * @param array $classes
 * @param array $args
 * @param int   $depth
 *
 * @return array
 */
function Hf_add_sub_menu_classes( $classes, $args, $depth ) {
	$classes[] = 'sub-lv-' . $depth;

	return $classes;
}

add_filter( 'nav_menu_submenu_css_class', 'Hf_add_sub_menu_classes', 35, 3 );

// Register header item.
Hf_Customize_Layout_Builder()->register_item( 'header', new Hf_Builder_Item_Primary_Menu() );

