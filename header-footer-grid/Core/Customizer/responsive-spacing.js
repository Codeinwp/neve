/**
 * File spacing.js
 *
 * Handles the spacing
 *
 * @package Astra
 */

wp.customize.controlConstructor['hfg-responsive-spacing'] = wp.customize.Control.extend( {

	ready: function() {

		'use strict';

		var control = this,
			value;

		control.hfgResponsiveInit();

		// Set the spacing container.
		// this.container = control.container.find( 'ul.hfg-spacing-wrapper' ).first();

		// Save the value.
		this.container.on( 'change keyup phfge', 'input.hfg-spacing-input', function() {

			value = jQuery( this ).val();

			// Update value on change.
			control.updateValue();
		} );
	},

	/**
	 * Updates the spacing values
	 */
	updateValue: function() {

		'use strict';

		var control = this,
			newValue = {
				'desktop' 		: {},
				'tablet'  		: {},
				'mobile'  		: {},
				'desktop-unit'	: 'px',
				'tablet-unit'	: 'px',
				'mobile-unit'	: 'px',
			};

		control.container.find( 'input.hfg-spacing-desktop' ).each( function() {
			var spacing_input = jQuery( this ),
				item = spacing_input.data( 'id' ),
				item_value = spacing_input.val();

			newValue.desktop[item] = item_value;
		} );

		control.container.find( 'input.hfg-spacing-tablet' ).each( function() {
			var spacing_input = jQuery( this ),
				item = spacing_input.data( 'id' ),
				item_value = spacing_input.val();

			newValue.tablet[item] = item_value;
		} );

		control.container.find( 'input.hfg-spacing-mobile' ).each( function() {
			var spacing_input = jQuery( this ),
				item = spacing_input.data( 'id' ),
				item_value = spacing_input.val();

			newValue.mobile[item] = item_value;
		} );

		control.container.find( '.hfg-spacing-unit-wrapper .hfg-spacing-unit-input' ).each( function() {
			var spacing_unit 	= jQuery( this ),
				device 			= spacing_unit.attr( 'data-device' ),
				device_val 		= spacing_unit.val(),
				name 			= device + '-unit';

			newValue[ name ] = device_val;
		} );

		control.setting.set( newValue );
	},

	/**
	 * Set the responsive devices fields
	 */
	hfgResponsiveInit : function() {

		'use strict';

		var control = this;

		control.container.find( '.hfg-spacing-responsive-btns button' ).on( 'click', function( event ) {

			var device = jQuery( this ).attr( 'data-device' );
			if( 'desktop' == device ) {
				device = 'tablet';
			} else if( 'tablet' == device ) {
				device = 'mobile';
			} else {
				device = 'desktop';
			}

			jQuery( '.wp-full-overlay-footer .devices button[data-device="' + device + '"]' ).trigger( 'click' );
			jQuery( '.hfg-spacing-responsive-units' ).removeClass( 'active' );
			jQuery( '.customize-control-hfg-responsive-spacing .hfg-spacing-' + device + '-responsive-units' ).addClass( 'active' );
		} );

		control.container.find( '.hfg-spacing-responsive-wrapper .hfg-spacing-input-item-reset span' ).on( 'click', function( event ) {

			var device = jQuery( this ).attr( 'data-device' );

			control.container.find( 'input.hfg-spacing-' + device ).each( function() {
				var item = jQuery( this ).data( 'id' );
				jQuery( this ).val( '' );
			} );

			control.container.find( '.hfg-spacing-unit-wrapper .hfg-spacing-unit-input.hfg-spacing-' + device + '-unit' ).val( 'px' );
			jQuery( '.customize-control-hfg-responsive-spacing .input-wrapper .hfg-spacing-wrapper, .customize-control .hfg-spacing-responsive-btns > li' ).removeClass( 'active' );
			jQuery( '.customize-control-hfg-responsive-spacing .input-wrapper .hfg-spacing-wrapper.' + device + ', .customize-control .hfg-spacing-responsive-btns > li.' + device ).addClass( 'active' );
			control.updateValue();
		} );

		// Unit click
		control.container.on( 'click', '.hfg-spacing-responsive-units .single-unit', function() {

			var $this 		= jQuery( this );

			if ( $this.hasClass( 'active' ) ) {
				return false;
			}

			var	unit_value 	= $this.attr( 'data-unit' ),
				device 		= jQuery( '.wp-full-overlay-footer .devices button.active' ).attr( 'data-device' );

			$this.siblings().removeClass( 'active' );
			$this.addClass( 'active' );

			control.container.find( '.hfg-spacing-unit-wrapper .hfg-spacing-' + device + '-unit' ).val( unit_value );

			// Update value on change.
			control.updateValue();
		} );
	},
} );

jQuery( document ).ready( function( ) {

	// Connected button
	jQuery( '.hfg-spacing-connected' ).on( 'click', function() {

		// Remove connected class
		jQuery( this ).parent().parent( '.hfg-spacing-wrapper' ).find( 'input' ).removeClass( 'connected' ).attr( 'data-element-connect', '' );

		// Remove class
		jQuery( this ).parent( '.hfg-spacing-input-item-link' ).removeClass( 'disconnected' );

	} );

	// Disconnected button
	jQuery( '.hfg-spacing-disconnected' ).on( 'click', function() {

		// Set up variables
		var elements 	= jQuery( this ).data( 'element-connect' );

		// Add connected class
		jQuery( this ).parent().parent( '.hfg-spacing-wrapper' ).find( 'input' ).addClass( 'connected' ).attr( 'data-element-connect', elements );

		// Add class
		jQuery( this ).parent( '.hfg-spacing-input-item-link' ).addClass( 'disconnected' );

	} );
	jQuery( '.hfg-spacing-disconnected' ).trigger( 'click' );

	// Values connected inputs
	jQuery( '.hfg-spacing-input-item' ).on( 'input', '.connected', function() {

		var dataElement 	  = jQuery( this ).attr( 'data-element-connect' ),
			currentFieldValue = jQuery( this ).val();

		jQuery( this ).parent().parent( '.hfg-spacing-wrapper' ).find( '.connected[ data-element-connect="' + dataElement + '" ]' ).each( function( key, value ) {
			jQuery( this ).val( currentFieldValue ).change();
		} );

	} );
} );

jQuery( '.wp-full-overlay-footer .devices button ' ).on( 'click', function() {

	var device = jQuery( this ).attr( 'data-device' );
	jQuery( '.customize-control-hfg-responsive-spacing .input-wrapper .hfg-spacing-wrapper, .customize-control .hfg-spacing-responsive-btns > li' ).removeClass( 'active' );
	jQuery( '.customize-control-hfg-responsive-spacing .input-wrapper .hfg-spacing-wrapper.' + device + ', .customize-control .hfg-spacing-responsive-btns > li.' + device ).addClass( 'active' );
} );
