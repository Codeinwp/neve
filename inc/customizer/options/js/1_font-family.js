/* global wp */

/**
 * Handle the font selection preview.
 *
 * @param $
 */
var fontControls = {
	'neve_body_font_family': {
		'linkNodeId': 'neve-google-font-body-css',
		'selectors': 'body'
	},
	'neve_headings_font_family': {
		'linkNodeId': 'neve-google-font-headings-css',
		'selectors': 'h1,h2,h3,h4,h5,h6'
	},
};

var fontSelectionPreview = function ( $ ) {
	'use strict';
	$( function () {
		wp.customize.preview.bind( 'font-selection', function ( data ) {
			$( '#' + fontControls[ data.controlId ].linkNodeId ).remove();
			if ( data.source !== 'system' ) {
				generateLinkNode( fontControls[ data.controlId ].linkNodeId, data.value );
			}
			if ( data.value === 'Default' ) {
				$( fontControls[ data.controlId ].selectors ).css( 'font-family', '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif' );
			}
			$( fontControls[ data.controlId ].selectors ).css( 'font-family', data.value );
			return false;
		} );
	} );
};

fontSelectionPreview( jQuery );

function generateLinkNode( elementId, googleFontName ) {
	var linkNode = $( '#' + elementId );
	var fontValue = googleFontName.replace( ' ', '+' );
	var url = '//fonts.googleapis.com/css?family=' + fontValue + '%3A300%2C400%2C500%2C700&subset=latin&ver=4.9.8';

	if ( linkNode.length !== 0 ) {
		return false;
	}

	var newNode = document.createElement( 'link' );
	newNode.setAttribute( 'rel', 'stylesheet' );
	newNode.setAttribute( 'id', elementId );
	newNode.setAttribute( 'href', url );
	newNode.setAttribute( 'type', 'text/css' );
	newNode.setAttribute( 'media', 'all' );
	$( '#neve-style-css' ).after( newNode );
}