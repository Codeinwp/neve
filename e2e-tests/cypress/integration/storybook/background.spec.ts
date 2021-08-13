describe('Background', function () {
	before(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Background', 'Default');
		});

		it('Manual color', function () {
			cy.get('.color').click();
			cy.get('.components-popover__content').should('be.be.visible');

			cy.findByRole('textbox', {
				name: /color value in hexadecimal/i,
			})
				.clear()
				.type('#f03bcd');
			cy.get('.value-previewer > pre').click().should('contain.text', '"colorValue": "#f03bcd"');
		});

		it('Global color', function () {
			cy.findByRole('button', {
				name: /global colors/i,
			}).click();
			cy.get('.nv-custom-palette-inner').should('be.visible');
			cy.findByRole('link', {
				name: /secondary accent/i,
			}).click();
			cy.get('.value-previewer > pre')
				.click()
				.should('contain.text', '"colorValue": "var(--nv-secondary-accent)"');
		});
	});
});
