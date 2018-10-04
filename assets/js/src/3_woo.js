/* global NeveProperties */

(function ( $ ) {
	$.neveWoo = {
		'init': function () {
			this.handleShopSidebar();
		},
		'handleShopSidebar': function () {
			$( '.nv-sidebar-toggle' ).on( 'click touchend', function () {
				$('.shop-sidebar').toggleClass( 'sidebar-open' );
				$('html').toggleClass( 'menu-opened' );
				return false;
			} );
		},
	};
}( jQuery ));

