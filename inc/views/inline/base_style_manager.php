<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Neve\Views\Inline
 */

namespace Neve\Views\Inline;

use Neve\Views\Base_View;
use Neve\Views\Inline\Base_Inline as Base_Inline;

/**
 * Class Style_Manager
 *
 * @package Neve\Views\Inline
 */
abstract class Base_Style_Manager extends Base_View {
	/**
	 * Theme mod key for generated style version.
	 *
	 * @var string
	 */
	protected $style_version_theme_mod_key = 'neve_generated_style_version';

	/**
	 * Style which the inline style will be hooked to.
	 *
	 * @var string
	 */
	protected $style_hook_handle = '';

	/**
	 * Will the style be enqueued in admin?
	 *
	 * @var bool
	 */
	protected $admin = false;

	/**
	 * Inline style handlers
	 *
	 * @var array
	 */
	protected $style_classes = array();

	/**
	 * Generated style file name.
	 *
	 * @var string
	 */
	protected $css_file_name = '';

	/**
	 * The enqueued style handle.
	 *
	 * @var string
	 */
	protected $style_handle = '';

	/**
	 * Generated inline style path.
	 *
	 * @var string
	 */
	private $style_path = '';

	/**
	 * Generated inline style url.
	 *
	 * @var string
	 */
	private $style_url = '';

	/**
	 * Mobile style -> global.
	 *
	 * @var string
	 */
	private $style = '';

	/**
	 * Tablet style -> min-width: 769px.
	 *
	 * Reference #{$tablet} in scss.
	 *
	 * @var string
	 */
	private $tablet_style = '';

	/**
	 * Desktop style -> min-width 960px.
	 *
	 * Reference #{$laptop} in scss.
	 *
	 * @var string
	 */
	private $desktop_style = '';

	/**
	 * Style_Manager constructor.
	 */
	public function __construct() {
		$wp_upload_dir    = wp_upload_dir( null, false );
		$this->style_path = $wp_upload_dir['basedir'] . '/neve-theme/';
		$this->style_url  = $wp_upload_dir['baseurl'] . '/neve-theme/';
	}

	/**
	 * Function that is run after instantiation.
	 *
	 * @return void
	 */
	public function init() {
		if ( empty( $this->style_classes ) ) {
			return;
		}

		if ( $this->admin === true ) {
			add_action( 'enqueue_block_editor_assets', array( $this, 'maybe_enqueue' ), 100 );
		} else {
			add_action( 'wp_enqueue_scripts', array( $this, 'maybe_enqueue' ), 100 );
		}

		add_action( 'customize_save_after', array( $this, 'wipe_customizer_css_file' ), 0 );
		add_action( 'after_switch_theme', array( $this, 'wipe_customizer_css_file' ), 0 );

		if ( ! is_customize_preview() ) {
			add_action( 'shutdown', array( $this, 'generate_customizer_css_file' ), PHP_INT_MAX );
		}

	}

	/**
	 * Maybe enqueue the generated style if it exists.
	 */
	public function maybe_enqueue() {
		$this->run_inline_styles();
		$this->wrap_styles();

		if ( $this->should_add_style() ) {
			wp_enqueue_style( $this->style_handle, $this->style_url . $this->css_file_name, array( $this->style_hook_handle ), $this->get_style_version() );

			return;
		}
		wp_add_inline_style( $this->style_hook_handle, $this->get_style() );
	}

	/**
	 * Check if file should be enqueued or inline style added.
	 *
	 * @return bool
	 */
	private function should_add_style() {
		// If debug mode bail.
		if ( NEVE_DEBUG === true ) {
			return false;
		}

		$path = $this->style_path . $this->css_file_name;

		// If file doesn't exist bail.
		if ( ! file_exists( $path ) ) {
			return false;
		}
		// If file is not readable bail.
		if ( ! is_readable( $path ) ) {
			return false;
		}
		// If is customizer bail.
		if ( is_customize_preview() ) {
			return false;
		}
		// If the file content is different from the generated style bail.
		if ( $this->is_css_inline_diff() ) {
			return false;
		}

		return true;
	}

	/**
	 * Check if there's a difference between the inline and generated style.
	 *
	 * @return bool
	 */
	private function is_css_inline_diff() {
		require_once( ABSPATH . '/wp-admin/includes/file.php' );

		global $wp_filesystem;

		WP_Filesystem();

		$inline_style = $this->get_style();
		$css_contents = $wp_filesystem->get_contents( $this->style_path . $this->css_file_name );

		if ( $css_contents !== $inline_style ) {
			$this->wipe_customizer_css_file();

			return true;
		}

		return false;
	}

	/**
	 * Generate the customizer file.
	 */
	public function generate_customizer_css_file() {

		$style = $this->get_style();

		if ( empty( $style ) ) {
			return;
		}

		if ( file_exists( $this->style_path . $this->css_file_name ) && is_readable( $this->style_path . $this->css_file_name ) ) {
			return;
		}

		if ( ! is_dir( $this->style_path ) ) {
			wp_mkdir_p( $this->style_path );
		}

		require_once( ABSPATH . '/wp-admin/includes/file.php' );
		global $wp_filesystem;
		WP_Filesystem();
		$wp_filesystem->put_contents( $this->style_path . $this->css_file_name, $style, 0644 );
	}

	/**
	 * Delete customizer generated CSS.
	 *
	 * Remove css and delete version key.
	 */
	public function wipe_customizer_css_file() {
		if ( ! file_exists( $this->style_path . $this->css_file_name ) || ! is_readable( $this->style_path . $this->css_file_name ) ) {
			return;
		}
		remove_theme_mod( $this->style_version_theme_mod_key );
		unlink( $this->style_path . $this->css_file_name );
	}

	/**
	 * Instantiate classes and get the style.
	 */
	private function run_inline_styles() {
		$this->style_classes = apply_filters( 'neve_filter_inline_style_classes', $this->style_classes, $this->style_handle );

		foreach ( $this->style_classes as $style_class ) {
			if ( ! class_exists( $style_class ) ) {
				continue;
			}
			$class = new $style_class();

			$this->add_style( $class );
		}
	}

	/**
	 * Add the styles from the inline style object.
	 *
	 * @param \Neve\Views\Inline\Base_Inline $style_class the class that handles the style output.
	 */
	private function add_style( Base_Inline $style_class ) {
		$this->style         .= $style_class->get_style( 'mobile' );
		$this->tablet_style  .= $style_class->get_style( 'tablet' );
		$this->desktop_style .= $style_class->get_style( 'desktop' );
	}

	/**
	 * Wrap the responsive styles in media queries.
	 */
	private function wrap_styles() {
		if ( ! empty( $this->tablet_style ) ) {
			$this->tablet_style = '@media(min-width: 576px){' . $this->tablet_style . '}';
		}

		if ( ! empty( $this->desktop_style ) ) {
			$this->desktop_style = '@media(min-width: 960px){' . $this->desktop_style . '}';
		}
	}

	/**
	 * Get the whole style from component.
	 *
	 * @return string
	 */
	private function get_style() {
		$style = $this->style . $this->tablet_style . $this->desktop_style;
		$style = preg_replace( '!\s+!', ' ', $style );

		return $style;
	}

	/**
	 * Get the style version if it exists, else create one.
	 *
	 * @return string
	 */
	private function get_style_version() {

		$version = get_theme_mod( $this->style_version_theme_mod_key, false );

		if ( empty( $version ) ) {
			set_theme_mod( $this->style_version_theme_mod_key, time() );
		}

		return get_theme_mod( $this->style_version_theme_mod_key );
	}
}
