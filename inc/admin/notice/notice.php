<?php
/**
 * Neve - Welcome notice class
 *
 * @package neve
 */

namespace Neve\Admin\Notice;

/**
 * Class Notice
 *
 * @package Neve\Admin\Notice
 */
class Notice {

	/**
	 * Init function.
	 */
	public function init() {

		if ( ! is_admin() ) {
			return;
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
		add_action( 'admin_notices', array( $this, 'render' ) );
		add_action( 'wp_ajax_neve_welcome_notice_dismiss', array( $this, 'neve_welcome_notice_dismiss' ) );
	}

	/**
	 * Style and scripts for the notice.
	 */
	public function enqueue() {

		wp_enqueue_style( 'neve-admin-style', get_template_directory_uri() . '/inc/admin/notice/notice.css' );

		wp_enqueue_script(
			'neve-welcome-notice',
			get_template_directory_uri() . '/inc/admin/notice/notice.js',
			false,
			NEVE_VERSION,
			true
		);
		wp_localize_script(
			'neve-welcome-notice',
			'neveNotice',
			array(
				'ajaxurl'      => admin_url( 'admin-ajax.php' ),
				'dismissNonce' => wp_create_nonce( 'dismiss_neve_welcome_notice' ),
			)
		);
	}

	/**
	 * Render notice.
	 */
	public function render() {
		if ( get_option( 'neve_welcome_notice_dismissed' ) === 'yes' ) {
			return;
		}

		echo '<div class="notice is-dismissible neve-welcome-notice">';
		echo '<h2>';
		echo esc_html__( 'Welcome to Neve!', 'neve' );
		echo '</h2>';
		echo '<p>';
		echo esc_html__( 'Are you tired of building your site from scratch?', 'neve' );
		echo '</p>';
		echo '<p>';
		echo esc_html__( 'With Neve, you can import one of our demos, and customize it as you wish.', 'neve' );
		echo '</p>';

		echo '<div class="neve-button-wrapper">';
		echo '<a class="button button-primary button-hero" href="' . esc_url( admin_url( 'themes.php?page=neve-welcome&onboarding=yes#sites-library' ) ) . '">';
		echo esc_html__( 'Let\'s start', 'neve' );
		echo '</a>';
		echo '</div>';
		echo '</div>';
	}

	/**
	 * Dismiss notice.
	 */
	public function neve_welcome_notice_dismiss() {
		$params = $_REQUEST;
		if ( ! isset( $params['nonce'] ) || ! wp_verify_nonce( $params['nonce'], 'dismiss_neve_welcome_notice' ) ) {
			wp_send_json_error( 'Wrong nonce' );
		}
		update_option( 'neve_welcome_notice_dismissed', 'yes' );
		wp_send_json_success( 'Dismiss import' );
	}
}
