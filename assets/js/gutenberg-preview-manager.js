/* global neveGutenbergHelper */

(function ( $ ) {
	$.neveGutenberg = {
		data: neveGutenbergHelper,

		init: function () {
			this.addClasses();
			this.handleSidebar();
			this.handleContainer();
			this.handleMetaboxChanges();
			console.log( this.data );
		},

		addClasses: function () {
			var editor = $( '.editor-styles-wrapper' );
			var wrapMarkup = '<div class="neve-gtb-flow-wrap has-sidebar-' + this.data.neve_meta_sidebar + '"></div>';
			$( editor ).addClass( 'neve-gtb' );
			$( editor ).find( '.editor-writing-flow' ).wrap( wrapMarkup );
			if ( this.data.metaStatus === 'enabled' ) {
				$( editor ).addClass( 'neve-has-meta' );
			}
			if ( this.data.neve_meta_disable_title === 'on' ) {
				$( '.neve-gtb' ).find( '.editor-post-title' ).hide();
			}
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
			return '<div class="neve-gtb-sidebar ' + sidebarClass + position + '"><p>' + this.data.strings.sidebar + '</p></div>';
		},

		handleContainer: function () {
			var value = this.data.neve_meta_container ? this.data.neve_meta_container : this.data.containerSetup;
			if ( value === 'full-width' ) {
				$( '.neve-gtb-flow-wrap' ).addClass( 'container-fluid' );
			} else {
				$( '.neve-gtb-flow-wrap' ).addClass( 'container' );
			}
		},

		handleMetaboxChanges: function () {
			var self = this;

			// Title toggle.
			$( '#neve-page-settings #neve_meta_disable_title' ).on( 'change', function () {
				$( '.neve-gtb' ).find( '.editor-post-title' ).toggle();
			} );

			// Sidebar setting.
			$( '#neve-page-settings input[name=neve_meta_sidebar]' ).on( 'change', function ( event ) {
				var value = event.target.value;
				if ( event.target.value === 'default' ) {
					value = self.data.sidebarSetup;
				}
				$( '.neve-gtb-sidebar' ).addClass( 'sidebar-hidden' );
				var flow = $( '.neve-gtb-flow-wrap' );
				switch ( value ) {
					case 'right':
						$( flow ).removeClass( 'has-sidebar-left has-sidebar-full-width' );
						$( flow ).addClass( 'has-sidebar-right' );
						$( '.neve-gtb-sidebar.right' ).removeClass( 'sidebar-hidden' );
						break;
					case 'left':
						$( flow ).removeClass( 'has-sidebar-right has-sidebar-full-width' );
						$( flow ).addClass( 'has-sidebar-left' );
						$( '.neve-gtb-sidebar.left' ).removeClass( 'sidebar-hidden' );
						break;
					case 'full-width':
						$( flow ).removeClass( 'has-sidebar-right has-sidebar-left' );
						$( flow ).addClass( 'has-sidebar-full-width' );
					default:
						break;
				}
			} );

			// Container setting.
			$( '#neve-page-settings input[name=neve_meta_container]' ).on( 'change', function ( event ) {
				var value = event.target.value;

				if ( event.target.value === 'default' ) {
					value = self.data.containerSetup;
				}
				switch ( value ) {
					default:
					case 'contained':
						$( '.neve-gtb-flow-wrap' ).removeClass( 'container-fluid' ).addClass( 'container' );
						break;
					case 'full-width':
						$( '.neve-gtb-flow-wrap' ).removeClass( 'container' ).addClass( 'container-fluid' );
						break;
				}

				console.log( value );
			} )
		},

	};
})( jQuery );

jQuery( window ).load( function () {
	jQuery.neveGutenberg.init();
} );
