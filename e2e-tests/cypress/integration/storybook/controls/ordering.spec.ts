describe('Ordering', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Ordering', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Toggle values on and off', function () {
			cy.findByText(/\[ "title", "thumbnail" \]/i);
			cy.get(':nth-child(5) > .toggle').click();
			cy.findByText(/\[ "title", "thumbnail", "comments" \]/i);
			cy.get(':nth-child(1) > .toggle').click();
			cy.findByText(/\[ "thumbnail", "comments" \]/i);
		});
	});

	context('No Toggles', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Ordering', 'No Toggles');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Does not have toggle buttons and all values are active', function () {
			cy.findByText(/\[ "title", "thumbnail", "content", "tags", "comments" \]/i);

			cy.get('button.toggle').should('not.exist');
		});
	});
});
