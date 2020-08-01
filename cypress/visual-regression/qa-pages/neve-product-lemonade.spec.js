describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve/product/lemonade/', () => {
	let url = "https://qa-neve.themeisle.com/neve/product/lemonade/";
	let hideElements = '.products img.attachment-woocommerce_thumbnail';
	let maskElement = '.elementor-element-31b9e15, .pikaday__display--pikaday, .elementor-widget-video, label[for="vscf_captcha"],.elementor-widget-google_maps,.pikaday__display,.elementor-video-iframe';
	let clipElement = '.widget_top_rated_products, .wpcf7-quiz-label, .eaw-typed-text,.product .related.products,.captcha_img,.elementor-element-38f7ff1e,.elementor-widget-container[style*="will-change"], .particles-js-canvas-el,.product_list_widget li + li, .exclusive.products';

	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.maskAndClip(maskElement, clipElement,hideElements);
		cy.captureDocument();
	});
});
