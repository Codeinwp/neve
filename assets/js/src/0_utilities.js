(function ( $ ) {
	$.neveUtilities = {
		'isMobile': function () {
			var windowWidth = window.innerWidth;
			return windowWidth <= 960;
		},
		/**
		 * Detect if an element is in viewport or not
		 *
		 * @param el
		 * @returns {boolean}
		 */
		'isElementInViewport': function ( el ) {
			if ( typeof $ === 'function' && el instanceof $ ) {
				el = el[ 0 ];
			}
			var rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
				rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
			);
		}
	};
}( jQuery ));
