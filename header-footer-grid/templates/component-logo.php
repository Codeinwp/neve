<?php
/**
 * Template used for component rendering wrapper.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */
namespace HFG;

use HFG\Core\Builder\Header as HeaderBuilder;

$_id = current_component( HeaderBuilder::BUILDER_NAME )->get_id();

$show_name      = get_theme_mod( $_id . '_show_title', 1 );
$show_desc      = get_theme_mod( $_id . '_show_tagline', 1 );
$image_position = get_theme_mod( $_id . '_logo_pos', 'top' );

$logo_classes   = array( 'nv-nav-header', 'site-branding' );
$logo_classes[] = 'logo-' . $image_position;

$custom_logo_id = get_theme_mod( 'custom_logo' );

$logo_image = settings()->get_media( $custom_logo_id, 'full' );
// TODO get retina mod.
$logo_retina       = '';
$logo_retina_image = settings()->get_media( $logo_retina );
$wrapper_tag       = 'p';
if ( get_option( 'show_on_front' ) === 'posts' && is_home() ) {
	$wrapper_tag = 'h1';
}

$alt_attribute = get_post_meta( $custom_logo_id, '_wp_attachment_image_alt', true );
?>
<div class="site-logo">
	<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php bloginfo( 'name' ); ?>">
		<?php if ( $logo_image ) { ?>
			<img src="<?php echo esc_url( $logo_image ); ?>"
				alt="<?php echo esc_attr( $alt_attribute ); ?>" <?php echo ( $logo_retina_image ) ? ( 'srcset="' . esc_url( $logo_retina_image ) . ' 2x"' ) : ''; // WPCS: XSS ok. ?> >
		<?php } else { ?>
				<?php if ( $show_name ) { ?>
				<<?php echo esc_attr( $wrapper_tag ); ?> class="site-title"> <?php bloginfo( 'name' ); ?> </<?php echo esc_attr( $wrapper_tag ); ?>>
				<?php } ?>
			<?php if ( $show_desc ) { ?>
				<small><?php bloginfo( 'description' ); ?></small>
			<?php } ?>
		<?php } ?>
	</a>
</div>

