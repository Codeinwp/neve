<?php
/**
 * The template for displaying the offline page
 *
 * @package Neve
 */ ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> <?php echo wp_kses( apply_filters( 'neve_body_data_attrs', '' ), array( '[class]' => true ) ); ?>>
<?php wp_body_open(); ?>
<?php
do_action( 'neve_do_offline' );

wp_footer(); 
?>

</body>

</html>
