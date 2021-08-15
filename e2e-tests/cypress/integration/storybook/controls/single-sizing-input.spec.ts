describe('Single Sizing Input', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Single Sizing Input', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
