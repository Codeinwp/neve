/* global neveGutenbergHelper */

(function ( $ ) {
	$.neveGutenberg = {
		data: neveGutenbergHelper,

		init: function () {
			this.addClasses();
			this.handleSidebar();
			this.handleTitleToggle();
			console.log( this.data );
		},

		addClasses: function () {
			var editor = $( '.editor-styles-wrapper' );
			var wrapMarkup = '<div class="neve-gtb-flow-wrap"></div>';
			$( editor ).addClass( 'neve-gtb' );
			$( editor ).find( '.editor-writing-flow' ).wrap( wrapMarkup );
		},

		handleSidebar: function () {
			var wrap = $( '.neve-gtb-flow-wrap' );
			$( wrap ).prepend( this.getSidebarMarkup( 'left' ) );
			$( wrap ).append( this.getSidebarMarkup( 'right' ) );
		},

		getSidebarMarkup: function ( position ) {
			var sidebarClass = '';
			if ( this.data.neve_meta_sidebar !== position ) {
				sidebarClass = ' sidebar-hidden ';
			}
			return '<div class="neve-gtb-sidebar ' + sidebarClass + position + '"><h2>'+ this.data.strings.sidebar +'</h2></div>';
		},

		handleTitleToggle: function () {
			if ( this.data.neve_meta_disable_title === 'on' ) {
				$( '.neve-gtb' ).find( '.editor-post-title' ).hide();
			}

			$( '#neve-page-settings #neve_meta_disable_title' ).on( 'change', function () {
				$( '.neve-gtb' ).find( '.editor-post-title' ).toggle();
			} );
		},

	};
})( jQuery );

jQuery( window ).load( function () {
	jQuery.neveGutenberg.init();
} );
