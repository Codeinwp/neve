/* global neveMetabox,jQuery */

(function ($) {
	$.neveMetabox = {
		data: neveMetabox,

		init() {
			this.syncRangeToNumber();
			this.handleDependentUi();
		},

		syncRangeToNumber() {
			$('#neve-page-settings .neve-range-input').each(function (
				index,
				element
			) {
				const range = $(element).find('input.nv-range');
				const number = $(element).find('input.nv-number');
				$(range).on('input change', function (e) {
					$(number).val(e.target.value);
				});
				$(number).on('input change', function (e) {
					$(range).val(e.target.value);
				});
			});
		},
		handleDependentUi() {
			$('#neve-page-settings .neve-dependent').each(function (
				index,
				element
			) {
				const influencer = $('input#' + $(element).data('depends'));
				$(influencer).on('change', function () {
					$(element).toggleClass('neve-hidden');
				});
			});
		},
	};
})(jQuery);

jQuery(window).on('load', function () {
	jQuery.neveMetabox.init();
});
