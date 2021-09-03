describe('Presets Selector', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Presets Selector', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Search for a preset', function () {
			cy.findByRole('img', {
				name: /button item/i,
			});
			cy.findByRole('img', {
				name: /classic/i,
			});
			cy.findByRole('img', {
				name: /search field/i,
			});
			cy.findByRole('searchbox').type('button');
			cy.findByRole('img', {
				name: /button item/i,
			});
			cy.findByRole('img', {
				name: /classic/i,
			}).should('not.exist');
			cy.findByRole('img', {
				name: /search field/i,
			}).should('not.exist');
		});

		it('Select a preset from the list', function () {
			cy.get('@valuePreview').should('have.text', 'null');
			cy.findByRole('img', {
				name: /button item/i,
			}).click();
			cy.findByText(/"\{\\"theme_mod\\":\\"preset_value_1\\"\}"/i);
			cy.findByRole('img', {
				name: /classic/i,
			}).click();
			cy.findByText(/"\{\\"theme_mod\\":\\"preset_value_2\\"\}"/i);
			cy.findByRole('img', {
				name: /search field/i,
			}).click();
			cy.findByText(/"\{\\"theme_mod\\":\\"preset_value_3\\"\}"/i);
		});
	});
});
