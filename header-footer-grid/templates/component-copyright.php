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

use HFG\Core\Builder\Footer as FooterBuilder;

$id = current_component( FooterBuilder::BUILDER_NAME )->get_id();

$content = get_theme_mod(
	$id . '_content',
	get_theme_mod(
		'neve_footer_text',
		apply_filters(
			'ti_wl_copyright',
			sprintf(
				/* translators: %1$s is Theme Name ( Neve ), %2$s is WordPress */
				esc_html__( '%1$s | Powered by %2$s', 'neve' ),
				wp_kses_post( '<p><a href="https://themeisle.com/themes/neve/" rel="nofollow">Neve</a>' ),
				wp_kses_post( '<a href="http://wordpress.org" rel="nofollow">WordPress</a></p>' )
			)
		)
	)
);

echo '<div class="component-wrap">';
echo wp_kses_post( balanceTags( $content, true ) );
echo '</div>';

