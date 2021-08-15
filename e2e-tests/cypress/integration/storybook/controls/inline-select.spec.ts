describe('Inline Select', function () {
	before(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Inline Select', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
