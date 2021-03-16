describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/2018/11/02/column-blocks/', function () {
	const url = 'https://qa-neve.themeisle.com/nv/2018/11/02/column-blocks/';
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
