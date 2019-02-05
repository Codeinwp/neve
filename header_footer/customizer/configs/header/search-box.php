<?php

class Hf_Builder_Item_Search_Box {
	public $id = 'search_box';
	public $section = 'search_box';
	public $name = 'search_box';
	public $label = '';

	/**
	 * Optional construct
	 *
	 * Hf_Builder_Item_HTML constructor.
	 */
	function __construct() {
		$this->label = __( 'Search Box', 'Hf' );
	}

	/**
	 * Register Builder item
	 *
	 * @return array
	 */
	function item() {
		return array(
			'name'    => $this->label,
			'id'      => $this->id,
			'col'     => 0,
			'width'   => '1',
			'section' => $this->section, // Customizer section to focus when click settings.
		);
	}

	/**
	 * Optional, Register customize section and panel.
	 *
	 * @return array
	 */
	function customize() {
		// Render callback function.
		$fn       = array( $this, 'render' );
		$selector = ".header--row .header-{$this->id}-item";

		$icon_postion_css = "$selector .search-submit{margin-left: {{value}};} $selector .woo_bootster_search .search-submit{margin-left: {{value}};}";
		if ( is_rtl() ) {
			$icon_postion_css = ".rtl $selector .search-submit{margin-right: {{value}}; margin-left:auto;} .rtl $selector .woo_bootster_search .search-submit{margin-left: {{value}};margin-left:auto;}";
		}
		$config   = array(
			array(
				'name'  => $this->section,
				'type'  => 'section',
				'panel' => 'header_settings',
				'title' => $this->label,
			),

			array(
				'name'            => $this->section . '_placeholder',
				'type'            => 'text',
				'section'         => $this->section,
				'selector'        => "$selector",
				'render_callback' => $fn,
				'label'           => __( 'Placeholder', 'Hf' ),
				'default'         => __( 'Search ...', 'Hf' ),
				'priority'        => 10,
			),

			array(
				'name'            => $this->section . '_width',
				'type'            => 'slider',
				'device_settings' => true,
				'section'         => $this->section,
				'selector'        => "$selector .search-form-fields",
				'css_format'      => 'width: {{value}};',
				'label'           => __( 'Search Form Width', 'Hf' ),
				'description'     => __( 'Note: The width can not greater than grid width.', 'Hf' ),
				'priority'        => 15,
			),

			array(
				'name'            => $this->section . '_height',
				'type'            => 'slider',
				'device_settings' => true,
				'section'         => $this->section,
				'min'             => 25,
				'step'            => 1,
				'max'             => 100,
				'selector'        => "$selector .search-form-fields",
				'css_format'      => 'height: {{value}};',
				'label'           => __( 'Input Height', 'Hf' ),
				'priority'        => 20,
			),

			array(
				'name'            => $this->section . '_icon_size',
				'type'            => 'slider',
				'device_settings' => true,
				'section'         => $this->section,
				'min'             => 5,
				'step'            => 1,
				'max'             => 100,
				'selector'        => "$selector .search-submit svg",
				'css_format'      => 'height: {{value}}; width: {{value}};',
				'label'           => __( 'Icon Size', 'Hf' ),
				'priority'        => 25,
			),

			array(
				'name'            => $this->section . '_icon_pos',
				'type'            => 'slider',
				'device_settings' => true,
				'default'         => array(
					'desktop' => array(
						'value' => - 40,
						'unit'  => 'px',
					),
					'tablet'  => array(
						'value' => - 40,
						'unit'  => 'px',
					),
					'mobile'  => array(
						'value' => - 40,
						'unit'  => 'px',
					),
				),
				'section'         => $this->section,
				'min'             => - 150,
				'step'            => 1,
				'max'             => 90,
				'selector'        => 'format',
				'css_format'      => $icon_postion_css,
				'label'           => __( 'Icon Position', 'Hf' ),
				'priority'        => 30,
			),

			array(
				'name'        => $this->section . '_font_size',
				'type'        => 'typography',
				'section'     => $this->section,
				'selector'    => "$selector .search-form-fields",
				'css_format'  => 'typography',
				'label'       => __( 'Input Text Typography', 'Hf' ),
				'description' => __( 'Typography for search input', 'Hf' ),
				'priority'        => 35,
			),

			array(
				'name'        => $this->section . '_input_styling',
				'type'        => 'styling',
				'section'     => $this->section,
				'css_format'  => 'styling',
				'title'       => __( 'Input Styling', 'Hf' ),
				'description' => __( 'Search input styling', 'Hf' ),
				'selector'    => array(
					'normal'            => "{$selector} .search-form-fields",
					'hover'             => "{$selector} .search-form-fields",
					'normal_text_color' => "{$selector} .search-form-fields, {$selector} .search-form-fields input.search-field::placeholder",
				),
				'default'     => array(
					'normal' => array(
						'border_style' => 'solid',
					),
				),
				'fields'      => array(
					'normal_fields' => array(
						'link_color'    => false, // disable for special field.
						'bg_cover'      => false,
						'bg_image'      => false,
						'bg_repeat'     => false,
						'bg_attachment' => false,
						'margin'        => false,
					),
					'hover_fields'  => array(
						'link_color'    => false,
						'padding'       => false,
						'bg_cover'      => false,
						'bg_image'      => false,
						'bg_repeat'     => false,
						'border_radius' => false,
					), // disable hover tab and all fields inside.
				),
				'priority'        => 40,
			),

			array(
				'name'        => $this->section . '_icon_styling',
				'type'        => 'styling',
				'section'     => $this->section,
				'css_format'  => 'styling',
				'title'       => __( 'Icon Styling', 'Hf' ),
				'description' => __( 'Search input styling', 'Hf' ),
				'selector'    => array(
					'normal' => "{$selector} .search-submit",
					'hover'  => "{$selector} .search-submit:hover",
				),
				'fields'      => array(
					'normal_fields' => array(
						'link_color'    => false, // disable for special field.
						'bg_cover'      => false,
						'bg_image'      => false,
						'bg_repeat'     => false,
						'bg_attachment' => false,
						'margin'        => false,
					),
					'hover_fields'  => array(
						'link_color'    => false,
						'padding'       => false,
						'bg_cover'      => false,
						'bg_image'      => false,
						'bg_repeat'     => false,
						'bg_attachment' => false,
						'border_radius' => false,
					), // disable hover tab and all fields inside.
				),
				'priority'        => 45,
			),

		);

		// Item Layout.
		return array_merge( $config, Hf_header_layout_settings( $this->id, $this->section ) );
	}

