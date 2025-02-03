<?php
/**
 * Upsell for hooks.
 *
 * @package Neve\Customizer
 */

namespace Neve\Admin;

use Neve\Core\Dynamic_Css;

/**
 * Class Hooks_Upsells
 *
 * @package Neve\Admin
 */
class Hooks_Upsells {

	/**
	 * Initialize function.
	 */
	public function init() {
		if ( ! $this->should_load() ) {
			return;
		}

		add_action( 'admin_bar_menu', array( $this, 'add_admin_bar_menu' ), 99 );
		add_action( 'wp', array( $this, 'render_hook_placeholder' ) );

		if ( 'valid' === apply_filters( 'product_neve_license_status', false ) ) {
			return;
		}

		/**
		 * Add the Custom Layout page with upsell elements.
		 */
		add_action( 'neve_register_submenu_page', array( $this, 'register_custom_layout_upsell_page' ), 10, 2 );
	}

	/**
	 * Check user role before allowing the class to run
	 *
	 * @return bool
	 */
	public function should_load() {
		$should_load = current_user_can( 'administrator' ) && ! defined( 'NEVE_PRO_VERSION' );
		return apply_filters( 'neve_hooks_upsell_should_load', $should_load );
	}

	/**
	 * Check if the hooks should be shown.
	 */
	private function show_hooks() {
		return isset( $_GET['neve_preview_hook'] ) && 'show' === $_GET['neve_preview_hook'];
	}

	/**
	 * Render the admin item to show/hide hooks.
	 *
	 * @param \WP_Admin_Bar $wp_admin_bar Admin bar menus.
	 *
	 * @return void
	 */
	public function add_admin_bar_menu( $wp_admin_bar ) {
		if ( is_admin() ) {
			return;
		}

		$title = __( 'Show Hooks', 'neve' );
		$href  = add_query_arg( 'neve_preview_hook', 'show' );
		if ( $this->show_hooks() ) {
			$title = __( 'Hide Hooks', 'neve' );
			$href  = remove_query_arg( 'neve_preview_hook' );
		}

		$wp_admin_bar->add_menu(
			array(
				'title'  => sprintf( '%s <span class="dashicons dashicons-lock" style="font-family: dashicons"></span>', $title ),
				'id'     => 'neve_preview_hook',
				'parent' => false,
				'href'   => $href,
			)
		);
	}

	/**
	 * Beautify the hook name.
	 *
	 * @param string $hook_label The hook label.
	 *
	 * @return string
	 */
	public static function beautify_hook( $hook_label ) {
		$hook_label = str_replace( 'neve_', '', $hook_label );
		$hook_label = str_replace( '_', ' ', $hook_label );
		$hook_label = str_replace( 'nv', ' ', $hook_label );
		$hook_label = str_replace( 'woocommerce', ' ', $hook_label );
		return ucwords( $hook_label );
	}

	/**
	 * Get the CSS for the hooks.
	 *
	 * @return string
	 */
	private function get_css() {
		return '
		.nv-hook-wrapper {
			text-align: center; width: 100%;
		}
		.nv-hook-placeholder {
			display: flex;
			width: 98%;
			justify-content: center;
			align-items: center;
			margin: 10px auto;
			border: 2px dashed #0065A6;
			font-size: 14px;
			padding: 6px 10px;
			text-align: left;
			word-break: break-word;
		}
		.nv-hook-placeholder a {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #0065A6;
			min-width: 250px;
			width: 100%;
			font-size: 16px;
			min-height: 32px;
			text-decoration: none;
		}
		.nv-hook-placeholder a:hover, .nv-hook-placeholder a:focus {
			text-decoration: none;
		}
		.nv-hook-placeholder a:hover .nv-hook-upsell, .nv-hook-placeholder a:focus .nv-hook-upsell {
			color: #0065A6;
			opacity: 1;
		 }
		.nv-hook-placeholder a .nv-hook-upsell {
			font-size: 14px;
			line-height: 16px;
			font-weight: 600;
			padding: 3px 2px;
			margin-left: -2px;
			display: flex;
			align-items: center;
			opacity: 0;
			transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
			position: absolute;
		}
		.nv-hook-placeholder a .nv-hook-name {
			transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
			font-size: 14px;
			opacity: 1;
		}
		.nv-hook-placeholder a:hover .nv-hook-name, .nv-hook-placeholder a:focus .nv-hook-name {
			opacity: 0;
		';
	}

	/**
	 * Render the hooks placeholders with upsell.
	 */
	public function render_hook_placeholder() {
		if ( ! $this->show_hooks() ) {
			return;
		}
		$hooks = neve_hooks();
		echo '<style>';
		echo esc_attr( Dynamic_Css::minify_css( $this->get_css() ) );
		echo '</style>';
		$upsell_label = __( 'Neve PRO Features', 'neve' ) . ' / ' . __( 'Learn more', 'neve' );

		// These hooks have to be removed as to not have nested links that will break the layout.
		// We don't need them when the hooks are displayed, as the action will be replaced by the displayed hook action.
		remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10 );
		remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );

