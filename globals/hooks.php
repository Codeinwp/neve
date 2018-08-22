<?php
/**
 * Main Hooks.
 *
 * @package Neve/Hooks
 */

/* Header ( Navigation ) area */
/**
 * Hook just before the header ( navigation ) area
 *
 * HTML context: before `header nav`
 */
function neve_before_header_trigger() {
	do_action( 'neve_before_header_hook' );
}

/**
 * Hook just before the responsive navbar-toggle.
 *
 * HTML context: before `header nav button.navbar-toggle`
 */
function neve_before_navbar_toggle_trigger() {
	do_action( 'neve_before_navbar_toggle_hook' );
}
/**
 * Hook just after the responsive navbar-toggle.
 *
 * HTML context: after `header nav button.navbar-toggle`
 */
function neve_after_navbar_toggle_trigger() {
	do_action( 'neve_after_navbar_toggle_hook' );
}

/**
 * Hook just after the header ( navigation ) area
 *
 * HTML context: after `header nav`
 */
function neve_after_header_trigger() {
	do_action( 'neve_after_header_hook' );
}
/* Footer area */
/**
 * Hook just before the footer area
 *
 * HTML context: before `footer`
 */
function neve_before_footer_trigger() {
	do_action( 'neve_before_footer_hook' );
}
/**
 * Hook just before the footer content
 *
 * HTML context: before `footer div.container`
 */
function neve_before_footer_content_trigger() {
	do_action( 'neve_before_footer_content_hook' );
}
/**
 * Hook just before the footer widgets area
 *
 * HTML context: before `footer div.hestia-bottom-footer-content`
 */
function neve_before_footer_widgets_trigger() {
	do_action( 'neve_before_footer_widgets_hook' );
}
/**
 * Hook just after the footer widgets area
 *
 * HTML context: after `footer div.hestia-bottom-footer-content`
 */
function neve_after_footer_widgets_trigger() {
	do_action( 'neve_after_footer_widgets_hook' );
}
/**
 * Hook just after the footer content
 *
 * HTML context: after `footer div.container`
 */
function neve_after_footer_content_trigger() {
	do_action( 'neve_after_footer_content_hook' );
}
/**
 * Hook just after the footer area
 *
 * HTML context: after `footer`
 */
function neve_after_footer_trigger() {
	do_action( 'neve_after_footer_hook' );
}