<?php
/**
 * Displays a formatted price for a download
 *
 * @since 1.0
 * @param int $download_id ID of the download price to show
 * @param bool $echo Whether to echo or return the results
 * @param int $price_id Optional price id for variable pricing
 */
function edd_price( $download_id = 0, $echo = true, $price_id = false ) {}
/**
 * Checks to see if a download has variable prices enabled.
 *
 * @since 1.0.7
 * @param int $download_id ID number of the download to check
 * @return bool true if has variable prices, false otherwise
 */
function edd_has_variable_prices( $download_id = 0 ) {}
/**
 * Retrieves a price from from low to high of a variable priced download
 *
 * @since 1.4.4
 * @param int $download_id ID of the download
 * @return string $range A fully formatted price range
 */
function edd_price_range( $download_id = 0 ) {}
/**
 * Get Purchase Link
 *
 * Builds a Purchase link for a specified download based on arguments passed.
 * This function is used all over EDD to generate the Purchase or Add to Cart
 * buttons. If no arguments are passed, the function uses the defaults that have
 * been set by the plugin. The Purchase link is built for simple and variable
 * pricing and filters are available throughout the function to override
 * certain elements of the function.
 *
 * $download_id = null, $link_text = null, $style = null, $color = null, $class = null
 *
 * @since 1.0
 * @param array $args Arguments for display
 * @return string $purchase_form
 */
function edd_get_purchase_link( $args = array() ) {}
/**
 * Determines if we're currently on the Checkout page
 *
 * @since 1.1.2
 * @return bool True if on the Checkout page, false otherwise
 */
function edd_is_checkout() {}
/**
 * Determines if we're currently on the Success page.
 *
 * @since 1.9.9
 * @return bool True if on the Success page, false otherwise.
 */
function edd_is_success_page() {}
/**
 * Determines if we're currently on the Failed Transaction page.
 *
 * @since 2.1
 * @return bool True if on the Failed Transaction page, false otherwise.
 */
function edd_is_failed_transaction_page() {}
/**
 * Determines if we're currently on the Purchase History page.
 *
 * @since 2.1
 * @return bool True if on the Purchase History page, false otherwise.
 */
function edd_is_purchase_history_page() {}