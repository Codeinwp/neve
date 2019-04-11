/* jshint esversion: 6 */
import { initShop } from "./shop.js";
import { initBlog } from "./blog.js";
import { initNavigation } from "./navigation.js";


function run () {
	initShop();
	initBlog();
	initNavigation();
}

/**
 * Do resize events timer based so they don't run continuously.
 */
// var neveResizeTimeout;
// jQuery( window ).on( 'resize', function () {
// 	clearTimeout( neveResizeTimeout );
// 	neveResizeTimeout = setTimeout( function () {
// 		jQuery.neveNavigation.repositionDropdowns();
// 	}, 500 );
// } );

window.addEventListener( 'DOMContentLoaded', function () {
	run();
} );
