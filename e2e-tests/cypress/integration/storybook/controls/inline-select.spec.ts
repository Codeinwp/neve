describe('Inline Select', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Inline Select', 'Default');
		});

		it('Changes the value on control label', function () {
			cy.findByRole('combobox', {
				name: /control label/i,
			})
				.as('controlLabel')
				.should('have.value', 'one');
			cy.get('@controlLabel').select('two').should('have.value', 'two');
			cy.get('@controlLabel').select('three').should('have.value', 'three');
			cy.get('@controlLabel').select('four').should('have.value', 'four');
		});
	});
});
