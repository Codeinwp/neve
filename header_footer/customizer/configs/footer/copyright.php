<?php

class Hf_Builder_Footer_Item_Copyright {
	public $id = 'footer_copyright';
	public $section = 'footer_copyright';
	public $name = 'footer_copyright';
	public $label = '';

	/**
	 * Optional construct
	 */
	function __construct() {
		$this->label = __( 'Copyright', 'Hf' );
	}

	/**
	 * Register Builder item
	 *
	 * @return array
	 */
	function item() {
		return array(
			'name'    => __( 'Copyright', 'Hf' ),
			'id'      => $this->id,
			'col'     => 0,
			'width'   => '6',
			'section' => $this->section, // Customizer section to focus when click settings.
		);
	}

	/**
	 * Optional, Register customize section and panel.
	 *
	 * @return array
	 */
	function customize() {
		$fn = array( $this, 'render' );

		$config = array(
			array(
				'name'  => $this->section,
				'type'  => 'section',
				'panel' => 'footer_settings',
				'title' => $this->label,
			),

			array(
				'name'            => $this->name,
				'type'            => 'textarea',
				'section'         => $this->section,
				'selector'        => '.builder-footer-copyright-item',
				'render_callback' => $fn,
				'theme_supports'  => '',
				'default'         => __( 'Copyright &copy; {current_year} {site_title} - Powered by {theme_author}.', 'Hf' ),
				'title'           => __( 'Copyright Text', 'Hf' ),
				'description'     => __( 'Arbitrary HTML code or shortcode. Available tags: {current_year}, {site_title}, {theme_author}', 'Hf' ),
			),

			array(
				'name'       => $this->name . '_typography',
				'type'       => 'typography',
				'section'    => $this->section,
				'title'      => __( 'Copyright Text Typography', 'Hf' ),
				'selector'   => '.builder-item--footer_copyright, .builder-item--footer_copyright p',
				'css_format' => 'typography',
				'default'    => array(),
			),
		);

		return array_merge( $config, Hf_footer_layout_settings( $this->id, $this->section ) );
	}

	/**
	 * Optional. Render item content
	 */
	function render() {
		$tags = array(
			'current_year' => date_i18n( 'Y' ),
			'site_title'   => get_bloginfo( 'name' ),
			'theme_author' => sprintf( '<a href="https://wpHf.com">%1$s</a>', 'Hf' ), // Brand name.
		);

		$content = Hf()->get_setting( $this->name );

		foreach ( $tags as $k => $v ) {
			$content = str_replace( '{' . $k . '}', $v, $content );
		}

		echo '<div class="builder-footer-copyright-item footer-copyright">';
		echo apply_filters( 'Hf_the_content', wp_kses_post( balanceTags( $content, true ) ) ); // WPCS: XSS OK.
		echo '</div>';
	}
}

Hf_Customize_Layout_Builder()->register_item( 'footer', new Hf_Builder_Footer_Item_Copyright() );
