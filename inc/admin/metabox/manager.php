<?php
/**
 * Page settings metabox.
 *
 * @package Neve
 */

namespace Neve\Admin\Metabox;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
/**
 * Class Manager
 *
 * @package Neve\Admin\Metabox
 */
final class Manager {

	/**
	 * Control instances.
	 *
	 * @var array
	 */
	private $controls = array();

	/**
	 * Controls for meta sidebar in Block Editor.
	 *
	 * @var array
	 */
	private $meta_sidebar_controls = array();

	/**
	 * Control classes to get controls from.
	 *
	 * @var array
	 */
	private $control_classes;

	/**
	 * Init function
	 */
	public function init() {
		add_action( 'add_meta_boxes', array( $this, 'add' ) );
		add_action( 'init', array( $this, 'define_controls' ) );
		add_action( 'init', array( $this, 'load_controls' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
		add_action( 'save_post', array( $this, 'save' ) );

		/**
		 * Gtb meta
		 */
		add_action( 'init', array( $this, 'register_meta_sidebar' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'meta_sidebar_script_enqueue' ) );
		add_action( 'init', array( $this, 'neve_register_meta' ), 11 );
	}

	/**
	 * Define the controls.
	 */
	public function define_controls() {
		$this->control_classes = array(
			'Neve\\Admin\\Metabox\\Main',
		);

		$this->control_classes = apply_filters( 'neve_filter_metabox_controls', $this->control_classes );
	}

	/**
	 * Instantiate the controls and actually load them into the control manager.
	 *
	 * @param bool  $is_sidebar Gutenberg sidebar flag.
	 * @param array $control_classes Controls classes.
	 */
	public function load_controls( $is_sidebar = false, $control_classes = array() ) {
		if ( empty( $control_classes ) ) {
			$control_classes = $this->control_classes;
		}
		if ( empty( $control_classes ) ) {
			return;
		}
		foreach ( $control_classes as $control_manager ) {
			$control_instance = new $control_manager();
			if ( ! $control_instance instanceof Controls_Base ) {
				continue;
			}

			$control_instance->init();

			if ( $is_sidebar ) {
				$this->meta_sidebar_controls = array_merge( $this->meta_sidebar_controls, $control_instance->get_controls() );
			} else {
				$this->controls = array_merge( $this->controls, $control_instance->get_controls() );
			}       
		}
		$this->order_by_priority();
	}

	/**
	 * The metabox content.
	 */
	public function render_controls() {
		global $post;

		foreach ( $this->controls as $control ) {
			if ( method_exists( $control, 'render' ) ) {
				$control->render( $post->ID );
			}
		}
	}

	/**
	 * Save metabox content.
	 *
	 * @param int $post_id the post id.
	 */
	public function save( $post_id ) {
		foreach ( $this->controls as $control ) {
			if ( method_exists( $control, 'save' ) ) {
				$control->save( $post_id );
			}
		}
	}

	/**
	 * Register meta box to control layout on pages and posts.
	 */
	public function add() {
		if ( $this->should_add_meta() === false ) {
			return;
		}

		$post_type         = 'Neve';
		$post_type_from_db = get_post_type();
		if ( $post_type_from_db ) {
			$post_type = ucfirst( $post_type_from_db );
		}

		add_meta_box(
			'neve-page-settings',
			sprintf(
			/* translators: %s - post type */
				__( '%s Settings', 'neve' ),
				$post_type
			),
			array( $this, 'render_metabox' ),
			array( 'post', 'page', 'product' ),
			'side',
			'default',
			array( '__back_compat_meta_box' => true )
		);
	}

	/**
	 * The metabox content.
	 */
	public function render_metabox() {
		$this->render_controls();
	}

	/**
	 * Decide if the metabox should be visible.
	 *
	 * @return bool
	 */
	public function should_add_meta() {
		global $post;

		if ( empty( $post ) ) {
			return false;
		}

		$restricted_pages_id = array();
		if ( in_array( $post->ID, $restricted_pages_id, true ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Enqueue scripts and styles.
	 */
	public function enqueue() {

		$screen = get_current_screen();

		if ( ! is_object( $screen ) ) {
			return;
		}
		if ( $screen->base !== 'post' ) {
			return;
		}

		wp_register_script( 'neve-metabox', NEVE_ASSETS_URL . 'js/build/all/metabox.js', array( 'jquery' ), NEVE_VERSION, true );

		wp_localize_script( 'neve-metabox', 'neveMetabox', $this->get_localization() );

		wp_enqueue_script( 'neve-metabox' );
	}

	/**
	 * Localize the Metabox script.
	 *
	 * @return array
	 */
	private function get_localization() {
		return array();
	}

	/**
	 * Order the controls by given priority.
	 */
	private function order_by_priority() {
		$order = array();

		foreach ( $this->controls as $key => $control_object ) {
			$order[ $key ] = $control_object->priority;
		}
		array_multisort( $order, SORT_ASC, $this->controls );
	}


	/**
	 * Register the metabox sidebar in Gutenberg editor
	 */
	public function register_meta_sidebar() {

		$control_classes = array(
			'Neve\\Admin\\Metabox\\Block_Editor_Meta',
		);
		$this->load_controls( true, $control_classes );

		wp_register_script(
			'neve-meta-sidebar',
			trailingslashit( get_template_directory_uri() ) . 'inc/admin/metabox/build/index.js',
			array( 'wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-data' )
		);

	}

	/**
	 * Register meta
	 */
	public function neve_register_meta() {
		foreach ( $this->meta_sidebar_controls as $control ) {
			$options = get_object_vars( $control );
			$type    = 'string';
			if ( $options['type'] === 'range' ) {
				$type = 'integer';
			}

			$post_type = '';
			if ( array_key_exists( 'post_type', $options ) ) {
				$post_type = $options['post_type'];
			}
			register_post_meta(
				$post_type,
				$options['id'],
				array(
					'show_in_rest'      => true,
					'type'              => $type,
					'single'            => true,
					'sanitize_callback' => 'sanitize_text_field',
					'auth_callback'     => function () {
						return current_user_can( 'edit_posts' );
					},
				)
			);
		}
	}

	/**
	 * Register the metabox sidebar.
	 */
	public function meta_sidebar_script_enqueue() {
		wp_enqueue_script( 'neve-meta-sidebar' );

		global $post_type;
		$container    = $post_type === 'post' ? Mods::get( Config::MODS_SINGLE_POST_CONTAINER_STYLE, 'contained' ) : Mods::get( Config::MODS_DEFAULT_CONTAINER_STYLE, 'contained' );
		$editor_width = Mods::get( Config::MODS_CONTAINER_WIDTH );
		$editor_width = isset( $editor_width['desktop'] ) ? (int) $editor_width['desktop'] : 1170;

		wp_localize_script(
			'neve-meta-sidebar',
			'metaSidebar',
			array(
				'controls' => $this->meta_sidebar_controls,
				'actions'  => array(
					'neve_meta_content_width' => array(
						'container' => $container,
						'editor'    => $editor_width,
					),
				),
			)
		);

		wp_enqueue_style(
			'neve-meta-sidebar-css', // Handle.
			trailingslashit( get_template_directory_uri() ) . 'inc/admin/metabox/build/editor.css',
			array( 'wp-edit-blocks' )
		);

	}
}
