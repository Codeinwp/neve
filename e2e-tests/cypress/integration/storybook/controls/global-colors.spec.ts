describe('Global Colors', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Global Colors', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('All Palettes', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Global colors', 'All Palettes');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
