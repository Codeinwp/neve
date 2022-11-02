<?php
/**
 * The template for displaying product search form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/product-searchform.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 7.0.1
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

