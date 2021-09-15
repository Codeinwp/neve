describe('Global Colors Picker', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Global Colors Picker', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Changes the color selected', function () {
			cy.get('@valuePreview').should('have.text', 'var(--nv-primary-accent)');
			cy.findByRole('button', {
				name: /global colors/i,
			}).click();
			cy.findByRole('link', {
				name: /extra color 1/i,
			}).click();
			cy.get('@valuePreview').should('have.text', 'var(--nv-c-1)');
		});
	});
});
