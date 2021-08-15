describe('Range', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Range', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('With Negative Values', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Range', 'With Negative Values');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('No Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Range', 'No Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
