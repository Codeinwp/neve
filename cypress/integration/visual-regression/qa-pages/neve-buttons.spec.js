describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve-buttons/', () => {
	let url = "https://qa-neve.themeisle.com/neve-buttons/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
