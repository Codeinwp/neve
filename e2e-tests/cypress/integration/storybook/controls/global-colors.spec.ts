describe('Global Colors', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Global Colors', 'Default');
			cy.get('.value-previewer > :nth-child(2)').as('currentPalette');
			cy.get('.value-previewer > :nth-child(5)').as('allPalettes');
			cy.get('.value-previewer > :nth-child(8)').as('currentPaletteValue');
		});

		it('Switches to Dark Mode and back to Base palette', function () {
			cy.findByText(/dark mode/i).click();
			cy.get('@currentPalette').should('have.text', 'darkMode');
			cy.findByRole('button', {
				name: /base/i,
			}).click();
			cy.get('@currentPalette').should('have.text', 'base');
		});

		it('Creates a new palette', function () {
			cy.findByRole('button', {
				name: /add custom palette/i,
			}).click();
			cy.findByRole('textbox').type('New Palette');
			cy.findByRole('button', {
				name: /add/i,
			}).click();
			cy.get('@allPalettes').should('have.text', '["base","darkMode","newPalette"]');
			cy.get('@currentPalette').should('have.text', 'newPalette');
		});

		it('Resets colors to default', function () {
			cy.get(':nth-child(1) > .components-dropdown > .components-button > .color').click();
			cy.findByRole('textbox', {
				name: /color value in hexadecimal/i,
			})
				.clear()
				.type('#ab330f');
			cy.findByText(/secondary accent/i).click();
			cy.get(':nth-child(2) > .components-dropdown > .components-button > .color').click();
			cy.findByRole('textbox', {
				name: /color value in hexadecimal/i,
			})
				.clear()
				.type('#000333');

			cy.findByText(
				/\{ "nv\-primary\-accent": "#ab330f", "nv\-secondary\-accent": "#000333", "nv\-site\-bg": "#ffffff", "nv\-light\-bg": "#ededed", "nv\-dark\-bg": "#14171c", "nv\-text\-color": "#393939", "nv\-text\-dark\-bg": "#ffffff", "nv\-c\-1": "#77b978", "nv\-c\-2": "#f37262" \}/i,
			);
			cy.findByRole('button', {
				name: /reset all to default/i,
			})
				.click()
				.should('be.disabled');
			cy.findByText(
				/\{ "nv\-primary\-accent": "#0366d6", "nv\-secondary\-accent": "#0e509a", "nv\-site\-bg": "#ffffff", "nv\-light\-bg": "#ededed", "nv\-dark\-bg": "#14171c", "nv\-text\-color": "#393939", "nv\-text\-dark\-bg": "#ffffff", "nv\-c\-1": "#77b978", "nv\-c\-2": "#f37262" \}/i,
			);
		});
	});

	context('All Palettes', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Global colors', 'All Palettes');
			cy.get('.value-previewer > :nth-child(2)').as('currentPalette');
			cy.get('.value-previewer > :nth-child(5)').as('allPalettes');
			cy.get('.value-previewer > :nth-child(8)').as('currentPaletteValue');
		});

		it('Can not add a new pallete', function () {
			cy.findByRole('button', {
				name: /add custom palette/i,
			}).should('be.disabled');
			cy.get('@allPalettes').should(
				'have.text',
				'["base","darkMode","palette3","palette4","palette5","palette6"]',
			);
		});
		it('Removes Palette 4', function () {
			cy.findByText(/palette 4/i).realHover();
			cy.findByRole('button', {
				name: /remove palette/i,
			}).click({ force: true });
			cy.findByRole('button', {
				name: /delete/i,
			}).click({ force: true });
			cy.get('@allPalettes').should(
				'have.text',
				'["base","darkMode","palette3","palette5","palette6"]',
			);
		});
	});
});
