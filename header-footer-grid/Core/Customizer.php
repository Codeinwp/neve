<?php
namespace HFG\Core;

use HFG\Config\Customizer\Style;
use HFG\Config\Customizer\Typography;
use HFG\Traits\Core;

class Customizer {
	use Core;

	private $config;
	private $has_icon;
	private $has_font;

	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 */
	function preview_js() {
		if ( is_customize_preview() ) {
			$suffix = $this->get_assets_suffix();

			wp_enqueue_script( 'hfg-customizer-auto-css', esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/js/customizer/auto-css' . $suffix . '.js', array( 'customize-preview' ), '20151215', true );
			wp_enqueue_script(
				'hfg-customizer',
				esc_url( get_template_directory_uri() ) . '/header-footer-grid/assets/js/customizer/customizer' . $suffix . '.js',
				array(
					'customize-preview',
					'customize-selective-refresh',
				),
				'20151215',
				true
			);
			wp_localize_script(
				'hfg-customizer-auto-css',
				'HFPreviewConfig',
				array(
					'fields'         => $this->get_config(),
					'devices'        => array( 'desktop', 'tablet', 'mobile' ),//$this->devices,
					'typo_fields'    => $this->get_typo_fields(),
					'styling_config' => $this->get_styling_config(),
				)
			);
		}
	}

	private function sanitize_conf( $conf ) {
		return wp_parse_args(
			$conf,
			array(

				'priority'    => null,
				'title'       => null,
				'label'       => null,
				'name'        => null,
				'type'        => null,
				'description' => null,
				'capability'  => null,
				'mod'         => null, // Can be theme_mod or option, default theme_mod.
				'settings'    => null,

				'active_callback'      => null, // For control.

				/**
				 * For settings
				 */
				'sanitize_callback'    => array( 'HFG_Sanitize_Input', 'sanitize_customizer_input' ),
				'sanitize_js_callback' => null,
				'theme_supports'       => null,
				'default'              => null,

				/**
				 * For selective refresh
				 */
				'selector'             => null,
				'render'               => null, // same render_callback.
				'render_callback'      => null,
				'css_format'           => null,

				'device'          => null,
				'device_settings' => null,

				'field_class' => null, // Custom class for control.
			)
		);
	}

	public function get_config( $wp_customize = null ) {
		if ( is_null( $this->config ) ) {
			$filter_config = apply_filters( 'hfg/customizer/config', array(), $wp_customize );
			foreach ( $filter_config as $conf ) {
				$conf = $this->sanitize_conf( $conf );

				if ( ! isset( $conf['type'] ) ) {
					$conf['type'] = null;
				}

				switch ( $conf['type'] ) {
					case 'panel':
						$filter_config[ 'panel|' . $conf['name'] ] = $conf;
						break;
					case 'section':
						$filter_config[ 'section|' . $conf['name'] ] = $conf;
						break;
					default:
						if ( 'icon' == $conf['type'] ) {
							$this->has_icon = true;
						}

						if ( 'font' == $conf['type'] ) {
							$this->has_font = true;
						}

						if ( isset( $conf['fields'] ) && ! in_array( $conf['type'], array( 'typography', 'styling', 'modal' ) ) ) {
							$types = wp_list_pluck( $conf['fields'], 'type' );
							if ( in_array( 'icon', $types ) ) {
								$this->has_icon = true;
							}

							if ( in_array( 'font', $types ) ) {
								$this->has_font = true;
							}
						}

						$filter_config[ 'setting|' . $conf['name'] ] = $conf;

				}
			}
			$this->config = $filter_config;
		}
		return $this->config;
	}

	public function get_typo_fields() {
		return new Typography();
	}

	public function get_styling_config() {
		$fields = new Style();
		return apply_filters( 'hfg/get_styling_config', $fields );
	}
}