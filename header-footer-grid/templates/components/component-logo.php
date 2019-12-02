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

$show_name     = component_setting( Logo::SHOW_TITLE );
$show_desc     = component_setting( Logo::SHOW_TAGLINE );
$display_order = component_setting( Logo::DISPLAY, 'default' );
$main_logo     = get_theme_mod( 'custom_logo' );

$custom_logo_id = $_id === 'logo' ? $main_logo : component_setting( Logo::CUSTOM_LOGO, $main_logo );
$logo_image     = get_media( $custom_logo_id, 'full' );

$wrapper_tag = 'p';
if ( get_option( 'show_on_front' ) === 'posts' && is_home() ) {
	$wrapper_tag = 'h1';
}

$title_tagline = '<div class="nv-title-tagline-wrap">';
if ( $show_name ) {
	$title_tagline .= '<' . esc_attr( $wrapper_tag ) . ' class="site-title">';
	$title_tagline .= get_bloginfo( 'name' );
	$title_tagline .= '</' . esc_attr( $wrapper_tag ) . '>';
}
if ( $show_desc ) {
	$title_tagline .= '<small>';
	$title_tagline .= get_bloginfo( 'description' );
	$title_tagline .= '</small>';
}
$title_tagline .= '</div>';


$alt_attribute = get_post_meta( $custom_logo_id, '_wp_attachment_image_alt', true );
?>
<div class="site-logo">
	<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php bloginfo( 'name' ); ?>"
			aria-label="<?php bloginfo( 'name' ); ?>">
		<?php
		if ( $logo_image ) {
			$image = '<img src="' . esc_url( $logo_image ) . '" alt="' . esc_attr( $alt_attribute ) . '">';
			switch ( $display_order ) {
				case 'default':
					echo wp_kses_post( $image );
					break;
				case 'titleLogo':
					echo '<div class="title-with-logo">';
					echo wp_kses_post( $title_tagline . $image );
					echo '</div>';
					break;
				case 'logoTitle':
					echo '<div class="title-with-logo">';
					echo wp_kses_post( $image . $title_tagline );
					echo '</div>';
					break;
				case 'logoTopTitle':
					echo '<div class="logo-on-top">';
					echo wp_kses_post( $image . $title_tagline );
					echo '</div>';
					break;
			}
		} else {
			echo wp_kses_post( $title_tagline );
		}
		?>
	</a>
</div>

