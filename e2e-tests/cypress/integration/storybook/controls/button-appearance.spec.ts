describe('Button Appearance', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Button-Appearance', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('Default settings', function () {
			cy.findByText(
				/\{ "type": "fill", "background": "#cccccc", "backgroundhover": "#333333", "text": "#000000", "texthover": "#ffffff", "borderradius": \{ "top": 10, "bottom": 10, "right": 10, "left": 10 \}, "borderwidth": \{ "top": 1, "bottom": 1, "right": 1, "left": 1 \}, "useshadow": false, "shadowcolor": "rgba\(0,0,0,0.5\)", "shadowproperties": \{ "blur": 5, "width": 0, "height": 0 \}, "useshadowhover": false, "shadowcolorhover": "rgba\(0,0,0,0.5\)", "shadowpropertieshover": \{ "blur": 5, "width": 0, "height": 0 \} \}/i,
			);
		});
	});

	context('No Hover', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Button-Appearance', 'No Hover');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('No Hover option', function () {
			cy.findByRole('button', {
				name: /hover/i,
			}).should('not.exist');

			cy.get(
				':nth-child(1) > .neve-control-header > :nth-child(3) > .components-button > .color',
			).click();
			cy.findByRole('textbox', {
				name: /color value in hexadecimal/i,
			})
				.clear()
				.type('#009dbc');
			cy.get('@valuePreview')
				.click()
				.should('contain.text', '"background": "#009dbc"')
				.and('contain.text', '"backgroundHover": "#333333"')
				.and('contain.text', '"textHover": "#ffffff"');

			cy.get(
				':nth-child(2) > .neve-control-header > :nth-child(3) > .components-button > .color',
			).click();
			cy.findByRole('textbox', {
				name: /color value in hexadecimal/i,
			})
				.clear()
				.type('#8822ad');
			cy.get('@valuePreview')
				.click()
				.should('contain.text', '"text": "#8822ad"')
				.and('contain.text', '"backgroundHover": "#333333"')
				.and('contain.text', '"textHover": "#ffffff"');
		});
	});
	context('Empty', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Button-Appearance', 'Empty Values');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('Empty value', function () {
			cy.findByRole('button', {
				name: /normal/i,
			}).should('not.exist');

			cy.findByRole('button', {
				name: /hover/i,
			}).should('not.exist');

			cy.findByText(
				/\{ "type": "", "background": "", "backgroundhover": "", "text": "", "texthover": "", "borderradius": \{ "top": "", "bottom": "", "right": "", "left": "" \}, "borderwidth": \{ "top": "", "bottom": "", "right": "", "left": "" \}, "useShadow": false, "shadowColor": "", "shadowProperties": \{ "blur": "", "width": "", "height": "" \}, "useShadowHover": false, "shadowColorHover": "", "shadowPropertiesHover": \{ "blur": "", "width": "", "height": "" \} \}/i,
			);
		});
	});
});
