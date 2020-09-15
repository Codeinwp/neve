describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve/', () => {
	let url = "https://qa-neve.themeisle.com/neve/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
