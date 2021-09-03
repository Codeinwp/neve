describe('Range', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Range', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Change value by clicking', function () {
			cy.findByRole('slider').realClick({ position: 'left' });
			cy.findByRole('spinbutton').should('have.value', '0');
			cy.get('@valuePreview').should('have.text', '0');

			cy.findByRole('slider').realClick({ position: 'right' });
			cy.findByRole('spinbutton').should('have.value', '100');
			cy.get('@valuePreview').should('have.text', '100');

			cy.findByRole('button', {
				name: /reset/i,
			}).click();
			cy.get('@valuePreview').should('have.text', '50');
		});
	});

	context('With Negative Values', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Range', 'With Negative Values');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Values are negative', function () {
			cy.findByRole('slider').realClick({ position: 'left' });
			cy.findByRole('spinbutton').should('have.value', '-100');
			cy.get('@valuePreview').should('have.text', '-100');

			cy.findByRole('slider').realClick({ position: 'right' });
			cy.findByRole('spinbutton').should('have.value', '0');
			cy.get('@valuePreview').should('have.text', '0');

			cy.findByRole('button', {
				name: /reset/i,
			}).click();
			cy.get('@valuePreview').should('have.text', '-50');
		});
	});

	context('No Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Range', 'No Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Default value is empty', function () {
			cy.findByRole('spinbutton').should('have.value', '');
			cy.findByRole('spinbutton').type('29');
			cy.get('@valuePreview').should('have.text', '29');

			cy.findByRole('button', {
				name: /reset/i,
			}).click();
			cy.get('@valuePreview').should('have.text', '');
		});
	});
});
