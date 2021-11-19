describe('Toggle', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Toggle', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Toggle on and off', function () {
			cy.get('@valuePreview').should('have.text', 'false');
			cy.findByRole('checkbox', {
				name: /control label/i,
			})
				.click()
				.should('be.checked');
			cy.get('@valuePreview').should('have.text', 'true');
			cy.findByRole('checkbox', {
				name: /control label/i,
			})
				.click()
				.should('not.be.checked');
			cy.get('@valuePreview').should('have.text', 'false');
		});
	});
});
