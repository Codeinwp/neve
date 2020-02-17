<?php
/**
 * Custom Component class for Header Footer Grid.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core\Components;

use HFG\Core\Settings\Manager as SettingsManager;
use HFG\Main;

/**
 * Class Copyright
 *
 * @package HFG\Core\Components
 */
class CustomHtml extends Abstract_Component {
	const CONTENT_ID   = 'content';
	const COMPONENT_ID = 'custom_html';
	const COLOR_ID     = 'color';

	/**
	 * CustomHtml constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function init() {
		$this->set_property( 'label', __( 'HTML', 'neve' ) );
		$this->set_property( 'id', $this->get_class_const( 'COMPONENT_ID' ) );
		$this->set_property( 'width', 3 );
		$this->set_property( 'component_slug', 'hfg-html' );
		$this->set_property( 'icon', 'welcome-write-blog' );
		$this->set_property( 'has_typeface_control', true );
		$this->set_property( 'default_typography_selector', $this->default_typography_selector . '.builder-item--' . $this->get_id() . ' .nv-html-content' );
		add_filter( 'wp_kses_allowed_html', array( $this, 'allow_input_form_tags' ), 10, 2 );
	}

	/**
	 * Add form and input tag to allowed tags in header_footer_grid context.
	 *
	 * @param array        $tags    HTML Tags.
	 * @param string|array $context The context for which to retrieve tags.
	 *
	 * @return array
	 */
	public function allow_input_form_tags( $tags, $context ) {
		if ( $context !== 'header_footer_grid' ) {
			return $tags;
		}
		$tags              = wp_kses_allowed_html( 'post' );
		$global_attributes = array(
			'accesskey'       => true,
			'class'           => true,
			'contenteditable' => true,
			'data-*'          => true,
			'dir'             => true,
			'draggable'       => true,
			'dropzone'        => true,
			'hidden'          => true,
			'id'              => true,
			'lang'            => true,
			'spellcheck'      => true,
			'style'           => true,
			'tabindex'        => true,
			'title'           => true,
			'translate'       => true,
		);
		$input_attributes  = array(
			'accept'         => true,
			'align'          => true,
			'alt'            => true,
			'autocomplete'   => true,
			'autofocus'      => true,
			'checked'        => true,
			'dirname'        => true,
			'disabled'       => true,
			'form'           => true,
			'formaction'     => true,
			'formenctype'    => true,
			'formmethod'     => true,
			'formnovalidate' => true,
			'formtarget'     => true,
			'height'         => true,
			'list'           => true,
			'max'            => true,
			'maxlength'      => true,
			'min'            => true,
			'multiple'       => true,
			'name'           => true,
			'pattern'        => true,
			'placeholder'    => true,
			'readonly'       => true,
			'required'       => true,
			'size'           => true,
			'src'            => true,
			'step'           => true,
			'type'           => true,
			'value'          => true,
			'width'          => true,
		);
		$form_attributes   = array(
			'accept'         => true,
			'accept-charset' => true,
			'action'         => true,
			'autocomplete'   => true,
			'enctype'        => true,
			'method'         => true,
			'name'           => true,
			'nonvalidate'    => true,
			'target'         => true,
		);

		$tags['input'] = array_merge( $input_attributes, $global_attributes );
		$tags['form']  = array_merge( $form_attributes, $global_attributes );

		return $tags;
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_settings() {
		SettingsManager::get_instance()->add(
			[
				'id'                 => self::CONTENT_ID,
				'group'              => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                => SettingsManager::TAB_GENERAL,
				'transport'          => 'post' . $this->get_class_const( 'COMPONENT_ID' ),
				'sanitize_callback'  => 'wp_kses_post',
				'default'            => get_theme_mod( 'neve_top_bar_content', '' ),
				'preview_default'    => '',
				'label'              => __( 'HTML', 'neve' ),
				'description'        => __( 'Arbitrary HTML code. It supports also shortcodes.', 'neve' ),
				'type'               => 'textarea',
				'section'            => $this->section,
				'use_dynamic_fields' => array( 'string', 'url' ),
				'conditional_header' => true,
			]
		);

		SettingsManager::get_instance()->add(
			[
				'id'                    => self::COLOR_ID,
				'group'                 => $this->get_class_const( 'COMPONENT_ID' ),
				'tab'                   => SettingsManager::TAB_STYLE,
				'transport'             => 'postMessage',
				'sanitize_callback'     => 'sanitize_hex_color',
				'label'                 => __( 'Text Color', 'neve' ),
				'type'                  => 'neve_color_control',
				'section'               => $this->section,
				'live_refresh_selector' => true,
				'live_refresh_css_prop' => [
					[
						'selector' => $this->default_typography_selector . ', ' . $this->default_typography_selector . ' *:not(a)',
						'prop'     => 'color',
						'fallback' => 'inherit',
					],
				],
				'conditional_header'    => $this->get_builder_id() === 'header',
			]
		);
	}

	/**
	 * Method to add Component css styles.
	 *
	 * @param array $css_array An array containing css rules.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function add_style( array $css_array = array() ) {
		$color = SettingsManager::get_instance()->get( $this->get_id() . '_' . self::COLOR_ID );
		if ( ! empty( $color ) ) {
			$css_array[ $this->default_typography_selector ]        = [ 'color' => sanitize_hex_color( $color ) ];
			$css_array[ $this->default_typography_selector . ' *' ] = [ 'color' => sanitize_hex_color( $color ) ];
		}

		return parent::add_style( $css_array );
	}

	/**
	 * The render method for the component.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function render_component() {
		Main::get_instance()->load( 'components/component-html' );
	}
}
