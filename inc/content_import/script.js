/**
 * Notice for importing Zelle frontpage
 *
 * @package Neve
 */

/* global neveImport */

(function ($) {
    $(document).ready(function () {

        $(document).on('click', '.notice.import-zelle .notice-dismiss', function () {
            jQuery.ajax({
                async: true,
                type: 'POST',
                data: {
                    action: 'dismiss_zelle_import',
                    nonce: neveImport.dismissNonce
                },
                url: neveImport.ajaxurl
            });
        });

        $(document).on('click', '#import-zelle-frontpage', function () {

            if ( $(this).attr( 'disabled' ) === 'disabled' ) {
                return;
            }

            $(this).parent().append('<span class="import-zelle-frontpage-loader"><span class="spinner" style="visibility: visible; float: none;  margin-top: 0;"></span></span>');
            $(this).attr( 'disabled', 'disabled' );

            jQuery.ajax({
                async: true,
                type: 'post',
                data: {
                    action: 'import_zelle_frontpage',
                    nonce: neveImport.importNonce
                },
                url: neveImport.ajaxurl,
                success: function (result) {
                    if ( result.success === true && typeof result.data !== 'undefined' ) {
                        window.location.href = result.data;
                    }
                    $('.import-zelle-frontpage-loader').remove();
                },
                error: function () {
                    $('.import-zelle-frontpage-loader').remove();
                }
            });
        });

    });
})(jQuery);