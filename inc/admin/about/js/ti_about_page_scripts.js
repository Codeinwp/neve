/**
 * Main scripts file for the About Hestia Page
 *
 * @package Hestia
 */

/* global tiAboutPageObject */
/* global console */

jQuery( document ).ready(
	function () {
		jQuery( '#about_tabs' ).tabs();
		handleLinkingInTabs();

		/* Dismiss required actions */
		jQuery( '.ti-about-page-required-action-button' ).click(
			function () {

				var id = jQuery( this ).attr( 'id' ),
					action = jQuery( this ).attr( 'data-action' );

				jQuery.ajax(
					{
						type: 'GET',
						data: { action: 'ti_about_page_dismiss_required_action', id: id, todo: action },
						dataType: 'html',
						url: tiAboutPageObject.ajaxurl,
						beforeSend: function () {
							jQuery( '.ti-about-page-tab-pane#actions_required h1' ).append( '<div id="temp_load" style="text-align:center"><img src="' + tiAboutPageObject.template_directory + '/assests/img/ajax-loader.gif" /></div>' );
						},
						success: function () {
							location.reload();
							jQuery( '#temp_load' ).remove();
							/* Remove loading gif */
						},
						error: function ( jqXHR, textStatus, errorThrown ) {
							console.log( jqXHR + ' :: ' + textStatus + ' :: ' + errorThrown );
						}
					}
				);
			}
		);
		// Remove activate button and replace with activation in progress button.
		jQuery( document ).on(
			'DOMNodeInserted', '.activate-now', function () {
				var activateButton = jQuery( this );
				if ( activateButton.length ) {
					var url = jQuery( activateButton ).attr( 'href' );
					if ( typeof url !== 'undefined' ) {
						// Request plugin activation.
						jQuery.ajax(
							{
								beforeSend: function () {
									jQuery( activateButton ).replaceWith( '<a class="button updating-message">' + tiAboutPageObject.activating_string + '...</a>' );
								},
								async: true,
								type: 'GET',
								url: url,
								success: function () {
									// Reload the page.
									location.reload();
								}
							}
						);
					}
				}
			}
		);
	}
);

function handleLinkingInTabs() {
	jQuery( '#about_tabs > div a[href^=\'#\']' ).on( 'click', function () {
		var index = jQuery( this ).attr( 'href' ).substr(1);
		jQuery( '[data-tab-id="' + index + '"] > a' ).click();
		return false;
	} );
}