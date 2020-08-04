/* jshint esversion: 6 */
/**
 * Check if we're on mobile resolution.
 *
 * @returns {boolean}
 */
export const isMobile = () => {
	return window.innerWidth <= 960;
};

/**
 * Foreach wrapper.
 *
 * @param iterable
 * @param callback
 */
export const neveEach = function (iterable, callback) {
	for (let i = 0; i < iterable.length; i++) {
		callback(iterable[i]);
	}
};
/**
 * Http get request.
 *
 * @param theUrl
 * @param callback
 * @param params
 */
export const httpGetAsync = (theUrl, callback, params) => {
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onload = () => {
		if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
			callback(xmlHttp.response);
	};
	xmlHttp.onerror = (error) => {
		console.error(error);
	};
	xmlHttp.open('POST', theUrl, true);
	xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	xmlHttp.send(params);
};


/**
 * Check if user is viewing on the best browser ever.
 */
export const isIe = () => {
	return /(Trident|MSIE|Edge)/.test(window.navigator.userAgent);
};

/**
 * Unhash url.
 * @param url
 * @returns {string}
 */
export const unhashUrl = (url) => {

	let parts = url.split('#');
	if (parts.length > 1) {
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
export const addEvent = (element, event, callBack) => {
	let array = ((element instanceof NodeList) ? element : [element]);

	for (let i = 0; i < array.length; i++) {
		array[i] && array[i].addEventListener(event, callBack);
	}
};

/**
 * Toggle Element class name.
 *
 * Toggle don't allow multiple classes on update, so this needs to be only on single ones.
 *
 * @param element
 * @param className Singular class name.
 */
export const toggleClass = (element, className) => {
	batchProcess(element, className, 'toggle');
};

/**
 * Add class to element.
 *
 * @param element
 * @param className
 */
export const addClass = (element, className) => {
	batchProcess(element, className, 'add');
};

/**
 * Remove class name from element.
 *
 * @param element
 * @param className
 */
export const removeClass = (element, className) => {
	batchProcess(element, className, 'remove');
};

export const batchProcess = (element, classNames, method) => {
	let classes = classNames.split(' ');

	let array = ((element instanceof NodeList) ? element : [element]);
	for (let i = 0; i < array.length; i++) {
		array[i] && array[i].classList[method].apply(array[i].classList, classes);
	}
};
/**
 * Check if element is in view.
 * @param element
 * @param callback
 * @param intersectionRatio
 */
export const isInView = (element, callback, intersectionRatio = 0.5) => {
	let intersectionObserver = new IntersectionObserver(entries => {
		if (entries[0].intersectionRatio <= intersectionRatio) {
			return;
		}
		callback();
	});
	intersectionObserver.observe(element);
};
