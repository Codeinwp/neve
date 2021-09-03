describe('Radio Image', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Image', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Change radio image label', function () {
			cy.get('@valuePreview').should('have.text', 'default');
			cy.findByRole('img', {
				name: /covers/i,
			}).click();
			cy.get('.active > img').should('have.attr', 'alt', 'Covers');
			cy.get('@valuePreview').should('have.text', 'covers');

			cy.findByRole('img', {
				name: /grid/i,
			}).click();
			cy.get('.active > img').should('have.attr', 'alt', 'Grid');
			cy.get('@valuePreview').should('have.text', 'grid');

			cy.findByRole('img', {
				name: /list/i,
			}).click();
			cy.get('.active > img').should('have.attr', 'alt', 'List');
			cy.get('@valuePreview').should('have.text', 'default');
		});
	});
});
