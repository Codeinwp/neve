describe('Header Builder Padding Control', () => {
	before(() => {
		// Login to wp and redirect to customizer.
		cy.goToCustomizer();
		cy.aliasRestRoutes();

		// Open customizer panel.
		cy.get('#accordion-panel-hfg_header').should('be.visible').click();

		// Check if Logo and Site title component is visible and click it.
		cy.get(
			'.hfg--builder-show .hfg--panel-desktop .hfg--row-main .grid-stack-item[title="Logo & Site Identity"]',
		)
			.should('be.visible')
			.click();

		// Switch to layout tab.
		cy.get('#customize-control-logo_tabs [data-tab="layout"]').should('be.visible').click();

		// Link values
		cy.get('#customize-control-logo_component_padding button.link').click();

		// Increase Top Padding value
		cy.get('#customize-control-logo_component_padding .top-input')
			.click()
			.type(
				'{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}',
			)
			.trigger('change');

		// Check if linked values
		cy.get('#customize-control-logo_component_padding .top-input').should('have.value', '30');
		cy.get('#customize-control-logo_component_padding  .bottom-input').should('have.value', '30');
		cy.get('#customize-control-logo_component_padding .left-input').should('have.value', '30');
		cy.get('#customize-control-logo_component_padding .right-input').should('have.value', '30');

		// Click on Reset button
		cy.get('#customize-control-logo_component_padding button.reset').click();

		// Check if Reset button works
		cy.get('#customize-control-logo_component_padding .top-input').should('have.value', '10');
		cy.get('#customize-control-logo_component_padding .right-input').should('have.value', '0');
		cy.get('#customize-control-logo_component_padding .bottom-input').should('have.value', '10');
		cy.get('#customize-control-logo_component_padding .left-input').should('have.value', '0');

		// Unlink values
		cy.get('#customize-control-logo_component_padding button.link').click();

		// Increase Top Padding value
		cy.get('#customize-control-logo_component_padding .top-input')
			.click()
			.type('{uparrow}')
			.trigger('change');

		// Decrease Bottom Padding value
		cy.get('#customize-control-logo_component_padding .bottom-input')
			.click()
			.type('{downarrow}')
			.trigger('change');

		cy.get('#save').click();
	});

	it('Sets up Padding for the Logo Component', () => {
		cy.wait('@customizerSave').then((interception) => {
			expect(interception.response.body.success).to.be.true;
			expect(interception.response.statusCode).to.equal(200);
			cy.checkPaddingFrontEnd();
		});
	});
});
