<?php
/**
 * Customizer class for Header Footer Grid.
 * Takes care of all the Customizer logic.
 *
 * Name:    Header Footer Grid
 * Author:  Bogdan Preda <bogdan.preda@themeisle.com>
 *
 * @version 1.0.0
 * @package HFG
 */

namespace HFG\Core;

use HFG\Config\Customizer\Style;
use HFG\Config\Customizer\Typography;
use HFG\Core\Interfaces\Builder;
use HFG\Traits\Core;
use WP_Customize_Manager;

/**
 * Class Customizer
 *
 * @package HFG\Core
 */
class Customizer {
	use Core;

	/**
	 * Holds an instance of Settings
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var Settings $settings
	 */
	private $settings;

	/**
	 * Holds the builders to register.
	 *
	 * @since   1.0.0
	 * @access  private
	 * @var array $builders
	 */
	private $builders = array();

	/**
	 * Customizer constructor.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param Settings $settings The Settings class.
	 */
	public function __construct( Settings $settings ) {
		$this->settings = $settings;

		if ( empty( get_theme_support( 'hfg_support' ) ) ) {
			return;
		}

		$theme_support = get_theme_support( 'hfg_support' )[0];
		foreach ( $theme_support['builders'] as $builder => $components ) {
			if ( class_exists( $builder ) && in_array( 'HFG\Core\Interfaces\Builder', class_implements( $builder ) ) ) {
				/**
				 * A new builder instance.
				 *
				 * @var Builder $new_builder
				 */
				$new_builder = new $builder();
				$new_builder->register_builder_hooks();
				foreach ( $components as $component ) {
					$new_builder->register_component( $component );
				}
				$this->builders[] = $new_builder;
			}
		}

		if ( is_admin() ) {
			add_action( 'customize_controls_enqueue_scripts', array( $this, 'scripts' ) );
			add_action( 'customize_controls_print_footer_scripts', array( $this, 'template' ) );
		}

		if ( is_admin() || is_customize_preview() ) {
			add_action( 'customize_register', array( $this, 'register' ), PHP_INT_MAX );
			add_action( 'customize_preview_init', array( $this, 'preview_js' ), PHP_INT_MAX );
		}

		add_filter( 'body_class', array( $this, 'hfg_body_classes' ) );
	}

	/**
	 * Classes for the body tag.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param array $classes List of body classes.
	 *
	 * @return array
	 */
	public function hfg_body_classes( $classes ) {
		if ( is_customize_preview() ) {
			$classes[] = 'customize-previewing';
		}

		$classes[] = 'menu_sidebar_slide_left';

		return $classes;
	}

	/**
	 * Returns list of builders.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @return array
	 */
	public function get_builders() {
		$builders_list = array();
		/**
		 * A Builder Class instance.
		 *
		 * @var Builder $builder
		 */
		foreach ( $this->builders as $builder ) {
			$builders_list[] = $builder->get_builder();
		}
		return $builders_list;
	}

	/**
	 * Customizer script register.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function scripts() {
		$suffix = $this->get_assets_suffix();
		wp_enqueue_style( 'hfg-customizer-control', esc_url( $this->settings->url ) . '/assets/css/admin/customizer/customizer' . $suffix . '.css' );
		wp_register_script(
			'hfg-layout-builder',
			esc_url( $this->settings->url ) . '/assets/js/customizer/builder' . $suffix . '.js',
			array(
				'customize-controls',
				'jquery-ui-resizable',
				'jquery-ui-droppable',
				'jquery-ui-draggable',
			),
			false,
			true
		);
		wp_localize_script(
			'hfg-layout-builder',
			'HFG_Layout_Builder',
			array(
				'footer_moved_widgets_text' => '',
				'builders'                  => $this->get_builders(),
				'is_rtl'                    => is_rtl(),
				'change_version_nonce'      => wp_create_nonce( 'change_version_nonce' ),
			)
		);
		wp_enqueue_script( 'hfg-layout-builder' );
	}

	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function preview_js() {
		if ( is_customize_preview() ) {
			$suffix = $this->get_assets_suffix();
			// wp_enqueue_script(
			// 'hfg-customizer',
			// esc_url( $this->settings->url ) . '/assets/js/customizer/customizer' . $suffix . '.js',
			// array(
			// 'customize-preview',
			// 'customize-selective-refresh',
			// ),
			// '20151215',
			// true
			// );
		}
	}

	/**
	 * Register builder controls and settings.
	 *
	 * @since   1.0.0
	 * @access  public
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 */
	public function register( WP_Customize_Manager $wp_customize ) {
		/**
		 * A Builder Class instance.
		 *
		 * @var Builder $builder
		 */
		foreach ( $this->builders as $builder ) {
			$builder->customize_register( $wp_customize );
		}
	}

	/**
	 * The Customizer templates.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function template() {
		require_once  $this->settings->path . '/templates/rows.php';
		?>
		<script type="text/html" id="tmpl-hfg--builder-panel">
			<div class="hfg--customize-builder">
				<div class="hfg--cb-inner">
					<div class="hfg--cb-header">
						<div class="hfg--cb-devices-switcher">
						</div>
						<div class="hfg--cb-actions">
							<?php do_action( 'hfg_builder_panel_actions_buttons' ); ?>
							<a class="button button-secondary hfg--panel-close" href="#">
								<span class="close-text"><i class="dashicons dashicons-arrow-down-alt2" style="margin-top: 4px;"></i> <?php _e( 'Collapse', 'hfg' ); ?></span>
								<span class="panel-name-text"><i class="dashicons dashicons-arrow-up-alt2" style="margin-top: 4px;"></i> {{ data.title }}</span>
							</a>
						</div>
					</div>
					<div class="hfg--cb-body"></div>
				</div>
			</div>
		</script>


		<script type="text/html" id="tmpl-hfg--cb-item">
			<div class="grid-stack-item item-from-list for-s-{{ data.section }}"
				title="{{ data.name }}"
				data-id="{{ data.id }}"
				data-section="{{ data.section }}"
				data-control="{{ data.control }}"
				data-gs-x="{{ data.x }}"
				data-gs-y="{{ data.y }}"
				data-gs-width="{{ data.width }}"
				data-df-width="{{ data.width }}"
				data-gs-height="1"
			>
				<div class="item-tooltip" data-section="{{ data.section }}">{{ data.name }}</div>
				<div class="grid-stack-item-content">
					<span class="hfg--cb-item-name" data-section="{{ data.section }}">{{ data.name }}</span>
					<span class="hfg--cb-item-remove hfg-cb-icon"></span>
					<span class="hfg--cb-item-setting hfg-cb-icon" data-section="{{ data.section }}"></span>
				</div>
			</div>
		</script>

		<?php
	}
}
