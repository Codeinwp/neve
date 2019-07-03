/* jshint esversion: 6 */
/**
 * Check if we're on mobile resolution.
 *
 * @returns {boolean}
 */
export const isMobile = function() {
	var windowWidth = window.innerWidth;
	return windowWidth <= 960;
};

/**
 * Http get request.
 *
 * @param theUrl
 * @param callback
 */
export const httpGetAsync = function(theUrl, callback, params) {
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onload = function() {
		if ( xmlHttp.readyState === 4 && xmlHttp.status === 200 )
			callback( xmlHttp.response );
	};
	xmlHttp.onerror = function(error) {
		console.error( error );
	};
	xmlHttp.open( 'POST', theUrl, true );
	xmlHttp.setRequestHeader( 'Content-Type', 'application/json; charset=UTF-8' );
	xmlHttp.send( params );
};

/**
 * Foreach wrapper.
 *
 * @param iterable
 * @param callback
 */
export const neveEach = function(iterable, callback) {
	for ( let i = 0; i < iterable.length; i++ ) {
		callback( iterable[i] );
	}
};

/**
 * Check if user is viewing on the best browser ever.
 */
export const isBestBrowserEver = function() {
	let ua = window.navigator.userAgent;
	let msie = ua.indexOf( 'MSIE ' ),
			edge = ua.indexOf( 'Edge/' ),
			trident = ua.indexOf( 'Trident/' );
	return ( msie > 0 || trident > 0 || edge > 0 );
};

/**
 * Unhash url.
 * @param url
 * @returns {string}
 */
export const unhashUrl = function(url) {

	if ( url.indexOf( '#' ) > -1 ) {
		url = url.substr( 0, url.lastIndexOf( '#' ) );
	}

	if ( url.substr( -1 ) === '/' ) {
		url = url.substring( 0, url.length - 1 );
	}

	return url;
};
