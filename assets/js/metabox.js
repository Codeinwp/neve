/* global neveMetabox */

(function ( $ ) {
	$.neveMetabox = {
		data: neveMetabox,

		init: function () {
			this.handleRanges();
			console.log( this.data );
		},

		handleRanges: function () {

		}
	};
})( jQuery );

jQuery( window ).load( function () {
	jQuery.neveMetabox.init();
} );
