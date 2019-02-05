jQuery( document ).ready( function( $ ){

    // Metabox tabs
    $( document ).on( 'click', '.hf-mt-tabs-list a', function(e){
        e.preventDefault();
        var wrapper = $( this ).closest( '.hf-mt-tabs' );
        var layout = $( this ).attr( 'data-tab-id' ) || false;
        if ( layout ) {
            $( '.hf-mt-tab-cont', wrapper ).removeClass('active');
            $( '.hf-mt-tab-cont[data-tab-id="'+layout+'"]', wrapper ).addClass('active');

            $( '.hf-mt-tabs-list li', wrapper ).removeClass( 'active' );
            $( this ).closest('li').addClass( 'active' );
        }
    } );

    if ( wp  && wp.media ) {


        var hfMedia = {
            setAttachment: function (attachment) {
                this.attachment = attachment;
            },
            addParamsURL: function (url, data) {
                if (!$.isEmptyObject(data)) {
                    url += (url.indexOf('?') >= 0 ? '&' : '?') + $.param(data);
                }
                return url;
            },
            getThumb: function (attachment) {
                var control = this;
                if (typeof attachment !== "undefined") {
                    this.attachment = attachment;
                }
                var t = new Date().getTime();
                if (typeof this.attachment.sizes !== "undefined") {
                    if (typeof this.attachment.sizes.medium !== "undefined") {
                        return control.addParamsURL(this.attachment.sizes.medium.url, {t: t});
                    }
                }
                return control.addParamsURL(this.attachment.url, {t: t});
            },
            getURL: function (attachment) {
                if (typeof attachment !== "undefined") {
                    this.attachment = attachment;
                }
                var t = new Date().getTime();
                return this.addParamsURL(this.attachment.url, {t: t});
            },
            getID: function (attachment) {
                if (typeof attachment !== "undefined") {
                    this.attachment = attachment;
                }
                return this.attachment.id;
            },
            getInputID: function (attachment) {
                $('.attachment-id', this.preview).val();
            },
            setPreview: function ($el) {
                this.preview = $el;
            },
            insertImage: function (attachment) {
                if (typeof attachment !== "undefined") {
                    this.attachment = attachment;
                }

                var url = this.getURL();
                var id = this.getID();
                var mime = this.attachment.mime;
                $('.hf-image-preview', this.preview).addClass('hf--has-file').html('<img src="' + url + '" alt="">');
                $('.attachment-url', this.preview).val(this.toRelativeUrl(url));
                $('.attachment-mime', this.preview).val(mime);
                $('.attachment-id', this.preview).val(id).trigger('change');
                this.preview.addClass('attachment-added');
                this.showChangeBtn();

            },
            toRelativeUrl: function (url) {
                return url;
            },
            showChangeBtn: function () {
                $('.hf--add', this.preview).addClass('hf--hide');
                $('.hf--change', this.preview).removeClass('hf--hide');
                $('.hf--remove', this.preview).removeClass('hf--hide');
            },
            insertVideo: function (attachment) {
                if (typeof attachment !== "undefined") {
                    this.attachment = attachment;
                }

                var url = this.getURL();
                var id = this.getID();
                var mime = this.attachment.mime;
                var html = '<video width="100%" height="" controls><source src="' + url + '" type="' + mime + '">Your browser does not support the video tag.</video>';
                $('.hf-image-preview', this.preview).addClass('hf--has-file').html(html);
                $('.attachment-url', this.preview).val(this.toRelativeUrl(url));
                $('.attachment-mime', this.preview).val(mime);
                $('.attachment-id', this.preview).val(id).trigger('change');
                this.preview.addClass('attachment-added');
                this.showChangeBtn();
            },
            insertFile: function (attachment) {
                if (typeof attachment !== "undefined") {
                    this.attachment = attachment;
                }
                var url = attachment.url;
                var mime = this.attachment.mime;
                var basename = url.replace(/^.*[\\\/]/, '');

                $('.hf-image-preview', this.preview).addClass('hf--has-file').html('<a href="' + url + '" class="attachment-file" target="_blank">' + basename + '</a>');
                $('.attachment-url', this.preview).val(this.toRelativeUrl(url));
                $('.attachment-mime', this.preview).val(mime);
                $('.attachment-id', this.preview).val(this.getID()).trigger('change');
                this.preview.addClass('attachment-added');
                this.showChangeBtn();
            },
            remove: function ($el) {
                if (typeof $el !== "undefined") {
                    this.preview = $el;
                }
                $('.hf-image-preview', this.preview).removeAttr('style').html('').removeClass('hf--has-file');
                $('.attachment-url', this.preview).val('');
                $('.attachment-mime', this.preview).val('');
                $('.attachment-id', this.preview).val('').trigger('change');
                this.preview.removeClass('attachment-added');

                $('.hf--add', this.preview).removeClass('hf--hide');
                $('.hf--change', this.preview).addClass('hf--hide');
                $('.hf--remove', this.preview).addClass('hf--hide');
            }

        };

        hfMedia.controlMediaImage = wp.media({
            title: wp.media.view.l10n.addMedia,
            multiple: false,
            library: {type: 'image'}
        });

        hfMedia.controlMediaImage.on('select', function () {
            var attachment = hfMedia.controlMediaImage.state().get('selection').first().toJSON();
            hfMedia.insertImage(attachment);
        });

        hfMedia.controlMediaVideo = wp.media({
            title: wp.media.view.l10n.addMedia,
            multiple: false,
            library: {type: 'video'}
        });

        hfMedia.controlMediaVideo.on('select', function () {
            var attachment = hfMedia.controlMediaVideo.state().get('selection').first().toJSON();
            hfMedia.insertVideo(attachment);
        });

        hfMedia.controlMediaFile = wp.media({
            title: wp.media.view.l10n.addMedia,
            multiple: false
        });

        hfMedia.controlMediaFile.on('select', function () {
            var attachment = hfMedia.controlMediaFile.state().get('selection').first().toJSON();
            hfMedia.insertFile(attachment);
        });


        $('.hf-mt-media').on('click', '.hf--add', function (e) {
            e.preventDefault();
            var p = $(this).closest('.hf-mt-media');
            console.log(p);
            hfMedia.setPreview(p);
            hfMedia.controlMediaImage.open();
        });

        $('.hf-mt-media').on('click', '.hf--remove', function (e) {
            e.preventDefault();
            var p = $(this).closest('.hf-mt-media');
            hfMedia.remove(p);
        });

    }


} );