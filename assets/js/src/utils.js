/* jshint esversion: 6 */
/**
 * Check if we're on mobile resolution.
 *
 * @returns {boolean}
 */
export const isMobile = function() {
	return window.innerWidth <= 960;
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
 * Check if user is viewing on the best browser ever.
 */
export const isIe = function() {
	return /(Trident|MSIE|Edge)/.test(window.navigator.userAgent);
};

/**
 * Unhash url.
 * @param url
 * @returns {string}
 */
export const unhashUrl = function(url) {

	let parts =    url.split('#');
	if(parts.length > 1){
		return parts[0];
	}
	return url;
};

/**
 * Add event handler to elements.
 *
 * @param element
 * @param event
 * @param callBack
 */
export const addEvent = function(element, event, callBack) {
	(element.length ? element : [element]).forEach( value => {
		value.addEventListener( event, callBack );
	});
};

/**
 * Toggle Element class name.
 *
 * Toggle don't allow multiple classes on update, so this needs to be only on single ones.
 *
 * @param element
 * @param className Singular class name.
 */
export const toggleClass = function(element, className) {
	batchProcess(element,className,'toggle');
};

/**
 * Add class to element.
 *
 * @param element
 * @param className
 */
export const addClass = function(element, className) {
	batchProcess(element,className,'add');
};

/**
 * Remove class name from element.
 *
 * @param element
 * @param className
 */
export const removeClass = function(element, className) {
	batchProcess(element,className,'remove');
};

export const batchProcess = function (element, classNames, method){
	let classes = classNames.split( ' ' );
	(element.length ? element : [element]).forEach(value=>{
		value.classList[method].apply(value.classList,classes);
	});
}
/**
 * Check if element is in view.
 * @param element
 * @param callback
 * @param intersectionRatio
 */
export const isInView = function(element, callback, intersectionRatio = 0.5) {
	let intersectionObserver = new IntersectionObserver( entries => {
		if ( entries[0].intersectionRatio <= intersectionRatio ) {
			return;
		}
		callback();
	} );
	intersectionObserver.observe( element );
};
