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

use HFG\Core\Customizer\Slider_Control;
use HFG\Core\Customizer\Text_Radio_Control;
use HFG\Core\Customizer\Toggle_Control;
use HFG\Core\Settings;
use WP_Customize_Manager;

/**
 * Class Logo
 *
 * @package HFG\Core\Components
 */
class Logo extends Abstract_Component {

	/**
	 * Logo constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param string $panel The panel name.
	 */
	public function __construct( $panel ) {
		$this->set_property( 'label', __( 'Logo & Site Identity', 'hfg-module' ) );
		$this->set_property( 'id', 'logo' );
		$this->set_property( 'width', 2 );
		$this->set_property( 'section', 'title_tagline' );
		$this->set_property( 'panel', $panel );
	}

	/**
	 * Called to register component controls.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @return WP_Customize_Manager
	 */
	public function customize_register( WP_Customize_Manager $wp_customize ) {
		$fn       = array( $this, 'render' );
		$selector = '.builder-item--' . $this->id;

		$wp_customize->add_section(
			$this->section, array(
				'title'    => $this->label,
				'priority' => 30,
				'panel'    => $this->panel,
			)
		);

		$wp_customize->add_setting(
			$this->id . '_max_width',
			array(
				'default'        => 120,
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Slider_Control(
				$wp_customize,
				$this->id . '_max_width',
				[
					'label'       => esc_html__( 'Logo Max Width', 'hfg-module' ),
					'section'     => $this->section,
					'input_attrs' => array(
						'min'  => 50,
						'max'  => 400,
						'step' => 1,
					),
				]
			)
		);

		$wp_customize->add_setting(
			$this->id . '_show_title',
			array(
				'default'        => 1,
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Toggle_Control(
				$wp_customize,
				$this->id . '_show_title',
				[
					'label'   => esc_html__( 'Show Site Title', 'hfg-module' ),
					'section' => $this->section,
				]
			)
		);

		$wp_customize->add_setting(
			$this->id . '_show_tagline',
			array(
				'default'        => 1,
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Toggle_Control(
				$wp_customize,
				$this->id . '_show_tagline',
				[
					'label'   => esc_html__( 'Show Site Tagline', 'hfg-module' ),
					'section' => $this->section,
				]
			)
		);

		$wp_customize->add_setting(
			$this->id . '_logo_pos',
			array(
				'default'        => 'top',
				'theme_supports' => 'hfg_support',
				'transport'      => 'postMessage',
			)
		);
		$wp_customize->add_control(
			new Text_Radio_Control(
				$wp_customize,
				$this->id . '_logo_pos',
				[
					'label'   => __( 'Logo Position' ),
					'section' => $this->section,
					'choices' => array(
						'top'    => __( 'Top', 'hfg-module' ),
						'left'   => __( 'Left', 'hfg-module' ),
						'right'  => __( 'Right', 'hfg-module' ),
						'bottom' => __( 'Bottom', 'hfg-module' ),
					),
				]
			)
		);

		$wp_customize->selective_refresh->add_partial(
			$this->id . '_partial', array(
				'selector'        => $selector,
				'settings'        => array(
					$this->id . '_max_width',
					$this->id . '_show_title',
					$this->id . '_show_tagline',
					$this->id . '_logo_pos',
				),
				'render_callback' => $fn,
			)
		);

		return parent::customize_register( $wp_customize );
	}

	/**
	 * Render logo.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @param string $html The HTML.
	 */
	protected function render_logo( &$html ) {
		$settings          = Settings::get_instance();
		$custom_logo_id    = get_theme_mod( 'custom_logo' );
		$logo_image        = $settings->get_media( $custom_logo_id, 'full' );
		$logo_retina       = '';
		$logo_retina_image = $settings->get_media( $logo_retina );

		if ( $logo_image ) {
			$html .= '<a href="' . esc_url( home_url( '/' ) ) . '" class="logo-link" rel="home" itemprop="url">';
			$html .= '<img class="site-img-logo" src="' . esc_url( $logo_image ) . '" alt="' . __( 'Logo', 'hfg-module' ) . '" ' . ( ( $logo_retina_image ) ? 'srcset="' . esc_url( $logo_retina_image ) . ' 2x"' : '' ) . '>';
			$html .= '</a>';
		}
	}

	/**
	 * Render the title.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @param string $html The HTML.
	 */
	protected function render_name( &$html ) {
		$html .= '<h1 class="site-title">';
		$html .= '<a href="' . esc_url( home_url( '/' ) ) . '" rel="home">' . get_bloginfo( 'name', 'display' ) . '</a>';
		$html .= '</h1>';
	}

	/**
	 * Render the tag line.
	 *
	 * @since   1.0.0
	 * @access  protected
	 * @param string $html The HTML.
	 */
	protected function render_description( &$html ) {
		$description = get_bloginfo( 'description', 'display' );
		if ( $description || is_customize_preview() ) {
			$html .= '<p class="site-description text-uppercase text-xsmall">' . $description . '</p>';
		}
	}

	/**
	 * The render method.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return mixed|string
	 */
	public function render() {
		$html           = '';
		$item_classes   = array();
		$item_classes[] = 'item--inner';
		$item_classes[] = 'builder-item--' . $this->id;
		if ( strpos( $this->id, '-menu' ) ) {
			$item_classes[] = 'has_menu';
		}
		if ( is_customize_preview() ) {
			$item_classes[] = ' builder-item-focus';
		}

		$show_name      = get_theme_mod( $this->id . '_show_title', 1 );
		$show_desc      = get_theme_mod( $this->id . '_show_tagline', 1 );
		$image_position = get_theme_mod( $this->id . '_logo_pos' );
		$logo_classes   = array( 'nv-nav-header', 'site-branding' );
		$logo_classes[] = 'logo-' . $image_position;
		$item_classes   = join( ' ', $item_classes );

		$html .= '<div class="' . esc_attr( $item_classes ) . '" data-section="' . $this->section . '" data-item-id="' . esc_attr( $this->id ) . '" >';
		$html .= '<div class="' . esc_attr( join( ' ', $logo_classes ) ) . '">';
		$html .= $this->render_logo( $html );
		if ( $show_name || $show_desc ) {
			$html .= '<div class="site-name-desc">';
			if ( $show_name ) {
				$html .= $this->render_name( $html );
			}
			if ( $show_desc ) {
				$html .= $this->render_description( $html );
			}
			$html .= '</div>';
		}
		$html .= '</div>';
		if ( is_customize_preview() ) {
			$html .= '<span class="item--preview-name">' . esc_html( $this->label ) . '</span>';
		}
		$html .= '</div>';

		return $html;
	}
}
