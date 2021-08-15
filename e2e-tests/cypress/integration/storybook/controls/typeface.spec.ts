describe('Typeface', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Typeface', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Empty Start', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Typeface', 'Empty Start');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
