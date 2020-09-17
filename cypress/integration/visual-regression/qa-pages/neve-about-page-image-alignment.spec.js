describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve/about/page-image-alignment/', () => {
	let url = "https://qa-neve.themeisle.com/neve/about/page-image-alignment/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
