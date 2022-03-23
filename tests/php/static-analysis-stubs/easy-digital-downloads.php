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
/**
 * Formats the currency display
 *
 * @since 1.0
 * @param string $price Price
 * @return string $currency Currencies displayed correctly
 */
function edd_currency_filter( $price = '', $currency = '' ) {}
/**
 * Get Cart Quantity
 *
 * @since 1.0
 * @return int Sum quantity of items in the cart
 */
function edd_get_cart_quantity() {}
/**
 * Given a currency determine the symbol to use. If no currency given, site default is used.
 * If no symbol is determine, the currency string is returned.
 *
 * @since  2.2
 * @param  string $currency The currency string
 * @return string           The symbol to use for the currency
 */
function edd_currency_symbol( $currency = '' ) {}
/**
 * Get the store's set currency
 *
 * @since 1.5.2
 * @return string The currency code
 */
function edd_get_currency() {}
/**
 * Get Total Cart Amount
 *
 * Returns amount after taxes and discounts
 *
 * @since 1.4.1
 * @param bool $discounts Array of discounts to apply (needed during AJAX calls)
 * @return float Cart amount
 */
function edd_get_cart_total( $discounts = false ) {}
/**
 * Returns a nicely formatted amount.
 *
 * @since 1.0
 *
 * @param string $amount   Price amount to format
 * @param string $decimals Whether or not to use decimals.  Useful when set to false for non-currency numbers.
 *
 * @return string $amount Newly formatted amount or Price Not Available
 */
function edd_format_amount( $amount, $decimals = true ) {}