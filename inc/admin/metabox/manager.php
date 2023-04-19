<?php
/**
 * Page settings metabox.
 *
 * @package Neve
 */

namespace Neve\Admin\Metabox;

use Neve\Core\Settings\Config;
use Neve\Core\Settings\Mods;
use Neve\Customizer\Defaults\Layout;
use Neve\Customizer\Defaults\Single_Post;
use Neve\Customizer\Options\Layout_Single_Post;
use Neve\Views\Post_Layout;
use Neve\Core\Supported_Post_Types;

/**
 * Class Manager
 *
 * @package Neve\Admin\Metabox
 */
final class Manager {
	use Single_Post;
	use Layout;

	/**
	 * Control instances.
	 *
	 * @var array
	 */
	private $controls = array();

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
		add_action( 'admin_init', array( $this, 'define_controls' ) );
		add_action( 'admin_init', array( $this, 'load_controls' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
		add_action( 'save_post', array( $this, 'save' ) );

		/**
		 * Gtb meta
		 */
		add_action( 'init', array( $this, 'neve_register_meta' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'meta_sidebar_script_enqueue' ) );
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
	 */
	public function load_controls() {
		if ( empty( $this->control_classes ) ) {
			return;
		}
		foreach ( $this->control_classes as $control_manager ) {
			$control_instance = new $control_manager();
			if ( ! $control_instance instanceof Controls_Base ) {
				continue;
			}

			$control_instance->init();

			$this->controls = array_merge( $this->controls, $control_instance->get_controls() );
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
			array(
				'__back_compat_meta_box' => true,
			)
		);

		if ( $this->is_gutenberg_active() ) {
			add_meta_box(
				'neve-page-settings-notice',
				sprintf(
				/* translators: %s - post type */
					__( '%s Settings', 'neve' ),
					$post_type
				),
				array( $this, 'render_metabox_notice' ),
				Supported_Post_Types::get( 'block_editor' ),
				'side',
				'default',
				array(
					'__back_compat_meta_box' => false,
				)
			);
		}
	}

	/**
	 * Detect if is gutenberg editor.
	 *
	 * @return bool
	 */
	private function is_gutenberg_active() {
		global $current_screen;
		if ( method_exists( $current_screen, 'is_block_editor' ) ) {
			return $current_screen->is_block_editor();
		}
		return false;
	}

	/**
	 * The metabox content.
	 */
	public function render_metabox() {
		$this->render_controls();
	}

	/**
	 * Render the metabox notice.
	 */
	public function render_metabox_notice() {
		echo '<div class="nv-meta-notice-wrapper">';
		echo '<h4>' . esc_html__( 'Page Settings are now accessible from the top bar', 'neve' ) . '</h4>';
		printf(
		/* translators: %1$s - Keyboard shortcut.   %2&s - svg icon */
			esc_html__( 'Click the %1$s icon in the top bar or use the keyboard shortcut ( %2$s ) to customise the layout settings for this page', 'neve' ),
			apply_filters( 'ti_wl_theme_is_localized', false ) ?
				'<span class="dashicons dashicons-hammer"></span>' :
				'<svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.77822 10.2133V19.3287H0.118347V0.802224C0.118347 0.712594 0.145598 0.649854 0.200099 0.614002C0.254601 0.578149 0.354519 0.622964 0.499857 0.748446L12.1359 10.2133V1.04422H16.7958V19.5976C16.7958 19.7051 16.7685 19.7724 16.714 19.7992C16.6595 19.8261 16.5596 19.7768 16.4143 19.6514L4.77822 10.2133Z"/>
				<rect x="0.118347" y="22.3334" width="16.6774" height="1.51613"/>
				</svg>',
			'<strong>SHIFT + ALT + S</strong> ' . esc_html__( 'or', 'neve' ) . ' <strong>control + option + S</strong>'
		);
		echo '</div>';
	}

	/**
	 * Enqueue scripts and styles.
	 */
	public function enqueue() {

		if ( $this->is_gutenberg_active() ) {
			return;
		}

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
	 * Register meta
	 */
	public function neve_register_meta() {
		$meta_sidebar_controls = apply_filters(
			'neve_sidebar_meta_controls',
			[
				[
					'id'   => 'neve_meta_sidebar',
					'type' => 'radio',
				],
				[
					'id'   => 'neve_meta_container',
					'type' => 'button-group',
				],
				[
					'id'   => 'neve_meta_enable_content_width',
					'type' => 'checkbox',
				],
				[
					'id'   => 'neve_meta_content_width',
					'type' => 'range',
				],
				[
					'id'   => 'neve_meta_title_alignment',
					'type' => 'button-group',
				],
				[
					'id'   => 'neve_meta_author_avatar',
					'type' => 'checkbox',
				],
				[
					'id'   => 'neve_post_elements_order',
					'type' => 'sortable-list',
				],
				[
					'id'   => 'neve_meta_disable_header',
					'type' => 'checkbox',
				],
				[
					'id'   => 'neve_meta_disable_footer',
					'type' => 'checkbox',
				],
				[
					'id'   => 'neve_meta_disable_title',
					'type' => 'checkbox',
				],
			]
		);
		foreach ( $meta_sidebar_controls as $control ) {
			$type = 'string';
			if ( $control['type'] === 'range' ) {
				$type = 'integer';
			}

			$post_type = '';
			if ( array_key_exists( 'post_type', $control ) ) {
				$post_type = $control['post_type'];
			}

			$meta_settings = array(
				'show_in_rest'      => true,
				'type'              => $type,
				'single'            => true,
				'sanitize_callback' => 'sanitize_text_field',
				'auth_callback'     => function () {
					return current_user_can( 'edit_posts' );
				},
			);

			register_post_meta(
				$post_type,
				$control['id'],
				$meta_settings
			);
		}
	}

	/**
	 * Register the metabox sidebar.
	 */
	public function meta_sidebar_script_enqueue() {
		global $post_type;
		if ( ! in_array( $post_type, Supported_Post_Types::get( 'block_editor' ) ) ) {
			return false;
		}

		$dependencies = ( include get_template_directory() . '/assets/apps/metabox/build/index.asset.php' );

		wp_enqueue_script(
			'neve-meta-sidebar',
			trailingslashit( get_template_directory_uri() ) . 'assets/apps/metabox/build/index.js',
			$dependencies['dependencies'],
			$dependencies['version'],
			true
		);

		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'neve-meta-sidebar', 'neve' );
		}

		$container    = $post_type === 'post' ? Mods::get( Config::MODS_SINGLE_POST_CONTAINER_STYLE, 'contained' ) : Mods::get( Config::MODS_DEFAULT_CONTAINER_STYLE, 'contained' );
		$editor_width = Mods::get( Config::MODS_CONTAINER_WIDTH );

		$advanced_layout = Mods::get( Config::MODS_ADVANCED_LAYOUT_OPTIONS, true );

		$single_width  = $post_type === 'post' ?
			Mods::get( Config::MODS_SINGLE_CONTENT_WIDTH, $this->sidebar_layout_width_default( Config::MODS_SINGLE_CONTENT_WIDTH ) ) :
			Mods::get( Config::MODS_OTHERS_CONTENT_WIDTH, $this->sidebar_layout_width_default( Config::MODS_OTHERS_CONTENT_WIDTH ) );
		$content_width = $advanced_layout ?
			$single_width :
			Mods::get( Config::MODS_SITEWIDE_CONTENT_WIDTH, $this->sidebar_layout_width_default( Config::MODS_SITEWIDE_CONTENT_WIDTH ) );

		$editor_width = isset( $editor_width['desktop'] ) ? (int) $editor_width['desktop'] : 1170;

		$post_elements_default_order = $this->get_post_elements_default_order();
		$show_avatar                 = $this->get_author_avatar_state();
		$reading_time                = $this->get_reading_time_state();

		$post_type_details = get_post_type_object( $post_type );
		$post_type_label   = esc_html( $post_type_details->labels->singular_name );

		$localized_data = apply_filters(
			'neve_meta_sidebar_localize_filter',
			array(
				'actions'                 => array(
					'neve_meta_content_width' => array(
						'container' => $container,
						'editor'    => $editor_width,
						'content'   => $content_width,
					),
				),
				'elementsDefaultOrder'    => $post_elements_default_order,
				'avatarDefaultState'      => $show_avatar,
				'readingTimeDefaultState' => $reading_time,
				'postTypeLabel'           => $post_type_label,
				'isCoverLayout'           => Layout_Single_Post::is_cover_layout(),
			)
		);
		wp_localize_script(
			'neve-meta-sidebar',
			'metaSidebar',
			$localized_data
		);

		wp_enqueue_style(
			'neve-meta-sidebar-css', // Handle.
			trailingslashit( get_template_directory_uri() ) . 'assets/apps/metabox/build/index.css',
			array( 'wp-edit-blocks' ),
			NEVE_VERSION
		);
	}

	/**
	 * Get the value of elements order from customizer.
	 *
	 * @return string
	 */
	private function get_post_elements_default_order() {
		$default_order = $this->post_ordering();

		$content_order = get_theme_mod( 'neve_layout_single_post_elements_order', wp_json_encode( $default_order ) );
		if ( ! is_string( $content_order ) ) {
			$content_order = wp_json_encode( $default_order );
		}
		$content_order = json_decode( $content_order, true );
		if ( empty( $content_order ) ) {
			return wp_json_encode( $content_order );
		}

		$is_cover_layout  = Layout_Single_Post::is_cover_layout();
		$title_meta_index = array_search( 'title-meta', $content_order );
		if ( $title_meta_index !== false && ! $is_cover_layout ) {
			$content_order[ $title_meta_index ] = 'title';
			$next_index                         = $title_meta_index + 1;
			$content_order                      = array_merge( array_slice( $content_order, 0, $next_index, true ), array( 'meta' ), array_slice( $content_order, $next_index, null, true ) );
		}

		return wp_json_encode( $content_order );
	}

	/**
	 * Get the value of author avatar display from customizer.
	 *
	 * @return bool
	 */
	private function get_author_avatar_state() {
		$show_avatar = get_theme_mod( 'neve_author_avatar', false );
		return get_theme_mod( 'neve_single_post_author_avatar', $show_avatar );
	}

	/**
	 * Get the value of Reading Time visibility from customizer.
	 *
	 * @return bool
	 */
	private function get_reading_time_state() {
		$meta_fields = get_theme_mod( 'neve_single_post_meta_fields', self::get_default_single_post_meta_fields() );

		if ( is_string( $meta_fields ) ) {
			$meta_fields = json_decode( $meta_fields, true );
		}

		if ( ! is_array( $meta_fields ) ) {
			return false;
		}

		foreach ( $meta_fields as $args ) {
			if ( ! array_key_exists( 'slug', $args ) || ! array_key_exists( 'visibility', $args ) || $args['slug'] !== 'reading' ) {
				continue;
			}

			return $args['visibility'] === 'yes';
		}

		return false;
	}
}
