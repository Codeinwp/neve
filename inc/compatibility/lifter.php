<?php
/**
 * Compatibility with Lifter LMS Plugin.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Lifter
 *
 * @package Neve\Compatibility
 */
class Lifter {

	/**
	 * Primary button selectors.
	 *
	 * @var array
	 */
	private $primary_buttons_selectors = array(
		'default' => '
			,a.llms-button-primary,
			button.llms-button-primary,
			a.llms-button-action,
			button.llms-button-action',
		'hover'   => '
			,a.llms-button-primary:hover,
			button.llms-button-primary:hover,
			a.llms-button-primary:active,
			button.llms-button-primary:active,
			a.llms-button-primary:focus,
			button.llms-button-primary:focus,
			a.llms-button-action:hover,
			a.llms-button-action:active,
			a.llms-button-action:focus,
			button.llms-button-action:hover, 
			button.llms-button-action:active,
			button.llms-button-action:focus',
	);

	/**
	 * Secondary buttons selectors.
	 *
	 * @var array
	 */
	private $secondary_buttons_selectors = array(
		'default' => '
			,a.llms-button-secondary',
		'hover'   => '
			,a.llms-button-secondary:hover',
	);

	/**
	 * Init function.
	 */
	public function init() {
		if ( ! $this->should_load() ) {
			return;
		}
		$this->load_hooks();
		$this->add_inline_selectors();
	}

	/**
	 * Check if LifterLMS plugin is activated.
	 */
	private function should_load() {
		return class_exists( 'LifterLMS', false );
	}

