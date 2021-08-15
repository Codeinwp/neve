describe('Presets Selector', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Presets Selector', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
