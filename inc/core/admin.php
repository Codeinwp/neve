<?php
/**
 * Admin functionality
 *
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/08/2018
 *
 * @package Neve\Core
 */

namespace Neve\Core;

/**
 * Class Admin
 *
 * @package Neve\Core
 */
class Admin {
	/**
	 * Dismiss notice key.
	 *
	 * @var string
	 */
	private $dismiss_notice_key = 'neve_notice_dismissed';
	/**
	 * Theme Details
	 *
	 * @var \WP_Theme
	 */
	private $theme_args;

	/**
	 * Admin constructor.
	 */
	public function __construct() {
		$this->set_props();
		if ( class_exists( '\Neve_Dash\Main' ) ) {
			new \Neve_Dash\Main();
		}
		add_action(
			'admin_init',
			function () {
				if ( get_option( 'themeisle_ob_plugins_installed' ) !== 'yes' ) {
					return;
				}
				update_option( 'themeisle_blocks_settings_redirect', false );
				delete_transient( 'wpforms_activation_redirect' );
				update_option( 'themeisle_ob_plugins_installed', 'no' );
			},
			0
		);
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_gutenberg_scripts' ] );
		add_filter( 'themeisle_sdk_hide_dashboard_widget', '__return_true' );
		add_action( 'admin_notices', [ $this, 'incompatibility_notice' ] );
		add_filter(
			'neve_pro_addon_hide_license_notices',
			function () {
				return ! current_user_can( 'manage_options' );
			}
		);

		if ( get_option( $this->dismiss_notice_key ) !== 'yes' ) {
			add_action( 'admin_notices', [ $this, 'admin_notice' ] );
			add_action( 'wp_ajax_neve_dismiss_welcome_notice', [ $this, 'remove_notice' ] );
		}
	}

	/**
	 * Setup Class Properties
	 */
	public function set_props() {
		$this->theme_args = wp_get_theme();
	}

	/**
	 * Renders incompatibility notice.
	 */
	public function incompatibility_notice() {
		if ( ! defined( 'NEVE_PRO_VERSION' ) ) {
			return;
		}

		$current_screen = get_current_screen();
		if ( $current_screen->id === 'appearance_page_neve-welcome' ) {
			return;
		}
		$theme_name  = apply_filters( 'ti_wl_theme_name', $this->theme_args->__get( 'Name' ) );
		$plugin_name = apply_filters( 'ti_wl_plugin_name', 'Neve Pro' );

		$notifications = [];
		if ( current_user_can( 'update_themes' ) ) {
			$theme_slug    = 'neve';
			$themes_update = get_site_transient( 'update_themes' );
			if ( isset( $themes_update->response[ $theme_slug ] ) ) {
				$update                       = $themes_update->response[ $theme_slug ];
				$notifications[ $theme_slug ] = [
					'type' => 'theme',
					'path' => '',
					/* translators: %s - theme name */
					'cta'  => sprintf( __( 'Update %1$s to v%2$s', 'neve' ), $theme_name, $update['new_version'] ),
				];
			}
		}

		$pro_data = get_option( 'neve_pro_addon_license_data' );
		$valid    = isset( $pro_data->license ) && $pro_data->license === 'valid';

		if ( current_user_can( 'update_plugins' ) && $valid ) {
			$plugins_update = get_site_transient( 'update_plugins' );
			$plugin_path    = 'neve-pro-addon/neve-pro-addon.php';
			if ( isset( $plugins_update->response[ $plugin_path ] ) ) {
				$update                          = $plugins_update->response[ $plugin_path ];
				$notifications['neve-pro-addon'] = [
					'type' => 'plugin',
					'path' => $plugin_path,
					/* translators: %s - pro plugin name (Neve Pro) */
					'cta'  => sprintf( __( 'Update %1$s to v%2$s', 'neve' ), $plugin_name, $update->new_version ),
				];
			}
		}
		// Only show the notice when one version is mismatched.
		if ( ! is_array( $notifications ) || empty( $notifications ) || sizeof( $notifications ) !== 1 ) {
			return;
		}

		/* translators: 1 - Theme Name (Neve), 2 - Plugin Name (Neve Pro) */
		$text = sprintf( __( 'It is recommended that both %1$s and %2$s are updated to the latest version to ensure optimal intercompatibility.', 'neve' ), $theme_name, $plugin_name );

		$notice = '';
		echo '<style type="text/css">.neve-incompatibility-notice .actions {display:block;margin:15px 0;}</style>';
		?>
		<script type="text/javascript">
			function handleNeveUpdates($) {
				$('.neve-update-entity').each(function (index, button) {
					$(button).on('click', function (e) {
						e.preventDefault()
						var self = $(this)
						var type = self.data('type')
						var slug = self.data('slug')

						self.addClass('updating-message')
						self.attr('disabled', 'true')

						if (type === 'theme') {
							wp.updates.ajax('update-theme', {
								slug,
								success: function () {
									dismissNeveIncompatibility(self)
								},
								error: function (err) {
									handleError(self, err)
								}
							})
						} else {
							var path = self.data('path')
							wp.updates.ajax('update-plugin', {
								slug,
								plugin: path,
								success: function () {
									dismissNeveIncompatibility(self)
								},
								error: function (err) {
									handleError(self, err)

								}
							})
						}
					})
				})

				function handleError(button, error) {
					var notice = button.closest('.notice')
					var header = notice.find('h3')

					button.removeClass('updating-message').fadeOut()
					notice.removeClass('notice-warning').addClass('notice-error')
					header.text('<?php echo esc_html__( 'An error occured', 'neve' ); ?>: ' + error.errorMessage)
				}

				function dismissNeveIncompatibility(button) {
					var notice = $('.neve-incompatibility-notice')
					notice.removeClass('notice-warning').addClass('notice-success')
					button.removeClass('updating-message').addClass('updated-message')
					button.children('span').text('<?php echo esc_html__( 'Updated', 'neve' ); ?>')
					setTimeout(function () {
						$('.neve-incompatibility-notice').fadeOut()
					}, 2000)
				}
			}

			jQuery(document).ready(function () {
				handleNeveUpdates(jQuery)
			})
		</script>
		<?php

		$notice .= '<div class="neve-incompatibility-notice notice notice-warning">';
		$notice .= '<h3>' . __( 'Pending updates', 'neve' ) . ':' . '</h3>';
		$notice .= '<p>' . esc_html( $text ) . '</p>';
		$notice .= '<div class="actions">';
		foreach ( $notifications as $slug => $args ) {
			$notice .= '<button
			class="neve-update-entity button button-secondary"
			data-type="' . esc_attr( $args['type'] ) . '"
			data-path="' . esc_attr( $args['path'] ) . '"
			data-slug="' . esc_attr( $slug ) . '">';
			$notice .= '<span>' . esc_html( $args['cta'] ) . '</span>';
			$notice .= '</button>';
		}
		$notice .= '</div>';
		$notice .= '</div>';

		echo wp_kses_post( $notice );
	}

