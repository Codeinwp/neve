describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve-buttons/sample-page/', () => {
	let url = "https://qa-neve.themeisle.com/neve-buttons/sample-page/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
