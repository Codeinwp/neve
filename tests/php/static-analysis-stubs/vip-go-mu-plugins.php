<?php

/**
 * wpcom_vip_attachment_url_to_postid
 * @param string $url
 * @return mixed|false
 */
function wpcom_vip_attachment_url_to_postid( $url ) {}
/**
 * wpcom_vip_attachment_url_to_postid
 * @param string $url
 * @return mixed|false
 */

/**
 * This is a sophisticated extended version of wp_remote_get(). It is designed to more gracefully handle failure than wpcom_vip_file_get_contents() does.
 *
 * @link http://vip.wordpress.com/documentation/fetching-remote-data/ Fetching Remote Data
 * @param string $url URL to fetch
 * @param string $fallback_value Optional. Set a fallback value to be returned if the external request fails.
 * @param int $threshold Optional. The number of fails required before subsequent requests automatically return the fallback value. Defaults to 3, with a maximum of 10.
 * @param int $timeout Optional. Number of seconds before the request times out. Valid values 1-3; defaults to 1.
 * @param int $retry Optional. Number of seconds before resetting the fail counter and the number of seconds to delay making new requests after the fail threshold is reached. Defaults to 20, with a minimum of 10.
 * @param array Optional. Set other arguments to be passed to wp_remote_get().
 * @return string|WP_Error|array Array of results.
 * @see wp_remote_get()
 */
function vip_safe_wp_remote_get( $url, $fallback_value='', $threshold=3, $timeout=1, $retry=20, $args = array() ) {}
