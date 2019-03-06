<?php
namespace HFG\Core;

class Settings {

	private static $_instance = null;
	public $path;
	public $url;
	private $theme_support = array();

	public static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance    = new self();
			self::$_instance->path = get_template_directory() . '/header-footer-grid';
			self::$_instance->url = get_template_directory_uri() . '/header-footer-grid';
			self::$_instance->set();
		}
		return self::$_instance;
	}

	private function set() {
		$theme_support_defaults = array(
			'builders' => array(
				'HFG\Core\Builder\Header' => array(
					'HFG\Core\Components\Logo',
					'HFG\Core\Components\MenuIcon',
					'HFG\Core\Components\Button',
					'HFG\Core\Components\ButtonTwo',
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
		$theme_support = get_theme_support( 'hfg_support' );

		$settings = wp_parse_args( $theme_support, $theme_support_defaults );
		$this->theme_support = $settings;
	}

	public function get_theme_support() {
		return $this->theme_support;
	}

	public function get_header_defaults_neve() {
		return [
			'desktop' => [
				'top' => [],
				'main' => [
					[ 'id' => 'logo', 'width' => 3, 'x' => 1 ],
				],
				'bottom' => [],
			],
			'mobile' => [
				'top' => [],
				'main' => [],
				'bottom' => [],
			],
		];
	}

	public function get_footer_defaults_neve() {
		return [
			'desktop' => [
				'top' => [],
				'bottom' => [
					[ 'id' => 'footer_copyright', 'width' => 12, 'x' => 1 ],
				],
			],
			'mobile' => [
				'top' => [],
				'bottom' => [],
			],
		];
	}

	public function get_media( $value, $size = null ) {

		if ( empty( $value ) ) {
			return false;
		}

		if ( ! $size ) {
			$size = 'full';
		}

		if ( is_numeric( $value ) ) {
			$image_attributes = wp_get_attachment_image_src( $value, $size );
			if ( ! $image_attributes ) {
				return false;
			}
			return $image_attributes[0];
		} elseif ( is_string( $value ) ) {
			$img_id = attachment_url_to_postid( $value );
			if ( $img_id ) {
				$image_attributes = wp_get_attachment_image_src( $img_id, $size );
				if ( ! $image_attributes ) {
					return false;
				}
				return $image_attributes[0];
			}
			return $value;
		} elseif ( is_array( $value ) ) {
			$value = wp_parse_args(
				$value,
				array(
					'id'   => '',
					'url'  => '',
					'mime' => '',
				)
			);

			if ( empty( $value['id'] ) && empty( $value['url'] ) ) {
				return false;
			}

			$media_url = '';

			if ( strpos( $value['mime'], 'image/' ) !== false ) {
				$image_attributes = wp_get_attachment_image_src( $value['id'], $size );
				if ( $image_attributes ) {
					$media_url = $image_attributes[0];
				}
			} else {
				$media_url = wp_get_attachment_url( $value['id'] );
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

		return false;
	}

}
