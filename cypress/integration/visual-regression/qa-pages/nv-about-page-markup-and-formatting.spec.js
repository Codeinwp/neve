describe('Visual Regression Testing - https://qa-neve.themeisle.com/nv/about/page-markup-and-formatting/', () => {
	let url = "https://qa-neve.themeisle.com/nv/about/page-markup-and-formatting/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
