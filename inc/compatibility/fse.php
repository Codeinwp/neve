<?php
/**
 * FSE Compatibility.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Fse
 */
class Fse {
	/**
	 * Templates.
	 *
	 * @var array
	 */
	private $templates = [];

	/**
	 * @var bool[]
	 */
	private $conditions = [];

	/**
	 * Customizer Section.
	 *
	 * @var string
	 */
	private $customize_section = 'neve_fse';

	/**
	 * Fse constructor.
	 */
	public function __construct() {
		$this->templates = [
			'index'      => __( 'Index', 'neve' ),
			'front-page' => __( 'Front Page', 'neve' ),
			'archive'    => __( 'Archive', 'neve' ),
			'404'        => __( '404', 'neve' ),
			'search'     => __( 'Search', 'neve' ),
			'page'       => __( 'Page', 'neve' ),
			'single'     => __( 'Single', 'neve' ),
		];

		$this->conditions = [
			'index' => $this->is_blog(),
		];


//		error_log( var_export( $this->conditions, true ) );
	}

	/**
	 * Init hooks.
	 */
	public function init() {
		add_action( 'customize_register', [ $this, 'add_controls' ] );
		add_filter( 'get_block_templates', [ $this, 'filter_templates' ], 10, 3 );

		if ( $this->should_load() ) {
			add_action( 'after_setup_theme', [ $this, 'add_theme_support' ] );
			add_filter( 'theme_file_path', [ $this, 'fix_file_path' ], 10, 2 );
			add_action( 'admin_init', [ $this, 'squash_redirect' ] );
//			add_filter( 'wp_redirect', [ $this, 'shortcircuit_redirect' ] );

			add_action( 'wp_body_open', [ $this, 'handle_header' ], PHP_INT_MAX );
			add_action( 'wp_footer', [ $this, 'handle_footer' ], PHP_INT_MIN );
		}
	}

	public function shortcircuit_redirect($location) {

		error_log( var_export ( $location, true ) );

		return $location;
	}

	public function handle_header() {
		do_action( 'neve_do_header' );
	}

	public function handle_footer() {
		do_action( 'neve_do_footer' );
	}

	/**
	 * TODO: Figure this out.
	 *
	 * @return void
	 */
	public function squash_redirect() {
		global $pagenow;

		if ( $pagenow !== 'site-editor.php' ) {
			return;
		}

		if ( get_option( 'show_on_front' ) === 'page' && get_option( 'page_on_front' ) ) {
			if ( $this->is_template_enabled( 'front-page' ) ) {
				return;
			}

			if ( isset( $_GET['postType'] ) && $_GET['postType'] !== 'wp_template' && isset( $_GET['postId'] ) ) {
				$this->do_redirect();
			}
		} else {
			if ( $this->is_template_enabled( 'index' ) ) {
				return;
			}

			$this->do_redirect();
		}
	}

	/**
	 * Redirect to generic site editor URL.
	 *
	 * @return void
	 */
	private function do_redirect() {
		wp_safe_redirect( add_query_arg( 'postType', 'wp_template', admin_url( 'site-editor.php' ) ) );

		exit;
	}

	/**
	 * Filters the array of queried block templates array after they've been fetched.
	 *
	 * @param \WP_Block_Template[] $query_result Array of found block templates.
	 * @param array                $query Arguments to retrieve templates.
	 * @param string               $template_type wp_template or wp_template_part.
	 */
	public function filter_templates( $query_result, $query, $template_type ) {
		if ( $template_type !== 'wp_template' ) {
			return $query_result;
		}

		if ( ! $this->is_enabled() ) {
			return [];
		}

		foreach ( $query_result as $key => $template ) {
			$enabled = $this->is_template_enabled( $template->slug );

			if ( $enabled ) {
				continue;
			}

			unset( $query_result[ $key ] );
		}

		return $query_result;
	}

	/**
	 * Add the block templates theme support.
	 *
	 * @return void
	 */
	public function add_theme_support() {
		add_theme_support( 'block-templates' );
	}

	/**
	 * @param string $path The file path.
	 * @param string $file The file relative to the root of the theme.
	 *
	 * @return mixed|string
	 */
	public function fix_file_path( $path, $file ) {
		if ( $file === 'templates/index.html' ) {
			return get_template_directory() . '/templates/front-page.html';
		}

		return $path;
	}

