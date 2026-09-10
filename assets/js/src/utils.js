/* global IntersectionObserver,NodeList,XMLHttpRequest,CustomEvent */

export const NV_FOCUS_TRAP_START = 'ftrap-run';
export const NV_FOCUS_TRAP_END = 'ftrap-end';

/**
 * Scoped querySelector shorthand.
 *
 * Member expressions like document.querySelector cannot be mangled by the
 * minifier — routing every call through these helpers is a real byte win
 * on the size-budgeted frontend bundle.
 *
 * @param {string}  selector
 * @param {Element} scope
 * @return {Element|null} First match.
 */
export const qs = (selector, scope = document) => scope.querySelector(selector);

/**
 * Scoped querySelectorAll shorthand. Returns the live NodeList so the
 * class/event helpers below keep receiving what they always did.
 *
 * @param {string}  selector
 * @param {Element} scope
 * @return {NodeList} Matches.
 */
export const qsa = (selector, scope = document) =>
	scope.querySelectorAll(selector);

/**
 * Dispatch a CustomEvent on document.
 *
 * @param {string} name
 * @param {Object} detail
 */
export const emit = (name, detail) =>
	document.dispatchEvent(new CustomEvent(name, { detail }));

/**
 * addEventListener shorthand (single element).
 *
 * @param {EventTarget} el
 * @param {string}      event
 * @param {Function}    handler
 * @param {Object}      opts
 */
export const on = (el, event, handler, opts) =>
	el.addEventListener(event, handler, opts);

/**
 * classList.contains shorthand.
 *
 * @param {Element} el
 * @param {string}  className
 * @return {boolean} Whether the element has the class.
 */
export const has = (el, className) => el.classList.contains(className);

/**
 * preventDefault shorthand.
 *
 * @param {Event} e
 */
export const prevent = (e) => e.preventDefault();

/**
 * getBoundingClientRect shorthand.
 *
 * @param {Element} el
 * @return {DOMRect} Bounding rect.
 */
export const rect = (el) => el.getBoundingClientRect();
/**
 * Foreach wrapper.
 *
 * @param {Object} iterable
 * @param {callback} callback
 */
export const neveEach = function (iterable, callback) {
	for (let i = 0; i < iterable.length; i++) {
		callback(iterable[i]);
	}
};
/**
 * Http get request.
 *
 * @param {string} theUrl
 * @param {callback} callback
 * @param {Object} params
 */
export const httpGetAsync = (theUrl, callback, params) => {
	const xmlHttp = new XMLHttpRequest();
	xmlHttp.onload = () => {
		if (xmlHttp.status === 200) callback(xmlHttp.response);
	};
	xmlHttp.onerror = () => {};
	xmlHttp.open('POST', theUrl, true);
	xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	xmlHttp.send(params);
};

/**
 * Add event handler to elements.
 *
 * @param {NodeList} element
 * @param {string} event
 * @param {callback} callBack
 */
export const addEvent = (element, event, callBack) => {
	const array = element instanceof NodeList ? element : [element];
	array.forEach((item) =>
		item.addEventListener(event, (e) => callBack(e, item))
	);
};

/**
 * Toggle Element class name.
 *
 * Toggle don't allow multiple classes on update, so this needs to be only on single ones.
 *
 * @param {NodeList} element
 * @param {string} className Singular class name.
 */
export const toggleClass = (element, className) => {
	batchProcess(element, className, 'toggle');
};

/**
 * Add class to element.
 *
 * @param {NodeList} element
 * @param {string} className
 */
export const addClass = (element, className) => {
	batchProcess(element, className, 'add');
};

/**
 * Remove class name from element.
 *
 * @param {NodeList} element
 * @param {string} className
 */
export const removeClass = (element, className) => {
	batchProcess(element, className, 'remove');
};

export const batchProcess = (element, classNames, method) => {
	const classes = classNames.split(' ');
	const array = element instanceof NodeList ? element : [element];
	array.forEach((item) =>
		item.classList[method].apply(item.classList, classes)
	);
};
/**
 * Check if element is in view.
 *
 * @param {Object} element
 * @param {callback} callback
 * @param {number} intersectionRatio
 */
export const isInView = (element, callback, intersectionRatio = 0.5) => {
	if (!element) {
		return;
	}
	const intersectionObserver = new IntersectionObserver((entries) => {
		if (entries[0].intersectionRatio <= intersectionRatio) {
			return;
		}
		callback();
		const check = setInterval(() => {
			// Is element still in view-port?
			const bounding = element.getBoundingClientRect();
			const { top, left, right, bottom } = bounding;
			const { innerWidth, innerHeight } = window;
			if (
				top >= 0 &&
				left >= 0 &&
				right <= innerWidth &&
				bottom <= innerHeight
			) {
				callback();
			} else {
				clearInterval(check);
			}
		}, 750);
	});
	intersectionObserver.observe(element);
};
