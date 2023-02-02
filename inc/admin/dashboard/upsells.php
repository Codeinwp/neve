<?php
/**
 * Dashboard upsells.
 *
 * @package Neve\Admin\Dashboard
 */

namespace Neve\Admin\Dashboard;

/**
 * Class Upsells
 *
 * @package Neve\Customizer\Options
 */
class Upsells {

	/**
	 * Init function
	 *
	 * @return bool|void
	 */
	public function init() {
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		$is_sparks_active    = defined( 'SPARKS_WC_VERSION' );
		$installed_plugins   = get_plugins();
		$is_sparks_installed = array_key_exists( 'sparks-for-woocommerce/sparks-for-woocommerce.php', $installed_plugins );

		if ( $is_sparks_installed && $is_sparks_active ) {
			return;
		}

		add_action( 'woocommerce_product_data_tabs', [ $this, 'add_product_tabs_panel' ] );
		add_action( 'woocommerce_product_data_panels', [ $this, 'render_product_tabs' ] );
		add_action( 'admin_notices', [ $this, 'admin_notice' ] );
		add_action( 'admin_init', [ $this, 'disable_sp_notice' ] );
	}

	/**
	 * Add Product tabs tab in Product data panel.
	 *
	 * @param array<string, array<string, mixed>> $tabs Current admin product tabs.
	 *
	 * @return array<string, array<string, mixed>>
	 */
	public function add_product_tabs_panel( $tabs ) {
		$tabs['neve_product_tabs'] = [
			'label'  => esc_html__( 'Product tabs', 'neve' ),
			'target' => 'sp-product-tabs',
			'class'  => [ 'show_if_simple', 'show_if_variable' ],
		];
		return $tabs;
	}

	/**
	 * Get the template for a tab item in the tab panel.
	 *
	 * @return string
	 */
	private function get_tab_template() {
		$result  = '<div class="woocommerce_attribute sp-product-tab wc-metabox">';
		$result .= '<h3>';
		$result .= '<button type="button" class="sp-remove-tab button">';
		$result .= esc_html__( 'Remove', 'neve' );
		$result .= '</button>';
		$result .= '<div class="sp-tab-handle"></div>';
		$result .= '<strong class="sp-tab-name">%s</strong>';
		$result .= '</h3>';
		$result .= '</div>';
		return $result;
	}

	/**
	 * Render the content in product tabs.
	 *
	 * @return void
	 */
	public function render_product_tabs() { ?>
		<style>
			#woocommerce-product-data ul.wc-tabs li.neve_product_tabs_options a::before {
				content: "\f160";
			}

