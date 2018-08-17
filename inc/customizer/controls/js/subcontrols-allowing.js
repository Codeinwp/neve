( function( $, api ) {


    var control = api.Control.extend( {
        ready: function() {

            var control = this;
            control.container.find('.buttonset').buttonset();

            api.bind('ready',function () {

                api(control.id, function (value) {
                        var func = function (newval) {
                            var i, j, k, controlName, selector,
                                currentControl, currentControl2,
                                selector2, subControlsToShow, controlName2;

                            var controls = control.params.subcontrols;
                            var sectionName = control.section();
                            var sectionContainer = wp.customize.section(sectionName).container;

                            var currentValue = newval;
                            var controlsToShow = controls[currentValue];

                            if( typeof control.params.parent !== 'undefined' ){
                                var parentName = control.params.parent;
                                var parentControl = wp.customize.control(parentName);
                                if( typeof parentControl !== 'undefined' ){
                                    var parentValue = parentControl.setting._value;
                                    var parentOptions = parentControl.params.subcontrols[parentValue];
                                    if( typeof parentOptions !== 'undefined' && parentOptions.length === 0 ){
                                        controlsToShow = [];
                                    }
                                }
                            }


                            var allControlsArray = Object.values(controls);
                            allControlsArray = [].concat.apply([], allControlsArray);

                            for ( i in allControlsArray) {
                                controlName = allControlsArray[i];

                                if (controlName === 'widgets') {
                                    jQuery(sectionContainer).children('li[class*="widget"]').css('display', 'none');
                                } else {
                                    currentControl = wp.customize.control(controlName);
                                    if( typeof currentControl.params.subcontrols !== 'undefined' ){
                                        for ( j in currentControl.params.subcontrols ){
                                            for( k in currentControl.params.subcontrols[j] ){
                                                selector = api.control(currentControl.params.subcontrols[j][k]).selector;
                                                jQuery(selector).hide();
                                            }
                                        }
                                    }
                                    if (typeof currentControl !== 'undefined') {
                                        selector = currentControl.selector;
                                        jQuery(selector).hide();
                                    }
                                }
                            }



                            for( i in controlsToShow ){
                                controlName = controlsToShow[i];
                                if( controlName === 'widgets' ){
                                    jQuery( sectionContainer ).children( 'li[class*="widget"]' ).css( 'display', 'list-item' );
                                } else {
                                    currentControl = wp.customize.control(controlName);
                                    if( typeof currentControl !== 'undefined' ){
                                        selector = currentControl.selector;
                                        jQuery(selector).show();

                                        currentValue = currentControl.setting._value;
                                        if( typeof wp.customize.control(controlName).params.subcontrols !== 'undefined' ){
                                            subControlsToShow =  wp.customize.control(controlName).params.subcontrols[currentValue];
                                            for( j in subControlsToShow ){
                                                controlName2 = subControlsToShow[j];
                                                currentControl2 = wp.customize.control(controlName2);
                                                if( typeof currentControl2 !== 'undefined' ){
                                                    selector2 = currentControl2.selector;
                                                    jQuery(selector2).show();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        };


                        func(value.get());
                        value.bind(func);
                    }
                );
            });

        }
    } );

    api.controlConstructor['radio-image'] = control;
    api.controlConstructor['select-hiding'] = control;
} )( jQuery, wp.customize );