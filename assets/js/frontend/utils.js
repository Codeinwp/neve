import inView from "in-view";

/**
 * Check if we're on mobile resolution.
 *
 * @returns {boolean}
 */
export const isMobile = function () {
	var windowWidth = window.innerWidth;
	return windowWidth <= 960;
};

export const httpGetAsync = function (theUrl, callback) {
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onload = function() {
		if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
			callback(xmlHttp.response);
	};
	xmlHttp.open('GET', theUrl, true);
	xmlHttp.send(null);
};