	/**
	 * Get notice screenshot based on previous theme.
	 *
	 * @return string Image url.
	 */
	private function get_notice_picture() {
		return get_template_directory_uri() . '/assets/img/sites-list.jpg';
	}

	/**
	 * Add notice.
	 */
	public function admin_notice() {
		if ( defined( 'TI_ONBOARDING_DISABLED' ) && TI_ONBOARDING_DISABLED === true ) {
			return;
		}

		$current_screen = get_current_screen();
		if ( $current_screen->id !== 'dashboard' && $current_screen->id !== 'themes' ) {
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
		if ( function_exists( 'is_gutenberg_page' ) && is_gutenberg_page() ) {
			return;
		}

		/**
		 * Backwards compatibility.
		 */
		global $current_user;
		$user_id          = $current_user->ID;
		$dismissed_notice = get_user_meta( $user_id, $this->dismiss_notice_key, true );

		if ( $dismissed_notice === 'dismissed' ) {
			update_option( $this->dismiss_notice_key, 'yes' );
		}

		if ( get_option( $this->dismiss_notice_key, 'no' ) === 'yes' ) {
			return;
		}

		// Let's dismiss the notice if the user sees it for more than 1 week.
		$activated_time = get_option( 'neve_install' );

		if ( ! empty( $activated_time ) ) {
			if ( time() - intval( $activated_time ) > WEEK_IN_SECONDS ) {
				update_option( $this->dismiss_notice_key, 'yes' );
				return;
			}
		}

		$style = '
			.ti-about-notice{
				position: relative;
			}

			.ti-about-notice .notice-dismiss{
				position: absolute;
				z-index: 10;
			    top: 10px;
			    right: 10px;
			    padding: 10px 15px 10px 21px;
			    font-size: 13px;
			    line-height: 1.23076923;
			    text-decoration: none;
			}

			.ti-about-notice .notice-dismiss:before{
			    position: absolute;
			    top: 8px;
			    left: 0;
			    transition: all .1s ease-in-out;
			    background: none;
			}

			.ti-about-notice .notice-dismiss:hover{
				color: #00a0d2;
			}
		';

		echo '<style>' . wp_kses_post( $style ) . '</style>';
		$this->dismiss_script();
		echo '<div class="nv-welcome-notice updated notice ti-about-notice">';
		echo '<div class="notice-dismiss"></div>';
		$this->welcome_notice_content();
		echo '</div>';
	}

	/**
	 * Render welcome notice content
	 */
	public function welcome_notice_content() {
		$name       = apply_filters( 'ti_wl_theme_name', $this->theme_args->__get( 'Name' ) );
		$template   = $this->theme_args->get( 'Template' );
		$slug       = $this->theme_args->__get( 'stylesheet' );
		$theme_page = ! empty( $template ) ? $template . '-welcome' : $slug . '-welcome';

		$notice_template = '
			<div class="nv-notice-wrapper">
			%1$s
			<hr/>
				<div class="nv-notice-column-container">
					<div class="nv-notice-column nv-notice-image">%2$s</div>
					<div class="nv-notice-column nv-notice-starter-sites">%3$s</div>
					<div class="nv-notice-column nv-notice-documentation">%4$s</div>
				</div>
			</div>
			<style>%5$s</style>';

		/* translators: 1 - notice title, 2 - notice message */
		$notice_header = sprintf(
			'<h2>%1$s</h2><p class="about-description">%2$s</p></hr>',
			esc_html__( 'Congratulations!', 'neve' ),
			sprintf(
				/* translators: %s - theme name */
				esc_html__( '%s is now installed and ready to use. We\'ve assembled some links to get you started.', 'neve' ),
				$name
			)
		);
		$ob_btn = sprintf(
		/* translators: 1 - onboarding url, 2 - button text */
			'<a href="%1$s" class="button button-primary button-hero install-now" >%2$s</a>',
			esc_url( admin_url( 'themes.php?page=' . $theme_page . '&onboarding=yes#starter-sites' ) ),
			sprintf( apply_filters( 'ti_onboarding_neve_start_site_cta', esc_html__( 'Try one of our ready to use Starter Sites', 'neve' ) ) )
		);
		$ob_return_dashboard = sprintf(
		/* translators: 1 - button text */
			'<a href="' . esc_url( admin_url() ) . '" class=" ti-return-dashboard  button button-secondary button-hero install-now" ><span>%1$s</span></a>',
			__( 'Return to your dashboard', 'neve' )
		);
		$options_page_btn = sprintf(
		/* translators: 1 - options page url, 2 - button text */
			'<a href="%1$s" class="options-page-btn">%2$s</a>',
			esc_url( admin_url( 'themes.php?page=' . $theme_page ) ),
			esc_html__( 'or go to the theme settings', 'neve' )
		);
		$notice_picture    = sprintf(
			'<picture>
					<source srcset="about:blank" media="(max-width: 1024px)">
					<img src="%1$s"/>
				</picture>',
			esc_url( $this->get_notice_picture() )
		);
		$notice_sites_list = sprintf(
			'<div><h3><span class="dashicons dashicons-images-alt2"></span> %1$s</h3><p>%2$s</p></div><div> <p>%3$s</p><p>%4$s</p> </div>',
			__( 'Sites Library', 'neve' ),
			// translators: %s - theme name
				sprintf( esc_html__( '%s now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve' ), $name ),
			$ob_btn,
			$options_page_btn
		);
		$notice_documentation = sprintf(
			'<div><h3><span class="dashicons dashicons-format-aside"></span> %1$s</h3><p>%2$s</p><a href="%3$s">%4$s</a></div><div> <p>%5$s</p></div>',
			__( 'Documentation', 'neve' ),
			// translators: %s - theme name
				sprintf( esc_html__( 'Need more details? Please check our full documentation for detailed information on how to use %s.', 'neve' ), $name ),
			'https://docs.themeisle.com/article/946-neve-doc',
			esc_html__( 'Read full documentation', 'neve' ),
			$ob_return_dashboard
		);
		$style = '
		.nv-notice-wrapper h2{
			margin: 0;
			font-size: 21px;
			font-weight: 400;
			line-height: 1.2;
		}
		.nv-notice-wrapper p.about-description{
			color: #72777c;
			font-size: 16px;
			margin: 0;
			padding:0px;
		}
		.nv-notice-wrapper{
			padding: 23px 10px 0;
			max-width: 1500px;
		}
		.nv-notice-wrapper hr {
			margin: 20px -23px 0;
			border-top: 1px solid #f3f4f5;
			border-bottom: none;
		}
		.nv-notice-column-container h3{
			margin: 17px 0 0;
			font-size: 16px;
			line-height: 1.4;
		}
		.nv-notice-column-container p {
			color: #72777c;
		}
		.nv-notice-text p.ti-return-dashboard {
			margin-top: 30px;
	}
		.nv-notice-column-container .nv-notice-column{
			 padding-right: 40px;
		}
		.nv-notice-column-container img{
			margin-top: 23px;
			width: calc(100% - 40px);
			border: 1px solid #f3f4f5;
		}
		.nv-notice-column-container {
			display: -ms-grid;
			display: grid;
			-ms-grid-columns: 24% 32% 32%;
			grid-template-columns: 24% 32% 32%;
			margin-bottom: 13px;
		}
		.nv-notice-column-container a.button.button-hero.button-secondary,
		.nv-notice-column-container a.button.button-hero.button-primary{
			margin:0px;
		}
		.nv-notice-column-container .nv-notice-column:not(.nv-notice-image) {
			display: -ms-grid;
			display: grid;
			-ms-grid-rows: auto 100px;
			grid-template-rows: auto 100px;
		}
		@media screen and (max-width: 1280px) {
			.nv-notice-wrapper .nv-notice-column-container {
				-ms-grid-columns: 50% 50%;
				grid-template-columns: 50% 50%;
			}
			.nv-notice-column-container a.button.button-hero.button-secondary,
			.nv-notice-column-container a.button.button-hero.button-primary{
				padding:6px 18px;
			}
			.nv-notice-wrapper .nv-notice-image {
				display: none;
			}
		}
		@media screen and (max-width: 870px) {

			.nv-notice-wrapper .nv-notice-column-container {
				-ms-grid-columns: 100%;
				grid-template-columns: 100%;
			}
			.nv-notice-column-container a.button.button-hero.button-primary{
				padding:12px 36px;
			}
		}
		';
		echo sprintf(
			$notice_template, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			$notice_header, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			$notice_picture, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			$notice_sites_list, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			$notice_documentation, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			$style // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		);
	}

	/**
	 * Load site import module.
	 */
	public function load_site_import() {
		if ( class_exists( '\TIOB\Main' ) ) {
			\TIOB\Main::instance();
		}
	}

	/**
	 * Enqueue gutenberg scripts.
	 */
	public function enqueue_gutenberg_scripts() {
		$screen = get_current_screen();
		if ( ! post_type_supports( $screen->post_type, 'editor' ) ) {
			return;
		}
		wp_enqueue_script(
			'neve-gutenberg-script',
			NEVE_ASSETS_URL . 'js/build/all/gutenberg.js',
			array( 'wp-blocks', 'wp-dom' ),
			NEVE_VERSION,
			true
		);
		wp_enqueue_style( 'neve-gutenberg-style', NEVE_ASSETS_URL . 'css/gutenberg-editor-style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), NEVE_VERSION );
	}

	/**
	 * Dismiss notice JS
	 */
	private function dismiss_script() {
		?>
		<script type="text/javascript">
			function handleNoticeActions($) {
				var actions = $('.nv-welcome-notice').find('.notice-dismiss,  .ti-return-dashboard, .install-now, .options-page-btn')
				$.each(actions, function (index, actionButton) {
					$(actionButton).on('click', function (e) {
						e.preventDefault()
						var redirect = $(this).attr('href')
						$.post(
								'<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>',
								{
									nonce: '<?php echo esc_attr( wp_create_nonce( 'remove_notice_confirmation' ) ); ?>',
									action: 'neve_dismiss_welcome_notice',
									success: function () {
										if (typeof redirect !== 'undefined' && window.location.href !== redirect) {
											window.location = redirect
											return false
										}
										$('.nv-welcome-notice').fadeOut()
									}
								}
						)
					})
				})
			}

			jQuery(document).ready(function () {
				handleNoticeActions(jQuery)
			})
		</script>
		<?php
	}

	/**
	 * Remove notice;
	 */
	public function remove_notice() {
		if ( ! isset( $_POST['nonce'] ) ) {
			return;
		}
		if ( ! wp_verify_nonce( sanitize_text_field( $_POST['nonce'] ), 'remove_notice_confirmation' ) ) {
			return;
		}
		update_option( $this->dismiss_notice_key, 'yes' );
		wp_die();
	}
}
