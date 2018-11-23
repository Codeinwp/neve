/**
 * Handles the order for all the scripts.
 */
jQuery( document ).ready( function () {
	jQuery.neveNavigation.init();
	jQuery.neveWoo.init();
} );
jQuery( window ).load( function () {
	jQuery.neveBlog.init();
} );

/**
 * Do resize events timer based so they don't run continuously.
 */
var neveResizeTimeout;
jQuery( window ).on( 'resize', function () {
	clearTimeout( neveResizeTimeout );
	neveResizeTimeout = setTimeout( function () {
		jQuery.neveNavigation.repositionDropdowns();
		jQuery.neveBlog.handleGutenbergAlignment();
	}, 500 );
} );