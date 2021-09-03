describe('Background', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Background', 'Default');
			//ensure the default value before testing
			cy.findByText(
				/\{ "type": "color", "imageurl": "static\/media\/classic\.5ede5833\.jpg", "focuspoint": \{ "x": 0\.5, "y": 0\.5 \}, "colorvalue": "#ffffff", "overlaycolorvalue": "", "overlayopacity": 50, "fixed": false, "usefeatured": false \}/i,
			);
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Manual color', function () {
			cy.get('.color').click();
			cy.get('.components-popover__content').should('be.be.visible');

			cy.findByRole('textbox', {
				name: /color value in hexadecimal/i,
			})
				.clear()
				.type('#f03bcd');
			cy.get('@valuePreview')
				.click()
				.should('contain.text', '"colorValue": "#f03bcd"')
				.and('contain.text', '"type": "color"');
		});

		it('Global color', function () {
			cy.findByRole('button', {
				name: /global colors/i,
			}).click();
			cy.get('.nv-custom-palette-inner').should('be.visible');
			cy.findByRole('link', {
				name: /secondary accent/i,
			}).click();
			cy.get('@valuePreview')
				.click()
				.should('contain.text', '"colorValue": "var(--nv-secondary-accent)"')
				.and('contain.text', '"type": "color"');
		});

		it.only('Image', function () {
			cy.findByRole('button', {
				name: /image/i,
			}).click();
			cy.findByText(
				/\{ "type": "image", "imageurl": "static\/media\/classic\.5ede5833\.jpg", "focuspoint": \{ "x": 0\.5, "y": 0\.5 \}, "colorvalue": "#ffffff", "overlaycolorvalue": "", "overlayopacity": 50, "fixed": false, "usefeatured": false \}/i,
			);

			cy.findByRole('checkbox', {
				name: /use featured image/i,
			}).check();
			cy.get('@valuePreview').should('contain.text', '"useFeatured": true');

			cy.findByRole('button', { name: /remove fallback image/i });

			cy.findByRole('spinbutton', {
				name: /left/i,
			})
				.clear()
				.type('20');
			cy.findByRole('spinbutton', {
				name: /top/i,
			})
				.clear()
				.type('40');

			cy.get('@valuePreview')
				.should('contain.text', `"x": "0.20"`)
				.and('contain.text', `"y": "0.40"`);

			cy.findByRole('checkbox', {
				name: /fixed background/i,
			}).check();
			cy.get('@valuePreview').should('contain.text', '"fixed": true,');

			cy.get('.color').click();
			cy.get('.components-popover__content').should('be.be.visible');
			cy.findByRole('textbox', {
				name: /color value in hexadecimal/i,
			})
				.clear()
				.type('#a03fe2');
			cy.get('@valuePreview')
				.click()
				.should('contain.text', '"overlayColorValue": "#a03fe2"')
				.and('contain.text', '"type": "image"');

			cy.findByRole('button', {
				name: /global colors/i,
			}).click();
			cy.get('.nv-custom-palette-inner').should('be.visible');
			cy.findByRole('link', {
				name: /light background/i,
			}).click();
			cy.get('@valuePreview')
				.click()
				.should('contain.text', '"overlayColorValue": "var(--nv-light-bg)"')
				.and('contain.text', '"type": "image"');

			cy.findByRole('spinbutton', {
				name: /overlay opacity/i,
			})
				.clear()
				.type('85');
			cy.get('@valuePreview').should('contain.text', '"overlayOpacity": 85');
		});
	});
});
