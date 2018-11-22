/* global neveMetabox */

(function ( $ ) {
	$.neveMetabox = {
		data: neveMetabox,

		init: function () {
			this.syncRangeToNumber();
			this.handleDependentUi();
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
		},
		handleDependentUi: function () {
			$( '#neve-page-settings .neve-dependent' ).each( function ( index, element ) {
				var influencer = $( 'input#' + $( element ).data( 'depends' ) );
				$( influencer ).on( 'change', function () {
					$( element ).toggleClass( 'neve-hidden' );
				} );
			} );
		}
	};
})( jQuery );

jQuery( window ).load( function () {
	jQuery.neveMetabox.init();
} );
