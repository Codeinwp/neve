<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the page header div.
 *
 * @package Neve
 * @since   1.0.0
 */
?><!DOCTYPE html>
<?php

/**
 * Filters the header classes.
 *
 * @param string $header_classes Header classes.
 *
 * @since 2.3.7
 */
$header_classes = apply_filters( 'nv_header_classes', 'header' );

/**
 * Fires before the page is rendered.
 */
do_action( 'neve_html_start_before' );

?>
<html <?php language_attributes(); ?>>

<head>
	<?php
	/**
	 * Executes actions after the head tag is opened.
	 *
	 * @since 2.11
	 */
	do_action( 'neve_head_start_after' );
	?>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>

	<?php
	/**
	 * Executes actions before the head tag is closed.
	 *
	 * @since 2.11
	 */
	do_action( 'neve_head_end_before' );
	?>
</head>

<body  <?php body_class(); ?> <?php neve_body_attrs(); ?> >
<?php
/**
 * Executes actions after the body tag is opened.
 *
 * @since 2.11
 */
do_action( 'neve_body_start_after' );
?>
<?php wp_body_open(); ?>
<div class="wrapper">
	<?php
	/**
	 * Executes actions before the header tag is opened.
	 *
	 * @since 2.7.2
	 */
	do_action( 'neve_before_header_wrapper_hook' );
	?>

	<header class="<?php echo esc_attr( $header_classes ); ?>" role="banner" next-page-hide>
		<a class="neve-skip-link show-on-focus" href="#content" >
			<?php echo __( 'Skip to content', 'neve' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</a>
		<?php

		/**
		 * Executes actions before the header ( navigation ) area.
		 *
		 * @since 1.0.0
		 */
		do_action( 'neve_before_header_hook' );

		if ( apply_filters( 'neve_filter_toggle_content_parts', true, 'header' ) === true ) {
			do_action( 'neve_do_header' );
		}

		/**
		 * Executes actions after the header ( navigation ) area.
		 *
		 * @since 1.0.0
		 */
		do_action( 'neve_after_header_hook' );
		?>
	</header>

	<?php
	/**
	 * Executes actions after the header tag is closed.
	 *
	 * @since 2.7.2
	 */
	do_action( 'neve_after_header_wrapper_hook' );
	?>


	<?php
	/**
	 * Executes actions before main tag is opened.
	 *
	 * @since 1.0.4
	 */
	do_action( 'neve_before_primary' );
	?>

	<main id="content" class="neve-main" role="main">

<?php
/**
 * Executes actions after main tag is opened.
 *
 * @since 1.0.4
 */
do_action( 'neve_after_primary_start' );

