describe('Radio Image', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Image', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
