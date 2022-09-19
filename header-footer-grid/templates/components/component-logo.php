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
$is_not_link   = component_setting( Logo::DISABLE_LINK, false );
$display_order = component_setting( Logo::DISPLAY, 'default' );
$main_logo     = get_theme_mod( 'custom_logo' );
$custom_logo   = component_setting( Logo::CUSTOM_LOGO, $main_logo );

$active_logo      = $_id === 'logo' ? $main_logo : $custom_logo;
$conditional_logo = json_decode( component_setting( Logo::LOGO, Logo::sanitize_logo_json( $active_logo ) ), true );
$custom_logo_id   = isset( $conditional_logo['light'] ) ? $conditional_logo['light'] : $active_logo;

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

if ( $is_not_link ) {
	$start_tag = '<span class="brand" title="' . get_bloginfo( 'name' ) . '" aria-label="' . get_bloginfo( 'name' ) . '">';
	$end_tag   = '</span>';
} else {
	$start_tag = '<a class="brand" href="' . esc_url( home_url( '/' ) ) . '" title="' . get_bloginfo( 'name' ) . '"
			aria-label="' . get_bloginfo( 'name' ) . '">';
	$end_tag   = '</a>';
}

do_action( 'hfg_before_wp_get_attachment_image', $custom_logo_id );

$logo_settings = array(
	'class'        => 'neve-site-logo',
	'data-variant' => $_id,
);

/**
 * Filters whether the skip lazy class should be added.
 *
 * @param bool $enable_skip_lazy Whether the skip lazy class should be added. Default value is true.
 *
 * @since 2.11
 */
$should_add_skip_lazy = apply_filters( 'neve_skip_lazy', true );
if ( $should_add_skip_lazy ) {
	$logo_settings['class'] = isset( $logo_settings['class'] ) ? $logo_settings['class'] . ' skip-lazy' : 'skip-lazy';
}

$image = ! empty( $custom_logo_id ) ? wp_get_attachment_image( $custom_logo_id, apply_filters( 'hfg_logo_image_size', 'full' ), false, $logo_settings ) : '';
do_action( 'hfg_after_wp_get_attachment_image', $custom_logo_id, $image );
?>

<div class="site-logo">
	<?php
	echo ( $start_tag ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	if ( $image ) {
		switch ( $display_order ) {
			case 'default':
				echo ( $image ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				break;
			case 'titleLogo':
				echo '<div class="title-with-logo">';
				echo ( $title_tagline . $image ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				echo '</div>';
				break;
			case 'logoTitle':
				echo '<div class="title-with-logo">';
				echo ( $image . $title_tagline ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				echo '</div>';
				break;
			case 'logoTopTitle':
				echo '<div class="logo-on-top">';
				echo ( $image . $title_tagline ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				echo '</div>';
				break;
		}
	} else {
		echo ( $title_tagline ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
	echo ( $end_tag ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	?>
</div>

