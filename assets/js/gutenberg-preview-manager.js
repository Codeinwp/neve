/* global neveGutenbergHelper */

(function ( $ ) {
	$.neveGutenberg = {
		data: neveGutenbergHelper,

		init: function () {
			this.addClasses();
			this.addCssTag();
			this.handleSidebar();
			this.handleContainer();
			this.handleMetaboxChanges();
			this.handleContentWidth();
		},

		/**
		 * Append Live CSS Tag.
		 */
		addCssTag: function () {
			var tag = '<style class="neve-live-css"></style>';

			$( '.neve-gtb' ).append( tag );
		},

		/**
		 * Add classes to elements.
		 */
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

		/**
		 * Handle sidebar setup.
		 */
		handleSidebar: function () {
			var position = this.data.neve_meta_sidebar ? this.data.neve_meta_sidebar : this.data.sidebarSetup;
			this.handleSidebarChange( position );
		},

		/**
		 * Handle sidebar change.
		 */
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

		/**
		 * Get the sidebar markup.
		 */
		getSidebarMarkup: function ( position ) {
			return '<div class="neve-gtb-sidebar ' + position + '"><p>' + this.data.strings.sidebar + '</p></div>';
		},

		/**
		 * Handle container setup.
		 */
		handleContainer: function () {
			var value = this.data.neve_meta_container ? this.data.neve_meta_container : this.data.containerSetup;
			this.handleContainerChange( value );
		},

		/**
		 * Handle container change.
		 */
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

		/**
		 * Handle metabox changes.
		 */
		handleMetaboxChanges: function () {
			var editor = $( '.editor-styles-wrapper' );
			var self = this;
			// Title toggle.
			$( '#neve-page-settings #neve_meta_disable_title' ).on( 'change', function () {
				$( editor ).find( '.editor-post-title' ).toggle();
				return false;
			} );

			// Sidebar setting.
			$( '#neve-page-settings input[name=neve_meta_sidebar]' ).on( 'change', function ( event ) {
				var value = event.target.value;
				if ( value === 'default' ) {
					value = self.data.sidebarSetup;
				}
				$( '.neve-gtb-sidebar' ).remove();
				self.handleSidebarChange( value );
				return false;
			} );

			// Container setting.
			$( '#neve-page-settings input[name=neve_meta_container]' ).on( 'change', function ( event ) {
				var value = event.target.value;
				if ( value === 'default' ) {
					value = self.data.containerSetup;
				}
				self.handleContainerChange( value );
				return false;
			} );

			// Content width toggle.
			$( '#neve-page-settings input[name=neve_meta_enable_content_width]' ).on( 'change', function ( event ) {
				var value = event.target.checked;
				if ( value === true ) {
					self.handleContentWidthChange();
					return false;
				}
				$( '.neve-live-css' ).empty();
			} );

			// Content width.
			$( '#neve-page-settings input[name=neve_meta_content_width]' ).on( 'input change', function ( event ) {
				var value = event.target.value;
				self.handleContentWidthChange( value );
				return false;
			} );
		},

		/**
		 * Handle content width setup.
		 */
		handleContentWidth: function () {
			if ( this.data.neve_meta_enable_content_width !== 'on' ) {
				return false;
			}
			this.handleContentWidthChange();
			return false;
		},

		/**
		 * Handle Wide Alignments
		 *
		 * @param value
		 * @returns {string}
		 */
		getWideAlignmentStyle: function ( contentWidth ) {
			var windowWidth = $( '.neve-content-wrap' ).innerWidth();
			var containerWidth = $( '.wp-block.editor-post-title__block' ).innerWidth();
			var realContentWidth = (contentWidth / 100) * containerWidth;
			var remainderSpace = (windowWidth - realContentWidth) / 5;

			var wideAlignWidth = Math.floor( realContentWidth + (remainderSpace * 2) );
			if ( wideAlignWidth !== 0 ) {
				return '.wp-block[data-align=wide] { max-width:' + wideAlignWidth + 'px;}';
			}
			return '';
		},

		/**
		 * Handle content width changes.
		 * @param setValue
		 * @returns {boolean}
		 */
		handleContentWidthChange: function ( setValue ) {
			if ( !setValue ) {
				setValue = $( '#neve-page-settings input[name=neve_meta_content_width]' ).val();
			}

			var css = '@media(min-width: 960px) { ' +
				'.neve-gtb.has-sidebar-full-width .neve-blocks-wrap > .editor-block-list__layout > .wp-block:not([data-align=full]):not([data-align=wide]) > *,' +
				'.neve-gtb.has-sidebar-full-width .neve-blocks-wrap .wp-block.editor-post-title__block > div,' +
				'.neve-gtb.has-sidebar-left .neve-blocks-wrap,' +
				'.neve-gtb.has-sidebar-right .neve-blocks-wrap' +
				' { max-width: ' + setValue + '% !important; } ' + this.getWideAlignmentStyle( setValue ) + '}';

			$( '.neve-live-css' ).html( css );
			return false;
		},
	};
})( jQuery );

jQuery( window ).load( function () {
	jQuery.neveGutenberg.init();
} );
