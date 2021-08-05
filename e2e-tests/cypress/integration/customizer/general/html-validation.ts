describe('Check the html for each page', function () {
	const urls = ['/', '/sample-page'];

	urls.forEach(function (url) {
		it(`Page ${url} have url validated`, function () {
			cy.visit(url);
			cy.htmlvalidate();
		});
	});
});
