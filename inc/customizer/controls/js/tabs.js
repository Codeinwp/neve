/**
 * Script for the customizer tabs control interactions.
 *
 * @author    ThemeIsle
 */

/* global wp */


wp.customize.controlConstructor[ 'interface-tabs' ] = wp.customize.Control.extend( {
	ready: function () {

		// Switch tab based on customizer partial edit links.
		wp.customize.previewer.bind(
			'tab-previewer-edit', function ( data ) {
				jQuery( data.selector ).trigger( 'click' );
			}
		);

		wp.customize.previewer.bind(
			'focus-control', function ( data ) {
				/**
				 * This timeout is here because in firefox this happens before customizer animation of changing panels.
				 * After it change panels with the input focused, the customizer was moved to right 12px. We have to make sure
				 * that the customizer animation of changing panels in customizer is done before focusing the input.
				 */
				setTimeout( function () {
					var control = wp.customize.control( data );
					if ( typeof control !== 'undefined' ) {
						wp.customize.control( data ).focus();
					}
				}, 100 );
			}
		);

		wp.customize.previewer.bind(
			'focus-section', function ( data ) {
				/**
				 * This timeout is here because in firefox this happens before customizer animation of changing panels.
				 * After it change panels with the input focused, the customizer was moved to right 12px. We have to make sure
				 * that the customizer animation of changing panels in customizer is done before focusing the input.
				 */
				setTimeout( function () {
					wp.customize.section( data ).focus();
				}, 100 );
			}
		);

		wp.customize.previewer.bind( 'ready', function () {
			var parts = window.location.search.substr( 1 ).split( '&' );
			var $_GET = {};
			for ( var i = 0; i < parts.length; i++ ) {
				var temp = parts[ i ].split( '=' );
				$_GET[ decodeURIComponent( temp[ 0 ] ) ] = decodeURIComponent( temp[ 1 ] );
			}


			if ( typeof $_GET[ 'autofocus[control]' ] !== 'undefined' && $_GET[ 'autofocus[control]' ] !== '' ) {
				jQuery( 'li[id^="customize-control-sidebars_widgets"]' ).on(
					'DOMNodeInserted', function () {
						jQuery( '.neve-customizer-tab > label.' + $_GET[ 'autofocus[control]' ] ).trigger( 'click' );
					} );
			}
		} );

		var self = this;
		/**
		 * Run JS on load.
		 */
		jQuery(window).on('load', function () {
			self.init();
			self.handleClick();
		});
	},

	init: function() {
		var control = this;
		var section = control.section();
		control.hideAllControls( section );
		var tab = ( control.params.controls.general ) ?
				'general' :
				control.params.controls.layout ?
						'layout' :
						control.params.controls.style ?
								'style' :
								Object.keys( control.params.controls )[0];
		var controlsToShow = control.params.controls[tab];
		var allControls = [];
		for ( var controlName in controlsToShow ) {
			if ( controlsToShow.hasOwnProperty( controlName ) ) {
				if ( jQuery.isEmptyObject( controlsToShow[controlName] ) === false &&
						typeof wp.customize.control( controlName ) !== 'undefined' ) {
					var subTabValue = wp.customize.control( controlName ).setting._value;
					allControls = allControls.concat(
							controlsToShow[controlName][subTabValue] );
				}
				allControls.push( controlName );
			}
		}
		control.showControls( allControls, section );
	},

	hideAllControls: function ( section ) {
		var controls = wp.customize.section( section ).controls();
		var tabControl = this.id;
		for ( var i in controls ) {
			var controlId = controls[ i ].id;
			if ( controlId === 'widgets' ) {
				var sectionContainer = wp.customize.section( section ).container;
				jQuery( sectionContainer ).children( 'li[class*="widget"]' ).css( 'display', 'none' );
			} else {
				if ( controlId !== tabControl ) {
					var selector = wp.customize.control( controlId ).selector;
					jQuery( selector ).hide();
				}
			}
		}
	},

	handleClick: function () {
		var control = this;
		var section = control.section();
		var container = control.container;
		jQuery( container ).find( '.neve-customizer-tab' ).on( 'click', function () {
			jQuery( this ).parent().find( '.neve-customizer-tab' ).removeClass( 'active' );
			jQuery( this ).addClass( 'active' );
			control.hideAllControls( section );
			var tab = jQuery( this ).data( 'tab' );
			var controlsToShow = control.params.controls[ tab ];
			var allControls = [];
			for ( var controlName in controlsToShow ) {
				if ( jQuery.isEmptyObject( controlsToShow[ controlName ] ) === false &&
					typeof wp.customize.control( controlName ) !== 'undefined' ) {
					var subTabValue = wp.customize.control( controlName ).setting._value;
					allControls = allControls.concat( controlsToShow[ controlName ][ subTabValue ] );
				}
				allControls.push( controlName );
			}
			control.showControls( allControls, section );
		} );
	},

	showControls: function ( controls, section ) {
		for ( var i in controls ) {
			var controlName = controls[ i ];
			if ( controlName === 'widgets' || controlName.indexOf( 'sidebars_widgets' ) !== -1 ) {
				var sectionContainer = wp.customize.section( section ).container;
				jQuery( sectionContainer ).children( 'li[class*="widget"]' ).css( 'display', 'list-item' );
			} else {
				if ( typeof wp.customize.control( controlName ) !== 'undefined' ) {
					var selector = wp.customize.control( controlName ).selector;
					jQuery( selector ).show();
				}
			}
			var control = wp.customize.control(controlName);
			if( typeof control !== 'undefined' ) {
				var status = wp.customize.control(controlName).active();
				if( status === true ) {
					jQuery(wp.customize.control(controlName).selector).show();
				} else {
					jQuery(wp.customize.control(controlName).selector).hide();
				}
			}
		}
	}
} );
