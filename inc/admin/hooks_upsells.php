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
						$upsell_url = tsdk_utmify( 'https://themeisle.com/themes/neve/upgrade/', 'viewhooks' );
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

}
