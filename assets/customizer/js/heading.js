/**
 * Customizer order control.
 *
 * @package Neve\Customizer\Controls
 */
( function ( $ ) {
	'use strict';
	wp.neveHeadingAccordion = {
		init: function () {
			this.handleToggle();
		},
		handleToggle: function () {
			$( '.customize-control-customizer-heading.accordion .neve-customizer-heading' ).on( 'click', function () {
				var accordion = $( this ).closest( '.accordion' );
				$( accordion ).toggleClass( 'expanded' );
				return false;
			} );
		},
	};

	$( document ).ready(
		function () {
			wp.neveHeadingAccordion.init();
		}
	);
} )( jQuery );
