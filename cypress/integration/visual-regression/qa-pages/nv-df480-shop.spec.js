describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/df480-shop/', () => {
	let url = "https://qa-neve.themeisle.com/nv/df480-shop/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
