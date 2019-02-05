<?php

class Hf_Builder_Item_HTML {
	/**
	 * @var string Required
	 */
	public $id = 'html';
	/**
	 * @var string Optional
	 */
	public $section = 'header_html';
	/**
	 * @var string Optional
	 */
	public $name = 'header_html';
	/**
	 * @var string Optional
	 */
	public $label = '';
	public $priority = 200;
	public $panel = 'header_settings';

	/**
	 * Optional construct
	 *
	 * Hf_Builder_Item_HTML constructor.
	 */
	function __construct() {
		$this->label = __( 'HTML 1', 'Hf' );
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
			'width'   => '4',
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
		$fn     = array( $this, 'render' );
		$config = array(
			array(
				'name'     => $this->section,
				'type'     => 'section',
				'panel'    => $this->panel,
				'priority' => $this->priority,
				'title'    => $this->label,
			),

			array(
				'name'            => $this->name,
				'type'            => 'textarea',
				'section'         => $this->section,
				'selector'        => '.builder-header-' . $this->id . '-item',
				'render_callback' => $fn,
				'theme_supports'  => '',
				'default'         => __( 'Add custom text here or remove it', 'Hf' ),
				'title'           => __( 'HTML', 'Hf' ),
				'description'     => __( 'Arbitrary HTML code.', 'Hf' ),
			),

			array(
				'name'       => $this->name . '_typo',
				'type'       => 'typography',
				'section'    => $this->section,
				'selector'   => '.builder-header-' . $this->id . '-item.item--html p, .builder-header-' . $this->id . '-item.item--html',
				'css_format' => 'typography',
				'title'      => __( 'Typography Setting', 'Hf' ),
			),

		);

		// Item Layout.
		return array_merge( $config, Hf_header_layout_settings( $this->id, $this->section ) );
	}

	/**
	 * Optional. Render item content
	 */
	function render() {
		$content = Hf()->get_setting( $this->name );
		echo '<div class="builder-header-' . esc_attr( $this->id ) . '-item item--html">';
		echo apply_filters( 'Hf_the_content', wp_kses_post( balanceTags( $content, true ) ) );
		echo '</div>';
	}
}

Hf_Customize_Layout_Builder()->register_item( 'header', new Hf_Builder_Item_HTML() );
