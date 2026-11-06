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

use HFG\Core\Components\SocialIcons;

$links = component_setting( SocialIcons::LINKS_ID, SocialIcons::get_default_links() );
if ( is_string( $links ) ) {
	$links = json_decode( $links, true );
}

if ( empty( $links ) || ! is_array( $links ) || ! function_exists( 'block_core_social_link_get_icon' ) ) {
	return;
}

$new_tab = (bool) component_setting( SocialIcons::NEW_TAB_ID, 1 );
$items   = [];

foreach ( $links as $social_link ) {
	if ( empty( $social_link['url'] ) || empty( $social_link['network'] ) || ( isset( $social_link['visibility'] ) && $social_link['visibility'] === 'no' ) ) {
		continue;
	}

	$label = ! empty( $social_link['title'] ) ? $social_link['title'] : block_core_social_link_get_name( $social_link['network'] );
	if ( $new_tab ) {
		$label .= ' ' . __( '(opens in a new tab)', 'neve' );
	}

	$items[] = sprintf(
		'<li><a href="%1$s"%2$s>%3$s<span class="screen-reader-text">%4$s</span></a></li>',
		esc_url( $social_link['url'] ),
		$new_tab ? ' target="_blank" rel="noopener noreferrer"' : '',
		wp_kses( block_core_social_link_get_icon( $social_link['network'] ), neve_get_svg_allowed_tags() ),
		esc_html( $label )
	);
}

if ( empty( $items ) ) {
	return;
}
?>
<div class="component-wrap">
	<ul class="nv-social-icons">
		<?php echo implode( '', $items ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Each part is escaped above. ?>
	</ul>
</div>