			#sp-product-tabs .toolbar {
				display: flex;
				justify-content: end;
			}

			#sp-product-tabs .toolbar.top {
				align-items: center;
				justify-content: space-between;
				color: #2271b1;
			}

			.sp-tab-handle {
				margin-top: 0.25em;
				cursor: move;
				float: right;
				margin-right: 0.5em;
				vertical-align: middle;
			}

			.sp-tab-handle::before {
				content: "\f333";
				font-family: Dashicons, serif;
				text-align: center;
				line-height: 28px;
				color: #999;
			}

			#sp-product-tabs .wc-metabox table td input[type="button"] {
				width: auto;
				min-width: auto;
			}

			.sp-tab-block {
				background-color: #fff;
				height: 100%;
				left: 0;
				opacity: 0.6;
				position: absolute;
				top: 0;
				width: 100%;
			}
		</style>

		<div id="sp-product-tabs" class="panel wc-metaboxes-wrapper">
			<p class="toolbar top">
				<?php
				echo wp_kses_post(
					sprintf(
						'<span><span class="dashicons dashicons-info"></span>%1$s</span><a href="%2$s" class="button">%3$s</a>',
						sprintf(
							/* translators: %1$s Sparks for WooCommerce, %2$s CTA button text */
							__( 'Unlock the full potential of your online store with %1$s. Get access to %2$s and many more!', 'neve' ),
							'<strong>Sparks for WooCommerce</strong>',
							'<strong>' . __( 'Custom Product Tabs', 'neve' ) . '</strong>'
						),
						tsdk_utmify( 'https://themeisle.com/plugins/sparks-for-woocommerce/', 'customproducttabs' ),
						__( 'Get Sparks for WooCommerce', 'neve' )
					)
				);

				?>
			</p>

			<div style="position: relative;">
				<?php
				$template = $this->get_tab_template();
				?>
				<div class="sp-tab-block"></div>
				<div class="sp-tab-template">
					<?php echo wp_kses_post( sprintf( $template, esc_html__( 'Description', 'neve' ) ) ); ?>
					<?php echo wp_kses_post( sprintf( $template, esc_html__( 'Additional Information', 'neve' ) ) ); ?>
					<?php echo wp_kses_post( sprintf( $template, esc_html__( 'Reviews', 'neve' ) ) ); ?>
				</div>
				<p class="toolbar">
					<button type="button" class="button button-primary sp-add-tab">
						<?php esc_html_e( 'Add', 'neve' ); ?>
					</button>
					<select name="sp-insert-new-tab" class="sp-insert-new-tab">
						<option value="">
							<?php esc_html_e( 'Custom Tab', 'neve' ); ?>
						</option>
					</select>
				</p>
			</div>
		</div>
		<?php
	}

	/**
	 * Add a notice for Sparks inside dashboard on Products page.
	 *
	 * @return void
	 */
	public function admin_notice() {
		global $current_user;
		$user_id        = $current_user->ID;
		$ignored_notice = get_user_meta( $user_id, 'neve_ignore_sp_notice' );
		if ( ! empty( $ignored_notice ) ) {
			return;
		}

		$current_screen = get_current_screen();
		if ( $current_screen->id !== 'edit-product' ) {
			return;
		}

		if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
			return;
		}

		if ( is_network_admin() ) {
			return;
		}

		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( get_option( 'dismiss_sparks_upsell', 'no' ) === 'yes' ) {
			return;
		}


		$style = '
			.nv-sp-upsell{
				position: relative;
			}
			.sp-container {
				display: flex;
				padding: 20px;
			}
			.sp-image-column {
				max-width: 200px;
				padding-right: 20px;
			}
			.sp-image-column img {
				max-width: 100%;
			}
			.sp-text-column {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-evenly;
			}
			.sp-text-column h2 {
				margin: 0;
			}
		';

		$dismiss_button = sprintf(
			'<a href="%s" class="notice-dismiss" style="text-decoration:none;"></a>',
			'?neve_ignore_sp_notice=ignore'
		);

		$button_url = tsdk_utmify( 'https://themeisle.com/plugins/sparks-for-woocommerce/', 'wooadminproductsnotice' );

		echo '<style>' . wp_kses_post( $style ) . '</style>';
		echo '<div class="nv-sp-upsell notice-info notice">';
		echo wp_kses_post( $dismiss_button );
		echo '<div class="sp-container">';
		echo '<div class="sp-image-column">';
		echo '<img src="' . esc_url( get_template_directory_uri() . '/assets/img/sparks-logo-basic.svg' ) . '" alt="Image">';
		echo '</div>';
		echo '<div class="sp-text-column">';
		echo '<h2>' . esc_html__( 'Get Sparks for WooCommrece and give your site a boost in sales using the advanced eCommerce features', 'neve' ) . '</h2>';
		echo '<p>' . esc_html__( 'With Sparks you get to access new features, specially designed for smooth WooCommerce integration. Maximizing your conversion rate with features like Sticky Add to Cart, Wishlists, Cart Notices, Custom Thank You Pages and a lot more', 'neve' ) . '</p>';
		echo '<a href="' . esc_url( $button_url ) . '" class="button button-primary">' . esc_html__( 'See all features', 'neve' ) . '</a>';
		echo '</div>';
		echo '</div>';
		echo '</div>';
	}

	/**
	 * Disable Sparks upsell.
	 */
	public function disable_sp_notice() {
		global $current_user;
		$user_id = $current_user->ID;
		/* If user clicks to ignore the notice, add that to their user meta */
		if ( isset( $_GET['neve_ignore_sp_notice'] ) && 'ignore' === $_GET['neve_ignore_sp_notice'] ) {
			add_user_meta( $user_id, 'neve_ignore_sp_notice', 'true', true );
		}
	}
}
