<?php
/**
 * The template for displaying the header for PWA pages.
 *
 * @package Neve
 * @since   2.4.3
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
</head>

<body <?php echo wp_kses( apply_filters( 'neve_body_data_attrs', '' ), array( '[class]' => true ) ); ?> <?php body_class(); ?> >

