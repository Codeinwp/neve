describe('Sizing', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Sizing', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Unlinked Defaults', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Sizing', 'Unlinked Defaults');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('No Linking', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Sizing', 'No Linking');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Empty Values', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Sizing', 'Empty Values');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
