<?php
/**
 * Settings class for Header Footer Grid.
 * Holds all settings for this module.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core;

/**
 * Class Settings
 *
 * @package HFG\Core
 */
class Settings {

	/**
	 * Holds an instance of this class.
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Settings $_instance
	 */
	private static $_instance = null;
	/**
	 * Holds defaults for the builders.
	 *
	 * @var null|array Defaults for all builders.
	 */
	public $defaults = null;
	/**
	 * Holds the file path to the module directory.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var string $path
	 */
	public $path;

	/**
	 * Holds the url to the module directory.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @var string $url
	 */
	public $url;

	/**
	 * Holds the theme support settings.
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var array $theme_support
	 */
	private $theme_support = array();

	/**
	 * Returns the instance of the class.
	 *
	 * @return Settings
	 * @since   1.0.0
	 * @access  public
	 */
	public static function get_instance() {
		if ( null === self::$_instance ) {
			self::$_instance           = new self();
			self::$_instance->path     = get_template_directory() . '/header-footer-grid';
			self::$_instance->defaults = self::$_instance->get_defaults();
			self::$_instance->url      = get_template_directory_uri() . '/header-footer-grid';
			self::$_instance->set();
		}

		return self::$_instance;
	}

	/**
	 * Return default for builders.
	 *
	 * @return array Defaults for builders.
	 */
	public function get_defaults() {
		$builders = [
			'header'     => $this->define_header_defaults_neve(),
			'footer'     => $this->define_footer_defaults_neve(),
			'components' => [],
		];
		foreach ( $builders as $builder_id => $devices ) {
			foreach ( $devices as $device_id => $rows ) {
				foreach ( $rows as $row_id => $components ) {
					foreach ( $components as $component_id => $component_data ) {
						if ( ! isset( $builders['components'][ $component_id ] ) ) {
							$builders['components'][ $component_id ] = $component_data;
						}
					}
				}
			}
		}

		return $builders;
	}

