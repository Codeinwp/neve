describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve-buttons/neve-blog/', () => {
	let url = "https://qa-neve.themeisle.com/neve-buttons/neve-blog/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
