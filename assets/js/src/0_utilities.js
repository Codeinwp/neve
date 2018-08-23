(function ( $ ) {
	$.neveUtilities = {
		'isMobile': function () {
			var windowWidth = window.innerWidth;
			if ( windowWidth <= 992 ) {
				return true;
			}
			return false;
		}
	};
}( jQuery ));
