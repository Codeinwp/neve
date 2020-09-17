describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve/shop/', () => {
	let url = "https://qa-neve.themeisle.com/neve/shop/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
