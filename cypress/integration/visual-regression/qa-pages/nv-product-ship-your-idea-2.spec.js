describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/product/ship-your-idea-2/', () => {
	let url = "https://qa-neve.themeisle.com/nv/product/ship-your-idea-2/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