		foreach ( $hooks as $hooks_in_category ) {
			foreach ( $hooks_in_category as $hook_value ) {
				$hook_label = self::beautify_hook( $hook_value );
				add_action(
					$hook_value,
					function () use ( $hook_value, $hook_label, $upsell_label ) {
						$style = '';
						if ( 'woocommerce_before_shop_loop_item' === $hook_value ) {
							$style = 'max-width: 200px;';
						}
						$upsell_url = tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'viewhooks' ), 'query' );
						echo '<div class="nv-hook-wrapper nv-hook-upsell-wrapper">';
						echo '<div class="nv-hook-placeholder">';
						echo '<a href="' . esc_url( $upsell_url ) . '" title="' . esc_attr( $upsell_label ) . '" target="_blank">';
						echo '<span class="nv-hook-upsell" style="' . esc_attr( $style ) . '">' . esc_html( $upsell_label ) . '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="components-external-link__icon" role="img" aria-hidden="true" focusable="false" style="fill: #0073AA"><path d="M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"></path></svg></span>';
						echo '<span class="nv-hook-name"><span class="dashicons dashicons-lock"></span>' . esc_html( $hook_label ) . '</span>';
						echo '</a>';
						echo '</div>';
						echo '</div>';
					}
				);
			}
		}
	}

		/**
		 * Registers a custom layout upsell page in the WordPress admin dashboard.
		 *
		 * @param string $theme_page  The slug name for the parent menu (or the file name of a standard WordPress admin page).
		 * @param string $capability  The capability required for this menu to be displayed to the user.
		 * @access public
		 *
		 * @return void
		 */
	public function register_custom_layout_upsell_page( $theme_page, $capability ) {
		
		// Add Custom Layout submenu for upsell.
		// phpcs:ignore WPThemeReview.PluginTerritory.NoAddAdminPages.add_menu_pages_add_submenu_page
		add_submenu_page( 
			$theme_page,
			__( 'Custom Layouts', 'neve' ),
			__( 'Custom Layouts', 'neve' ),
			$capability,
			'neve-custom-layout-upsell',
			array( $this, 'render_custom_layout_page' )
		);
	}

	/**
	 * Renders the upsell modal for custom layouts feature.
	 *
	 * @return void
	 */
	public function render_custom_layouts_upsell_modal() {
		?>
		<style>
			#wpcontent {
				position: relative;
			}

			#wpbody {
				min-height: 100vh;
				position: static;
			}

			/* ----- OVERLAY ----- */
			.cl-overlay {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 80;
				background: rgba(0, 0, 0, 0.5);
				display: flex;
				align-items: center;
				justify-content: center;
			}

			/* ----- MODAL ----- */
			.cl-modal {
				background: #fff;
				width: 600px;
				max-width: 90%;
				padding: 40px;
				border-radius: 8px;
				position: relative;
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
				font-family: inherit; /* match WP admin fonts */
			}

			/* ----- CLOSE BUTTON ----- */
			.cl-modal-dismiss .cl-close-button {
				position: absolute;
				top: 10px;
				right: 10px;
				cursor: pointer;
				min-width: 30px;;
				text-decoration: none;
			}

			.cl-modal-dismiss .cl-close-button:hover {
				color: #333;
			}

			.cl-modal-dismiss .cl-close-button span {
				color: black;
				font-size: 2rem;
			}

			/* ----- HEADER / TITLE ----- */
			.cl-modal-header {
				text-align: center;
				margin-bottom: 16px;

				display: flex;
				flex-direction: column;
				gap: 5px;
			}
			.cl-modal-header .dashicons-star-filled {
				display: block;
				font-size: 32px;
				margin: 0 auto 8px;
				color: black;
			}
			.cl-modal-header h2 {
				margin: 0;
				font-size: 22px;
				line-height: 1.3;
			}

			/* ----- SUBTITLE ----- */
			.cl-modal-subtitle {
				text-align: center;
				margin: 0 auto 20px;
				color: #666;
				font-size: 14px;
				max-width: 80%;
			}

			/* ----- FEATURE GRID ----- */
			.cl-features {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				gap: 20px;
				margin-bottom: 40px;
			}
			.cl-feature {
				display: flex;
				align-items: flex-start;
				flex: 0 0 48%; /* 2 columns in a row on large screens */
				gap: 10px;
				flex-grow: 1;
			}
			.cl-feature .dashicons {
				font-size: 24px;
				color: #0073aa;
				flex-shrink: 0;
				margin-top: -2px;
			}
			.cl-feature h3 {
				margin: 0;
				font-size: 16px;
				line-height: 1.3;
			}
			.cl-feature p {
				margin: 4px 0 0;
				font-size: 13px;
				color: #555;
			}

			/* ----- ACTION BUTTONS ----- */
			.cl-actions {
				display: flex;
				justify-content: center;
				gap: 20px;
				margin-bottom: 20px;
			}
			.cl-actions .button {
				text-decoration: none;
				min-width: 120px;
				text-align: center;
			}

			/* ----- QUOTE ----- */
			.cl-quote {
				font-size: 14px;
				font-style: italic;
				color: #555;
				text-align: center;
				max-width: 80%;
				margin: 0 auto;
			}
			.cl-quote-author {
				font-style: normal;
				display: block;
				margin-top: 8px;
				font-weight: 600;
				text-align: center;
				color: #444;
			}

			@media (max-width: 480px) {
				.cl-quote {
					display: none;
				}

				.cl-features {
					max-height: 350px;
					overflow-y: auto;
					padding: 0 40px;
				}

				.cl-modal {
					padding: 20px 0px;
				}
			}

			.wp-core-ui .notice {
				display: none;
			}
		</style>

		<div class="cl-overlay">
			<div class="cl-modal">
				<div class="cl-modal-dismiss">
					<button id="cl-close-modal" class="cl-close-button button button-link">
						<span class="dashicons dashicons-no-alt" aria-hidden="true"></span>
						<span class="screen-reader-text"><?php echo esc_html__( 'Close', 'neve' ); ?></span>
					</button>
				</div>
				<div class="cl-modal-header">
					<span class="dashicons dashicons-star-filled" aria-hidden="true"></span>
					<h2><?php echo esc_html__( 'Take Your Site to the Next Level', 'neve' ); ?></h2>
				</div>

				<p class="cl-modal-subtitle">
					<?php echo esc_html__( 'Custom Layouts helps you create a unique website that stands out', 'neve' ); ?>
				</p>

				<div class="cl-features">
					<div class="cl-feature">
						<span class="dashicons dashicons-admin-appearance" aria-hidden="true"></span>
						<div>
							<h3><?php echo esc_html__( 'Build Without Code', 'neve' ); ?></h3>
							<p><?php echo esc_html__( 'Create stunning headers, footers, and content sections with our visual drag & drop builder', 'neve' ); ?></p>
						</div>
					</div>
					<div class="cl-feature">
						<span class="dashicons dashicons-layout" aria-hidden="true"></span>
						<div>
							<h3><?php echo esc_html__( 'Smart Display Rules', 'neve' ); ?></h3>
							<p><?php echo esc_html__( 'Show different layouts based on user roles, devices, or content types', 'neve' ); ?></p>
						</div>
					</div>
					<div class="cl-feature">
						<span class="dashicons dashicons-cart" aria-hidden="true"></span>
						<div>
							<h3><?php echo esc_html__( 'WooCommerce Ready', 'neve' ); ?></h3>
							<p><?php echo esc_html__( 'Design custom shop pages, product layouts, and checkout experiences', 'neve' ); ?></p>
						</div>
					</div>
					<div class="cl-feature">
						<span class="dashicons dashicons-performance" aria-hidden="true"></span>
						<div>
							<h3><?php echo esc_html__( 'Optimized Performance', 'neve' ); ?></h3>
							<p><?php echo esc_html__( 'All layouts are lightweight and load only where needed', 'neve' ); ?></p>
						</div>
					</div>
				</div>

				<div class="cl-actions">
					<a class="button button-primary" href="<?php echo esc_url_raw( tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/pricing/', 'custom-layout-modal-upsell-pricing' ) ) ); ?>" target="_blank">
						<?php echo esc_html__( 'Get Neve Pro', 'neve' ); ?>
					</a>
					<a class="button" href="<?php echo esc_url_raw( tsdk_translate_link( tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'custom-layout-modal-upsell-features' ) ) ); ?>" target="_blank">
						<?php echo esc_html__( 'See All Features', 'neve' ); ?>
					</a>
				</div>

				<div class="cl-quote">
					<?php
					echo esc_html( 'I’ve been using Neve by Themeisle for a few years now, and it’s proven to be the best theme I’ve ever built websites on. It’s lightweight, modern, fast, customizable, and works great with Woocommerce stores too.' );
					?>
					<span class="cl-quote-author">
						— <?php echo esc_html( 'Ville Ekman' ); ?>
					</span>
				</div>
			</div>
		</div>
		<script type="text/javascript">
		document.addEventListener('DOMContentLoaded', function() {
			const overlay = document.querySelector('.cl-overlay');
			if ( ! overlay ) {
				return;
			}

			document.getElementById('cl-close-modal')?.addEventListener('click', function() {
				overlay.style.display = 'none';
			});

			document.getElementById('cl-open-modal')?.addEventListener('click', function() {
				overlay.style.display = 'flex';
			});
		});
		</script>
		<?php
	}

	/**
	 * Renders the the upsell page for Custom Layouts which contains a modal and small table behind overlay to match the real dashboard.
	 * 
	 * @return void
	 */
	public function render_custom_layout_page() {
		?>
		<?php $this->render_custom_layouts_upsell_modal(); ?>
		<div class="wrap">
			<div class="wp-list-table">
				<table class="widefat posts">
					<thead>
						<tr>
							<td class="manage-column check-column">
								<input type="checkbox" disabled />
							</td>
							<th scope="col" class="manage-column column-title column-primary"><?php echo esc_html__( 'Title', 'neve' ); ?></th>
							<th scope="col" class="manage-column"><?php echo esc_html__( 'Type', 'neve' ); ?></th>
							<th scope="col" class="manage-column"><?php echo esc_html__( 'Location', 'neve' ); ?></th>
							<th scope="col" class="manage-column"><?php echo esc_html__( 'Status', 'neve' ); ?></th>
							<th scope="col" class="manage-column"><?php echo esc_html__( 'Date', 'neve' ); ?></th>
						</tr>
					</thead>
					<tbody id="the-list">
						<tr>
							<td colspan="6" class="column-primary">
								<p class="description" style="text-align: center; padding: 20px;">
									<?php echo esc_html__( 'Upgrade to Neve Pro to create a Custom Layout.', 'neve' ); ?>
								</p>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td class="manage-column check-column">
								<input type="checkbox" disabled />
							</td>
							<th scope="col" class="manage-column column-title column-primary"><?php echo esc_html__( 'Title', 'neve' ); ?></th>
							<th scope="col" class="manage-column"><?php echo esc_html__( 'Type', 'neve' ); ?></th>
							<th scope="col" class="manage-column"><?php echo esc_html__( 'Location', 'neve' ); ?></th>
							<th scope="col" class="manage-column"><?php echo esc_html__( 'Status', 'neve' ); ?></th>
							<th scope="col" class="manage-column"><?php echo esc_html__( 'Date', 'neve' ); ?></th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
		<?php
	}
}
