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
		$name       = $theme_args->__get( 'Name' );
		$slug       = $theme_args->__get( 'stylesheet' );

		$notice_template = '
			<div class="nv-notice-wrapper">
				<div class="nv-notice-image">%1$s</div>
				<div class="nv-notice-text">%2$s</div>
				<div class="nv-notice-button">%3$s</div>
			</div>
			<style>%4$s</style>';

		$image = sprintf(
			/* translators: 1 - logo url, 2 - theme name */
			'<img src="%1$s" alt="%2$s"/>',
			esc_url( NEVE_ASSETS_URL . '/img/logo.png' ),
			$name
		);

		$content = sprintf(
			/* translators: 1 - notice title, 2 - notice message */
			'<h3>%1$s</h3><p>%2$s</p>',
			sprintf(
				/* translators: 1 - theme name */
				esc_html__( 'Thanks for installing %1$s!', 'neve' ),
				$name
			),
			esc_html__( 'Now, let\'s get you ready. It will take only a few minutes.', 'neve' )
		);

		$button = sprintf(
			/* Translators: 1 - onboarding url, 2 - button text */
			'<a href="%1$s" class="button button-primary" style="text-decoration: none;">%2$s %3$s</a>',
			esc_url( admin_url( 'themes.php?page=' . $slug . '-welcome&onboarding=yes#sites_library' ) ),
			esc_html__( 'Get started with', 'neve' ),
			$name
		);

		$style = '
		.wrap .notice.nv-welcome-notice{
			margin:0;
			border:0;
			padding:10px;
		}
		.nv-notice-wrapper {
			display: flex;
		    justify-content: center;
		    align-items: center;
		    flex-direction: column;
		    background: #e6edf1;
		    padding: 60px 0;
		}
		.nv-notice-image, .nv-notice-text, .nv-notice-button {text-align:center;}
		.nv-notice-image{
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    flex-direction: column;
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background: #fff;
			margin-bottom:20px;
		}
		.nv-notice-image img{
			max-width:65px;
		}
		.nv-notice-text h3{
		    margin: 0 12px 8px;
		    padding: 0;
		    font-size: 16px;
		    font-weight: 400;
		    color: #23282d;
		}
		.nv-notice-text p{
			color: #59798f;
			margin-bottom: 20px;
		}
		';

		echo sprintf(
			$notice_template,
			$image,
			$content,
			$button,
			$style
		);
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
