/**
 * Customizer order control.
 *
 * @package Neve\Customizer\Controls
 */
(function ( $ ) {
	'use strict';
	wp.neveHeadingAccordion = {
		init: function () {
			this.handleToggle();
		},
		handleToggle: function () {
			$( '.accordion-expand-button' ).on( 'click', function () {
				var accordion = $( this ).closest( '.accordion' );
				$(accordion).toggleClass( 'expanded' );
			} );
		},
	};

	$( document ).ready(
		function () {
			wp.neveHeadingAccordion.init();
		}
	);
})( jQuery );
