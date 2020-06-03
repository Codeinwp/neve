<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the page header div.
 *
 * @package Neve
 * @since   1.0.0
 */

$header_classes = apply_filters( 'nv_header_classes', 'header' );
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

<body  <?php body_class(); ?> <?php neve_body_attrs(); ?> >
<?php wp_body_open(); ?>
<div class="wrapper">
	<?php neve_before_header_wrapper_trigger(); ?>
	<header class="<?php echo esc_attr( $header_classes ); ?>" role="banner">
		<a class="neve-skip-link show-on-focus" href="#content" tabindex="0">
			<?php echo __( 'Skip to content', 'neve' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</a>
		<?php
		neve_before_header_trigger();
		if ( apply_filters( 'neve_filter_toggle_content_parts', true, 'header' ) === true ) {
			do_action( 'neve_do_header' );
		}
		neve_after_header_trigger();
		?>
	</header>
	<?php neve_after_header_wrapper_trigger(); ?>
	<?php do_action( 'neve_before_primary' ); ?>

	<main id="content" class="neve-main" role="main">

<?php
do_action( 'neve_after_primary_start' );

