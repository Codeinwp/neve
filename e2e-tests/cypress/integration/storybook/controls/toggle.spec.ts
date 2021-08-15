describe('Toggle', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Togggle', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
