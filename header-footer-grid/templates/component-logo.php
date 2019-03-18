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

$id = current_component( HeaderBuilder::BUILDER_NAME )->get_id();

$show_name      = get_theme_mod( $id . '_show_title', 1 );
$show_desc      = get_theme_mod( $id . '_show_tagline', 1 );
$image_position = get_theme_mod( $id . '_logo_pos' );

$logo_classes   = array( 'nv-nav-header', 'site-branding' );
$logo_classes[] = 'logo-' . $image_position;

$custom_logo_id = get_theme_mod( 'custom_logo' );

$logo_image     = settings()->get_media( $custom_logo_id, 'full' );
//TODO get retina mod.
$logo_retina       = '';
$logo_retina_image = settings()->get_media( $logo_retina );

?>
<div class="<?php echo esc_attr( join( ' ', $logo_classes ) ); ?>">
	<?php if ( $logo_image ) { ?>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?> " class="logo-link" rel="home" itemprop="url">
			<img class="site-img-logo" src="<?php echo esc_url( $logo_image ); ?> "
			     alt="<?php _e( 'Logo', 'hfg-module' ); ?>" <?php echo ( $logo_retina_image ) ? ( 'srcset="' . esc_url( $logo_retina_image ) . ' 2x"' ) : ''; ?> ></a>
	<?php } ?>
	<?php if ( $show_name || $show_desc ) { ?>
		<div class="site-name-desc">
			<?php if ( $show_name ) { ?>
				<h1 class="site-title">
					<a href="<?php echo esc_url( home_url( '/' ) ) ?>"
					   rel="home"><?php echo get_bloginfo( 'name', 'display' ); ?></a>
				</h1>
			<?php } ?>
			<?php if ( $show_desc ) { ?>
				<p class="site-description text-uppercase text-xsmall"><?php echo get_bloginfo( 'description', 'display' ); ?></p>
			<?php } ?>
		</div>
	<?php } ?>
</div>

