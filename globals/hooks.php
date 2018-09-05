<?php
/**
 * Main Hooks.
 *
 * @package Neve/Hooks
 */

/* Header ( Navigation ) area */
/**
 * Hook just before the header ( navigation ) area
 */
function neve_before_header_trigger() {
	do_action( 'neve_before_header_hook' );
}

/**
 * Hook just before the responsive navbar-toggle.
 */
function neve_before_navbar_toggle_trigger() {
	do_action( 'neve_before_navbar_toggle_hook' );
}

/**
 * Hook just after the responsive navbar-toggle.
 */
function neve_after_navbar_toggle_trigger() {
	do_action( 'neve_after_navbar_toggle_hook' );
}

/**
 * Hook just after the header ( navigation ) area
 */
function neve_after_header_trigger() {
	do_action( 'neve_after_header_hook' );
}

/**
 * Hook just before the footer area
 */
function neve_before_footer_trigger() {
	do_action( 'neve_before_footer_hook' );
}

/**
 * Hook just after the footer area
 *
 * HTML context: after `footer`
 */
function neve_after_footer_trigger() {
	do_action( 'neve_after_footer_hook' );
}
