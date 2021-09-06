describe('Responsive', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Responsive', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Changes device', function () {
			cy.findByRole('button', {
				name: /tablet/i,
			}).click();
			cy.get('@valuePreview').should('have.text', 'tablet');

			cy.findByRole('button', {
				name: /mobile/i,
			}).click();
			cy.get('@valuePreview').should('have.text', 'mobile');

			cy.findByRole('button', {
				name: /desktop/i,
			}).click();
			cy.get('@valuePreview').should('have.text', 'desktop');
		});
	});

	context('With Excluded Device', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Responsive', 'With Excluded Device');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Does not have tablet device', function () {
			cy.findByRole('button', {
				name: /tablet/i,
			}).should('not.exist');
			cy.findByRole('button', {
				name: /desktop/i,
			});
			cy.findByRole('button', {
				name: /mobile/i,
			});
		});
	});
});
