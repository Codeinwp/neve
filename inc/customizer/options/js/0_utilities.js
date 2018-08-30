(function ( $ ) {
	$.neveCustomizeUtilities = {
		'setLiveCss': function ( settings, to ) {
			'use strict';
			var result = '';
			var styleClass = $( '.' + settings.styleClass );
			if ( typeof to !== 'object' ) {
				$( settings.selectors ).css( settings.cssProperty, to.toString() + settings.propertyUnit );
				return false;
			}

			$.each( to, function ( key, value ) {
				var style_to_add;
				style_to_add = settings.selectors + '{ ' + settings.cssProperty + ':' + value + settings.propertyUnit + '}';
				switch ( key ) {
					case 'desktop':
						result += style_to_add;
						break;
					case 'tablet':
						result += '@media (max-width: 767px){' + style_to_add + '}';
						break;
					case 'mobile':
						result += '@media (max-width: 480px){' + style_to_add + '}';
						break;
				}
			} );
			if ( styleClass.length > 0 ) {
				styleClass.text( result );
			} else {
				$( 'head' ).append( '<style type="text/css" class="' + settings.styleClass + '">' + result + '</style>' );
			}
		}
	};
}( jQuery ));