	/**
	 * Optional. Render item content
	 */
	function render() {
		$form_extra_class = apply_filters( 'Hf/builder_item/search-box/form_extra_class', array() );
		$placeholder = Hf()->get_setting( $this->section . '_placeholder' );
		$placeholder = sanitize_text_field( $placeholder );
		/**
		 * Hook: Hf/builder_item/search-box/before_html
		 *
		 * @since 0.2.8
		 */
		do_action( 'Hf/builder_item/search-box/before_html' );

		echo '<div class="header-' . esc_attr( $this->id ) . '-item item--' . esc_attr( $this->id ) . '">';
		?>
		<form role="search" class="header-search-form <?php echo esc_attr( implode( ' ', $form_extra_class ) ); ?>" action="<?php echo esc_url( home_url( '/' ) ); ?>">
			<div class="search-form-fields">
				<span class="screen-reader-text"><?php echo _x( 'Search for:', 'label', 'Hf' ); ?></span>
				<?php
				/**
				 * Hook: Hf/builder_item/search-box/html_content/before_input
				 *
				 * @since 0.2.8
				 */
				do_action( 'Hf/builder_item/search-box/html_content/before_input' );
				?>

				<input type="search" class="search-field" placeholder="<?php echo esc_attr( $placeholder ); ?>" value="<?php echo get_search_query(); ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label', 'Hf' ); ?>" />

				<?php
				/**
				 * Hook: Hf/builder_item/search-box/html_content/after_input
				 *
				 * @since 0.2.8
				 */
				do_action( 'Hf/builder_item/search-box/html_content/after_input' );
				?>
			</div>
			<button type="submit" class="search-submit">
				<svg aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
					<path fill="currentColor" fill-rule="evenodd" d="M12.514 14.906a8.264 8.264 0 0 1-4.322 1.21C3.668 16.116 0 12.513 0 8.07 0 3.626 3.668.023 8.192.023c4.525 0 8.193 3.603 8.193 8.047 0 2.033-.769 3.89-2.035 5.307l4.999 5.552-1.775 1.597-5.06-5.62zm-4.322-.843c3.37 0 6.102-2.684 6.102-5.993 0-3.31-2.732-5.994-6.102-5.994S2.09 4.76 2.09 8.07c0 3.31 2.732 5.993 6.102 5.993z"></path>
				</svg>
			</button>
		</form>
		<?php
		echo '</div>';

		/**
		 * Hook: Hf/builder_item/search-box/after_html
		 *
		 * @since 0.2.8
		 */
		do_action( 'Hf/builder_item/search-box/after_html' );
	}
}

Hf_Customize_Layout_Builder()->register_item( 'header', new Hf_Builder_Item_Search_Box() );
