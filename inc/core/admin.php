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
	 * Add the about page.
	 */
	public function do_about_page() {
		/*
		 * About page instance
		 */
		$config = array(
			'welcome_notice'      => array(
				'type'            => 'custom',
				'notice_class'    => 'nv-welcome-notice',
				'dismiss_option'  => 'neve_notice_dismissed',
				'render_callback' => array( $this, 'welcome_notice_content' ),
			),
			'getting_started'     => array(
				'type'    => 'columns-2',
				'title'   => __( 'Getting Started', 'neve' ),
				'content' => array(
					array(
						'title'  => esc_html__( 'Recommended actions', 'neve' ),
						'text'   => esc_html__( 'We have compiled a list of steps for you to take so we can ensure that the experience you have using one of our products is very easy to follow.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'Recommended actions', 'neve' ),
							'link'      => esc_url( '#recommended_actions' ),
							'is_button' => false,
							'blank'     => false,
						),
					),
					array(
						'title'  => esc_html__( 'Go to the Customizer', 'neve' ),
						'text'   => esc_html__( 'Using the WordPress Customizer you can easily customize every aspect of the theme.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'Go to the Customizer', 'neve' ),
							'link'      => esc_url( admin_url( 'customize.php' ) ),
							'is_button' => true,
							'blank'     => true,
						),
					),
				),
			),
			'recommended_actions' => array(
				'type'    => 'recommended_actions',
				'title'   => __( 'Recommended Actions', 'neve' ),
				'plugins' => array(
					'themeisle-companion' => array(
						'name' => 'OrbitFox',
						'slug' => 'themeisle-companion',
					),
					'wpforms-lite'        => array(
						'name' => 'WPForms',
						'slug' => 'wpforms-lite',
					),
					'elementor'           => array(
						'name' => 'Elementor',
						'slug' => 'elementor',
					),
				),
			),
			'useful_plugins'      => array(
				'type'    => 'plugins',
				'title'   => __( 'Useful Plugins', 'neve' ),
				'plugins' => array(
					'optimole-wp',
					'themeisle-companion',
					'feedzy-rss-feeds',
					'elementor',
					'wp-product-review',
					'visualizer',
					'wpforms-lite',
					'translatepress-multilingual',
				),
			),
			'support'             => array(
				'type'    => 'columns-2',
				'title'   => __( 'Support', 'neve' ),
				'content' => array(
					array(
						'icon'   => 'dashicons dashicons-sos',
						'title'  => esc_html__( 'Contact Support', 'neve' ),
						'text'   => esc_html__( 'We want to make sure you have the best experience using Neve, and that is why we have gathered all the necessary information here for you. We hope you will enjoy using Neve as much as we enjoy creating great products.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'Contact Support', 'neve' ),
							'link'      => esc_url( 'https://themeisle.com/contact/' ),
							'is_button' => true,
							'blank'     => true,
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
							'blank'     => false,
						),

					),
					array(
						'title'  => esc_html__( 'Create a child theme', 'neve' ),
						'icon'   => 'dashicons dashicons-admin-customizer',
						'text'   => esc_html__( "If you want to make changes to the theme's files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.", 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => 'http://docs.themeisle.com/article/14-how-to-create-a-child-theme',
							'is_button' => false,
							'blank'     => true,
						),
					),
					array(
						'title'  => esc_html__( 'Speed up your site', 'neve' ),
						'icon'   => 'dashicons dashicons-controls-skipforward',
						'text'   => esc_html__( 'If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => 'http://docs.themeisle.com/article/63-speed-up-your-wordpress-site',
							'is_button' => false,
							'blank'     => true,
						),
					),
					array(
						'title'  => esc_html__( 'Build a landing page with a drag-and-drop content builder', 'neve' ),
						'icon'   => 'dashicons dashicons-images-alt2',
						'text'   => esc_html__( 'In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve' ),
						'button' => array(
							'label'     => esc_html__( 'View how to do this', 'neve' ),
							'link'      => 'http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder',
							'is_button' => false,
							'blank'     => true,
						),
					),
				),
			),
			'changelog'           => array(
				'type'  => 'changelog',
				'title' => __( 'Changelog', 'neve' ),
			),
			'custom_tabs'         => array(),
		);

		if ( class_exists( '\Ti_About_Page' ) ) {
			$about_page = new \Ti_About_Page();
			$about_page->init( $config );
		}
	}

	/**
	 * Render welcome notice content
	 */
	public function welcome_notice_content() {
		$theme_args = wp_get_theme();
		$slug       = $theme_args->__get( 'stylesheet' );

		$notice_template = '
			<div class="nv-col nv-notice-image">%1$s</div>
			<div class="nv-col">%2$s</div>
			<div class="nv-col">%3$s</div>
			<style>%4$s</style>';

		$nv_col1 = '
			<img src="' . get_template_directory_uri() . '/vendor/codeinwp/ti-about-page/images/notice_image.png" alt="" />
		';
		$nv_col2 = sprintf(
			'<h2>%1$s</h2><p class="grow">%2$s</p><div><a href="%3$s" class="button button-primary button-hero" style="text-decoration: none;">%4$s</a></div>',
			esc_html__( 'Welcome! Thank you for choosing Neve!', 'neve' ),
			sprintf(
				/* translators: %1$s is link to welcome page */
				esc_html__( 'To fully take advantage of the best our theme can offer please make sure you visit our %1$s.', 'neve' ),
				sprintf(
					'<a href="%1$s">%2$s</a>',
					esc_url( admin_url( 'themes.php?page=' . $slug . '-welcome' ) ),
					esc_html__( 'welcome page', 'neve' )
				)
			),
			esc_url( admin_url( 'themes.php?page=' . $slug . '-welcome&onboarding=yes#sites_library' ) ),
			esc_html__( 'Get started with Neve', 'neve' )
		);

		$nv_col3 = sprintf(
			'<h2>%1$s</h2><p>%2$s</p>',
			esc_html__( 'Backwards compatibility.', 'neve' ),
			esc_html__( 'Depending on your previous theme, you may keep your frontpage as it is without having to add data again.', 'neve' )
		);
		$style   = '
			.nv-welcome-notice{
			padding:20px;
			display: flex;
			}
			.nv-col{
			padding: 0 10px;
			width: 32%;
			margin-right: 1%;
			display: flex;
			flex-direction: column;
			}
			.nv-col:last-child{
			margin-right: 0;
			}
			.nv-col img{
			max-width: 100%;
			}
			.nv-col .grow{
			flex-grow:1;
			}
			.nv-col h2{
				margin-top: 0;
			}
			
			@media (max-width:1024px){
				.nv-notice-image{
				display:none;
				}
				.nv-col{
				width: 48%;
				}
			}
			@media (max-width:870px){
				.nv-welcome-notice{
				display: block;
				}
				.nv-col{
				width: 100%;
				margin: 17px 0 0;
				}
			}
			
		';
		$notice  = sprintf(
			$notice_template,
			$nv_col1,
			$nv_col2,
			$nv_col3,
			$style
		);

		echo $notice;
	}

	/**
	 * Load site import module.
	 */
	public function load_site_import() {
		if ( class_exists( '\Themeisle_Onboarding' ) ) {
			\Themeisle_Onboarding::instance();
		}
	}

}