	/**
	 * Load hooks and filters.
	 */
	private function load_hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'load_styles' ) );

		remove_action( 'lifterlms_before_main_content', 'lifterlms_output_content_wrapper', 10 );
		remove_action( 'lifterlms_after_main_content', 'lifterlms_output_content_wrapper_end', 10 );
		remove_all_actions( 'lifterlms_sidebar' );

		add_action( 'lifterlms_before_main_content', array( $this, 'content_wrapper_open' ), 0 );
		add_action( 'lifterlms_after_main_content', array( $this, 'content_wrapper_close' ), PHP_INT_MAX );
		add_filter( 'lifterlms_show_page_title', '__return_false' );

		add_action( 'neve_llms_content', array( $this, 'content_open' ), 10 );
		add_action( 'lifterlms_after_main_content', array( $this, 'content_close' ), 10 );

		add_action( 'widgets_init', array( $this, 'register_catalog_sidebar' ) );
		add_filter( 'llms_get_theme_default_sidebar', array( $this, 'lms_sidebar' ) );
		add_action( 'wp', array( $this, 'load_catalog_sidebar' ) );

		add_filter( 'llms_checkout_error_output', array( $this, 'checkout_error_entry_content_close' ) );
	}

	/**
	 * Add inline selectors for LifterLMS.
	 */
	private function add_inline_selectors() {
		add_filter( 'neve_button_color_filter', array( $this, 'add_button_color' ) );
		add_filter( 'neve_button_hover_color_filter', array( $this, 'add_button_hover_color' ) );
		add_filter( 'neve_button_border_radius_selectors_filter', array( $this, 'add_button_border_radius' ) );
		add_filter( 'neve_button_padding_selectors', array( $this, 'add_button_padding_selectors' ), 10, 2 );

		add_filter( 'neve_secondary_button_color_filter', array( $this, 'add_secondary_button_color' ) );
		add_filter( 'neve_secondary_button_hover_color_filter', array( $this, 'add_secondary_button_hover_color' ) );
		add_filter(
			'neve_secondary_button_border_radius_selectors_filter',
			array(
				$this,
				'add_secondary_button_border_radius',
			)
		);
	}

	/**
	 * Add button color colors.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_button_color( $color_setup ) {
		$color_setup['background']['selectors'] .= $this->primary_buttons_selectors['default'];

		return $color_setup;
	}

	/**
	 * Add button hover color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_button_hover_color( $color_setup ) {
		$color_setup['background']['selectors'] .= $this->primary_buttons_selectors['hover'];

		return $color_setup;
	}

	/**
	 * Add button border radius.
	 *
	 * @param string $selectors the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return string
	 */
	public function add_button_border_radius( $selectors ) {
		$selectors .= $this->primary_buttons_selectors['default'];

		return $selectors;
	}

	/**
	 * Add buttons paddings.
	 *
	 * @param string $selectors css selectors.
	 * @param string $theme_mod theme mod key.
	 *
	 * @return string
	 */
	public function add_button_padding_selectors( $selectors, $theme_mod ) {
		if ( $theme_mod === 'neve_button_padding' ) {
			$selectors .= $this->primary_buttons_selectors['default'];
		}

		if ( $theme_mod === 'neve_secondary_button_padding' ) {
			$selectors .= $this->secondary_buttons_selectors['default'];
		}

		return $selectors;
	}

	/**
	 * Add secondary button color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_secondary_button_color( $color_setup ) {
		if ( isset( $color_setup['color'] ) ) {
			$color_setup['color']['selectors'] .= $this->secondary_buttons_selectors['default'];
		}
		if ( isset( $color_setup['background-color'] ) ) {
			$color_setup['background-color']['selectors'] .= $this->secondary_buttons_selectors['default'];
		}
		if ( isset( $color_setup['border-color'] ) ) {
			$color_setup['border-color']['selectors'] .= $this->secondary_buttons_selectors['default'];
		}

		return $color_setup;
	}

	/**
	 * Add secondary button hover color.
	 *
	 * @param array $color_setup the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return array
	 */
	public function add_secondary_button_hover_color( $color_setup ) {
		if ( isset( $color_setup['color'] ) ) {
			$color_setup['color']['selectors'] .= $this->secondary_buttons_selectors['hover'];
		}
		if ( isset( $color_setup['background-color'] ) ) {
			$color_setup['background-color']['selectors'] .= $this->secondary_buttons_selectors['hover'];
		}
		if ( isset( $color_setup['border-color'] ) ) {
			$color_setup['border-color']['selectors'] .= $this->secondary_buttons_selectors['hover'];
		}

		return $color_setup;
	}

	/**
	 * Add secondary button border radius.
	 *
	 * @param string $selectors the color setup from Neve\Views\Inline\Colors.
	 *
	 * @return string
	 */
	public function add_secondary_button_border_radius( $selectors ) {
		$selectors .= $this->secondary_buttons_selectors['default'];

		return $selectors;
	}

	/**
	 * Enqueue styles.
	 */
	public function load_styles() {
		wp_enqueue_style( 'neve-lifter', NEVE_ASSETS_URL . 'css/lifter' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), apply_filters( 'neve_version_filter', NEVE_VERSION ) );
	}

	/**
	 * Load Sidebar
	 */
	public function load_catalog_sidebar() {
		$sidebar_position = get_theme_mod( 'neve_default_sidebar_layout', 'right' );
		if ( $sidebar_position === 'right' ) {
			add_action( 'lifterlms_after_main_content', array( $this, 'render_catalog_sidebar' ), 11 );
		}
		if ( $sidebar_position === 'left' ) {
			add_action( 'neve_llms_content', array( $this, 'render_catalog_sidebar' ), 1 );
		}
	}

	/**
	 * Display LifterLMS Course and Lesson sidebars
	 * on courses and lessons in place of the sidebar returned by
	 * this function
	 *
	 * @return string
	 */
	public function lms_sidebar() {
		return 'blog-sidebar';
	}

	/**
	 * Add markup before main content.
	 */
	public function content_wrapper_open() {
		$container_class = apply_filters( 'neve_container_class_filter', 'container' );
		echo '<div class="' . esc_attr( $container_class ) . ' lms-container">';
		echo '<div class="row">';
		do_action( 'neve_llms_content' );
	}

	/**
	 * Close Content Wrapper
	 */
	public function content_wrapper_close() {
		echo '</div>'; // .row close
		echo '</div>'; // .lms-container close
	}

	/**
	 * Add markup for LifterLms title and open content wrap div
	 */
	public function content_open() {
		echo '<div class="nv-single-page-wrap col">';
		echo '<div class="nv-page-title-wrap nv-big-title">';
		echo '<div class="nv-page-title ">';
		echo '<h1 class="page-title">';
		lifterlms_page_title();
		echo '</h1>';
		echo '</div>';
		echo '</div>';
		$class = apply_filters( 'neve_lifter_wrap_classes', 'nv-content-wrap entry-content' );
		echo '<div class="' . esc_attr( $class ) . '">';
	}

	/**
	 * Close content.
	 */
	public function content_close() {
		echo '</div>'; // .nv-content-wrap .entry-content close
		echo '</div>'; // .nv-single-page-wrap .col close
	}

	/**
	 * Register LifterLMS Catalog Sidebar.
	 */
	public function register_catalog_sidebar() {
		register_sidebar(
			array(
				'name'          => __( 'Catalog Sidebar', 'neve' ),
				'id'            => 'llms_shop',
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<p class="widget-title">',
				'after_title'   => '</p>',
			)
		);
	}

	/**
	 * Sidebar Markup Wrapper open.
	 */
	public function render_catalog_sidebar() {
		if ( ! is_active_sidebar( 'llms_shop' ) ) {
			return;
		}

		$sidebar_position = get_theme_mod( 'neve_default_sidebar_layout', 'right' );
		echo '<div class="nv-sidebar-wrap col-sm-12 nv-' . esc_attr( $sidebar_position ) . ' catalog-sidebar">';
		dynamic_sidebar( 'llms_shop' );
		echo '</div>';
	}

	/**
	 * Close entry content div on error.
	 *
	 * @param string $error Error text.
	 *
	 * @return string
	 */
	public function checkout_error_entry_content_close( $error ) {
		return $error . '</div>';
	}

}
