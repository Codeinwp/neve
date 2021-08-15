describe('Ordering', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Ordering', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('No Toggles', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Ordering', 'No Toggles');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
