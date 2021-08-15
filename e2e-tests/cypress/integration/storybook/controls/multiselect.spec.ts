describe('Multiselect', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Multiselect', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Empty', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Multiselect', 'Empty');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Full', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Multiselect', 'Full');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
