describe('Responsive', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Responsive', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('With Excluded Device', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Responsive', 'With Excluded Device');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
