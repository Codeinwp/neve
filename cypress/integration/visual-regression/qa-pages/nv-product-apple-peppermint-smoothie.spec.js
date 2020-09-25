describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/product/apple-peppermint-smoothie/', () => {
	let url = "https://qa-neve.themeisle.com/nv/product/apple-peppermint-smoothie/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
