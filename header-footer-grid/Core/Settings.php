<?php
/**
 * Settings class for Header Footer Grid.
 * Holds all settings for this moduel.
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
	 * @since   1.0.0
	 * @access  public
	 * @return Settings
	 */
	public static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance       = new self();
			self::$_instance->path = get_template_directory() . '/header-footer-grid';
			self::$_instance->url  = get_template_directory_uri() . '/header-footer-grid';
			self::$_instance->set();
		}
		return self::$_instance;
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
	 * Getter for theme support.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_theme_support() {
		return $this->theme_support;
	}

	/**
	 * Header defaults for Neve
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_header_defaults_neve() {
		return json_encode(
			[
				'desktop' => [
					'top'    => [],
					'main'   => [
						[
							'id'    => 'logo',
							'width' => 4,
							'x'     => 0,
						],
						[
							'id'    => 'primary-menu',
							'width' => 4,
							'x'     => 8,
						],
					],
					'bottom' => [],
				],
				'mobile'  => [
					'top'    => [],
					'main'   => [
						[
							'id'    => 'logo',
							'width' => 4,
							'x'     => 0,
						],
					],
					'bottom' => [],
				],
			]
		);
	}

	/**
	 * Footer defaults for Neve
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_footer_defaults_neve() {
		return json_encode( [
			'desktop' => [
				'top'    => [],
				'bottom' => [
					[
						'id'    => 'footer_copyright',
						'width' => 12,
						'x'     => 1,
					],
				],
			],
			'mobile'  => [
				'top'    => [],
				'bottom' => [],
			],
		] );
	}

	private function media_from_id( $id, $size = 'full' ) {
		$image_attributes = wp_get_attachment_image_src( $id, $size );
		if ( ! $image_attributes ) {
			return false;
		}
		return $image_attributes[0];
	}

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

	/**
	 * Utility method to return media url.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param  mixed      $value The media reference.
	 * @param mixed|null $size Optional. The size desired.
	 *
	 * @return array|bool|false|string
	 */
	public function get_media( $value, $size = 'full' ) {

		if ( empty( $value ) ) {
			return false;
		}

		if ( is_numeric( $value ) ) {
			return $this->media_from_id( $value, $size );
		} elseif ( is_string( $value ) ) {
			return $this->media_from_url( $value, $size );
		} elseif ( is_array( $value ) ) {
			return $this->media_from_array( $value, $size );
		}

		return false;
	}

}
