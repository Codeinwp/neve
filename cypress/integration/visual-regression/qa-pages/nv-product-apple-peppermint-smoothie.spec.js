describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/product/apple-peppermint-smoothie/', () => {
	const url = 'https://qa-neve.themeisle.com/nv/product/apple-peppermint-smoothie/';
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
