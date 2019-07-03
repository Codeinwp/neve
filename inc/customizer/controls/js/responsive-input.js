/**
 * File responsive.js
 *
 * Handles the responsive
 *
 * @package Neve
 */

wp.customize.controlConstructor[ 'responsive-number' ] = wp.customize.Control.extend( {

	// When we're finished loading continue processing.
	ready: function () {
		'use strict';

		var control = this;

		/**
		 * Save on change / keyup / paste
		 */
		this.container.on( 'change keyup paste input', 'input.responsive-number--input, select.responsive-number--select', function () {
			control.updateValue();
		} );

		this.container.on( 'click touchstart', '.reset-number-input', function () {
			control.resetValues();
		} );
	},

	/**
	 * Reset
	 */
	resetValues: function () {
		'use strict';
		this.container.find( '.responsive-number--input' ).each( function () {
			jQuery( this ).val( jQuery( this ).data( 'default' ) );
		} );

		this.container.find( '.responsive-number--select' ).each( function () {
			jQuery( this ).find( 'option' ).removeAttr( 'selected' );
			jQuery( this ).find( 'option[value=' + jQuery( this ).data( 'default' ) + ']' ).attr( 'selected', 'selected' );
		} );

		this.updateValue();
	},

	/**
	 * Update
	 */
	updateValue: function () {
		'use strict';

		var control = this,
			newValue = {
				suffix: {}
			};

		// Set the spacing container.
		control.container.find( '.control-wrap' ).each( function () {
			var controlValue = jQuery( this ).find( 'input' ).val();
			var controlUnit = jQuery( this ).find( 'select' ).val();
			var query = jQuery( this ).find( 'input' ).data( 'query' );

			newValue[ query ] = controlValue;
			if ( typeof controlUnit !== 'undefined' ) {
				newValue.suffix[ query ] = controlUnit;
			}
		} );

		var collector = jQuery( control ).find( '.responsive-number-collector' );
		collector.val( JSON.stringify( newValue ) );
		control.setting.set( JSON.stringify( newValue ) );
	},
} );
