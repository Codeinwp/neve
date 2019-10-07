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
use HFG\Core\Components\Logo;

$_id = current_component( HeaderBuilder::BUILDER_NAME )->get_id();

$show_name = component_setting( Logo::SHOW_TITLE );

$show_desc = component_setting( Logo::SHOW_TAGLINE );

$custom_logo_id = get_theme_mod( 'custom_logo' );


$logo_image = get_media( $custom_logo_id, 'full' );

$wrapper_tag = 'p';
if ( get_option( 'show_on_front' ) === 'posts' && is_home() ) {
	$wrapper_tag = 'h1';
}

$alt_attribute = get_post_meta( $custom_logo_id, '_wp_attachment_image_alt', true );
?>
<div class="site-logo">
	<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php bloginfo( 'name' ); ?>"
			aria-label="<?php bloginfo( 'name' ); ?>">
		<?php 
		if ( $logo_image ) {
			echo '<img src="' . esc_url( $logo_image ) . '" alt="' . esc_attr( $alt_attribute ) . '">';
		} else {
			if ( $show_name ) { 
				?>
		<<?php echo esc_attr( $wrapper_tag ); ?> class="site-title"> <?php bloginfo( 'name' ); ?>
	</<?php echo esc_attr( $wrapper_tag ); ?>>
				<?php 
			}
			if ( $show_desc ) { 
				?>
		<small><?php bloginfo( 'description' ); ?></small>
				<?php 
			}
		} 
		?>
	</a>
</div>

