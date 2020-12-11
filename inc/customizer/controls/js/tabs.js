/**
 * Script for the customizer tabs control interactions.
 *
 * @author    ThemeIsle
 */

/* global wp */

wp.customize.controlConstructor[
	'interface-tabs'
] = wp.customize.Control.extend( {
	ready() {
		// Switch tab based on customizer partial edit links.
		wp.customize.previewer.bind( 'tab-previewer-edit', function ( data ) {
			jQuery( data.selector ).trigger( 'click' );
		} );

		wp.customize.previewer.bind( 'focus-control', function ( data ) {
			/**
			 * This timeout is here because in firefox this happens before customizer animation of changing panels.
			 * After it change panels with the input focused, the customizer was moved to right 12px. We have to make sure
			 * that the customizer animation of changing panels in customizer is done before focusing the input.
			 */
			setTimeout( function () {
				const control = wp.customize.control( data );
				if ( typeof control !== 'undefined' ) {
					wp.customize.control( data ).focus();
				}
			}, 100 );
		} );

		wp.customize.previewer.bind( 'focus-section', function ( data ) {
			/**
			 * This timeout is here because in firefox this happens before customizer animation of changing panels.
			 * After it change panels with the input focused, the customizer was moved to right 12px. We have to make sure
			 * that the customizer animation of changing panels in customizer is done before focusing the input.
			 */
			setTimeout( function () {
				wp.customize.section( data ).focus();
			}, 100 );
		} );

		wp.customize.previewer.bind( 'ready', function () {
			const parts = window.location.search.substr( 1 ).split( '&' );
			const $_GET = {};
			for ( let i = 0; i < parts.length; i++ ) {
				const temp = parts[ i ].split( '=' );
				$_GET[ decodeURIComponent( temp[ 0 ] ) ] = decodeURIComponent(
					temp[ 1 ]
				);
			}

			if (
				typeof $_GET[ 'autofocus[control]' ] !== 'undefined' &&
				$_GET[ 'autofocus[control]' ] !== ''
			) {
				jQuery( 'li[id^="customize-control-sidebars_widgets"]' ).on(
					'DOMNodeInserted',
					function () {
						jQuery(
							'.neve-customizer-tab > label.' +
								$_GET[ 'autofocus[control]' ]
						).trigger( 'click' );
					}
				);
			}
		} );

		const self = this;
		/**
		 * Run JS on load.
		 */
		wp.customize.bind( 'ready', function () {
			self.init();
			self.handleClick();
		} );
	},

	init() {
		const control = this;
		const section = control.section();
		control.hideAllControls( section );
		const tab = control.params.controls.general
			? 'general'
			: control.params.controls.layout
			? 'layout'
			: control.params.controls.style
			? 'style'
			: Object.keys( control.params.controls )[ 0 ];
		const controlsToShow = control.params.controls[ tab ];
		let allControls = [];
		for ( const controlName in controlsToShow ) {
			if ( controlsToShow.hasOwnProperty( controlName ) ) {
				if (
					jQuery.isEmptyObject( controlsToShow[ controlName ] ) ===
						false &&
					typeof wp.customize.control( controlName ) !== 'undefined'
				) {
					const subTabValue = wp.customize.control( controlName )
						.setting._value;
					allControls = allControls.concat(
						controlsToShow[ controlName ][ subTabValue ]
					);
				}
				allControls.push( controlName );
			}
		}
		control.showControls( allControls, section );
	},

	hideAllControls( section ) {
		const controls = wp.customize.section( section ).controls();
		const tabControl = this.id;
		for ( const i in controls ) {
			const controlId = controls[ i ].id;
			if ( controlId === 'widgets' ) {
				const sectionContainer = wp.customize.section( section )
					.container;
				jQuery( sectionContainer )
					.children( 'li[class*="widget"]' )
					.css( 'display', 'none' );
			} else if ( controlId !== tabControl ) {
				const selector = wp.customize.control( controlId ).selector;
				jQuery( selector ).hide();
			}
		}
	},

	handleClick() {
		const control = this;
		const section = control.section();
		const container = control.container;
		jQuery( container )
			.find( '.neve-customizer-tab' )
			.on( 'click', function () {
				jQuery( this )
					.parent()
					.find( '.neve-customizer-tab' )
					.removeClass( 'active' );
				jQuery( this ).addClass( 'active' );
				control.hideAllControls( section );
				const tab = jQuery( this ).data( 'tab' );
				const controlsToShow = control.params.controls[ tab ];
				let allControls = [];
				for ( const controlName in controlsToShow ) {
					if (
						jQuery.isEmptyObject(
							controlsToShow[ controlName ]
						) === false &&
						typeof wp.customize.control( controlName ) !==
							'undefined'
					) {
						const subTabValue = wp.customize.control( controlName )
							.setting._value;
						allControls = allControls.concat(
							controlsToShow[ controlName ][ subTabValue ]
						);
					}
					allControls.push( controlName );
				}
				control.showControls( allControls, section );
			} );
	},

	showControls( controls, section ) {
		for ( const i in controls ) {
			const controlName = controls[ i ];
			if (
				controlName === 'widgets' ||
				controlName.indexOf( 'sidebars_widgets' ) !== -1
			) {
				const sectionContainer = wp.customize.section( section )
					.container;
				jQuery( sectionContainer )
					.children( 'li[class*="widget"]' )
					.css( 'display', 'list-item' );
			} else if (
				typeof wp.customize.control( controlName ) !== 'undefined'
			) {
				const selector = wp.customize.control( controlName ).selector;
				jQuery( selector ).show();
			}
			const control = wp.customize.control( controlName );
			if ( typeof control !== 'undefined' ) {
				const status = wp.customize.control( controlName ).active();
				if ( status === true ) {
					jQuery(
						wp.customize.control( controlName ).selector
					).show();
				} else {
					jQuery(
						wp.customize.control( controlName ).selector
					).hide();
				}
			}
		}
	},
} );
