describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/', () => {
	let url = "https://qa-neve.themeisle.com/nv/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
