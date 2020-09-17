describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve-amp/', () => {
	let url = "https://qa-neve.themeisle.com/neve-amp/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
