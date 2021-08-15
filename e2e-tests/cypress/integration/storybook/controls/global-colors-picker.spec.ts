describe('Global Colors Picker', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Global Colors Picker', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
