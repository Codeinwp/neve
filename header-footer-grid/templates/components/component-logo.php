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

$conditional_logo = json_decode( component_setting( Logo::COMPONENT_ID, Logo::sanitize_logo_json( '' ) ), true );
$main_logo        = isset( $conditional_logo['light'] ) ? $conditional_logo['light'] : $main_logo;

$custom_logo_id = $_id === 'logo' ? $main_logo : component_setting( Logo::CUSTOM_LOGO, $main_logo );
$wrapper_tag    = 'p';
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
	'id' => 'neve-main-logo',
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
	$logo_settings['class'] = 'skip-lazy';
}

$image = wp_get_attachment_image( $custom_logo_id, apply_filters( 'hfg_logo_image_size', 'full' ), false, $logo_settings );
do_action( 'hfg_after_wp_get_attachment_image', $custom_logo_id, $image );
if ( ! empty( $conditional_logo ) ) {
	$logo_light_id = isset( $conditional_logo['light'] ) ? $conditional_logo['light'] : $main_logo;
	$logo_dark_id  = isset( $conditional_logo['dark'] ) ? $conditional_logo['dark'] : $logo_light_id;

	$variants = array(
		'light' => array(
			'src'    => wp_get_attachment_image_url( $logo_light_id, apply_filters( 'hfg_logo_image_size', 'full' ), false ),
			'srcset' => wp_get_attachment_image_srcset( $logo_light_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
			'sizes'  => wp_get_attachment_image_sizes( $logo_light_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
		),
		'dark'  => array(
			'src'    => wp_get_attachment_image_url( $logo_dark_id, apply_filters( 'hfg_logo_image_size', 'full' ), false ),
			'srcset' => wp_get_attachment_image_srcset( $logo_dark_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
			'sizes'  => wp_get_attachment_image_sizes( $logo_dark_id, apply_filters( 'hfg_logo_image_size', 'full' ) ),
		),
	);
}
?>
<script type="application/javascript">
	var html = document.documentElement;
	var theme = html.getAttribute('data-neve-theme') || 'light';
	function setCurrentTheme( theme ) {
		var isConditional = <?php echo $conditional_logo['same'] ? 'true' : 'false'; ?>;
		var picture = document.getElementById( 'neve-main-logo' );
		if( ! picture ) {
			return;
		}
		if ( theme === 'light' || isConditional ) {
			picture.src = "<?php echo esc_attr( $variants['light']['src'] ); ?>";
			picture.srcset = "<?php echo esc_attr( $variants['light']['srcset'] ); ?>";
			picture.sizes = "<?php echo esc_attr( $variants['light']['sizes'] ); ?>";
			return;
		}
		picture.src = "<?php echo esc_attr( $variants['dark']['src'] ); ?>";
		picture.srcset = "<?php echo esc_attr( $variants['dark']['srcset'] ); ?>";
		picture.sizes = "<?php echo esc_attr( $variants['dark']['sizes'] ); ?>";
	}

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type == "attributes") {
				theme = html.getAttribute('data-neve-theme');
				setCurrentTheme(theme);
			}
		});
	});

	setCurrentTheme(theme);
	observer.observe(html, {
		attributes: true
	});
</script>
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

