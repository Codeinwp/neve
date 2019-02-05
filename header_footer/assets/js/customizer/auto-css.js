var hfAutoCSS = window.hfAutoCSS || null;

( function( $, api ) {

    hfAutoCSS = function(){
        this.values = {};
        this.lastValues = {};
        this.devices = [ 'desktop', 'tablet', 'mobile' ];
    };
    hfAutoCSS._change = false;
    hfAutoCSS.prototype.fonts = {};
    hfAutoCSS.prototype.styling_fields = {
        color: null,
        image: null,
        position: null,
        cover: null,
        repeat: null,
        attachment: null,

        border_width: null,
        border_color: null,
        border_style: null
    };
    hfAutoCSS.prototype.subsets = {};
    hfAutoCSS.prototype.variants = {};
    hfAutoCSS.prototype.media_queries = {
        all: '%s',
        desktop: '%s',
        tablet : '@media screen and (max-width: 1024px) { %s }',
        mobile: '@media screen and (max-width: 568px) { %s }',
    };

    hfAutoCSS.prototype.css = {
        all: '',
        desktop: '',
        tablet : '',
        mobile: ''
    };

    hfAutoCSS.prototype.box_shadow_fields = {
        color:  null,
        x:  0,
        y:  0,
        blur:  0,
        spread:  0,
        inset: null
    };

    hfAutoCSS.prototype.reset = function(){
        this.fonts = {};
        this.subsets = {};
        this.variants = {};
        this.css = {
            all: '',
            desktop: '',
            tablet : '',
            mobile: ''
        };
    };

    hfAutoCSS.prototype.encodeValue =function( value ){
        return encodeURI( JSON.stringify( value ) )
    };
    hfAutoCSS.prototype.decodeValue = function( value ){
        return JSON.parse( decodeURI( value ) );
    };

    hfAutoCSS.prototype.loop_fields = function( fields, values, skip_if_val_null, no_selector ){
        if ( _.isUndefined( skip_if_val_null ) ) {
            skip_if_val_null = false;
        }

        if ( ! _.isObject( values ) ) {
            values = {};
        }

        var that = this;

        var fields_code = {};

        _.each( fields, function( field ){
            var v =  ! _.isUndefined( values[ field.name ] ) ? values[ field.name ] : null;
            if ( !( _.isNull( v ) && skip_if_val_null ) ) {
                if (field.selector && field.css_format) {
                    switch (field.type) {
                        case 'css_ruler':
                            fields_code[ field.name ] = that.css_ruler(field, v, no_selector );
                            break;
                        case 'slider':
                            fields_code[ field.name ] = that.slider(field, v, no_selector );
                            break;
                        case 'color':
                            fields_code[ field.name ] = that.color(field, v, no_selector );
                            break;
                        case 'shadow':
                            fields_code[ field.name ] = that.shadow(field, v, no_selector );
                            break;
                        case 'checkbox':
                            if ( field.css_format == 'html_class' ) {
                                that.html_class(field, v );
                            } else {
                                fields_code[ field.name ] = that.checkbox(field, v, no_selector );
                            }
                            break;
                        case 'image':
                            fields_code[ field.name ] = that.image( field, v, no_selector );
                            break;
                        case 'text_align':
                        case 'text_align_no_justify':
                            fields_code[ field.name ] = that.text_align(field, v, no_selector );
                            break;
                        case 'font':
                            fields_code[ field.name ] = that.font(field, v, no_selector );
                            break;
                        case 'styling':
                            fields_code[ field.name ] = that.styling( field, v, no_selector );
                            break;
                        case 'typography':
                            fields_code[ field.name ] = that.typography( field, v, no_selector );
                            break;
                        case 'modal':
                             that.modal( field, v );
                            break;
                        default:
                            switch (field.css_format) {
                                case  'background':
                                case  'styling':
                                    fields_code[ field.name ] = that.styling( field, v, no_selector );
                                    break;
                                case 'typography':
                                    fields_code[ field.name ] = that.typography(field, v, no_selector );
                                    break;
                                case 'html_class':
                                    that.html_class(field, v );
                                    break;
                                case 'html_replace':
                                    that.html_replace(field, v );
                                    break;
                                default:
                                    fields_code[ field.name ] = that.maybe_devices_setup(field, 'setup_default', v, no_selector );
                            }
                    }
                } // end if selector and css format
            }

        } ); // end _.each

        return fields_code;
    };
    hfAutoCSS.prototype.run = function( setting_name ){
        if ( _.isUndefined( setting_name ) ) {
            setting_name  = false;
        }

        this.lastValues = this.values;
        this.values = api.get();

        if ( window.hf_JS ) {
            if ( window.hf_JS.css_media_queries ) {
                this.media_queries = window.hf_JS.css_media_queries;
            }
        }
        this.reset();

        var that = this;
        that.loop_fields( hf_Preview_Config.fields );

        var css_code = '';
        var i = 0;
        _.each( that.css, function( code, device ){
            var new_line = '';
            if ( i > 0 ) {
                new_line=  "\r\n\r\n\r\n\r\n\r";
            }
            css_code += new_line + that.media_queries[ device ].replace(/%s/g, code ) + "\r\n";
            i++;
        } );

        var url = that.get_google_fonts_url();
        if ( $( '#hf-google-font-css' ).length <= 0 ) {
            $( 'head' ).prepend( "<link rel='stylesheet' id='hf-google-font-css'  href='' type='text/css' media='all' />" );
        }

        if ( url ) {
            //css_code = "\r\n@import url('"+url+"');\r\n\r\n"+css_code;
            $( '#hf-google-font-css' ).attr( 'href', url );
        } else {
            $( '#hf-google-font-css' ).remove();
        }

        css_code = css_code.trim();
        if ( $( '#hf-style-inline-css' ).length <= 0 ) {
            $( 'head' ).append( "<style id='hf-style-inline-css' type='text/css'></style>" )
        }
        $( '#hf-style-inline-css' ).html( css_code );
        $( document ).trigger( 'header_builder_panel_changed', [ 'auto_render_css', setting_name ] );
        $( document ).trigger( 'after_auto_render_css', [ 'after_auto_render_css', setting_name ] );

    };


    hfAutoCSS.prototype.get_setting = function(name, device, key  ){
        if ( _.isUndefined( device ) ) {
            device = 'desktop';
        }
        if ( _.isUndefined( key  ) ) {
            key = false;
        }

        var get_value = null;
        var value;
        var df = false;
        if ( !_.isUndefined( hf_Preview_Config.fields['setting|'+name ] ) ) {
            var field = hf_Preview_Config.fields['setting|'+name ];
            df = !_.isUndefined( field.default ) ? field.default : false;
        }

        value = !_.isUndefined( this.values[ name ] ) ? this.values[ name ] : df;
        

        if ( _.isString( value ) ) {
            try {
                var decodeValue = this.decodeValue(value);
                if ( !_.isNull( decodeValue ) ) {
                    value = decodeValue;
                }
            } catch (e) {

            }
        }

        if ( ! key ) {
            if ( device !== 'all' ) {
                if ( _.isObject( value ) && !_.isUndefined( value[ device ] ) ) {
                    get_value =  value[ device ];
                }
            } else {
                get_value = value;
            }
        } else {
            var value_by_key = _.isUndefined( value[ key ] ) ?  value[ key ]: false;
            if ( device !== 'all' && _.isObject( value_by_key ) ) {
                if ( _.isObject( value_by_key ) && !_.isUndefined( value_by_key[ device ] ) ) {
                    get_value =  value_by_key[ device ];
                } else {
                    get_value =  value_by_key;
                }
            } else {
                get_value = value_by_key;
            }
        }

        return get_value;
    };

    hfAutoCSS.prototype.get_google_fonts_url = function(){
        var url = '//fonts.googleapis.com/css?family=';
        var s = '';
        var that = this;
        if ( _.isEmpty( that.fonts ) ) {
            return false;
        }
        _.each ( that.fonts, function( font_name ){
            if ( s ){
                s += '|';
            }
            s += font_name.replace(/\s/g, '+');
            var v = {};
            if ( !_.isUndefined( that.variants[ font_name ] ) ) {

                _.each( that.variants[ font_name ], function( _v ){
                    if ( _v !== 'regular' ) {
                        switch ( _v ) {
                            case 'italic':
                                v[_v] = '400i';
                                break;
                            default:
                                if ( _.isString( _v ) ) {
                                    v[_v] = _v.replace( 'italic', 'i');
                                } else {
                                    v[_v] = _v;
                                }

                        }
                    } else {
                        v[_v] = '400';
                    }
                } )
            }

            if ( ! _.isEmpty( v ) ) {
                s +=  ':'+that.join( v, ',' );
            }

        } );
        url += s;
        if ( ! _.isEmpty( that.subsets ) ) {
            url +='&subset='+that.join( that.subsets , ',' );
        }
        return url;
    };

    hfAutoCSS.prototype.join = function( object, glue ){

        if( _.isUndefined( glue ) ) {
            glue = '';
        }
        if( _.isArray( object ) ) {
            return object.join( glue );
        }

        if ( !_.isObject( object ) || _.isEmpty( object ) ) {
            return '';
        }

        var array = _.values( object );
        return array.join( glue );

    };

    hfAutoCSS.prototype.str_value = function( value, format, value_no_unit ){
        if ( _.isEmpty( value ) ) {
            return '';
        }
        if ( ! _.isString( format ) ) {
            return '';
        }
        if ( _.isUndefined( value_no_unit ) ) {
            value_no_unit = '';
        }
        var find = '{{value}}';
        var reg = new RegExp(find, 'g');

        var s = format.replace( reg, value );

        var find_2 = '{{value_no_unit}}';
        var reg2 = new RegExp(find_2, 'g');
        s = s.replace( reg2, value_no_unit );
        return s;
    };

    hfAutoCSS.prototype.setup_color = function( value, format ){
        if ( format ) {
            if ( value ) {
                return this.str_value( value, format );
            }
        }
        return false;
    };

    hfAutoCSS.prototype.setup_checkbox = function( value, format ){
        if ( format ) {
            if ( value ) {
                return format;
            }
        }
        return false;
    };

    hfAutoCSS.prototype.setup_image = function( value, format ){
        var image = this.sanitize_media( value );
        if ( image.url ) {
            if ( format ) {
                return this.str_value( image.url, format );
            }
        }
        return false;
    };

    hfAutoCSS.prototype.setup_slider = function ( value, format ){
        if ( ! _.isObject( value ) ) {
            value = {};
        }
        value = _.defaults( value, {
            unit: 'px',
            value: null
        });

        if ( ! value.unit ) {
            value.unit = 'px';
        }

        var c = '';
        var v = '';

        if ( format ) {
            if ( value.value ) {
                v = value.value + value.unit;
                c = this.str_value( v, format, value.value );
            }
        }
        return c;
    };

    hfAutoCSS.prototype.setup_shadow = function ( value, format ){
        var that = this;
        if ( ! _.isObject( value ) ) {
            return '';
        }

        var p = _.defaults( value,that.box_shadow_fields );
        var color       = that.sanitize_color( p.color );
        var position    = p.inset ? 'inset' : '';
        if ( ! color ) {
            return '';
        }
        if ( ! p.blur ) {
            p.blur = 0;
        }
        if ( !  p.spread ) {
            p.spread = 0;
        }
        if ( ! p.x ) {
            p.x = 0;
        }
        if ( ! p.y ) {
            p.y = 0;
        }


        var style = p.x+'px'
            + ' ' + p.y+'px'
            + ' ' + p.blur +'px'
            +' ' + p.spread +'px'
            +' ' + color
            +' ' + position;

        /* offset-x | offset-y | blur-radius | spread-radius | color */
        //box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        return this.str_value( style, format );
    };

    hfAutoCSS.prototype.setup_default = function( value, format ){
        if ( format ) {
            if ( value ) {
                return this.str_value( value, format );
            }
        }
        return false;
    };

    hfAutoCSS.prototype.setup_css_ruler = function ( value, format ){
        if ( ! _.isObject( value ) ) {
            value = {};
        }
        value = _.defaults( value, {
            unit : '',
            top: '',
            right: '',
            bottom: '',
            left: ''
        });

        if ( ! _.isUndefined( value.unit ) ) {
            value.unit = 'px';
        }

        format = _.defaults( format, {
            top: '',
            right: '',
            bottom: '',
            left: ''
        } );
        var that = this;

        var  code = {};
        _.each( format, function( string, pos ){
            var v = value[ pos ];
            if ( v && string ) {
                if ( string ) {
                    v = v + value['unit'];
                    code[ pos ] = that.str_value( v, string );
                }
            }
        } );

        return that.join( code, "\n\t" );
    };


    hfAutoCSS.prototype.setup_text_align = function( value, format ) {
        if ( format  ) {
            if ( value ) {
                return this.str_value( value, format );
            }
        }
        return false;
    };

    hfAutoCSS.prototype.sanitize_color = function ( color ){
       return color;
    };

    hfAutoCSS.prototype.sanitize_slider = function ( value ){
        value = _.defaults( value, {
            unit: 'px',
            value: null
        });
        return value;
    };

    hfAutoCSS.prototype.sanitize_media = function ( value ) {
        if ( ! _.isObject( value ) ) {
            value = {};
        }
        return _.defaults( value, {
            id: null,
            url: null,
            mime: null
        } );
    };

    hfAutoCSS.prototype.maybe_devices_setup = function( field, call_back, values, no_selector ) {
        var code = '';
        var code_array = {};
        var has_device = false;
        var format = !_.isEmpty( field.css_format ) ? field.css_format : false;
        var that = this;

        if ( _.isUndefined( no_selector ) ) {
            no_selector = false;
        }

        var no_value = false;

        if ( _.isUndefined( values ) || _.isNull( values ) ) {
            values = {};
            no_value = true;
        }

        if ( ! _.isUndefined( field.device_settings ) && field.device_settings ) {
            has_device = true;
            _.each( that.devices, function( device ){
                var value = null;
                if ( no_value ) {
                    value = that.get_setting( field.name, device );
                } else {
                    if ( ! _.isUndefined( values[ device ] ) ) {
                        value = values[ device ];
                    }
                }

                var _c = false;
                if ( that[call_back] ){
                    _c = that[ call_back ]( value, format );
                }

                if ( _c ) {
                    code_array[ device ] = _c;
                }
            } );
        } else {
            if ( no_value ) {
                values = that.get_setting( field.name, 'all' );
            }
            if ( that[call_back] ){
                code = that[ call_back ]( values, format );
            }

            code_array.no_devices = code;
        }

        if ( _.isEmpty( code_array ) ) {
           // return false;
        }

        code = '';
        if ( no_selector ) {
            return code_array;
        } else {
            if ( has_device ) {
                _.each( that.devices, function( device ){
                    if ( !_.isUndefined( code_array[ device ] ) ) {
                        var _c = code_array[ device ];
                        if( _c ) {
                            if ( field.selector === 'format' ) {
                                that.css[ device ] += "\r\n"+_c+"\r\n" ;
                            } else {
                                that.css[ device ] += "\r\n"+field.selector+" {\r\n\t"+_c+"\r\n}\r\n" ;
                            }

                        }
                    }
                } );
            } else {
                if ( code_array.no_devices ) {
                    if ( field.selector === 'format' ) {
                        that.css.all += "\r\n"+code_array.no_devices+"\r\n";
                    } else {
                        that.css.all += "\r\n"+field.selector+"  {\r\n\t"+code_array.no_devices+"\r\n}\r\n";
                    }

                }
            }
        }
        return code;
    };

    hfAutoCSS.prototype.setup_font = function ( value ){
        if( ! _.isObject( value ) ) {
            value = {};
        }
        value = _.defaults( value, {
            font: null,
            type: null,
            variant: null, // font variant user selected
            subsets: null, // font variant user selected
            font_data: null, // Original data
        });

        if ( ! value.font ) {
            return '';
        }

        if ( value.type == 'google' ){
            this.fonts[ value.font ] = value.font;
            if ( value.variant ) {
                if ( _.isUndefined( this.variants[ value.font ] ) ) {
                    this.variants[ value.font ] = {};
                    if ( _.isString( value.variant )  ) {
                        var vr;
                        vr ={};
                        vr[ value.variant ] =  value.variant;
                        this.variants[ value.font ] = _.extend( this.variants[ value.font ] , vr ) ;
                    } else {
                        this.variants[ value.font ] = _.extend( this.variants[ value.font ] , value.variant ) ;
                    }
                }
            }

            if ( value.subsets ) {
                this.subsets = _.extend( this.subsets, value.subsets ) ;
            }
        }

        return "font-family: \""+value.font+"\";";
    };

    hfAutoCSS.prototype.font = function( field, values ){
        var code = '';
        var that = this;
        if ( field.device_settings ) {

            _.each( this.devices, function( device ) {
                var value = null;
                if ( _.isEmpty( values ) ) {
                    value = that.get_setting( field.name, device );
                } else {
                    if ( !_.isUndefined( values[ device ] ) ) {
                        device = values[ device ];
                    }
                }
                var _c = that.setup_font( value );
                if ( _c ) {
                    that.css[ device ] = "\r\n"+field.selector+" {\r\n\t"+_c+"\r\n}\r\n";
                    if ( 'desktop' === device ) {
                        code += "\r\n"+field.selector+" {\r\n\t"+_c+"\r\n}";
                    } else {
                        code += "\r\n."+device+" "+field.selector+" {\r\n\t"+_c+"\r\n}\r\n";
                    }
                }
            } );

        } else {
            if ( _.isEmpty( values ) ) {
                values = that.get_setting( field.name );
            }
            code = that.setup_font( values );
            that.css[ 'all' ] += " "+field.selector+"  {\r\n\t"+code+"\r\n}\r\n";
            code += " "+field.selector+"  {\r\n\t"+code+"\r\n}\r\n";
        }

        return code;
    };


    hfAutoCSS.prototype.css_ruler = function( field, value, no_selector ){
        return this.maybe_devices_setup( field, 'setup_css_ruler', value, no_selector );
    };

    hfAutoCSS.prototype.shadow = function( field, value, no_selector ){
        return this.maybe_devices_setup( field, 'setup_shadow', value, no_selector );
    };

    hfAutoCSS.prototype.slider = function( field, value, no_selector ){
        return this.maybe_devices_setup( field, 'setup_slider', value, no_selector );
    };

    hfAutoCSS.prototype.color = function( field, value, no_selector ){
        return this.maybe_devices_setup( field, 'setup_color', value, no_selector );
    };

    hfAutoCSS.prototype.checkbox = function( field, value, no_selector ){
        return this.maybe_devices_setup( field, 'setup_checkbox', value, no_selector );
    };

    hfAutoCSS.prototype.image = function( field, value, no_selector ){
        return this.maybe_devices_setup( field, 'setup_image', value, no_selector );
    };

    hfAutoCSS.prototype.text_align = function( field, value, no_selector ){
        return this.maybe_devices_setup( field, 'setup_text_align', value, no_selector );
    };

    hfAutoCSS.prototype.setup_styling_fields = function( fields, list, selectors, type ){
        var that  = this;
        var newfs;
        var i;
        var newList = [];
        if ( ! _.isObject( selectors ) ) {
            selectors = {};
        }

        if ( _.isUndefined( type ) ) {
            type = 'normal';
        }

        if ( fields === false ){
            newList = null;
        } else {
            if ( ! _.isObject( fields ) ) {
                fields = {};
            }
            newfs = {};
            i = 0;
            _.each( list, function( f ){
                if ( ! _.isUndefined( that.box_shadow_fields[ f.name ] ) ) {
                    if ( _.isUndefined( fields[ f.name ] ) || fields[ f.name ] ) {
                        newfs[ f.name ] = f;
                        newfs[f.name]['selector'] = null;
                    }
                } else {
                    if ( _.isUndefined( fields[ f.name ] ) || fields[ f.name ] ) {
                        newfs[ f.name ] = f;
                        if ( ! _.isUndefined( selectors[ type+'_'+f.name ] ) ) {
                            newfs[ f.name ]['selector'] = selectors[ type+'_'+f.name ];
                        } else {
                            newfs[ f.name ]['selector'] = selectors[ type ];
                        }
                        i++;
                    }
                }
            } );

            newList = newfs;

        }
        return newList;
    };

    hfAutoCSS.prototype.styling = function( field ){
        var that = this;
        // Setup file by default no need `css_format` key if filed have name in the list above
        var values = this.get_setting( field.name, 'all' );
        if ( ! _.isObject( values ) && ! _.isArray( values ) ) {
            values = {};
        }
        values = _.defaults( values, {
            'normal': {},
            'hover': {}
        } );
        var selectors = {};
        if ( _.isString( field.selector ) ) {
            selectors['normal'] = field.selector;
            selectors['hover'] = field.selector;
        } else {
            selectors = _.defaults( field.selector , {
                normal : null,
                hover : null
            } );
        }


        var tabs = null, normal_fields = -1, hover_fields = -1;

        if ( !_.isUndefined( field.fields ) && _.isObject(field.fields ) ) {
            if ( ! _.isUndefined( field.fields.tabs  ) ) {
                tabs = field.tabs;
            }
            if ( ! _.isUndefined( field.fields.normal_fields  ) ) {
                normal_fields =field.normal_fields;
            }
            if ( ! _.isUndefined( field.fields.hover_fields ) ) {
                hover_fields = field.hover_fields;
            }
        }

        var listNormalFields = that.setup_styling_fields( normal_fields,  hf_Preview_Config.styling_config.normal_fields, selectors, 'normal' );
        var listHoverFields = that.setup_styling_fields( hover_fields,  hf_Preview_Config.styling_config.hover_fields, selectors, 'hover' );

        var listTabs = _.clone( hf_Preview_Config.styling_config.tabs );
        if ( tabs === false ) {
            listTabs['hover'] = false;
        } else if ( _.isObject( tabs ) ) {
            listTabs = tabs;
        }

        var _join = function( lists, codeList ){
            _.each( lists, function( f, name ){
                if ( _.isUndefined( selectorCSSAll[ f.selector ] ) ) {
                    selectorCSSAll[ f.selector ] = '';
                }

                if( !_.isUndefined( codeList[ name ] ) ) {
                    if ( ! _.isUndefined( codeList[ name ].no_devices ) ) {
                        if ( codeList[ name ].no_devices ) {
                            selectorCSSAll[ f.selector ] += codeList[ name ].no_devices;
                        }
                    } else {
                        _.each( codeList[ name ], function( code, device ) {

                            if ( _.isUndefined( selectorCSSDevices[ device ] ) ) {
                                selectorCSSDevices[ device ] = {};
                            }

                            if ( _.isUndefined( selectorCSSDevices[ device ][ f.selector ] ) ) {
                                selectorCSSDevices[ device ][ f.selector ] = '';
                            }

                            if ( code ) {
                                selectorCSSDevices[ device ][ f.selector ] += code;
                            }

                        } );
                    }
                }
            } );
        };

        var selectorCSSAll = {};
        var selectorCSSDevices = {};

        // Do no use bg settings if no bg
        if ( ! _.isEmpty( values ) ) {

           if (!_.isUndefined(values['normal']['bg_image'])) {
               var _img = that.sanitize_media(values['normal']['bg_image']);
               if (!_img.url ) {
                   delete values['normal']['bg_repeat'];
                   delete values['normal']['bg_cover'];
                   delete values['normal']['bg_position'];
                   delete values['normal']['bg_attachment'];
               }
           }
        }

        var normal_style = that.loop_fields(listNormalFields, values['normal'], true, true);
        var hover_style = that.loop_fields(listHoverFields, values['hover'], true, true);

        _join( listNormalFields, normal_style );
        _join( listHoverFields, hover_style );

        _.each( selectorCSSAll, function( code, s ){
            that.css.all += "\r\n"+s+"  {\r\n\t"+code+"\r\n}\r\n";
        } );

        _.each( that.devices, function( device ){
            var css = '';
            if ( ! _.isUndefined( selectorCSSDevices[ device ] ) ) {
                var deviceCode = selectorCSSDevices[ device ];
                _.each( deviceCode, function( c, s ){
                 
                    if ( _.isString( c ) ) {
                        css += "\r\n"+s+"  {\r\n\t"+c+"\r\n}\r\n";
                    } else {
                        css += "\r\n"+s+"  {\r\n\t"+that.join( c, "\n" )+"\r\n}\r\n";
                    }
                } );
            }
            that.css[ device ] += css;
        } );
    };

    hfAutoCSS.prototype.modal = function ( field ){
        var that = this;
        var values = this.get_setting( field.name, 'all' );
        if ( ! _.isObject( values ) ) {
            values = {};
        }

        if ( _.isObject( field.fields.tabs ) ) {
            _.each( field.fields.tabs, function( title, key ){
                if ( _.isObject( field.fields[ key+'_fields' ] ) ) {
                    that.loop_fields( field.fields[ key+'_fields' ], values[ key ] );
                }
            } );
        }

    };
    hfAutoCSS.prototype.setup_font_style = function ( value ){
        if ( ! _.isObject( value ) ) {
            value = {};
        }

        value = _.defaults( value, {
            b: null,
            i: null,
            u: null,
            s: null,
            t: null
        } );

        var css = {};
        if ( value['b'] ) {
            css['b'] = 'font-weight: bold;';
        }
        if ( value['i'] ) {
            css['i'] = 'font-style: italic;';
        }

        var decoration = {};
        if ( value['u'] ) {
            decoration['underline'] = 'underline';
        }

        if ( value['s'] ) {
            decoration['line-through'] = 'line-through';
        }

        if ( ! _.isEmpty( decoration ) ) {
            css['d'] = 'text-decoration: '+this.join( decoration, ' ' )+';';
        }

        if ( value['t'] ) {
            css['t'] = 'text-transform: uppercase;';
        }

        return this.join( css, "\r\n\t" );
    };

    hfAutoCSS.prototype.html_replace = function( field, value ){
        var selector = field.selector;
        var v = _.clone( value );
        if ( _.isUndefined( v )  || _.isEmpty( v ) ) {
            v = field.default;
        }
        $( selector ).html( v );
    };
    hfAutoCSS.prototype.html_class = function( field, v ){
        var value;
        if ( _.isUndefined( v ) ) {
            value = _.clone( v );
        } else {
            value = this.get_setting( field.name, 'all' );
        }

        var that = this;
        var selector = field.selector;
        var last_value =  null;
        var is_checkbox = field.type === 'checkbox';
        if ( ! _.isUndefined( that.lastValues[ field.name ] ) ) {
            last_value = that.lastValues[ field.name ];
        }

        if ( _.isString( last_value ) ) {
            try {
                var decodeValue = that.decodeValue(last_value);
                if ( !_.isNull( decodeValue ) ) {
                    last_value = decodeValue;
                }
            } catch (e) {

            }
        }

        if ( is_checkbox && ( _.isUndefined( field.device_settings ) || ! field.device_settings ) ) {
            var _n = field.name.split('__');
            var cl;
            if ( _n.length > 1 ) {
                cl = _n[1]+'-active';
            } else {
                cl = field.name+'-active';
            }

            if ( value ) {
                $( selector ).addClass( cl );
            } else {
                $( selector ).removeClass( cl );
            }
            return ;
        }

        if ( _.isString( last_value ) && !_.isEmpty( last_value ) ) {
            $( selector ).removeClass( last_value );
        } else {
            if ( _.isObject( last_value ) ) {
                _.each( last_value, function( n, d ) {
                    if ( n ) {
                        var cl = d +'--' + n;
                        if ( is_checkbox ) {
                            cl = field.name+'-'+cl;
                        }
                        $( selector ).removeClass( cl );
                    }

                } );
            }
        }

        if ( _.isString( value ) ) {
            $( selector ).addClass( value );
        } else {
            if ( _.isObject( value ) ) {
                _.each( value, function( n, d ) {
                    if ( n ) {
                        var cl = d +'--' + n;
                        if ( is_checkbox ) {
                            cl = field.name+'-'+cl;
                        }
                        $( selector ).addClass( cl );
                    }

                } );
            }
        }
    };

    hfAutoCSS.prototype.typography = function( field, values ){
        if ( _.isUndefined( values ) || ! _.isObject( values ) ) {
            values = this.get_setting( field.name, 'all' );
        }

        var that = this;
        if ( ! _.isObject( values ) ) {
            values = {};
        }
        values = _.defaults( values, {
            font: null,
            font_type: null,
            languages: null,
            font_size: null,
            font_weight: null,
            line_height: null,
            letter_spacing: null,
            style: null,
            text_decoration: null,
            text_transform: null,
        });

        var code = {};
        var fields = {};
        var devices_css = {};
        _.each( hf_Preview_Config.typo_fields, function( f ){
            fields[ f.name ] = f;
        } );

        if ( ! _.isUndefined( fields.font ) ) {
            code.font = this.setup_font( {
                font: values.font,
                type: values.font_type,
                subsets: values.languages,
                variant: values.variant,
            } );
        }

        // Font Style
        if ( ! _.isUndefined( fields.style ) ) {
            //code.font_style = this.setup_font_style( values.font_style );
            if ( values.style && values.style !== 'default' ) {
                code.style = 'font-style: '+values.style+';';
            }
        }

        // Font Weight
        if ( ! _.isUndefined( fields.font_weight ) ) {
            if ( values.font_weight && values.font_weight !== 'default' && values.font_weight !== 'default'  ) {
                if( values.font_weight === 'regular' ) {
                    values.font_weight = 'normal';
                }
                code.font_weight = 'font-weight: '+values.font_weight+';';
            }
        }

        // Text Decoration
        if ( ! _.isUndefined( fields.text_decoration ) ) {
            if ( values.text_decoration && values.text_decoration !== 'default' ) {
                code.text_decoration = 'text-decoration: '+values.text_decoration+';';
            }
        }

        // Text Transform
        if ( ! _.isUndefined( fields.text_transform ) ) {
            if ( values.text_transform && values.text_transform !== 'default' ) {
                code.text_transform = 'text-transform: '+values.text_transform+';';
            }
        }

        if ( ! _.isUndefined( fields.font_size ) ) {
            fields.font_size.css_format = 'font-size: {{value}};';
            var font_size_css = this.maybe_devices_setup( fields.font_size, 'setup_slider', values.font_size, true );
            if ( !_.isEmpty( font_size_css ) ) {
                if ( ! _.isUndefined( font_size_css.no_devices ) ) {
                    code.font_size = font_size_css.no_devices;
                } else {
                    _.each( font_size_css, function( _c, device ){
                        if ( device == 'desktop' ) {
                            code.font_size = _c;
                        } else {
                            if ( _.isUndefined( devices_css[ device ] )  ) {
                                devices_css[ device ] = {};
                            }
                            devices_css[ device ]['font_size'] = _c;
                        }
                    } );
                }
            }
        }

        if ( !_.isUndefined( fields.line_height ) ) {
            fields.line_height['css_format'] = 'line-height: {{value}};';
            var line_height_css = this.maybe_devices_setup( fields.line_height , 'setup_slider', values['line_height'], true);
            if ( ! _.isEmpty( line_height_css ) ) {
                if ( ! _.isUndefined( line_height_css['no_devices'] ) ) {
                    code['line_height'] = line_height_css['no_devices'];
                } else {
                    _.each( line_height_css, function( _c, device ) {
                        if ( device == 'desktop' ) {
                            code['line_height'] = _c;
                        } else {
                            if ( _.isUndefined( devices_css[ device ] ) ) {
                                devices_css[ device ] = {};
                            }
                            devices_css[ device ]['line_height'] = _c;
                        }
                    } );
                }
            }
        }

        if (  !_.isUndefined( fields.letter_spacing ) ) {
            fields['letter_spacing']['css_format'] = 'letter-spacing: {{value}};';
            var letter_spacing_cs = this.maybe_devices_setup(fields['letter_spacing'], 'setup_slider', values['letter_spacing'], true);
            if (letter_spacing_cs) {
                if ( !_.isUndefined( letter_spacing_cs['no_devices'] ) ) {
                    code['letter_spacing'] = letter_spacing_cs['no_devices'];
                } else {
                    _.each( letter_spacing_cs, function( _c, device ){
                        if ( device == 'desktop' ) {
                            code['letter_spacing'] = _c;
                        } else {
                            if ( _.isUndefined( devices_css[ device ] ) ) {
                                devices_css[ device ] = {};
                            }
                            devices_css[ device ]['letter_spacing'] = _c;
                        }
                    } );
                }
            }
        }

        _.each( devices_css, function( els, device ){
            that.css[device] += " "+field['selector']+" {\r\n\t"+that.join( els, "\r\n\t" )+"\r\n}";
        } );

        that.css['all'] += " "+field['selector']+" {\r\n\t"+that.join( code, "\r\n\t" )+"\r\n}";
    };

    var hfAutoCSSInit = new hfAutoCSS();

    api.bind( 'preview-ready', function() {
        //hfAutoCSSInit.run();
        hfAutoCSSInit.lastValues = api.get();
        hfAutoCSSInit.values = api.get();
    });

    api.bind( 'change', function(){
       // hfAutoCSSInit.run();
    } );

    _.each( hf_Preview_Config.fields, function( field ){
        if ( ( field.selector && field.css_format ) || field.type === 'modal' ) {
            wp.customize( field.name, function( setting ) {
                setting.bind( function( to ) {
                    hfAutoCSSInit.run( field.name );
                } );
            } );

        }
    });


} )( jQuery, wp.customize );