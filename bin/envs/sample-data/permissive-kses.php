<?php
/**
 * Plugin Name: E2E permissive kses filter
 * Description: Widens wp_kses_allowed_html for every context, including 'strip', the way some plugins do. Reproduces Codeinwp/neve#4623.
 *
 * @package neve
 */

/**
 * Allow <span class> in every kses context.
 *
 * @param array $allowed_html Allowed tags.
 *
 * @return array
 */
function neve_e2e_permissive_kses( $allowed_html ) {
	return array_merge_recursive( (array) $allowed_html, array( 'span' => array( 'class' => true ) ) );
}
add_filter( 'wp_kses_allowed_html', 'neve_e2e_permissive_kses', PHP_INT_MAX );
