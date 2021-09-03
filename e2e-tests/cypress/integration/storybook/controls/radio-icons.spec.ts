describe('Radio Icons', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Text', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Text');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Radio icons are only text', function () {
			cy.findByRole('button', {
				name: /two/i,
			}).click();
			cy.get('.active').should('have.text', 'Two');
			cy.get('@valuePreview').should('have.text', 'two');

			cy.findByRole('button', {
				name: /one/i,
			}).click();
			cy.get('.active').should('have.text', 'One');
			cy.get('@valuePreview').should('have.text', 'one');

			cy.findByRole('button', {
				name: /three/i,
			}).click();
			cy.get('.active').should('have.text', 'Three');
			cy.get('@valuePreview').should('have.text', 'three');

			cy.findByRole('button', {
				name: /four/i,
			}).click();
			cy.get('.active').should('have.text', 'Four');
			cy.get('@valuePreview').should('have.text', 'four');
		});
	});

	context('Included Icons', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Included Icons');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Radio icons have the included icons with standard size', function () {
			cy.get('.components-button > svg').should('have.css', 'width', '20px');
			cy.get('label').should('not.exist');
		});
	});

	context('Included Icons With Labels', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Included Icons With Labels');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('Radio icons have the included icons and label', function () {
			cy.get('.components-button > svg').should('have.css', 'width', '20px');
			cy.get('label');
			cy.findByText(/logo only/i);
			cy.findByText(/logo on title/i);
			cy.findByText(/logo & title/i);
			cy.findByText(/title & logo/i);
		});
	});

	context('Large Icons', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Large Icons');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('Radio icons have the included icons with large size', function () {
			cy.get('.components-button > svg').should('have.css', 'width', '40px');
			cy.get('label').should('not.exist');
		});
	});

	context('Editor Icons', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Editor Icons');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('Radio icons use the editor icons without label', function () {
			cy.get('.components-button > svg').should('have.css', 'width', '20px');

			cy.findByRole('button', {
				name: /up/i,
			}).click();
			cy.get('.active').should('have.attr', 'aria-label', 'Up');
			cy.get('@valuePreview').should('have.text', 'Up');

			cy.findByRole('button', {
				name: /down/i,
			}).click();
			cy.get('.active').should('have.attr', 'aria-label', 'Down');
			cy.get('@valuePreview').should('have.text', 'Down');

			cy.findByRole('button', {
				name: /left/i,
			}).click();
			cy.get('.active').should('have.attr', 'aria-label', 'Left');
			cy.get('@valuePreview').should('have.text', 'Left');

			cy.findByRole('button', {
				name: /right/i,
			}).click();
			cy.get('.active').should('have.attr', 'aria-label', 'Right');
			cy.get('@valuePreview').should('have.text', 'Right');
			cy.get('label').should('not.exist');
		});
	});

	context('With Labels', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'With Labels');
		});
		it('Radio icons use the editor icons with label', function () {
			cy.get('.components-button > svg').should('have.css', 'width', '20px');
			cy.get('label');
			cy.findByText(/up/i);
			cy.findByRole('button', {
				name: /up/i,
			}).click();
			cy.findByText(/down/i);
			cy.findByText(/left/i);
			cy.findByText(/Right/i);
		});
	});
});
