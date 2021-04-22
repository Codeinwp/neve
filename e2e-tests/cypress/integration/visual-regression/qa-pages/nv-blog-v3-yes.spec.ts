describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/?blog_v3=yes', function () {
	const url = 'https://qa-neve.themeisle.com/nv/?blog_v3=yes';
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
