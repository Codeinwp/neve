/**
 * Customizer font selector control.
 *
 * @package Neve\Customizer\Controlss
 */
(function ( $ ) {
	'use strict';
	wp.neveSelect = {
		init: function () {
			var self = this;

			$( '.neve-fs-main-input, .neve-fs-input-addon' ).on(
				'click', function ( e ) {
					$( this ).parent().toggleClass( 'active' );
					$( '.neve-ss-wrap.active .neve-fs-search input' ).focus();
					e.stopPropagation();
					return false;
				}
			);

			$( '.neve-fs-option' ).on(
				'click', function () {
					var value = $( this ).data( 'option' );
					var source = $( this ).data( 'source' );
					var controlId = $( this ).data( 'control' );
					wp.customize.previewer.send( 'font-selection', { 'value': value, 'source': source, 'controlId' : controlId } );
					var mainInput = $( '.neve-ss-wrap.active input.neve-fs-main-input' );
					var collector = $( '.neve-ss-wrap.active .neve-ss-collector' );
					$( '.neve-ss-wrap.active' ).removeClass( 'active' );
					mainInput.val( value );
					if ( value === 'Default' ) {
						value = '';
					}
					collector.val( value );
					collector.trigger( 'change' );
					return false;
				}
			);

			$( '.neve-fs-search input' ).on(
				'keyup', function () {
					self.search( $( this ) );
					return false;
				}
			);

			$( document ).mouseup(
				function ( e ) {
					var container = $( '.neve-ss-wrap.active .neve-fs-dropdown' );
					if ( !container.is( e.target ) && container.has( e.target ).length === 0 ) {
						$( '.neve-ss-wrap.active' ).removeClass( 'active' );
					}
				}
			);
		},

		search: function ( $searchInput ) {
			var itemsList = jQuery( '.neve-ss-wrap.active .neve-fs-options-wrapper' );
			var searchTerm = $searchInput.val().toLowerCase();
			if ( searchTerm.length > 0 ) {
				itemsList.children().children( '.neve-fs-option' ).each(
					function () {
						if ( $( this ).filter( '[data-filter*='.concat( searchTerm ).concat( ']' ) ).length > 0 || searchTerm.length < 1 ) {
							$( this ).show();
						} else {
							$( this ).hide();
						}
					}
				);
			} else {
				itemsList.children().children().show();
			}
		}
	};

	$( document ).ready(
		function () {
			wp.neveSelect.init();
		}
	);
})( jQuery );
