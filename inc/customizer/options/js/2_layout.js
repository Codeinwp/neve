/**
 * Handle the layout preview.
 *
 * @param $
 */
var layoutRanges = {
	'neve_container_width': {
		'selector': '.container',
		'cssProp': 'max-width',
		'unit': 'px',
		'styleClass': 'container-width-css'
	},
};

var layoutLivePreview = function ( $ ) {
	'use strict';
	$.each( layoutRanges, function ( id, args ) {
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

var containersLayoutMap = {
	'neve_default_container_style': '.page:not(.woocommerce) .single-page-container',
	'neve_blog_archive_container_style': '.archive-container',
	'neve_single_post_container_style': '.single-post-container',
	'neve_shop_archive_container_style': '.woocommerce-page:not(.single-product) .single-page-container',
	'neve_single_product_container_style': '.single-product .single-post-container',
};

var containersLivePreview = function ( $ ) {
	'use strict';
	$.each( containersLayoutMap, function ( controlId, cssSelector ) {
		wp.customize( controlId, function ( value ) {
			value.bind( function ( newval ) {
				console.log( newval );
				console.log( $( cssSelector ) );
				if ( newval === 'contained' ) {
					$( cssSelector ).removeClass( 'container-fluid' ).addClass( 'container' );
					return false;
				}
				$( cssSelector ).removeClass( 'container' ).addClass( 'container-fluid' );
			} )
		} );
	} );
};
containersLivePreview( jQuery );


