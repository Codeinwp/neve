/* global neveMetabox */

(function ( $ ) {
	$.neveMetabox = {
		data: neveMetabox,

		init: function () {
			this.syncRangeToNumber();
		},

		syncRangeToNumber: function () {
			$( '#neve-page-settings .neve-range-input' ).each( function ( index, element ) {
				var range = $( element ).find( 'input.nv-range' );
				var number = $( element ).find( 'input.nv-number' );
				$( range ).on( 'input change', function ( e ) {
					$( number ).val( e.target.value );
				} );
				$( number ).on( 'input change', function ( e ) {
					$( range ).val( e.target.value );
				} );
			} );
		}
	};
})( jQuery );

jQuery( window ).load( function () {
	jQuery.neveMetabox.init();
} );
