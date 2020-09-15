describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve-child-theme/', () => {
	let url = "https://qa-neve.themeisle.com/neve-child-theme/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
