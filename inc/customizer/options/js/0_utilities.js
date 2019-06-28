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
				if ( key === 'suffix' ) {
					return true;
				}
				var unit = settings.propertyUnit;
				if ( typeof settings.propertyUnit === 'object' ) {
					unit = settings.propertyUnit[ key ];
				}

				style_to_add = settings.selectors + '{ ' + settings.cssProperty + ':' + value + unit + '}';
				switch ( key ) {
					default:
					case 'mobile':
						result += style_to_add;
						break;
					case 'desktop':
						result += '@media(min-width: 960px) {' + style_to_add + '}';
						break;
					case 'tablet':
						result += '@media (min-width: 576px){' + style_to_add + '}';
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
