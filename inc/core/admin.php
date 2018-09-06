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

use Neve\Admin\About\Page as About_Page;

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
			// Menu name under Appearance.
			'menu_name'           => __( 'About Neve', 'neve' ),
			// Page title.
			'page_name'           => __( 'About Neve', 'neve' ),
			// Main welcome title
			/* translators: s - theme name */
			'welcome_title'       => sprintf( __( 'Welcome to %s! - Version ', 'neve' ), 'Neve' ),
			// Main welcome content
			'welcome_content'     => esc_html__( 'Neve is a Multi-Purpose modern WordPress theme perfect for any project. Fast, with a clean look and easily customizable, it can be used for blogs, creative business, small businesses (restaurants, wedding planners, sport/medical shops), startups, corporate businesses, online agencies and firms, portfolios, ecommerce (WooCommerce), and freelancers. It is compatible with Gutenberg, Elementor Page Builder and all other big Page Builder plugins. The theme is Responsive, Translation Ready, Retina ready, SEO friendly.', 'neve' ),
			/**
			 * Tabs array.
			 *
			 * The key needs to be ONLY consisted from letters and underscores. If we want to define outside the class a function to render the tab,
			 * the will be the name of the function which will be used to render the tab content.
			 */
			'tabs'                => array(
				'getting_started'     => __( 'Getting Started', 'neve' ),
				'recommended_actions' => __( 'Recommended Actions', 'neve' ),
				'recommended_plugins' => __( 'Useful Plugins', 'neve' ),
				'support'             => __( 'Support', 'neve' ),
				'changelog'           => __( 'Changelog', 'neve' ),
			),
			// Support content tab.
			'support_content'     => array(
				'first'  => array(
					'title'        => esc_html__( 'Contact Support', 'neve' ),
					'icon'         => 'dashicons dashicons-sos',
					'text'         => esc_html__( 'We want to make sure you have the best experience using Neve, and that is why we have gathered all the necessary information here for you. We hope you will enjoy using Neve as much as we enjoy creating great products.', 'neve' ),
					'button_label' => esc_html__( 'Contact Support', 'neve' ),
					'button_link'  => esc_url( 'https://themeisle.com/contact/' ),
					'is_button'    => true,
					'is_new_tab'   => true,
				),
				'second' => array(
					'title'        => esc_html__( 'Changelog', 'neve' ),
					'icon'         => 'dashicons dashicons-portfolio',
					'text'         => esc_html__( 'Want to get the gist on the latest theme changes? Just consult our changelog below to get a taste of the recent fixes and features implemented.', 'neve' ),
					'button_label' => esc_html__( 'Changelog', 'neve' ),
					'button_link'  => esc_url( '#changelog' ),
					'is_button'    => false,
					'is_new_tab'   => false,
				),
				'third'  => array(
					'title'        => esc_html__( 'Create a child theme', 'neve' ),
					'icon'         => 'dashicons dashicons-admin-customizer',
					'text'         => esc_html__( "If you want to make changes to the theme's files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.", 'neve' ),
					'button_label' => esc_html__( 'View how to do this', 'neve' ),
					'button_link'  => 'http://docs.themeisle.com/article/14-how-to-create-a-child-theme',
					'is_button'    => false,
					'is_new_tab'   => true,
				),
				'fourth' => array(
					'title'        => esc_html__( 'Speed up your site', 'neve' ),
					'icon'         => 'dashicons dashicons-controls-skipforward',
					'text'         => esc_html__( 'If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve' ),
					'button_label' => esc_html__( 'View how to do this', 'neve' ),
					'button_link'  => 'http://docs.themeisle.com/article/63-speed-up-your-wordpress-site',
					'is_button'    => false,
					'is_new_tab'   => true,
				),
				'fifth'  => array(
					'title'        => esc_html__( 'Build a landing page with a drag-and-drop content builder', 'neve' ),
					'icon'         => 'dashicons dashicons-images-alt2',
					'text'         => esc_html__( 'In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve' ),
					'button_label' => esc_html__( 'View how to do this', 'neve' ),
					'button_link'  => 'http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder',
					'is_button'    => false,
					'is_new_tab'   => true,
				),
			),
			// Getting started tab
			'getting_started'     => array(
				'first' => array(
					'title'               => esc_html__( 'Recommended actions', 'neve' ),
					'text'                => esc_html__( 'We have compiled a list of steps for you to take so we can ensure that the experience you have using one of our products is very easy to follow.', 'neve' ),
					'button_label'        => esc_html__( 'Recommended actions', 'neve' ),
					'button_link'         => esc_url( '#recommended_actions' ),
					'is_button'           => false,
					'recommended_actions' => true,
					'is_new_tab'          => false,
				),
				'third' => array(
					'title'               => esc_html__( 'Go to the Customizer', 'neve' ),
					'text'                => esc_html__( 'Using the WordPress Customizer you can easily customize every aspect of the theme.', 'neve' ),
					'button_label'        => esc_html__( 'Go to the Customizer', 'neve' ),
					'button_link'         => esc_url( admin_url( 'customize.php' ) ),
					'is_button'           => true,
					'recommended_actions' => false,
					'is_new_tab'          => true,
				),
			),
			// Plugins array.
			'recommended_plugins' => array(
				'already_activated_message' => esc_html__( 'Already activated', 'neve' ),
				'version_label'             => esc_html__( 'Version: ', 'neve' ),
				'install_label'             => esc_html__( 'Install and Activate', 'neve' ),
				'activate_label'            => esc_html__( 'Activate', 'neve' ),
				'deactivate_label'          => esc_html__( 'Deactivate', 'neve' ),
				'content'                   => array(
					array(
						'slug' => 'elementor',
					),
					array(
						'slug' => 'wpforms-lite',
					),
					array(
						'slug' => 'translatepress-multilingual',
					),
					array(
						'slug' => 'beaver-builder-lite-version',
					),
					array(
						'slug' => 'wp-product-review',
					),
					array(
						'slug' => 'intergeo-maps',
					),
					array(
						'slug' => 'visualizer',
					),
					array(
						'slug' => 'nivo-slider-lite',
					),
				),
			),
			// Required actions array.
			'recommended_actions' => array(
				'install_label'    => esc_html__( 'Install and Activate', 'neve' ),
				'activate_label'   => esc_html__( 'Activate', 'neve' ),
				'deactivate_label' => esc_html__( 'Deactivate', 'neve' ),
				'content'          => array(
					'themeisle-companion' => array(
						'title'       => 'Orbit Fox Companion',
						'description' => __( 'Extend your theme functionality with Orbit Fox with various modules like Social Media Share Buttons & Icons, Uptime Monitoring, Google Analytics, custom menu-icons, one click import page templates, page builder addons and free stock featured images.', 'neve' ),
						'check'       => defined( 'THEMEISLE_COMPANION_VERSION' ),
						'plugin_slug' => 'themeisle-companion',
						'id'          => 'themeisle-companion',
					),
					'wpforms-lite'        => array(
						'title'       => 'WPForms',
						'description' => __( 'WPForms allow you to create beautiful contact forms, subscription forms, payment forms, and other type of forms for your site in minutes, not hours!', 'neve' ),
						'check'       => defined( 'WPFORMS_VERSION' ),
						'plugin_slug' => 'wpforms-lite',
						'id'          => 'wpforms-lite',
					),
					'elementor'           => array(
						'title'       => 'Elementor',
						'check'       => ( defined( 'ELEMENTOR_VERSION' ) ),
						'plugin_slug' => 'elementor',
						'id'          => 'elementor',
					),
				),
			),
		);
		About_Page::init( apply_filters( 'neve_about_page_content', $config ) );
	}


	/**
	 * Load site import module.
	 */
	public function load_site_import() {
		require_once( NEVE_INC_DIR . 'admin/onboarding/class-themeisle-onboarding.php' );
		if ( class_exists( '\Themeisle_Onboarding' ) ) {
			\Themeisle_Onboarding::instance();
		}
	}

	/**
	 * Start onboarding.
	 */
	public function start_onboarding() {
		$theme      = wp_get_theme();
		$theme_slug = $theme->get_template();
		$query_args = array(
			'onboarding' => 'yes',
		);
		$base_url   = admin_url( 'themes.php?page=' . $theme_slug . '-welcome' );

		$onboarding_url = add_query_arg( $query_args, $base_url ) . '#demo-import';
		wp_safe_redirect( $onboarding_url );
	}


}
