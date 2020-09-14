describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve-buttons/shop/', () => {
	let url = "https://qa-neve.themeisle.com/neve-buttons/shop/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
