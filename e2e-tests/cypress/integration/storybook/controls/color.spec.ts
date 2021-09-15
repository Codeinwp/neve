describe('Color', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Color', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Clear value to nothing', function () {
			cy.get('.color').click();
			cy.findByRole('button', {
				name: /clear/i,
			}).click();

			cy.get('@valuePreview').should('not.have.text');
		});

		it('Has Global Color', function () {
			cy.findByRole('button', { name: /global colors/i }).click();
			cy.findByRole('link', { name: /extra color 1/i }).click();
			cy.get('@valuePreview').click().should('have.text', 'var(--nv-c-1)');
		});

		it('Change Color format', function () {
			cy.get('.color').click();

			cy.findByRole('button', {
				name: /change color format/i,
			}).click();
			cy.findByRole('spinbutton', {
				name: /r/i,
			}).should('be.visible');
			cy.findByRole('spinbutton', {
				name: /g/i,
			}).should('be.visible');
			cy.findByRole('spinbutton', {
				name: /b/i,
			}).should('be.visible');
			cy.findByRole('spinbutton', {
				name: /a/i,
			}).should('be.visible');

			cy.findByRole('button', {
				name: /change color format/i,
			}).click();
			cy.findByRole('spinbutton', {
				name: /h/i,
			}).should('be.visible');
			cy.findByRole('spinbutton', {
				name: /s/i,
			}).should('be.visible');
			cy.findByRole('spinbutton', {
				name: /l/i,
			}).should('be.visible');
			cy.findByRole('spinbutton', {
				name: /a/i,
			}).should('be.visible');

			cy.findByRole('button', {
				name: /change color format/i,
			}).click();
			cy.findByRole('textbox', {
				name: /color value in hexadecimal/i,
			}).should('be.visible');
		});
	});

	context('No global color', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Color', 'No global');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Has no global colors', function () {
			cy.findByRole('button', { name: '/global colors/i' }).should('not.exist');

			cy.get('.color').click();
			cy.findByRole('textbox', {
				name: /color value in hexadecimal/i,
			})
				.clear()
				.type('#b41a1a');
			cy.get('@valuePreview').should('have.text', '#b41a1a');
		});
	});

	context('Default value for clear', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Color', 'With default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('Clear value to default', function () {
			cy.get('.color').click();
			cy.findByRole('button', {
				name: /clear/i,
			}).click();

			cy.get('@valuePreview').should('have.text', '#000000');
		});
	});
});
