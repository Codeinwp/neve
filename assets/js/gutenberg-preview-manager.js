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
			$( editor ).addClass( 'neve-gtb' );

			// Hide or show meta based on data from php.
			if ( this.data.metaStatus === 'enabled' ) {
				$( editor ).addClass( 'neve-has-meta' );
			}

			// Disable title if already hidden.
			if ( this.data.neve_meta_disable_title === 'on' ) {
				$( '.editor-post-title' ).hide();
			}

			$( '.editor-writing-flow > div:not(.wp-block)' ).addClass( 'neve-content-wrap' );
			$( '.editor-writing-flow > div > div' ).addClass( 'neve-blocks-wrap' );
		},

		handleSidebar: function () {
			var position = this.data.neve_meta_sidebar ? this.data.neve_meta_sidebar : this.data.sidebarSetup;
			this.handleSidebarChange( position );
		},

		handleSidebarChange: function ( position ) {
			var blocksWrap = $( '.editor-writing-flow > div:not(.wp-block)' );
			var editor = $( '.editor-styles-wrapper' );
			switch ( position ) {
				case 'right':
					$( editor ).removeClass( 'has-sidebar-left has-sidebar-full-width' );
					$( editor ).addClass( 'has-sidebar-right' );
					$( blocksWrap ).append( this.getSidebarMarkup( position ) );
					break;
				case 'left':
					$( editor ).removeClass( 'has-sidebar-right has-sidebar-full-width' );
					$( editor ).addClass( 'has-sidebar-left' );
					$( blocksWrap ).prepend( this.getSidebarMarkup( position ) );
					break;
				case 'full-width':
					$( editor ).removeClass( 'has-sidebar-right has-sidebar-left' );
					$( editor ).addClass( 'has-sidebar-full-width' );
					break;
				default:
					break;
			}
			return false;
		},

		getSidebarMarkup: function ( position ) {
			return '<div class="neve-gtb-sidebar ' + position + '"><p>' + this.data.strings.sidebar + '</p></div>';
		},

		handleContainer: function () {
			var value = this.data.neve_meta_container ? this.data.neve_meta_container : this.data.containerSetup;
			this.handleContainerChange( value );
		},

		handleContainerChange: function ( value ) {
			var editor = $( '.editor-styles-wrapper' );

			switch ( value ) {
				default:
				case 'contained':
					$( editor ).removeClass( 'container-fluid' ).addClass( 'container' );
					break;
				case 'full-width':
					$( editor ).removeClass( 'container' ).addClass( 'container-fluid' );
					break;
			}
			return false;
		},

		handleMetaboxChanges: function () {
			var editor = $( '.editor-styles-wrapper' );
			var self = this;
			// Title toggle.
			$( '#neve-page-settings #neve_meta_disable_title' ).on( 'change', function () {
				$( editor ).find( '.editor-post-title' ).toggle();
			} );

			// Sidebar setting.
			$( '#neve-page-settings input[name=neve_meta_sidebar]' ).on( 'change', function ( event ) {
				var value = event.target.value;
				if ( event.target.value === 'default' ) {
					value = self.data.sidebarSetup;
				}
				$( '.neve-gtb-sidebar' ).remove();
				self.handleSidebarChange( value );
			} );

			// Container setting.
			$( '#neve-page-settings input[name=neve_meta_container]' ).on( 'change', function ( event ) {
				var value = event.target.value;

				if ( event.target.value === 'default' ) {
					value = self.data.containerSetup;
				}
				self.handleContainerChange( value );
			} );
		},
	};
})( jQuery );

jQuery( window ).load( function () {
	jQuery.neveGutenberg.init();
} );
