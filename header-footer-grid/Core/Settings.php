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
		if ( is_null( self::$_instance ) ) {
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

	/**
	 * Utility method to return media url.
	 *
	 * @param mixed      $value The media reference.
	 * @param mixed|null $size Optional. The size desired.
	 *
	 * @return array|bool|false|string
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_media( $value, $size = 'full' ) {

		if ( empty( $value ) ) {
			return false;
		}

		$media = false;
		if ( is_numeric( $value ) ) {
			$media = $this->media_from_id( $value, $size );
		} elseif ( is_string( $value ) ) {
			$media = $this->media_from_url( $value, $size );
		} elseif ( is_array( $value ) ) {
			$media = $this->media_from_array( $value, $size );
		}

		return $media;
	}

	/**
	 * Retrieve media from post id.
	 *
	 * @param int    $id Post ID.
	 * @param string $size Media size.
	 *
	 * @return bool
	 * @since   1.0.0
	 * @access  private
	 */
	private function media_from_id( $id, $size = 'full' ) {
		$image_attributes = wp_get_attachment_image_src( $id, $size );
		if ( ! $image_attributes ) {
			return false;
		}

		return $image_attributes[0];
	}

	/**
	 * Retrieve media from attachment url.
	 *
	 * @param string $url The attachment url.
	 * @param string $size The media size.
	 *
	 * @return bool
	 * @since   1.0.0
	 * @access  private
	 */
	private function media_from_url( $url, $size = 'full' ) {
		$img_id = attachment_url_to_postid( $url );
		if ( $img_id ) {
			$image_attributes = wp_get_attachment_image_src( $img_id, $size );
			if ( ! $image_attributes ) {
				return false;
			}

			return $image_attributes[0];
		}

		return $url;
	}

	/**
	 * Retrieve media from an array.
	 *
	 * @param array  $array Array for media.
	 * @param string $size The media size.
	 *
	 * @return bool|false|string
	 */
	private function media_from_array( $array = array(), $size = 'full' ) {
		$value = wp_parse_args(
			$array,
			array(
				'id'   => '',
				'url'  => '',
				'mime' => '',
			)
		);

		if ( empty( $array['id'] ) && empty( $array['url'] ) ) {
			return false;
		}

		$media_url = '';

		if ( strpos( $array['mime'], 'image/' ) !== false ) {
			$image_attributes = wp_get_attachment_image_src( $array['id'], $size );
			if ( $image_attributes ) {
				$media_url = $image_attributes[0];
			}
		} else {
			$media_url = wp_get_attachment_url( $array['id'] );
		}

		if ( ! $media_url ) {
			$media_url = $value['url'];
			if ( $media_url ) {
				$img_id = attachment_url_to_postid( $media_url );
				if ( $img_id ) {
					return wp_get_attachment_url( $img_id );
				}
			}
		}

		return $media_url;
	}

}
