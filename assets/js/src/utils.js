/* global IntersectionObserver,NodeList,XMLHttpRequest */

export const NV_FOCUS_TRAP_START = 'ftrap-run';
export const NV_FOCUS_TRAP_END = 'ftrap-end';
/**
 * Foreach wrapper.
 *
 * @param {Object}   iterable - Iterable object.
 * @param {callback} callback - Callback function.
 */
export const neveEach = function (iterable, callback) {
	for (let i = 0; i < iterable.length; i++) {
		callback(iterable[i]);
	}
};
/**
 * Http get request.
 *
 * @param {string}   theUrl   - Url to send the request to.
 * @param {callback} callback - Callback function.
 * @param {Object}   params   - Params to send.
 */
export const httpGetAsync = (theUrl, callback, params) => {
	const xmlHttp = new XMLHttpRequest();
	xmlHttp.onload = () => {
		if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
			callback(xmlHttp.response);
	};
	xmlHttp.onerror = () => {};
	xmlHttp.open('POST', theUrl, true);
	xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	xmlHttp.send(params);
};

/**
 * Add event handler to elements.
 *
 * @param {NodeList} element  - Element to add event to.
 * @param {string}   event    - Event name.
 * @param {callback} callBack - Callback function.
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
 * @param {NodeList} element   - Element to toggle class on.
 * @param {string}   className - Singular class name.
 */
export const toggleClass = (element, className) => {
	batchProcess(element, className, 'toggle');
};

/**
 * Add class to element.
 *
 * @param {NodeList} element   - Element to add class to.
 * @param {string}   className - Class name to add.
 */
export const addClass = (element, className) => {
	batchProcess(element, className, 'add');
};

/**
 * Remove class name from element.
 *
 * @param {NodeList} element   - Element to remove class from.
 * @param {string}   className - Class name to remove.
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
 * @param {Object}   element           - Element to check.
 * @param {callback} callback          - Callback function.
 * @param {number}   intersectionRatio - Ratio of element in view.
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
