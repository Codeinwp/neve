<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      17/10/2018
 *
 * @package utilities.php
 */

use Neve_Pro\Modules\Header_Footer_Grid\Components\Icons;
use HFG\Core\Components\Utility\SearchIconButton;

/**
 * Check if we're delivering AMP
 *
 * Function(is_amp_endpoint) is deprecated since AMP v2.0, use amp_is_request instead of it since v2.0
 *
 * @return bool
 */
function neve_is_amp() {
	return ( function_exists( 'amp_is_request' ) && amp_is_request() ) || ( function_exists( 'is_amp_endpoint' ) && is_amp_endpoint() );
}

/**
 * Show body attrs.
 */
function neve_body_attrs() {
	$body_attrs = apply_filters( 'neve_body_data_attrs', 'id="neve_body" ' );
	echo( $body_attrs ); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}

/**
 * Get hooks by location
 *
 * @return array $hooks - hooks locations and name
 */
function neve_hooks() {

	$hooks = array(
		'header'     => array(
			'neve_html_start_before',
			'neve_head_start_after',
			'neve_head_end_before',
			'neve_body_start_after',
			'neve_before_header_hook',
			'neve_before_header_wrapper_hook',
			'neve_after_header_hook',
			'neve_after_header_wrapper_hook',
			'neve_before_mobile_menu_content',
			'neve_after_mobile_menu_content',
		),
		'footer'     => array(
			'neve_before_footer_hook',
			'neve_after_footer_hook',
			'neve_body_end_before',
		),
		'post'       => array(
			'neve_before_post_content',
			'neve_after_post_content',
		),
		'page'       => array(
			'neve_before_page_header',
			'neve_before_page_comments',
		),
		'single'     => array(
			'neve_before_content',
			'neve_after_content',
		),
		'sidebar'    => array(
			'neve_before_sidebar_content',
			'neve_after_sidebar_content',
		),
		'blog'       => array(
			'neve_before_loop',
			'neve_before_posts_loop',
			'neve_after_posts_loop',
			'neve_loop_entry_before',
			'neve_loop_entry_after',
			'neve_middle_posts_loop',
		),
		'pagination' => array(
			'neve_before_pagination',
		),
	);

	if ( class_exists( 'WooCommerce' ) ) {
		$hooks['shop']     = array(
			'neve_before_cart_popup',
			'neve_after_cart_popup',
			'woocommerce_before_shop_loop',
			'woocommerce_after_shop_loop',
			'woocommerce_before_shop_loop_item',
			'nv_shop_item_content_after',
		);
		$hooks['product']  = array(
			'woocommerce_before_single_product',
			'woocommerce_before_single_product_summary',
			'woocommerce_single_product_summary',
			'woocommerce_simple_add_to_cart',
			'woocommerce_before_add_to_cart_form',
			'woocommerce_before_variations_form',
			'woocommerce_before_add_to_cart_quantity',
			'woocommerce_after_add_to_cart_quantity',
			'woocommerce_before_add_to_cart_button',
			'woocommerce_before_single_variation',
			'woocommerce_single_variation',
			'woocommerce_after_single_variation',
			'woocommerce_after_add_to_cart_button',
			'woocommerce_after_variations_form',
			'woocommerce_after_add_to_cart_form',
			'woocommerce_product_meta_start',
			'woocommerce_product_meta_end',
			'woocommerce_share',
			'woocommerce_after_single_product_summary',
		);
		$hooks['cart']     = array(
			'woocommerce_after_cart_table',
			'woocommerce_before_cart_totals',
			'woocommerce_before_shipping_calculator',
			'woocommerce_after_shipping_calculator',
			'woocommerce_cart_totals_before_order_total',
			'woocommerce_proceed_to_checkout',
			'woocommerce_after_cart_totals',
			'woocommerce_cart_is_empty',
		);
		$hooks['checkout'] = array(
			'woocommerce_before_checkout_billing_form',
			'woocommerce_after_checkout_billing_form',
			'woocommerce_before_checkout_shipping_form',
			'woocommerce_after_checkout_shipping_form',
			'woocommerce_before_order_notes',
			'woocommerce_after_order_notes',
			'woocommerce_review_order_before_order_total',
			'woocommerce_review_order_before_payment',
			'woocommerce_review_order_before_submit',
			'woocommerce_review_order_after_submit',
			'woocommerce_review_order_after_payment',
		);
		$hooks['login']    = array(
			'woocommerce_login_form_start',
			'woocommerce_login_form_end',
		);
		$hooks['register'] = array(
			'woocommerce_register_form_end',
			'woocommerce_register_form_start',
		);
		$hooks['account']  = array(
			'woocommerce_before_account_navigation',
			'woocommerce_account_navigation',
			'woocommerce_after_account_navigation',
			'woocommerce_account_content',
			'woocommerce_account_dashboard',
		);
	}

	$hooks['download-archive'] = array(
		'neve_before_download_archive',
		'neve_after_download_archive',
	);

	$hooks['single-download'] = array(
		'neve_before_download_content',
		'neve_after_download_content',
	);

	return apply_filters( 'neve_hooks_list', $hooks );
}