	/**
	 * Header defaults for Neve
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function define_header_defaults_neve() {
		return [];
		$defaults = [
			'desktop' => [
				'top'    => [],
				'main'   => [],
				'bottom' => [],
			],
			'mobile'  => [
				'top'     => [],
				'main'    => [],
				'bottom'  => [],
				'sidebar' => [],
			],
		];

		if ( (bool) get_theme_mod( 'neve_top_bar_enable', false ) ) {
			$alignament = get_theme_mod( 'neve_top_bar_layout', 'content-menu' );
			if ( $alignament === 'content-menu' ) {
				$defaults['desktop']['top']['custom_html']    = [
					'id'       => 'custom_html',
					'width'    => 6,
					'settings' => [
						'align' => 'left',
					],
					'x'        => 0,
				];
				$defaults['desktop']['top']['secondary-menu'] = [
					'id'       => 'secondary-menu',
					'width'    => 6,
					'settings' => [
						'align' => 'right',
					],
					'x'        => 6,
				];
			}
			if ( $alignament === 'menu-content' ) {
				$defaults['desktop']['top']['secondary-menu'] = [
					'id'       => 'secondary-menu',
					'width'    => 6,
					'settings' => [
						'align' => 'left',
					],
					'x'        => 0,
				];
				$defaults['desktop']['top']['custom_html']    = [
					'id'       => 'custom_html',
					'width'    => 6,
					'settings' => [
						'align' => 'right',
					],
					'x'        => 6,
				];
			}
		}

		$layout = get_theme_mod( 'neve_navigation_layout', 'left' );

		if ( $layout === 'left' ) {
			$defaults['desktop']['main']['logo']         = [
				'id'       => 'logo',
				'width'    => 4,
				'x'        => 0,
				'settings' => [
					'align' => 'left',
				],
			];
			$defaults['desktop']['main']['primary-menu'] = [
				'id'       => 'primary-menu',
				'settings' => [
					'align' => 'right',
				],
				'width'    => 8,
				'x'        => 4,
			];
		}

		if ( $layout === 'center' ) {
			$defaults['desktop']['main']['logo']           = [
				'id'       => 'logo',
				'width'    => 12,
				'x'        => 0,
				'settings' => [
					'align' => 'center',
				],
			];
			$defaults['desktop']['bottom']['primary-menu'] = [
				'id'       => 'primary-menu',
				'width'    => 12,
				'x'        => 0,
				'settings' => [
					'align' => 'center',
				],
			];
		}

		if ( $layout === 'right' ) {
			$defaults['desktop']['main']['primary-menu'] = [
				'id'       => 'primary-menu',
				'width'    => 8,
				'settings' => [
					'align' => 'left',
				],
				'x'        => 0,
			];
			$defaults['desktop']['main']['logo']         = [
				'id'       => 'logo',
				'width'    => 4,
				'settings' => [
					'align' => 'right',
				],
				'x'        => 8,
			];
		}

		$defaults['mobile']['main']['logo']            = [
			'id'       => 'logo',
			'width'    => 8,
			'settings' => [
				'align' => 'left',
			],
			'x'        => 0,
		];
		$defaults['mobile']['main']['nav-icon']        = [
			'id'       => 'nav-icon',
			'width'    => 4,
			'settings' => [
				'align' => 'right',
			],
			'x'        => 8,
		];
		$defaults['mobile']['sidebar']['primary-menu'] = [
			'id'       => 'primary-menu',
			'width'    => 8,
			'settings' => [
				'align' => 'left',
			],
			'x'        => 0,
		];

		return $defaults;
	}

	/**
	 * Footer defaults for Neve
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function define_footer_defaults_neve() {
		$defaults       = [
			'desktop' => [
				'top'    => [],
				'bottom' => [],
			],
		];
		$sidebars       = (int) get_theme_mod( 'neve_footer_widget_columns', '3' );
		$sidebars_names = array(
			'footer-one-widgets',
			'footer-two-widgets',
			'footer-three-widgets',
			'footer-four-widgets',
		);
		for ( $i = 0; $i < $sidebars; $i ++ ) {
			$defaults['desktop']['top'][ $sidebars_names[ $i ] ] = [
				'id'    => $sidebars_names[ $i ],
				'width' => 12 / $sidebars,
				'x'     => $i * ( 12 / $sidebars ),
			];
		}
		$content_type = get_theme_mod( 'neve_footer_content_type', 'text' );
		if ( $content_type === 'text' ) {
			$defaults['desktop']['bottom']['footer_copyright'] = [
				'id'       => 'footer_copyright',
				'width'    => 12,
				'x'        => 0,
				'settings' => [
					'align' => 'center',
				],
			];
		}
		if ( $content_type === 'footer_menu' ) {
			$defaults['desktop']['bottom']['footer-menu'] = [
				'id'       => 'footer-menu',
				'width'    => 12,
				'x'        => 0,
				'settings' => [
					'align' => 'center',
				],
			];
		}

		return $defaults;
	}

	/**
	 * Set defaults
	 *
	 * @since   1.0.0
	 * @access  private
	 */
	private function set() {
		$theme_support_defaults = array(
			'builders' => array(
				'HFG\Core\Builder\Header' => array(
					'HFG\Core\Components\Logo',
					'HFG\Core\Components\MenuIcon',
					'HFG\Core\Components\Button',
					'HFG\Core\Components\CustomHtml',
				),
				'HFG\Core\Builder\Footer' => array(
					'HFG\Core\Components\FooterWidgetOne',
					'HFG\Core\Components\FooterWidgetTwo',
					'HFG\Core\Components\FooterWidgetThree',
					'HFG\Core\Components\FooterWidgetFour',
					'HFG\Core\Components\FooterWidgetFive',
					'HFG\Core\Components\FooterWidgetSix',
					'HFG\Core\Components\Copyright',
				),
			),
		);
		$theme_support          = get_theme_support( 'hfg_support' );

		$settings            = wp_parse_args( $theme_support, $theme_support_defaults );
		$this->theme_support = $settings;
	}

	/**
	 * Get default component value.
	 *
	 * @param string $id Component id.
	 *
	 * @return mixed Default value.
	 */
	public function get_default_component_align( $id ) {
		return isset( $this->defaults['components'][ $id ]['settings']['align'] ) ? $this->defaults['components'][ $id ]['settings']['align'] : null;
	}

	/**
	 * Getter for theme support.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_theme_support() {
		return $this->theme_support;
	}

	/**
	 * Get header defaults.
	 *
	 * @return mixed Defaults for header.
	 */
	public function get_header_defaults_neve() {
		return json_encode( $this->defaults['header'] );
	}

	/**
	 * Get footer defaults.
	 *
	 * @return mixed Defaults for footer.
	 */
	public function get_footer_defaults_neve() {
		return json_encode( $this->defaults['footer'] );
	}


}
