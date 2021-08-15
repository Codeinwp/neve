describe('number', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Number', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Single Unit', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Number', 'Single Unit');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
