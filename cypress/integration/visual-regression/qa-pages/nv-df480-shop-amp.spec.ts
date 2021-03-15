describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/df480-shop/?amp', function () {
	const url = 'https://qa-neve.themeisle.com/nv/df480-shop/?amp';
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
