<?php

class HeaderFooter_Builder_Item_HTML {
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
	public $panel = 'header_settings'; //TODO this setting should be inherited from base class so it can be dynamic

	/**
	 * Optional construct
	 *
	 * HeaderFooter_Builder_Item_HTML constructor.
	 */
	function __construct() {
		$this->label = __( 'HTML 1', 'header_footer' );
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
				'default'         => __( 'Add custom text here or remove it', 'customify' ),
				'title'           => __( 'HTML', 'customify' ),
				'description'     => __( 'Arbitrary HTML code.', 'customify' ),
			),

			array(
				'name'       => $this->name . '_typo',
				'type'       => 'typography',
				'section'    => $this->section,
				'selector'   => '.builder-header-' . $this->id . '-item.item--html p, .builder-header-' . $this->id . '-item.item--html',
				'css_format' => 'typography',
				'title'      => __( 'Typography Setting', 'customify' ),
			),

		);

		// Item Layout.
		return array_merge( $config, customify_header_layout_settings( $this->id, $this->section ) );
	}

	/**
	 * Optional. Render item content
	 */
	function render() {
		$content = Customify()->get_setting( $this->name );
		echo '<div class="builder-header-' . esc_attr( $this->id ) . '-item item--html">';
		echo apply_filters( 'customify_the_content', wp_kses_post( balanceTags( $content, true ) ) );
		echo '</div>';
	}
}

HeaderFooterLayoutBuilder()->register_item( 'header', new HeaderFooter_Builder_Item_HTML() );