/**
 * Cart icon markup.
 *
 * The changes here might not be visible on front end due to woocommerce cart-fragments.js
 * In that case deactivate and reactivate WooCommerce.
 *
 * @param bool   $echo should be echoed.
 * @param int    $size icon size.
 * @param string $cart_icon Cart icon.
 *
 * @return string|null
 */
function neve_cart_icon( $echo = false, $size = 15, $cart_icon = '', $icon_custom = '' ) {
	$icon = '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 1536q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm896 0q0 52-38 90t-90 38-90-38-38-90 38-90 90-38 90 38 38 90zm128-1088v512q0 24-16.5 42.5t-40.5 21.5l-1044 122q13 60 13 70 0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-11 8-31.5t16-36 21.5-40 15.5-29.5l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t19.5 15.5 13 24.5 8 26 5.5 29.5 4.5 26h1201q26 0 45 19t19 45z"/></svg>';
	if ( ! empty( $cart_icon ) && class_exists( '\Neve_Pro\Modules\Header_Footer_Grid\Components\Icons' ) ) {
		$cart_icon_svg = Icons::get_instance()->get_single_icon( $cart_icon );
		$icon          = ! empty( $cart_icon_svg ) ? $cart_icon_svg : $icon;
	}

	if ( $cart_icon === 'custom' ) {
		$icon = neve_kses_svg( $icon_custom );
	}

	$svg = '<span class="nv-icon nv-cart">' . $icon . '</span>';
	if ( $echo === false ) {
		return $svg;
	}
	echo( $svg ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	return null;
}

/**
 * Search Icon
 *
 * @param bool         $is_link should be wrapped in A tag.
 * @param bool         $echo should be echoed.
 * @param int          $size icon size.
 * @param bool         $amp_ready Should we add the AMP binding.
 * @param false|string $context Represents where the search icon is being used.
 *
 * @return string|null
 */
function neve_search_icon( $is_link = false, $echo = false, $size = 15, $amp_ready = false, $context = false ) {

	$icon_type = SearchIconButton::DEFAULT_ICON;

	if ( $context === 'hfg' ) {
		$hfg_icon_type = \HFG\component_setting( SearchIconButton::ICON_TYPE, SearchIconButton::DEFAULT_ICON );

		// For the possibility of \HFG\current_component returning false
		if ( $hfg_icon_type !== false ) {
			$icon_type = $hfg_icon_type;
		}
	}

	if ( $icon_type === SearchIconButton::CUSTOM_ICON ) {
		$svg = \HFG\component_setting( SearchIconButton::CUSTOM_ICON_SVG, SearchIconButton::DEFAULT_CUSTOM_ICON_SVG );
	} else {
		$svg = SearchIconButton::render_icon( $icon_type, $size );
	}

	$amp_state = '';
	if ( $amp_ready ) {
		$amp_state = 'on="tap:AMP.setState({visible: !visible})" role="button"  ';
	}
	$start_tag = $is_link ? 'a aria-label="' . __( 'Search', 'neve' ) . '" href="#"' : 'span';
	$end_tag   = $is_link ? 'a' : 'span';
	$output    = '<' . $start_tag . ' class="nv-icon nv-search" ' . $amp_state . '>
				' . neve_kses_svg( $svg ) . '
			</' . $end_tag . '>';
	if ( $echo === false ) {
		return $output;
	}
	echo $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	return null;
}

/**
 *  Escape HTML strings containing SVG.
 *
 * @param string $input the input string.
 * @param array  $additional_args additional allowed.
 *
 * @return string
 */
function neve_custom_kses_escape( $input, $additional_args ) {
	$kses_defaults = wp_kses_allowed_html( 'post' );
	$allowed_tags  = array_merge( $kses_defaults, $additional_args );

	return wp_kses( $input, $allowed_tags );
}

/**
 * Get allowed tags for SVG tags.
 *
 * @return array
 */
function neve_get_svg_allowed_tags() {
	return array(
		'svg'      => array(
			'class'           => true,
			'aria-hidden'     => true,
			'aria-labelledby' => true,
			'role'            => true,
			'xmlns'           => true,
			'width'           => true,
			'fill'            => true,
			'fill-opacity'    => true,
			'height'          => true,
			'stroke'          => true,
			'viewbox'         => true, // <= Must be lower case!
		),
		'style'    => array(
			'type' => true,
		),
		'g'        => array(
			'fill'            => true,
			'transform'       => true,
			'style'           => true,
			'stroke'          => true,
			'stroke-linecap'  => true,
			'stroke-linejoin' => true,
			'stroke-width'    => true,
		),
		'circle'   => array(
			'cx'        => true,
			'cy'        => true,
			'r'         => true,
			'class'     => true,
			'style'     => true,
			'transform' => true,
		),
		'title'    => array( 'title' => true ),
		'path'     => array(
			'd'               => true,
			'fill'            => true,
			'fill-rule'       => true,
			'clip-rule'       => true,
			'style'           => true,
			'class'           => true,
			'transform'       => true,
			'stroke'          => true,
			'stroke-linecap'  => true,
			'stroke-linejoin' => true,
			'stroke-width'    => true,
		),
		'polyline' => array(
			'fill'            => true,
			'stroke'          => true,
			'stroke-linecap'  => true,
			'stroke-linejoin' => true,
			'stroke-width'    => true,
			'points'          => true,
		),
		'polygon'  => array(
			'class'     => true,
			'points'    => true,
			'style'     => true,
			'transform' => true,
		),
		'rect'     => array(
			'x'         => true,
			'y'         => true,
			'rx'        => true,
			'ry'        => true,
			'width'     => true,
			'height'    => true,
			'class'     => true,
			'style'     => true,
			'transform' => true,
		),
	);
}

/**
 * Escape SVG.
 *
 * @param string $input input string to escape.
 *
 * @return string
 */
function neve_kses_svg( $input ) {
	$svg_args = neve_get_svg_allowed_tags();

	return neve_custom_kses_escape( $input, $svg_args );
}

/**
 * Get standard fonts
 *
 * @param bool $with_variants should fetch variants.
 *
 * @return array
 */
function neve_get_standard_fonts( $with_variants = false ) {
	$fonts = array(
		'Arial, Helvetica, sans-serif'                     => array( '400', '700', '400italic', '700italic' ),
		'Arial Black, Gadget, sans-serif'                  => array( '900', '900italic' ),
		'Bookman Old Style, serif'                         => array( '400', '700', '400italic', '700italic' ),
		'Comic Sans MS, cursive'                           => array( '400', '700', '400italic', '700italic' ),
		'Courier, monospace'                               => array( '400', '700', '400italic', '700italic' ),
		'Georgia, serif'                                   => array( '400', '700', '400italic', '700italic' ),
		'Garamond, serif'                                  => array( '400', '700', '400italic', '700italic' ),
		'Impact, Charcoal, sans-serif'                     => array( '400', '700', '400italic', '700italic' ),
		'Lucida Console, Monaco, monospace'                => array( '400', '700', '400italic', '700italic' ),
		'Lucida Sans Unicode, Lucida Grande, sans-serif'   => array( '400', '700', '400italic', '700italic' ),
		'MS Sans Serif, Geneva, sans-serif'                => array( '400', '700', '400italic', '700italic' ),
		'MS Serif, New York, sans-serif'                   => array( '400', '700', '400italic', '700italic' ),
		'Palatino Linotype, Book Antiqua, Palatino, serif' => array( '400', '700', '400italic', '700italic' ),
		'Tahoma, Geneva, sans-serif'                       => array( '400', '700', '400italic', '700italic' ),
		'Times New Roman, Times, serif'                    => array( '400', '700', '400italic', '700italic' ),
		'Trebuchet MS, Helvetica, sans-serif'              => array( '400', '700', '400italic', '700italic' ),
		'Verdana, Geneva, sans-serif'                      => array( '400', '700', '400italic', '700italic' ),
		'Paratina Linotype'                                => array( '400', '700', '400italic', '700italic' ),
		'Trebuchet MS'                                     => array( '400', '700', '400italic', '700italic' ),
	);

	if ( $with_variants ) {
		return apply_filters( 'neve_standard_fonts_with_variants_array', $fonts );
	}

	return apply_filters( 'neve_standard_fonts_array', array_keys( $fonts ) );
}

/**
 * Get all google fonts
 *
 * @param bool $with_variants should fetch variants.
 *
 * @return array
 */
function neve_get_google_fonts( $with_variants = false ) {
	$fonts = ( include NEVE_MAIN_DIR . 'globals/google-fonts.php' );

	if ( $with_variants ) {
		return apply_filters( 'neve_google_fonts_with_variants_array', $fonts );
	}

	return apply_filters( 'neve_google_fonts_array', array_keys( $fonts ) );
}

/**
 * Get the heading selectors array.
 *
 * @return array
 */
function neve_get_headings_selectors() {
	return apply_filters(
		'neve_headings_typeface_selectors',
		array(
			'h1' => \Neve\Core\Settings\Config::$css_selectors_map[ \Neve\Core\Settings\Config::CSS_SELECTOR_TYPEFACE_H1 ],
			'h2' => \Neve\Core\Settings\Config::$css_selectors_map[ \Neve\Core\Settings\Config::CSS_SELECTOR_TYPEFACE_H2 ],
			'h3' => \Neve\Core\Settings\Config::$css_selectors_map[ \Neve\Core\Settings\Config::CSS_SELECTOR_TYPEFACE_H3 ],
			'h4' => \Neve\Core\Settings\Config::$css_selectors_map[ \Neve\Core\Settings\Config::CSS_SELECTOR_TYPEFACE_H4 ],
			'h5' => \Neve\Core\Settings\Config::$css_selectors_map[ \Neve\Core\Settings\Config::CSS_SELECTOR_TYPEFACE_H5 ],
			'h6' => \Neve\Core\Settings\Config::$css_selectors_map[ \Neve\Core\Settings\Config::CSS_SELECTOR_TYPEFACE_H6 ],
		)
	);
}

/**
 * Return ready to use external anchor tag.
 *
 * This should be used only in admin context, i.e options page, customizer
 * and it will automatically be switched off if the whitelabel is on.
 *
 * @param string $link Link url.
 * @param string $text Link text.
 * @param bool   $echo Echo the result.
 *
 * @return string Full anchor tag.
 */
function neve_external_link( $link, $text = '', $echo = false ) {
	$text          = empty( $text ) ? __( 'Learn More', 'neve' ) : $text;
	$return        = sprintf(
		'<a target="_blank" rel="external noopener noreferrer" href="' . esc_url( $link ) . '"><span class="screen-reader-text">%s</span>%s <svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" viewBox="0 0 512 512" width="12" height="12" style="margin-right: 5px;"><path fill="currentColor" d="M432 320H400a16 16 0 0 0-16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320ZM488 0h-128c-21.4 0-32 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0Z"/></svg></a>',
		esc_html__( '(opens in a new tab)', 'neve' ),
		esc_html( $text )
	);
	$is_whitelabel = apply_filters( 'neve_is_theme_whitelabeled', false ) || apply_filters( 'neve_is_plugin_whitelabeled', false );
	if ( $is_whitelabel ) {
		return '';
	}
	if ( ! $echo ) {
		return $return;
	}
	echo $return; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped, Already escaped.
	return '';
}

add_filter( 'neve_external_link', 'neve_external_link', 10, 3 );
/**
 * Get Global Colors Default
 *
 * @param bool $migrated get with migrated colors.
 *
 * @return array
 */
function neve_get_global_colors_default( $migrated = false ) {
	return [
		'activePalette' => 'base',
		'palettes'      => [
			'base'     => [
				'name'          => __( 'Base', 'neve' ),
				'allowDeletion' => false,
				'colors'        => [
					'nv-primary-accent'   => '#2f5aae',
					'nv-secondary-accent' => '#2f5aae',
					'nv-site-bg'          => '#ffffff',
					'nv-light-bg'         => '#f4f5f7',
					'nv-dark-bg'          => '#121212',
					'nv-text-color'       => '#272626',
					'nv-text-dark-bg'     => '#ffffff',
					'nv-c-1'              => '#9463ae',
					'nv-c-2'              => '#be574b',
				],
			],
			'darkMode' => [
				'name'          => __( 'Dark Mode', 'neve' ),
				'allowDeletion' => false,
				'colors'        => [
					'nv-primary-accent'   => '#00c2ff',
					'nv-secondary-accent' => '#00c2ff',
					'nv-site-bg'          => '#121212',
					'nv-light-bg'         => '#1a1a1a',
					'nv-dark-bg'          => '#000000',
					'nv-text-color'       => '#ffffff',
					'nv-text-dark-bg'     => '#ffffff',
					'nv-c-1'              => '#198754',
					'nv-c-2'              => '#be574b',
				],
			],
		],
	];
}

/**
 * Checks that we are using the new builder.
 *
 * @return bool
 * @since 3.0.0
 */
function neve_is_new_builder() {
	return get_theme_mod( 'neve_migrated_builders', true );
}

/**
 * Checks that we are using the new skin.
 *
 * @return bool
 * @since 3.0.0
 */
function neve_is_new_skin() {
	return get_theme_mod( 'neve_new_skin', 'new' ) !== 'old';
}

/**
 * Checks if the instance was auto upgraded to the new skin.
 * It is used to allow rollback for auto-upgraded instances.
 *
 * @return bool
 * @since 3.6.x
 */
function neve_was_auto_migrated_to_new() {
	return get_theme_mod( 'neve_auto_migrated_to_new_skin', false );
}

/**
 * Check that we can use conditional headers in PRO.
 *
 * @return bool
 * @since 3.0.0
 */
function neve_can_use_conditional_header() {
	return defined( 'NEVE_PRO_COMPATIBILITY_FEATURES' ) && isset( NEVE_PRO_COMPATIBILITY_FEATURES['headerv2'] ) && neve_is_new_builder();
}

/**
 * Check that we had old builder.
 *
 * @return bool
 * @since 3.0.0
 */
function neve_had_old_hfb() {
	return ( get_theme_mod( 'hfg_header_layout' ) !== false || get_theme_mod( 'hfg_footer_layout' ) ) !== false;
}

/**
 * Check if we have pro support.
 *
 * @param string $feature feature to check support for.
 */
function neve_pro_has_support( $feature ) {
	return ( defined( 'NEVE_PRO_COMPATIBILITY_FEATURES' ) && isset( NEVE_PRO_COMPATIBILITY_FEATURES[ $feature ] ) );
}

/**
 * Check that if new widget editor is available.
 *
 * @return bool
 * @since 3.0.0
 */
function neve_is_new_widget_editor() {
	return ( defined( 'GUTENBERG_VERSION' ) && version_compare( GUTENBERG_VERSION, '10.6.2', '>' ) ) || version_compare( substr( get_bloginfo( 'version' ), 0, 3 ), '5.8', '>=' );
}

/**
 * Check that the active WordPress version is greater than the passed value.
 *
 * @param string $version The default check is for `5.8` other values are accepted.
 *
 * @return bool
 * @since 3.0.5
 */
function neve_is_using_wp_version( $version = '5.8' ) {
	global $wp_version;
	return version_compare( $wp_version, $version, '>=' );
}

/**
 * Wrapper for wp_remote_get on VIP environments.
 *
 * @param string $url Url to check.
 * @param array  $args Option params.
 *
 * @return array|\WP_Error
 */
function neve_safe_get( $url, $args = array() ) {
	return function_exists( 'vip_safe_wp_remote_get' )
		? vip_safe_wp_remote_get( $url )
		: wp_remote_get( //phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.wp_remote_get_wp_remote_get, Already used.
			$url,
			$args
		);
}

/**
 * Create pagination for Easy Digital Downloads Archive.
 */
function neve_edd_download_nav() {

	global $wp_query;

	$big          = 999999;
	$search_for   = array( $big, '#038;' );
	$replace_with = array( '%#%', '&' );

	$allowed_tags = array(
		'ul'   => array(
			'class' => array(),
		),
		'li'   => array(
			'class' => array(),
		),
		'a'    => array(
			'class' => array(),
			'href'  => array(),
		),
		'span' => array(
			'class' => array(),
		),
	);

	$pagination = paginate_links(
		array(
			'base'      => str_replace( $search_for, $replace_with, get_pagenum_link( $big ) ),
			'format'    => '?paged=%#%',
			'current'   => max( 1, get_query_var( 'paged' ) ),
			'total'     => $wp_query->max_num_pages,
			'prev_next' => true,
		)
	);
	?>

	<div id="edd_download_pagination" class="navigation">
		<?php
		echo wp_kses( $pagination, $allowed_tags );
		// TODO use pagination from pluggable class once we have infinite scroll supported for edd.
		?>
	</div>

	<?php

}

/**
 * Check if a value is of unknown type is zero.
 *
 * @param mixed $value Value to check.
 *
 * @return bool
 */
function neve_value_is_zero( $value ) {
	return floatval( $value ) === 0.0;
}


/**
 * Function that is called for triggering hooks on index.
 *
 * @param string $position Hook position.
 */
function neve_do_loop_hook( $position ) {
	if ( ! in_array( $position, [ 'before', 'after', 'entry_before', 'entry_after' ] ) ) {
		return;
	}

	$current_post_type = get_post_type();
	if ( in_array( $current_post_type, array( 'post', 'page', 'product' ), true ) ) {
		return;
	}

	/**
	 * Executes actions on archives.
	 *
	 * The dynamic portion of the hook name, $current_post_type, refers to the post type slug.
	 * The dynamic portion of the hook name, $position, refers to the hook placement. The accepted values are 'before'
	 * ,'after', 'entry_before' and 'entry_after'.
	 * This hook is not available for the following post types: post, page, product.
	 *
	 * Possible action names include:
	 * - neve_loop_attachment_before
	 * - neve_loop_acme_product_before
	 *
	 * @since 2.11
	 */
	do_action( "neve_loop_{$current_post_type}_{$position}" );
}

/**
 * Get meta default data
 *
 * @param string $field Meta field name.
 * @param string $default Default value.
 *
 * @return array
 */
function neve_get_default_meta_value( $field, $default ) {
	$new_control_data = [];

	$components = apply_filters(
		'neve_meta_filter',
		[
			'author'   => __( 'Author', 'neve' ),
			'category' => __( 'Category', 'neve' ),
			'date'     => __( 'Date', 'neve' ),
			'comments' => __( 'Comments', 'neve' ),
		]
	);

	$default_data = get_theme_mod( $field, $default );

	if ( is_string( $default_data ) ) {
		$default_data = json_decode( $default_data, true );
	}

	if ( ! is_array( $default_data ) ) {
		$default_data = [];
	}

	foreach ( $default_data as $meta_component ) {
		if ( array_key_exists( $meta_component, $components ) ) {
			$new_control_data[ $meta_component ] = (object) [
				'slug'           => $meta_component,
				'title'          => $components[ $meta_component ],
				'visibility'     => 'yes',
				'hide_on_mobile' => false,
				'blocked'        => 'yes',
			];
		}
	}

	foreach ( $components as $component_id => $label ) {
		if ( ! array_key_exists( $component_id, $new_control_data ) ) {
			$new_control_data[ $component_id ] = (object) [
				'slug'           => $component_id,
				'title'          => $label,
				'visibility'     => 'no',
				'hide_on_mobile' => false,
				'blocked'        => 'yes',
			];
		}
	}

	return array_values( $new_control_data );
}
