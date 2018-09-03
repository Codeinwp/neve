/**
 * Customizer font selector control.
 *
 * @package Neve\Customizer\Controlss
 */
(function ( $ ) {
	'use strict';
	wp.tiCustomizeButton = {
		init: function () {
			jQuery( '#customize-theme-controls' ).on(
				'click', '.menu-shortcut', function ( e ) {
					wp.customize.section( 'menu_locations' ).focus();
					e.preventDefault();
				}
			);
		},
	};

	$( document ).ready(
		function () {
			wp.tiCustomizeButton.init();
		}
	);
})( jQuery );
