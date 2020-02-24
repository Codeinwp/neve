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
	 * Current theme name
	 *
	 * @var string $theme_name Theme name.
	 */
	private $theme_name;

	/**
	 * Current theme slug.
	 *
	 * @var string $theme_slug Theme slug.
	 */
	private $theme_slug;

	/**
	 * Admin constructor.
	 */
	public function __construct() {
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
		add_action( 'wp_ajax_neve_toggle_logger', array( $this, 'toggle_logger' ) );
		add_filter( 'neve_logger_heading', array( $this, 'add_tracking_policy' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_gutenberg_scripts' ) );
		add_filter( 'themeisle_sdk_hide_dashboard_widget', '__return_true' );
	}

	/**
	 * Add tracking usage link to notice.
	 *
	 * @param string $text Notice text.
	 *
	 * @return string New notice text.
	 */
	public function add_tracking_policy( $text ) {
		return sprintf( '%s <a href="https://docs.themeisle.com/article/1122-neve-usage-tracking" target="_blank">%s</a>', $text, __( 'What do we track?', 'neve' ) );
	}
	/**
	 * Add the about page.
	 */
	public function do_about_page() {
		$theme_args       = wp_get_theme();
		$this->theme_name = apply_filters( 'ti_wl_theme_name', $theme_args->__get( 'Name' ) );
		$this->theme_slug = $theme_args->__get( 'stylesheet' );

		/*
		 * About page instance
		 */
		$config_array = array(
			'welcome_notice'  => array(
				'type'            => 'custom',
				'notice_class'    => 'nv-welcome-notice updated',
				'dismiss_option'  => 'neve_notice_dismissed',
				'render_callback' => array( $this, 'welcome_notice_content' ),
			),
			'footer_messages' => array(
				'type'     => 'custom',
				'messages' => array(
					array(
						// translators: %s - theme name
						'heading'   => sprintf( __( '%s Community', 'neve' ), $this->theme_name ),
						// translators: %s - theme name
						'text'      => sprintf( __( 'Join the community of %s users. Get connected, share opinions, ask questions and help each other!', 'neve' ), $this->theme_name ),
						'link_text' => __( 'Join our Facebook Group', 'neve' ),
						'link'      => 'https://www.facebook.com/groups/648646435537266/',
					),
					array(
						'heading'   => __( 'Leave us a review', 'neve' ),
						// translators: %s - theme name
						'text'      => sprintf( __( 'Are you are enjoying %s? We would love to hear your feedback.', 'neve' ), $this->theme_name ),
						'link_text' => __( 'Submit a review', 'neve' ),
						'link'      => 'https://wordpress.org/support/theme/neve/reviews/#new-post',
					),
				),
			),
			'getting_started' => array(
				'type'    => 'columns-2',
				'title'   => __( 'Getting Started', 'neve' ),
				'content' => array(
					array(
						'title'  => esc_html__( 'Recommended actions', 'neve' ),
						// translators: %s - theme name
						'text'   => sprintf( esc_html__( '%s now comes with a sites library with various designs to pick from. Visit our collection of demos that are constantly being added.', 'neve' ), $this->theme_name ),
						'button' => array(
							'label'     => esc_html__( 'See demos', 'neve' ),
							'link'      => esc_url( '#sites_library' ),
							'is_button' => true,
						),
					),
					array(
						'title'        => esc_html__( 'Links to Customizer Settings', 'neve' ),
						'html_content' => $this->get_customizer_settings(),
					),
				),
			),
			'useful_plugins'  => array(
				'type'    => 'plugins',
				'title'   => __( 'Useful Plugins', 'neve' ),
				'plugins' => array(
					'optimole-wp',
					'themeisle-companion',
					'feedzy-rss-feeds',
					'otter-blocks',
					'elementor',
					'wp-product-review',
					'weglot',
					'visualizer',
					'wpforms-lite',
					'translatepress-multilingual',
					'amp',
				),
			),
			'support'         => array(
				'type'    => 'columns-2',
				'title'   => __( 'Documentation', 'neve' ),
				'content' => array(
					array(
						'icon'   => 'dashicons dashicons-sos',
						'title'  => esc_html__( 'Contact Support', 'neve' ),
						// translators: 1 - theme name, 2 - theme name
						'text'   => sprintf( esc_html__( 'We want to make sure you have the best experience using %1$s, and that is why we have gathered all the necessary information here for you. We hope you will enjoy using %1$s as much as we enjoy creating great products.', 'neve' ), $this->theme_name ),
						'button' => array(
							'label'     => esc_html__( 'Contact Support', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', apply_filters( 'neve_contact_support_filter', esc_url( 'https://wordpress.org/support/theme/neve/' ) ) ),
							'is_button' => true,
						),
					),
					array(
						'icon'   => 'dashicons dashicons-book-alt',
						'title'  => esc_html__( 'Documentation', 'neve' ),
						// translators: %s - theme name
						'text'   => sprintf( esc_html__( 'Need more details? Please check our full documentation for detailed information on how to use %s.', 'neve' ), $this->theme_name ),
						'button' => array(
							'label'     => esc_html__( 'Read full documentation', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', 'https://docs.themeisle.com/article/946-neve-doc' ),
							'is_button' => false,
						),
					),

					array(
						'icon'   => 'dashicons dashicons-portfolio',
						'title'  => esc_html__( 'Changelog', 'neve' ),
						'text'   => esc_html__( 'Want to get the gist on the latest theme changes? Just consult our changelog below to get a taste of the recent fixes and features implemented.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'Changelog', 'neve' ),
							'link'      => esc_url( '#changelog' ),
							'is_button' => false,
						),

					),
					array(
						'title'  => esc_html__( 'Create a child theme', 'neve' ),
						'icon'   => 'dashicons dashicons-admin-customizer',
						'text'   => esc_html__( "If you want to make changes to the theme's files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.", 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', 'http://docs.themeisle.com/article/14-how-to-create-a-child-theme' ),
							'is_button' => false,
						),
					),
					array(
						'title'  => esc_html__( 'Speed up your site', 'neve' ),
						'icon'   => 'dashicons dashicons-controls-skipforward',
						'text'   => esc_html__( 'If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', 'http://docs.themeisle.com/article/63-speed-up-your-wordpress-site' ),
							'is_button' => false,
						),
					),
					array(
						'title'  => esc_html__( 'Build a landing page with a drag-and-drop content builder', 'neve' ),
						'icon'   => 'dashicons dashicons-images-alt2',
						'text'   => esc_html__( 'In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => apply_filters( 'ti_wl_agency_url', 'http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder' ),
							'is_button' => false,
						),
					),
				),
			),
			'changelog'       => array(
				'type'  => 'changelog',
				'title' => __( 'Changelog', 'neve' ),
			),
		);

		if ( ! defined( 'NEVE_PRO_VERSION' ) ) {
			$config_array['custom_tabs']['free_pro'] = array(
				'title'           => __( 'Free vs PRO', 'neve' ),
				'render_callback' => array( $this, 'free_pro_render' ),
			);
		}
		global $wp_version;
		if ( version_compare( $wp_version, '5.0', '>=' ) ) {
			$config_array = array_merge(
				array_slice( $config_array, 0, 3, true ),
				array(
					'recommended_actions' => array(
						'type'    => 'recommended_actions',
						'title'   => __( 'Recommended actions', 'neve' ),
						'plugins' => array(
							'otter-blocks' => array(
								'name'        => 'Gutenberg Blocks and Template Library by Otter',
								'slug'        => 'otter-blocks',
								/* translators: %s: Name of current theme */
								'description' => sprintf( __( "Take the new WordPress editor to the next level by using Otter's blocks that are specially designed for %s.", 'neve' ), $this->theme_name ),
							),
						),
					),
				),
				array_slice( $config_array, 3, count( $config_array ) - 1, true )
			);
		}
		$config = apply_filters( 'ti_about_config', $config_array );

		if ( class_exists( '\Ti_About_Page', false ) ) {
			$about_page = new \Ti_About_Page();
			$about_page->init( $config );
		}
	}

	/**
	 * Toggles the logger option from the SDK.
	 */
	public function toggle_logger() {
		check_ajax_referer( (string) __CLASS__, 'nonce' );

		if ( ! isset( $_POST['value'] ) || ! in_array( $_POST['value'], [ 'yes', 'no' ], true ) ) {
			wp_send_json( [ 'success' => false ] );
		}

		$value = sanitize_text_field( wp_unslash( $_POST['value'] ) );

		update_option( 'neve_logger_flag', $value );
		wp_send_json( [ 'success' => true ] );
	}

	/**
	 * Render the logger toggle in the about page sidebar.
	 *
	 * @return void
	 */
	public function render_logger_toggle() {
		$strings       = [
			'heading'      => __( 'Contributing', 'neve' ),
			'content'      => __( 'Become a contributor by opting in to our anonymous data tracking. We guarantee no sensitive data is collected.', 'neve' ),
			'toggle-label' => __( 'Allow anonymous tracking', 'neve' ),
			'link-text'    => __( 'What do we track?', 'neve' ),
			'error-text'   => __( 'Could not update option. Please try again.', 'neve' ),
			'success-text' => __( 'Option updated.', 'neve' ),
		];
		$logger_status = get_option( 'neve_logger_flag', 'no' ) === 'yes';
		?>
		<div class="about-sidebar-item nv-anon">
			<h4><?php echo esc_html( $strings['heading'] ); ?></h4>
			<div class="inside"><p><?php echo esc_html( $strings['content'] ); ?></p>
				<p>
					<label for="neve-anonymous-data" class="nv-anon-label">
						<span class="label"><?php echo esc_html( $strings['toggle-label'] ); ?></span>
						<span class="switch">
							<input <?php echo( $logger_status === true ? ' checked ' : '' ); ?> id="neve-anonymous-data"
									type="checkbox">
							<span class="slider round"></span>
						</span>
					</label>
				</p>
				<a target="_blank" href="https://docs.themeisle.com/article/1122-neve-usage-tracking"><?php echo esc_html( $strings['link-text'] ); ?></a>
				<p class="error-well"><?php echo esc_html( $strings['error-text'] ); ?></p>
				<p class="success-well"><?php echo esc_html( $strings['success-text'] ); ?></p>
			</div>
		</div>
		<script type="application/javascript">
					( function($) {
						$( '#neve-anonymous-data' ).on( 'change', function(event) {
							var toggle = this;
							var value = $( toggle ).prop( 'checked' ) ? 'yes' : 'no';
							var data = {
								'action': 'neve_toggle_logger',
								'nonce': '<?php echo esc_attr( wp_create_nonce( (string) __CLASS__ ) ); ?>',
								'value': value
							};
							var toastHandler = function(selector) {
								$( selector ).fadeIn();
								setTimeout( function() {
									$( selector ).fadeOut();
								}, 1500 );
							};
							$.ajax( {
								type: 'POST',
								url: ajaxurl,
								data: data,
								success(data) {
									if ( !data.success ) {
										toastHandler( '.nv-anon .error-well' );
										$( toggle ).prop( 'checked', value === 'yes' ? 'no' : 'yes' );
										return false;
									}
									toastHandler( '.nv-anon .success-well' );
								},
								error(err) {
									toastHandler( '.nv-anon .error-well' );
									$( toggle ).prop( 'checked', value === 'yes' ? 'no' : 'yes' );
									console.error( err );
								}
							} );
						} );
					}( jQuery ) );
		</script>
		<style>
			.nv-anon .error-well,
			.nv-anon .success-well {
				font-size: 12px;
				padding: 5px;
				font-weight: 500;
				text-align: center;
				border-radius: 3px;
				display: none;
			}

			.nv-anon .error-well {
				border: 1px solid #ff0000;
				background-color: #ffd9d9;
			}

			.nv-anon .success-well {
				border: 1px solid #8bc34a;
				background-color: #c8ffbb;
			}

			.nv-anon-label {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.nv-anon-label .label {
				margin-right: 15px;
				font-size: 15px;
				font-weight: 500;
			}

			.switch {
				display: inline-block;
				height: 23px;
				position: relative;
				width: 44px;
			}

			.switch input {
				display: none;
			}

			.slider {
				background-color: #ccc;
				bottom: 0;
				cursor: pointer;
				left: 0;
				position: absolute;
				right: 0;
				top: 0;
				transition: .4s;
			}

			.slider:before {
				background-color: #fff;
				bottom: 3px;
				content: "";
				height: 17px;
				left: 3px;
				position: absolute;
				transition: .4s;
				width: 17px;
			}

			input:checked + .slider {
				background-color: rgb(0, 165, 222);
			}

			input:checked + .slider:before {
				transform: translateX(21px);
			}

			.slider.round {
				border-radius: 34px;
			}

			.slider.round:before {
				border-radius: 50%;
			}
		</style>
		<?php
	}

	/**
	 * Free vs Pro tab content
	 */
	public function free_pro_render() {
		$free_pro = array(
			'free_theme_name'     => 'Neve',
			'pro_theme_name'      => 'Neve Pro',
			'pro_theme_link'      => apply_filters( 'neve_upgrade_link_from_child_theme_filter', 'https://themeisle.com/themes/neve/upgrade/?utm_medium=aboutneve&utm_source=freevspro&utm_campaign=neve' ),
			/* translators: s - theme name */
			'get_pro_theme_label' => sprintf( __( 'Get %s now!', 'neve' ), 'Neve Pro' ),
			'features_type'       => 'table',
			'features'            => array(
				array(
					'title'       => __( 'Header/Footer builder', 'neve' ),
					'description' => __( 'Easily build your header and footer by dragging and dropping all the important elements in the real-time WordPress Customizer. More advanced options are available in PRO.', 'neve' ),
					'is_in_lite'  => 'true',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'Page Builder Compatibility', 'neve' ),
					'description' => __( 'Neve is fully compatible with Gutenberg, the new WordPress editor and for all of you page builder fans, Neve has full compatibility with Elementor, Beaver Builder, and all the other popular page builders.', 'neve' ),
					'is_in_lite'  => 'true',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'Header Booster', 'neve' ),
					'description' => __( 'Take the header builder to a new level with new awesome components: socials, contact, breadcrumbs, language switcher, multiple HTML, sticky and transparent menu, page header builder and many more.', 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'Page Header Builder', 'neve' ),
					'description' => __( 'The Page Header is the horizontal area that sits directly below the header and contains the page/post title. Easily design an attractive Page Header area using our dedicated builder.', 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'Custom Layouts', 'neve' ),
					'description' => __( 'Powerful Custom Layouts builder which allows you to easily create your own header, footer or custom content on any of the hook locations available in the theme.', 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'Blog Booster', 'neve' ),
					'description' => __( 'Give a huge boost to your entire blogging experience with features specially designed for increased user experience.', 'neve' ) . ' ' . __( 'Sharing, custom article sorting, comments integrations, number of minutes needed to read an article and many more.', 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'Elementor Booster', 'neve' ),
					'description' => __( 'Leverage the true flexibility of Elementor with powerful addons and templates that you can import with just one click.', 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'WooCommerce Booster', 'neve' ),
					'description' => __( 'Empower your online store with awesome new features, specially designed for a smooth WooCommerce integration.', 'neve' ) . ' ' . __( 'Wishlist, quick view, video products, advanced reviews, multiple dedicated layouts and many more.', 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'LifterLMS Booster', 'neve' ),
					'description' => __( 'Make your LifterLMS pages look stunning with our PRO design options. Specially created to help you set up your online courses with minimum customizations.', 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'Typekit(Adobe) Fonts', 'neve' ),
					'description' => __( "The module allows for an easy way of enabling new awesome Adobe (previous Typekit) Fonts in Neve's Typography options.", 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'White Label', 'neve' ),
					'description' => __( "For any developer or agency out there building websites for their own clients, we've made it easy to present the theme as your own.", 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
				array(
					'title'       => __( 'Scroll To Top', 'neve' ),
					'description' => __( 'Simple but effective module to help you navigate back to the top of the really long pages.', 'neve' ),
					'is_in_lite'  => 'false',
					'is_in_pro'   => 'true',
				),
			),
		);
		$output   = '';
		if ( ! empty( $free_pro ) ) {
			if ( ! empty( $free_pro['features_type'] ) ) {
				echo '<div class="feature-section">';
				echo '<div id="free_pro" class="ti-about-page-tab-pane ti-about-page-fre-pro">';
				switch ( $free_pro['features_type'] ) {
					case 'image':
						if ( ! empty( $free_pro['features_img'] ) ) {
							$output .= '<img src="' . $free_pro['features_img'] . '">';
							if ( ! empty( $free_pro['pro_theme_link'] ) && ! empty( $free_pro['get_pro_theme_label'] ) ) {
								$output .= '<a href="' . esc_url( $free_pro['pro_theme_link'] ) . '" target="_blank" class="button button-primary button-hero">' . wp_kses_post( $free_pro['get_pro_theme_label'] ) . '</a>';
							}
						}
						break;
					case 'table':
						if ( ! empty( $free_pro['features'] ) ) {
							$output .= '<table class="free-pro-table">';
							$output .= '<thead>';
							$output .= '<tr class="ti-about-page-text-right">';
							$output .= '<th></th>';
							$output .= '<th>' . esc_html( $free_pro['free_theme_name'] ) . '</th>';
							$output .= '<th>' . esc_html( $free_pro['pro_theme_name'] ) . '</th>';
							$output .= '</tr>';
							$output .= '</thead>';
							$output .= '<tbody>';
							foreach ( $free_pro['features'] as $feature ) {
								$output .= '<tr>';
								if ( ! empty( $feature['title'] ) || ! empty( $feature['description'] ) ) {
									$output .= '<td>';
									$output .= $this->get_feature_title_and_description( $feature );
									$output .= '</td>';
								}
								if ( ! empty( $feature['is_in_lite'] ) && ( $feature['is_in_lite'] == 'true' ) ) { // phpcs:ignore WordPress.PHP.StrictComparisons.LooseComparison
									$output .= '<td class="only-lite"><span class="dashicons-before dashicons-yes"></span></td>';
								} else {
									$output .= '<td class="only-pro"><span class="dashicons-before dashicons-no-alt"></span></td>';
								}
								if ( ! empty( $feature['is_in_pro'] ) && ( $feature['is_in_pro'] == 'true' ) ) {  // phpcs:ignore WordPress.PHP.StrictComparisons.LooseComparison
									$output .= '<td class="only-lite"><span class="dashicons-before dashicons-yes"></span></td>';
								} else {
									$output .= '<td class="only-pro"><span class="dashicons-before dashicons-no-alt"></span></td>';
								}
								echo '</tr>';
							}
							if ( ! empty( $free_pro['pro_theme_link'] ) && ! empty( $free_pro['get_pro_theme_label'] ) ) {
								$output .= '<tr>';
								$output .= '<td>';
								if ( ! empty( $free_pro['banner_link'] ) && ! empty( $free_pro['banner_src'] ) ) {
									$output .= '<a target="_blank" href="' . $free_pro['banner_link'] . '"><img src="' . $free_pro['banner_src'] . '" class="free_vs_pro_banner"></a>';
								}
								$output .= '</td>';
								$output .= '<td colspan="2" class="ti-about-page-text-right"><a href="' . esc_url( $free_pro['pro_theme_link'] ) . '" target="_blank" class="button button-primary button-hero">' . wp_kses_post( $free_pro['get_pro_theme_label'] ) . '</a></td>';
								$output .= '</tr>';
							}
							$output .= '</tbody>';
							$output .= '</table>';
						}
						break;
				}
				echo wp_kses_post( $output );
				echo '</div>';
				echo '</div>';
			}
		}// End if().
	}

	/**
	 * Display feature title and description
	 *
	 * @param array $feature Feature data.
	 */
	public function get_feature_title_and_description( $feature ) {
		$output = '';
		if ( ! empty( $feature['title'] ) ) {
			$output .= '<h3>' . wp_kses_post( $feature['title'] ) . '</h3>';
		}
		if ( ! empty( $feature['description'] ) ) {
			$output .= '<p>' . wp_kses_post( $feature['description'] ) . '</p>';
		}

		return $output;
	}

	/**
	 * Get list of customizer settings and links.
	 *
	 * @return string
	 */
	private function get_customizer_settings() {
		$markup  = '<div class="customizer-links-container">';
		$data    = array(
			array(
				'icon' => 'dashicons-format-image',
				'text' => __( 'Upload Logo', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[control]' => 'custom_logo' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-admin-customizer',
				'text' => __( 'Set Colors', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[section]' => 'neve_colors_background_section' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-editor-textcolor',
				'text' => __( 'Customize Fonts', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[control]' => 'neve_headings_font_family' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-layout',
				'text' => __( 'Layout Options', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[panel]' => 'neve_layout' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-align-center',
				'text' => __( 'Header Options', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[panel]' => 'neve_header' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-welcome-write-blog',
				'text' => __( 'Blog Layouts', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[section]' => 'neve_blog_archive_layout' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-admin-generic',
				'text' => __( 'Footer Options', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[panel]' => 'neve_footer' ), admin_url( 'customize.php' ) ),
			),
			array(
				'icon' => 'dashicons-align-left',
				'text' => __( 'Content / Sidebar', 'neve' ),
				'link' => add_query_arg( array( 'autofocus[section]' => 'neve_sidebar' ), admin_url( 'customize.php' ) ),
			),
		);
		$counter = 1;
		foreach ( $data as $customizer_item ) {
			$class = 'left';
			if ( $counter % 2 === 0 ) {
				$class = 'right';
			}
			$markup .= '
				<div class="ti-customizer-item ' . esc_attr( $class ) . '">
				<i class="dashicons ' . esc_attr( $customizer_item['icon'] ) . '"></i><a href="' . esc_url( $customizer_item['link'] ) . '">' . wp_kses_post( $customizer_item['text'] ) . '</a>
				</div>
			';
			$counter ++;
		}
		$markup .= '</div>';

		$style = '
		<style>
		.customizer-links-container{
			width: 100%;
			margin-bottom: 20px;
		}
		.ti-customizer-item{
		padding: 10px 0;
		width: 50%;
		}
		.ti-customizer-item a{
		text-decoration: none;
		line-height: 20px;
		}
		.ti-customizer-item i{
		vertical-align: initial;
		}
		.ti-customizer-item.left{
		float: left;
		}
		.ti-customizer-item.right{
		float: right;
		}
		@media (max-width: 600px) {
			.ti-customizer-item{
				width: 100%;
			}
		}
		</style>';

		return $markup . $style;
	}

	/**
	 * Get notice screenshot based on previous theme.
	 *
	 * @return string Image url.
	 */
	private function get_notice_picture() {
		$previous_theme = get_theme_mod( 'ti_prev_theme' );
		$onboarding_dir = get_template_directory_uri() . '/onboarding/';
		switch ( $previous_theme ) {
			case 'themotion-lite':
			case 'themotion':
				return $onboarding_dir . 'neve-themotion/screenshot.jpg';
			case 'amadeus':
				return $onboarding_dir . 'neve-amadeus/screenshot.jpg';
			case 'rokophoto-lite':
			case 'rokophoto':
				return $onboarding_dir . 'neve-rokophoto/screenshot.jpg';
			case 'oblique':
				return $onboarding_dir . 'neve-oblique/screenshot.jpg';
			case 'shop-isle':
			case 'shop-isle-pro':
				return $onboarding_dir . 'neve-shop/screenshot.jpg';
			case 'zerif-pro':
			case 'zerif-lite':
				return $onboarding_dir . 'neve-zelle/screenshot.jpg';
			case 'lawyeria-lite':
			case 'lawyeria':
				return $onboarding_dir . 'neve-lawyers/screenshot.jpg';
			default:
				return get_template_directory_uri() . '/assets/img/sites-list.jpg';
		}
	}

	/**
	 * Render welcome notice content
	 */
	public function welcome_notice_content() {
		$theme_args = wp_get_theme();
		$name       = apply_filters( 'ti_wl_theme_name', $theme_args->__get( 'Name' ) );
		$template   = $theme_args->get( 'Template' );
		$slug       = $theme_args->__get( 'stylesheet' );
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
			esc_url( admin_url( 'themes.php?page=' . $theme_page . '&onboarding=yes#sites_library' ) ),
			sprintf( apply_filters( 'ti_onboarding_neve_start_site_cta', esc_html__( 'Try one of our ready to use Starter Sites', 'neve' ) ) )
		);
		$ob_return_dashboard = sprintf(
			/* translators: 1 - button text */
			'<a href="#" class=" ti-return-dashboard  button button-secondary button-hero install-now" ><span>%1$s</span></a>',
			__( 'Return to your dashboard', 'neve' )
		);
		$options_page_btn = sprintf(
			/* translators: 1 - options page url, 2 - button text */
			'<a href="%1$s" class="options-page-btn">%2$s</a>',
			esc_url( admin_url( 'themes.php?page=' . $theme_page ) ),
			esc_html__( 'or go to the theme settings', 'neve' )
		);
		$notice_picture = sprintf(
			'<picture>
					<source srcset="about:blank" media="(max-width: 1024px)">
					<img src="%1$s">
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
		if ( class_exists( '\Themeisle_Onboarding', false ) ) {
			\Themeisle_Onboarding::instance();
		}
	}

	/**
	 * Enqueue gutenberg scripts.
	 */
	public function enqueue_gutenberg_scripts() {
		$screen = get_current_screen();
		if ( $screen->post_type !== 'post' && $screen->post_type !== 'page' ) {
			return;
		}

		wp_enqueue_style( 'neve-gutenberg-style', NEVE_ASSETS_URL . 'css/gutenberg-editor-style' . ( ( NEVE_DEBUG ) ? '' : '.min' ) . '.css', array(), NEVE_VERSION );
	}

}
