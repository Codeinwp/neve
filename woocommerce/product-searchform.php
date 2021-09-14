<?php
/**
 * The template for displaying product search form
 *
 * @package Neve.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$placeholder = apply_filters( 'nv_woo_search_placeholder', __( 'Search products&hellip;', 'neve' ) );

$form_options = [
	'echo'                    => true,
	'value'                   => get_search_query(),
	'placeholder'             => $placeholder,
	'post_type'               => 'product',
	'additional_form_classes' => [
		'woocommerce-product-search',
	],
];

get_search_form( $form_options );

