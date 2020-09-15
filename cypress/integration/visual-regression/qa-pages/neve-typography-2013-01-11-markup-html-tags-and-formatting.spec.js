describe('Visual Regression Testing - https://qa-neve.themeisle.com/neve-typography/2013/01/11/markup-html-tags-and-formatting/', () => {
	let url = "https://qa-neve.themeisle.com/neve-typography/2013/01/11/markup-html-tags-and-formatting/";
	it('Should not add any visual change', function () {
		cy.visit(url);
		cy.captureDocument();
	});
});
