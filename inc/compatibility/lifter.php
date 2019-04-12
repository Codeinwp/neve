<?php
/**
 * Compatibility with Lifter LMS Plugin.
 *
 * @package Neve\Compatibility
 */

namespace Neve\Compatibility;

/**
 * Class Lifter
 * @package Neve\Compatibility
 */
class Lifter {

	/**
	 * Init function.
	 */
	public function init() {
		if ( ! $this->should_load() ) {
			return;
		}
		$this->load_hooks();
	}

	/**
	 * Check if LifterLMS plugin is activated.
	 */
	private function should_load() {
		return class_exists( 'LifterLMS' );
	}

	/**
	 * Load hooks and filters.
	 */
	private function load_hooks() {
		add_filter( 'llms_get_theme_default_sidebar', array( $this, 'lms_sidebar' ) );
		remove_action( 'lifterlms_before_main_content', 'lifterlms_output_content_wrapper', 10 );
		remove_action( 'lifterlms_after_main_content', 'lifterlms_output_content_wrapper_end', 10 );
		add_action( 'lifterlms_before_main_content', array( $this, 'lms_content_wrapper_open' ), 10 );
		add_action( 'lifterlms_after_main_content', array( $this, 'lms_content_wrapper_close' ), 10 );
		add_action( 'lifterlms_sidebar', array( $this, 'lms_main_close' ), PHP_INT_MAX );
		add_action( 'lifterlms_sidebar', array( $this, 'lms_before_sidebar' ), 0 );
		add_filter( 'lifterlms_show_page_title', '__return_false' );
		add_action( 'lifterlms_before_main_content', array( $this, 'lms_title' ), PHP_INT_MAX );

	}

	/**
	 * Add compatibility with Lifter Sidebar
	 */
	public function lms_sidebar() {
		return 'blog-sidebar';
	}

	/**
	 * Add markup before main content.
	 */
	public function lms_content_wrapper_open() {
		$container_class = apply_filters( 'neve_container_class_filter', 'container' );
		echo '<div class="' . esc_attr( $container_class ) . ' lms-container">';
		echo '<div class="row">';
		echo '<div class="nv-single-page-wrap col">';
	}

	/**
	 * Add markup for LifterLms title and open content wrap div
	 */
	public function lms_title() {
		echo '<div class="nv-page-title-wrap nv-big-title">';
		echo '<div class="nv-page-title ">';
		echo '<h1 class="page-title">';
		lifterlms_page_title();
		echo '</h1>';
		echo '</div>';
		echo '</div>';
		echo '<div class="nv-content-wrap entry-content">';
	}

	/**
	 * Close content wrap div and open sidebar wrap div.
	 */
	public function lms_before_sidebar() {
		echo '</div>';
		echo '<div class="nv-sidebar-wrap col-sm-12 nv-right blog-sidebar">';

	}

	/**
	 * Close blog sidebar div, row and container
	 */
	public function lms_main_close() {
		echo '</div>';
		echo '</div>';
		echo '</div>';
	}

	/**
	 * Close div main content
	 */
	public function lms_content_wrapper_close() {
		echo '</div>';
	}
}