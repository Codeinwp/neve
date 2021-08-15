describe('Font Family Selector', function () {
	before(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Font Family Selector', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Only System Fonts', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Font Family Selector', 'Only System Fonts');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Inherit is Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Font Family Selector', 'Inherit Is Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
