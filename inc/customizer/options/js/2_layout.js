/**
 * Handle the layout preview.
 *
 * @param $
 */
var layoutControls = {
	'neve_container_width': {
		'selector': '.container',
		'cssProp': 'max-width',
		'unit': 'px',
		'styleClass': 'container-width-css'
	},
};

var layoutLivePreview = function ( $ ) {
	'use strict';
	$.each( layoutControls, function ( id, args ) {
		wp.customize( id, function ( value ) {
			value.bind( function ( newval ) {
				var values = JSON.parse( newval );
				if ( !values ) {
					return true;
				}
				var settings = {
					selectors: args.selector,
					cssProperty: args.cssProp,
					propertyUnit: args.unit,
					styleClass: args.styleClass,
				};
				$.neveCustomizeUtilities.setLiveCss( settings, values );
			} );
		} );
	} );
};

layoutLivePreview( jQuery );



