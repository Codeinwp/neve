describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/', function () {
	const url = 'https://qa-neve.themeisle.com/nv/';
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
