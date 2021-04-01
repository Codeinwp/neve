describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/2018/11/03/block-image/?amp', function () {
	const url = 'https://qa-neve.themeisle.com/nv/2018/11/03/block-image/?amp';
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
