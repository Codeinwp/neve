describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/2018/11/03/block-image/', function () {
	const url = 'https://qa-neve.themeisle.com/nv/2018/11/03/block-image/';
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
