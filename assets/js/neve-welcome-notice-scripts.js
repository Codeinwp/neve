/**
 * Notice for Neve onboarding
 *
 * @package Neve
 */

/* global neveNotice */

(function ($) {
    $(document).ready(function () {

        $(document).on('click', '.notice.neve-welcome-notice .notice-dismiss', function () {
            jQuery.ajax({
                async: true,
                type: 'POST',
                data: {
                    action: 'neve_welcome_notice_dismiss',
                    nonce: neveNotice.dismissNonce
                },
                url: neveNotice.ajaxurl
            });
        });
    });
})(jQuery);