	/**
	 * Add customizer controls.
	 *
	 * @param \WP_Customize_Manager $wp_customize the customizer manager.
	 *
	 * @return void
	 */
	public function add_controls( $wp_customize ) {
		$wp_customize->add_section(
			$this->customize_section,
			array(
				'title'    => __( 'Full Site Editing', 'neve' ),
				'priority' => 1000,
			)
		);

		$wp_customize->add_setting(
			'neve_enable_fse_templates',
			array(
				'default'           => false,
				'sanitize_callback' => 'neve_sanitize_checkbox',
			)
		);

		$wp_customize->add_control(
			'neve_enable_fse_templates',
			array(
				'label'       => __( 'Enable FSE Templates', 'neve' ),
				'description' => __( 'Enable this to use the FSE templates instead of the default ones.', 'neve' ),
				'section'     => $this->customize_section,
				'type'        => 'neve_toggle_control',
			)
		);

		$priority = 10;

		foreach ( $this->templates as $slug => $label ) {
			$wp_customize->add_setting( 'neve_fse_heading_' . $slug, array(
				'sanitize_callback' => 'sanitize_text_field',
			) );
			$wp_customize->add_control( new \Neve\Customizer\Controls\Heading( $wp_customize, 'neve_fse_heading_' . $slug, array(
				'section'          => $this->customize_section,
				'active_callback'  => [ $this, 'is_enabled' ],
				'class'            => 'fse-heading-' . $slug,
				'priority'         => $priority,
				'label'            => $label,
				'accordion'        => true,
				'controls_to_wrap' => 3,
			) ) );

			$priority ++;

			$wp_customize->add_setting(
				$this->get_option_slug_for_template( $slug ),
				array(
					'default'           => false,
					'sanitize_callback' => 'neve_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				$this->get_option_slug_for_template( $slug ),
				array(
					'active_callback' => [ $this, 'is_enabled' ],
					'section'         => $this->customize_section,
					'priority'        => $priority,
					'label'           => __( 'Enable', 'neve' ),
					'type'            => 'neve_toggle_control',
				)
			);

			$priority ++;

			$wp_customize->add_setting(
				$this->get_option_slug_for_header( $slug ),
				array(
					'default'           => true,
					'sanitize_callback' => 'neve_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				$this->get_option_slug_for_header( $slug ),
				array(
					'active_callback' => function () use ( $slug ) {
						return $this->is_template_enabled( $slug );
					},
					'section'         => $this->customize_section,
					'priority'        => $priority,
					'label'           => __( 'Enable Header', 'neve' ),
					'type'            => 'neve_toggle_control',
				)
			);

			$priority ++;

			$wp_customize->add_setting(
				$this->get_option_slug_for_footer( $slug ),
				array(
					'default'           => true,
					'sanitize_callback' => 'neve_sanitize_checkbox',
				)
			);

			$wp_customize->add_control(
				$this->get_option_slug_for_footer( $slug ),
				array(
					'active_callback' => function () use ( $slug ) {
						return $this->is_template_enabled( $slug );
					},
					'section'         => $this->customize_section,
					'priority'        => $priority,
					'label'           => __( 'Enable Footer', 'neve' ),
					'type'            => 'neve_toggle_control',
				)
			);

			$priority += 10;
		}
	}


	/**
	 * Check if the FSE templates are enabled.
	 *
	 * @return bool
	 */
	public function is_enabled() {
		return get_theme_mod( 'neve_enable_fse_templates', false );
	}

	/**
	 *  Check if templates should be loaded.
	 *
	 * @return bool
	 */
	public function should_load() {
		if ( ! $this->is_enabled() ) {

			return false;
		}

		$status = array_map(
			function ( $template ) {
				return $this->is_template_enabled( $template );
			},
			array_keys( $this->templates )
		);

		if ( ! in_array( true, $status, true ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Get the option ID for a template.
	 *
	 * @param string $template the template slug.
	 *
	 * @return string
	 */
	private function get_option_slug_for_template( $template ) {
		return 'neve_fse_' . $template;
	}

	/**
	 * Get the option ID for a template header.
	 *
	 * @param string $template the template slug.
	 *
	 * @return string
	 */
	private function get_option_slug_for_header( $template ) {
		return 'neve_fse_header_' . $template;
	}

	/**
	 * Get the option ID for a template footer.
	 *
	 * @param string $template the template slug.
	 *
	 * @return string
	 */
	private function get_option_slug_for_footer( $template ) {
		return 'neve_fse_footer_' . $template;
	}


	/**
	 * Is specific template enabled.
	 *
	 * @param string $template the template slug.
	 *
	 * @return bool
	 */
	private function is_template_enabled( $template ) {
		return get_theme_mod( $this->get_option_slug_for_template( $template ), false );
	}

	/**
	 * Is header enabled for template.
	 *
	 * @param string $template the template slug.
	 *
	 * @return bool
	 */
	public function is_header_enabled( $template ) {
		return get_theme_mod( $this->get_option_slug_for_header( $template ), true );
	}


	/**
	 * Is footer enabled for template.
	 *
	 * @param string $template the template slug.
	 *
	 * @return bool
	 */
	public function is_footer_enabled( $template ) {
		return get_theme_mod( $this->get_option_slug_for_footer( $template ), true );
	}

	public function is_blog() {
		return is_home() && ! is_front_page();
	}
}
