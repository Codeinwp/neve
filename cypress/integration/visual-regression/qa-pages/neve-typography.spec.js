describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve-typography/', () => {
	let url = "https://qa-neve.themeisle.com/neve-typography/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
