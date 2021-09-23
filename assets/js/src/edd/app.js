/* global jQuery */

jQuery(document).ready(function ($) {
	$('body').addClass('js');

	/**
	 * EDD cart element in the header
	 */
	const cartTotalAmount = $('.nv-edd-cart-total');

	/**
	 * Handle cart total live refresh
	 */
	$('body').on('edd_cart_item_added', function (event, response) {
		cartTotalAmount.html(response.total);
	});

	$('body').on('edd_cart_item_removed', function (event, response) {
		cartTotalAmount.html(response.total);
	});
});
