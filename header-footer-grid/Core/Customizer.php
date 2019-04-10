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

use HFG\Core\Builder\Abstract_Builder;
use HFG\Core\Interfaces\Builder;
use HFG\Core\Settings\Config;
use HFG\Main;
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
	 */
	public function __construct() {
		$theme_support = get_theme_support( 'hfg_support' );

		if ( empty( $theme_support ) ) {
			return;
		}
		$theme_support = reset( $theme_support );
		foreach ( $theme_support['builders'] as $builder => $components ) {
			if ( class_exists( $builder ) && in_array( 'HFG\Core\Interfaces\Builder', class_implements( $builder ) ) ) {
				/**
				 * A new builder instance.
				 *
				 * @var Abstract_Builder $new_builder
				 */
				$new_builder = new $builder();
				foreach ( $components as $component ) {
					$new_builder->register_component( $component );
				}
				$this->builders[ $new_builder->get_id() ] = $new_builder;
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
	 * @param array $classes List of body classes.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function hfg_body_classes( $classes ) {
		if ( is_customize_preview() ) {
			$classes[] = 'customize-previewing';
		}

		$classes[] = 'menu_sidebar_slide_left';

		return $classes;
	}

	/**
	 * Customizer script register.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function scripts() {
		$suffix = $this->get_assets_suffix();
		wp_enqueue_style(
			'hfg-customizer-control',
			esc_url( Config::get_url() ) . '/assets/css/admin/customizer/customizer' . $suffix . '.css',
			array(),
			Main::VERSION
		);

		wp_register_script(
			'hfg-layout-builder',
			esc_url( Config::get_url() ) . '/assets/js/customizer/builder' . $suffix . '.js',
			array(
				'customize-controls',
				'jquery-ui-resizable',
				'jquery-ui-droppable',
				'jquery-ui-draggable',
			),
			Main::VERSION,
			true
		);
		wp_localize_script(
			'hfg-layout-builder',
			'HFG_Layout_Builder',
			array(
				'footer_moved_widgets_text' => '',
				'builders'                  => $this->get_builders_data(),
				'is_rtl'                    => is_rtl(),
			)
		);
		wp_enqueue_script( 'hfg-layout-builder' );

		/**
		 * A Builder Class instance.
		 *
		 * @var Builder $builder
		 */
		foreach ( $this->builders as $builder ) {
			$builder->scripts();
		}
	}

	/**
	 * Returns list of builders.
	 *
	 * @return array
	 * @since   1.0.0
	 * @access  public
	 */
	public function get_builders_data() {

		$builders_list = array();

		/**
		 * A Builder Class instance.
		 *
		 * @var Builder $builder
		 */
		foreach ( $this->builders as $key => $builder ) {
			$builders_list[ $key ] = $builder->get_builder();
		}

		return $builders_list;
	}

	/**
	 * Return builder object or whole list.
	 *
	 * @param string $name Builder id.
	 *
	 * @return Abstract_Builder[]|Abstract_Builder Builder object or list.
	 */
	public function get_builders( $name = '' ) {
		if ( isset( $this->builders[ $name ] ) ) {
			return $this->builders[ $name ];
		}

		return $this->builders;
	}

	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 *
	 * @since   1.0.0
	 * @access  public
	 */
	public function preview_js() {
		if ( ! is_customize_preview() ) {
			return;
		}
		$suffix = $this->get_assets_suffix();
		wp_enqueue_script(
			'hfg-customizer',
			esc_url( Config::get_url() ) . '/assets/js/customizer/customizer' . $suffix . '.js',
			array(
				'customize-preview',
				'customize-selective-refresh',
			),
			Main::VERSION,
			true
		);

	}

	/**
	 * Register builder controls and settings.
	 *
	 * @param WP_Customize_Manager $wp_customize The Customize Manager.
	 *
	 * @since   1.0.0
	 * @access  public
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
		require_once Config::get_path() . '/templates/rows.php';
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
								<span class="close-text"><i class="dashicons dashicons-arrow-down-alt2"
										style="margin-top: 4px;"></i> <?php _e( 'Close', 'neve' ); // WPCS: XSS OK. ?></span>
								<span class="panel-name-text">
									<i class="dashicons dashicons-arrow-up-alt2" style="margin-top: 4px;"></i>
									{{ data.title }}
								</span>
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
