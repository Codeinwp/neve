jQuery( document ).ready(
    function ($) {
        'use strict';


        $.responsiveSwitchers = {
            'init': function () {
                this.manageSwitchers();
                this.manageWPDevices();
            },

            'manageSwitchers': function () {
                // Responsive switchers
                jQuery( '.customize-control .responsive-switchers button' ).on(
                    'click', function( event ) {
                        // Set up variables
                        var $this 		= $( this ),
                            $devices 	= $( '.responsive-switchers' ),
                            $device 	= $( event.currentTarget ).data( 'device' ),
                            $control 	= $( '.customize-control.has-switchers' ),
                            $body 		= $( '.wp-full-overlay' ),
                            $footer_devices = $( '.wp-full-overlay-footer .devices' );

                        // Button class
                        $devices.find( 'button' ).removeClass( 'active' );
                        $devices.find( 'button.preview-' + $device ).addClass( 'active' );

                        // Control class
                        $control.find( '.control-wrap' ).removeClass( 'active' );
                        $control.find( '.control-wrap.' + $device ).addClass( 'active' );
                        $control.removeClass( 'control-device-desktop control-device-tablet control-device-mobile' ).addClass( 'control-device-' + $device );

                        // Wrapper class
                        $body.removeClass( 'preview-desktop preview-tablet preview-mobile' ).addClass( 'preview-' + $device );

                        // Panel footer buttons
                        $footer_devices.find( 'button' ).removeClass( 'active' ).attr( 'aria-pressed', false );
                        $footer_devices.find( 'button.preview-' + $device ).addClass( 'active' ).attr( 'aria-pressed', true );

                        // Open switchers
                        if ( $this.hasClass( 'preview-desktop' ) ) {
                            $control.toggleClass( 'responsive-switchers-open' );
                        }

                    }
                );
            },

            'manageWPDevices': function () {
                // If panel footer buttons clicked
                jQuery( '#customize-footer-actions .devices button' ).on(
                    'click', function( event ) {
                        event.preventDefault();
                        var device  = jQuery( this ).data( 'device' );
                        var queries = jQuery( '.responsive-switchers' );
                        if( device !== 'desktop'){
                            queries.addClass( 'responsive-switchers-open' );
                        } else {
                            queries.removeClass( 'responsive-switchers-open' );
                        }

                        queries.find( 'button' ).removeClass( 'active' );
                        queries.find( 'button.preview-' + device ).addClass( 'active' );

                        var control = jQuery( '.range-slider.has-media-queries' );
                        control.find( '.desktop-range' ).removeClass( 'active' );
                        control.find( '.tablet-range' ).removeClass( 'active' );
                        control.find( '.mobile-range' ).removeClass( 'active' );
                        control.find( '.' + device + '-range' ).addClass( 'active' );
                    }
                );
            }
        };
        $.responsiveSwitchers.init();
    }
);