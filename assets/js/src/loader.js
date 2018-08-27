/**
 * Handles the order for all the scripts.
 * @param $
 */
var neveScripts = function ( $ ) {
	$.neveNavigation.init();
};

jQuery( document ).ready( function () {
	neveScripts( jQuery );
} );

/**
 * Do resize events timer based so they don't run continuously.
 */
var resizeTimeout;
jQuery( window ).on( 'resize', function () {
	clearTimeout( resizeTimeout );
	resizeTimeout = setTimeout( function () {
		jQuery.neveNavigation.repositionDropdowns();
	}, 500 );
} );