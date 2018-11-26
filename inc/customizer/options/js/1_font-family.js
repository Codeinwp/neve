/* global wp */
(function ( $ ) {
	$.neveTypographyPreview = {

		/**
		 * Initialize the font family preview.
		 */
		init: function () {
			this.fontSelectionPreview();
			this.fontPropertiesPreview();
		},

		/**
		 * Map the font controls.
		 */
		fontControls: {
			'neve_body_font_family': {
				'linkNodeId': 'neve-google-font-body-css',
				'selectors': 'body'
			},
			'neve_headings_font_family': {
				'linkNodeId': 'neve-google-font-headings-css',
				'selectors': 'h1,h2,h3,h4,h5,h6'
			},
		},

		/**
		 * Run the font selection previews.
		 */
		fontSelectionPreview: function () {
			'use strict';
			var self = this;
			$( function () {
				wp.customize.preview.bind( 'font-selection', function ( data ) {
					$( '#' + self.fontControls[ data.controlId ].linkNodeId ).remove();
					if ( data.source !== 'system' ) {
						self.generateLinkNode( self.fontControls[ data.controlId ].linkNodeId, data.value );
					}
					if ( data.value === 'Default' ) {
						$( self.fontControls[ data.controlId ].selectors ).css( 'font-family', '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif' );
					}
					$( self.fontControls[ data.controlId ].selectors ).css( 'font-family', data.value );
					return false;
				} );
			} );
		},


		generateLinkNode: function ( elementId, googleFontName ) {
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
		},

		/**
		 * Define font controls and correspondent properties.
		 */
		fontPropertiesRanges: {
			'neve_container_width': {
				'selector': '.container',
				'cssProp': 'max-width',
				'unit': 'px',
				'styleClass': 'container-width-css'
			},
			'neve_body_font_size': {
				'selector': 'body',
				'cssProp': 'font-size',
				'styleClass': 'body-font-size-css'
			},
			'neve_body_line_height': {
				'selector': 'body',
				'cssProp': 'line-height',
				'unit': ' ',
				'styleClass': 'body-line-height-css'
			},
			'neve_h1_font_size': {
				'selector': 'h1, .single .entry-title',
				'cssProp': 'font-size',
				'styleClass': 'h1-font-size-css'
			},
			'neve_h1_line_height': {
				'selector': 'h1, .single .entry-title',
				'cssProp': 'line-height',
				'unit': ' ',
				'styleClass': 'h1-line-height-css'
			},
			'neve_h2_font_size': {
				'selector': 'h2',
				'cssProp': 'font-size',
				'styleClass': 'h2-font-size-css'
			},
			'neve_h2_line_height': {
				'selector': 'h2',
				'cssProp': 'line-height',
				'unit': ' ',
				'styleClass': 'h2-line-height-css'
			},
			'neve_h3_font_size': {
				'selector': 'h3',
				'cssProp': 'font-size',
				'styleClass': 'h3-font-size-css'
			},
			'neve_h3_line_height': {
				'selector': 'h3',
				'cssProp': 'line-height',
				'unit': ' ',
				'styleClass': 'h3-line-height-css'
			},
			'neve_h4_font_size': {
				'selector': 'h4',
				'cssProp': 'font-size',
				'styleClass': 'h4-font-size-css'
			},
			'neve_h4_line_height': {
				'selector': 'h4',
				'cssProp': 'line-height',
				'unit': ' ',
				'styleClass': 'h4-line-height-css'
			},
			'neve_h5_font_size': {
				'selector': 'h5',
				'cssProp': 'font-size',
				'styleClass': 'h5-font-size-css'
			},
			'neve_h5_line_height': {
				'selector': 'h5',
				'cssProp': 'line-height',
				'unit': ' ',
				'styleClass': 'h5-line-height-css'
			},
			'neve_h6_font_size': {
				'selector': 'h6',
				'cssProp': 'font-size',
				'styleClass': 'h6-font-size-css'
			},
			'neve_h6_line_height': {
				'selector': 'h6',
				'cssProp': 'line-height',
				'unit': ' ',
				'styleClass': 'h6-line-height-css'
			},
		},

		/**
		 * Run the font properties previews.
		 */
		fontPropertiesPreview: function () {
			'use strict';
			$.each( this.fontPropertiesRanges, function ( id, args ) {
				wp.customize( id, function ( value ) {
					value.bind( function ( newval ) {
						var values = JSON.parse( newval );
						if ( !values ) {
							return true;
						}
						if ( typeof values.suffix === 'object' ) {
							args.unit = values.suffix;
						}
						var settings = {
							selectors: args.selector,
							cssProperty: args.cssProp,
							propertyUnit: args.unit ? args.unit : '',
							styleClass: args.styleClass,
						};
						$.neveCustomizeUtilities.setLiveCss( settings, values );
					} );
				} );
			} );
		},
	};
})( jQuery );

jQuery.neveTypographyPreview.init();


