/**
 * Multiple select control
 *
 * @package Hestia
 */

/* global jQuery */
/* global wp */
( function( $, api ) {
	'use strict';

	/* === Select Multiple Control === */
	api.controlConstructor['select-multiple'] = api.Control.extend(
		{
			ready: function() {
				var control = this;

				$( 'select', control.container ).change(
					function() {
						var value = $( this ).val();

						if ( null === value ) {
							control.setting.set( '' );
						} else {
							control.setting.set( value );
						}
					}
				);
			}
		}
	);

} )( jQuery, wp.customize );
